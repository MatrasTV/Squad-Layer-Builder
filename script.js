"use strict";

// Data was transferred from README.md. Add new Squad maps or factions here when README.md is updated.
// allowedUnitTypes limits battlegroups per LayerName. Use null when exact layer restrictions are not known yet.
const maps = [
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Invasion_v3",
    "mode": "Invasion",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Al Basrah/T_AlBasrah_Minimap_Seed_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Seed_v2",
    "mode": "Seed",
    "image": "assets/maps/Al Basrah/T_AlBasrah_Minimap_Seed_v2.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Al Basrah/T_AlBasrah_Minimap_Skirmish_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Al Basrah/T_AlBasrah_Minimap_Skirmish_v2.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Skirmish_v3",
    "mode": "Skirmish",
    "image": "assets/maps/Al Basrah/T_AlBasrah_Minimap_Skirmish_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Anvil",
    "layer": "Anvil_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Anvil/Anvil_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Anvil",
    "layer": "Anvil_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Anvil/Anvil_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Anvil",
    "layer": "Anvil_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Anvil/Anvil_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Anvil",
    "layer": "Anvil_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Anvil/Anvil_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Anvil",
    "layer": "Anvil_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Anvil/Anvil_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Anvil",
    "layer": "Anvil_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Anvil/Anvil_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap_Skirmish_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Black Coast/Black_Coast_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Black Coast/Black_Coast_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Black Coast/Black_Coast_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Black Coast/Black_Coast_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Black Coast/Black_Coast_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Black Coast/Black_Coast_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Black Coast/T_BlackCoast_Seed_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Black Coast/T_BlackCoast_Seed_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Chora",
    "layer": "Chora_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Chora/Chora_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Chora",
    "layer": "Chora_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Chora/Chora_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Chora",
    "layer": "Chora_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Chora/Chora_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Chora",
    "layer": "Chora_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Chora/Chora_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Chora",
    "layer": "Chora_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Chora/Chora_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Chora",
    "layer": "Chora_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Chora/Chora_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Chora",
    "layer": "Chora_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Chora/Chora_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Chora",
    "layer": "Chora_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Chora/Chora_Minimap_Skirmish_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Chora",
    "layer": "Chora_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Chora/Chora_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Fallujah/Fallujah_Minimap_Skirmish.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Fallujah/Fallujah_Minimap_Skirmish.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Fallujah/Fallujah_Minimap_Skirmish.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_Destruction_v1",
    "mode": "Destruction",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Goose Bay",
    "layer": "GooseBay_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Goose Bay/GooseBay_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Goose Bay",
    "layer": "GooseBay_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Goose Bay/GooseBay_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Goose Bay",
    "layer": "GooseBay_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Goose Bay/GooseBay_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Goose Bay",
    "layer": "GooseBay_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Goose Bay/GooseBay_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Goose Bay",
    "layer": "GooseBay_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Goose Bay/GooseBay_Minimap_Seed_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Goose Bay",
    "layer": "GooseBay_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Goose Bay/GooseBay_Minimap_Seed_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_Destruction_v1",
    "mode": "Destruction",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Gorodok/Gorodok_Minimap_Skirmish_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Harju",
    "layer": "Harju_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Harju/Harju_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Harju",
    "layer": "Harju_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Harju/Harju_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Harju",
    "layer": "Harju_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Harju/Harju_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Harju",
    "layer": "Harju_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Harju/Harju_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Harju",
    "layer": "Harju_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Harju/Harju_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Harju",
    "layer": "Harju_Invasion_v3",
    "mode": "Invasion",
    "image": "assets/maps/Harju/Harju_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Harju",
    "layer": "Harju_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Harju/Harju_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Harju",
    "layer": "Harju_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Harju/Harju_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Harju",
    "layer": "Harju_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Harju/Harju_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Harju",
    "layer": "Harju_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Harju/Harju_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Harju",
    "layer": "Harju_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Harju/Harju_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Harju",
    "layer": "Harju_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Harju/Harju_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kamdesh Highlands",
    "layer": "Kamdesh_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Kamdesh Highlands/Kamdesh_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kamdesh Highlands",
    "layer": "Kamdesh_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Kamdesh Highlands/Kamdesh_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kamdesh Highlands",
    "layer": "Kamdesh_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Kamdesh Highlands/Kamdesh_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kamdesh Highlands",
    "layer": "Kamdesh_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Kamdesh Highlands/Kamdesh_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kamdesh Highlands",
    "layer": "Kamdesh_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Kamdesh Highlands/Kamdesh_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kamdesh Highlands",
    "layer": "Kamdesh_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Kamdesh Highlands/Kamdesh_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kokan",
    "layer": "Kokan_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kokan",
    "layer": "Kokan_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kokan",
    "layer": "Kokan_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kokan",
    "layer": "Kokan_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kokan",
    "layer": "Kokan_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kokan",
    "layer": "Kokan_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Kokan",
    "layer": "Kokan_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_TC_v2",
    "mode": "TC",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Logar Valley",
    "layer": "Logar_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Logar Valley/Logar_Valley_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Logar Valley",
    "layer": "Logar_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Logar Valley/Logar_Valley_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Logar Valley",
    "layer": "Logar_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Logar Valley/Logar_Valley_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Logar Valley",
    "layer": "Logar_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Logar Valley/Logar_Valley_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Logar Valley",
    "layer": "Logar_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Logar Valley/Logar_Valley_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Logar Valley",
    "layer": "Logar_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Logar Valley/Logar_Valley_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Seed_v1_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Seed_v1_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Seed_v1_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_Skirmish_v3",
    "mode": "Skirmish",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Seed_v1_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mestia",
    "layer": "Mestia_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Mestia/T_Mestia_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mestia",
    "layer": "Mestia_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Mestia/T_Mestia_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mestia",
    "layer": "Mestia_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Mestia/T_Mestia_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mestia",
    "layer": "Mestia_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Mestia/T_Mestia_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mestia",
    "layer": "Mestia_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Mestia/T_Mestia_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mestia",
    "layer": "Mestia_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Mestia/T_Mestia_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Mutaha/Mutaha_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Mutaha/Mutaha_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Mutaha/Mutaha_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Mutaha/Mutaha_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Mutaha/Mutaha_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Mutaha/Mutaha_Minimap_Seed_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Mutaha/Mutaha_Minimap_Skirmish_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Mutaha/Mutaha_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Narva",
    "layer": "Narva_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Narva/Narva_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Narva",
    "layer": "Narva_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Narva/Narva_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Narva",
    "layer": "Narva_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Narva/Narva_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Narva",
    "layer": "Narva_Destruction_v1",
    "mode": "Destruction",
    "image": "assets/maps/Narva/Narva_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Narva",
    "layer": "Narva_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Narva/Narva_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Narva",
    "layer": "Narva_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Narva/Narva_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Narva",
    "layer": "Narva_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Narva/Narva_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Narva",
    "layer": "Narva_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Narva/Narva_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Narva",
    "layer": "Narva_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Narva/Narva_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Pacific Proving Grounds",
    "layer": "PacificProvingGrounds_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Pacific Proving Grounds/T_PacificProvingGrounds_V1_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Pacific Proving Grounds",
    "layer": "PacificProvingGrounds_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Pacific Proving Grounds/T_PacificProvingGrounds_V1_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Skorpo",
    "layer": "Skorpo_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Skorpo/Skorpo_Minimap_RAAS_v3.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Skorpo",
    "layer": "Skorpo_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Skorpo/Skorpo_Minimap_RAAS_v3.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Skorpo",
    "layer": "Skorpo_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Skorpo/Skorpo_Minimap_RAAS_v3.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Skorpo",
    "layer": "Skorpo_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Skorpo/Skorpo_Minimap_Skirmish_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp",
    "allowedUnitTypes": ["LightInfantry"]
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap_Skirmish_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap_Skirmish_v1.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap_Skirmish_v2.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_Skirmish_v3",
    "mode": "Skirmish",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap_Skirmish_v2.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_Destruction_v1",
    "mode": "Destruction",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp",
    "allowedUnitTypes": null
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_TC_v2",
    "mode": "TC",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp",
    "allowedUnitTypes": null
  }
];

