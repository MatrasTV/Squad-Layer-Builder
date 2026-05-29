# Squad Layer Builder

Squad Layer Builder — полностью статический мини-сайт для GitHub Pages. Он помогает администраторам серверов Squad быстро собрать команду `AdminChangeLayer` с выбранным LayerName, двумя фракциями и опциональными Unit Types / battlegroups.

## Возможности

- Пошаговый выбор: сначала карта, затем режим/слой, затем фракции.
- Поиск по названию карты, LayerName и режиму.
- Быстрые фильтры: All, AAS, RAAS, Invasion, Seed, Skirmish, TC, Destruction, Insurgency.
- Выбор двух фракций карточками с флагами из `assets/flags` и доступных для них Unit Types.
- Поддержка `allowedUnitTypes` на уровне конкретного LayerName: список доктрин считается как пересечение unit types фракции и ограничений слоя. Для Seed-слоёв доступны только `No unit type`.
- Ручной ввод LayerName, который имеет приоритет над выбранной карточкой.
- Автоматическая генерация команды.
- Copy command, Reset, Swap factions.
- Сохранение последнего выбора и языка интерфейса в `localStorage`.
- Переключатель языка интерфейса: русский по умолчанию и английский.
- Без backend, Node.js, npm, React, Vue, Angular, Vite, Webpack, CDN и внешних библиотек.

## Пример команды

```txt
AdminChangeLayer Sumari_Seed_v1 WPMC+LightInfantry INS+CombinedArms
```

Если Unit Type не выбран, команда формируется только с кодом фракции:

```txt
AdminChangeLayer Sumari_Seed_v1 WPMC INS
```

## Как открыть локально

Вариант 1 — просто открыть файл:

1. Скачайте или клонируйте репозиторий.
2. Откройте `index.html` в браузере.

Вариант 2 — запустить простой локальный сервер из папки проекта:

```bash
python3 -m http.server 8000
```

После этого откройте `http://localhost:8000`.

## Публикация на GitHub Pages

1. Загрузите файлы проекта в GitHub-репозиторий.
2. Откройте **Settings → Pages**.
3. В разделе **Build and deployment** выберите **Deploy from a branch**.
4. Выберите ветку `main` или `master` и папку `/root`.
5. Сохраните настройки и дождитесь публикации.

## Структура файлов

```txt
index.html
style.css
script.js
README.md
assets/
  maps/
    Al Basrah/
      albasrah_minimap.webp
    ...
  flags/
    flag_ADF.png
    ...
  favicon.svg
```

## Папка `assets/maps`

В `assets/maps` хранятся `.webp` миникарты. Пути в `script.js` должны быть относительными web-путями и использовать прямой слеш `/`.

Правильно:

```txt
assets/maps/Al Basrah/albasrah_minimap.webp
```

Неправильно:

```txt
Squad-Layer-Builder\assets\maps\Al Basrah\albasrah_minimap.webp
```

## Как добавить новую карту с картинкой

1. Положите `.webp` файл в папку карты, например:

```txt
assets/maps/New Map/new_map_minimap.webp
```

2. Добавьте новый объект в массив `maps` в `script.js`:

```js
{
  name: "New Map",
  layer: "NewMap_RAAS_v1",
  mode: "RAAS",
  image: "assets/maps/New Map/new_map_minimap.webp"
}
```

3. Если у новой карты несколько слоёв, добавьте отдельный объект для каждого LayerName.


## Получение актуальных фракций и доктрин слоя

Для проверки текущих ограничений конкретного LayerName можно использовать скрипт `scripts/fetch_layer_team_information.py`. Он обращается к `https://squadutils.org/api/v1/teamInformation?layerId=<LayerName>` и выводит доступные фракции и battlegroups / unit types по командам.

Пример:

```bash
python3 scripts/fetch_layer_team_information.py Sumari_Seed_v1
```

Полезные опции:

```bash
# вывести сырой JSON из API
python3 scripts/fetch_layer_team_information.py Sumari_Seed_v1 --json

# сохранить сырой JSON в файл и одновременно показать краткую сводку
python3 scripts/fetch_layer_team_information.py Sumari_Seed_v1 --output sumari_team_information.json
```

