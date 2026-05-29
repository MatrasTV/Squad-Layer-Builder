"use strict";

const translations = {
  ru: {
    documentTitle: "LayerForge · Squad Layer Builder",
    languageToggleAria: "Переключить язык на английский",
    languageCurrent: "Русский",
    languageOther: "English",
    projectName: "Squad Layer Builder",
    subtitle: "Генератор AdminChangeLayer команд для Squad",
    waitingStatus: "Ожидание выбора",
    readyStatus: "Команда готова",
    formatHint: "AdminChangeLayer <LayerName> <Faction> <Faction>",
    waitingCommand: "Выберите карту, режим и обе фракции, чтобы сгенерировать команду",
    copyButton: "Скопировать команду",
    copiedButton: "Скопировано!",
    swapButton: "Поменять фракции",
    resetButton: "Сбросить",
    stepOne: "Шаг 01",
    stepTwo: "Шаг 02",
    stepThree: "Шаг 03",
    mapsTitle: "Выберите карту",
    modeTitle: "Выберите режим и слой",
    setupTitle: "Выберите фракции",
    manualLayerLabel: "Ручной LayerName",
    manualLayerPlaceholder: "Пример: Sumari_Seed_v1",
    clearButton: "Очистить",
    manualLayerHelp: "Если поле заполнено, оно используется вместо выбранного слоя.",
    factionOneTitle: "Фракция 1",
    factionTwoTitle: "Фракция 2",
    factionLabel: "Фракция",
    unitLabel: "Battlegroup / тип подразделения",
    restrictionNote: "Некоторые слои могут ограничивать фракции или battlegroups в зависимости от текущей версии Squad.",
    quickPick: "Быстрый выбор",
    popularTitle: "Популярные слои",
    searchLabel: "Поиск карт",
    searchPlaceholder: "Поиск по карте, LayerName или режиму",
    modeFiltersAria: "Фильтры режимов слоёв",
    noLayers: "Слои не найдены",
    footerText: "Сделано для администраторов серверов Squad",
    selectFaction: "Выберите фракцию",
    noUnitType: "Без типа подразделения",
    noMapImage: "Нет изображения карты",
    sameFactionWarning: "Предупреждение: обе стороны используют одну фракцию. Обычно слои Squad рассчитаны на разные игровые фракции.",
    selectMapAria: "Выбрать карту",
    selectLayerAria: "Выбрать слой",
    selectFactionAria: "Выбрать фракцию",
    minimapAlt: "миникарта",
    backToMaps: "Назад к картам",
    backToModes: "Назад к режимам",
    selectedMap: "Карта",
    selectedLayer: "Слой",
    layersCount: "слоёв",
    modesCount: "режимов",
    chooseModeHint: "Теперь выберите режим и конкретный LayerName для этой карты.",
    chooseFactionHint: "Теперь выберите две фракции. Доступные Unit Types обновятся автоматически.",
    modeLabels: { All: "Все", AAS: "AAS", RAAS: "RAAS", Invasion: "Invasion", Seed: "Seed", Skirmish: "Skirmish", TC: "TC", Destruction: "Destruction", Insurgency: "Insurgency" },
  },
  en: {
    documentTitle: "LayerForge · Squad Layer Builder",
    languageToggleAria: "Switch language to Russian",
    languageCurrent: "English",
    languageOther: "Русский",
    projectName: "Squad Layer Builder",
    subtitle: "AdminChangeLayer command builder for Squad",
    waitingStatus: "Waiting for selection",
    readyStatus: "Command ready",
    formatHint: "AdminChangeLayer <LayerName> <Faction> <Faction>",
    waitingCommand: "Select a map, layer mode, and both factions to generate command",
    copyButton: "Copy command",
    copiedButton: "Copied!",
    swapButton: "Swap factions",
    resetButton: "Reset",
    stepOne: "Step 01",
    stepTwo: "Step 02",
    stepThree: "Step 03",
    mapsTitle: "Choose a map",
    modeTitle: "Choose mode and layer",
    setupTitle: "Choose factions",
    manualLayerLabel: "Manual LayerName override",
    manualLayerPlaceholder: "Example: Sumari_Seed_v1",
    clearButton: "Clear",
    manualLayerHelp: "If this field is filled, it is used instead of the selected layer.",
    factionOneTitle: "Faction 1",
    factionTwoTitle: "Faction 2",
    factionLabel: "Faction",
    unitLabel: "Battlegroup / Unit type",
    restrictionNote: "Some layers may restrict factions or battlegroups depending on the current Squad version.",
    quickPick: "Quick pick",
    popularTitle: "Popular layers",
    searchLabel: "Search maps",
    searchPlaceholder: "Search by map, LayerName, or mode",
    modeFiltersAria: "Layer mode filters",
    noLayers: "No layers found",
    footerText: "Made for Squad server admins",
    selectFaction: "Select faction",
    noUnitType: "No unit type",
    noMapImage: "No map image",
    sameFactionWarning: "Warning: both sides use the same faction. Squad layers usually expect opposing playable factions.",
    selectMapAria: "Select map",
    selectLayerAria: "Select layer",
    selectFactionAria: "Select faction",
    minimapAlt: "minimap",
    backToMaps: "Back to maps",
    backToModes: "Back to modes",
    selectedMap: "Map",
    selectedLayer: "Layer",
    layersCount: "layers",
    modesCount: "modes",
    chooseModeHint: "Now choose the mode and exact LayerName for this map.",
    chooseFactionHint: "Now choose two factions. Available Unit Types update automatically.",
    modeLabels: { All: "All", AAS: "AAS", RAAS: "RAAS", Invasion: "Invasion", Seed: "Seed", Skirmish: "Skirmish", TC: "TC", Destruction: "Destruction", Insurgency: "Insurgency" },
  },
};

