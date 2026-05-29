#!/usr/bin/env python3
"""Fetch current Squad layer factions and unit types from squadutils.org.

Examples:
    python3 scripts/fetch_layer_team_information.py Sumari_Seed_v1
    python3 scripts/fetch_layer_team_information.py Sumari_Seed_v1 --json
    python3 scripts/fetch_layer_team_information.py Sumari_Seed_v1 --output sumari.json
"""

from __future__ import annotations

import argparse
import json
import sys
import urllib.error
import urllib.parse
import urllib.request
from typing import Any

DEFAULT_API_URL = "https://squadutils.org/api/v1/teamInformation"
DEFAULT_TIMEOUT_SECONDS = 20


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
        description="Fetch current available factions and doctrines for a Squad layer from squadutils.org."
    )
    parser.add_argument("layer_id", help="LayerName/layerId, for example: Sumari_Seed_v1")
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
        "--json",
        action="store_true",
        help="print raw API JSON instead of a human-readable summary",
    )
    parser.add_argument(
        "--output",
        help="save raw API JSON to this file path",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    try:
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
