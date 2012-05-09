/* terrainCodeTable.js
 * JavaScript file for Wesnoth Canvas
 * last updated 30 Apr 12
 *
 * TO-DO: Add alternates and place images for special drawing tiles, such as walls, keeps and cliffs.
 *
 */

var terrainTable = {
  'Wog': {
    'name': 'Gray Deep Water',
    'alias': 'Wo',
    'group': 'water',
    'tile': 'water/ocean-grey-tile.png'
  },
  'Wo': {
    'name': 'Medium Deep Water',
    'group': 'water',
    'tile': 'water/ocean-tile.png'
  },
  'Wot': {
    'name': 'Tropical Deep Water',
    'alias': 'Wo',
    'group': 'water',
    'tile': 'water/ocean-tropical-tile.png'
  },
  'Wwg': {
    'name': 'Gray Shallow Water',
    'alias': 'Ww',
    'group': 'water',
    'tile': 'water/coast-grey-tile.png'
  },
  'Ww': {
    'name': 'Medium Shallow Water',
    'group': 'water',
    'tile': 'water/coast-tile.png'
  },
  'Wwt': {
    'name': 'Tropical Shallow Water',
    'alias': 'Ww',
    'group': 'water',
    'tile': 'water/coast-tropical-tile.png'
  },
  'Wwf': {
    'name': 'Ford',
    'alias': [ 'Gt', 'Ww' ],
    'group': 'water',
    'tile': 'water/ford-tile.png'
  },
  'Wwrg': {
    'name': 'Gray Coastal Reef',
    'alias': 'Wwr',
    'group': 'water',
    'tile': 'water/reef-gray-tile.png'
  },
  'Wwr': {
    'name': 'Coastal Reef',
    'group': 'water',
    'tile': 'water/reef-tile.png'
  },
  'Wwrt': {
    'name': 'Tropical Coastal Reef',
    'alias': 'Wwr',
    'group': 'water',
    'tile': 'water/reef-tropical-tile.png'
  },
  'Ss': {
    'name': 'Swamp',
    'group': 'water',
    'tile': 'swamp/water-tile.png'
  },
  'Sm': {
    'name': 'Muddy Quagmire',
    'alias': 'Ss',
    'group': 'Water',
    'tile': 'swamp/mud-tile.png'
  },
  'Gg': {
    'name': 'Green Grass',
    'alias': 'Gt',
    'group': 'flat',
    'tile': 'grass/green.png'
  },
  'Gs': {
    'name': 'Semi-dry Grass',
    'alias': 'Gt',
    'group': 'flat',
    'tile': 'grass/semi-dry.png'
  },
  'Gd': {
    'name': 'Dry Grass',
    'alias': 'Gt',
    'group': 'flat',
    'tile': 'grass/dry.png'
  },
  'Gll': {
    'name': 'Leaf Litter',
    'alias': 'Gt',
    'group': 'flat',
    'tile': 'grass/leaf-litter.png'
  },
  'Rb': {
    'name': 'Dark Dirt',
    'alias': 'Gt',
    'group': 'flat',
    'tile': 'flat/dirt-dark.png'
  },
  'Re': {
    'name': 'Regular Dirt',
    'alias': 'Gt',
    'group': 'flat',
    'tile': 'flat/dirt.png'
  },
  'Rd': {
    'name': 'Dry Dirt',
    'alias': 'Gt',
    'group': [ 'desert', 'flat' ],
    'tile': 'flat/desert-road.png'
  },
  'Rr': {
    'name': 'Regular Cobbles',
    'alias': 'Gt',
    'group': 'flat',
    'tile': 'flat/road.png'
  },
  'Rrc': {
    'name': 'Clean Gray Cobbles',
    'alias': 'Gt',
    'group': 'flat',
    'tile': 'flat/road-clean.png'
  },
  'Rp': {
    'name': 'Overgrown Cobbles',
    'alias': 'Gt',
    'group': 'flat',
    'tile': 'flat/stone-path.png'
  },
  'Ai': {
    'name': 'Ice',
    'alias': 'At',
    'group': 'frozen',
    'tile': 'frozen/ice.png'
  },
  'Aa': {
    'name': 'Snow',
    'alias': 'At',
    'group': 'frozen',
    'tile': 'frozen/snow.png'
  },
  'Dd': {
    'name': 'Desert Sands',
    'alias': 'Ds',
    'group': 'desert',
    'tile': 'sand/desert.png'
  },
  'Ds': {
    'name': 'Beach Sands',
    'group': 'desert',
    'tile': 'sand/beach.png'
  },
  'Dd^Do': {
    'name': 'Oasis',
    'alias': 'Ds',
    'group': [ 'desert', 'forest' ],
    'tile': 'sand/desert-oasis.png'
  },
  '^Dr': {
    'name': 'Rubble',
    'alias': [ '_bas', 'Hh' ],
    'group': [ 'desert', 'forest' ],
    'tile': 'misc/rubble-tile.png'
  },
  'Dd^Dc': {
    'name': 'Crater',
    'alias': 'Ds',
    'group': 'desert',
    'tile': 'sand/crater.png'
  },
  '^Efm': {
    'name': 'Mixed Flowers',
    'alias': 'Xx',
    'group': 'embellishments',
    'tile': 'embellishments/flowers-mixed.png'
  },
  '^Gvs': {
    'name': 'Farmland',
    'alias': '_bas',
    'group': 'embellishments',
    'tile': 'embellishments/farm-veg-spring-icon.png'
  },
  '^Es': {
    'name': 'Stones',
    'alias': '_bas',
    'group': 'embellishments',
    'tile': 'embellishments/stones-small7.png'
  },
  '^Em': {
    'name': 'Small Mushrooms',
    'alias': '_bas',
    'group': 'embellishments',
    'tile': 'embellishments/mushroom.png'
  },
  '^Emf': {
    'name': 'Mushroom Farm',
    'alias': '_bas',
    'group': [ 'cave', 'embellishments' ],
    'tile': 'embellishments/mushroom-farm-small.png'
  },
  '^Edp': {
    'name': 'Desert Plants',
    'alias': '_bas',
    'group': [ 'desert', 'embellishments' ],
    'tile': 'embellishments/desert-plant5.png'
  },
  '^Edpp': {
    'name': 'Desert Plants without Bones',
    'alias': '_bas',
    'group': [ 'desert', 'embellishments' ],
    'tile': 'embellishments/desert-plant.png'
  },
  '^Wm': {
    'name': 'Windmill',
    'alias': '_bas',
    'group': 'embellishments',
    'tile': 'misc/windmill-tile.png'
  },
  '^Eff': {
    'name': 'Fence',
    'alias': '_bas',
    'group': 'embellishments',
    'tile': 'embellishments/fence-se-nw-01.png'
  },
  '^Esd': {
    'name': 'Stones with Sand Drifts',
    'alias': '_bas',
    'group': [ 'desert', 'embellishments' ],
    'tile': 'embellishments/rocks.png'
  },
  '^Ewl': {
    'name': 'Water Lilies',
    'alias': '_bas',
    'group': [ 'embellishments', 'water' ],
    'tile': 'embellishments/water-lilies-tile.png'
  },
  '^Ewf': {
    'name': 'Flowering Water Lilies',
    'alias': '_bas',
    'group': [ 'embellishments', 'water' ],
    'tile': 'embellishments/water-lilies-flower-tile.png'
  },
  '^Fet': {
    'name': 'Great Tree',
    'alias': [ '_bas', 'Ft' ],
    'group': 'forest',
    'tile': 'forest/great-tree-tile.png'
  },
  '^Fetd': {
    'name': 'Dead Great Tree',
    'alias': [ '_bas', 'Ft' ],
    'group': 'forest',
    'tile': 'forest/great-tree-dead-tile.png'
  },
  '^Ft': {
    'name': 'Tropical Forest',
    'alias': [ '_bas', 'Ft' ],
    'group': 'forest',
    'tile': 'forest/tropical-tile.png'
  },
  '^Fp': {
    'name': 'Pine Forest',
    'alias': [ '_bas', 'Ft' ],
    'group': 'forest',
    'tile': 'forest/pine-tile.png'
  },
  '^Fpa': {
    'name': 'Snowy Pine Forest',
    'alias': [ '_bas', 'At', 'Ft' ],
    'group': [ 'forest', 'frozen' ],
    'tile': 'forest/snow-forest-tile.png'
  },
  '^Fds': {
    'name': 'Summer Deciduous Forest',
    'alias': [ '_bas', 'Ft' ],
    'group': 'forest',
    'tile': 'forest/deciduous-summer-tile.png'
  },
  '^Fdf': {
    'name': 'Fall Deciduous Forest',
    'alias': [ '_bas', 'Ft' ],
    'group': 'forest',
    'tile': 'forest/deciduous-fall-tile.png'
  },
  '^Fdw': {
    'name': 'Winter Deciduous Forest',
    'alias': [ '_bas', 'Ft' ],
    'group': 'forest',
    'tile': 'forest/deciduous-winter-tile.png'
  },
  '^Fda': {
    'name': 'Snowy Deciduous Forest',
    'alias': [ '_bas', 'At', 'Ft' ],
    'group': 'forest',
    'tile': 'forest/deciduous-winter-snow-tile.png'
  },
  '^Fms': {
    'name': 'Summer Mixed Forest',
    'alias': [ '_bas', 'Ft' ],
    'group': 'forest',
    'tile': 'forest/mixed-summer-tile.png'
  },
  '^Fmf': {
    'name': 'Fall Mixed Forest',
    'alias': [ '_bas', 'Ft' ],
    'group': 'forest',
    'tile': 'forest/mixed-fall-tile.png'
  },
  '^Fmw': {
    'name': 'Winter Mixed Forest',
    'alias': [ '_bas', 'Ft' ],
    'group': 'forest',
    'tile': 'forest/mixed-winter-tile.png'
  },
  '^Gma': {
    'name': 'Snowy Mixed Forest',
    'alias': [ '_bas', 'At', 'Ft' ],
    'group': [ 'forest', 'frozen' ],
    'tile': 'forest/mixed-winter-snow-tile.png'
  },
  'Hh': {
    'name': 'Regular Hills',
    'alias': 'Hh',
    'group': 'rough',
    'tile': 'hills/regular.png'
  },
  'Hhd': {
    'name': 'Dry Hills',
    'alias': 'Hh',
    'group': 'rough',
    'tile': 'hills/dry.png'
  },
  'Hd': {
    'name': 'Dunes',
    'alias': [ 'Ds', 'Hh' ],
    'group': [ 'desert', 'rough' ],
    'tile': 'hills/desert.png'
  },
  'Ha': {
    'name': 'Snow Hills',
    'alias': [ 'At', 'Hh' ],
    'group': [ 'frozen', 'rough' ],
    'tile': 'hills/snow.png'
  },
  'Mm': {
    'name': 'Mountains',
    'group': 'rough',
    'tile': 'mountains/basic-tile.png'
  },
  'Md': {
    'name': 'Dry Mountains',
    'alias': 'Mm',
    'group': [ 'desert', 'rough' ],
    'tile': 'mountains/dry-tile.png'
  },
  'Ms': {
    'name': 'Snowy Mountains',
    'alias': [ 'At', 'Mm' ],
    'group': [ 'frozen', 'rough' ],
    'tile': 'hills/snow.png'
  },
  'Hh^Fp': {
    'name': 'Forested Hills',
    'alias': [ 'Ft', 'Hh' ],
    'group': [ 'forest', 'rough' ],
    'tile': 'forest/forested-hills-tile.png'
  },
  'Ha^Fpa': {
    'name': 'Forested Snow Hills',
    'alias': [ 'At', 'Ft', 'Hh' ],
    'group': [ 'forest', 'frozen', 'rough' ],
    'tile': 'forest/forested-snow-hills-tile.png'
  },
  'Hh^Fds': {
    'name': 'Summer Deciduous Forested Hills',
    'alias': [ 'Ft', 'Hh' ],
    'group': [ 'forest', 'rough' ],
    'tile': 'forest/forested-deciduous-summer-hills-tile.png'
  },
  'Hhd^Fdf': {
    'name': 'Fall Deciduous Forested Hills',
    'alias': [ 'Ft', 'Hh' ],
    'group': [ 'forest', 'rough' ],
    'tile': 'forest/forested-deciduous-fall-hills-tile.png'
  },
  'Hhd^Fdw': {
    'name': 'Winter Deciduous Forested Hills',
    'alias': [ 'Ft', 'Hh' ],
    'group': [ 'forest', 'rough' ],
    'tile': 'forest/forested-deciduous-winter-hills-tile.png'
  },
  'Ha^Fda': {
    'name': 'Snowy Deciduous Forested Hills',
    'alias': [ 'At', 'Ft', 'Hh' ],
    'group': [ 'forest', 'frozen', 'rough' ],
    'tile': 'forest/forested-deciduous-winter-snow-hills-tile.png'
  },
  'Hh^Fms': {
    'name': 'Summer Mixed Forested Hills',
    'alias': [ 'Ft', 'Hh' ],
    'group': [ 'forest', 'rough' ],
    'tile': 'forest/forested-mixed-summer-hills-tile.png'
  },
  'Hhd^Fmf': {
    'name': 'Fall Mixed Forested Hills',
    'alias': [ 'Ft', 'Hh' ],
    'group': [ 'forest', 'rough' ],
    'tile': 'forest/forested-mixed-fall-hills-tile.png'
  },
  'Hhd^Fmw': {
    'name': 'Winter Mixed Forested Hills',
    'alias': [ 'Ft', 'Hh' ],
    'group': [ 'forest', 'rough' ],
    'tile': 'forest/forested-mixed-winter-hills-tile.png'
  },
  'Ha^Fma': {
    'name': 'Snowy Mixed Forested Hills',
    'alias': [ 'At', 'Ft', 'Hh' ],
    'group': [ 'forest', 'frozen', 'rough' ],
    'tile': 'forest/forested-mixed-winter-snow-hills-tile.png'
  },
  'Iwr': {
    'name': 'Basic Wooden Floor',
    'alias': 'Gt',
    'group': 'flat',
    'tile': 'interior/wood-regular.png'
  },
  '^Ii': {
    'name': 'Beam of Light',
    'alias': '_bas',
    'group': 'cave',
    'tile': 'cave/beam-tile.png'
  },
  'Uu': {
    'name': 'Cave Floor',
    'group': 'cave',
    'tile': 'cave/floor6.png'
  },
  'Uue': {
    'name': 'Earthy Cave Floor',
    'alias': 'Uu',
    'group': 'cave',
    'tile': 'cave/earthy-floor3.png'
  },
  'Urb': {
    'name': 'Dark Flagstones',
    'alias': 'Gt',
    'group': 'cave',
    'tile': 'cave/flagstones-dark.png'
  },
  'Ur': {
    'name': 'Cave Path',
    'alias': 'Gt',
    'group': 'cave',
    'tile': 'cave/path.png'
  },
  '^Uf': {
    'name': 'Mushroom Grove',
    'group': [ 'cave', 'forest' ],
    'tile': 'forest/mushrooms-tile.png'
  },
  '^Ufi': {
    'name': 'Lit Mushroom Grove',
    'alias': '^Uf',
    'group': 'cave',
    'tile': 'forest/mushrooms-beam-tile.png'
  },
  'Uh': {
    'name': 'Rockbound Cave',
    'alias': [ 'Uu', 'Hh' ],
    'group': [ 'cave', 'rough' ],
    'tile': 'cave/hills-variation.png'
  },
  '^Br|': {
    'name': 'Mine Rail',
    'alias': '_bas',
    'group': 'cave',
    'tile': 'misc/rails-n-s.png'
  },
  '^Br/': {
    'name': 'Mine Rail',
    'alias': '_bas',
    'group': 'cave',
    'tile': 'misc/rails-ne-sw.png'
  },
  '^Br\\': {
    'name': 'Mine Rail',
    'alias': '_bas',
    'group': 'cave',
    'tile': 'misc/rails-se-nw.png'
  },
  'Qxu': {
    'name': 'Regular Chasm',
    'alias': 'Qt',
    'group': [ 'cave', 'obstacle' ],
    'tile': 'chasm/regular-tile.png'
  },
  'Qxe': {
    'name': 'Earthy Chasm',
    'alias': 'Qt',
    'group': [ 'cave', 'obstacle' ],
    'tile': 'chasm/earthy-tile.png'
  },
  'Qxua': {
    'name': 'Ethereal Abyss',
    'alias': 'Qt',
    'group': 'obstacle',
    'tile': 'chasm/abyss-tile.png'
  },
  'Ql': {
    'name': 'Lava Chasm',
    'alias': 'Qt',
    'group': [ 'cave', 'obstacle' ],
    'tile': 'unwalkable/lava-chasm-tile.png'
  },
  'Qlf': {
    'name': 'Lava',
    'alias': 'Qt',
    'group': [ 'cave', 'obstacle' ],
    'tile': 'unwalkable/lava.png'
  },
  'Mv': {
    'name': 'Volcano',
    'alias': 'Qt',
    'group': [ 'obstacle', 'rough' ],
    'tile': 'mountains/volcano-tile.png'
  },
  'Mm^Xm': {
    'name': 'Regular Impassable Mountains',
    'alias': 'Xt',
    'group': [ 'obstacle', 'rough' ],
    'tile': 'mountains/cloud-tile.png'
  },
  'Md^Xm': {
    'name': 'Desert Impassable Mountains',
    'alias': 'Xt',
    'group': [ 'desert', 'obstacle', 'rough' ],
    'tile': 'mountains/cloud-desert-tile.png'
  },
  'Ms^Xm': {
    'name': 'Snowy Impassable Mountains',
    'alias': 'Xt',
    'group': [ 'frozen', 'obstacle', 'rough' ],
    'tile': 'mountains/cloud-snow-tile.png'
  },
  'Xu': {
    'name': 'Natural Cave Wall',
    'alias': 'Xt',
    'group': [ 'cave', 'obstacle' ],
    'tile': 'cave/wall-rough-tile.png'
  },
  'Xuc': {
    'name': 'Hewn Cave Wall',
    'alias': 'Xt',
    'group': [ 'cave', 'obstacle' ],
    'tile': 'cave/wall-hewn-tile.png'
  },
  'Xue': {
    'name': 'Natural Earthy Cave Wall',
    'alias': 'Xt',
    'group': [ 'cave', 'obstacle' ],
    'tile': 'cave/earthy-wall-rough-tile.png'
  },
  'Xuce': {
    'name': 'Reinforced Earth Cave Wall',
    'alias': 'Xt',
    'group': [ 'cave', 'obstacle' ],
    'tile': 'cave/earthy-wall-hewn-tile.png'
  },
  'Xos': {
    'name': 'Stone Wall',
    'alias': 'Xt',
    'group': [ 'cave', 'obstacle' ],
    'tile': 'walls/wall-stone-tile.png'
  },
  'Xol': {
    'name': 'Lit Stone Wall',
    'alias': 'Xt',
    'group': [ 'cave', 'obstacle' ],
    'tile': 'walls/wall-stone-tile.png'
  },
  '^Xo': {
    'name': 'Impassable Overlay',
    'alias': [ '_bas', 'Xt' ],
    'group': 'special',
    'tile': 'impassable-editor.png'
  },
  'Xv': {
    'name': 'Void',
    'alias': 'Xt',
    'group': [ 'obstacle', 'special' ],
    'tile': 'void/void-editor.png'
  },
  '^Vda': {
    'name': 'Adobe Village',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'desert', 'village' ],
    'tile': 'village/desert-tile.png'
  },
  '^Vdt': {
    'name': 'Desert Tent Village',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'desert', 'village' ],
    'tile': 'village/desert-camp-tile.png'
  },
  '^Vct': {
    'name': 'Tent Village',
    'alias': [ '_bas', 'Vi' ],
    'group': 'village',
    'tile': 'village/camp-tile.png'
  },
  '^Vo': {
    'name': 'Orcish Village',
    'alias': [ '_bas', 'Vi' ],
    'group': 'village',
    'tile': 'village/orc-tile.png'
  },
  '^Voa': {
    'name': 'Snowy Orcish Village',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'frozen', 'village' ],
    'tile': 'village/orc-snow-tile.png'
  },
  '^Vea': {
    'name': 'Snowy Elven Village',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'frozen', 'village' ],
    'tile': 'village/elven-snow-tile.png'
  },
  '^Ve': {
    'name': 'Elven Village',
    'alias': [ '_bas', 'Vi' ],
    'group': 'village',
    'tile': 'village/elven-tile.png'
  },
  '^Vh': {
    'name': 'Cottage',
    'alias': [ '_bas', 'Vi' ],
    'group': 'village',
    'tile': 'village/human-tile.png'
  },
  '^Vha': {
    'name': 'Snowy Cottage',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'frozen', 'village' ],
    'tile': 'village/snow-tile.png'
  },
  '^Vhr': {
    'name': 'Ruined Cottage',
    'alias': [ '_bas', 'Vi' ],
    'group': 'village',
    'tile': 'village/human-cottage-ruin-tile.png'
  },
  '^Vhc': {
    'name': 'Human City',
    'alias': [ '_bas', 'Vi' ],
    'group': 'village',
    'tile': 'village/human-city-tile.png'
  },
  '^Vwm': {
    'name': 'Windmill Village',
    'alias': [ '_bas', 'Vi' ],
    'group': 'village',
    'tile': 'misc/windmill-tile.png'
  },
  '^Vhca': {
    'name': 'Snowy Human City',
    'alias': [ '_bas', 'Vi' ],
    'group': 'village',
    'tile': 'village/human-city-snow-tile.png'
  },
  '^Vhcr': {
    'name': 'Ruined Human City',
    'alias': [ '_bas', 'Vi' ],
    'group': 'village',
    'tile': 'village/human-city-ruin-tile.png'
  },
  '^Vhh': {
    'name': 'Hill Stone Village',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'rough', 'village' ],
    'tile': 'village/human-hills-tile.png'
  },
  '^Vhha': {
    'name': 'Snowy Hill Stone Village',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'frozen', 'rough', 'village' ],
    'tile': 'village/human-snow-hills-tile.png'
  },
  '^Vhhr': {
    'name': 'Ruined Hill Stone Village',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'rough', 'village' ],
    'tile': 'village/human-hills-ruin-tile.png'
  },
  '^Vht': {
    'name': 'Tropical Village',
    'alias': [ '_bas', 'Vi' ],
    'group': 'village',
    'tile': 'village/tropical-tile.png'
  },
  '^Vd': {
    'name': 'Drake Village',
    'alias': [ '_bas', 'Vi' ],
    'group': 'village',
    'tile': 'village/drake-tile.png'
  },
  '^Vu': {
    'name': 'Cave Village',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'cave', 'village' ],
    'tile': 'village/cave-tile.png'
  },
  '^Vud': {
    'name': 'Dwarven Village',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'cave', 'village' ],
    'tile': 'village/dwarven-tile.png'
  },
  '^Vc': {
    'name': 'Hut',
    'alias': [ '_bas', 'Vi' ],
    'group': 'village',
    'tile': 'village/hut-tile.png'
  },
  '^Vca': {
    'name': 'Snowy Hut',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'frozen', 'village' ],
    'tile': 'village/hut-snow-tile.png'
  },
  '^Vl': {
    'name': 'Log Cabin',
    'alias': [ '_bas', 'Vi' ],
    'group': 'village',
    'tile': 'village/log-cabin-tile.png'
  },
  '^Vla': {
    'name': 'Snowy Log Cabin',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'frozen', 'village' ],
    'tile': 'village/log-cabin-snow-tile.png'
  },
  '^Vaa': {
    'name': 'Igloo',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'frozen', 'village' ],
    'tile': 'village/igloo-tile.png'
  },
  '^Vhs': {
    'name': 'Swamp Village',
    'alias': [ '_bas', 'Vi' ],
    'group': [ 'village', 'water' ],
    'tile': 'village/swampwater-tile.png'
  },
  '^Vm': {
    'name': 'Merfolk Village',
    'alias': '_bas',
    'group': [ 'village', 'water' ],
    'tile': 'village/coast-tile.png'
  },
  '^Vov': {
    'name': 'Village Overlay',
    'alias': '_bas',
    'group': [ 'village', 'special' ],
    'tile': [ 'village/village-overlay-editor.png' ]
  },
  'Ce': {
    'name': 'Encampment',
    'alias': 'Ch',
    'group': 'castle',
    'tile': 'castle/encampment/regular-tile.png'
  },
  'Cea': {
    'name': 'Snowy Encampment',
    'alias': 'Ch',
    'group': [ 'castle', 'frozen' ],
    'tile': 'castle/encampment/snow-tile.png'
  },
  'Co': {
    'name': 'Orcish Castle',
    'alias': 'Ch',
    'group': 'castle',
    'tile': 'castle/orcish/tile.png'
  },
  'Coa': {
    'name': 'Snowy Orcish Castle',
    'alias': 'Ch',
    'group': [ 'castle', 'frozen' ],
    'tile': 'castle/winter-orcish/tile.png'
  },
  'Ch': {
    'name': 'Human Castle',
    'group': 'castle',
    'tile': 'castle/castle-tile.png',
    'convex': {
      'ne': 'castle/castle-convex-tr.png',
      'e' : 'castle/castle-convex-r.png',
      'se': 'castle/castle-convex-br.png',
      'sw': 'castle/castle-convex-bl.png',
      'w' : 'castle/castle-convex-l.png',
      'nw': 'castle/castle-convex-tl.png'
    },
    'concave': {
      'ne': 'castle/castle-concave-tr.png',
      'e' : 'castle/castle-concave-r.png',
      'se': 'castle/castle-concave-br.png',
      'sw': 'castle/castle-concave-bl.png',
      'w' : 'castle/castle-concave-l.png',
      'nw': 'castle/castle-concave-tl.png'
    }
  },
  'Cha': {
    'name': 'Snowy Human Castle',
    'alias': [ 'At', 'Ch' ],
    'group': [ 'castle', 'frozen' ],
    'tile': 'castle/snowy/castle-tile.png'
  },
  'Cv': {
    'name': 'Elvish Castle',
    'alias': 'Ch',
    'group': 'castle',
    'tile': 'castle/elven/tile.png'
  },
  'Cud': {
    'name': 'Dwarven Castle',
    'alias': 'Ch',
    'group': [ 'castle', 'cave' ],
    'tile': 'castle/dwarven-castle-tile.png',
    'convex': {
      'ne': 'castle/dwarven-castle-convex-tr.png',
      'e' : 'castle/dwarven-castle-convex-r.png',
      'se': 'castle/dwarven-castle-convex-br.png',
      'sw': 'castle/dwarven-castle-convex-bl.png',
      'w' : 'castle/dwarven-castle-convex-l.png',
      'nw': 'castle/dwarven-castle-convex-tl.png'
    },
    'concave': {
      'ne': 'castle/dwarven-castle-concave-tr.png',
      'e' : 'castle/dwarven-castle-concave-r.png',
      'se': 'castle/dwarven-castle-concave-br.png',
      'sw': 'castle/dwarven-castle-concave-bl.png',
      'w' : 'castle/dwarven-castle-concave-l.png',
      'nw': 'castle/dwarven-castle-concave-tl.png'
    }
  },
  'Chr': {
    'name': 'Ruined Human Castle',
    'alias': 'Ch',
    'group': 'castle',
    'tile': 'castle/ruin-tile.png',
    'convex': {
      'ne': [ 'castle/ruin-convex-tr.png', 'castle/ruin2-convex-tr.png', 'castle/ruin3-convex-tr.png', 'castle/ruin4-convex-tr.png', 'castle/ruin5-convex-tr.png' ],
      'e' : [ 'castle/ruin-convex-r.png', 'castle/ruin2-convex-r.png', 'castle/ruin3-convex-r.png', 'castle/ruin4-convex-r.png', 'castle/ruin5-convex-r.png' ],
      'se': [ 'castle/ruin-convex-br.png', 'castle/ruin2-convex-br.png', 'castle/ruin3-convex-br.png', 'castle/ruin4-convex-br.png', 'castle/ruin5-convex-br.png' ],
      'sw': [ 'castle/ruin-convex-bl.png', 'castle/ruin2-convex-bl.png', 'castle/ruin3-convex-bl.png', 'castle/ruin4-convex-bl.png', 'castle/ruin5-convex-bl.png' ],
      'w' : [ 'castle/ruin-convex-l.png', 'castle/ruin2-convex-l.png', 'castle/ruin3-convex-l.png', 'castle/ruin4-convex-l.png', 'castle/ruin5-convex-l.png' ],
      'nw': [ 'castle/ruin-convex-tl.png', 'castle/ruin2-convex-tl.png', 'castle/ruin3-convex-tl.png', 'castle/ruin4-convex-tl.png', 'castle/ruin5-convex-tl.png' ]
    },
    'concave': {
      'ne': [ 'castle/ruin-concave-tr.png', 'castle/ruin2-concave-tr.png', 'castle/ruin3-concave-tr.png', 'castle/ruin4-concave-tr.png', 'castle/ruin5-concave-tr.png' ],
      'e' : [ 'castle/ruin-concave-r.png', 'castle/ruin2-concave-r.png', 'castle/ruin3-concave-r.png', 'castle/ruin4-concave-r.png', 'castle/ruin5-concave-r.png' ],
      'se': [ 'castle/ruin-concave-br.png', 'castle/ruin2-concave-br.png', 'castle/ruin3-concave-br.png', 'castle/ruin4-concave-br.png', 'castle/ruin5-concave-br.png' ],
      'sw': [ 'castle/ruin-concave-bl.png', 'castle/ruin2-concave-bl.png', 'castle/ruin3-concave-bl.png', 'castle/ruin4-concave-bl.png', 'castle/ruin5-concave-bl.png' ],
      'w' : [ 'castle/ruin-concave-l.png', 'castle/ruin2-concave-l.png', 'castle/ruin3-concave-l.png', 'castle/ruin4-concave-l.png', 'castle/ruin5-concave-l.png' ],
      'nw': [ 'castle/ruin-concave-tl.png', 'castle/ruin2-concave-tl.png', 'castle/ruin3-concave-tl.png', 'castle/ruin4-concave-tl.png', 'castle/ruin5-concave-tl.png' ]
    }
  },
  'Chw': {
    'name': 'Sunken Human Ruin',
    'alias': 'Ch',
    'group': [ 'castle', 'water' ],
    'tile': 'castle/sunken-ruin-tile.png',
    'convex': {
      'ne': [ 'castle/sunken-ruin-convex-tr.png', 'castle/sunken-ruin2-convex-tr.png', 'castle/sunken-ruin3-convex-tr.png', 'castle/sunken-ruin4-convex-tr.png', 'castle/sunken-ruin5-convex-tr.png', 'castle/sunken-ruin6-convex-tr.png' ],
      'e' : [ 'castle/sunken-ruin-convex-r.png', 'castle/sunken-ruin2-convex-r.png', 'castle/sunken-ruin3-convex-r.png', 'castle/sunken-ruin4-convex-r.png', 'castle/sunken-ruin5-convex-r.png', 'castle/sunken-ruin6-convex-r.png' ],
      'se': [ 'castle/sunken-ruin-convex-br.png', 'castle/sunken-ruin2-convex-br.png', 'castle/sunken-ruin3-convex-br.png', 'castle/sunken-ruin4-convex-br.png', 'castle/sunken-ruin5-convex-br.png', 'castle/sunken-ruin6-convex-br.png' ],
      'sw': [ 'castle/sunken-ruin-convex-bl.png', 'castle/sunken-ruin2-convex-bl.png', 'castle/sunken-ruin3-convex-bl.png', 'castle/sunken-ruin4-convex-bl.png', 'castle/sunken-ruin5-convex-bl.png', 'castle/sunken-ruin6-convex-bl.png' ],
      'w' : [ 'castle/sunken-ruin-convex-l.png', 'castle/sunken-ruin2-convex-l.png', 'castle/sunken-ruin3-convex-l.png', 'castle/sunken-ruin4-convex-l.png', 'castle/sunken-ruin5-convex-l.png', 'castle/sunken-ruin6-convex-l.png' ],
      'nw': [ 'castle/sunken-ruin-convex-tl.png', 'castle/sunken-ruin2-convex-tl.png', 'castle/sunken-ruin3-convex-tl.png', 'castle/sunken-ruin4-convex-tl.png', 'castle/sunken-ruin5-convex-tl.png', 'castle/sunken-ruin6-convex-tl.png' ]
    },
    'concave': {
      'ne': [ 'castle/sunken-ruin-concave-tr.png', 'castle/sunken-ruin2-concave-tr.png', 'castle/sunken-ruin3-concave-tr.png', 'castle/sunken-ruin4-concave-tr.png', 'castle/sunken-ruin5-concave-tr.png', 'castle/sunken-ruin6-concave-tr.png' ],
      'e' : [ 'castle/sunken-ruin-concave-r.png', 'castle/sunken-ruin2-concave-r.png', 'castle/sunken-ruin3-concave-r.png', 'castle/sunken-ruin4-concave-r.png', 'castle/sunken-ruin5-concave-r.png', 'castle/sunken-ruin6-concave-r.png' ],
      'se': [ 'castle/sunken-ruin-concave-br.png', 'castle/sunken-ruin2-concave-br.png', 'castle/sunken-ruin3-concave-br.png', 'castle/sunken-ruin4-concave-br.png', 'castle/sunken-ruin5-concave-br.png', 'castle/sunken-ruin6-concave-br.png' ],
      'sw': [ 'castle/sunken-ruin-concave-bl.png', 'castle/sunken-ruin2-concave-bl.png', 'castle/sunken-ruin3-concave-bl.png', 'castle/sunken-ruin4-concave-bl.png', 'castle/sunken-ruin5-concave-bl.png', 'castle/sunken-ruin6-concave-bl.png' ],
      'w' : [ 'castle/sunken-ruin-concave-l.png', 'castle/sunken-ruin2-concave-l.png', 'castle/sunken-ruin3-concave-l.png', 'castle/sunken-ruin4-concave-l.png', 'castle/sunken-ruin5-concave-l.png', 'castle/sunken-ruin6-concave-l.png' ],
      'nw': [ 'castle/sunken-ruin-concave-tl.png', 'castle/sunken-ruin2-concave-tl.png', 'castle/sunken-ruin3-concave-tl.png', 'castle/sunken-ruin4-concave-tl.png', 'castle/sunken-ruin5-concave-tl.png', 'castle/sunken-ruin6-concave-tl.png' ]
    }
  },
  'Chs': {
    'name': 'Swamp Human Ruin',
    'alias': 'Ch',
    'group': [ 'castle', 'water' ],
    'tile': 'castle/swamp-ruin-tile.png'
  },
  'Cd': {
    'name': 'Desert Castle',
    'alias': 'Ch',
    'group': [ 'castle', 'desert' ],
    'tile': 'castle/sand/tile.png'
  },
  'Cdr': {
    'name': 'Ruined Desert Castle',
    'alias': 'Ch',
    'group': [ 'castle', 'desert' ],
    'tile': 'castle/sand/ruin-tile.png'
  },
  'Ke': {
    'name': 'Encampment Keep',
    'alias': 'Ch',
    'group': 'castle',
    'tile': 'castle/encampment/regular-keep-tile.png'
  },
  'Ket': {
    'name': 'Tall Encampment Keep',
    'alias': 'Ch',
    'group': 'castle',
    'tile': 'castle/encampment/tall-keep-tile.png'
  },
  'Kea': {
    'name': 'Snowy Encampment Keep',
    'alias': 'Ch',
    'group': [ 'castle', 'frozen' ],
    'tile': 'castle/encampment/snow-keep-tile.png'
  },
  'Ko': {
    'name': 'Orcish Keep',
    'alias': 'Ch',
    'group': 'castle',
    'tile': 'castle/orcish/keep-tile.png'
  },
  'Koa': {
    'name': 'Snowy Orcish Keep',
    'alias': 'Ch',
    'group': 'castle',
    'tile': 'castle/winter-orcish/keep-tile.png'
  },
  'Kh': {
    'name': 'Human Castle Keep',
    'alias': 'Ch',
    'group': 'castle',
    'tile': 'castle/keep-tile.png'
  },
  'Kha': {
    'name': 'Snowy Human Castle Keep',
    'alias': [ 'At', 'Ch' ],
    'group': [ 'castle', 'frozen' ],
    'tile': 'castle/snowy/keep-tile.png'
  },
  'Kv': {
    'name': 'Elven Castle Keep',
    'alias': 'Ch',
    'group': 'castle',
    'tile': 'castle/elven/keep-tile.png'
  },
  'Kud': {
    'name': 'Dwarven Castle Keep',
    'alias': 'Ch',
    'group': 'castle',
    'tile': 'castle/dwarven-keep-tile.png'
  },
  'Khr': {
    'name': 'Ruined Human Castle Keep',
    'alias': 'Ch',
    'group': 'castle',
    'tile': 'castle/ruined-keep-tile.png'
  },
  'Khw': {
    'name': 'Sunken Human Castle Keep',
    'alias': [ 'Ch', 'Ww' ],
    'group': [ 'castle', 'water' ],
    'tile': 'castle/sunken-keep-tile.png'
  },
  'Khs': {
    'name': 'Swamp Human Castle Keep',
    'alias': [ 'Ch', 'Ss' ],
    'group': [ 'castle', 'water' ],
    'tile': 'castle/swamp-keep-tile.png'
  },
  'Kd': {
    'name': 'Desert Keep',
    'alias': 'Ch',
    'group': [ 'castle', 'desert' ],
    'tile': 'castle/sand/keep-tile.png'
  },
  'Kdr': {
    'name': 'Ruined Desert Keep',
    'alias': 'Ch',
    'group': [ 'castle', 'desert' ],
    'tile': 'castle/sand/ruin-keep-tile.png'
  },
  '^Cov': {
    'name': 'Castle Overlay',
    'alias': '_bas',
    'group': [ 'castle', 'special' ],
    'tile': 'castle/castle-overlay-editor.png'
  },
  '^Kov': {
    'name': 'Keep Overlay',
    'alias': '_bas',
    'group': [ 'castle', 'special' ],
    'tile': 'castle/keep-overlay-editor.png'
  },
  '^Bw|': {
    'name': 'Wooden Bridge',
    'alias': [ '_bas', 'Gt' ],
    'group': [ 'bridge', 'water' ],
    'tile': 'bridge/wood-n-s.png'
  },
  '^Bw/': {
    'name': 'Wooden Bridge',
    'alias': [ '_bas', 'Gt' ],
    'group': [ 'bridge', 'water' ],
    'tile': 'bridge/wood-ne-sw.png'
  },
  '^Bw\\': {
    'name': 'Wooden Bridge',
    'alias': [ '_bas', 'Gt' ],
    'group': [ 'bridge', 'water' ],
    'tile': 'bridge/wood-se-nw.png'
  },
  '^Bw|r': {
    'name': 'Rotting Bridge',
    'alias': [ '_bas', 'Gt' ],
    'group': [ 'bridge', 'water' ],
    'tile': 'bridge/wood-n-s.png'
  },
  '^Bw/r': {
    'name': 'Rotting Bridge',
    'alias': [ '_bas', 'Gt' ],
    'group': [ 'bridge', 'water' ],
    'tile': 'bridge/wood-ne-sw.png'
  },
  '^Bw\\r': {
    'name': 'Rotting Bridge',
    'alias': [ '_bas', 'Gt' ],
    'group': [ 'bridge', 'water' ],
    'tile': 'bridge/wood-se-nw.png'
  },
  '^Bsb|': {
    'name': 'Basic Stone Bridge',
    'alias': [ '_bas', 'Gt' ],
    'group': [ 'bridge', 'water' ],
    'tile': 'bridge/stonebridge-n-s-tile.png'
  },
  '^Bsb/': {
    'name': 'Basic Stone Bridge',
    'alias': [ '_bas', 'Gt' ],
    'group': [ 'bridge', 'water' ],
    'tile': 'bridge/stonebridge-ne-sw-tile.png'
  },
  '^Bsb\\': {
    'name': 'Basic Stone Bridge',
    'alias': [ '_bas', 'Gt' ],
    'group': [ 'bridge', 'water' ],
    'tile': 'bridge/stonebridge-se-nw-tile.png'
  },
  '^Bs|': {
    'name': 'Cave Chasm Bridge',
    'alias': [ '_bas', 'Uu' ],
    'group': [ 'bridge', 'cave' ],
    'tile': 'cave/chasm-stone-bridge-s-n-tile.png'
  },
  '^Bs/': {
    'name': 'Cave Chasm Bridge',
    'alias': [ '_bas', 'Uu' ],
    'group': [ 'bridge', 'cave' ],
    'tile': 'cave/chasm-stone-bridge-sw-ne-tile.png'
  },
  '^Bs\\': {
    'name': 'Cave Chasm Bridge',
    'alias': [ '_bas', 'Uu' ],
    'group': [ 'bridge', 'cave' ],
    'tile': 'cave/chasm-stone-bridge-se-nw-tile.png'
  },
  '_off^_usr': {
    'name': 'Off Map',
    'group': [ 'obstacle', 'special' ],
    'tile': 'off-map/offmap-editor.png'
  },
  '^fme': {
    'name': 'Experimental Fake Map Edge',
    'group': [ 'obstacle', 'special' ],
    'tile': 'off-map/border-ne-se-s-sw-nw-n.png'
  },
  '_s': {
    'name': 'Shroud',
    'group': 'special',
    'tile': 'void/shroud-editor.png'
  },
  '_f': {
    'name': 'Fog',
    'group': 'special',
    'tile': 'fog/fog-editor.png'
  }
};