const state = {
  selectedMapName: "",
  selectedLayer: "",
  manualLayer: "",
  factionOne: "",
  factionTwo: "",
  unitOne: "",
  unitTwo: "",
  search: "",
  mode: "All",
  language: "ru",
};

const elements = {
  mapGrid: document.getElementById("mapGrid"),
  layerGrid: document.getElementById("layerGrid"),
  emptyMessage: document.getElementById("emptyMessage"),
  emptyLayerMessage: document.getElementById("emptyLayerMessage"),
  mapSearch: document.getElementById("mapSearch"),
  modeFilters: document.getElementById("modeFilters"),
  popularLayers: document.getElementById("popularLayers"),
  modePanel: document.getElementById("modePanel"),
  factionsPanel: document.getElementById("factionsPanel"),
  selectedMapSummary: document.getElementById("selectedMapSummary"),
  selectedLayerSummary: document.getElementById("selectedLayerSummary"),
  backToMaps: document.getElementById("backToMaps"),
  backToModes: document.getElementById("backToModes"),
  manualLayer: document.getElementById("manualLayer"),
  clearManualLayer: document.getElementById("clearManualLayer"),
  factionOneGrid: document.getElementById("factionOneGrid"),
  factionTwoGrid: document.getElementById("factionTwoGrid"),
  unitOne: document.getElementById("unitOne"),
  unitTwo: document.getElementById("unitTwo"),
  commandPreview: document.getElementById("commandPreview"),
  commandStatus: document.getElementById("commandStatus"),
  warningBox: document.getElementById("warningBox"),
  copyButton: document.getElementById("copyButton"),
  swapButton: document.getElementById("swapButton"),
  resetButton: document.getElementById("resetButton"),
  languageToggle: document.getElementById("languageToggle"),
};

function t(key) {
  return translations[state.language]?.[key] || translations.ru[key] || key;
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.title = t("documentTitle");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria));
  });
}

function toggleLanguage() {
  state.language = state.language === "ru" ? "en" : "ru";
  applyTranslations();
  renderModeFilters();
  renderMapCards();
  renderLayerCards();
  renderFactionOptions();
  renderPopularLayers();
  updateWorkflowVisibility();
  generateCommand();
  saveState();
}

function getMapGroups() {
  const groups = new Map();
  maps.forEach((map) => {
    if (!groups.has(map.name)) {
      groups.set(map.name, {
        name: map.name,
        image: map.image,
        layers: [],
        modes: new Set(),
      });
    }
    const group = groups.get(map.name);
    group.layers.push(map);
    group.modes.add(map.mode);
  });
  return Array.from(groups.values()).map((group) => ({
    ...group,
    modes: Array.from(group.modes),
  }));
}

function getSelectedMap() {
  return maps.find((map) => map.layer === state.selectedLayer) || null;
}

function getSelectedMapGroup() {
  return getMapGroups().find((group) => group.name === state.selectedMapName) || null;
}

function getLayerName() {
  return state.manualLayer.trim() || state.selectedLayer;
}