Скрипт использует только стандартную библиотеку Python, поэтому дополнительные зависимости устанавливать не нужно.

## Unit Types

- `AirAssault` — Air Assault
- `Armored` — Armored
- `CombinedArms` — Combined Arms
- `LightInfantry` — Light Infantry
- `Mechanized` — Mechanized
- `Motorized` — Motorized
- `Support` — Support
- `AmphibiousAssault` — Amphibious Assault

## Список слоёв из исходного README

```txt
AlBasrah_AAS_v1 
AlBasrah_AAS_v2
AlBasrah_Insurgency_v1
AlBasrah_Invasion_v1
AlBasrah_Invasion_v2
AlBasrah_Invasion_v3
AlBasrah_RAAS_v1
AlBasrah_RAAS_v2
AlBasrah_Seed_v1
AlBasrah_Seed_v2
AlBasrah_Skirmish_v1
AlBasrah_Skirmish_v2
AlBasrah_Skirmish_v3

Anvil_AAS_v1
Anvil_Invasion_v1
Anvil_RAAS_v1
Anvil_RAAS_v2
Anvil_Skirmish_v1
Anvil_TC_v1

Belaya_AAS_v1
Belaya_AAS_v2
Belaya_AAS_v3
Belaya_Invasion_v1
Belaya_Invasion_v2
Belaya_RAAS_v1
Belaya_Skirmish_v1
Belaya_TC_v1

BlackCoast_AAS_v1
BlackCoast_AAS_v2
BlackCoast_Invasion_v1
BlackCoast_Invasion_v2
BlackCoast_RAAS_v1
BlackCoast_RAAS_v2
BlackCoast_Seed_v1
BlackCoast_Skirmish_v1

Chora_AAS_v1
Chora_AAS_v2
Chora_AAS_v3
Chora_Insurgency_v1
Chora_Invasion_v1
Chora_Invasion_v2
Chora_RAAS_v1
Chora_Skirmish_v1
Chora_TC_v1

Fallujah_AAS_v1
Fallujah_Insurgency_v1
Fallujah_Invasion_v1
Fallujah_Invasion_v2
Fallujah_RAAS_v1
Fallujah_RAAS_v2
Fallujah_Seed_v1
Fallujah_Skirmish_v1
Fallujah_Skirmish_v2
Fallujah_TC_v1

FoolsRoad_AAS_v1
FoolsRoad_AAS_v2
FoolsRoad_Destruction_v1
FoolsRoad_Invasion_v1
FoolsRoad_RAAS_v1
FoolsRoad_Skirmish_v1
FoolsRoad_Skirmish_v2
FoolsRoad_TC_v1

GooseBay_AAS_v1
GooseBay_Invasion_v1
GooseBay_RAAS_v1
GooseBay_RAAS_v2
GooseBay_Seed_v1
GooseBay_Skirmish_v1

Gorodok_AAS_v1
Gorodok_Destruction_v1
Gorodok_Insurgency_v1
Gorodok_Invasion_v1
Gorodok_Invasion_v2
Gorodok_RAAS_v1
Gorodok_RAAS_v2
Gorodok_Skirmish_v1
Gorodok_TC_v1

Harju_AAS_v1
Harju_AAS_v2
Harju_AAS_v3
Harju_Invasion_v1
Harju_Invasion_v2
Harju_Invasion_v3
Harju_RAAS_v1
Harju_RAAS_v2
Harju_Skirmish_v1
Harju_Skirmish_v2
Harju_Seed_v1
Harju_TC_v1

Kamdesh_AAS_v1
Kamdesh_Insurgency_v1
Kamdesh_Invasion_v1
Kamdesh_RAAS_v1
Kamdesh_Skirmish_v1
Kamdesh_TC_v1

Kohat_AAS_v1
Kohat_Insurgency_v1
Kohat_Invasion_v1
Kohat_Invasion_v2
Kohat_RAAS_v1
Kohat_RAAS_v2
Kohat_Skirmish_v1
Kohat_TC_v1

Kokan_AAS_v1
Kokan_Insurgency_v1
Kokan_Invasion_v1
Kokan_RAAS_v1
Kokan_RAAS_v2
Kokan_Skirmish_v1
Kokan_TC_v1

Lashkar_AAS_v1
Lashkar_AAS_v2
Lashkar_Insurgency_v1
Lashkar_Invasion_v1
Lashkar_RAAS_v1
Lashkar_Skirmish_v1
Lashkar_TC_v1
Lashkar_TC_v2

Logar_AAS_v1
Logar_Insurgency_v1
Logar_RAAS_v1
Logar_Seed_v1
Logar_Skirmish_v1
Logar_TC_v1

Manicouagan_AAS_v1
Manicouagan_AAS_v2
Manicouagan_AAS_v3
Manicouagan_Invasion_v1
Manicouagan_Invasion_v2
Manicouagan_RAAS_v1
Manicouagan_RAAS_v2
Manicouagan_Seed_v1
Manicouagan_Skirmish_v1
Manicouagan_Skirmish_v2
Manicouagan_Skirmish_v3

Mestia_AAS_v1
Mestia_AAS_v2
Mestia_Invasion_v1
Mestia_RAAS_v1
Mestia_Skirmish_v1
Mestia_TC_v1

Mutaha_AAS_v1
Mutaha_AAS_v2
Mutaha_Invasion_v1
Mutaha_RAAS_v1
Mutaha_RAAS_v2
Mutaha_Seed_v1
Mutaha_Skirmish_v1
Mutaha_TC_v1

Narva_AAS_v1
Narva_AAS_v2
Narva_AAS_v3
Narva_Destruction_v1
Narva_Invasion_v1
Narva_Invasion_v2
Narva_RAAS_v1
Narva_Skirmish_v1
Narva_TC_v1

PacificProvingGrounds_AAS_v1
PacificProvingGrounds_Seed_v1

Sanxian_AAS_v1
Sanxian_AAS_v2
Sanxian_AAS_v3
Sanxian_Invasion_v1
Sanxian_Invasion_v2
Sanxian_RAAS_v1
Sanxian_RAAS_v2
Sanxian_Seed_v1
Sanxian_Skirmish_v1

Skorpo_Invasion_v1
Skorpo_Invasion_v2
Skorpo_RAAS_v1
Skorpo_Skirmish_v1

Sumari_AAS_v1
Sumari_AAS_v2
Sumari_AAS_v3
Sumari_Insurgency_v1
Sumari_Invasion_v1
Sumari_RAAS_v1
Sumari_Seed_v1
Sumari_Skirmish_v1
Sumari_TC_v1

Tallil_AAS_v1
Tallil_Invasion_v1
Tallil_RAAS_v1
Tallil_RAAS_v2
Tallil_Seed_v1
Tallil_Skirmish_v1
Tallil_Skirmish_v2
Tallil_Skirmish_v3
Tallil_TC_v1

Yehorivka_AAS_v1
Yehorivka_AAS_v2
Yehorivka_Destruction_v1
Yehorivka_Invasion_v1
Yehorivka_Invasion_v2
Yehorivka_RAAS_v1
Yehorivka_RAAS_v2
Yehorivka_Skirmish_v1
Yehorivka_Skirmish_v2
Yehorivka_TC_v1
Yehorivka_TC_v2
```

