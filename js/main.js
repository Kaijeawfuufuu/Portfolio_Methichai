/* ==========================================================================
   AI METHICHAI — 3D ARTIST & ENVIRONMENT ARTIST PORTFOLIO
   ArtStation Pro + Adobe Portfolio + Curated Art Gallery Controller
   ========================================================================== */

(() => {
  'use strict';

  // ==========================================================================
  // 1. CURATED 40 ARTWORKS & 3D MODELS DATABASE
  // ==========================================================================
  const GALLERY_ITEMS = [
    // ---------------- CHARACTERS & BOSSES (15 Items) ----------------
    {
      id: 'model-guidi',
      category: 'characters',
      title: 'Guidi — Playable 3D Character',
      spec: '3D Character • We Are Chouri',
      thumb: 'assets/images/models/model_guidi.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Playable co-op hero modeled and textured for the split-screen puzzle adventure We Are Chouri.',
      highlights: [
        'Clean character topology for smooth joint deformation',
        'Stylized PBR textures painted in Substance 3D Painter',
        'Rigged and integrated into Unity Engine'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity'],
      views: [
        { label: '3D Model', src: 'assets/images/models/model_guidi.jpg' },
        { label: 'Character Sheet', src: 'assets/images/web/page_02.jpg' },
        { label: 'Turnaround Lineup', src: 'assets/images/crops/chouri_characters.jpg' }
      ]
    },
    {
      id: 'model-zeppe',
      category: 'characters',
      title: 'Zeppe — Playable 3D Character',
      spec: '3D Character • We Are Chouri',
      thumb: 'assets/images/models/model_zeppe.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Co-op protagonist featuring stylized proportions, expressive silhouette, and hand-crafted PBR materials.',
      highlights: [
        'Full turnaround modeling from 2D concept exploration',
        'Coordinated material palette in Substance 3D Painter',
        'In-engine split-screen locomotion setup'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity'],
      views: [
        { label: '3D Model', src: 'assets/images/models/model_zeppe.jpg' },
        { label: 'Character Sheet', src: 'assets/images/web/page_02.jpg' },
        { label: 'In-Engine Scene', src: 'assets/images/crops/chouri_bridge.jpg' }
      ]
    },
    {
      id: 'boss-four-arm-rat',
      category: 'characters',
      title: 'Four-Armed Mutant Rat Boss',
      spec: 'Boss Creature • No More Rat',
      thumb: 'assets/images/models/boss_four_arm_rat.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Four-armed subterranean boss creature modeled and rigged for No More Rat : Down The Drain on Roblox.',
      highlights: [
        'Multi-limb skeletal rig and custom combat animations',
        'High-to-low poly normal map baking',
        'Live boss encounter in Roblox Studio'
      ],
      software: ['Blender', 'Substance 3D Painter', 'Roblox Studio'],
      links: [{ label: 'Play on Roblox ↗', url: 'https://www.roblox.com/games/79475326799719/No-More-Rat' }],
      views: [
        { label: 'Boss Model', src: 'assets/images/models/boss_four_arm_rat.jpg' },
        { label: 'Run Cycle Video', videoId: 'wsLVAP0mqXw', thumb: 'assets/images/crops/anim_boss_run.jpg' },
        { label: 'Creature Sheet', src: 'assets/images/web/page_07.jpg' }
      ]
    },
    {
      id: 'boss-dark-rat-demon',
      category: 'characters',
      title: 'Dark Rat Demon Boss',
      spec: 'Boss Creature • No More Rat',
      thumb: 'assets/images/models/boss_dark_rat_demon.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Horned demonic rat boss featuring obsidian skin materials, sharp claws, and glowing crimson eyes.',
      highlights: [
        'Sculpted organic muscle anatomy and horn silhouettes',
        'Emissive and roughness texture maps for dark dungeon lighting'
      ],
      software: ['ZBrush', 'Blender', 'Substance 3D Painter'],
      views: [
        { label: 'Demon Boss Model', src: 'assets/images/models/boss_dark_rat_demon.jpg' },
        { label: 'Creature Sheet', src: 'assets/images/web/page_07.jpg' }
      ]
    },
    {
      id: 'boss-spiky-beast-rat',
      category: 'characters',
      title: 'Spiky Beast Rat Monster',
      spec: 'Quadruped Boss • No More Rat',
      thumb: 'assets/images/models/boss_spiky_beast_rat.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Quadruped beast boss armored with dorsal bone spikes and heavy muscular limbs for charging attacks.',
      highlights: [
        'Aggressive quadruped silhouette and spike armor detailing',
        'Game-ready low-poly topology for real-time combat'
      ],
      software: ['Blender', 'Substance 3D Painter', 'Roblox Studio'],
      views: [
        { label: 'Spiky Beast Model', src: 'assets/images/models/boss_spiky_beast_rat.jpg' },
        { label: 'Creature Sheet', src: 'assets/images/web/page_07.jpg' }
      ]
    },
    {
      id: 'boss-mutant-green-rat',
      category: 'characters',
      title: 'Toxic Mutant Rat Monster',
      spec: 'Creature Model • No More Rat',
      thumb: 'assets/images/models/boss_mutant_green_rat.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Bio-mutated sewer creature with toxic green skin detailing and asymmetric claws.',
      highlights: [
        'Hand-painted toxic mutation gradients and surface wear',
        'Optimized rig and mesh for multi-enemy waves'
      ],
      software: ['Blender', 'Substance 3D Painter', 'Roblox Studio'],
      views: [
        { label: 'Toxic Mutant Model', src: 'assets/images/models/boss_mutant_green_rat.jpg' },
        { label: 'Creature Sheet', src: 'assets/images/web/page_07.jpg' }
      ]
    },
    {
      id: 'enemy-spear-rider-rat',
      category: 'characters',
      title: 'Spear Rider Rat Enemy',
      spec: 'Enemy Creature • No More Rat',
      thumb: 'assets/images/models/enemy_spear_rider_rat.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Mounted spear-wielding enemy creature designed for fast-paced dungeon encounters.',
      highlights: [
        'Character and weapon prop modeled as a cohesive combat unit',
        'Clean UVs and stylized armor textures'
      ],
      software: ['Blender', 'Substance 3D Painter'],
      views: [
        { label: 'Spear Rider Model', src: 'assets/images/models/enemy_spear_rider_rat.jpg' },
        { label: 'Creature Sheet', src: 'assets/images/web/page_07.jpg' }
      ]
    },
    {
      id: 'enemy-kimono-rat',
      category: 'characters',
      title: 'Kimono Rat Minion',
      spec: 'Enemy Creature • No More Rat',
      thumb: 'assets/images/models/enemy_kimono_rat.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Stylized rodent enemy dressed in patterned kimono robes and traditional waraji sandals.',
      highlights: [
        'Garment fold modeling and fabric pattern texturing',
        'Distinctive silhouette for instant gameplay readability'
      ],
      software: ['Blender', 'Substance 3D Painter'],
      views: [
        { label: 'Kimono Rat Model', src: 'assets/images/models/enemy_kimono_rat.jpg' },
        { label: 'Creature Sheet', src: 'assets/images/web/page_07.jpg' }
      ]
    },
    {
      id: 'hero-trenchcoat-hamster',
      category: 'characters',
      title: 'Trenchcoat Hamster Hero',
      spec: 'Player Character • No More Rat',
      thumb: 'assets/images/models/hero_trenchcoat_hamster.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Playable exterminator hamster hero wearing a stylized detective trenchcoat.',
      highlights: [
        'Hero character silhouette tailored for third-person action camera',
        'Clean topology and stylized cloth shading'
      ],
      software: ['Blender', 'Substance 3D Painter', 'Roblox Studio'],
      views: [
        { label: 'Hamster Hero Model', src: 'assets/images/models/hero_trenchcoat_hamster.jpg' },
        { label: 'Roblox Showcase', src: 'assets/images/web/page_06.jpg' }
      ]
    },
    {
      id: 'model-plush-bear',
      category: 'characters',
      title: 'Stitched Plush Bear Monster',
      spec: 'Creature & UV • We Are Chouri',
      thumb: 'assets/images/models/model_plush_bear.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Haunted stitched plush bear creature complete with clean 0–1 UV unwrap and fabric weave textures.',
      highlights: [
        'Complete UV layout and stitched fabric surface detailing',
        'Featured in We Are Chouri fantasy stages'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity'],
      views: [
        { label: 'Plush Bear Model', src: 'assets/images/models/model_plush_bear.jpg' },
        { label: 'UV & Monster Sheet', src: 'assets/images/web/page_03.jpg' }
      ]
    },
    {
      id: 'model-shrine-demon',
      category: 'characters',
      title: 'Horned Shrine Guardian',
      spec: 'Creature & UV • We Are Chouri',
      thumb: 'assets/images/models/model_shrine_demon.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Horned stone shrine guardian with carved surface markings and emissive eyes.',
      highlights: [
        'Unwrapped UV islands optimized for texel density',
        'Weathered stone and moss PBR materials'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity'],
      views: [
        { label: 'Shrine Guardian Model', src: 'assets/images/models/model_shrine_demon.jpg' },
        { label: 'UV & Monster Sheet', src: 'assets/images/web/page_03.jpg' }
      ]
    },
    {
      id: 'rig-jester',
      category: 'characters',
      title: 'Jester Character Rig & UV Layout',
      spec: 'Rigging & Topology • Maya',
      thumb: 'assets/images/models/rig_jester_front.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Full humanoid skeletal joint hierarchy, skin weighting, and clean UV layout for a stylized jester character.',
      highlights: [
        'Bipedal joint hierarchy with IK/FK controls in Autodesk Maya',
        'Clean non-overlapping UV map layout'
      ],
      software: ['Autodesk Maya', 'Rigging', 'UV Mapping'],
      views: [
        { label: 'Jester Front & Side', src: 'assets/images/models/rig_jester_front.jpg' },
        { label: 'Skeleton & UV Map', src: 'assets/images/crops/jester_rig.jpg' },
        { label: 'Full Sheet', src: 'assets/images/web/page_11.jpg' }
      ]
    },
    {
      id: 'sculpt-cyclops-fang',
      category: 'characters',
      title: 'One-Eyed Fang Creature Bust',
      spec: 'Digital Sculpt • ZBrush',
      thumb: 'assets/images/models/sculpt_cyclops_fang.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'High-polygon creature bust study focusing on facial anatomy, fangs, and skin folds.',
      highlights: [
        'Sculpted in ZBrush with primary, secondary, and tertiary forms'
      ],
      software: ['Pixologic ZBrush'],
      views: [
        { label: 'Cyclops Bust Sculpt', src: 'assets/images/models/sculpt_cyclops_fang.jpg' }
      ]
    },
    {
      id: 'sculpt-flesh-alien',
      category: 'characters',
      title: 'Organic Alien Head Sculpt',
      spec: 'Digital Sculpt • ZBrush',
      thumb: 'assets/images/models/sculpt_flesh_alien.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Conceptual creature head sculpt exploring sinewy muscle fibers and organic cranial forms.',
      highlights: [
        'High-resolution digital clay sculpting and matcap presentation'
      ],
      software: ['Pixologic ZBrush'],
      views: [
        { label: 'Alien Head Sculpt', src: 'assets/images/models/sculpt_flesh_alien.jpg' }
      ]
    },
    {
      id: 'sculpt-metallic-figure',
      category: 'characters',
      title: 'Character Busts & Anatomy Sculpts',
      spec: 'Digital Sculpting • ZBrush',
      thumb: 'assets/images/models/sculpt_metallic_figure.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Series of digital sculptures exploring full-body posture, stylized elf warrior busts, and head anatomy.',
      highlights: [
        'Full-body gesture and surface reflection studies in ZBrush',
        'Multiple color and shader variations'
      ],
      software: ['Pixologic ZBrush'],
      views: [
        { label: 'Metallic Figure Study', src: 'assets/images/models/sculpt_metallic_figure.jpg' },
        { label: 'Elf Warrior Busts', src: 'assets/images/models/sculpt_elf_warrior_busts.jpg' },
        { label: 'Spiky Hair Head Sculpt', src: 'assets/images/models/sculpt_spiky_hair_head.jpg' },
        { label: 'Full Sculpt Sheet', src: 'assets/images/web/page_17.jpg' }
      ]
    },

    // ---------------- ENVIRONMENTS & DIORAMAS (9 Items) ----------------
    {
      id: 'env-kraken-island',
      category: 'environments',
      title: 'Kraken & Tiki Island 3D Diorama',
      spec: '3D Diorama • Wingbeat (2026)',
      thumb: 'assets/images/models/env_kraken_island.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Stylized low-poly island diorama featuring giant Kraken tentacles, Tiki totems, wooden docks, and glowing crystals for Wingbeat.',
      highlights: [
        'Complete stylized environment composition and lighting',
        'Playable in the 2026 party game Wingbeat on itch.io'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity'],
      links: [{ label: 'Play Wingbeat on itch.io ↗', url: 'https://newskung.itch.io/wingbeat' }],
      views: [
        { label: 'Island Diorama', src: 'assets/images/models/env_kraken_island.jpg' },
        { label: 'Full Sheet', src: 'assets/images/web/page_13.jpg' }
      ]
    },
    {
      id: 'env-sunset-alley',
      category: 'environments',
      title: 'Sunset Alleyway & Architectural Lighting',
      spec: 'Environment & Lighting • 3D Scene',
      thumb: 'assets/images/crops/alley_sunset.jpg',
      stageClass: '',
      desc: 'Atmospheric Japanese alleyway and modern interior lighting studies focusing on golden-hour mood, reflections, and composition.',
      highlights: [
        'Modular urban buildings, utility poles, signage, and wet asphalt shaders',
        'Accompanied by modern living room interior lighting render'
      ],
      software: ['Blender', 'Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'Sunset Alleyway', src: 'assets/images/crops/alley_sunset.jpg' },
        { label: 'Modern Interior Scene', src: 'assets/images/crops/modern_interior.jpg' },
        { label: 'Full Renders Sheet', src: 'assets/images/web/page_10.jpg' }
      ]
    },
    {
      id: 'env-isometric-studio',
      category: 'environments',
      title: 'Isometric Artist Studio Diorama',
      spec: 'Isometric Room • 3D Environment',
      thumb: 'assets/images/models/env_isometric_studio.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Detailed isometric artist bedroom and workstation filled with custom furniture, dual monitors, art frames, and warm interior lighting.',
      highlights: [
        'Over 30 custom interior props arranged in an isometric cutaway',
        'Warm desk lamp vs. cool ambient lighting contrast'
      ],
      software: ['Autodesk Maya', 'Blender', 'Substance 3D Painter'],
      views: [
        { label: 'Isometric Room Render', src: 'assets/images/models/env_isometric_studio.jpg' },
        { label: 'Full Sheet', src: 'assets/images/web/page_11.jpg' }
      ]
    },
    {
      id: 'env-chouri-shrine',
      category: 'environments',
      title: 'Torii Shrine & Mountain Ruins',
      spec: 'In-Engine Level • We Are Chouri',
      thumb: 'assets/images/crops/chouri_shrine.jpg',
      stageClass: '',
      desc: 'In-engine Unity environment featuring red Torii gates, glowing tiki lanterns, and atmospheric mountain ruins.',
      highlights: [
        'Assembled in Unity with volumetric fog and real-time lighting'
      ],
      software: ['Unity', 'Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'Torii Shrine Scene', src: 'assets/images/crops/chouri_shrine.jpg' },
        { label: 'Full In-Engine Sheet', src: 'assets/images/web/page_05.jpg' }
      ]
    },
    {
      id: 'env-chouri-bridge',
      category: 'environments',
      title: 'Co-op Split-Screen Bridge & Cavern',
      spec: 'In-Engine Level • We Are Chouri',
      thumb: 'assets/images/crops/chouri_bridge.jpg',
      stageClass: '',
      desc: 'Split-screen co-op level environment showcasing suspended wooden bridges and glowing underground caverns.',
      highlights: [
        'Designed for 2-player cooperative puzzle traversal in Unity'
      ],
      software: ['Unity', 'Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'Suspension Bridge', src: 'assets/images/crops/chouri_bridge.jpg' },
        { label: 'Underground Cavern', src: 'assets/images/crops/chouri_cavern.jpg' },
        { label: 'Full In-Engine Sheet', src: 'assets/images/web/page_05.jpg' }
      ]
    },
    {
      id: 'env-fantasy-trees',
      category: 'environments',
      title: 'Stylized Twisted Fantasy Trees',
      spec: 'Environment Foliage • Wingbeat',
      thumb: 'assets/images/models/env_fantasy_trees.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Twisted organic tree trunks with stylized cloud-like foliage canopies in three color variations.',
      highlights: [
        'Created for the floating islands of Wingbeat (2026)'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity'],
      views: [
        { label: 'Fantasy Trees Trio', src: 'assets/images/models/env_fantasy_trees.jpg' },
        { label: 'Full Sheet', src: 'assets/images/web/page_14.jpg' }
      ]
    },
    {
      id: 'env-banana-house',
      category: 'environments',
      title: 'Stylized Banana House & Wireframe',
      spec: 'Stylized Building • 3D Model',
      thumb: 'assets/images/models/env_banana_house.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Whimsical banana-shaped cottage shown in both shaded render and clean quad wireframe views.',
      highlights: [
        'Clean low-poly architectural topology and stylized shading'
      ],
      software: ['Autodesk Maya', 'Blender', 'Substance 3D Painter'],
      views: [
        { label: 'Banana House & Wireframe', src: 'assets/images/models/env_banana_house.jpg' },
        { label: 'Buildings Sheet', src: 'assets/images/web/page_09.jpg' }
      ]
    },
    {
      id: 'env-pokecenter-clean',
      category: 'environments',
      title: 'Pokécenter Exterior — Clean PBR Pass',
      spec: 'Architectural Model • Texturing',
      thumb: 'assets/images/models/env_pokecenter_clean.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Iconic curved roof building modeled in 3D and textured with a clean daytime architectural material pass.',
      highlights: [
        'Hard-surface architectural modeling and clean UV layout'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'Clean Pokécenter', src: 'assets/images/models/env_pokecenter_clean.jpg' },
        { label: 'Buildings Sheet', src: 'assets/images/web/page_09.jpg' }
      ]
    },
    {
      id: 'env-pokecenter-horror',
      category: 'environments',
      title: 'Pokécenter Exterior — Abandoned Horror Pass',
      spec: 'Texture Storytelling • PBR Grime',
      thumb: 'assets/images/models/env_pokecenter_horror.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Weathered horror re-texture of the Pokécenter featuring rusted metal, broken glass, and heavy grime.',
      highlights: [
        'Demonstrates mood transformation purely through PBR texture layers'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'Horror Pokécenter', src: 'assets/images/models/env_pokecenter_horror.jpg' },
        { label: 'Buildings Sheet', src: 'assets/images/web/page_09.jpg' }
      ]
    },

    // ---------------- WEAPONS & PROPS (10 Items) ----------------
    {
      id: 'weapon-m16a1-rifle',
      category: 'weapons',
      title: 'M16A1 Assault Rifle',
      spec: 'Hard-Surface Weapon • 3D Model',
      thumb: 'assets/images/models/weapon_m16a1_rifle.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Detailed hard-surface 3D model of the M16A1 rifle with accurate receiver, carry handle, barrel, and stock proportions.',
      highlights: [
        'Clean hard-surface edge flow and realistic metallic/polymer materials'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'M16A1 Rifle', src: 'assets/images/models/weapon_m16a1_rifle.jpg' },
        { label: 'Weapons Sheet', src: 'assets/images/web/page_12.jpg' }
      ]
    },
    {
      id: 'weapon-ak47-rifle',
      category: 'weapons',
      title: 'AK-47 Assault Rifle',
      spec: 'Hard-Surface Weapon • 3D Model',
      thumb: 'assets/images/models/weapon_ak47_rifle.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Hard-surface 3D model of the AK-47 featuring stamped steel receiver, curved magazine, and wooden stock.',
      highlights: [
        'Detailed wood grain and worn gunmetal PBR textures'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'AK-47 Rifle', src: 'assets/images/models/weapon_ak47_rifle.jpg' },
        { label: 'Weapons Sheet', src: 'assets/images/web/page_12.jpg' }
      ]
    },
    {
      id: 'weapon-monster-bone-axe',
      category: 'weapons',
      title: 'Monster Bone Battleaxe',
      spec: 'Fantasy Weapon • No More Rat',
      thumb: 'assets/images/models/weapon_monster_bone_axe.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Brutal melee axe crafted from monster bone and horn bound to a wooden shaft.',
      highlights: [
        'Organic bone sculpting combined with stylized game textures'
      ],
      software: ['Blender', 'ZBrush', 'Substance 3D Painter'],
      views: [
        { label: 'Bone Battleaxe', src: 'assets/images/models/weapon_monster_bone_axe.jpg' }
      ]
    },
    {
      id: 'weapon-spine-bone-blade',
      category: 'weapons',
      title: 'Vertebrae Spine Blade',
      spec: 'Fantasy Weapon • 3D Prop',
      thumb: 'assets/images/models/weapon_spine_bone_blade.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Serrated fantasy blade sculpted from interlocking skeletal vertebrae.',
      highlights: [
        'Distinctive silhouette and organic bone surface details'
      ],
      software: ['Blender', 'ZBrush', 'Substance 3D Painter'],
      views: [
        { label: 'Spine Bone Blade', src: 'assets/images/models/weapon_spine_bone_blade.jpg' }
      ]
    },
    {
      id: 'model-tiki-lanterns',
      category: 'weapons',
      title: 'Tiki Lanterns — Wireframe, UV & Texture',
      spec: 'Prop Pipeline • We Are Chouri',
      thumb: 'assets/images/models/model_tiki_lanterns.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Full production breakdown of the stylized lantern prop from wireframe and UV checker map to final emissive game textures.',
      highlights: [
        'Complete wireframe → UV checker → PBR texture pipeline showcase'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity'],
      views: [
        { label: 'Lantern Pipeline', src: 'assets/images/models/model_tiki_lanterns.jpg' },
        { label: 'Full Sheet', src: 'assets/images/web/page_03.jpg' }
      ]
    },
    {
      id: 'prop-cel-cartons',
      category: 'weapons',
      title: 'Hand-Painted Carton Props',
      spec: 'Stylized Props • 3 Colorways',
      thumb: 'assets/images/models/prop_cel_cartons.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Illustrated cartoon milk and juice carton props presented in three vibrant colorways with bold ink outlines.',
      highlights: [
        'Custom graphic packaging design and cel-shaded look development'
      ],
      software: ['Autodesk Maya', 'Illustrator', 'Substance 3D Painter'],
      views: [
        { label: 'Carton Colorways', src: 'assets/images/models/prop_cel_cartons.jpg' },
        { label: 'Full Sheet', src: 'assets/images/web/page_15.jpg' }
      ]
    },
    {
      id: 'sculpt-hand-ice',
      category: 'weapons',
      title: 'Hand on Crystalline Pedestal',
      spec: '3D Sculpt & Render • Prop Study',
      thumb: 'assets/images/models/sculpt_hand_ice.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Sculpted hand emerging from a rocky crystalline pedestal with dramatic rim lighting.',
      highlights: [
        'Organic hand anatomy combined with faceted crystal forms'
      ],
      software: ['ZBrush', 'Blender'],
      views: [
        { label: 'Hand Pedestal Render', src: 'assets/images/models/sculpt_hand_ice.jpg' },
        { label: 'Full Sheet', src: 'assets/images/web/page_09.jpg' }
      ]
    },
    {
      id: 'prop-donut-sweets',
      category: 'weapons',
      title: 'Stylized Bakery & Sweet Props',
      spec: 'Game Props • We Are Chouri',
      thumb: 'assets/images/models/prop_donut.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Assortment of stylized dessert props including glazed donuts, macarons, waffles, and strawberries.',
      highlights: [
        'Part of the 15-piece Candyland prop kit for We Are Chouri'
      ],
      software: ['Blender', 'Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'Glazed Donut', src: 'assets/images/models/prop_donut.jpg' },
        { label: 'Strawberry Prop', src: 'assets/images/models/prop_strawberry.jpg' },
        { label: 'Bakery Row', src: 'assets/images/models/props_bakery_sweets.jpg' },
        { label: 'All 15 Props Sheet', src: 'assets/images/web/page_04.jpg' }
      ]
    },
    {
      id: 'prop-candle-mushroom',
      category: 'weapons',
      title: 'Fantasy Candle, Mushroom & Candy Props',
      spec: 'Game Props • We Are Chouri',
      thumb: 'assets/images/models/prop_candle.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Whimsical melting candle, spotted mushroom, and candy sphere props created for fantasy level dressing.',
      highlights: [
        'Soft stylized gradients and clean low-poly silhouettes'
      ],
      software: ['Blender', 'Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'Fantasy Candle', src: 'assets/images/models/prop_candle.jpg' },
        { label: 'Mushroom Prop', src: 'assets/images/models/prop_mushroom.jpg' },
        { label: 'Candy Sphere', src: 'assets/images/models/prop_candy_sphere.jpg' },
        { label: 'All 15 Props Sheet', src: 'assets/images/web/page_04.jpg' }
      ]
    },
    {
      id: 'prop-relic-beast',
      category: 'weapons',
      title: 'Ancient Relic & Sweet Set',
      spec: 'Game Props • We Are Chouri',
      thumb: 'assets/images/models/prop_relic_beast.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Collectible relic figurine and stylized environmental props designed for puzzle stages.',
      highlights: [
        'Optimized game-ready UVs and hand-painted details'
      ],
      software: ['Blender', 'Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'Relic Prop', src: 'assets/images/models/prop_relic_beast.jpg' },
        { label: 'Prop Collection', src: 'assets/images/models/props_ancient_relics.jpg' },
        { label: 'All 15 Props Sheet', src: 'assets/images/web/page_04.jpg' }
      ]
    },

    // ---------------- ANIMATION & SHADERS (3 Items) ----------------
    {
      id: 'anim-chouri-cutscene',
      category: 'shaders',
      title: 'We Are Chouri — 3D Cutscene Animation',
      spec: '3D Cutscene • Unity Timeline',
      thumb: 'assets/images/crops/anim_chouri.jpg',
      stageClass: '',
      videoId: '4QMDKKF5QoQ',
      desc: 'In-engine Unity opening cutscene (“Chouri — Wake Up in the Forest”), featuring camera staging, character acting, and lighting.',
      highlights: [
        'Directed and animated in Unity Engine',
        'Playable YouTube video directly in the stage viewer'
      ],
      software: ['Unity Engine', 'Autodesk Maya', 'Cinemachine'],
      links: [{ label: 'Watch on YouTube ↗', url: 'https://youtu.be/4QMDKKF5QoQ' }],
      views: [
        { label: 'Play Cutscene Video', videoId: '4QMDKKF5QoQ', thumb: 'assets/images/crops/anim_chouri.jpg' },
        { label: 'Cutscene Stills', src: 'assets/images/crops/anim_chouri.jpg' },
        { label: 'Animation Sheet', src: 'assets/images/web/page_08.jpg' }
      ]
    },
    {
      id: 'anim-creature-motion',
      category: 'shaders',
      title: 'Four-Armed Creature Run Cycle Animation',
      spec: '3D Animation • Locomotion',
      thumb: 'assets/images/crops/anim_boss_run.jpg',
      stageClass: '',
      videoId: 'wsLVAP0mqXw',
      desc: 'Multi-limbed character locomotion and color-variation animation reel.',
      highlights: [
        'Dynamic weight shifts across four arms and bipedal legs'
      ],
      software: ['Autodesk Maya', '3D Animation'],
      links: [{ label: 'Watch on YouTube ↗', url: 'https://www.youtube.com/watch?v=wsLVAP0mqXw' }],
      views: [
        { label: 'Play Animation Reel', videoId: 'wsLVAP0mqXw', thumb: 'assets/images/crops/anim_boss_run.jpg' },
        { label: 'Animation Stills', src: 'assets/images/crops/anim_boss_run.jpg' },
        { label: 'Animation Sheet', src: 'assets/images/web/page_08.jpg' }
      ]
    },
    {
      id: 'shader-fresnel-ducks',
      category: 'shaders',
      title: 'Material, Outline & Fresnel Shader Studies',
      spec: 'Shader Look-Dev • 3D Rendering',
      thumb: 'assets/images/models/shader_fresnel_ducks.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Look-development studies exploring emissive rim glow, contour wireframe outlines, and refractive glass shaders.',
      highlights: [
        'Fresnel rim lighting, toon contour outlines, and glass caustics'
      ],
      software: ['Blender', 'Autodesk Maya', 'Shader Graph'],
      views: [
        { label: 'Fresnel & Outline Shaders', src: 'assets/images/models/shader_fresnel_ducks.jpg' },
        { label: 'Glass Refraction Study', src: 'assets/images/models/shader_glass_sphere.jpg' },
        { label: 'Shaders Sheet', src: 'assets/images/web/page_16.jpg' }
      ]
    },

    // ---------------- 2D & CONCEPT ART (3 Items) ----------------
    {
      id: 'game-oxie-death',
      category: 'art2d',
      title: 'OXIE DEATH (OxieRun) — 48H Game Jam Art',
      spec: 'Key Art & Game Design • 2026',
      thumb: 'assets/images/crops/oxie_death_banner.jpg',
      stageClass: '',
      desc: 'Key visual astronaut illustration, logo banner, and Game Design Document created for the 48-Hour Deadline Game Jam.',
      highlights: [
        'Astronaut hero key art and hand-lettered OXIE DEATH branding',
        'Designed core oxygen-survival platforming mechanics'
      ],
      software: ['Photoshop', 'Digital Illustration', 'Game Design'],
      views: [
        { label: 'OXIE DEATH Banner', src: 'assets/images/crops/oxie_death_banner.jpg' },
        { label: 'Astronaut Key Art', src: 'assets/images/crops/oxie_death_keyart.jpg' }
      ]
    },
    {
      id: 'art2d-horror-ui',
      category: 'art2d',
      title: 'Game UI, HUD & Menu Design',
      spec: 'UX/UI Design • Game Interfaces',
      thumb: 'assets/images/crops/horror_hud.jpg',
      stageClass: '',
      desc: 'User interface layouts, HUD overlays, title screens, and menu systems designed for survival horror and action games.',
      highlights: [
        'Custom HUD icons, health bars, and responsive menu wireframes'
      ],
      software: ['Photoshop', 'Illustrator', 'Figma'],
      views: [
        { label: 'Horror HUD', src: 'assets/images/crops/horror_hud.jpg' },
        { label: 'Menu Interface', src: 'assets/images/crops/horror_menu.jpg' },
        { label: 'Game UI Sheet 18', src: 'assets/images/web/page_18.jpg' },
        { label: 'Game UI Sheet 20', src: 'assets/images/web/page_20.jpg' }
      ]
    },
    {
      id: 'art2d-illustrations',
      category: 'art2d',
      title: '2D Character Sheets & Digital Illustrations',
      spec: '2D Art • Concept & Illustration',
      thumb: 'assets/images/crops/noodle_art.jpg',
      stageClass: '',
      desc: '2D character turnaround sheets, vector portraits, and digital paintings.',
      highlights: [
        'Character design turnaround sheets, vector art, and food illustration'
      ],
      software: ['Procreate', 'Photoshop', 'Illustrator'],
      views: [
        { label: 'Digital Painting', src: 'assets/images/crops/noodle_art.jpg' },
        { label: '2D Character Sheet', src: 'assets/images/web/page_21.jpg' },
        { label: 'Illustrations 22', src: 'assets/images/web/page_22.jpg' },
        { label: 'Vector Portraits 23', src: 'assets/images/web/page_23.jpg' },
        { label: 'Artwork Sheet 24', src: 'assets/images/web/page_24.jpg' }
      ]
    }
  ];

  // ==========================================================================
  // 2. CURATED 6 GAME PROJECTS MODAL DATA
  // ==========================================================================
  const GAMES_DATA = {
    'game-we-are-chouri': {
      category: 'GAME PROJECT • 2026',
      title: 'We Are Chouri — 2-Player Co-op Adventure',
      desc: 'Split-screen 3D puzzle adventure built in Unity. Designed and modeled the playable duo Guidi & Zeppe, enemy creatures, 15 fantasy props, shrine environments, and directed the opening 3D cutscene.',
      highlights: [
        'Playable 3D heroes Guidi & Zeppe from concept to rigged models',
        'Monsters, UV-unwrapped lanterns, and 15 Candyland props',
        'In-engine Unity shrine & suspension bridge environments',
        'Opening 3D cutscene (“Wake Up in the Forest”)'
      ],
      software: ['Unity', 'Autodesk Maya', 'Blender', 'Substance 3D Painter'],
      views: [
        { label: 'Characters Sheet', src: 'assets/images/web/page_02.jpg' },
        { label: '3D Cutscene Video', videoId: '4QMDKKF5QoQ', thumb: 'assets/images/crops/anim_chouri.jpg' },
        { label: 'Monsters & UVs', src: 'assets/images/web/page_03.jpg' },
        { label: '15 Candy Props', src: 'assets/images/web/page_04.jpg' },
        { label: 'In-Engine World', src: 'assets/images/web/page_05.jpg' }
      ]
    },
    'game-wingbeat': {
      category: 'GAME PROJECT • 2026',
      title: 'Wingbeat — 3D Party / Simulation Game',
      desc: 'Colorful stylized 3D game set across floating islands. Modeled the Kraken & Tiki Island diorama, twisted fantasy trees, and decorative props.',
      highlights: [
        'Low-poly Kraken & Tiki Island 3D diorama',
        'Stylized twisted fantasy trees in multiple colorways',
        'Playable live on itch.io'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity'],
      links: [{ label: 'Play Wingbeat on itch.io ↗', url: 'https://newskung.itch.io/wingbeat' }],
      views: [
        { label: 'Kraken Island Diorama', src: 'assets/images/models/env_kraken_island.jpg' },
        { label: 'Stylized Fantasy Trees', src: 'assets/images/models/env_fantasy_trees.jpg' },
        { label: 'Island Sheet', src: 'assets/images/web/page_13.jpg' },
        { label: 'Trees Sheet', src: 'assets/images/web/page_14.jpg' }
      ]
    },
    'game-oxie-death': {
      category: '48-HOUR GAME JAM • 2026',
      title: 'OXIE DEATH (OxieRun) — Game Jam Project',
      desc: 'Sci-fi survival platformer created during the 48-Hour Deadline Game Jam. Illustrated the astronaut key art, title logo banner, and authored the Game Design Document.',
      highlights: [
        'Full-resolution astronaut key visual & title banner',
        'Oxygen-depletion survival runner mechanics'
      ],
      software: ['Photoshop', 'Digital Illustration', 'Game Design'],
      views: [
        { label: 'OXIE DEATH Banner', src: 'assets/images/crops/oxie_death_banner.jpg' },
        { label: 'Astronaut Key Art', src: 'assets/images/crops/oxie_death_keyart.jpg' }
      ]
    },
    'game-no-more-rat': {
      category: 'ROBLOX GAME PROJECT',
      title: 'No More Rat : Down The Drain',
      desc: 'Hack-and-slash action game on Roblox where players control an exterminator hamster battling mutant rats. Modeled the hero and 6 boss and enemy creatures.',
      highlights: [
        'Four-Armed Mutant Rat Boss, Dark Rat Demon, and Spiky Beast Rat',
        'Toxic Mutant Rat, Spear Rider, Kimono Rat, and Trenchcoat Hamster Hero',
        'Live playable game on Roblox'
      ],
      software: ['Blender', 'Substance 3D Painter', 'Roblox Studio'],
      links: [{ label: 'Play on Roblox ↗', url: 'https://www.roblox.com/games/79475326799719/No-More-Rat' }],
      views: [
        { label: 'Roblox Showcase Sheet', src: 'assets/images/web/page_06.jpg' },
        { label: 'Creature Lineup Sheet', src: 'assets/images/web/page_07.jpg' },
        { label: 'Four-Arm Run Cycle', videoId: 'wsLVAP0mqXw', thumb: 'assets/images/crops/anim_boss_run.jpg' }
      ]
    },
    'game-juukie': {
      category: 'GAME PROJECT • UNITY',
      title: 'Juukie!! The Mouse: Adventures',
      desc: '3D endless runner built in Unity featuring modular stage segments, obstacles, and custom UI.',
      highlights: [
        '3D environment assets, obstacle prefabs, and UI HUD',
        'Source repository available on GitHub'
      ],
      software: ['Unity', 'Autodesk Maya', 'C#'],
      links: [{ label: 'View GitHub Repository ↗', url: 'https://github.com/aiyoyooo/EndlessRun_Project' }],
      views: [
        { label: 'Juukie & Game UI Sheet', src: 'assets/images/web/page_18.jpg' }
      ]
    },
    'game-dominion': {
      category: 'STRATEGY CARD GAME',
      title: 'Dominion’s War: The Card Game',
      desc: 'Turn-based strategy card game. Designed unit card frames, battlefield board layout, and player HUD.',
      highlights: [
        'Card frame illustrations, tactical board grid, and UI layout'
      ],
      software: ['Photoshop', 'Illustrator', 'Figma'],
      views: [
        { label: 'Dominion’s War Sheet', src: 'assets/images/web/page_19.jpg' },
        { label: 'Card Game Closeup', src: 'assets/images/crops/dominion_cardgame.jpg' }
      ]
    }
  };

  // ==========================================================================
  // 3. PURE VISUAL GALLERY RENDERING, FILTERING & VIEW SWITCHING
  // ==========================================================================
  const galleryGrid = document.getElementById('pureGalleryGrid');
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  const sizeSwitchButtons = document.querySelectorAll('.mode-switch-btn');

  let currentFilter = 'all';

  function getFilteredItems() {
    if (currentFilter === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => item.category === currentFilter);
  }

  function renderGallery() {
    if (!galleryGrid) return;
    const items = getFilteredItems();

    galleryGrid.innerHTML = items.map(item => {
      const stageClass = item.stageClass ? ` ${item.stageClass}` : '';
      const indicator = item.videoId
        ? '&#9654; Video'
        : item.views && item.views.length > 1
          ? `${item.views.length} Views`
          : '';

      return `
        <article
          class="pure-gallery-item${stageClass}"
          data-modal-id="${item.id}"
          tabindex="0"
          role="button"
          aria-label="${item.title}"
        >
          <img src="${item.thumb}" alt="${item.title}" loading="lazy" />
          ${indicator ? `<span class="gallery-item-badge">${indicator}</span>` : ''}
          <div class="gallery-item-caption">
            <span class="gallery-item-cat">${item.spec}</span>
            <h3 class="gallery-item-title">${item.title}</h3>
          </div>
        </article>
      `;
    }).join('');
  }

  // Filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';

      if (galleryGrid) {
        galleryGrid.classList.add('gallery-transitioning');
        setTimeout(() => {
          renderGallery();
          galleryGrid.classList.remove('gallery-transitioning');
        }, 150);
      }
    });
  });

  // Grid Size Switch (2 Col Large / 3 Col Grid / 4 Col Compact)
  sizeSwitchButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeSwitchButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const size = btn.getAttribute('data-size') || 'grid';
      if (galleryGrid) {
        galleryGrid.classList.remove('mode-large', 'mode-grid', 'mode-compact');
        galleryGrid.classList.add(`mode-${size}`);
      }
    });
  });

  // ==========================================================================
  // 4. ARTSTATION SPLIT LIGHTBOX MODAL
  // ==========================================================================
  const artworkModal = document.getElementById('artworkModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalMediaStage = document.getElementById('modalMediaStage');
  const modalThumbsStage = document.getElementById('modalThumbsStage');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalHighlights = document.getElementById('modalHighlights');
  const modalSoftware = document.getElementById('modalSoftware');
  const modalLinks = document.getElementById('modalLinks');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');

  let activeModalList = GALLERY_ITEMS;
  let currentModalIndex = 0;

  function openModal(id) {
    if (!artworkModal) return;

    const filteredGallery = getFilteredItems();
    const filteredIdx = filteredGallery.findIndex(item => item.id === id);

    if (filteredIdx !== -1) {
      activeModalList = filteredGallery;
      currentModalIndex = filteredIdx;
    } else {
      const fullIdx = GALLERY_ITEMS.findIndex(item => item.id === id);
      if (fullIdx !== -1 && !GAMES_DATA[id]) {
        activeModalList = GALLERY_ITEMS;
        currentModalIndex = fullIdx;
      } else if (GAMES_DATA[id]) {
        const gameKeys = Object.keys(GAMES_DATA);
        activeModalList = gameKeys.map(k => ({ id: k, ...GAMES_DATA[k] }));
        currentModalIndex = Math.max(0, gameKeys.indexOf(id));
      } else {
        return;
      }
    }

    displayModalContent(activeModalList[currentModalIndex]);
    artworkModal.classList.add('active');
    artworkModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!artworkModal) return;
    artworkModal.classList.remove('active');
    artworkModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (modalMediaStage) modalMediaStage.innerHTML = '';
  }

  function displayModalContent(entry) {
    if (!entry) return;

    if (modalCategory) modalCategory.textContent = entry.spec || entry.category || '3D ARTWORK';
    if (modalTitle) modalTitle.textContent = entry.title || '';
    if (modalDescription) modalDescription.textContent = entry.desc || '';

    if (modalHighlights) {
      const list = entry.highlights || [];
      modalHighlights.innerHTML = list.map(item => `<li>${item}</li>`).join('');
    }

    if (modalSoftware) {
      const tools = entry.software || [];
      modalSoftware.innerHTML = tools.map(t => `<span class="modal-tag-pill">${t}</span>`).join('');
    }

    if (modalLinks) {
      const links = entry.links || [];
      modalLinks.innerHTML = links.map(l => `
        <a href="${l.url}" target="_blank" rel="noopener" class="modal-btn-external">
          <span>${l.label}</span>
        </a>
      `).join('');
    }

    const views = entry.views && entry.views.length > 0
      ? entry.views
      : [{ label: 'Render', src: entry.thumb }];

    renderStageView(views[0]);

    if (modalThumbsStage) {
      if (views.length > 1) {
        modalThumbsStage.style.display = 'flex';
        modalThumbsStage.innerHTML = views.map((v, i) => {
          const thumbSrc = v.thumb || v.src || entry.thumb;
          return `
            <button type="button" class="modal-thumb-btn${i === 0 ? ' active' : ''}" data-view-idx="${i}">
              <img src="${thumbSrc}" alt="${v.label}" />
              <span>${v.label}</span>
            </button>
          `;
        }).join('');

        modalThumbsStage.querySelectorAll('.modal-thumb-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            modalThumbsStage.querySelectorAll('.modal-thumb-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const idx = parseInt(btn.getAttribute('data-view-idx') || '0', 10);
            renderStageView(views[idx]);
          });
        });
      } else {
        modalThumbsStage.style.display = 'none';
        modalThumbsStage.innerHTML = '';
      }
    }
  }

  function renderStageView(view) {
    if (!modalMediaStage || !view) return;
    if (view.videoId) {
      modalMediaStage.innerHTML = `
        <iframe
          src="https://www.youtube-nocookie.com/embed/${view.videoId}?autoplay=1&rel=0"
          title="${view.label}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `;
    } else if (view.src) {
      modalMediaStage.innerHTML = `<img src="${view.src}" alt="${view.label}" />`;
    }
  }

  function stepModal(delta) {
    if (!activeModalList.length) return;
    currentModalIndex = (currentModalIndex + delta + activeModalList.length) % activeModalList.length;
    displayModalContent(activeModalList[currentModalIndex]);
  }

  if (modalNextBtn) modalNextBtn.addEventListener('click', () => stepModal(1));
  if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => stepModal(-1));
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // Delegate clicks on any [data-modal-id] element
  document.addEventListener('click', e => {
    if (e.target.closest('a[href^="http"]')) return;
    const trigger = e.target.closest('[data-modal-id]');
    if (!trigger) return;
    e.preventDefault();
    const id = trigger.getAttribute('data-modal-id');
    if (id) openModal(id);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && document.activeElement && document.activeElement.hasAttribute('data-modal-id')) {
      openModal(document.activeElement.getAttribute('data-modal-id'));
      return;
    }
    if (!artworkModal || !artworkModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') stepModal(1);
    if (e.key === 'ArrowLeft') stepModal(-1);
  });

  // ==========================================================================
  // 5. ARTIST MASTHEAD BANNER CAROUSEL
  // ==========================================================================
  const heroSlides = document.querySelectorAll('.hero-bg-media');
  const heroDots = document.querySelectorAll('.hero-dot');
  const heroPrevBtn = document.getElementById('heroPrevBtn');
  const heroNextBtn = document.getElementById('heroNextBtn');
  const heroSlideLabel = document.getElementById('hero-slide-label');

  const BANNER_LABELS = [
    '3D ARTIST & GAME ASSETS • Sunset Alleyway — 3D Lighting & Environment',
    '3D ARTIST & GAME ASSETS • We Are Chouri — In-Engine Unity Shrine',
    '3D ARTIST & GAME ASSETS • Wingbeat — Kraken & Tiki Island 3D Diorama',
    '3D ARTIST & GAME ASSETS • OXIE DEATH — 48H Game Jam Key Art',
    '3D ARTIST & GAME ASSETS • Isometric Artist Studio — 3D Room Diorama'
  ];

  let currentSlide = 0;
  let bannerTimer = null;

  function showSlide(index) {
    if (!heroSlides.length) return;
    currentSlide = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
    heroDots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    if (heroSlideLabel && BANNER_LABELS[currentSlide]) {
      heroSlideLabel.textContent = BANNER_LABELS[currentSlide];
    }
  }

  function restartBannerTimer() {
    if (bannerTimer) clearInterval(bannerTimer);
    bannerTimer = setInterval(() => showSlide(currentSlide + 1), 5500);
  }

  if (heroNextBtn) {
    heroNextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
      restartBannerTimer();
    });
  }
  if (heroPrevBtn) {
    heroPrevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
      restartBannerTimer();
    });
  }
  heroDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      restartBannerTimer();
    });
  });

  restartBannerTimer();

  // ==========================================================================
  // 6. SCROLL PROGRESS & NAVIGATION SCROLLSPY
  // ==========================================================================
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['home', 'artwork3d', 'gallery', 'gameproject', 'about', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${docHeight > 0 ? (scrollY / docHeight) * 100 : 0}%`;
    }

    let currentSec = 'home';
    sections.forEach(sec => {
      if (scrollY + 180 >= sec.offsetTop) {
        currentSec = sec.id;
      }
    });
    navLinks.forEach(link => {
      const isMatch = link.getAttribute('href') === `#${currentSec}`;
      link.classList.toggle('active-link', isMatch);
    });
  }, { passive: true });

  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================================================
  // 7. REVEAL ON SCROLL & CURTAIN
  // ==========================================================================
  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-revealed'));
  }

  window.addEventListener('load', () => {
    const curtain = document.getElementById('pageTransitionCurtain');
    if (curtain) curtain.classList.add('loaded');
  });

  // Render initial gallery
  renderGallery();
})();