function getActiveLayerData() {
  const layerName = getLayerName();
  return maps.find((map) => map.layer === layerName) || null;
}

function getTeamIdForSide(side) {
  return side === "one" || side === "unitOne" ? "1" : "2";
}

function fallbackUnitType(unitType) {
  return {
    key: unitType,
    prettyName: unitTypeLabels[unitType] || unitType,
    fullUnitName: "",
  };
}

function getFallbackTeamEntries() {
  return factions.map((faction) => ({
    name: faction.code,
    allowedUnitTypes: faction.unitTypes.map(fallbackUnitType),
  }));
}

function getTeamEntries(side) {
  const activeLayer = getActiveLayerData();
  const teamEntries = activeLayer?.teams?.[getTeamIdForSide(side)];
  return Array.isArray(teamEntries) && teamEntries.length > 0 ? teamEntries : getFallbackTeamEntries();
}

function getTeamFactionEntry(code, side) {
  return getTeamEntries(side).find((entry) => entry.name === code) || null;
}

function getFaction(code) {
  return factions.find((faction) => faction.code === code) || null;
}

function getFactionMetadata(code) {
  return getFaction(code) || {
    code,
    name: code,
    side: "Unknown",
    unitTypes: [],
    flag: `assets/flags/flag_${code}.png`,
  };
}

function getAvailableFactions(side) {
  return getTeamEntries(side).map((entry) => ({
    ...getFactionMetadata(entry.name),
    code: entry.name,
    allowedUnitTypes: Array.isArray(entry.allowedUnitTypes) ? entry.allowedUnitTypes : [],
  }));
}

function getAllowedUnitTypesForFaction(factionCode, side) {
  const teamEntry = getTeamFactionEntry(factionCode, side);
  if (teamEntry) {
    return Array.isArray(teamEntry.allowedUnitTypes) ? teamEntry.allowedUnitTypes : [];
  }

  const faction = getFaction(factionCode);
  return faction ? faction.unitTypes.map(fallbackUnitType) : [];
}

function factionCommandPart(code, unitType) {
  if (!code) return "";
  return unitType ? `${code}+${unitType}` : code;
}

function createOption(value, text) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  return option;
}

function createKeyboardButtonHandler(action) {
  return (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };
}

