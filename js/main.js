/* ==========================================================================
   METHICHAI PRUEKSAKING — 3D ARTIST & ENVIRONMENT ARTIST PORTFOLIO
   Minimalist ArtStation-Inspired Portfolio Controller
   ========================================================================== */

(() => {
  'use strict';

  // ==========================================================================
  // 1. ARTWORKS & 3D ASSETS DATABASE (40 Comprehensive Items)
  // ==========================================================================
  const GALLERY_ITEMS = [
    // ---------------- CHARACTERS (15 Items) ----------------
    {
      id: 'model-guidi',
      category: 'characters',
      title: 'Guidi — Playable 3D Character',
      spec: 'Character Model • We Are Chouri',
      thumb: 'assets/images/models/model_guidi.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Playable dual-protagonist for the split-screen adventure We Are Chouri. Modeled low-poly game geometry, custom stylized textures, and rigged for real-time player locomotion.',
      highlights: [
        'Complete turnaround topology with optimized edge loops for joint deformation',
        'Hand-crafted stylized PBR diffuse, roughness, and normal maps in Substance 3D Painter',
        'Integrated into Unity Engine with real-time dynamic lighting and controller inputs'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine'],
      views: [
        { label: 'Full 3D Model', src: 'assets/images/models/model_guidi.jpg' },
        { label: 'Character Sheet & Poses', src: 'assets/images/web/page_02.jpg' },
        { label: 'Character Lineup', src: 'assets/images/crops/chouri_characters.jpg' }
      ]
    },
    {
      id: 'model-zeppe',
      category: 'characters',
      title: 'Zeppe — Playable 3D Character',
      spec: 'Character Model • We Are Chouri',
      thumb: 'assets/images/models/model_zeppe.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Second playable co-op protagonist featuring expressive facial shapes, custom stylized hair geometry, and matching fantasy adventure costume.',
      highlights: [
        'Clean edge-loop topology specifically built for expressive split-screen gameplay',
        'Coordinated color palette and material hierarchy built in Substance 3D Painter',
        'Complete bone weighting, idle animations, and walk cycles'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine'],
      views: [
        { label: 'Full 3D Model', src: 'assets/images/models/model_zeppe.jpg' },
        { label: 'Character Sheet & Poses', src: 'assets/images/web/page_02.jpg' },
        { label: 'Split-Screen Gameplay', src: 'assets/images/crops/chouri_bridge.jpg' }
      ]
    },
    {
      id: 'boss-four-arm-rat',
      category: 'characters',
      title: 'Four-Armed Mutant Rat Boss',
      spec: 'Boss Character • No More Rat',
      thumb: 'assets/images/models/boss_four_arm_rat.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Formidable four-armed subterranean brute monster modeled for No More Rat : Down The Drain. Features asymmetric mutant muscles, sharp claws, and battle scars.',
      highlights: [
        'Multi-limbed skeletal hierarchy with custom multi-arm IK/FK rig',
        'High-resolution digital sculpt baked into efficient low-poly game mesh',
        'Custom heavy attack, roar, and quadruped sprint animation cycles'
      ],
      software: ['Blender', 'Substance 3D Painter', 'Roblox Studio'],
      links: [{ label: 'Play Game on Roblox', url: 'https://www.roblox.com/games/79475326799719/No-More-Rat' }],
      views: [
        { label: 'Boss Model Turnaround', src: 'assets/images/models/boss_four_arm_rat.jpg' },
        { label: 'Run Cycle Animation', videoId: 'wsLVAP0mqXw' },
        { label: 'Creature Roster Sheet', src: 'assets/images/web/page_07.jpg' }
      ]
    },
    {
      id: 'boss-dark-rat-demon',
      category: 'characters',
      title: 'Dark Rat Demon Boss Sculpt',
      spec: 'High-Poly Sculpt • Creature Design',
      thumb: 'assets/images/models/boss_dark_rat_demon.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Menacing demonic boss concept featuring elongated horns, obsidian skin textures, and glowing crimson demonic eyes.',
      highlights: [
        'High-density digital clay sculpt with intricate muscle fiber detailing',
        'Advanced normal and ambient occlusion map extraction',
        'Dark fantasy aesthetic tuned for underground boss encounters'
      ],
      software: ['Pixologic ZBrush', 'Blender', 'Substance 3D Painter'],
      views: [
        { label: 'Demon Boss Sculpt', src: 'assets/images/models/boss_dark_rat_demon.jpg' },
        { label: 'Creature Lineup', src: 'assets/images/web/page_07.jpg' }
      ]
    },
    {
      id: 'boss-spiky-beast-rat',
      category: 'characters',
      title: 'Spiky Beast Rat Monster',
      spec: 'Creature Model • No More Rat',
      thumb: 'assets/images/models/boss_spiky_beast_rat.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Quadruped rodent beast covered in defensive bone spikes, toxic pustules, and heavy muscular legs designed for charging attacks.',
      highlights: [
        'Dynamic quadruped anatomy sculpted with aggressive aggressive posture',
        'Hardened chitinous shell materials with hand-painted wear and grime',
        'Optimized game topology ready for real-time engine physics'
      ],
      software: ['Blender', 'Substance 3D Painter', 'Roblox Studio'],
      views: [
        { label: 'Spiky Beast Model', src: 'assets/images/models/boss_spiky_beast_rat.jpg' },
        { label: 'Sewer Dungeons Sheet', src: 'assets/images/web/page_07.jpg' }
      ]
    },
    {
      id: 'boss-mutant-green-rat',
      category: 'characters',
      title: 'Toxic Mutant Rat Monster',
      spec: 'Creature Model • Stylized Horror',
      thumb: 'assets/images/models/boss_mutant_green_rat.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Toxic bio-mutated sewer creature with mutated green fur patches, asymmetric claws, and radioactive sludge details.',
      highlights: [
        'Detailed organic deformities sculpted with expressive silhouette',
        'Custom emissive sludge maps highlighting toxic sewer mutations',
        'Lightweight polycount for smooth mobile and desktop performance'
      ],
      software: ['Blender', 'Substance 3D Painter', 'Roblox Studio'],
      views: [
        { label: 'Toxic Mutant Model', src: 'assets/images/models/boss_mutant_green_rat.jpg' },
        { label: 'Creature Roster', src: 'assets/images/web/page_07.jpg' }
      ]
    },
    {
      id: 'enemy-spear-rider-rat',
      category: 'characters',
      title: 'Spear Rider Patrol Rat',
      spec: 'Enemy Minion • Weapon Combat',
      thumb: 'assets/images/models/enemy_spear_rider_rat.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Mobile spear-wielding patrol minion mounted on a scavenger harness, designed for quick thrust and flank encounters.',
      highlights: [
        'Equipped with primitive bone spear and modular leather armor harness',
        'Clean low-poly topology with shared texture atlases',
        'Rapid thrust, patrol, and flinch animations'
      ],
      software: ['Blender', 'Substance 3D Painter'],
      views: [
        { label: 'Spear Rider Model', src: 'assets/images/models/enemy_spear_rider_rat.jpg' },
        { label: 'Sewer Encounter Sheet', src: 'assets/images/web/page_07.jpg' }
      ]
    },
    {
      id: 'enemy-kimono-rat',
      category: 'characters',
      title: 'Kimono Rodent Minion',
      spec: 'Enemy Minion • Stylized Armor',
      thumb: 'assets/images/models/enemy_kimono_rat.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Thematic oriental-inspired minion wearing traditional patterned fabric robes and wooden bamboo shin armor.',
      highlights: [
        'Fabric fold modeling and fabric material textures created in Substance',
        'Distinct silhouette for clear visual readability in dark sewer tunnels',
        'Optimized game-ready skeleton'
      ],
      software: ['Blender', 'Substance 3D Painter'],
      views: [
        { label: 'Kimono Rodent Model', src: 'assets/images/models/enemy_kimono_rat.jpg' },
        { label: 'Full Sheet', src: 'assets/images/web/page_07.jpg' }
      ]
    },
    {
      id: 'hero-trenchcoat-hamster',
      category: 'characters',
      title: 'Detective Hamster Hero',
      spec: 'Hero Model • No More Rat',
      thumb: 'assets/images/models/hero_trenchcoat_hamster.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Protagonist hamster character dressed in a rugged detective trenchcoat, utility belt, and backpack lantern.',
      highlights: [
        'Expressive face and ears rigged for emotive character reactions',
        'Stylized leather and weathered cloth PBR textures',
        'Third-person game-ready character setup'
      ],
      software: ['Blender', 'Substance 3D Painter', 'Roblox Studio'],
      views: [
        { label: 'Detective Hero Model', src: 'assets/images/models/hero_trenchcoat_hamster.jpg' },
        { label: 'Roblox Dungeon Key Art', src: 'assets/images/crops/roblox_keyart.jpg' }
      ]
    },
    {
      id: 'model-plush-bear',
      category: 'characters',
      title: 'Cursed Plush Bear Monster',
      spec: 'Creature Model • We Are Chouri',
      thumb: 'assets/images/models/model_plush_bear.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Cursed oversized plush toy enemy with coarse stitched burlap cloth, exposed cotton stuffing, and an unnerving toothy grin.',
      highlights: [
        'Macro-scale fabric weave normal maps giving realistic plush tactile texture',
        'Subsurface scattering shader profile tuned in Unity',
        'Whimsical yet unsettling enemy animations'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine'],
      views: [
        { label: 'Plush Bear Model', src: 'assets/images/models/model_plush_bear.jpg' },
        { label: 'Monsters & UV Unwraps', src: 'assets/images/web/page_03.jpg' }
      ]
    },
    {
      id: 'model-shrine-demon',
      category: 'characters',
      title: 'Shrine Stone Demon',
      spec: 'Creature Model • We Are Chouri',
      thumb: 'assets/images/models/model_shrine_demon.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Ancient temple guardian sculpted with mossy weathered stone, carved ceremonial markings, and glowing demonic eyes.',
      highlights: [
        'Procedural moss, stone fractures, and weathering layers in Substance Painter',
        'Emissive eyes with dynamic bloom effect in Unity',
        'Heavy golem locomotion and ground-smash animations'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine'],
      views: [
        { label: 'Shrine Demon Model', src: 'assets/images/models/model_shrine_demon.jpg' },
        { label: 'Monsters & UV Unwraps', src: 'assets/images/web/page_03.jpg' }
      ]
    },
    {
      id: 'rig-jester',
      category: 'characters',
      title: 'Jester Rig & Topology Breakdown',
      spec: 'Rigging & UV Layout • Character Tech',
      thumb: 'assets/images/models/rig_jester_front.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Production-ready humanoid skeleton rig, clean facial/body blend shapes, and 0-1 UV coordinate layout unwrapped for maximum texture resolution.',
      highlights: [
        'Complete bipedal skeleton with IK/FK switching arms and reverse foot locks',
        'Clean uniform quad topology ensuring deformation without polygon stretching',
        'Zero-overlap UV unwraps with consistent pixel density across all islands'
      ],
      software: ['Autodesk Maya', 'Maya Rigging Toolset'],
      views: [
        { label: 'Front Rig Showcase', src: 'assets/images/models/rig_jester_front.jpg' },
        { label: 'Skeleton & UV Unwraps', src: 'assets/images/crops/jester_rig.jpg' },
        { label: 'Full Rig Sheet', src: 'assets/images/web/page_11.jpg' }
      ]
    },
    {
      id: 'sculpt-cyclops-fang',
      category: 'characters',
      title: 'One-Eyed Cyclops Horror Bust',
      spec: 'Digital Sculpt • Creature Concept',
      thumb: 'assets/images/models/sculpt_cyclops_fang.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Asymmetrical horror creature bust featuring a single central eye, jagged tusks protruding from lower jaw, and organic skin pore detail.',
      highlights: [
        'High-resolution multi-million polygon digital sculpt in Pixologic ZBrush',
        'Organic fleshy skin folds, wrinkle passes, and surface micro-pores',
        'Matcap studio render showcasing muscular tension'
      ],
      software: ['Pixologic ZBrush'],
      views: [
        { label: 'Cyclops Bust Sculpt', src: 'assets/images/models/sculpt_cyclops_fang.jpg' }
      ]
    },
    {
      id: 'sculpt-flesh-alien',
      category: 'characters',
      title: 'Biomechanical Flesh Alien Bust',
      spec: 'Digital Sculpt • Sci-Fi Horror',
      thumb: 'assets/images/models/sculpt_flesh_alien.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Conceptual creature study combining biomechanical exoskeleton plating with organic sinew and alien muscle structures.',
      highlights: [
        'Hard-surface shell plating transitioning into fibrous organic tissue',
        'Dynamesh sculpting and ZRemesher topology re-projection',
        'High-contrast studio lighting render highlighting surface forms'
      ],
      software: ['Pixologic ZBrush'],
      views: [
        { label: 'Alien Bust Sculpt', src: 'assets/images/models/sculpt_flesh_alien.jpg' }
      ]
    },
    {
      id: 'sculpt-metallic-figure',
      category: 'characters',
      title: 'Anatomical Humanoid Studies',
      spec: 'Anatomy Sculpting • Form & Posture',
      thumb: 'assets/images/models/sculpt_metallic_figure.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Academic study of human muscular anatomy, skeletal landmarks, and dynamic standing poise rendered in metallic chrome shader.',
      highlights: [
        'Accurate muscular volume placement from deltoids down to gastrocnemius',
        'Surface curvature highlights under chrome reflection',
        'Accompanied by facial expressions and warrior busts'
      ],
      software: ['Pixologic ZBrush', 'KeyShot'],
      views: [
        { label: 'Metallic Anatomy Study', src: 'assets/images/models/sculpt_metallic_figure.jpg' },
        { label: 'Elf Warrior Busts', src: 'assets/images/models/sculpt_elf_warrior_busts.jpg' },
        { label: 'Spiky Hair Head Sculpt', src: 'assets/images/models/sculpt_spiky_hair_head.jpg' },
        { label: 'Full Sculpt Sheet', src: 'assets/images/web/page_17.jpg' }
      ]
    },

    // ---------------- ENVIRONMENTS (9 Items) ----------------
    {
      id: 'env-kraken-island',
      category: 'environments',
      title: 'Kraken & Tiki Island 3D Diorama',
      spec: 'Environment Diorama • Wingbeat (2026)',
      thumb: 'assets/images/models/env_kraken_island.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Vibrant low-poly stylized tropical island surrounded by giant magenta Kraken tentacles, carved turquoise Tiki totems, wooden docks, and glowing crystals for Wingbeat.',
      highlights: [
        'Cohesive stylized color theory and whimsical silhouette language',
        'Modular wooden planks, crystal formations, and tropical flora',
        'Real-time water shader with shoreline foam blending'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine'],
      links: [{ label: 'Play Wingbeat on itch.io', url: 'https://newskung.itch.io/wingbeat' }],
      views: [
        { label: 'Full Island Diorama', src: 'assets/images/models/env_kraken_island.jpg' },
        { label: 'Island Overview Sheet', src: 'assets/images/web/page_13.jpg' }
      ]
    },
    {
      id: 'env-sunset-alley',
      category: 'environments',
      title: 'Sunset Alleyway & Architecture',
      spec: 'Architectural Environment • 3D Scene',
      thumb: 'assets/images/crops/alley_sunset.jpg',
      stageClass: '',
      desc: 'Atmospheric urban Japanese alleyway bathed in warm golden hour sunset light, featuring overhead utility cables, air conditioner units, and asphalt puddles.',
      highlights: [
        'High-density modular architectural assets: air units, signs, and power poles',
        'Atmospheric volumetric lighting and sunset skybox color grading',
        'Realistic roughness variation reflecting sunset warmth on wet ground'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unreal Engine 5'],
      views: [
        { label: 'Sunset Alleyway Render', src: 'assets/images/crops/alley_sunset.jpg' },
        { label: 'Modern Interior Living Room', src: 'assets/images/crops/modern_interior.jpg' },
        { label: 'Street Character', src: 'assets/images/crops/street_character.jpg' },
        { label: 'Architectural Sheet', src: 'assets/images/web/page_10.jpg' }
      ]
    },
    {
      id: 'env-isometric-studio',
      category: 'environments',
      title: 'Isometric Artist Studio Diorama',
      spec: '3D Room Diorama • Lighting & Props',
      thumb: 'assets/images/models/env_isometric_studio.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Detailed miniature artist studio room diorama complete with dual monitors, drawing tablet, art supplies, sofa, and interior lighting.',
      highlights: [
        'Over 35 unique low-poly props meticulously modeled and placed',
        'Dual-tone warm interior lamp lighting contrasting with cool window light',
        'Compact diorama cutaway framing'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'V-Ray'],
      views: [
        { label: 'Isometric Studio Diorama', src: 'assets/images/models/env_isometric_studio.jpg' },
        { label: 'Full Interior Sheet', src: 'assets/images/web/page_11.jpg' }
      ]
    },
    {
      id: 'env-chouri-shrine',
      category: 'environments',
      title: 'Torii Gate & Shrine Ruins',
      spec: 'Level Environment • We Are Chouri',
      thumb: 'assets/images/crops/chouri_shrine.jpg',
      stageClass: '',
      desc: 'Sacred mountain shrine area featuring carved Torii gates, stone lanterns, sacred rope banners, and overgrown mossy rock formations.',
      highlights: [
        'Modular Japanese shrine architecture kit designed for grid snapping',
        'Layered rock textures with moss vertex painting',
        'Dramatic misty mountain lighting creating depth in split-screen'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine'],
      views: [
        { label: 'Torii Gate Shrine Area', src: 'assets/images/crops/chouri_shrine.jpg' },
        { label: 'World Environments Sheet', src: 'assets/images/web/page_05.jpg' }
      ]
    },
    {
      id: 'env-chouri-bridge',
      category: 'environments',
      title: 'Hanging Rope Bridge & Cavern',
      spec: 'Level Environment • We Are Chouri',
      thumb: 'assets/images/crops/chouri_bridge.jpg',
      stageClass: '',
      desc: 'Suspended wooden rope bridge crossing a foggy chasm, connecting mountain shrines to mysterious cavern tunnels.',
      highlights: [
        'Dynamic rope sagging and weathered wooden plank variation',
        'Cavern interior with glowing crystal light sources and stalactites',
        'Interactive physics bridges reacting to player weight'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine'],
      views: [
        { label: 'Hanging Rope Bridge', src: 'assets/images/crops/chouri_bridge.jpg' },
        { label: 'Cavern Tunnels', src: 'assets/images/crops/chouri_cavern.jpg' },
        { label: 'Environments Sheet', src: 'assets/images/web/page_05.jpg' }
      ]
    },
    {
      id: 'env-fantasy-trees',
      category: 'environments',
      title: 'Stylized Twisted Fantasy Trees',
      spec: 'Foliage & Props • Wingbeat (2026)',
      thumb: 'assets/images/models/env_fantasy_trees.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Whimsical organic twisted tree trunks with layered cloud-like foliage crowns and surface bark grooves.',
      highlights: [
        'Curved trunk silhouette modeling emphasizing fantasy storybook charm',
        'Foliage normals adjusted to create soft spherical lighting volumes',
        'Modular placement across island plateaus in Wingbeat'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine'],
      links: [{ label: 'Play Wingbeat on itch.io', url: 'https://newskung.itch.io/wingbeat' }],
      views: [
        { label: 'Fantasy Trees Showcase', src: 'assets/images/models/env_fantasy_trees.jpg' },
        { label: 'Foliage Assets Sheet', src: 'assets/images/web/page_14.jpg' }
      ]
    },
    {
      id: 'env-banana-house',
      category: 'environments',
      title: 'Whimsical Banana House Prop',
      spec: 'Stylized Architecture • Low Poly',
      thumb: 'assets/images/models/env_banana_house.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Playful cartoon cottage shaped like a ripe banana, featuring wooden front door, shingle roof, chimney, and round windows.',
      highlights: [
        'Vibrant hand-painted diffuse style with warm yellow gradients',
        'Low polygon budget optimized for casual mobile games',
        'Storybook cartoon silhouette'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'Banana House Model', src: 'assets/images/models/env_banana_house.jpg' },
        { label: 'Stylized Buildings Sheet', src: 'assets/images/web/page_09.jpg' }
      ]
    },
    {
      id: 'env-pokecenter-clean',
      category: 'environments',
      title: 'Stylized Clean Pokécenter Building',
      spec: 'Building Model • Game Prop',
      thumb: 'assets/images/models/env_pokecenter_clean.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Crisp stylized medical center building featuring iconic curved red roof, circular glass entrance, and clean modern finishes.',
      highlights: [
        'Curved hard-surface paneling modeled with smooth bevels',
        'Clean high-gloss architectural materials and glowing logo',
        'Contrasting companion piece to the abandoned horror version'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'Clean Pokécenter Model', src: 'assets/images/models/env_pokecenter_clean.jpg' },
        { label: 'Building Comparison Sheet', src: 'assets/images/web/page_09.jpg' }
      ]
    },
    {
      id: 'env-pokecenter-horror',
      category: 'environments',
      title: 'Abandoned Dark Pokécenter',
      spec: 'Horror Environment • Texture Study',
      thumb: 'assets/images/models/env_pokecenter_horror.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Post-apocalyptic decay variation of the Pokécenter featuring shattered windows, rusted roof panels, blood spatters, and grime.',
      highlights: [
        'Advanced grunge, rust, peel, and leak procedural masks in Substance',
        'Demonstrates environmental storytelling through material decay',
        'Eerie dark lighting showcase'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'Horror Pokécenter Model', src: 'assets/images/models/env_pokecenter_horror.jpg' },
        { label: 'Building Comparison Sheet', src: 'assets/images/web/page_09.jpg' }
      ]
    },

    // ---------------- WEAPONS & PROPS (10 Items) ----------------
    {
      id: 'weapon-m16a1-rifle',
      category: 'weapons',
      title: 'M16A1 Military Assault Rifle',
      spec: 'Hard-Surface Weapon • PBR Texturing',
      thumb: 'assets/images/models/weapon_m16a1_rifle.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Accurately modeled military firearm with carry handle, magazine release, birdcage flash hider, and matte black steel surface texturing.',
      highlights: [
        'Precise hard-surface sub-d modeling with clean mechanical bevels',
        'Subtle metal edge wear, micro-scratches, and polymer stock finishes',
        'Separate moving parts (bolt, trigger, magazine) prepped for weapon animation'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'M16A1 Rifle Model', src: 'assets/images/models/weapon_m16a1_rifle.jpg' },
        { label: 'AK-47 Rifle Companion', src: 'assets/images/models/weapon_ak47_rifle.jpg' },
        { label: 'Firearms Sheet', src: 'assets/images/web/page_12.jpg' }
      ]
    },
    {
      id: 'weapon-ak47-rifle',
      category: 'weapons',
      title: 'AK-47 Assault Rifle with Wood Stock',
      spec: 'Hard-Surface Weapon • PBR Texturing',
      thumb: 'assets/images/models/weapon_ak47_rifle.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Legendary gas-operated rifle featuring stamped steel receiver, curved banana magazine, and polished wood-grain stock and handguard.',
      highlights: [
        'Polished varnished wood material with realistic grain and varnish scuffs',
        'Gunmetal stamped receiver with rivet and weld-line detailing',
        'Optimized polygon flow suited for first-person shooter viewports'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter'],
      views: [
        { label: 'AK-47 Rifle Model', src: 'assets/images/models/weapon_ak47_rifle.jpg' },
        { label: 'M16A1 Rifle Model', src: 'assets/images/models/weapon_m16a1_rifle.jpg' },
        { label: 'Firearms Sheet', src: 'assets/images/web/page_12.jpg' }
      ]
    },
    {
      id: 'weapon-monster-bone-axe',
      category: 'weapons',
      title: 'Monster Bone Battleaxe',
      spec: 'Fantasy Weapon • Creature Bone',
      thumb: 'assets/images/models/weapon_monster_bone_axe.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Primitive heavy battleaxe crafted from the mandible and horn of an ancient beast, lashed to a timber handle with raw leather.',
      highlights: [
        'Organic bone porosity and fossilized calcification sculpted in ZBrush',
        'Weathered wood grain and tight leather cord wrappings',
        'Aggressive combat silhouette'
      ],
      software: ['Pixologic ZBrush', 'Substance 3D Painter'],
      views: [
        { label: 'Bone Axe Model', src: 'assets/images/models/weapon_monster_bone_axe.jpg' }
      ]
    },
    {
      id: 'weapon-spine-bone-blade',
      category: 'weapons',
      title: 'Vertebrae Spine Bone Blade',
      spec: 'Fantasy Weapon • Organic Blade',
      thumb: 'assets/images/models/weapon_spine_bone_blade.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Curved ceremonial blade carved from sharp interlocking vertebrae segments with an ergonomic bone hilt.',
      highlights: [
        'Intricate anatomical spinal joint sculpting',
        'Hard ivory edge sheen transitioning into marrow crevices',
        'Fantasy weapon design'
      ],
      software: ['Pixologic ZBrush', 'Substance 3D Painter'],
      views: [
        { label: 'Spine Blade Model', src: 'assets/images/models/weapon_spine_bone_blade.jpg' }
      ]
    },
    {
      id: 'model-tiki-lanterns',
      category: 'weapons',
      title: 'Carved Tiki Totems & Lanterns',
      spec: 'Stylized Props • Wingbeat & Chouri',
      thumb: 'assets/images/models/model_tiki_lanterns.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Carved wooden totems, stone lanterns, and hanging candle holders with glowing interior emissive lights.',
      highlights: [
        'Chiseled wood carving details with hand-painted highlight edges',
        'Point-light emissive setup for night-time level ambience',
        'Modular set used across level layouts'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine'],
      views: [
        { label: 'Tiki Lanterns Showcase', src: 'assets/images/models/model_tiki_lanterns.jpg' },
        { label: 'Props Sheet', src: 'assets/images/web/page_03.jpg' }
      ]
    },
    {
      id: 'prop-cel-cartons',
      category: 'weapons',
      title: 'Cel-Shaded Beverage Cartons & Cans',
      spec: 'Stylized NPR Props • Food & Drink',
      thumb: 'assets/images/models/prop_cel_cartons.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Whimsical milk cartons, fruit juice boxes, and aluminum soda cans modeled with hand-illustrated packaging artwork.',
      highlights: [
        'Custom packaging vector labels with typography and character mascots',
        'Cel-shaded ink outline effect using inverted hull mesh pass',
        'Lightweight prop collection ideal for urban environment dressing'
      ],
      software: ['Autodesk Maya', 'Adobe Illustrator', 'Substance 3D Painter'],
      views: [
        { label: 'Beverage Cartons Showcase', src: 'assets/images/models/prop_cel_cartons.jpg' },
        { label: 'Props Sheet', src: 'assets/images/web/page_15.jpg' }
      ]
    },
    {
      id: 'sculpt-hand-ice',
      category: 'weapons',
      title: 'Frozen Monster Claw Diorama',
      spec: 'Digital Sculpt • Ice & Claws',
      thumb: 'assets/images/models/sculpt_hand_ice.jpg',
      stageClass: 'stage-contain stage-dark',
      desc: 'Sculpted demonic beast hand encased in glacial ice crystals, featuring sharp curved talons and frozen skin details.',
      highlights: [
        'Hard-edge crystalline facets sculpted alongside organic tendon tension',
        'Translucent ice shader with interior light refraction',
        'Miniature diorama presentation'
      ],
      software: ['Pixologic ZBrush', 'Substance 3D Painter'],
      views: [
        { label: 'Frozen Claw Sculpt', src: 'assets/images/models/sculpt_hand_ice.jpg' }
      ]
    },
    {
      id: 'prop-donut-sweets',
      category: 'weapons',
      title: 'Stylized Glazed Donuts & Sweets',
      spec: 'Food & Candy Props • We Are Chouri',
      thumb: 'assets/images/models/prop_donut.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Mouth-watering collection of pastries: glazed strawberry donuts, chocolate icing twists, candy spheres, and fresh berries.',
      highlights: [
        'Glossy sugar glaze roughness maps with subsurface scattering',
        'Colorful palette designed for playful puzzle reward items',
        'Part of the 15-prop Fantasy Sweets collection'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine'],
      views: [
        { label: 'Glazed Donut Model', src: 'assets/images/models/prop_donut.jpg' },
        { label: 'Fresh Strawberry Model', src: 'assets/images/models/prop_strawberry.jpg' },
        { label: '15 Fantasy Props Sheet', src: 'assets/images/web/page_04.jpg' }
      ]
    },
    {
      id: 'prop-candle-mushroom',
      category: 'weapons',
      title: 'Bioluminescent Mushrooms & Candles',
      spec: 'Fantasy Props • Environment Dressing',
      thumb: 'assets/images/models/prop_candle.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Whimsical glowing fungal growths, melting wax candles, and candy-colored mystical orbs.',
      highlights: [
        'Translucent wax and fungal caps with interior glow shaders',
        'Varied sizes for scatter spawning across forest terrains',
        'Hand-painted gradient texturing'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine'],
      views: [
        { label: 'Candle Prop Model', src: 'assets/images/models/prop_candle.jpg' },
        { label: 'Mushroom Prop Model', src: 'assets/images/models/prop_mushroom.jpg' },
        { label: '15 Fantasy Props Sheet', src: 'assets/images/web/page_04.jpg' }
      ]
    },
    {
      id: 'prop-relic-beast',
      category: 'weapons',
      title: 'Ancient Monster Relic Artifact',
      spec: 'Relic Prop • Lore & Narrative',
      thumb: 'assets/images/models/prop_relic_beast.jpg',
      stageClass: 'stage-contain stage-chouri',
      desc: 'Mysterious gold-inlaid ceremonial beast figurine discovered in ancient dungeon ruins, radiating arcane power.',
      highlights: [
        'Polished antique gold inlays with patina corrosion',
        'Mythological creature silhouette',
        'Quest objective item in We Are Chouri'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine'],
      views: [
        { label: 'Relic Figurine Model', src: 'assets/images/models/prop_relic_beast.jpg' },
        { label: 'Ancient Relics Roster', src: 'assets/images/models/props_ancient_relics.jpg' },
        { label: '15 Fantasy Props Sheet', src: 'assets/images/web/page_04.jpg' }
      ]
    },

    // ---------------- SHADERS & MOTION (3 Items) ----------------
    {
      id: 'anim-chouri-cutscene',
      category: 'shaders',
      title: 'We Are Chouri 3D Cinematic Cutscene',
      spec: 'Cutscene Animation • Narrative Cinema',
      thumb: 'assets/images/crops/anim_chouri.jpg',
      stageClass: '',
      videoId: '4QMDKKF5QoQ',
      desc: 'Full 3D cinematic opening cutscene for We Are Chouri, featuring camera staging, comedic character acting, facial lip sync, and environment lighting.',
      highlights: [
        'Keyframed character acting with dynamic camera angles',
        'Seamless integration into Unity real-time cutscene timeline',
        'Live video showcase playable directly in modal viewer'
      ],
      software: ['Autodesk Maya', 'Unity Timeline', 'Premiere Pro'],
      links: [{ label: 'Watch on YouTube', url: 'https://youtu.be/4QMDKKF5QoQ' }],
      views: [
        { label: 'Full 3D Cinematic Video', videoId: '4QMDKKF5QoQ' },
        { label: 'Cutscene Keyframe Stills', src: 'assets/images/crops/anim_chouri.jpg' },
        { label: 'Cutscene Sheet', src: 'assets/images/web/page_08.jpg' }
      ]
    },
    {
      id: 'anim-creature-motion',
      category: 'shaders',
      title: 'Four-Armed Creature Run Cycle',
      spec: 'Creature Animation • Locomotion Cycle',
      thumb: 'assets/images/crops/anim_boss_run.jpg',
      stageClass: '',
      videoId: 'wsLVAP0mqXw',
      desc: 'High-energy charging run cycle for the Four-Armed Mutant Boss, balancing heavy torso weight with aggressive alternating arm swings.',
      highlights: [
        'Weight shift and follow-through animated across 4 arms and 2 legs',
        'Seamless looping locomotion ready for game engine blend trees',
        'Live gameplay motion breakdown video'
      ],
      software: ['Autodesk Maya', 'Unity Engine'],
      links: [{ label: 'Watch on YouTube', url: 'https://www.youtube.com/watch?v=wsLVAP0mqXw' }],
      views: [
        { label: 'Run Cycle Video', videoId: 'wsLVAP0mqXw' },
        { label: 'Motion Keyframe Stills', src: 'assets/images/crops/anim_boss_run.jpg' },
        { label: 'Animation Sheet', src: 'assets/images/web/page_08.jpg' }
      ]
    },
    {
      id: 'shader-fresnel-ducks',
      category: 'shaders',
      title: 'Wireframe, Fresnel & Emissive Shaders',
      spec: 'Custom Shaders • Unity Shader Graph',
      thumb: 'assets/images/models/shader_fresnel_ducks.jpg',
      stageClass: 'stage-contain stage-brown',
      desc: 'Suite of custom real-time shaders including rim-lit Fresnel glow, procedural wireframe contour outlines, and glass refraction.',
      highlights: [
        'Node-based shader graph workflows in Unity Universal Render Pipeline (URP)',
        'Controllable rim color, falloff exponent, and pulse speed parameters',
        'Refractive translucent glass material with chromatic dispersion'
      ],
      software: ['Unity Shader Graph', 'HLSL / C#', 'Autodesk Maya'],
      views: [
        { label: 'Fresnel & Wireframe Showcase', src: 'assets/images/models/shader_fresnel_ducks.jpg' },
        { label: 'Glass Sphere Refraction', src: 'assets/images/models/shader_glass_sphere.jpg' },
        { label: 'Shader Tech Sheet', src: 'assets/images/web/page_16.jpg' }
      ]
    },

    // ---------------- CONCEPT & 2D (3 Items) ----------------
    {
      id: 'game-oxie-death',
      category: 'art2d',
      title: 'OXIE DEATH (OxieRun) — Game Jam Art',
      spec: 'Key Art & GDD • 48H Game Jam',
      thumb: 'assets/images/crops/oxie_death_banner.jpg',
      stageClass: '',
      desc: 'Key visual astronaut artwork, title typography, 2D sprite art, and Game Design Document created under the 48-hour Deadline Game Jam.',
      highlights: [
        'High-resolution digital illustration with vibrant neon cosmos palette',
        'Complete Game Design Document (GDD) detailing gameplay loops and hazards',
        'Created rapidly within a strict 48-hour competitive sprint'
      ],
      software: ['Photoshop', 'Game Design', '2D Digital Art'],
      views: [
        { label: 'Title Banner', src: 'assets/images/crops/oxie_death_banner.jpg' },
        { label: 'Astronaut Key Visual', src: 'assets/images/crops/oxie_death_keyart.jpg' }
      ]
    },
    {
      id: 'art2d-horror-ui',
      category: 'art2d',
      title: 'Horror UI Interface & HUD Layouts',
      spec: 'UI/UX Design • Graphic Design',
      thumb: 'assets/images/crops/horror_hud.jpg',
      stageClass: '',
      desc: 'Atmospheric user interface layouts, inventory screens, health monitors, and main menu systems designed for survival horror games.',
      highlights: [
        'Minimalist, high-contrast HUD maintaining immersion during horror encounters',
        'Distressed typography, grunge textures, and chromatic aberration effects',
        'Mobile and desktop responsive game UI wireframes'
      ],
      software: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma'],
      views: [
        { label: 'Horror Game HUD', src: 'assets/images/crops/horror_hud.jpg' },
        { label: 'Main Menu Layout', src: 'assets/images/crops/horror_menu.jpg' },
        { label: 'Game UI Sheet', src: 'assets/images/web/page_18.jpg' },
        { label: 'UI Components Sheet', src: 'assets/images/web/page_20.jpg' }
      ]
    },
    {
      id: 'art2d-illustrations',
      category: 'art2d',
      title: 'Stylized Character Concepts & Art',
      spec: 'Digital Illustration • Concept Art',
      thumb: 'assets/images/crops/noodle_art.jpg',
      stageClass: '',
      desc: 'Collection of 2D character concept sketches, vector portraits, and whimsical digital food illustrations.',
      highlights: [
        'Expressive character silhouettes serving as foundation for 3D modeling',
        'Vibrant color palette and dynamic cel-shaded brushwork',
        'Portfolio pages 21-24 visual development gallery'
      ],
      software: ['Adobe Photoshop', 'Procreate', 'Adobe Illustrator'],
      views: [
        { label: 'Whimsical Food Illustration', src: 'assets/images/crops/noodle_art.jpg' },
        { label: 'Character Sheet 21', src: 'assets/images/web/page_21.jpg' },
        { label: 'Character Sheet 22', src: 'assets/images/web/page_22.jpg' },
        { label: 'Vector Art Sheet 23', src: 'assets/images/web/page_23.jpg' },
        { label: 'Illustration Sheet 24', src: 'assets/images/web/page_24.jpg' }
      ]
    }
  ];

  // ==========================================================================
  // 2. GAME PROJECTS DATABASE (6 Interactive Games)
  // ==========================================================================
  const GAMES_DATA = {
    'game-we-are-chouri': {
      category: 'GAME PRODUCTION',
      title: 'We Are Chouri — 2-Player Co-op Adventure',
      desc: '2-Player split-screen puzzle action adventure. Solely responsible for 3D character modeling (Guidi & Zeppe), enemy creatures, fantasy shrine environments, and in-game 3D cutscenes.',
      highlights: [
        'Modeled, rigged, and animated playable heroes Guidi & Zeppe',
        'Built Japanese mountain shrine environments, Torii gates, and caverns',
        'Created 15 collectible fantasy sweets & ancient relic props',
        'Directed and animated full 3D cinematic opening cutscene'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine', 'Git / GitHub'],
      views: [
        { label: 'Character Lineup', src: 'assets/images/crops/chouri_characters.jpg' },
        { label: 'Cutscene Animation Video', videoId: '4QMDKKF5QoQ' },
        { label: 'Torii Shrine Environment', src: 'assets/images/crops/chouri_shrine.jpg' },
        { label: 'Hanging Bridge Gameplay', src: 'assets/images/crops/chouri_bridge.jpg' },
        { label: 'Character Sheet', src: 'assets/images/web/page_02.jpg' }
      ]
    },
    'game-wingbeat': {
      category: 'GAME PRODUCTION',
      title: 'Wingbeat — Stylized 3D Party Simulation',
      desc: 'Vibrant party simulation game set across whimsical floating islands. Modeled the centerpiece Kraken & Tiki Island diorama, twisted fantasy foliage, and interactive props.',
      highlights: [
        'Modeled the stylized tropical island with giant magenta Kraken tentacles',
        'Created modular Tiki totems, docks, and glowing crystal props',
        'Crafted stylized twisted fantasy trees with volumetric cloud foliage',
        'Fully playable on itch.io'
      ],
      software: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine'],
      links: [{ label: 'Play Wingbeat on itch.io', url: 'https://newskung.itch.io/wingbeat' }],
      views: [
        { label: 'Kraken & Tiki Island Diorama', src: 'assets/images/models/env_kraken_island.jpg' },
        { label: 'Stylized Fantasy Trees', src: 'assets/images/models/env_fantasy_trees.jpg' },
        { label: 'Island Overview Sheet', src: 'assets/images/web/page_13.jpg' }
      ]
    },
    'game-oxie-death': {
      category: '48-HOUR GAME JAM',
      title: 'OXIE DEATH (OxieRun) — Game Jam Project',
      desc: 'Fast-paced action runner developed during the 48-Hour Deadline Game Jam. Illustrated astronaut key visual, title branding, and designed core gameplay loops.',
      highlights: [
        'High-resolution astronaut character key visual with cosmic nebula lighting',
        'Hand-drawn title banner typography and branding identity',
        'Structured Game Design Document (GDD) with obstacle mechanics',
        'Completed under strict 48-hour competitive game jam deadline'
      ],
      software: ['Digital Painting', 'Adobe Photoshop', 'Game Design'],
      views: [
        { label: 'Title Banner', src: 'assets/images/crops/oxie_death_banner.jpg' },
        { label: 'Astronaut Key Visual', src: 'assets/images/crops/oxie_death_keyart.jpg' }
      ]
    },
    'game-no-more-rat': {
      category: 'ROBLOX GAME PRODUCTION',
      title: 'No More Rat : Down The Drain',
      desc: 'Atmospheric subterranean rodent dungeon crawler live on Roblox. Designed 6 unique mutant rat bosses, sewer dungeons, combat rigs, and weapon sets.',
      highlights: [
        'Created 6 mutant boss monsters (Four-Armed, Dark Demon, Spiky Beast, etc.)',
        'Rigged and animated heavy combat attacks and quadruped locomotion',
        'Modeled modular sewer pipes, tunnels, and detective trenchcoat hero',
        'Live title actively playable on Roblox platform'
      ],
      software: ['Blender', 'Substance 3D Painter', 'Roblox Studio'],
      links: [{ label: 'Play on Roblox', url: 'https://www.roblox.com/games/79475326799719/No-More-Rat' }],
      views: [
        { label: 'Dungeon Boss Showcase', src: 'assets/images/crops/roblox_keyart.jpg' },
        { label: 'Four-Armed Run Cycle', videoId: 'wsLVAP0mqXw' },
        { label: 'Creature Roster Sheet', src: 'assets/images/web/page_07.jpg' },
        { label: 'Gameplay Screenshot', src: 'assets/images/crops/roblox_gameplay.jpg' }
      ]
    },
    'game-juukie': {
      category: 'GAME PRODUCTION',
      title: 'Juukie!! The Mouse: Adventures',
      desc: 'Dynamic 3D endless runner game. Modeled low-poly stage modules, collectible cheese props, animated player character, and obstacle hazards in Unity.',
      highlights: [
        'Low-poly stylized environment tracks optimized for high frame rates',
        'Collectible cheese items and animated environmental obstacles',
        'Open source repository available on GitHub'
      ],
      software: ['Unity Engine', 'Autodesk Maya', 'C# Scripting'],
      links: [{ label: 'View GitHub Repository', url: 'https://github.com/aiyoyooo/EndlessRun_Project' }],
      views: [
        { label: 'Gameplay Showcase', src: 'assets/images/web/page_18.jpg' },
        { label: 'UI Layout Sheet', src: 'assets/images/crops/horror_hud.jpg' }
      ]
    },
    'game-dominion': {
      category: 'GAME PRODUCTION',
      title: 'Dominion’s War: The Card Game',
      desc: 'Tactical sci-fi card battler. Illustrated unit cards, designed battlefield game board layout, and crafted responsive player HUD and menu interfaces.',
      highlights: [
        'Sci-fi military unit card artwork with distinct rarity borders',
        'Tactical grid board with deployable combat lanes',
        'Intuitive card inspection and mana cost UI elements'
      ],
      software: ['Adobe Photoshop', 'Figma', 'UI/UX Game Design'],
      views: [
        { label: 'Card Game Board Layout', src: 'assets/images/crops/dominion_cardgame.jpg' },
        { label: 'Horror UI Components', src: 'assets/images/crops/horror_menu.jpg' }
      ]
    }
  };

  // Combine databases for quick modal lookup
  const ALL_ENTRIES = {};
  GALLERY_ITEMS.forEach(item => { ALL_ENTRIES[item.id] = item; });
  Object.keys(GAMES_DATA).forEach(key => { ALL_ENTRIES[key] = GAMES_DATA[key]; });

  // ==========================================================================
  // 3. GALLERY RENDERING & FILTERING
  // ==========================================================================
  const galleryGrid = document.getElementById('pureGalleryGrid');
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  const sizeSwitchButtons = document.querySelectorAll('.mode-switch-btn');

  let currentFilter = 'all';

  function renderGallery() {
    if (!galleryGrid) return;

    const filtered = currentFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(item => item.category === currentFilter);

    galleryGrid.innerHTML = filtered.map(item => {
      const stageClass = item.stageClass ? ` ${item.stageClass}` : '';
      const tags = (item.software || []).slice(0, 2).map(tag => `<span class="gallery-card-tag">${tag}</span>`).join('');

      return `
        <article class="gallery-card" data-modal-id="${item.id}">
          <div class="gallery-card-media${stageClass}">
            <span class="gallery-card-badge">${item.category.toUpperCase()}</span>
            <img src="${item.thumb}" alt="${item.title}" class="gallery-card-img" loading="lazy" />
          </div>
          <div class="gallery-card-body">
            <div class="gallery-card-meta">
              <span>${item.spec || '3D Asset'}</span>
            </div>
            <h3 class="gallery-card-title">${item.title}</h3>
            <div class="gallery-card-tags">
              ${tags}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to cards
    galleryGrid.querySelectorAll('.gallery-card').forEach(card => {
      card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal-id');
        openModal(modalId);
      });
    });
  }

  // Filter Buttons
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
        }, 180);
      }
    });
  });

  // Size Switch (Grid vs Large)
  sizeSwitchButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeSwitchButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const size = btn.getAttribute('data-size');
      if (galleryGrid) {
        galleryGrid.classList.remove('mode-grid', 'mode-large');
        galleryGrid.classList.add(`mode-${size}`);
      }
    });
  });

  // ==========================================================================
  // 4. ARTSTATION-STYLE LIGHTBOX MODAL
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

  let currentModalIndex = 0;
  let activeEntryList = GALLERY_ITEMS;

  function openModal(id) {
    if (!artworkModal) return;

    // Determine if it's a gallery item or game
    const galleryIdx = GALLERY_ITEMS.findIndex(item => item.id === id);
    if (galleryIdx !== -1) {
      activeEntryList = GALLERY_ITEMS;
      currentModalIndex = galleryIdx;
    } else if (GAMES_DATA[id]) {
      // Find within games
      const gameKeys = Object.keys(GAMES_DATA);
      const gameIdx = gameKeys.indexOf(id);
      activeEntryList = gameKeys.map(k => ({ id: k, ...GAMES_DATA[k] }));
      currentModalIndex = gameIdx !== -1 ? gameIdx : 0;
    } else {
      return;
    }

    displayModalContent(activeEntryList[currentModalIndex]);
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

    if (modalCategory) modalCategory.textContent = (entry.category || 'Artwork').toUpperCase();
    if (modalTitle) modalTitle.textContent = entry.title || '';
    if (modalDescription) modalDescription.textContent = entry.desc || '';

    // Highlights
    if (modalHighlights) {
      const items = entry.highlights || [];
      modalHighlights.innerHTML = items.map(text => `<li>${text}</li>`).join('');
    }

    // Software Tags
    if (modalSoftware) {
      const software = entry.software || [];
      modalSoftware.innerHTML = software.map(s => `<span class="as-tag-pill">${s}</span>`).join('');
    }

    // External Link
    if (modalLinks) {
      if (entry.links && entry.links.length > 0) {
        modalLinks.innerHTML = entry.links.map(link => `
          <a href="${link.url}" target="_blank" rel="noopener" class="as-btn-external">
            <span>${link.label}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        `).join('');
      } else {
        modalLinks.innerHTML = '';
      }
    }

    // Views & Stage
    const views = entry.views && entry.views.length > 0
      ? entry.views
      : [{ label: 'Main View', src: entry.thumb }];

    renderStageView(views[0]);

    if (modalThumbsStage) {
      if (views.length > 1) {
        modalThumbsStage.style.display = 'flex';
        modalThumbsStage.innerHTML = views.map((v, i) => {
          const imgSrc = v.src || entry.thumb;
          return `
            <button class="as-thumb-btn${i === 0 ? ' active' : ''}" data-view-idx="${i}" title="${v.label}">
              <img src="${imgSrc}" alt="${v.label}" />
            </button>
          `;
        }).join('');

        modalThumbsStage.querySelectorAll('.as-thumb-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            modalThumbsStage.querySelectorAll('.as-thumb-btn').forEach(b => b.classList.remove('active'));
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
      modalMediaStage.innerHTML = `
        <img src="${view.src}" alt="${view.label}" />
      `;
    }
  }

  // Modal navigation (prev/next)
  function nextModalItem() {
    currentModalIndex = (currentModalIndex + 1) % activeEntryList.length;
    displayModalContent(activeEntryList[currentModalIndex]);
  }

  function prevModalItem() {
    currentModalIndex = (currentModalIndex - 1 + activeEntryList.length) % activeEntryList.length;
    displayModalContent(activeEntryList[currentModalIndex]);
  }

  if (modalNextBtn) modalNextBtn.addEventListener('click', nextModalItem);
  if (modalPrevBtn) modalPrevBtn.addEventListener('click', prevModalItem);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // Keyboard navigation
  window.addEventListener('keydown', e => {
    if (!artworkModal || !artworkModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextModalItem();
    if (e.key === 'ArrowLeft') prevModalItem();
  });

  // Attach modal trigger to any static elements with [data-modal-id]
  document.querySelectorAll('[data-modal-id]').forEach(elem => {
    elem.addEventListener('click', e => {
      // Don't trigger if user clicked an external <a> link inside the card
      if (e.target.closest('a[href^="http"]')) return;
      const modalId = elem.getAttribute('data-modal-id');
      if (modalId) {
        e.preventDefault();
        openModal(modalId);
      }
    });
  });

  // ==========================================================================
  // 5. MINIMALIST HERO BACKGROUND CAROUSEL
  // ==========================================================================
  const heroSlides = document.querySelectorAll('.hero-bg-media');
  const heroSlideLabel = document.getElementById('hero-slide-label');
  const heroSlideCurrent = document.getElementById('heroSlideCurrent');
  const heroDots = document.querySelectorAll('.hero-dot');
  const heroPrevBtn = document.getElementById('heroPrevBtn');
  const heroNextBtn = document.getElementById('heroNextBtn');

  const SLIDE_LABELS = [
    'We Are Chouri • 3D Characters',
    'No More Rat • Boss Monsters',
    'Wingbeat • Kraken Island Diorama',
    'OXIE DEATH • 48H Game Jam Art'
  ];

  let currentHeroSlide = 0;
  let heroTimer = null;

  function showHeroSlide(index) {
    if (!heroSlides.length) return;
    currentHeroSlide = (index + heroSlides.length) % heroSlides.length;

    heroSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentHeroSlide);
    });

    heroDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentHeroSlide);
    });

    if (heroSlideCurrent) {
      heroSlideCurrent.textContent = String(currentHeroSlide + 1).padStart(2, '0');
    }
    if (heroSlideLabel && SLIDE_LABELS[currentHeroSlide]) {
      heroSlideLabel.textContent = SLIDE_LABELS[currentHeroSlide];
    }
  }

  function startHeroTimer() {
    stopHeroTimer();
    heroTimer = setInterval(() => {
      showHeroSlide(currentHeroSlide + 1);
    }, 5500);
  }

  function stopHeroTimer() {
    if (heroTimer) clearInterval(heroTimer);
  }

  if (heroNextBtn) {
    heroNextBtn.addEventListener('click', () => {
      showHeroSlide(currentHeroSlide + 1);
      startHeroTimer();
    });
  }
  if (heroPrevBtn) {
    heroPrevBtn.addEventListener('click', () => {
      showHeroSlide(currentHeroSlide - 1);
      startHeroTimer();
    });
  }
  heroDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showHeroSlide(i);
      startHeroTimer();
    });
  });

  startHeroTimer();

  // ==========================================================================
  // 6. SCROLL PROGRESS RIBBON & NAVBAR SCROLL BEHAVIOR
  // ==========================================================================
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${scrollPercent}%`;
    }

    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 40);
    }

    // Active nav link highlight
    let currentSection = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${currentSection}`);
    });
  }, { passive: true });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // ==========================================================================
  // 7. SCROLL REVEAL OBSERVER & PAGE LOAD CURTAIN
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // Fade out page load curtain
  window.addEventListener('load', () => {
    const curtain = document.getElementById('pageTransitionCurtain');
    if (curtain) curtain.classList.add('loaded');
  });

  // Initial gallery render
  renderGallery();

})();
