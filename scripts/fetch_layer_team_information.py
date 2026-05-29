#!/usr/bin/env python3
"""Fetch current Squad layer factions and unit types from squadutils.org.

Default usage updates every layer object in data/layers.js in-place:
    python3 scripts/fetch_layer_team_information.py

Single-layer inspection is still available:
    python3 scripts/fetch_layer_team_information.py Sumari_Seed_v1
    python3 scripts/fetch_layer_team_information.py Sumari_Seed_v1 --json
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any

DEFAULT_API_URL = "https://squadutils.org/api/v1/teamInformation"
DEFAULT_TIMEOUT_SECONDS = 20
DEFAULT_LAYER_DATA = Path("data/layers.js")
DEFAULT_DELAY_SECONDS = 0.05
FACTION_ALIASES = {"MEI": "INS"}



def build_url(api_url: str, layer_id: str) -> str:
    """Build a teamInformation endpoint URL for the requested layer."""
    parts = urllib.parse.urlsplit(api_url)
    query = urllib.parse.parse_qsl(parts.query, keep_blank_values=True)
    query = [(key, value) for key, value in query if key != "layerId"]
    query.append(("layerId", layer_id))
    return urllib.parse.urlunsplit(parts._replace(query=urllib.parse.urlencode(query)))


def fetch_layer_information(api_url: str, layer_id: str, timeout: int) -> dict[str, Any]:
    """Download and decode layer team information from the API."""
    url = build_url(api_url, layer_id)
    request = urllib.request.Request(url, headers={"Accept": "application/json"})

    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            charset = response.headers.get_content_charset() or "utf-8"
            payload = response.read().decode(charset)
    except urllib.error.HTTPError as error:
        details = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"API returned HTTP {error.code} for {layer_id}: {details}") from error
    except urllib.error.URLError as error:
        raise RuntimeError(f"Could not reach API for {layer_id}: {error.reason}") from error
    except TimeoutError as error:
        raise RuntimeError(f"Timed out after {timeout}s while fetching {layer_id}") from error

    try:
        data = json.loads(payload)
    except json.JSONDecodeError as error:
        snippet = payload[:300].replace("\n", " ")
        raise RuntimeError(f"API response is not valid JSON for {layer_id}: {snippet}") from error

    if not isinstance(data, dict):
        raise RuntimeError(f"API response for {layer_id} must be a JSON object")

    return data


def canonical_faction_code(faction_name: str) -> str:
    """Return the command faction code used by this app for API aliases."""
    return FACTION_ALIASES.get(faction_name, faction_name)


def canonical_full_unit_name(full_unit_name: str, faction_name: str) -> str:
    """Keep API battlegroup names aligned with canonical faction codes."""
    canonical_name = canonical_faction_code(faction_name)
    if canonical_name != faction_name and full_unit_name.startswith(f"{faction_name}_"):
        return f"{canonical_name}_{full_unit_name[len(faction_name) + 1:]}"
    return full_unit_name


def normalize_team_information(data: dict[str, Any]) -> dict[str, list[dict[str, Any]]]:
    """Keep only the fields the web app needs from squadutils team data."""
    normalized: dict[str, list[dict[str, Any]]] = {}
    teams = data.get("teams")
    if not isinstance(teams, dict):
        return normalized

    for team_id, factions in teams.items():
        if not isinstance(factions, list):
            continue

        factions_by_name: dict[str, dict[str, Any]] = {}
        for faction in factions:
            if not isinstance(faction, dict):
                continue

            api_faction_name = str(faction.get("name") or "").strip()
            if not api_faction_name:
                continue

            faction_name = canonical_faction_code(api_faction_name)
            normalized_faction = factions_by_name.setdefault(faction_name, {"name": faction_name, "allowedUnitTypes": []})
            existing_unit_keys = {unit["key"] for unit in normalized_faction["allowedUnitTypes"]}

            for unit in faction.get("allowedUnitTypes") or []:
                if not isinstance(unit, dict):
                    continue

                unit_key = str(unit.get("key") or "").strip()
                if not unit_key or unit_key in existing_unit_keys:
                    continue

                full_unit_name = str(unit.get("fullUnitName") or "").strip()
                normalized_faction["allowedUnitTypes"].append(
                    {
                        "key": unit_key,
                        "prettyName": str(unit.get("prettyName") or unit_key).strip(),
                        "fullUnitName": canonical_full_unit_name(full_unit_name, api_faction_name),
                    }
                )
                existing_unit_keys.add(unit_key)

        normalized[str(team_id)] = list(factions_by_name.values())

    return normalized


def find_maps_array_bounds(source: str) -> tuple[int, int]:
    """Return source bounds for the JavaScript maps array literal."""
    match = re.search(r"const\s+maps\s*=\s*\[", source)
    if not match:
        raise RuntimeError("Could not find `const maps = [` in the layer data file")

    start = match.end() - 1
    depth = 0
    in_string = False
    escape = False

    for index in range(start, len(source)):
        char = source[index]

        if in_string:
            if escape:
                escape = False
            elif char == "\\":
                escape = True
            elif char == '"':
                in_string = False
            continue

        if char == '"':
            in_string = True
        elif char == "[":
            depth += 1
        elif char == "]":
            depth -= 1
            if depth == 0:
                return start, index + 1

    raise RuntimeError("Could not find the end of the maps array in the layer data file")


def load_maps(script_path: Path) -> tuple[str, list[dict[str, Any]], int, int]:
    """Read the layer data file and parse the maps array."""
    source = script_path.read_text(encoding="utf-8")
    start, end = find_maps_array_bounds(source)
    try:
        maps = json.loads(source[start:end])
    except json.JSONDecodeError as error:
        raise RuntimeError(f"Could not parse maps array as JSON: {error}") from error

    if not isinstance(maps, list):
        raise RuntimeError("The maps array must contain a JSON list")

    return source, maps, start, end


def update_script_maps(
    script_path: Path,
    api_url: str,
    timeout: int,
    delay: float,
    dry_run: bool,
) -> int:
    """Fetch team information for every layer in the layer data file and rewrite the maps array."""
    source, maps, start, end = load_maps(script_path)
    total = len(maps)

    for index, layer in enumerate(maps, start=1):
        if not isinstance(layer, dict):
            raise RuntimeError(f"Map entry #{index} is not an object")

        layer_id = str(layer.get("layer") or "").strip()
        if not layer_id:
            raise RuntimeError(f"Map entry #{index} does not have a layer value")

        print(f"[{index}/{total}] Fetching {layer_id}...", file=sys.stderr)
        layer.pop("allowedUnitTypes", None)
        try:
            data = fetch_layer_information(api_url, layer_id, timeout)
        except RuntimeError as error:
            print(f"Warning: {error}; writing empty teams for {layer_id}.", file=sys.stderr)
            layer["teams"] = {}
        else:
            layer["teams"] = normalize_team_information(data)

        if delay > 0 and index < total:
            time.sleep(delay)

    updated_maps = json.dumps(maps, ensure_ascii=False, indent=2)
    updated_source = source[:start] + updated_maps + source[end:]

    if dry_run:
        print(f"Dry run: {script_path} was not changed.", file=sys.stderr)
    else:
        script_path.write_text(updated_source, encoding="utf-8")
        print(f"Updated {total} layers in {script_path}.", file=sys.stderr)

    return total


def unit_label(unit: dict[str, Any]) -> str:
    """Format one allowedUnitTypes item for terminal output."""
    pretty_name = str(unit.get("prettyName") or unit.get("key") or "Unknown")
    full_unit_name = unit.get("fullUnitName")
    key = unit.get("key")

    details = []
    if key:
        details.append(str(key))
    if full_unit_name:
        details.append(str(full_unit_name))

    return f"{pretty_name} ({', '.join(details)})" if details else pretty_name


def summarize_layer(data: dict[str, Any], layer_id: str) -> str:
    """Create a readable summary of factions and doctrines by team."""
    layer_title = "_".join(
        str(data.get(key, "")).strip()
        for key in ("name", "gameMode", "version")
        if str(data.get(key, "")).strip()
    )
    header = layer_title or layer_id
    lines = [f"Layer: {header}"]

    teams = data.get("teams")
    if not isinstance(teams, dict) or not teams:
        lines.append("No team information found in API response.")
        return "\n".join(lines)

    for team_id in sorted(teams, key=lambda value: int(value) if str(value).isdigit() else str(value)):
        factions = teams[team_id]
        lines.append("")
        lines.append(f"Team {team_id}:")

        if not isinstance(factions, list) or not factions:
            lines.append("  - No factions")
            continue

        for faction in factions:
            if not isinstance(faction, dict):
                continue

            faction_name = str(faction.get("name") or "Unknown")
            units = faction.get("allowedUnitTypes")
            if isinstance(units, list) and units:
                unit_text = "; ".join(unit_label(unit) for unit in units if isinstance(unit, dict))
            else:
                unit_text = "No unit types"

            lines.append(f"  - {faction_name}: {unit_text}")

    return "\n".join(lines)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Update the layer data file with current Squad layer factions/doctrines from squadutils.org. "
            "Pass a layer id to inspect just one layer."
        )
    )
    parser.add_argument("layer_id", nargs="?", help="Optional LayerName/layerId to inspect, for example: Sumari_Seed_v1")
    parser.add_argument(
        "--layer-data",
        "--script-js",
        dest="script_js",
        type=Path,
        default=DEFAULT_LAYER_DATA,
        help=f"path to the layer data file for full updates (default: {DEFAULT_LAYER_DATA})",
    )
    parser.add_argument(
        "--api-url",
        default=DEFAULT_API_URL,
        help=f"teamInformation endpoint URL (default: {DEFAULT_API_URL})",
    )
    parser.add_argument(
        "--timeout",
        type=int,
        default=DEFAULT_TIMEOUT_SECONDS,
        help=f"request timeout in seconds (default: {DEFAULT_TIMEOUT_SECONDS})",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=DEFAULT_DELAY_SECONDS,
        help=f"delay between full-update API requests in seconds (default: {DEFAULT_DELAY_SECONDS})",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="fetch all layer data but do not write the layer data file",
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="with layer_id: print raw API JSON instead of a human-readable summary",
    )
    parser.add_argument(
        "--output",
        help="with layer_id: save raw API JSON to this file path",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    try:
        if not args.layer_id:
            update_script_maps(args.script_js, args.api_url, args.timeout, args.delay, args.dry_run)
            return 0

        data = fetch_layer_information(args.api_url, args.layer_id, args.timeout)
    except RuntimeError as error:
        print(f"Error: {error}", file=sys.stderr)
        return 1

    if args.output:
        with open(args.output, "w", encoding="utf-8") as output_file:
            json.dump(data, output_file, ensure_ascii=False, indent=2)
            output_file.write("\n")

    if args.json:
        print(json.dumps(data, ensure_ascii=False, indent=2))
    else:
        print(summarize_layer(data, args.layer_id))

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
