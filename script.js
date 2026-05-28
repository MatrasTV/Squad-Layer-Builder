"use strict";

// Data was transferred from README.md. Add new Squad maps or factions here when README.md is updated.
const maps = [
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp"
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp"
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp"
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp"
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp"
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Invasion_v3",
    "mode": "Invasion",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp"
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp"
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Al Basrah/albasrah_minimap.webp"
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Al Basrah/T_AlBasrah_Minimap_Seed_v1.webp"
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Seed_v2",
    "mode": "Seed",
    "image": "assets/maps/Al Basrah/T_AlBasrah_Minimap_Seed_v2.webp"
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Al Basrah/T_AlBasrah_Minimap_Skirmish_v1.webp"
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Al Basrah/T_AlBasrah_Minimap_Skirmish_v2.webp"
  },
  {
    "name": "Al Basrah",
    "layer": "AlBasrah_Skirmish_v3",
    "mode": "Skirmish",
    "image": "assets/maps/Al Basrah/T_AlBasrah_Minimap_Skirmish_v1.webp"
  },
  {
    "name": "Anvil",
    "layer": "Anvil_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Anvil/Anvil_Minimap.webp"
  },
  {
    "name": "Anvil",
    "layer": "Anvil_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Anvil/Anvil_Minimap.webp"
  },
  {
    "name": "Anvil",
    "layer": "Anvil_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Anvil/Anvil_Minimap.webp"
  },
  {
    "name": "Anvil",
    "layer": "Anvil_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Anvil/Anvil_Minimap.webp"
  },
  {
    "name": "Anvil",
    "layer": "Anvil_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Anvil/Anvil_Minimap.webp"
  },
  {
    "name": "Anvil",
    "layer": "Anvil_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Anvil/Anvil_Minimap.webp"
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp"
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp"
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp"
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp"
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp"
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp"
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap_Skirmish_v1.webp"
  },
  {
    "name": "Belaya Pass",
    "layer": "Belaya_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Belaya Pass/Belaya_Minimap.webp"
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Black Coast/Black_Coast_Minimap.webp"
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Black Coast/Black_Coast_Minimap.webp"
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Black Coast/Black_Coast_Minimap.webp"
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Black Coast/Black_Coast_Minimap.webp"
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Black Coast/Black_Coast_Minimap.webp"
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Black Coast/Black_Coast_Minimap.webp"
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Black Coast/T_BlackCoast_Seed_v1.webp"
  },
  {
    "name": "Black Coast",
    "layer": "BlackCoast_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Black Coast/T_BlackCoast_Seed_v1.webp"
  },
  {
    "name": "Chora",
    "layer": "Chora_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Chora/Chora_Minimap.webp"
  },
  {
    "name": "Chora",
    "layer": "Chora_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Chora/Chora_Minimap.webp"
  },
  {
    "name": "Chora",
    "layer": "Chora_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Chora/Chora_Minimap.webp"
  },
  {
    "name": "Chora",
    "layer": "Chora_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Chora/Chora_Minimap.webp"
  },
  {
    "name": "Chora",
    "layer": "Chora_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Chora/Chora_Minimap.webp"
  },
  {
    "name": "Chora",
    "layer": "Chora_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Chora/Chora_Minimap.webp"
  },
  {
    "name": "Chora",
    "layer": "Chora_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Chora/Chora_Minimap.webp"
  },
  {
    "name": "Chora",
    "layer": "Chora_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Chora/Chora_Minimap_Skirmish_v1.webp"
  },
  {
    "name": "Chora",
    "layer": "Chora_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Chora/Chora_Minimap.webp"
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp"
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp"
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp"
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp"
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp"
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp"
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Fallujah/Fallujah_Minimap_Skirmish.webp"
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Fallujah/Fallujah_Minimap_Skirmish.webp"
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Fallujah/Fallujah_Minimap_Skirmish.webp"
  },
  {
    "name": "Fallujah",
    "layer": "Fallujah_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Fallujah/T_Fallujah_Minimap.webp"
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp"
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp"
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_Destruction_v1",
    "mode": "Destruction",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp"
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp"
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp"
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp"
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp"
  },
  {
    "name": "Fool's Road",
    "layer": "FoolsRoad_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Fool's Road/Fools_Road_Minimap.webp"
  },
  {
    "name": "Goose Bay",
    "layer": "GooseBay_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Goose Bay/GooseBay_Minimap.webp"
  },
  {
    "name": "Goose Bay",
    "layer": "GooseBay_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Goose Bay/GooseBay_Minimap.webp"
  },
  {
    "name": "Goose Bay",
    "layer": "GooseBay_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Goose Bay/GooseBay_Minimap.webp"
  },
  {
    "name": "Goose Bay",
    "layer": "GooseBay_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Goose Bay/GooseBay_Minimap.webp"
  },
  {
    "name": "Goose Bay",
    "layer": "GooseBay_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Goose Bay/GooseBay_Minimap_Seed_v1.webp"
  },
  {
    "name": "Goose Bay",
    "layer": "GooseBay_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Goose Bay/GooseBay_Minimap_Seed_v1.webp"
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp"
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_Destruction_v1",
    "mode": "Destruction",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp"
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp"
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp"
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp"
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp"
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp"
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Gorodok/Gorodok_Minimap_Skirmish_v1.webp"
  },
  {
    "name": "Gorodok",
    "layer": "Gorodok_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Gorodok/gorodok_minimap.webp"
  },
  {
    "name": "Harju",
    "layer": "Harju_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Harju/Harju_Minimap.webp"
  },
  {
    "name": "Harju",
    "layer": "Harju_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Harju/Harju_Minimap.webp"
  },
  {
    "name": "Harju",
    "layer": "Harju_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Harju/Harju_Minimap.webp"
  },
  {
    "name": "Harju",
    "layer": "Harju_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Harju/Harju_Minimap.webp"
  },
  {
    "name": "Harju",
    "layer": "Harju_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Harju/Harju_Minimap.webp"
  },
  {
    "name": "Harju",
    "layer": "Harju_Invasion_v3",
    "mode": "Invasion",
    "image": "assets/maps/Harju/Harju_Minimap.webp"
  },
  {
    "name": "Harju",
    "layer": "Harju_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Harju/Harju_Minimap.webp"
  },
  {
    "name": "Harju",
    "layer": "Harju_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Harju/Harju_Minimap.webp"
  },
  {
    "name": "Harju",
    "layer": "Harju_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Harju/Harju_Minimap.webp"
  },
  {
    "name": "Harju",
    "layer": "Harju_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Harju/Harju_Minimap.webp"
  },
  {
    "name": "Harju",
    "layer": "Harju_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Harju/Harju_Minimap.webp"
  },
  {
    "name": "Harju",
    "layer": "Harju_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Harju/Harju_Minimap.webp"
  },
  {
    "name": "Kamdesh Highlands",
    "layer": "Kamdesh_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Kamdesh Highlands/Kamdesh_Minimap.webp"
  },
  {
    "name": "Kamdesh Highlands",
    "layer": "Kamdesh_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Kamdesh Highlands/Kamdesh_Minimap.webp"
  },
  {
    "name": "Kamdesh Highlands",
    "layer": "Kamdesh_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Kamdesh Highlands/Kamdesh_Minimap.webp"
  },
  {
    "name": "Kamdesh Highlands",
    "layer": "Kamdesh_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Kamdesh Highlands/Kamdesh_Minimap.webp"
  },
  {
    "name": "Kamdesh Highlands",
    "layer": "Kamdesh_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Kamdesh Highlands/Kamdesh_Minimap.webp"
  },
  {
    "name": "Kamdesh Highlands",
    "layer": "Kamdesh_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Kamdesh Highlands/Kamdesh_Minimap.webp"
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp"
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp"
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp"
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp"
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp"
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp"
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp"
  },
  {
    "name": "Kohat Toi",
    "layer": "Kohat_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Kohat Toi/kohat_minimap.webp"
  },
  {
    "name": "Kokan",
    "layer": "Kokan_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp"
  },
  {
    "name": "Kokan",
    "layer": "Kokan_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp"
  },
  {
    "name": "Kokan",
    "layer": "Kokan_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp"
  },
  {
    "name": "Kokan",
    "layer": "Kokan_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp"
  },
  {
    "name": "Kokan",
    "layer": "Kokan_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp"
  },
  {
    "name": "Kokan",
    "layer": "Kokan_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp"
  },
  {
    "name": "Kokan",
    "layer": "Kokan_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Kokan/T_Kokan_Minimap.webp"
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp"
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp"
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp"
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp"
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp"
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp"
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp"
  },
  {
    "name": "Lashkar Valley",
    "layer": "Lashkar_TC_v2",
    "mode": "TC",
    "image": "assets/maps/Lashkar Valley/T_Lashkar_Minimap.webp"
  },
  {
    "name": "Logar Valley",
    "layer": "Logar_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Logar Valley/Logar_Valley_Minimap.webp"
  },
  {
    "name": "Logar Valley",
    "layer": "Logar_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Logar Valley/Logar_Valley_Minimap.webp"
  },
  {
    "name": "Logar Valley",
    "layer": "Logar_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Logar Valley/Logar_Valley_Minimap.webp"
  },
  {
    "name": "Logar Valley",
    "layer": "Logar_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Logar Valley/Logar_Valley_Minimap.webp"
  },
  {
    "name": "Logar Valley",
    "layer": "Logar_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Logar Valley/Logar_Valley_Minimap.webp"
  },
  {
    "name": "Logar Valley",
    "layer": "Logar_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Logar Valley/Logar_Valley_Minimap.webp"
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp"
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp"
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp"
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp"
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp"
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp"
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Minimap.webp"
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Seed_v1_Minimap.webp"
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Seed_v1_Minimap.webp"
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Seed_v1_Minimap.webp"
  },
  {
    "name": "Manicouagan",
    "layer": "Manicouagan_Skirmish_v3",
    "mode": "Skirmish",
    "image": "assets/maps/Manicouagan/T_Manicouagan_Seed_v1_Minimap.webp"
  },
  {
    "name": "Mestia",
    "layer": "Mestia_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Mestia/T_Mestia_Minimap.webp"
  },
  {
    "name": "Mestia",
    "layer": "Mestia_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Mestia/T_Mestia_Minimap.webp"
  },
  {
    "name": "Mestia",
    "layer": "Mestia_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Mestia/T_Mestia_Minimap.webp"
  },
  {
    "name": "Mestia",
    "layer": "Mestia_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Mestia/T_Mestia_Minimap.webp"
  },
  {
    "name": "Mestia",
    "layer": "Mestia_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Mestia/T_Mestia_Minimap.webp"
  },
  {
    "name": "Mestia",
    "layer": "Mestia_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Mestia/T_Mestia_Minimap.webp"
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Mutaha/Mutaha_Minimap.webp"
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Mutaha/Mutaha_Minimap.webp"
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Mutaha/Mutaha_Minimap.webp"
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Mutaha/Mutaha_Minimap.webp"
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Mutaha/Mutaha_Minimap.webp"
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Mutaha/Mutaha_Minimap_Seed_v1.webp"
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Mutaha/Mutaha_Minimap_Skirmish_v1.webp"
  },
  {
    "name": "Mutaha",
    "layer": "Mutaha_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Mutaha/Mutaha_Minimap.webp"
  },
  {
    "name": "Narva",
    "layer": "Narva_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Narva/Narva_Minimap.webp"
  },
  {
    "name": "Narva",
    "layer": "Narva_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Narva/Narva_Minimap.webp"
  },
  {
    "name": "Narva",
    "layer": "Narva_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Narva/Narva_Minimap.webp"
  },
  {
    "name": "Narva",
    "layer": "Narva_Destruction_v1",
    "mode": "Destruction",
    "image": "assets/maps/Narva/Narva_Minimap.webp"
  },
  {
    "name": "Narva",
    "layer": "Narva_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Narva/Narva_Minimap.webp"
  },
  {
    "name": "Narva",
    "layer": "Narva_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Narva/Narva_Minimap.webp"
  },
  {
    "name": "Narva",
    "layer": "Narva_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Narva/Narva_Minimap.webp"
  },
  {
    "name": "Narva",
    "layer": "Narva_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Narva/Narva_Minimap.webp"
  },
  {
    "name": "Narva",
    "layer": "Narva_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Narva/Narva_Minimap.webp"
  },
  {
    "name": "Pacific Proving Grounds",
    "layer": "PacificProvingGrounds_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Pacific Proving Grounds/T_PacificProvingGrounds_V1_Minimap.webp"
  },
  {
    "name": "Pacific Proving Grounds",
    "layer": "PacificProvingGrounds_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Pacific Proving Grounds/T_PacificProvingGrounds_V1_Minimap.webp"
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp"
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp"
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp"
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp"
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp"
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp"
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp"
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp"
  },
  {
    "name": "Sanxian Islands",
    "layer": "Sanxian_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Sanxian Islands/T_Sanxian_Minimap_Large.webp"
  },
  {
    "name": "Skorpo",
    "layer": "Skorpo_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Skorpo/Skorpo_Minimap_RAAS_v3.webp"
  },
  {
    "name": "Skorpo",
    "layer": "Skorpo_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Skorpo/Skorpo_Minimap_RAAS_v3.webp"
  },
  {
    "name": "Skorpo",
    "layer": "Skorpo_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Skorpo/Skorpo_Minimap_RAAS_v3.webp"
  },
  {
    "name": "Skorpo",
    "layer": "Skorpo_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Skorpo/Skorpo_Minimap_Skirmish_v1.webp"
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp"
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp"
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_AAS_v3",
    "mode": "AAS",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp"
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_Insurgency_v1",
    "mode": "Insurgency",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp"
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp"
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp"
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp"
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp"
  },
  {
    "name": "Sumari Bala",
    "layer": "Sumari_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Sumari Bala/Sumari_Minimap.webp"
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap.webp"
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap.webp"
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap.webp"
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap.webp"
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_Seed_v1",
    "mode": "Seed",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap_Skirmish_v1.webp"
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap_Skirmish_v1.webp"
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap_Skirmish_v2.webp"
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_Skirmish_v3",
    "mode": "Skirmish",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap_Skirmish_v2.webp"
  },
  {
    "name": "Tallil Outskirts",
    "layer": "Tallil_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Tallil Outskirts/Tallil_Outskirts_Minimap.webp"
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_AAS_v1",
    "mode": "AAS",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp"
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_AAS_v2",
    "mode": "AAS",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp"
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_Destruction_v1",
    "mode": "Destruction",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp"
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_Invasion_v1",
    "mode": "Invasion",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp"
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_Invasion_v2",
    "mode": "Invasion",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp"
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_RAAS_v1",
    "mode": "RAAS",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp"
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_RAAS_v2",
    "mode": "RAAS",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp"
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_Skirmish_v1",
    "mode": "Skirmish",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp"
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_Skirmish_v2",
    "mode": "Skirmish",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp"
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_TC_v1",
    "mode": "TC",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp"
  },
  {
    "name": "Yehorivka",
    "layer": "Yehorivka_TC_v2",
    "mode": "TC",
    "image": "assets/maps/Yehorivka/Yehorivka_Minimap.webp"
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

const state = {
  selectedLayer: "",
  manualLayer: "",
  factionOne: "",
  factionTwo: "",
  unitOne: "",
  unitTwo: "",
  search: "",
  mode: "All",
};

const elements = {
  mapGrid: document.getElementById("mapGrid"),
  emptyMessage: document.getElementById("emptyMessage"),
  mapSearch: document.getElementById("mapSearch"),
  modeFilters: document.getElementById("modeFilters"),
  popularLayers: document.getElementById("popularLayers"),
  manualLayer: document.getElementById("manualLayer"),
  clearManualLayer: document.getElementById("clearManualLayer"),
  factionOne: document.getElementById("factionOne"),
  factionTwo: document.getElementById("factionTwo"),
  unitOne: document.getElementById("unitOne"),
  unitTwo: document.getElementById("unitTwo"),
  commandPreview: document.getElementById("commandPreview"),
  commandStatus: document.getElementById("commandStatus"),
  warningBox: document.getElementById("warningBox"),
  copyButton: document.getElementById("copyButton"),
  swapButton: document.getElementById("swapButton"),
  resetButton: document.getElementById("resetButton"),
};

function getSelectedMap() {
  return maps.find((map) => map.layer === state.selectedLayer) || null;
}

function getLayerName() {
  return state.manualLayer.trim() || state.selectedLayer;
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

function renderModeFilters() {
  elements.modeFilters.innerHTML = "";
  modeFilters.forEach((mode) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-btn${state.mode === mode ? " active" : ""}`;
    button.textContent = mode;
    button.addEventListener("click", () => {
      state.mode = mode;
      renderModeFilters();
      renderMapCards();
      saveState();
    });
    elements.modeFilters.appendChild(button);
  });
}

function renderMapCards() {
  const query = state.search.trim().toLowerCase();
  const visibleMaps = maps.filter((map) => {
    const matchesMode = state.mode === "All" || map.mode === state.mode;
    const haystack = `${map.name} ${map.layer} ${map.mode}`.toLowerCase();
    return matchesMode && (!query || haystack.includes(query));
  });

  elements.mapGrid.innerHTML = "";
  elements.emptyMessage.hidden = visibleMaps.length > 0;

  visibleMaps.forEach((map) => {
    const card = document.createElement("article");
    card.className = `map-card${state.selectedLayer === map.layer ? " selected" : ""}`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", String(state.selectedLayer === map.layer));
    card.setAttribute("aria-label", `Select ${map.layer}`);

    const badge = document.createElement("span");
    badge.className = "mode-badge";
    badge.textContent = map.mode;

    const image = document.createElement("img");
    image.src = map.image;
    image.alt = `${map.name} minimap`;
    image.loading = "lazy";
    image.addEventListener("error", () => replaceBrokenImage(image));

    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = `<h3 class="map-name">${escapeHtml(map.name)}</h3><p class="layer-name">${escapeHtml(map.layer)}</p>`;

    const selectMap = () => {
      state.selectedLayer = map.layer;
      renderMapCards();
      generateCommand();
      saveState();
    };

    card.addEventListener("click", selectMap);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectMap();
      }
    });

    card.append(badge, image, body);
    elements.mapGrid.appendChild(card);
  });
}

function replaceBrokenImage(image) {
  const placeholder = document.createElement("div");
  placeholder.className = "image-placeholder";
  placeholder.textContent = "No map image";
  image.replaceWith(placeholder);
}

function renderFactionOptions() {
  const placeholder = createOption("", "Select faction");
  elements.factionOne.innerHTML = "";
  elements.factionTwo.innerHTML = "";
  elements.factionOne.appendChild(placeholder.cloneNode(true));
  elements.factionTwo.appendChild(placeholder.cloneNode(true));

  factions.forEach((faction) => {
    const label = `${faction.code} — ${faction.name} (${faction.side})`;
    elements.factionOne.appendChild(createOption(faction.code, label));
    elements.factionTwo.appendChild(createOption(faction.code, label));
  });

  elements.factionOne.value = state.factionOne;
  elements.factionTwo.value = state.factionTwo;
}

function updateUnitTypeOptions(selectId) {
  const isFirst = selectId === "unitOne";
  const factionCode = isFirst ? state.factionOne : state.factionTwo;
  const unitSelect = isFirst ? elements.unitOne : elements.unitTwo;
  const selectedUnit = isFirst ? state.unitOne : state.unitTwo;
  const faction = getFaction(factionCode);
  const availableUnits = faction?.unitTypes || [];

  unitSelect.innerHTML = "";
  unitSelect.appendChild(createOption("", "No unit type"));

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

function generateCommand() {
  const layerName = getLayerName();
  const factionOnePart = factionCommandPart(state.factionOne, state.unitOne);
  const factionTwoPart = factionCommandPart(state.factionTwo, state.unitTwo);
  const ready = Boolean(layerName && factionOnePart && factionTwoPart);

  if (!ready) {
    elements.commandPreview.textContent = "Select layer and both factions to generate command";
    elements.commandStatus.textContent = "Waiting for selection";
    elements.commandStatus.className = "status-pill waiting";
    elements.copyButton.disabled = true;
  } else {
    elements.commandPreview.textContent = `AdminChangeLayer ${layerName} ${factionOnePart} ${factionTwoPart}`;
    elements.commandStatus.textContent = "Command ready";
    elements.commandStatus.className = "status-pill ready";
    elements.copyButton.disabled = false;
  }

  if (state.factionOne && state.factionTwo && state.factionOne === state.factionTwo) {
    elements.warningBox.hidden = false;
    elements.warningBox.textContent = "Warning: both sides use the same faction. Squad layers usually expect opposing playable factions.";
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
  const originalText = "Copy command";
  elements.copyButton.textContent = "Copied!";
  window.setTimeout(() => {
    elements.copyButton.textContent = originalText;
  }, 1500);
}

function resetForm() {
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
  generateCommand();
  saveState();
}

function swapFactions() {
  [state.factionOne, state.factionTwo] = [state.factionTwo, state.factionOne];
  [state.unitOne, state.unitTwo] = [state.unitTwo, state.unitOne];
  syncControlsFromState();
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

    state.selectedLayer = maps.some((map) => map.layer === saved.selectedLayer) ? saved.selectedLayer : "";
    state.manualLayer = typeof saved.manualLayer === "string" ? saved.manualLayer : "";
    state.factionOne = factions.some((faction) => faction.code === saved.factionOne) ? saved.factionOne : "";
    state.factionTwo = factions.some((faction) => faction.code === saved.factionTwo) ? saved.factionTwo : "";
    state.unitOne = typeof saved.unitOne === "string" ? saved.unitOne : "";
    state.unitTwo = typeof saved.unitTwo === "string" ? saved.unitTwo : "";
    state.search = typeof saved.search === "string" ? saved.search : "";
    state.mode = modeFilters.includes(saved.mode) ? saved.mode : "All";
  } catch (error) {
    // Ignore old or broken saved data so the static page never crashes on load.
  }
}

function syncControlsFromState() {
  elements.manualLayer.value = state.manualLayer;
  elements.mapSearch.value = state.search;
  elements.factionOne.value = state.factionOne;
  elements.factionTwo.value = state.factionTwo;
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
      button.innerHTML = `<strong>${escapeHtml(map.layer)}</strong><span>${escapeHtml(map.name)} · ${escapeHtml(map.mode)}</span>`;
      button.addEventListener("click", () => {
        state.selectedLayer = map.layer;
        state.mode = "All";
        state.search = "";
        syncControlsFromState();
        renderModeFilters();
        renderMapCards();
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
    generateCommand();
    saveState();
  });

  elements.clearManualLayer.addEventListener("click", () => {
    state.manualLayer = "";
    elements.manualLayer.value = "";
    generateCommand();
    saveState();
  });

  elements.factionOne.addEventListener("change", (event) => {
    state.factionOne = event.target.value;
    state.unitOne = "";
    updateUnitTypeOptions("unitOne");
    generateCommand();
    saveState();
  });

  elements.factionTwo.addEventListener("change", (event) => {
    state.factionTwo = event.target.value;
    state.unitTwo = "";
    updateUnitTypeOptions("unitTwo");
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

  elements.copyButton.addEventListener("click", copyCommand);
  elements.resetButton.addEventListener("click", resetForm);
  elements.swapButton.addEventListener("click", swapFactions);
}

function init() {
  loadState();
  renderFactionOptions();
  syncControlsFromState();
  renderModeFilters();
  renderPopularLayers();
  renderMapCards();
  generateCommand();
  bindEvents();
}

document.addEventListener("DOMContentLoaded", init);
