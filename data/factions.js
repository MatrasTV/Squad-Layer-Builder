"use strict";

// Shared faction metadata and UI constants used by the LayerForge app.
window.LayerForgeData = window.LayerForgeData || {};
window.LayerForgeData.factions = [
  {
    "code": "AFU",
    "name": "Armed Forces of Ukraine",
    "side": "BLUFOR",
    "unitTypes": [
      "AirAssault",
      "Armored",
      "CombinedArms",
      "LightInfantry",
      "Mechanized",
      "Motorized",
      "Support",
      "AmphibiousAssault"
    ],
    "flag": "assets/flags/Flag_AFU.png"
  },
  {
    "code": "ADF",
    "name": "Australian Defence Force",
    "side": "BLUFOR",
    "unitTypes": [
      "AirAssault",
      "CombinedArms",
      "Mechanized"
    ],
    "flag": "assets/flags/flag_ADF.png"
  },
  {
    "code": "BAF",
    "name": "British Armed Forces",
    "side": "BLUFOR",
    "unitTypes": [
      "AirAssault",
      "Armored",
      "CombinedArms",
      "Mechanized",
      "Support"
    ],
    "flag": "assets/flags/flag_BAF.png"
  },
  {
    "code": "CAF",
    "name": "Canadian Armed Forces",
    "side": "BLUFOR",
    "unitTypes": [
      "AirAssault",
      "Armored",
      "CombinedArms",
      "LightInfantry",
      "Motorized",
      "Support"
    ],
    "flag": "assets/flags/flag_CAF.png"
  },
  {
    "code": "USA",
    "name": "United States Army",
    "side": "BLUFOR",
    "unitTypes": [
      "AirAssault",
      "Armored",
      "CombinedArms",
      "LightInfantry",
      "Mechanized",
      "Motorized",
      "Support"
    ],
    "flag": "assets/flags/flag_USA.png"
  },
  {
    "code": "USMC",
    "name": "United States Marine Corps",
    "side": "BLUFOR",
    "unitTypes": [
      "Armored",
      "CombinedArms",
      "LightInfantry",
      "Motorized",
      "Support",
      "AmphibiousAssault"
    ],
    "flag": "assets/flags/flag_USMC.png"
  },
  {
    "code": "PLA",
    "name": "People’s Liberation Army",
    "side": "PAC",
    "unitTypes": [
      "AirAssault",
      "Armored",
      "CombinedArms",
      "LightInfantry",
      "Mechanized",
      "Support"
    ],
    "flag": "assets/flags/flag_PLA.png"
  },
  {
    "code": "PLAAGF",
    "name": "PLA Amphibious Ground Force",
    "side": "PAC",
    "unitTypes": [
      "Armored",
      "CombinedArms",
      "Mechanized",
      "AmphibiousAssault"
    ],
    "flag": "assets/flags/flag_PLAAGF.png"
  },
  {
    "code": "PLANMC",
    "name": "PLA Navy Marine Corps",
    "side": "PAC",
    "unitTypes": [
      "AirAssault",
      "Armored",
      "CombinedArms",
      "LightInfantry",
      "Mechanized",
      "Support",
      "AmphibiousAssault"
    ],
    "flag": "assets/flags/flag_PLANMC.png"
  },
  {
    "code": "VDV",
    "name": "Russian Airborne Forces",
    "side": "REDFOR",
    "unitTypes": [
      "AirAssault",
      "Armored",
      "CombinedArms",
      "LightInfantry",
      "Support",
      "AmphibiousAssault"
    ],
    "flag": "assets/flags/flag_VDV.png"
  },
  {
    "code": "RGF",
    "name": "Russian Ground Forces",
    "side": "REDFOR",
    "unitTypes": [
      "Armored",
      "CombinedArms",
      "LightInfantry",
      "Mechanized",
      "Motorized",
      "Support",
      "AmphibiousAssault"
    ],
    "flag": "assets/flags/flag_RGF.png"
  },
  {
    "code": "GFI",
    "name": "Ground Forces of Iran",
    "side": "Independent",
    "unitTypes": [
      "AirAssault",
      "Armored",
      "CombinedArms",
      "LightInfantry",
      "Mechanized",
      "Motorized",
      "Support"
    ],
    "flag": "assets/flags/flag_GFI.png"
  },
  {
    "code": "TLF",
    "name": "Turkish Land Forces",
    "side": "Independent",
    "unitTypes": [
      "AirAssault",
      "Armored",
      "CombinedArms",
      "Mechanized",
      "Motorized",
      "Support"
    ],
    "flag": "assets/flags/flag_TLF.png"
  },
  {
    "code": "INS",
    "name": "Middle Eastern Insurgents",
    "side": "Independent",
    "unitTypes": [
      "Armored",
      "CombinedArms",
      "LightInfantry",
      "Mechanized",
      "Motorized",
      "Support"
    ],
    "flag": "assets/flags/flag_INS.png"
  },
  {
    "code": "IMF",
    "name": "Irregular Militia Forces",
    "side": "Independent",
    "unitTypes": [
      "Armored",
      "CombinedArms",
      "LightInfantry",
      "Mechanized",
      "Motorized",
      "Support"
    ],
    "flag": "assets/flags/flag_IMF.png"
  },
  {
    "code": "WPMC",
    "name": "Western Private Military Contractors",
    "side": "Independent",
    "unitTypes": [
      "AirAssault",
      "CombinedArms",
      "LightInfantry",
      "Motorized"
    ],
    "flag": "assets/flags/flag_WPMC.png"
  },
  {
    "code": "CRF",
    "name": "Canadian Resistance Forces",
    "side": "Independent",
    "unitTypes": [
      "CombinedArms"
    ],
    "flag": "assets/flags/Flag_CRF.png"
  }
];

window.LayerForgeData.unitTypeLabels = {
  AirAssault: "Air Assault",
  Armored: "Armored",
  CombinedArms: "Combined Arms",
  LightInfantry: "Light Infantry",
  Mechanized: "Mechanized",
  Motorized: "Motorized",
  Support: "Support",
  AmphibiousAssault: "Amphibious Assault",
};

window.LayerForgeData.modeFilters = ["All", "AAS", "RAAS", "Invasion", "Seed", "Skirmish", "TC", "Destruction", "Insurgency"];
window.LayerForgeData.popularLayerNames = ["Sumari_Seed_v1", "AlBasrah_AAS_v1", "Fallujah_Invasion_v1", "Gorodok_RAAS_v1", "Yehorivka_RAAS_v1", "Mutaha_Seed_v1"];
window.LayerForgeData.storageKey = "squad-layer-builder-state-v1";