function renderModeFilters() {
  elements.modeFilters.innerHTML = "";
  modeFilters.forEach((mode) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-btn${state.mode === mode ? " active" : ""}`;
    button.textContent = t("modeLabels")[mode] || mode;
    button.addEventListener("click", () => {
      state.mode = mode;
      renderModeFilters();
      renderLayerCards();
      saveState();
    });
    elements.modeFilters.appendChild(button);
  });
}

function renderMapCards() {
  const query = state.search.trim().toLowerCase();
  const visibleMaps = getMapGroups().filter((group) => {
    const haystack = `${group.name} ${group.layers.map((layer) => `${layer.layer} ${layer.mode}`).join(" ")}`.toLowerCase();
    return !query || haystack.includes(query);
  });

  elements.mapGrid.innerHTML = "";
  elements.emptyMessage.hidden = visibleMaps.length > 0;

  visibleMaps.forEach((group) => {
    const card = document.createElement("article");
    card.className = `map-card${state.selectedMapName === group.name ? " selected" : ""}`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", String(state.selectedMapName === group.name));
    card.setAttribute("aria-label", `${t("selectMapAria")} ${group.name}`);

    const badge = document.createElement("span");
    badge.className = "mode-badge";
    badge.textContent = `${group.modes.length} ${t("modesCount")}`;

    const image = document.createElement("img");
    image.src = group.image;
    image.alt = `${group.name} ${t("minimapAlt")}`;
    image.loading = "lazy";
    image.addEventListener("error", () => replaceBrokenImage(image));

    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = `<h3 class="map-name">${escapeHtml(group.name)}</h3><p class="layer-name">${group.layers.length} ${escapeHtml(t("layersCount"))} · ${escapeHtml(group.modes.join(", "))}</p>`;

    const selectMap = () => {
      state.selectedMapName = group.name;
      state.selectedLayer = "";
      state.mode = "All";
      state.factionOne = "";
      state.factionTwo = "";
      state.unitOne = "";
      state.unitTwo = "";
      renderMapCards();
      renderModeFilters();
      renderLayerCards();
      renderFactionOptions();
      updateWorkflowVisibility(true);
      generateCommand();
      saveState();
    };

    card.addEventListener("click", selectMap);
    card.addEventListener("keydown", createKeyboardButtonHandler(selectMap));

    card.append(badge, image, body);
    elements.mapGrid.appendChild(card);
  });
}

function renderLayerCards() {
  const selectedGroup = getSelectedMapGroup();
  const selectedLayers = selectedGroup ? selectedGroup.layers : [];
  const visibleLayers = selectedLayers.filter((map) => state.mode === "All" || map.mode === state.mode);

  elements.layerGrid.innerHTML = "";
  elements.emptyLayerMessage.hidden = visibleLayers.length > 0;

  visibleLayers.forEach((map) => {
    const card = document.createElement("article");
    card.className = `layer-card${state.selectedLayer === map.layer ? " selected" : ""}`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", String(state.selectedLayer === map.layer));
    card.setAttribute("aria-label", `${t("selectLayerAria")} ${map.layer}`);

    card.innerHTML = `<span class="mode-badge layer-mode-badge">${escapeHtml(map.mode)}</span><h3>${escapeHtml(map.layer)}</h3><p>${escapeHtml(map.name)}</p>`;

    const selectLayer = () => {
      state.selectedLayer = map.layer;
      state.manualLayer = "";
      state.factionOne = "";
      state.factionTwo = "";
      state.unitOne = "";
      state.unitTwo = "";
      syncControlsFromState();
      renderLayerCards();
      renderFactionOptions();
      updateWorkflowVisibility(true);
      generateCommand();
      saveState();
    };

    card.addEventListener("click", selectLayer);
    card.addEventListener("keydown", createKeyboardButtonHandler(selectLayer));
    elements.layerGrid.appendChild(card);
  });
}

function replaceBrokenImage(image) {
  const placeholder = document.createElement("div");
  placeholder.className = "image-placeholder";
  placeholder.textContent = t("noMapImage");
  image.replaceWith(placeholder);
}

function renderFactionOptions() {
  renderFactionCards("one");
  renderFactionCards("two");
  updateUnitTypeOptions("unitOne");
  updateUnitTypeOptions("unitTwo");
}

function renderFactionCards(side) {
  const isFirst = side === "one";
  const grid = isFirst ? elements.factionOneGrid : elements.factionTwoGrid;
  const selectedCode = isFirst ? state.factionOne : state.factionTwo;
  const availableFactions = getAvailableFactions(side);
  grid.innerHTML = "";

  availableFactions.forEach((faction) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `faction-option${selectedCode === faction.code ? " selected" : ""}`;
    button.setAttribute("aria-pressed", String(selectedCode === faction.code));
    button.setAttribute("aria-label", `${t("selectFactionAria")} ${faction.name}`);
    button.innerHTML = `
      <img src="${escapeHtml(faction.flag)}" alt="${escapeHtml(faction.code)} flag" loading="lazy">
      <span><strong>${escapeHtml(faction.code)}</strong><small>${escapeHtml(faction.name)}</small></span>
    `;
    button.querySelector("img").addEventListener("error", (event) => {
      event.currentTarget.replaceWith(createFlagPlaceholder(faction.code));
    });
    button.addEventListener("click", () => {
      if (isFirst) {
        state.factionOne = faction.code;
        state.unitOne = "";
        updateUnitTypeOptions("unitOne");
      } else {
        state.factionTwo = faction.code;
        state.unitTwo = "";
        updateUnitTypeOptions("unitTwo");
      }
      renderFactionCards(side);
      generateCommand();
      saveState();
    });
    grid.appendChild(button);
  });
}

function createFlagPlaceholder(code) {
  const placeholder = document.createElement("span");
  placeholder.className = "flag-placeholder";
  placeholder.textContent = code.slice(0, 3);
  return placeholder;
}

function updateUnitTypeOptions(selectId) {
  const isFirst = selectId === "unitOne";
  const side = isFirst ? "one" : "two";
  const factionCode = isFirst ? state.factionOne : state.factionTwo;
  const unitSelect = isFirst ? elements.unitOne : elements.unitTwo;
  const selectedUnit = isFirst ? state.unitOne : state.unitTwo;
  const availableUnits = getAllowedUnitTypesForFaction(factionCode, side);
  const availableUnitKeys = availableUnits.map((unitType) => unitType.key);

  unitSelect.innerHTML = "";
  unitSelect.appendChild(createOption("", t("noUnitType")));

  availableUnits.forEach((unitType) => {
    unitSelect.appendChild(createOption(unitType.key, unitType.prettyName || unitTypeLabels[unitType.key] || unitType.key));
  });

  if (availableUnitKeys.includes(selectedUnit)) {
    unitSelect.value = selectedUnit;
  } else {
    unitSelect.value = "";
    if (isFirst) state.unitOne = "";
    else state.unitTwo = "";
  }
}

function updateWorkflowVisibility(scrollToActive = false) {
  const hasSelectedMap = Boolean(state.selectedMapName);
  const hasLayer = Boolean(getLayerName());

  elements.modePanel.hidden = !hasSelectedMap;
  elements.factionsPanel.hidden = !hasLayer;

  if (state.selectedMapName) {
    elements.selectedMapSummary.textContent = `${t("selectedMap")}: ${state.selectedMapName}. ${t("chooseModeHint")}`;
  } else {
    elements.selectedMapSummary.textContent = "";
  }

  if (hasLayer) {
    elements.selectedLayerSummary.textContent = `${t("selectedLayer")}: ${getLayerName()}. ${t("chooseFactionHint")}`;
  } else {
    elements.selectedLayerSummary.textContent = "";
  }

  if (scrollToActive) {
    const target = hasLayer ? elements.factionsPanel : elements.modePanel;
    if (target && !target.hidden) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function generateCommand() {
  const layerName = getLayerName();
  const factionOnePart = factionCommandPart(state.factionOne, state.unitOne);
  const factionTwoPart = factionCommandPart(state.factionTwo, state.unitTwo);
  const ready = Boolean(layerName && factionOnePart && factionTwoPart);

  updateWorkflowVisibility();

  if (!ready) {
    elements.commandPreview.textContent = t("waitingCommand");
    elements.commandStatus.textContent = t("waitingStatus");
    elements.commandStatus.className = "status-pill waiting";
    elements.copyButton.disabled = true;
  } else {
    elements.commandPreview.textContent = `AdminChangeLayer ${layerName} ${factionOnePart} ${factionTwoPart}`;
    elements.commandStatus.textContent = t("readyStatus");
    elements.commandStatus.className = "status-pill ready";
    elements.copyButton.disabled = false;
  }

  if (state.factionOne && state.factionTwo && state.factionOne === state.factionTwo) {
    elements.warningBox.hidden = false;
    elements.warningBox.textContent = t("sameFactionWarning");
  } else {
    elements.warningBox.hidden = true;
    elements.warningBox.textContent = "";
  }

  return ready ? elements.commandPreview.textContent : "";
}

async function copyCommand() {
  const command = generateCommand();
  if (!command) return;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(command);
    } else {
      fallbackCopy(command);
    }
    showCopiedState();
  } catch (error) {
    fallbackCopy(command);
    showCopiedState();
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function showCopiedState() {
  const originalText = t("copyButton");
  elements.copyButton.textContent = t("copiedButton");
  window.setTimeout(() => {
    elements.copyButton.textContent = originalText;
  }, 1500);
}

function resetForm() {
  state.selectedMapName = "";
  state.selectedLayer = "";
  state.manualLayer = "";
  state.factionOne = "";
  state.factionTwo = "";
  state.unitOne = "";
  state.unitTwo = "";
  state.search = "";
  state.mode = "All";
  syncControlsFromState();
  renderModeFilters();
  renderMapCards();
  renderLayerCards();
  renderFactionOptions();
  updateWorkflowVisibility();
  generateCommand();
  saveState();
}

function swapFactions() {
  [state.factionOne, state.factionTwo] = [state.factionTwo, state.factionOne];
  [state.unitOne, state.unitTwo] = [state.unitTwo, state.unitOne];
  renderFactionOptions();
  generateCommand();
  saveState();
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    // Browsers can block localStorage in private/sandboxed modes; the builder still works without persistence.
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (!saved || typeof saved !== "object") return;

    state.selectedMapName = getMapGroups().some((group) => group.name === saved.selectedMapName) ? saved.selectedMapName : "";
    state.selectedLayer = maps.some((map) => map.layer === saved.selectedLayer) ? saved.selectedLayer : "";
    if (!state.selectedMapName && state.selectedLayer) {
      state.selectedMapName = getSelectedMap()?.name || "";
    }
    state.manualLayer = typeof saved.manualLayer === "string" ? saved.manualLayer : "";
    state.factionOne = factions.some((faction) => faction.code === saved.factionOne) ? saved.factionOne : "";
    state.factionTwo = factions.some((faction) => faction.code === saved.factionTwo) ? saved.factionTwo : "";
    state.unitOne = typeof saved.unitOne === "string" ? saved.unitOne : "";
    state.unitTwo = typeof saved.unitTwo === "string" ? saved.unitTwo : "";
    state.search = typeof saved.search === "string" ? saved.search : "";
    state.mode = modeFilters.includes(saved.mode) ? saved.mode : "All";
    state.language = saved.language === "en" ? "en" : "ru";
  } catch (error) {
    // Ignore old or broken saved data so the static page never crashes on load.
  }
}

function syncControlsFromState() {
  elements.manualLayer.value = state.manualLayer;
  elements.mapSearch.value = state.search;
  updateUnitTypeOptions("unitOne");
  updateUnitTypeOptions("unitTwo");
}

function renderPopularLayers() {
  elements.popularLayers.innerHTML = "";
  popularLayerNames
    .map((layerName) => maps.find((map) => map.layer === layerName))
    .filter(Boolean)
    .forEach((map) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "popular-btn";
      button.innerHTML = `<strong>${escapeHtml(map.name)}</strong><span>${escapeHtml(map.layer)} · ${escapeHtml(t("modeLabels")[map.mode] || map.mode)}</span>`;
      button.addEventListener("click", () => {
        state.selectedMapName = map.name;
        state.selectedLayer = map.layer;
        state.manualLayer = "";
        state.mode = "All";
        state.search = "";
        state.factionOne = "";
        state.factionTwo = "";
        state.unitOne = "";
        state.unitTwo = "";
        syncControlsFromState();
        renderModeFilters();
        renderMapCards();
        renderLayerCards();
        renderFactionOptions();
        updateWorkflowVisibility(true);
        generateCommand();
        saveState();
      });
      elements.popularLayers.appendChild(button);
    });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
  }[character]));
}

function bindEvents() {
  elements.mapSearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderMapCards();
    saveState();
  });

  elements.manualLayer.addEventListener("input", (event) => {
    state.manualLayer = event.target.value;
    if (state.manualLayer.trim()) {
      state.selectedLayer = "";
    }
    renderLayerCards();
    updateUnitTypeOptions("unitOne");
    updateUnitTypeOptions("unitTwo");
    updateWorkflowVisibility(true);
    generateCommand();
    saveState();
  });

  elements.clearManualLayer.addEventListener("click", () => {
    state.manualLayer = "";
    elements.manualLayer.value = "";
    updateUnitTypeOptions("unitOne");
    updateUnitTypeOptions("unitTwo");
    updateWorkflowVisibility();
    generateCommand();
    saveState();
  });

  elements.unitOne.addEventListener("change", (event) => {
    state.unitOne = event.target.value;
    generateCommand();
    saveState();
  });

  elements.unitTwo.addEventListener("change", (event) => {
    state.unitTwo = event.target.value;
    generateCommand();
    saveState();
  });

  elements.backToMaps.addEventListener("click", () => {
    state.selectedMapName = "";
    state.selectedLayer = "";
    state.manualLayer = "";
    state.factionOne = "";
    state.factionTwo = "";
    state.unitOne = "";
    state.unitTwo = "";
    syncControlsFromState();
    renderMapCards();
    renderLayerCards();
    renderFactionOptions();
    updateWorkflowVisibility();
    generateCommand();
    saveState();
  });

  elements.backToModes.addEventListener("click", () => {
    state.selectedLayer = "";
    state.manualLayer = "";
    state.factionOne = "";
    state.factionTwo = "";
    state.unitOne = "";
    state.unitTwo = "";
    syncControlsFromState();
    renderLayerCards();
    renderFactionOptions();
    updateWorkflowVisibility(true);
    generateCommand();
    saveState();
  });

  elements.copyButton.addEventListener("click", copyCommand);
  elements.resetButton.addEventListener("click", resetForm);
  elements.swapButton.addEventListener("click", swapFactions);
  elements.languageToggle.addEventListener("click", toggleLanguage);
}

function init() {
  loadState();
  applyTranslations();
  syncControlsFromState();
  renderModeFilters();
  renderPopularLayers();
  renderMapCards();
  renderLayerCards();
  renderFactionOptions();
  updateWorkflowVisibility();
  generateCommand();
  bindEvents();
}

document.addEventListener("DOMContentLoaded", init);
