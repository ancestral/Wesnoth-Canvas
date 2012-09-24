/*  terrainCodeTable.js
 *  JavaScript file for Wesnoth Canvas
 *  last updated 24 Sep 12
 *
 *  TO-DO: Add alternates and place images for special drawing tiles, such as walls, keeps and cliffs.
 *
 */

var terrainTable = {
  "Wog": {
    "name": "Deep Water",
    "editorName": "Gray Deep Water",
    "alias": "Wo",
    "group": "water",
    "symbol": "water/ocean-grey-tile.png",
    "image": [ "water/ocean-A01.png", "water/ocean-A02.png", "water/ocean-A03.png", "water/ocean-A04.png", "water/ocean-A05.png", "water/ocean-A06.png", "water/ocean-A07.png", "water/ocean-A08.png", "water/ocean-A09.png", "water/ocean-A10.png", "water/ocean-A11.png", "water/ocean-A12.png", "water/ocean-A13.png", "water/ocean-A14.png", "water/ocean-A15.png" ],
    "filter": "light.png"
  },
  "Wo": {
    "name": "Deep Water",
    "editorName": "Medium Deep Water",
    "group": "water",
    "symbol": "water/ocean-tile.png",
    "image": [ "water/ocean-A01.png", "water/ocean-A02.png", "water/ocean-A03.png", "water/ocean-A04.png", "water/ocean-A05.png", "water/ocean-A06.png", "water/ocean-A07.png", "water/ocean-A08.png", "water/ocean-A09.png", "water/ocean-A10.png", "water/ocean-A11.png", "water/ocean-A12.png", "water/ocean-A13.png", "water/ocean-A14.png", "water/ocean-A15.png" ]
  },
  "Wot": {
    "name": "Deep Water",
    "editorName": "Tropical Deep Water",
    "alias": "Wo",
    "group": "water",
    "symbol": "water/ocean-tropical-tile.png",
    "image": [ "water/coast-tropical-A01.png", "water/coast-tropical-A02.png", "water/coast-tropical-A03.png", "water/coast-tropical-A04.png", "water/coast-tropical-A05.png", "water/coast-tropical-A06.png", "water/coast-tropical-A07.png", "water/coast-tropical-A08.png", "water/coast-tropical-A09.png", "water/coast-tropical-A10.png", "water/coast-tropical-A11.png", "water/coast-tropical-A12.png", "water/coast-tropical-A13.png", "water/coast-tropical-A14.png", "water/coast-tropical-A15.png" ]
  },
  "Wwg": {
    "name": "Shallow Water",
    "editorName": "Gray Shallow Water",
    "alias": "Ww",
    "group": "water",
    "symbol": "water/coast-grey-tile.png",
    "image": [ "water/ocean-A01.png", "water/ocean-A02.png", "water/ocean-A03.png", "water/ocean-A04.png", "water/ocean-A05.png", "water/ocean-A06.png", "water/ocean-A07.png", "water/ocean-A08.png", "water/ocean-A09.png", "water/ocean-A10.png", "water/ocean-A11.png", "water/ocean-A12.png", "water/ocean-A13.png", "water/ocean-A14.png", "water/ocean-A15.png" ],
    "filter": "light.png"
  },
  "Ww": {
    "name": "Shallow Water",
    "editorName": "Medium Shallow Water",
    "group": "water",
    "symbol": "water/coast-tile.png",
    "image": [ "water/ocean-A01.png", "water/ocean-A02.png", "water/ocean-A03.png", "water/ocean-A04.png", "water/ocean-A05.png", "water/ocean-A06.png", "water/ocean-A07.png", "water/ocean-A08.png", "water/ocean-A09.png", "water/ocean-A10.png", "water/ocean-A11.png", "water/ocean-A12.png", "water/ocean-A13.png", "water/ocean-A14.png", "water/ocean-A15.png" ]
  },
  "Wwt": {
    "name": "Shallow Water",
    "editorName": "Tropical Shallow Water",
    "alias": "Ww",
    "group": "water",
    "symbol": "water/coast-tropical-tile.png",
    "image": [ "water/coast-tropical-A01.png", "water/coast-tropical-A02.png", "water/coast-tropical-A03.png", "water/coast-tropical-A04.png", "water/coast-tropical-A05.png", "water/coast-tropical-A06.png", "water/coast-tropical-A07.png", "water/coast-tropical-A08.png", "water/coast-tropical-A09.png", "water/coast-tropical-A10.png", "water/coast-tropical-A11.png", "water/coast-tropical-A12.png", "water/coast-tropical-A13.png", "water/coast-tropical-A14.png", "water/coast-tropical-A15.png" ]
  },
  "Wwf": {
    "name": "Ford",
    "alias": [ "Gt", "Ww" ],
    "group": "water",
    "symbol": "water/ford-tile.png",
    "image": [ "water/ocean-A01.png", "water/ocean-A02.png", "water/ocean-A03.png", "water/ocean-A04.png", "water/ocean-A05.png", "water/ocean-A06.png", "water/ocean-A07.png", "water/ocean-A08.png", "water/ocean-A09.png", "water/ocean-A10.png", "water/ocean-A11.png", "water/ocean-A12.png", "water/ocean-A13.png", "water/ocean-A14.png", "water/ocean-A15.png" ]
  },
  "Wwrg": {
    "name": "Coastal Reef",
    "editorName": "Gray Coastal Reef",
    "alias": "Wwr",
    "group": "water",
    "symbol": "water/reef-gray-tile.png",
    "image": [ "water/ocean-A01.png", "water/ocean-A02.png", "water/ocean-A03.png", "water/ocean-A04.png", "water/ocean-A05.png", "water/ocean-A06.png", "water/ocean-A07.png", "water/ocean-A08.png", "water/ocean-A09.png", "water/ocean-A10.png", "water/ocean-A11.png", "water/ocean-A12.png", "water/ocean-A13.png", "water/ocean-A14.png", "water/ocean-A15.png" ],
    "filter": "light.png",
    "overlay": [ "reef.png", "reef2.png", "reef3.png", "reef4.png" ]
  },
  "Wwr": {
    "name": "Coastal Reef",
    "group": "water",
    "symbol": "water/reef-tile.png",
    "image": [ "water/ocean-A01.png", "water/ocean-A02.png", "water/ocean-A03.png", "water/ocean-A04.png", "water/ocean-A05.png", "water/ocean-A06.png", "water/ocean-A07.png", "water/ocean-A08.png", "water/ocean-A09.png", "water/ocean-A10.png", "water/ocean-A11.png", "water/ocean-A12.png", "water/ocean-A13.png", "water/ocean-A14.png", "water/ocean-A15.png" ],
    "overlay": [ "reef.png", "reef2.png", "reef3.png", "reef4.png" ]
  },
  "Wwrt": {
    "name": "Coastal Reef",
    "editorName": "Tropical Coastal Reef",
    "alias": "Wwr",
    "group": "water",
    "symbol": "water/reef-tropical-tile.png",
    "image": [ "water/coast-tropical-A01.png", "water/coast-tropical-A02.png", "water/coast-tropical-A03.png", "water/coast-tropical-A04.png", "water/coast-tropical-A05.png", "water/coast-tropical-A06.png", "water/coast-tropical-A07.png", "water/coast-tropical-A08.png", "water/coast-tropical-A09.png", "water/coast-tropical-A10.png", "water/coast-tropical-A11.png", "water/coast-tropical-A12.png", "water/coast-tropical-A13.png", "water/coast-tropical-A14.png", "water/coast-tropical-A15.png" ],
    "overlay": [ "reef.png", "reef2.png", "reef3.png", "reef4.png" ]
  },
  "Ss": {
    "name": "Swamp",
    "group": "water",
    "symbol": "swamp/water-tile.png",
    "image": [ "swamp/water.png", "swamp/water2.png", "swamp/water3.png" ]
  },
  "Sm": {
    "name": "Swamp",
    "editorName": "Muddy Quagmire",
    "alias": "Ss",
    "group": "Water",
    "symbol": "swamp/mud-tile.png",
    "image": [ "swamp/mud.png", "swamp/mud2.png", "swamp/mud3.png" ]
  },
  "Gg": {
    "name": "Grassland",
    "editorName": "Green Grass",
    "alias": "Gt",
    "group": "flat",
    "symbol": "grass/green-symbol.png",
    "image": [ "grass/green.png", "grass/green2.png", "grass/green3.png", "grass/green4.png", "grass/green5.png", "grass/green6.png", "grass/green7.png", "grass/green8.png" ]
  },
  "Gs": {
    "name": "Grassland",
    "editorName": "Semi-dry Grass",
    "alias": "Gt",
    "group": "flat",
    "symbol": "grass/semi-dry-symbol.png",
    "image": [ "grass/semi-dry.png", "grass/semi-dry2.png", "grass/semi-dry3.png", "grass/semi-dry4.png", "grass/semi-dry5.png", "grass/semi-dry6.png" ]
  },
  "Gd": {
    "name": "Grassland",
    "editorName": "Dry Grass",
    "alias": "Gt",
    "group": "flat",
    "symbol": "grass/dry.png",
    "image": [ "grass/dry.png", "grass/dry2.png", "grass/dry3.png", "grass/dry4.png", "grass/dry5.png", "grass/dry6.png" ]
  },
  "Gll": {
    "name": "Grassland",
    "editorName": "Leaf Litter",
    "alias": "Gt",
    "group": "flat",
    "symbol": "grass/leaf-litter.png",
    "image": [ "grass/leaf-litter.png", "grass/leaf-litter2.png", "grass/leaf-litter3.png", "grass/leaf-litter4.png", "grass/leaf-litter5.png", "grass/leaf-litter6.png" ]
  },
  "Rb": {
    "name": "Dirt",
    "editorName": "Dark Dirt",
    "alias": "Gt",
    "group": "flat",
    "symbol": "flat/dirt-dark.png",
    "image": [ "flat/dirt-dark.png", "flat/dirt-dark2.png", "flat/dirt-dark3.png", "flat/dirt-dark4.png", "flat/dirt-dark5.png", "flat/dirt-dark6.png", "flat/dirt-dark7.png" ]
  },
  "Re": {
    "name": "Dirt",
    "editorName": "Regular Dirt",
    "alias": "Gt",
    "group": "flat",
    "symbol": "flat/dirt.png",
    "image": [ "flat/dirt.png", "flat/dirt2.png", "flat/dirt3.png", "flat/dirt4.png", "flat/dirt5.png", "flat/dirt6.png", "flat/dirt7.png" ]
  },
  "Rd": {
    "name": "Dirt",
    "editorName": "Dry Dirt",
    "alias": "Gt",
    "group": [ "desert", "flat" ],
    "symbol": "flat/desert-road.png",
    "image": [ "flat/dirt.png", "flat/dirt2.png", "flat/dirt3.png", "flat/dirt4.png", "flat/dirt5.png", "flat/dirt6.png", "flat/dirt7.png" ],
    "filter": "light.png"
  },
  "Rr": {
    "name": "Road",
    "editorName": "Regular Cobbles",
    "alias": "Gt",
    "group": "flat",
    "symbol": "flat/road.png",
    "image": [ "flat/road-clean.png", "flat/road-clean2.png", "flat/road-clean3.png" ]
  },
  "Rrc": {
    "name": "Road",
    "editorName": "Clean Gray Cobbles",
    "alias": "Gt",
    "group": "flat",
    "symbol": "flat/road-clean.png",
    "image": [ "flat/road.png", "flat/road2.png", "flat/road3.png", "flat/road4.png" ]
  },
  "Rp": {
    "name": "Road",
    "editorName": "Overgrown Cobbles",
    "alias": "Gt",
    "group": "flat",
    "symbol": "flat/stone-path.png",
    "image": [ "flat/stone-path.png", "flat/stone-path2.png" ]
  },
  "Ai": {
    "name": "Ice",
    "alias": "At",
    "group": "frozen",
    "symbol": "frozen/ice.png",
    "image": [ "frozen/ice.png", "frozen/ice2.png", "frozen/ice3.png", "frozen/ice4.png", "frozen/ice5.png", "frozen/ice6.png" ]
  },
  "Aa": {
    "name": "Snow",
    "alias": "At",
    "group": "frozen",
    "symbol": "frozen/snow.png",
    "image": [ "frozen/snow.png", "frozen/snow2.png", "frozen/snow3.png" ]
  },
  "Dd": {
    "name": "Desert",
    "editorName": "Desert Sands",
    "alias": "Ds",
    "group": "desert",
    "symbol": "sand/desert.png",
    "image": [ "sand/desert.png", "sand/desert2.png", "sand/desert3.png", "sand/desert4.png", "sand/desert5.png", "sand/desert6.png", "sand/desert7.png", "sand/desert8.png" ]
  },
  "Ds": {
    "name": "Sand",
    "editorName": "Beach Sands",
    "group": "desert",
    "symbol": "sand/beach.png"
  },
  "^Do": {
    "name": "Oasis",
    "alias": "Ds",
    "group": [ "desert", "forest" ],
    "symbol": "sand/desert-oasis.png"
  },
  "^Dr": {
    "name": "Rubble",
    "alias": [ "_bas", "Hh" ],
    "group": [ "desert", "forest" ],
    "symbol": "misc/rubble-tile.png"
  },
  "Dd^Dc": {
    "name": "Crater",
    "alias": "Ds",
    "group": "desert",
    "symbol": "sand/crater.png"
  },
  "^Efm": {
    "name": "Mixed Flowers",
    "editorName": "Mixed Flowers",
    "alias": "Xx",
    "group": "embellishments",
    "symbol": "embellishments/flowers-mixed.png"
  },
  "^Gvs": {
    "name": "Farmland",
    "editorName": "Farmland",
    "alias": "_bas",
    "group": "embellishments",
    "symbol": "embellishments/farm-veg-spring-icon.png"
  },
  "^Es": {
    "name": "Stones",
    "editorName": "Stones",
    "alias": "_bas",
    "group": "embellishments",
    "symbol": "embellishments/stones-small7.png"
  },
  "^Em": {
    "name": "Small Mushrooms",
    "editorName": "Small Mushrooms",
    "alias": "_bas",
    "group": "embellishments",
    "symbol": "embellishments/mushroom.png"
  },
  "^Emf": {
    "name": "Mushroom Farm",
    "editorName": "Mushroom Farm",
    "alias": "_bas",
    "group": [ "cave", "embellishments" ],
    "symbol": "embellishments/mushroom-farm-small.png"
  },
  "^Edp": {
    "name": "Desert Plants",
    "editorName": "Desert Plants",
    "alias": "_bas",
    "group": [ "desert", "embellishments" ],
    "symbol": "embellishments/desert-plant5.png"
  },
  "^Edpp": {
    "name": "Desert Plants without Bones",
    "editorName": "Desert Plants without Bones",
    "alias": "_bas",
    "group": [ "desert", "embellishments" ],
    "symbol": "embellishments/desert-plant.png"
  },
  "^Wm": {
    "name": "Windmill",
    "editorName": "Windmill",
    "alias": "_bas",
    "group": "embellishments",
    "symbol": "misc/windmill-tile.png"
  },
  "^Ecf": {
    "name": "Campfire",
    "editorName": "Campfire",
    "alias": "_bas",
    "group": "embellishments",
    "symbol": "misc/fire-A01.png"
  },
  "^Eff": {
    "name": "Fence",
    "editorName": "Fence",
    "alias": "_bas",
    "group": "embellishments",
    "symbol": "embellishments/fence-se-nw-01.png"
  },
  "^Esd": {
    "name": "Stones with Sand Drifts",
    "editorName": "Stones with Sand Drifts",
    "alias": "_bas",
    "group": [ "desert", "embellishments" ],
    "symbol": "embellishments/rocks.png"
  },
  "^Ewl": {
    "name": "Water Lilies",
    "editorName": "Water Lilies",
    "alias": "_bas",
    "group": [ "embellishments", "water" ],
    "symbol": "embellishments/water-lilies-tile.png"
  },
  "^Ewf": {
    "name": "Flowering Water Lilies",
    "editorName": "Flowering Water Lilies",
    "alias": "_bas",
    "group": [ "embellishments", "water" ],
    "symbol": "embellishments/water-lilies-flower-tile.png"
  },
  "^Fet": {
    "name": "Great Tree",
    "editorName": "Great Tree",
    "alias": [ "_bas", "Ft" ],
    "group": "forest",
    "symbol": "forest/great-tree-tile.png"
  },
  "^Fetd": {
    "name": "Dead Great Tree",
    "editorName": "Dead Great Tree",
    "alias": [ "_bas", "Ft" ],
    "group": "forest",
    "symbol": "forest/great-tree-dead-tile.png"
  },
  "^Ft": {
    "name": "Tropical Forest",
    "editorName": "Tropical Forest",
    "alias": [ "_bas", "Ft" ],
    "group": "forest",
    "symbol": "forest/tropical-tile.png"
  },
  "^Ftd": {
    "name": "Palm Forest",
    "editorName": "Palm Forest",
    "alias": [ "_bas", "Ft" ],
    "group": [ "desert", "forest" ],
    "symbol": "forest/palm-desert-tile.png"
  },
  "^Fp": {
    "name": "Pine Forest",
    "editorName": "Pine Forest",
    "alias": [ "_bas", "Ft" ],
    "group": "forest",
    "symbol": "forest/pine-tile.png"
  },
  "^Fpa": {
    "name": "Snowy Pine Forest",
    "editorName": "Snowy Pine Forest",
    "alias": [ "_bas", "At", "Ft" ],
    "group": [ "forest", "frozen" ],
    "symbol": "forest/snow-forest-tile.png"
  },
  "^Fds": {
    "name": "Summer Deciduous Forest",
    "editorName": "Summer Deciduous Forest",
    "alias": [ "_bas", "Ft" ],
    "group": "forest",
    "symbol": "forest/deciduous-summer-tile.png"
  },
  "^Fdf": {
    "name": "Fall Deciduous Forest",
    "editorName": "Fall Deciduous Forest",
    "alias": [ "_bas", "Ft" ],
    "group": "forest",
    "symbol": "forest/deciduous-fall-tile.png"
  },
  "^Fdw": {
    "name": "Winter Deciduous Forest",
    "editorName": "Winter Deciduous Forest",
    "alias": [ "_bas", "Ft" ],
    "group": "forest",
    "symbol": "forest/deciduous-winter-tile.png"
  },
  "^Fda": {
    "name": "Snowy Deciduous Forest",
    "editorName": "Snowy Deciduous Forest",
    "alias": [ "_bas", "At", "Ft" ],
    "group": "forest",
    "symbol": "forest/deciduous-winter-snow-tile.png"
  },
  "^Fms": {
    "name": "Summer Mixed Forest",
    "editorName": "Summer Mixed Forest",
    "alias": [ "_bas", "Ft" ],
    "group": "forest",
    "symbol": "forest/mixed-summer-tile.png"
  },
  "^Fmf": {
    "name": "Fall Mixed Forest",
    "editorName": "Fall Mixed Forest",
    "alias": [ "_bas", "Ft" ],
    "group": "forest",
    "symbol": "forest/mixed-fall-tile.png"
  },
  "^Fmw": {
    "name": "Winter Mixed Forest",
    "editorName": "Winter Mixed Forest",
    "alias": [ "_bas", "Ft" ],
    "group": "forest",
    "symbol": "forest/mixed-winter-tile.png"
  },
  "^Fma": {
    "name": "Snowy Mixed Forest",
    "editorName": "Snowy Mixed Forest",
    "alias": [ "_bas", "At", "Ft" ],
    "group": [ "forest", "frozen" ],
    "symbol": "forest/mixed-winter-tile.png"
  },
  "^Gma": {
    "name": "Snowy Mixed Forest",
    "editorName": "Snowy Mixed Forest",
    "alias": [ "_bas", "At", "Ft" ],
    "group": [ "forest", "frozen" ],
    "symbol": "forest/mixed-winter-snow-tile.png"
  },
  "Hh": {
    "name": "Hills",
    "editorName": "Regular Hills",
    "alias": "Hh",
    "group": "rough",
    "symbol": "hills/regular.png"
  },
  "Hhd": {
    "name": "Hills",
    "editorName": "Dry Hills",
    "alias": "Hh",
    "group": "rough",
    "symbol": "hills/dry.png"
  },
  "Hd": {
    "name": "Dunes",
    "alias": [ "Ds", "Hh" ],
    "group": [ "desert", "rough" ],
    "symbol": "hills/desert.png"
  },
  "Ha": {
    "name": "Hills",
    "editorName": "Snow Hills",
    "alias": [ "At", "Hh" ],
    "group": [ "frozen", "rough" ],
    "symbol": "hills/snow.png"
  },
  "Mm": {
    "name": "Mountains",
    "group": "rough",
    "symbol": "mountains/basic-tile.png"
  },
  "Md": {
    "name": "Mountains",
    "editorName": "Dry Mountains",
    "alias": "Mm",
    "group": [ "desert", "rough" ],
    "symbol": "mountains/dry-tile.png"
  },
  "Ms": {
    "name": "Mountains",
    "editorName": "Snowy Mountains",
    "alias": [ "At", "Mm" ],
    "group": [ "frozen", "rough" ],
    "symbol": "hills/snow.png"
  },
  "Hh^Fp": {
    "name": "Hills",
    "editorName": "Forested Hills",
    "alias": [ "Ft", "Hh" ],
    "group": [ "forest", "rough" ],
    "symbol": "forest/forested-hills-tile.png"
  },
  "Ha^Fpa": {
    "name": "Hills",
    "editorName": "Forested Snow Hills",
    "alias": [ "At", "Ft", "Hh" ],
    "group": [ "forest", "frozen", "rough" ],
    "symbol": "forest/forested-snow-hills-tile.png"
  },
  "Hh^Fds": {
    "name": "Hills",
    "editorName": "Summer Deciduous Forested Hills",
    "alias": [ "Ft", "Hh" ],
    "group": [ "forest", "rough" ],
    "symbol": "forest/forested-deciduous-summer-hills-tile.png"
  },
  "Hhd^Fdf": {
    "name": "Hills",
    "editorName": "Fall Deciduous Forested Hills",
    "alias": [ "Ft", "Hh" ],
    "group": [ "forest", "rough" ],
    "symbol": "forest/forested-deciduous-fall-hills-tile.png"
  },
  "Hhd^Fdw": {
    "name": "Hills",
    "editorName": "Winter Deciduous Forested Hills",
    "alias": [ "Ft", "Hh" ],
    "group": [ "forest", "rough" ],
    "symbol": "forest/forested-deciduous-winter-hills-tile.png"
  },
  "Ha^Fda": {
    "name": "Hills",
    "editorName": "Snowy Deciduous Forested Hills",
    "alias": [ "At", "Ft", "Hh" ],
    "group": [ "forest", "frozen", "rough" ],
    "symbol": "forest/forested-deciduous-winter-snow-hills-tile.png"
  },
  "Hh^Fms": {
    "name": "Hills",
    "editorName": "Summer Mixed Forested Hills",
    "alias": [ "Ft", "Hh" ],
    "group": [ "forest", "rough" ],
    "symbol": "forest/forested-mixed-summer-hills-tile.png"
  },
  "Hhd^Fmf": {
    "name": "Hills",
    "editorName": "Fall Mixed Forested Hills",
    "alias": [ "Ft", "Hh" ],
    "group": [ "forest", "rough" ],
    "symbol": "forest/forested-mixed-fall-hills-tile.png"
  },
  "Hhd^Fmw": {
    "name": "Hills",
    "editorName": "Winter Mixed Forested Hills",
    "alias": [ "Ft", "Hh" ],
    "group": [ "forest", "rough" ],
    "symbol": "forest/forested-mixed-winter-hills-tile.png"
  },
  "Ha^Fma": {
    "name": "Hills",
    "editorName": "Snowy Mixed Forested Hills",
    "alias": [ "At", "Ft", "Hh" ],
    "group": [ "forest", "frozen", "rough" ],
    "symbol": "forest/forested-mixed-winter-snow-hills-tile.png"
  },
  "Hh^Ft": {
    "name": "Hills",
    "editorName": "Tropical Forested Hills",
    "alias": [ "Ft", "Hh" ],
    "group": [ "forest", "rough" ],
    "symbol": "forest/forested-mixed-winter-snow-hills-tile.png"
  },
  "Hd^Ftd": {
    "name": "Hills",
    "editorName": "Palm Forested Hills",
    "alias": [ "Ds", "Ft", "Hh" ],
    "group": [ "desert", "forest", "rough" ],
    "symbol": "forest/palms-on-dunes-tile.png"
  },
  "Iwr": {
    "name": "Wooden Floor",
    "editorName": "Basic Wooden Floor",
    "alias": "Gt",
    "group": "flat",
    "symbol": "interior/wood-regular.png"
  },
  "^Ii": {
    "name": "Beam of Light",
    "editorName": "Beam of Light",
    "alias": "_bas",
    "group": "cave",
    "symbol": "cave/beam-tile.png"
  },
  "Uu": {
    "name": "Cave",
    "editorName": "Cave Floor",
    "group": "cave",
    "symbol": "cave/floor6.png"
  },
  "Uue": {
    "name": "Cave",
    "editorName": "Earthy Cave Floor",
    "alias": "Uu",
    "group": "cave",
    "symbol": "cave/earthy-floor3.png"
  },
  "Urb": {
    "name": "Road",
    "editorName": "Dark Flagstones",
    "alias": "Gt",
    "group": "cave",
    "symbol": "cave/flagstones-dark.png"
  },
  "Ur": {
    "name": "Road",
    "editorName": "Cave Path",
    "alias": "Gt",
    "group": "cave",
    "symbol": "cave/path.png"
  },
  "^Uf": {
    "name": "Mushroom Grove",
    "group": [ "cave", "forest" ],
    "symbol": "forest/mushrooms-tile.png"
  },
  "^Ufi": {
    "name": "Mushroom Grove",
    "editorName": "Lit Mushroom Grove",
    "alias": "^Uf",
    "group": "cave",
    "symbol": "forest/mushrooms-beam-tile.png"
  },
  "Uh": {
    "name": "Rockbound Cave",
    "alias": [ "Uu", "Hh" ],
    "group": [ "cave", "rough" ],
    "symbol": "cave/hills-variation.png"
  },
  "^Br|": {
    "name": "Mine Rail",
    "alias": "_bas",
    "group": "cave",
    "symbol": "misc/rails-n-s.png"
  },
  "^Br/": {
    "name": "Mine Rail",
    "alias": "_bas",
    "group": "cave",
    "symbol": "misc/rails-ne-sw.png"
  },
  "^Br\\": {
    "name": "Mine Rail",
    "alias": "_bas",
    "group": "cave",
    "symbol": "misc/rails-se-nw.png"
  },
  "Qxu": {
    "name": "Chasm",
    "editorName": "Regular Chasm",
    "alias": "Qt",
    "group": [ "cave", "obstacle" ],
    "symbol": "chasm/regular-tile.png"
  },
  "Qxe": {
    "name": "Chasm",
    "editorName": "Earthy Chasm",
    "alias": "Qt",
    "group": [ "cave", "obstacle" ],
    "symbol": "chasm/earthy-tile.png"
  },
  "Qxua": {
    "name": "Chasm",
    "editorName": "Ethereal Abyss",
    "alias": "Qt",
    "group": "obstacle",
    "symbol": "chasm/abyss-tile.png"
  },
  "Ql": {
    "name": "Chasm",
    "editorName": "Lava Chasm",
    "alias": "Qt",
    "group": [ "cave", "obstacle" ],
    "symbol": "unwalkable/lava-chasm-tile.png"
  },
  "Qlf": {
    "name": "Lava",
    "alias": "Qt",
    "group": [ "cave", "obstacle" ],
    "symbol": "unwalkable/lava.png"
  },
  "Mv": {
    "name": "Volcano",
    "alias": "Qt",
    "group": [ "obstacle", "rough" ],
    "symbol": "mountains/volcano-tile.png"
  },
  "Mm^Xm": {
    "name": "Mountains",
    "editorName": "Regular Impassable Mountains",
    "alias": "Xt",
    "group": [ "obstacle", "rough" ],
    "symbol": "mountains/cloud-tile.png"
  },
  "Md^Xm": {
    "name": "Mountains",
    "editorName": "Desert Impassable Mountains",
    "alias": "Xt",
    "group": [ "desert", "obstacle", "rough" ],
    "symbol": "mountains/cloud-desert-tile.png"
  },
  "Ms^Xm": {
    "name": "Mountains",
    "editorName": "Snowy Impassable Mountains",
    "alias": "Xt",
    "group": [ "frozen", "obstacle", "rough" ],
    "symbol": "mountains/cloud-snow-tile.png"
  },
  "Xu": {
    "name": "Cave Wall",
    "editorName": "Natural Cave Wall",
    "alias": "Xt",
    "group": [ "cave", "obstacle" ],
    "symbol": "cave/wall-rough-tile.png"
  },
  "Xuc": {
    "name": "Cave Wall",
    "editorName": "Hewn Cave Wall",
    "alias": "Xt",
    "group": [ "cave", "obstacle" ],
    "symbol": "cave/wall-hewn-tile.png"
  },
  "Xue": {
    "name": "Cave Wall",
    "editorName": "Natural Earthy Cave Wall",
    "alias": "Xt",
    "group": [ "cave", "obstacle" ],
    "symbol": "cave/earthy-wall-rough-tile.png"
  },
  "Xuce": {
    "name": "Cave Wall",
    "editorName": "Reinforced Earth Cave Wall",
    "alias": "Xt",
    "group": [ "cave", "obstacle" ],
    "symbol": "cave/earthy-wall-hewn-tile.png"
  },
  "Xos": {
    "name": "Stone Wall",
    "editorName": "Stone Wall",
    "alias": "Xt",
    "group": [ "cave", "obstacle" ],
    "symbol": "walls/wall-stone-tile.png"
  },
  "Xol": {
    "name": "Stone Wall",
    "editorName": "Lit Stone Wall",
    "alias": "Xt",
    "group": [ "cave", "obstacle" ],
    "symbol": "walls/wall-stone-tile.png"
  },
  "^Xo": {
    "name": "Impassable Overlay",
    "alias": [ "_bas", "Xt" ],
    "group": "special",
    "symbol": "impassable-editor.png"
  },
  "Xv": {
    "name": "Void",
    "alias": "Xt",
    "group": [ "obstacle", "special" ],
    "symbol": "void/void-editor.png"
  },
  "^Vda": {
    "name": "Village",
    "editorName": "Adobe Village",
    "alias": [ "_bas", "Vi" ],
    "group": [ "desert", "village" ],
    "symbol": "village/desert-tile.png"
  },
  "^Vdt": {
    "name": "Village",
    "editorName": "Desert Tent Village",
    "alias": [ "_bas", "Vi" ],
    "group": [ "desert", "village" ],
    "symbol": "village/desert-camp-tile.png"
  },
  "^Vct": {
    "name": "Village",
    "editorName": "Tent Village",
    "alias": [ "_bas", "Vi" ],
    "group": "village",
    "symbol": "village/camp-tile.png"
  },
  "^Vo": {
    "name": "Village",
    "editorName": "Orcish Village",
    "alias": [ "_bas", "Vi" ],
    "group": "village",
    "symbol": "village/orc-tile.png"
  },
  "^Voa": {
    "name": "Village",
    "editorName": "Snowy Orcish Village",
    "alias": [ "_bas", "Vi" ],
    "group": [ "frozen", "village" ],
    "symbol": "village/orc-snow-tile.png"
  },
  "^Vea": {
    "name": "Village",
    "editorName": "Snowy Elven Village",
    "alias": [ "_bas", "Vi" ],
    "group": [ "frozen", "village" ],
    "symbol": "village/elven-snow-tile.png"
  },
  "^Ve": {
    "name": "Village",
    "editorName": "Elven Village",
    "alias": [ "_bas", "Vi" ],
    "group": "village",
    "symbol": "village/elven-tile.png"
  },
  "^Vh": {
    "name": "Village",
    "editorName": "Cottage",
    "alias": [ "_bas", "Vi" ],
    "group": "village",
    "symbol": "village/human-tile.png"
  },
  "^Vha": {
    "name": "Village",
    "editorName": "Snowy Cottage",
    "alias": [ "_bas", "Vi" ],
    "group": [ "frozen", "village" ],
    "symbol": "village/snow-tile.png"
  },
  "^Vhr": {
    "name": "Village",
    "editorName": "Ruined Cottage",
    "alias": [ "_bas", "Vi" ],
    "group": "village",
    "symbol": "village/human-cottage-ruin-tile.png"
  },
  "^Vhc": {
    "name": "Village",
    "editorName": "Human City",
    "alias": [ "_bas", "Vi" ],
    "group": "village",
    "symbol": "village/human-city-tile.png"
  },
  "^Vwm": {
    "name": "Village",
    "editorName": "Windmill Village",
    "alias": [ "_bas", "Vi" ],
    "group": "village",
    "symbol": "misc/windmill-tile.png"
  },
  "^Vhca": {
    "name": "Village",
    "editorName": "Snowy Human City",
    "alias": [ "_bas", "Vi" ],
    "group": "village",
    "symbol": "village/human-city-snow-tile.png"
  },
  "^Vhcr": {
    "name": "Village",
    "editorName": "Ruined Human City",
    "alias": [ "_bas", "Vi" ],
    "group": "village",
    "symbol": "village/human-city-ruin-tile.png"
  },
  "^Vhh": {
    "name": "Village",
    "editorName": "Hill Stone Village",
    "alias": [ "_bas", "Vi" ],
    "group": [ "rough", "village" ],
    "symbol": "village/human-hills-tile.png"
  },
  "^Vhha": {
    "name": "Village",
    "editorName": "Snowy Hill Stone Village",
    "alias": [ "_bas", "Vi" ],
    "group": [ "frozen", "rough", "village" ],
    "symbol": "village/human-snow-hills-tile.png"
  },
  "^Vhhr": {
    "name": "Village",
    "editorName": "Ruined Hill Stone Village",
    "alias": [ "_bas", "Vi" ],
    "group": [ "rough", "village" ],
    "symbol": "village/human-hills-ruin-tile.png"
  },
  "^Vht": {
    "name": "Village",
    "editorName": "Tropical Village",
    "alias": [ "_bas", "Vi" ],
    "group": "village",
    "symbol": "village/tropical-tile.png"
  },
  "^Vd": {
    "name": "Village",
    "editorName": "Drake Village",
    "alias": [ "_bas", "Vi" ],
    "group": "village",
    "symbol": "village/drake-tile.png"
  },
  "^Vu": {
    "name": "Village",
    "editorName": "Cave Village",
    "alias": [ "_bas", "Vi" ],
    "group": [ "cave", "village" ],
    "symbol": "village/cave-tile.png"
  },
  "^Vud": {
    "name": "Village",
    "editorName": "Dwarven Village",
    "alias": [ "_bas", "Vi" ],
    "group": [ "cave", "village" ],
    "symbol": "village/dwarven-tile.png"
  },
  "^Vc": {
    "name": "Village",
    "editorName": "Hut",
    "alias": [ "_bas", "Vi" ],
    "group": "village",
    "symbol": "village/hut-tile.png"
  },
  "^Vca": {
    "name": "Village",
    "editorName": "Snowy Hut",
    "alias": [ "_bas", "Vi" ],
    "group": [ "frozen", "village" ],
    "symbol": "village/hut-snow-tile.png"
  },
  "^Vl": {
    "name": "Village",
    "editorName": "Log Cabin",
    "alias": [ "_bas", "Vi" ],
    "group": "village",
    "symbol": "village/log-cabin-tile.png"
  },
  "^Vla": {
    "name": "Village",
    "editorName": "Snowy Log Cabin",
    "alias": [ "_bas", "Vi" ],
    "group": [ "frozen", "village" ],
    "symbol": "village/log-cabin-snow-tile.png"
  },
  "^Vaa": {
    "name": "Village",
    "editorName": "Igloo",
    "alias": [ "_bas", "Vi" ],
    "group": [ "frozen", "village" ],
    "symbol": "village/igloo-tile.png"
  },
  "^Vhs": {
    "name": "Village",
    "editorName": "Swamp Village",
    "alias": [ "_bas", "Vi" ],
    "group": [ "village", "water" ],
    "symbol": "village/swampwater-tile.png"
  },
  "^Vm": {
    "name": "Village",
    "editorName": "Merfolk Village",
    "alias": "_bas",
    "group": [ "village", "water" ],
    "symbol": "village/coast-tile.png"
  },
  "^Vov": {
    "name": "Village",
    "editorName": "Village Overlay",
    "alias": "_bas",
    "group": [ "village", "special" ],
    "symbol": [ "village/village-overlay-editor.png" ]
  },
  "Ce": {
    "name": "Encampment",
    "alias": "Ch",
    "group": "castle",
    "symbol": "castle/encampment/regular-tile.png",
    "convex": {
      "ne": "castle/encampment/regular-convex-tr.png",
      "e" : "castle/encampment/regular-convex-r.png",
      "se": "castle/encampment/regular-convex-br.png",
      "sw": "castle/encampment/regular-convex-bl.png",
      "w" : "castle/encampment/regular-convex-l.png",
      "nw": "castle/encampment/regular-convex-tl.png"
    },
    "concave": {
      "ne": "castle/encampment/regular-concave-tr.png",
      "e" : "castle/encampment/regular-concave-r.png",
      "se": "castle/encampment/regular-concave-br.png",
      "sw": "castle/encampment/regular-concave-bl.png",
      "w" : "castle/encampment/regular-concave-l.png",
      "nw": "castle/encampment/regular-concave-tl.png"
    }
  },
  "Cea": {
    "name": "Encampment",
    "editorName": "Snowy Encampment",
    "alias": "Ch",
    "group": [ "castle", "frozen" ],
    "symbol": "castle/encampment/snow-tile.png",
    "convex": {
      "ne": "castle/encampment/snow-convex-tr.png",
      "e" : "castle/encampment/snow-convex-r.png",
      "se": "castle/encampment/snow-convex-br.png",
      "sw": "castle/encampment/snow-convex-bl.png",
      "w" : "castle/encampment/snow-convex-l.png",
      "nw": "castle/encampment/snow-convex-tl.png"
    },
    "concave": {
      "ne": "castle/encampment/snow-concave-tr.png",
      "e" : "castle/encampment/snow-concave-r.png",
      "se": "castle/encampment/snow-concave-br.png",
      "sw": "castle/encampment/snow-concave-bl.png",
      "w" : "castle/encampment/snow-concave-l.png",
      "nw": "castle/encampment/snow-concave-tl.png"
    }
  },
  "Co": {
    "name": "Castle",
    "editorName": "Orcish Castle",
    "alias": "Ch",
    "group": "castle",
    "symbol": "castle/orcish/tile.png",
    "convex": {
      "ne": "castle/orcish/fort-convex-tr.png",
      "e" : "castle/orcish/fort-convex-r.png",
      "se": "castle/orcish/fort-convex-br.png",
      "sw": "castle/orcish/fort-convex-bl.png",
      "w" : "castle/orcish/fort-convex-l.png",
      "nw": "castle/orcish/fort-convex-tl.png"
    },
    "concave": {
      "ne": "castle/orcish/fort-concave-tr.png",
      "e" : "castle/orcish/fort-concave-r.png",
      "se": "castle/orcish/fort-concave-br.png",
      "sw": "castle/orcish/fort-concave-bl.png",
      "w" : "castle/orcish/fort-concave-l.png",
      "nw": "castle/orcish/fort-concave-tl.png"
    }
  },
  "Coa": {
    "name": "Castle",
    "editorName": "Snowy Orcish Castle",
    "alias": "Ch",
    "group": [ "castle", "frozen" ],
    "symbol": "castle/winter-orcish/tile.png",
    "convex": {
      "ne": "castle/winter-orcish/fort-convex-tr.png",
      "e" : "castle/winter-orcish/fort-convex-r.png",
      "se": "castle/winter-orcish/fort-convex-br.png",
      "sw": "castle/winter-orcish/fort-convex-bl.png",
      "w" : "castle/winter-orcish/fort-convex-l.png",
      "nw": "castle/winter-orcish/fort-convex-tl.png"
    },
    "concave": {
      "ne": "castle/winter-orcish/fort-concave-tr.png",
      "e" : "castle/winter-orcish/fort-concave-r.png",
      "se": "castle/winter-orcish/fort-concave-br.png",
      "sw": "castle/winter-orcish/fort-concave-bl.png",
      "w" : "castle/winter-orcish/fort-concave-l.png",
      "nw": "castle/winter-orcish/fort-concave-tl.png"
    }
  },
  "Ch": {
    "name": "Castle",
    "editorName": "Human Castle",
    "group": "castle",
    "symbol": "castle/castle-tile.png",
    "convex": {
      "ne": "castle/castle-convex-tr.png",
      "e" : "castle/castle-convex-r.png",
      "se": "castle/castle-convex-br.png",
      "sw": "castle/castle-convex-bl.png",
      "w" : "castle/castle-convex-l.png",
      "nw": "castle/castle-convex-tl.png"
    },
    "concave": {
      "ne": "castle/castle-concave-tr.png",
      "e" : "castle/castle-concave-r.png",
      "se": "castle/castle-concave-br.png",
      "sw": "castle/castle-concave-bl.png",
      "w" : "castle/castle-concave-l.png",
      "nw": "castle/castle-concave-tl.png"
    }
  },
  "Cha": {
    "name": "Castle",
    "editorName": "Snowy Human Castle",
    "alias": [ "At", "Ch" ],
    "group": [ "castle", "frozen" ],
    "symbol": "castle/snowy/castle-tile.png",
    "convex": {
      "ne": "castle/snowy/castle-convex-tr.png",
      "e" : "castle/snowy/castle-convex-r.png",
      "se": "castle/snowy/castle-convex-br.png",
      "sw": "castle/snowy/castle-convex-bl.png",
      "w" : "castle/snowy/castle-convex-l.png",
      "nw": "castle/snowy/castle-convex-tl.png"
    },
    "concave": {
      "ne": "castle/snowy/castle-concave-tr.png",
      "e" : "castle/snowy/castle-concave-r.png",
      "se": "castle/snowy/castle-concave-br.png",
      "sw": "castle/snowy/castle-concave-bl.png",
      "w" : "castle/snowy/castle-concave-l.png",
      "nw": "castle/snowy/castle-concave-tl.png"
    }
  },
  "Cv": {
    "name": "Castle",
    "editorName": "Elvish Castle",
    "alias": "Ch",
    "group": "castle",
    "symbol": "castle/elven/tile.png",
    "convex": {
      "ne": "castle/elven/castle-convex-tr.png",
      "e" : "castle/elven/castle-convex-r.png",
      "se": "castle/elven/castle-convex-br.png",
      "sw": "castle/elven/castle-convex-bl.png",
      "w" : "castle/elven/castle-convex-l.png",
      "nw": "castle/elven/castle-convex-tl.png"
    },
    "concave": {
      "ne": "castle/elven/castle-concave-tr.png",
      "e" : "castle/elven/castle-concave-r.png",
      "se": "castle/elven/castle-concave-br.png",
      "sw": "castle/elven/castle-concave-bl.png",
      "w" : "castle/elven/castle-concave-l.png",
      "nw": "castle/elven/castle-concave-tl.png"
    }
  },
  "Cud": {
    "name": "Castle",
    "editorName": "Dwarven Castle",
    "alias": "Ch",
    "group": [ "castle", "cave" ],
    "symbol": "castle/dwarven-castle-tile.png",
    "convex": {
      "ne": "castle/dwarven-castle-convex-tr.png",
      "e" : "castle/dwarven-castle-convex-r.png",
      "se": "castle/dwarven-castle-convex-br.png",
      "sw": "castle/dwarven-castle-convex-bl.png",
      "w" : "castle/dwarven-castle-convex-l.png",
      "nw": "castle/dwarven-castle-convex-tl.png"
    },
    "concave": {
      "ne": "castle/dwarven-castle-concave-tr.png",
      "e" : "castle/dwarven-castle-concave-r.png",
      "se": "castle/dwarven-castle-concave-br.png",
      "sw": "castle/dwarven-castle-concave-bl.png",
      "w" : "castle/dwarven-castle-concave-l.png",
      "nw": "castle/dwarven-castle-concave-tl.png"
    }
  },
  "Chr": {
    "name": "Ruined Castle",
    "editorName": "Ruined Human Castle",
    "alias": "Ch",
    "group": "castle",
    "symbol": "castle/ruin-tile.png",
    "convex": {
      "ne": [ "castle/ruin-convex-tr.png", "castle/ruin2-convex-tr.png", "castle/ruin3-convex-tr.png", "castle/ruin4-convex-tr.png", "castle/ruin5-convex-tr.png" ],
      "e" : [ "castle/ruin-convex-r.png", "castle/ruin2-convex-r.png", "castle/ruin3-convex-r.png", "castle/ruin4-convex-r.png", "castle/ruin5-convex-r.png" ],
      "se": [ "castle/ruin-convex-br.png", "castle/ruin2-convex-br.png", "castle/ruin3-convex-br.png", "castle/ruin4-convex-br.png", "castle/ruin5-convex-br.png" ],
      "sw": [ "castle/ruin-convex-bl.png", "castle/ruin2-convex-bl.png", "castle/ruin3-convex-bl.png", "castle/ruin4-convex-bl.png", "castle/ruin5-convex-bl.png" ],
      "w" : [ "castle/ruin-convex-l.png", "castle/ruin2-convex-l.png", "castle/ruin3-convex-l.png", "castle/ruin4-convex-l.png", "castle/ruin5-convex-l.png" ],
      "nw": [ "castle/ruin-convex-tl.png", "castle/ruin2-convex-tl.png", "castle/ruin3-convex-tl.png", "castle/ruin4-convex-tl.png", "castle/ruin5-convex-tl.png" ]
    },
    "concave": {
      "ne": [ "castle/ruin-concave-tr.png", "castle/ruin2-concave-tr.png", "castle/ruin3-concave-tr.png", "castle/ruin4-concave-tr.png", "castle/ruin5-concave-tr.png" ],
      "e" : [ "castle/ruin-concave-r.png", "castle/ruin2-concave-r.png", "castle/ruin3-concave-r.png", "castle/ruin4-concave-r.png", "castle/ruin5-concave-r.png" ],
      "se": [ "castle/ruin-concave-br.png", "castle/ruin2-concave-br.png", "castle/ruin3-concave-br.png", "castle/ruin4-concave-br.png", "castle/ruin5-concave-br.png" ],
      "sw": [ "castle/ruin-concave-bl.png", "castle/ruin2-concave-bl.png", "castle/ruin3-concave-bl.png", "castle/ruin4-concave-bl.png", "castle/ruin5-concave-bl.png" ],
      "w" : [ "castle/ruin-concave-l.png", "castle/ruin2-concave-l.png", "castle/ruin3-concave-l.png", "castle/ruin4-concave-l.png", "castle/ruin5-concave-l.png" ],
      "nw": [ "castle/ruin-concave-tl.png", "castle/ruin2-concave-tl.png", "castle/ruin3-concave-tl.png", "castle/ruin4-concave-tl.png", "castle/ruin5-concave-tl.png" ]
    }
  },
  "Chw": {
    "name": "Ruined Castle",
    "editorName": "Sunken Human Ruin",
    "alias": "Ch",
    "group": [ "castle", "water" ],
    "symbol": "castle/sunken-ruin-tile.png",
    "convex": {
      "ne": [ "castle/sunken-ruin-convex-tr.png", "castle/sunken-ruin2-convex-tr.png", "castle/sunken-ruin3-convex-tr.png", "castle/sunken-ruin4-convex-tr.png", "castle/sunken-ruin5-convex-tr.png", "castle/sunken-ruin6-convex-tr.png" ],
      "e" : [ "castle/sunken-ruin-convex-r.png", "castle/sunken-ruin2-convex-r.png", "castle/sunken-ruin3-convex-r.png", "castle/sunken-ruin4-convex-r.png", "castle/sunken-ruin5-convex-r.png", "castle/sunken-ruin6-convex-r.png" ],
      "se": [ "castle/sunken-ruin-convex-br.png", "castle/sunken-ruin2-convex-br.png", "castle/sunken-ruin3-convex-br.png", "castle/sunken-ruin4-convex-br.png", "castle/sunken-ruin5-convex-br.png", "castle/sunken-ruin6-convex-br.png" ],
      "sw": [ "castle/sunken-ruin-convex-bl.png", "castle/sunken-ruin2-convex-bl.png", "castle/sunken-ruin3-convex-bl.png", "castle/sunken-ruin4-convex-bl.png", "castle/sunken-ruin5-convex-bl.png", "castle/sunken-ruin6-convex-bl.png" ],
      "w" : [ "castle/sunken-ruin-convex-l.png", "castle/sunken-ruin2-convex-l.png", "castle/sunken-ruin3-convex-l.png", "castle/sunken-ruin4-convex-l.png", "castle/sunken-ruin5-convex-l.png", "castle/sunken-ruin6-convex-l.png" ],
      "nw": [ "castle/sunken-ruin-convex-tl.png", "castle/sunken-ruin2-convex-tl.png", "castle/sunken-ruin3-convex-tl.png", "castle/sunken-ruin4-convex-tl.png", "castle/sunken-ruin5-convex-tl.png", "castle/sunken-ruin6-convex-tl.png" ]
    },
    "concave": {
      "ne": [ "castle/sunken-ruin-concave-tr.png", "castle/sunken-ruin2-concave-tr.png", "castle/sunken-ruin3-concave-tr.png", "castle/sunken-ruin4-concave-tr.png", "castle/sunken-ruin5-concave-tr.png", "castle/sunken-ruin6-concave-tr.png" ],
      "e" : [ "castle/sunken-ruin-concave-r.png", "castle/sunken-ruin2-concave-r.png", "castle/sunken-ruin3-concave-r.png", "castle/sunken-ruin4-concave-r.png", "castle/sunken-ruin5-concave-r.png", "castle/sunken-ruin6-concave-r.png" ],
      "se": [ "castle/sunken-ruin-concave-br.png", "castle/sunken-ruin2-concave-br.png", "castle/sunken-ruin3-concave-br.png", "castle/sunken-ruin4-concave-br.png", "castle/sunken-ruin5-concave-br.png", "castle/sunken-ruin6-concave-br.png" ],
      "sw": [ "castle/sunken-ruin-concave-bl.png", "castle/sunken-ruin2-concave-bl.png", "castle/sunken-ruin3-concave-bl.png", "castle/sunken-ruin4-concave-bl.png", "castle/sunken-ruin5-concave-bl.png", "castle/sunken-ruin6-concave-bl.png" ],
      "w" : [ "castle/sunken-ruin-concave-l.png", "castle/sunken-ruin2-concave-l.png", "castle/sunken-ruin3-concave-l.png", "castle/sunken-ruin4-concave-l.png", "castle/sunken-ruin5-concave-l.png", "castle/sunken-ruin6-concave-l.png" ],
      "nw": [ "castle/sunken-ruin-concave-tl.png", "castle/sunken-ruin2-concave-tl.png", "castle/sunken-ruin3-concave-tl.png", "castle/sunken-ruin4-concave-tl.png", "castle/sunken-ruin5-concave-tl.png", "castle/sunken-ruin6-concave-tl.png" ]
    }
  },
  "Chs": {
    "name": "Ruined Castle",
    "editorName": "Swamp Human Ruin",
    "alias": "Ch",
    "group": [ "castle", "water" ],
    "symbol": "castle/swamp-ruin-tile.png",
    "convex": {
      "ne": [ "castle/sunken-ruin-convex-tr.png", "castle/sunken-ruin2-convex-tr.png", "castle/sunken-ruin3-convex-tr.png", "castle/sunken-ruin4-convex-tr.png", "castle/sunken-ruin5-convex-tr.png", "castle/sunken-ruin6-convex-tr.png" ],
      "e" : [ "castle/sunken-ruin-convex-r.png", "castle/sunken-ruin2-convex-r.png", "castle/sunken-ruin3-convex-r.png", "castle/sunken-ruin4-convex-r.png", "castle/sunken-ruin5-convex-r.png", "castle/sunken-ruin6-convex-r.png" ],
      "se": [ "castle/sunken-ruin-convex-br.png", "castle/sunken-ruin2-convex-br.png", "castle/sunken-ruin3-convex-br.png", "castle/sunken-ruin4-convex-br.png", "castle/sunken-ruin5-convex-br.png", "castle/sunken-ruin6-convex-br.png" ],
      "sw": [ "castle/sunken-ruin-convex-bl.png", "castle/sunken-ruin2-convex-bl.png", "castle/sunken-ruin3-convex-bl.png", "castle/sunken-ruin4-convex-bl.png", "castle/sunken-ruin5-convex-bl.png", "castle/sunken-ruin6-convex-bl.png" ],
      "w" : [ "castle/sunken-ruin-convex-l.png", "castle/sunken-ruin2-convex-l.png", "castle/sunken-ruin3-convex-l.png", "castle/sunken-ruin4-convex-l.png", "castle/sunken-ruin5-convex-l.png", "castle/sunken-ruin6-convex-l.png" ],
      "nw": [ "castle/sunken-ruin-convex-tl.png", "castle/sunken-ruin2-convex-tl.png", "castle/sunken-ruin3-convex-tl.png", "castle/sunken-ruin4-convex-tl.png", "castle/sunken-ruin5-convex-tl.png", "castle/sunken-ruin6-convex-tl.png" ]
    },
    "concave": {
      "ne": [ "castle/sunken-ruin-concave-tr.png", "castle/sunken-ruin2-concave-tr.png", "castle/sunken-ruin3-concave-tr.png", "castle/sunken-ruin4-concave-tr.png", "castle/sunken-ruin5-concave-tr.png", "castle/sunken-ruin6-concave-tr.png" ],
      "e" : [ "castle/sunken-ruin-concave-r.png", "castle/sunken-ruin2-concave-r.png", "castle/sunken-ruin3-concave-r.png", "castle/sunken-ruin4-concave-r.png", "castle/sunken-ruin5-concave-r.png", "castle/sunken-ruin6-concave-r.png" ],
      "se": [ "castle/sunken-ruin-concave-br.png", "castle/sunken-ruin2-concave-br.png", "castle/sunken-ruin3-concave-br.png", "castle/sunken-ruin4-concave-br.png", "castle/sunken-ruin5-concave-br.png", "castle/sunken-ruin6-concave-br.png" ],
      "sw": [ "castle/sunken-ruin-concave-bl.png", "castle/sunken-ruin2-concave-bl.png", "castle/sunken-ruin3-concave-bl.png", "castle/sunken-ruin4-concave-bl.png", "castle/sunken-ruin5-concave-bl.png", "castle/sunken-ruin6-concave-bl.png" ],
      "w" : [ "castle/sunken-ruin-concave-l.png", "castle/sunken-ruin2-concave-l.png", "castle/sunken-ruin3-concave-l.png", "castle/sunken-ruin4-concave-l.png", "castle/sunken-ruin5-concave-l.png", "castle/sunken-ruin6-concave-l.png" ],
      "nw": [ "castle/sunken-ruin-concave-tl.png", "castle/sunken-ruin2-concave-tl.png", "castle/sunken-ruin3-concave-tl.png", "castle/sunken-ruin4-concave-tl.png", "castle/sunken-ruin5-concave-tl.png", "castle/sunken-ruin6-concave-tl.png" ]
    }
  },
  "Cd": {
    "name": "Castle",
    "editorName": "Desert Castle",
    "alias": "Ch",
    "group": [ "castle", "desert" ],
    "symbol": "castle/sand/tile.png",
    "convex": {
      "ne": "castle/sand/castle-convex-tr.png",
      "e" : "castle/sand/castle-convex-r.png",
      "se": "castle/sand/castle-convex-br.png",
      "sw": "castle/sand/castle-convex-bl.png",
      "w" : "castle/sand/castle-convex-l.png",
      "nw": "castle/sand/castle-convex-tl.png"
    },
    "concave": {
      "ne": "castle/sand/castle-concave-tr.png",
      "e" : "castle/sand/castle-concave-r.png",
      "se": "castle/sand/castle-concave-br.png",
      "sw": "castle/sand/castle-concave-bl.png",
      "w" : "castle/sand/castle-concave-l.png",
      "nw": "castle/sand/castle-concave-tl.png"
    }
  },
  "Cdr": {
    "name": "Ruined Castle",
    "editorName": "Ruined Desert Castle",
    "alias": "Ch",
    "group": [ "castle", "desert" ],
    "symbol": "castle/sand/ruin-tile.png",
    "convex": {
      "ne": "castle/sand/ruin-castle-convex-tr.png",
      "e" : "castle/sand/ruin-castle-convex-r.png",
      "se": "castle/sand/ruin-castle-convex-br.png",
      "sw": "castle/sand/ruin-castle-convex-bl.png",
      "w" : "castle/sand/ruin-castle-convex-l.png",
      "nw": "castle/sand/ruin-castle-convex-tl.png"
    },
    "concave": {
      "ne": "castle/sand/ruin-castle-concave-tr.png",
      "e" : "castle/sand/ruin-castle-concave-r.png",
      "se": "castle/sand/ruin-castle-concave-br.png",
      "sw": "castle/sand/ruin-castle-concave-bl.png",
      "w" : "castle/sand/ruin-castle-concave-l.png",
      "nw": "castle/sand/ruin-castle-concave-tl.png"
    }
  },
  "Ke": {
    "name": "Encampment Keep",
    "alias": "Ch",
    "group": "castle",
    "symbol": "castle/encampment/regular-keep-tile.png"
  },
  "Ket": {
    "name": "Encampment Keep",
    "editorName": "Tall Encampment Keep",
    "alias": "Ch",
    "group": "castle",
    "symbol": "castle/encampment/tall-keep-tile.png"
  },
  "Kea": {
    "name": "Encampment Keep",
    "editorName": "Snowy Encampment Keep",
    "alias": "Ch",
    "group": [ "castle", "frozen" ],
    "symbol": "castle/encampment/snow-keep-tile.png"
  },
  "Ko": {
    "name": "Keep",
    "editorName": "Orcish Keep",
    "alias": "Ch",
    "group": "castle",
    "symbol": "castle/orcish/keep-tile.png"
  },
  "Koa": {
    "name": "Keep",
    "editorName": "Snowy Orcish Keep",
    "alias": "Ch",
    "group": "castle",
    "symbol": "castle/winter-orcish/keep-tile.png"
  },
  "Kh": {
    "name": "Keep",
    "editorName": "Human Castle Keep",
    "alias": "Ch",
    "group": "castle",
    "symbol": "castle/keep-tile.png"
  },
  "Kha": {
    "name": "Keep",
    "editorName": "Snowy Human Castle Keep",
    "alias": [ "At", "Ch" ],
    "group": [ "castle", "frozen" ],
    "symbol": "castle/snowy/keep-tile.png"
  },
  "Kv": {
    "name": "Keep",
    "editorName": "Elven Castle Keep",
    "alias": "Ch",
    "group": "castle",
    "symbol": "castle/elven/keep-tile.png"
  },
  "Kud": {
    "name": "Keep",
    "editorName": "Dwarven Castle Keep",
    "alias": "Ch",
    "group": "castle",
    "symbol": "castle/dwarven-keep-tile.png"
  },
  "Khr": {
    "name": "Ruined Keep",
    "editorName": "Ruined Human Castle Keep",
    "alias": "Ch",
    "group": "castle",
    "symbol": "castle/ruined-keep-tile.png"
  },
  "Khw": {
    "name": "Ruined Keep",
    "editorName": "Sunken Human Castle Keep",
    "alias": [ "Ch", "Ww" ],
    "group": [ "castle", "water" ],
    "symbol": "castle/sunken-keep-tile.png"
  },
  "Khs": {
    "name": "Ruined Keep",
    "editorName": "Swamp Human Castle Keep",
    "alias": [ "Ch", "Ss" ],
    "group": [ "castle", "water" ],
    "symbol": "castle/swamp-keep-tile.png"
  },
  "Kd": {
    "name": "Keep",
    "editorName": "Desert Keep",
    "alias": "Ch",
    "group": [ "castle", "desert" ],
    "symbol": "castle/sand/keep-tile.png"
  },
  "Kdr": {
    "name": "Ruined Keep",
    "editorName": "Ruined Desert Keep",
    "alias": "Ch",
    "group": [ "castle", "desert" ],
    "symbol": "castle/sand/ruin-keep-tile.png"
  },
  "^Cov": {
    "name": "Castle",
    "editorName": "Castle Overlay",
    "alias": "_bas",
    "group": [ "castle", "special" ],
    "symbol": "castle/castle-overlay-editor.png"
  },
  "^Kov": {
    "name": "Keep",
    "editorName": "Keep Overlay",
    "alias": "_bas",
    "group": [ "castle", "special" ],
    "symbol": "castle/keep-overlay-editor.png"
  },
  "^Bw|": {
    "name": "Bridge",
    "editorName": "Wooden Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "water" ],
    "symbol": "bridge/wood-n-s.png"
  },
  "^Bw/": {
    "name": "Bridge",
    "editorName": "Wooden Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "water" ],
    "symbol": "bridge/wood-ne-sw.png"
  },
  "^Bw\\": {
    "name": "Bridge",
    "editorName": "Wooden Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "water" ],
    "symbol": "bridge/wood-se-nw.png"
  },
  "^Bw|r": {
    "name": "Bridge",
    "editorName": "Rotting Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "water" ],
    "symbol": "bridge/wood-rotting-n-s.png"
  },
  "^Bw/r": {
    "name": "Bridge",
    "editorName": "Rotting Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "water" ],
    "symbol": "bridge/wood-rotting-ne-sw.png"
  },
  "^Bw\\r": {
    "name": "Bridge",
    "editorName": "Rotting Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "water" ],
    "symbol": "bridge/wood-rotting-se-nw.png"
  },
  "^Bsb|": {
    "name": "Bridge",
    "editorName": "Basic Stone Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "water" ],
    "symbol": "bridge/stonebridge-n-s-tile.png"
  },
  "^Bsb/": {
    "name": "Bridge",
    "editorName": "Basic Stone Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "water" ],
    "symbol": "bridge/stonebridge-ne-sw-tile.png"
  },
  "^Bsb\\": {
    "name": "Bridge",
    "editorName": "Basic Stone Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "water" ],
    "symbol": "bridge/stonebridge-se-nw-tile.png"
  },
  "^Bs|": {
    "name": "Bridge",
    "editorName": "Cave Chasm Bridge",
    "alias": [ "_bas", "Uu" ],
    "group": [ "bridge", "cave" ],
    "symbol": "cave/chasm-stone-bridge-s-n-tile.png"
  },
  "^Bs/": {
    "name": "Bridge",
    "editorName": "Cave Chasm Bridge",
    "alias": [ "_bas", "Uu" ],
    "group": [ "bridge", "cave" ],
    "symbol": "cave/chasm-stone-bridge-sw-ne-tile.png"
  },
  "^Bs\\": {
    "name": "Bridge",
    "editorName": "Cave Chasm Bridge",
    "alias": [ "_bas", "Uu" ],
    "group": [ "bridge", "cave" ],
    "symbol": "cave/chasm-stone-bridge-se-nw-tile.png"
  },
  "^Bh|": {
    "name": "Bridge",
    "editorName": "Hanging Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "cave" ],
    "symbol": "bridge/hanging-s-n-tile.png"
  },
  "^Bh/": {
    "name": "Bridge",
    "editorName": "Hanging Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "cave" ],
    "symbol": "bridge/hanging-sw-ne-tile.png"
  },
  "^Bh\\": {
    "name": "Bridge",
    "editorName": "Hanging Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "cave" ],
    "symbol": "bridge/hanging-se-nw-tile.png"
  },
  "^Bcx|": {
    "name": "Bridge",
    "editorName": "Stone Chasm Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "cave" ],
    "symbol": "bridge/stonebridge-n-s-tile.png"
  },
  "^Bcx/": {
    "name": "Bridge",
    "editorName": "Stone Chasm Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "cave" ],
    "symbol": "bridge/stonebridge-ne-sw-tile.png"
  },
  "^Bcx\\": {
    "name": "Bridge",
    "editorName": "Stone Chasm Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "cave" ],
    "symbol": "bridge/stonebridge-se-nw-tile.png"
  },
  "^Bp|": {
    "name": "Bridge",
    "editorName": "Plank Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "cave" ],
    "symbol": "bridge/planks-s-n.png"
  },
  "^Bp/": {
    "name": "Bridge",
    "editorName": "Plank Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "cave" ],
    "symbol": "bridge/planks-sw-ne.png"
  },
  "^Bp\\": {
    "name": "Bridge",
    "editorName": "Plank Bridge",
    "alias": [ "_bas", "Gt" ],
    "group": [ "bridge", "cave" ],
    "symbol": "bridge/planks-se-nw.png"
  },
  "_off^_usr": {
    "name": "Void",
    "editorName": "Off Map",
    "group": [ "obstacle", "special" ],
    "symbol": "off-map/offmap-editor.png"
  },
  "^fme": {
    "name": "Void",
    "editorName": "Experimental Fake Map Edge",
    "group": [ "obstacle", "special" ],
    "symbol": "off-map/border-ne-se-s-sw-nw-n.png"
  },
  "_s": {
    "name": "Shroud",
    "group": "special",
    "symbol": "void/shroud-editor.png"
  },
  "_f": {
    "name": "Fog",
    "group": "special",
    "symbol": "fog/fog-editor.png"
  }
};