const factions = [
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

const unitTypeLabels = {
  AirAssault: "Air Assault",
  Armored: "Armored",
  CombinedArms: "Combined Arms",
  LightInfantry: "Light Infantry",
  Mechanized: "Mechanized",
  Motorized: "Motorized",
  Support: "Support",
  AmphibiousAssault: "Amphibious Assault",
};

const modeFilters = ["All", "AAS", "RAAS", "Invasion", "Seed", "Skirmish", "TC", "Destruction", "Insurgency"];
const popularLayerNames = ["Sumari_Seed_v1", "AlBasrah_AAS_v1", "Fallujah_Invasion_v1", "Gorodok_RAAS_v1", "Yehorivka_RAAS_v1", "Mutaha_Seed_v1"];
const storageKey = "squad-layer-builder-state-v1";


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

function getAllowedUnitTypesForFaction(faction) {
  const factionUnits = faction?.unitTypes || [];
  const layerAllowedUnits = getActiveLayerData()?.allowedUnitTypes;

  if (!Array.isArray(layerAllowedUnits)) {
    return factionUnits;
  }

  return factionUnits.filter((unitType) => layerAllowedUnits.includes(unitType));
}

function getFaction(code) {
  return factions.find((faction) => faction.code === code) || null;
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
  grid.innerHTML = "";

  factions.forEach((faction) => {
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
  const factionCode = isFirst ? state.factionOne : state.factionTwo;
  const unitSelect = isFirst ? elements.unitOne : elements.unitTwo;
  const selectedUnit = isFirst ? state.unitOne : state.unitTwo;
  const faction = getFaction(factionCode);
  const availableUnits = getAllowedUnitTypesForFaction(faction);

  unitSelect.innerHTML = "";
  unitSelect.appendChild(createOption("", t("noUnitType")));

  availableUnits.forEach((unitType) => {
    unitSelect.appendChild(createOption(unitType, unitTypeLabels[unitType] || unitType));
  });

  if (availableUnits.includes(selectedUnit)) {
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
