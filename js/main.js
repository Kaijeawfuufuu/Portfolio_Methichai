/* ==========================================================================
   AI METHICHAI — PORTFOLIO CONTROLLER & VERIFIED ARTWORK COLLECTION
   All items verified page-by-page from Portfolio.pdf (Pages 2–24)
   ========================================================================== */

(() => {
  'use strict';

  const ARTWORKS = [
    // ---------------- CHARACTERS & CREATURES ----------------
    {
      id: 'chouri-characters',
      featured: true,
      category: 'characters',
      badge: '3D CHARACTER',
      year: 'WE ARE CHOURI',
      spec: 'CHARACTER MODEL',
      title: 'Guidi & Zeppe — Player Characters',
      desc: 'Main playable duo designed and modeled for the 3D Unity adventure We Are Chouri. Includes 2D color palette explorations and full front, side, and back 3D turnarounds.',
      thumb: 'assets/images/web/page_02.jpg',
      fullSheet: 'assets/images/page_02.png',
      tags: ['Character Modeling', 'Blender / Maya', 'Substance 3D Painter', 'Unity'],
      views: [
        { label: 'Complete Presentation Sheet', src: 'assets/images/web/page_02.jpg' },
        { label: '3D Turnaround Render', src: 'assets/images/crops/chouri_characters.jpg' },
        { label: 'Monsters & Lanterns', src: 'assets/images/web/page_03.jpg' },
        { label: 'Fantasy Props (15)', src: 'assets/images/web/page_04.jpg' },
        { label: 'In-Engine Unity World', src: 'assets/images/web/page_05.jpg' }
      ]
    },
    {
      id: 'roblox-bosses',
      featured: false,
      category: 'characters',
      badge: 'BOSS & CREATURES',
      year: 'ROBLOX GAME',
      spec: '6 CREATURE MODELS',
      title: 'No More Rat! — Boss & Enemy Lineup',
      desc: 'Six original boss and enemy creature 3D models created for the Roblox hack-and-slash game [Updated] No More Rat!, featuring mutant brutes, a four-armed boss, venomous beast, mounted spear rider, and dark rat demon.',
      thumb: 'assets/images/web/page_07.jpg',
      fullSheet: 'assets/images/page_07.png',
      tags: ['Creature Modeling', 'ZBrush', 'Blender', 'Roblox Studio'],
      views: [
        { label: '6 Boss Lineup Sheet', src: 'assets/images/web/page_07.jpg' },
        { label: 'Four-Arm Rat', src: 'Project/Pic/3D_Art/Four_Arm_Rat.png' },
        { label: 'Dark Rat Demon', src: 'Project/Pic/3D_Art/Rat_demon.png' },
        { label: 'Mutant Green Rat', src: 'Project/Pic/3D_Art/Green_Rat.png' },
        { label: 'Game Overview Sheet', src: 'assets/images/web/page_06.jpg' }
      ]
    },
    {
      id: 'roblox-game',
      featured: false,
      category: 'characters',
      badge: 'ROBLOX CHARACTER',
      year: 'ROBLOX GAME',
      spec: 'HERO & BOSS ART',
      title: 'No More Rat! — Exterminator Hamster & Key Art',
      desc: 'Playable trenchcoat hamster character model, combat key art, and in-game winter stage showcase for [Updated] No More Rat! by MidnightParadise on Roblox.',
      thumb: 'assets/images/web/page_06.jpg',
      fullSheet: 'assets/images/page_06.png',
      tags: ['3D Character', 'Roblox Studio', 'Key Art'],
      externalUrl: 'https://www.roblox.com/users/2594844006/profile',
      externalLabel: 'Roblox Profile (Dngo_Kiwrn)',
      views: [
        { label: 'Full Game Sheet', src: 'assets/images/web/page_06.jpg' },
        { label: 'Combat Key Art', src: 'assets/images/crops/roblox_keyart.jpg' },
        { label: 'In-Game Stage', src: 'assets/images/crops/roblox_gameplay.jpg' }
      ]
    },
    {
      id: 'chouri-monsters',
      featured: false,
      category: 'characters',
      badge: 'MONSTERS & UVs',
      year: 'WE ARE CHOURI',
      spec: 'UV & TEXTURING',
      title: 'We Are Chouri — Monsters & Tiki Lanterns',
      desc: 'Plush-inspired monster enemies, horned shrine guardian with 1001 UDIM UV unwrap, and modular tiki lanterns showing wireframe topology, UV checker, and glowing emissive variants.',
      thumb: 'assets/images/web/page_03.jpg',
      fullSheet: 'assets/images/page_03.png',
      tags: ['Monster Modeling', 'UV Unwrapping', 'Substance 3D Painter'],
      views: [
        { label: 'Full UV & Lantern Sheet', src: 'assets/images/web/page_03.jpg' },
        { label: 'Monster Models Render', src: 'assets/images/crops/chouri_monsters.jpg' }
      ]
    },
    {
      id: 'zbrush-sculpts',
      featured: true,
      category: 'characters',
      badge: 'DIGITAL SCULPT',
      year: 'SCULPT STUDY',
      spec: 'ZBRUSH • HIGH POLY',
      title: 'Stylized Figure & Warrior Bust Sculpts',
      desc: 'High-poly ZBrush character and anatomy sculpting showcase featuring a stylized metallic stage figure flanked by expressive elf-eared warrior busts across four material studies.',
      thumb: 'assets/images/web/page_17.jpg',
      fullSheet: 'assets/images/page_17.png',
      tags: ['ZBrush', 'Digital Sculpting', 'Character Anatomy', 'Materials'],
      views: [
        { label: 'High-Poly Sculpt Presentation Sheet', src: 'assets/images/web/page_17.jpg' }
      ]
    },

    // ---------------- ENVIRONMENTS & PROPS ----------------
    {
      id: 'alley-lighting',
      featured: true,
      category: 'environments',
      badge: 'ENVIRONMENT',
      year: 'LIGHTING STUDY',
      spec: 'SCENE & LIGHTING',
      title: 'Japanese Sunset Alley & Interior Lighting',
      desc: 'Atmospheric 3D environment lighting studies exploring golden-hour bounce light through a lantern-lined Japanese alleyway alongside a warm modern living room interior.',
      thumb: 'assets/images/web/page_10.jpg',
      fullSheet: 'assets/images/page_10.png',
      tags: ['3D Environment', 'Lighting & Rendering', 'Blender / Maya'],
      views: [
        { label: 'Full 4-Scene Lighting Sheet', src: 'assets/images/web/page_10.jpg' },
        { label: 'Japanese Sunset Alley Render', src: 'assets/images/crops/alley_sunset.jpg' },
        { label: 'Modern Living Room Interior', src: 'assets/images/crops/modern_interior.jpg' },
        { label: 'Cel-Shaded Creature', src: 'assets/images/crops/cel_creature.jpg' },
        { label: 'Sunset Fisheye Street Render', src: 'assets/images/crops/street_character.jpg' }
      ]
    },
    {
      id: 'isometric-studio',
      featured: true,
      category: 'environments',
      badge: 'ISOMETRIC ROOM',
      year: '3D DIORAMA',
      spec: 'INTERIOR & PROPS',
      title: 'Isometric Artist Studio Diorama',
      desc: 'Cozy nocturnal artist bedroom diorama packed with framed paintings, easels, drafting desk sketches, miniature figures, paint jars, and cool moonlight streaming through frosted windows.',
      thumb: 'assets/images/web/page_11.jpg',
      fullSheet: 'assets/images/page_11.png',
      tags: ['3D Environment', 'Isometric Diorama', 'Lighting', 'Props'],
      views: [
        { label: 'Full Studio & Jester Sheet', src: 'assets/images/web/page_11.jpg' },
        { label: 'Isometric Studio 3D Render', src: 'Project/Pic/Intillia/Room_Team_Kokocrunch.jpg' }
      ]
    },
    {
      id: 'chouri-world',
      featured: false,
      category: 'environments',
      badge: 'UNITY WORLD',
      year: 'WE ARE CHOURI',
      spec: 'IN-ENGINE LEVEL',
      title: 'We Are Chouri — In-Engine Unity Environments',
      desc: 'Real-time Unity environment assembly showcasing waffle bridges, glowing tiki totems, monster shrines, and bioluminescent crystal caverns.',
      thumb: 'assets/images/web/page_05.jpg',
      fullSheet: 'assets/images/page_05.png',
      tags: ['Unity Engine', 'Level Art', 'Environment Lighting'],
      views: [
        { label: 'Full 4-Shot Environment Sheet', src: 'assets/images/web/page_05.jpg' },
        { label: 'Totem Shrine Render', src: 'assets/images/crops/chouri_shrine.jpg' },
        { label: 'Waffle Bridge Render', src: 'assets/images/crops/chouri_bridge.jpg' },
        { label: 'Crystal Cavern Render', src: 'assets/images/crops/chouri_cavern.jpg' }
      ]
    },
    {
      id: 'render-scenes-props',
      featured: false,
      category: 'environments',
      badge: 'SCENES & MODELS',
      year: '3D PROJECTS',
      spec: 'ENVIRONMENT & PROPS',
      title: 'Neon Boss Hall, Pokémon Center & Banana House',
      desc: 'Collection of stylized architectural models and lit boss arenas: three material passes of a Pokémon Center (clean, weathered, horror), wireframe Banana House, sculpted hand on ice pedestal, and dramatic Unity boss scenes.',
      thumb: 'assets/images/web/page_09.jpg',
      fullSheet: 'assets/images/page_09.png',
      tags: ['3D Modeling', 'Texturing', 'Scene Lighting', 'Unity'],
      views: [
        { label: 'Full 3D Projects Sheet', src: 'assets/images/web/page_09.jpg' },
        { label: 'Neon Shrine Scene', src: 'Project/Pic/Unity/Rat_scene1.png' },
        { label: 'Boss Arena Battle', src: 'Project/Pic/Unity/Rat_scene2.png' },
        { label: 'Pokémon Center (Dark)', src: 'Project/Pic/Intillia/Pokemon_Center_Dark.png' },
        { label: 'Banana House', src: 'Project/Pic/Intillia/Banana_House.png' },
        { label: 'Ice Pedestal Hand', src: 'Project/Pic/3D_Art/Hand.png' }
      ]
    },
    {
      id: 'tiki-island',
      featured: false,
      category: 'environments',
      badge: 'LOW-POLY DIORAMA',
      year: 'STYLIZED SCENE',
      spec: 'LOW POLY',
      title: 'Stylized Kraken & Tiki Island Diorama',
      desc: 'Vibrant low-poly island diorama surrounded by giant purple tentacles, cyan tiki statues, wooden docks, barrels, and glowing crystals.',
      thumb: 'assets/images/web/page_13.jpg',
      fullSheet: 'assets/images/page_13.png',
      tags: ['Low-Poly Art', 'Blender / Maya', 'Stylized Environment'],
      views: [
        { label: 'Full Island Diorama Sheet', src: 'assets/images/web/page_13.jpg' }
      ]
    },
    {
      id: 'weapon-models',
      featured: false,
      category: 'environments',
      badge: 'HARD SURFACE',
      year: '3D WEAPONS',
      spec: 'PBR TEXTURING',
      title: 'M16 & AK-47 Assault Rifle Models',
      desc: 'Hard-surface 3D firearm models of an M16A1 and AK-47 featuring worn metal edge wear, polymer furniture, and wood-grain stock textures.',
      thumb: 'assets/images/web/page_12.jpg',
      fullSheet: 'assets/images/page_12.png',
      tags: ['Hard-Surface Modeling', 'Substance 3D Painter', 'Game Weapons'],
      views: [
        { label: 'Full Weapons Sheet', src: 'assets/images/web/page_12.jpg' }
      ]
    },
    {
      id: 'chouri-props',
      featured: false,
      category: 'environments',
      badge: 'GAME PROPS',
      year: 'WE ARE CHOURI',
      spec: '15 ASSET PACK',
      title: 'Stylized Candy & Fantasy Props Collection',
      desc: 'Fifteen game-ready stylized props created for We Are Chouri, including macarons, waffles, candy canes, frosted donuts, glowing candles, mushrooms, and surreal organic artifacts.',
      thumb: 'assets/images/web/page_04.jpg',
      fullSheet: 'assets/images/page_04.png',
      tags: ['Prop Modeling', 'Stylized Texturing', 'Game Assets'],
      views: [
        { label: 'Full 15 Props Sheet', src: 'assets/images/web/page_04.jpg' }
      ]
    },
    {
      id: 'fantasy-trees',
      featured: false,
      category: 'environments',
      badge: 'FOLIAGE ASSETS',
      year: 'STYLIZED PROPS',
      spec: '3 COLORWAYS',
      title: 'Stylized Twisted Fantasy Trees',
      desc: 'Sculptural fantasy tree assets with spiraled patterned trunks and layered canopy silhouettes in three vibrant color palettes.',
      thumb: 'assets/images/web/page_14.jpg',
      fullSheet: 'assets/images/page_14.png',
      tags: ['Stylized Foliage', '3D Prop Art', 'Color Variants'],
      views: [
        { label: 'Full Tree Variants Sheet', src: 'assets/images/web/page_14.jpg' }
      ]
    },
    {
      id: 'carton-props',
      featured: false,
      category: 'environments',
      badge: 'NPR / CEL PROP',
      year: 'STYLIZED PROPS',
      spec: 'TOON OUTLINE',
      title: 'Hand-Drawn Cel-Shaded Carton Props',
      desc: 'Pop-art 3D carton props combining bold ink outlines, floating graphic accents, and vibrant gradient fills across cyan, sunset, and violet variations.',
      thumb: 'assets/images/web/page_15.jpg',
      fullSheet: 'assets/images/page_15.png',
      tags: ['NPR / Toon Shading', '2D/3D Hybrid', 'Blender'],
      views: [
        { label: 'Full Carton Props Sheet', src: 'assets/images/web/page_15.jpg' }
      ]
    },

    // ---------------- ANIMATION, SHADERS & TECH ART ----------------
    {
      id: 'anim-creature-motion',
      featured: true,
      category: 'tech',
      badge: '3D ANIMATION',
      year: 'ANIMATION REEL',
      spec: 'CHARACTER LOCOMOTION',
      title: 'Four-Arm Character Run Cycle & Motion Animation',
      desc: 'Multi-limbed character locomotion animation reel, weight shifts, and procedural motion trail staging.',
      thumb: 'assets/images/web/page_08.jpg',
      videoId: 'wsLVAP0mqXw',
      externalUrl: 'https://www.youtube.com/watch?v=wsLVAP0mqXw',
      externalLabel: 'Watch on YouTube',
      fullSheet: 'assets/images/page_08.png',
      tags: ['3D Animation', 'Character Rigging', 'Autodesk Maya', 'Locomotion'],
      views: [
        { label: 'Play Animation Video', videoId: 'wsLVAP0mqXw', thumb: 'assets/images/crops/anim_boss_run.jpg' },
        { label: 'Full Animation Reel Sheet', src: 'assets/images/web/page_08.jpg' }
      ]
    },
    {
      id: 'anim-chouri',
      featured: true,
      category: 'tech',
      badge: 'UNITY CUTSCENE',
      year: 'WE ARE CHOURI',
      spec: 'CINEMATIC',
      title: 'We Are Chouri — Forest Awakening Cutscene',
      desc: 'In-engine 3D cutscene animation created in Unity for We Are Chouri, staging character acting, camera framing, and atmospheric forest lighting.',
      thumb: 'assets/images/web/page_08.jpg',
      videoId: '4QMDKKF5QoQ',
      externalUrl: 'https://youtu.be/4QMDKKF5QoQ',
      externalLabel: 'Watch on YouTube',
      fullSheet: 'assets/images/page_08.png',
      tags: ['Unity Timeline', '3D Cutscene', 'Camera Staging'],
      views: [
        { label: 'Play Cutscene Video', videoId: '4QMDKKF5QoQ', thumb: 'assets/images/crops/anim_chouri.jpg' },
        { label: 'Full Animation Reel Sheet', src: 'assets/images/web/page_08.jpg' }
      ]
    },
    {
      id: 'shader-studies',
      featured: false,
      category: 'tech',
      badge: 'SHADERS & MATERIALS',
      year: 'TECH ART',
      spec: 'EMISSIVE • GLASS',
      title: 'Procedural Holographic, Contour & Glass Shaders',
      desc: 'Shader and material look-dev experiments testing soft emissive glow, topographic contour wireframe lines, Fresnel X-ray translucency, and refractive glass.',
      thumb: 'assets/images/web/page_16.jpg',
      fullSheet: 'assets/images/page_16.png',
      tags: ['Shader Look-Dev', 'Fresnel / Refraction', 'Blender / Unity'],
      views: [
        { label: 'Full Shader Sheet', src: 'assets/images/web/page_16.jpg' },
        { label: 'Shader Strip Detail', src: 'assets/images/crops/shader_ducks.jpg' }
      ]
    },

    // ---------------- 2D ART, GAMES & UI ----------------
    {
      id: 'horror-ui',
      featured: false,
      category: '2d',
      badge: 'PC GAME UX/UI',
      year: '2D HORROR SHOT',
      spec: 'HUD & MENUS',
      title: 'TiTLE’s Nightmare — 2D Horror PC Game UX/UI',
      desc: 'Complete UX/UI visual design for a 2D first-person horror shooter: app icon, eerie hallway title screen, revolver combat HUD, and audio/system configuration menus.',
      thumb: 'assets/images/web/page_18.jpg',
      fullSheet: 'assets/images/page_18.png',
      tags: ['Game UX/UI', 'HUD Design', 'Figma', 'Photoshop'],
      views: [
        { label: 'Full UX/UI Sheet', src: 'assets/images/web/page_18.jpg' },
        { label: 'Combat HUD View', src: 'assets/images/crops/horror_hud.jpg' },
        { label: 'Title Screen UI', src: 'assets/images/crops/horror_menu.jpg' }
      ]
    },
    {
      id: 'mobile-games',
      featured: false,
      category: '2d',
      badge: '2D GAMES & TILES',
      year: 'MOBILE & UNITY 2D',
      spec: 'SPRITES • TILEMAP',
      title: 'Juukie!!, Dominion’s War & Seamless 2D Tilesets',
      desc: 'Designed and developed 2D mobile games (Juukie!! The Mouse : Adventures and Dominion’s War : The Card Game) alongside original 2D character sprites and seamless Unity cave Tile Palettes.',
      thumb: 'assets/images/web/page_19.jpg',
      fullSheet: 'assets/images/page_19.png',
      tags: ['2D Game Art', 'Unity Tilemap', 'Mobile Game Design'],
      views: [
        { label: 'Full Mobile Games Sheet', src: 'assets/images/web/page_19.jpg' },
        { label: 'Characters & Tileset Sheet', src: 'assets/images/web/page_20.jpg' },
        { label: 'Juukie Gameplay View', src: 'Project/Pic/Unity/Juukie.png' },
        { label: 'Dominion Card Game View', src: 'assets/images/crops/dominion_cardgame.jpg' }
      ]
    },
    {
      id: 'oxie-death',
      featured: false,
      category: '2d',
      badge: 'GAME JAM 2026',
      year: 'GAME JAM',
      spec: '2.5D SURVIVAL EXPLORATION',
      title: 'OXIE DEATH (OxieRun) — Space Survival Extraction',
      desc: 'High-stakes survival exploration game created for the 48-Hour Space Exploration Game Jam. Manage critical depleting oxygen, evade deadly monstrosities, extract rare artifacts, and upgrade suit gear.',
      thumb: 'assets/images/games/oxie_death_title.png',
      fullSheet: 'assets/images/games/oxie_death_title.png',
      tags: ['Game Jam', '2.5D / 2D Art', 'Unity', 'Survival Mechanics'],
      views: [
        { label: 'Title Art & Poster', src: 'assets/images/games/oxie_death_title.png' },
        { label: 'Game Jam Overview', src: 'assets/images/games/oxie_death_banner.jpg' },
        { label: 'Key Art & Atmosphere', src: 'assets/images/crops/oxie_death_keyart.jpg' }
      ]
    },
    {
      id: 'wing-beat',
      featured: false,
      category: '2d',
      badge: 'ITCH.IO GAME',
      year: 'PC FIGHTING',
      spec: 'ACTION COMBAT',
      title: 'WingBeat — Fast-Paced PC Fighting Game',
      desc: 'Action-packed indie PC fighting game published on itch.io featuring responsive aerial maneuvers, impact visual effects, stylized character combat, and fast-paced competitive gameplay.',
      thumb: 'assets/images/games/wingbeat_cover.jpg',
      fullSheet: 'assets/images/games/wingbeat_cover.jpg',
      externalUrl: 'https://newskung.itch.io/wingbeat',
      externalLabel: 'Play on Itch.io',
      tags: ['Fighting Game', 'Unity', 'PC Game', 'Combat Mechanics'],
      views: [
        { label: 'Itch.io Cover Art', src: 'assets/images/games/wingbeat_cover.jpg' }
      ]
    },
    {
      id: 'noodle-art',
      featured: false,
      category: '2d',
      badge: '2D ILLUSTRATION',
      year: 'NOODLE ART',
      spec: 'LINE & COLOR',
      title: 'Panoramic Noodle Art Illustration',
      desc: 'Intricate widescreen doodle illustration contrasting vibrant psychedelic color rendering on the left with dense hand-inked linework on the right.',
      thumb: 'assets/images/web/page_21.jpg',
      fullSheet: 'assets/images/page_21.png',
      tags: ['Digital Illustration', 'Procreate', 'Line Art'],
      views: [
        { label: 'Full Noodle Art Sheet', src: 'assets/images/web/page_21.jpg' },
        { label: 'Panoramic Crop View', src: 'assets/images/crops/noodle_art.jpg' }
      ]
    },
    {
      id: '2d-portraits-collection',
      featured: false,
      category: '2d',
      badge: 'PORTRAITS & POSTERS',
      year: '2D DIGITAL ART',
      spec: 'VECTOR & PAINTING',
      title: 'Digital Portraits & Graphic Character Illustrations',
      desc: 'Selected 2D portrait paintings, high-contrast pop character posters, and Adobe Illustrator crosshatch/vector portrait studies.',
      thumb: 'assets/images/web/page_24.jpg',
      fullSheet: 'assets/images/page_24.png',
      tags: ['Adobe Illustrator', 'Photoshop', 'Procreate', 'Portraits'],
      views: [
        { label: 'Graphic Character Posters', src: 'assets/images/web/page_24.jpg' },
        { label: 'Digital Portrait Series', src: 'assets/images/web/page_23.jpg' },
        { label: 'Vector & Crosshatch Portraits', src: 'assets/images/crops/vector_portraits.jpg' }
      ]
    }
  ];

  // =========================================================================
  // 1. RENDER FEATURED 3D ARTWORK & ANIMATION CARDS (#featured-grid)
  // =========================================================================
  const featuredGrid = document.getElementById('featured-grid');
  const featuredItems = ARTWORKS.filter((item) => item.featured);

  function renderFeatured() {
    if (!featuredGrid) return;
    featuredGrid.innerHTML = featuredItems
      .map((item) => {
        const isVideo = Boolean(item.videoId);
        const actionIcon = isVideo
          ? `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>`
          : `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`;
        const ctaText = isVideo ? 'Watch Animation Breakdown' : 'Inspect Renders & Sheet';

        const tagsHtml = item.tags
          .slice(0, 3)
          .map((tag, idx) => `<span class="tag ${idx === 0 ? 'tag-category' : 'tag-tool'}">${tag}</span>`)
          .join('');

        return `
          <article class="Projects-item" data-open-id="${item.id}" tabindex="0" role="button" aria-label="${item.title}">
            <div class="Projects-image">
              <img src="${item.thumb}" alt="${item.title}" loading="lazy">
              <div class="artwork-type-badge">${item.badge}</div>
              <div class="Projects-overlay">
                <div class="artwork-play-btn">${actionIcon}</div>
                <span class="view-details">${isVideo ? 'Watch Reel' : 'View Breakdown'}</span>
              </div>
            </div>
            <div class="Projects-info">
              <div class="Projects-meta-top">
                <span class="Projects-year">${item.year}</span>
                <span class="artwork-spec-pill">${item.spec}</span>
              </div>
              <h3 class="Projects-title">${item.title}</h3>
              <p class="Projects-description">${item.desc}</p>
              <div class="Projects-tags">${tagsHtml}</div>
              <div class="artwork-card-footer">
                <span class="artwork-view-cta">${ctaText} <span class="cta-arrow">&rarr;</span></span>
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  }

  // =========================================================================
  // 2. RENDER ARTSTATION-STYLE PURE VISUAL GALLERY (#gallery-grid)
  // =========================================================================
  const galleryGrid = document.getElementById('gallery-grid');
  const filterButtons = Array.from(document.querySelectorAll('.gallery-filter-btn'));
  let activeGalleryFilter = 'all';

  function updateFilterLabels() {
    const counts = {
      all: ARTWORKS.length,
      characters: ARTWORKS.filter((a) => a.category === 'characters').length,
      environments: ARTWORKS.filter((a) => a.category === 'environments').length,
      tech: ARTWORKS.filter((a) => a.category === 'tech').length,
      '2d': ARTWORKS.filter((a) => a.category === '2d').length
    };
    const baseLabels = {
      all: 'ALL',
      characters: 'CHARACTERS & CREATURES',
      environments: 'ENVIRONMENTS & PROPS',
      tech: 'SHADERS & ANIMATION',
      '2d': '2D ART & UI'
    };
    filterButtons.forEach((btn) => {
      const key = btn.getAttribute('data-filter');
      if (baseLabels[key]) {
        btn.textContent = `${baseLabels[key]} (${counts[key]})`;
      }
    });
  }

  function getFilteredGalleryItems() {
    if (activeGalleryFilter === 'all') return ARTWORKS;
    return ARTWORKS.filter((item) => item.category === activeGalleryFilter);
  }

  function renderGallery() {
    if (!galleryGrid) return;
    const list = getFilteredGalleryItems();
    galleryGrid.innerHTML = list
      .map((item) => {
        const indicator = item.videoId
          ? '&#9654; VIDEO'
          : item.views && item.views.length > 1
            ? `${item.views.length} VIEWS`
            : '';

        return `
          <div class="pure-gallery-item" data-open-id="${item.id}" tabindex="0" role="button" aria-label="${item.title}">
            <img src="${item.thumb}" alt="${item.title}" loading="lazy">
            ${indicator ? `<span class="as-tile-indicator">${indicator}</span>` : ''}
            <div class="as-tile-caption">
              <span class="as-tile-cat">${item.badge}</span>
              <div class="as-tile-title">${item.title}</div>
            </div>
          </div>
        `;
      })
      .join('');
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeGalleryFilter = btn.getAttribute('data-filter') || 'all';
      renderGallery();
    });
  });

  // =========================================================================
  // 3. ARTSTATION SPLIT LIGHTBOX MODAL + MULTI-SHEET SWITCHER
  // =========================================================================
  const modal = document.getElementById('artwork-modal');
  const modalClose = document.getElementById('modal-close');
  const modalPrev = document.getElementById('modal-prev');
  const modalNext = document.getElementById('modal-next');
  const modalMedia = document.getElementById('modal-media');
  const modalThumbs = document.getElementById('modal-thumbs');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');
  const modalActions = document.getElementById('modal-actions');

  let currentModalList = ARTWORKS;
  let currentItemIndex = 0;

  function renderStageView(item, viewIndex) {
    const views = item.views && item.views.length > 0 ? item.views : [{ label: 'Render', src: item.thumb }];
    const activeView = views[viewIndex] || views[0];

    if (activeView.videoId) {
      modalMedia.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${activeView.videoId}?autoplay=1&rel=0"
          title="${item.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      `;
    } else {
      modalMedia.innerHTML = `<img src="${activeView.src}" alt="${item.title} — ${activeView.label}">`;
    }

    if (views.length > 1) {
      modalThumbs.innerHTML = views
        .map((v, idx) => {
          const previewSrc = v.thumb || v.src || item.thumb;
          return `
            <button type="button" class="as-thumb-btn ${idx === viewIndex ? 'active' : ''}" data-view-idx="${idx}">
              <img src="${previewSrc}" alt="${v.label}">
              <span>${v.label}</span>
            </button>
          `;
        })
        .join('');

      modalThumbs.querySelectorAll('.as-thumb-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.getAttribute('data-view-idx')) || 0;
          renderStageView(item, idx);
        });
      });
    } else {
      modalThumbs.innerHTML = '';
    }
  }

  function openArtworkById(id, sourceList) {
    const list = sourceList && sourceList.length ? sourceList : ARTWORKS;
    const foundIdx = list.findIndex((a) => a.id === id);
    currentModalList = foundIdx !== -1 ? list : ARTWORKS;
    currentItemIndex = foundIdx !== -1 ? foundIdx : ARTWORKS.findIndex((a) => a.id === id);
    if (currentItemIndex < 0) currentItemIndex = 0;
    populateModal();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function populateModal() {
    const item = currentModalList[currentItemIndex];
    if (!item) return;

    modalCategory.textContent = `${item.badge} • ${item.year}`;
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.desc;

    modalTags.innerHTML = (item.tags || [])
      .map((t, i) => `<span class="tag ${i === 0 ? 'tag-category' : 'tag-tool'}">${t}</span>`)
      .join('');

    const actionButtons = [];
    if (item.externalUrl) {
      actionButtons.push(
        `<a href="${item.externalUrl}" target="_blank" rel="noopener noreferrer" class="as-action-link">${item.externalLabel || 'Open External Link'} &#8599;</a>`
      );
    }
    if (item.fullSheet) {
      actionButtons.push(
        `<a href="${item.fullSheet}" target="_blank" rel="noopener noreferrer" class="as-action-link ${item.externalUrl ? 'secondary' : ''}">Open Original 3K Sheet &#8599;</a>`
      );
    }
    modalActions.innerHTML = actionButtons.join('');

    renderStageView(item, 0);
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!modal.classList.contains('active')) {
        modalMedia.innerHTML = '';
      }
    }, 220);
  }

  function stepModal(delta) {
    if (!currentModalList.length) return;
    currentItemIndex = (currentItemIndex + delta + currentModalList.length) % currentModalList.length;
    populateModal();
  }

  // Event delegation for all clickable cards/buttons with [data-open-id]
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-id]');
    if (!trigger) return;
    e.preventDefault();
    const id = trigger.getAttribute('data-open-id');
    const inGallery = Boolean(trigger.closest('#gallery-grid'));
    const inFeatured = Boolean(trigger.closest('#featured-grid'));
    const list = inGallery ? getFilteredGalleryItems() : inFeatured ? featuredItems : ARTWORKS;
    openArtworkById(id, list);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const trigger = document.activeElement && document.activeElement.closest('[data-open-id]');
      if (trigger && !modal.classList.contains('active')) {
        e.preventDefault();
        trigger.click();
        return;
      }
    }

    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') stepModal(1);
    if (e.key === 'ArrowLeft') stepModal(-1);
  });

  modalClose.addEventListener('click', closeModal);
  modalPrev.addEventListener('click', () => stepModal(-1));
  modalNext.addEventListener('click', () => stepModal(1));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // =========================================================================
  // 4. HERO SHOWCASE SLIDESHOW & MOBILE NAVIGATION
  // =========================================================================
  const heroImgs = Array.from(document.querySelectorAll('#hero-slides .hero-bg-media'));
  const heroDots = Array.from(document.querySelectorAll('#hero-dots .hero-dot'));
  let heroIdx = 0;
  let heroTimer = null;

  function setHeroSlide(index) {
    if (!heroImgs.length) return;
    heroIdx = (index + heroImgs.length) % heroImgs.length;
    heroImgs.forEach((img, i) => img.classList.toggle('active', i === heroIdx));
    heroDots.forEach((dot, i) => dot.classList.toggle('active', i === heroIdx));
  }

  function startHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => setHeroSlide(heroIdx + 1), 5500);
  }

  heroDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      setHeroSlide(Number(dot.getAttribute('data-slide')) || 0);
      startHeroTimer();
    });
  });

  // Mobile Menu Toggle & Scrollspy
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = Array.from(document.querySelectorAll('.nav-menu a.nav-link'));

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active', open);
      menuToggle.setAttribute('aria-expanded', String(open));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const trackedSections = ['home', 'artwork3d', 'gallery', 'gameproject', 'about', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  window.addEventListener(
    'scroll',
    () => {
      const scrollPos = window.scrollY + 160;
      let activeId = 'home';
      trackedSections.forEach((sec) => {
        if (scrollPos >= sec.offsetTop) activeId = sec.id;
      });
      navLinks.forEach((link) => {
        link.classList.toggle('active-link', link.getAttribute('href') === `#${activeId}`);
      });
    },
    { passive: true }
  );

  // Initialize
  updateFilterLabels();
  renderFeatured();
  renderGallery();
  startHeroTimer();
})();