## Список фракций из исходного README

```txt
Код для команды	Фракция	Сторона / блок	Пример команды	Доступные варианты для команды
AFU	Armed Forces of Ukraine / Вооружённые силы Украины	BLUFOR	AdminChangeLayer Sumari_Seed_v1 AFU INS	AFU+AirAssault, AFU+Armored, AFU+CombinedArms, AFU+LightInfantry, AFU+Mechanized, AFU+Motorized, AFU+Support, AFU+AmphibiousAssault
ADF	Australian Defence Force / Австралийские силы обороны	BLUFOR	AdminChangeLayer Sumari_Seed_v1 ADF INS	ADF+AirAssault, ADF+CombinedArms, ADF+Mechanized
BAF	British Armed Forces / Британские вооружённые силы	BLUFOR	AdminChangeLayer Sumari_Seed_v1 BAF INS	BAF+AirAssault, BAF+Armored, BAF+CombinedArms, BAF+Mechanized, BAF+Support
CAF	Canadian Armed Forces / Канадские вооружённые силы	BLUFOR	AdminChangeLayer Sumari_Seed_v1 CAF INS	CAF+AirAssault, CAF+Armored, CAF+CombinedArms, CAF+LightInfantry, CAF+Motorized, CAF+Support
USA	United States Army / Армия США	BLUFOR	AdminChangeLayer Sumari_Seed_v1 USA INS	USA+AirAssault, USA+Armored, USA+CombinedArms, USA+LightInfantry, USA+Mechanized, USA+Motorized, USA+Support
USMC	United States Marine Corps / Корпус морской пехоты США	BLUFOR	AdminChangeLayer Sumari_Seed_v1 USMC INS	USMC+Armored, USMC+CombinedArms, USMC+LightInfantry, USMC+Motorized, USMC+Support, USMC+AmphibiousAssault
PLA	People’s Liberation Army / НОАК Китай	PAC	AdminChangeLayer Sumari_Seed_v1 PLA INS	PLA+AirAssault, PLA+Armored, PLA+CombinedArms, PLA+LightInfantry, PLA+Mechanized, PLA+Support
PLAAGF	PLA Amphibious Ground Force / Амфибийные сухопутные силы НОАК	PAC	AdminChangeLayer Sumari_Seed_v1 PLAAGF INS	PLAAGF+Armored, PLAAGF+CombinedArms, PLAAGF+Mechanized, PLAAGF+AmphibiousAssault
PLANMC	PLA Navy Marine Corps / Морская пехота ВМС НОАК	PAC	AdminChangeLayer Sumari_Seed_v1 PLANMC INS	PLANMC+AirAssault, PLANMC+Armored, PLANMC+CombinedArms, PLANMC+LightInfantry, PLANMC+Mechanized, PLANMC+Support, PLANMC+AmphibiousAssault
VDV	Russian Airborne Forces / ВДВ РФ	REDFOR	AdminChangeLayer Sumari_Seed_v1 VDV INS	VDV+AirAssault, VDV+Armored, VDV+CombinedArms, VDV+LightInfantry, VDV+Support, VDV+AmphibiousAssault
RGF	Russian Ground Forces / Сухопутные войска РФ	REDFOR	AdminChangeLayer Sumari_Seed_v1 RGF INS	RGF+Armored, RGF+CombinedArms, RGF+LightInfantry, RGF+Mechanized, RGF+Motorized, RGF+Support, RGF+AmphibiousAssault
GFI	Ground Forces of Iran / Сухопутные войска Ирана	Independent	AdminChangeLayer Sumari_Seed_v1 GFI INS	GFI+AirAssault, GFI+Armored, GFI+CombinedArms, GFI+LightInfantry, GFI+Mechanized, GFI+Motorized, GFI+Support
TLF	Turkish Land Forces / Сухопутные войска Турции	Independent	AdminChangeLayer Sumari_Seed_v1 TLF INS	TLF+AirAssault, TLF+Armored, TLF+CombinedArms, TLF+Mechanized, TLF+Motorized, TLF+Support
INS	Middle Eastern Insurgents / Повстанцы Ближнего Востока	Independent	AdminChangeLayer Sumari_Seed_v1 WPMC INS	INS+Armored, INS+CombinedArms, INS+LightInfantry, INS+Mechanized, INS+Motorized, INS+Support
IMF	Irregular Militia Forces / Нерегулярное ополчение	Independent	AdminChangeLayer Sumari_Seed_v1 IMF WPMC	IMF+Armored, IMF+CombinedArms, IMF+LightInfantry, IMF+Mechanized, IMF+Motorized, IMF+Support
WPMC	Western Private Military Contractors / Западная ЧВК	Independent	AdminChangeLayer Sumari_Seed_v1 WPMC INS	WPMC+AirAssault, WPMC+CombinedArms, WPMC+LightInfantry, WPMC+Motorized
CRF	Canadian Resistance Forces / Канадское сопротивление	Independent	AdminChangeLayer Sumari_Seed_v1 CRF WPMC	CRF+CombinedArms
```
