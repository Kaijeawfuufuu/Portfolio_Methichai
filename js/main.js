/* ==========================================================================
   AI METHICHAI — PORTFOLIO CONTROLLER & VERIFIED ARTWORK COLLECTION
   All items verified page-by-page from Portfolio.pdf (Pages 2–24)
   ========================================================================== */

(() => {
  'use strict';

  const ARTWORKS = [
  // ---------------- 3D CHARACTERS (6 items) ----------------
  {
    id: 'chouri-characters',
    featured: true,
    category: 'character',
    badge: '3D CHARACTER',
    year: 'WE ARE CHOURI',
    spec: 'DUAL PROTAGONISTS',
    title: 'Guidi & Zeppe — Playable Characters & Turnarounds',
    desc: 'Complete master character design board for the 3D Unity adventure We Are Chouri. Features playable protagonists Guidi & Zeppe, color palette studies, 3D orthographic turnarounds, and detailed topological modeling.',
    thumb: 'assets/images/web/page_02.jpg',
    fullSheet: 'assets/images/page_02.png',
    tags: ['Character Modeling', 'Blender / Maya', 'Substance 3D Painter', 'Unity'],
    views: [
      { label: 'Complete Character Presentation Sheet', src: 'assets/images/web/page_02.jpg' }
    ]
  },
  {
    id: 'purple-jester',
    featured: true,
    category: 'character',
    badge: '3D CHARACTER',
    year: 'CHARACTER MODEL',
    spec: 'CHARACTER & RIGGING',
    title: 'Purple Jester — 3D Character Modeling & Rigging',
    desc: 'Stylized purple jester character model featuring multi-angle turnarounds, joint deformation rigging, clean wireframe topology, and whimsical costume tailoring.',
    thumb: 'assets/images/crops/jester_rig.jpg',
    fullSheet: 'assets/images/crops/jester_rig.jpg',
    tags: ['Character Modeling', 'Rigging', 'Topology', 'Autodesk Maya'],
    views: [
      { label: 'Purple Jester Model & Rig', src: 'assets/images/crops/jester_rig.jpg' },
      { label: 'Front Orthographic View', src: 'Project/Pic/3D_Art/Joker_Front.png' },
      { label: 'Side Orthographic View', src: 'Project/Pic/3D_Art/Joker_Side.png' }
    ]
  },
  {
    id: 'roblox-bosses',
    featured: false,
    category: 'character',
    badge: 'BOSS & CREATURES',
    year: 'ROBLOX GAME',
    spec: '6 CREATURE LINEUP',
    title: 'No More Rat! — 6 Boss & Creature Lineup',
    desc: 'Complete creature lineup presentation sheet created for the Roblox hack-and-slash game [Updated] No More Rat!, featuring all six original mutant boss models: four-armed rat brute, venomous beast, dark rat demon, mounted spear rider, and mutant warriors.',
    thumb: 'assets/images/web/page_07.jpg',
    fullSheet: 'assets/images/page_07.png',
    tags: ['Creature Modeling', 'ZBrush', 'Blender', 'Roblox Studio'],
    externalUrl: 'https://www.roblox.com/games/79475326799719/No-More-Rat',
    externalLabel: 'Play No More Rat! on Roblox',
    views: [
      { label: '6 Boss Lineup Master Sheet', src: 'assets/images/web/page_07.jpg' }
    ]
  },
  {
    id: 'roblox-game',
    featured: false,
    category: 'character',
    badge: 'ROBLOX CHARACTER',
    year: 'ROBLOX GAME',
    spec: 'HERO & KEY ART',
    title: 'No More Rat! — Hamster Hero & Game Key Art',
    desc: 'Complete game overview sheet for [Updated] No More Rat! on Roblox, showcasing the stylized trenchcoat exterminator hamster hero model, combat key art, and in-game stage lighting.',
    thumb: 'assets/images/web/page_06.jpg',
    fullSheet: 'assets/images/page_06.png',
    tags: ['3D Character', 'Roblox Studio', 'Key Art'],
    externalUrl: 'https://www.roblox.com/games/79475326799719/No-More-Rat',
    externalLabel: 'Play No More Rat! on Roblox',
    views: [
      { label: 'Game & Key Art Master Sheet', src: 'assets/images/web/page_06.jpg' }
    ]
  },
  {
    id: 'chouri-monsters',
    featured: false,
    category: 'character',
    badge: 'MONSTERS & UVs',
    year: 'WE ARE CHOURI',
    spec: 'UV & TOPOLOGY',
    title: 'We Are Chouri — Monsters & Tiki Lanterns',
    desc: 'Unified presentation sheet featuring plush bear monsters, horned stone shrine demon with 1001 UDIM UV layout, and modular carved tiki lanterns with wireframe topology and emissive glowing textures.',
    thumb: 'assets/images/web/page_03.jpg',
    fullSheet: 'assets/images/page_03.png',
    tags: ['Monster Modeling', 'UV Unwrapping', 'Substance 3D Painter'],
    views: [
      { label: 'Monsters & Tiki Lanterns Master Sheet', src: 'assets/images/web/page_03.jpg' }
    ]
  },
  {
    id: 'zbrush-sculpts',
    featured: true,
    category: 'character',
    badge: 'DIGITAL SCULPTING',
    year: 'ZBRUSH WORK',
    spec: 'ANATOMY & HIGH-POLY',
    title: 'Stylized Figure & Warrior Bust Sculpts',
    desc: 'ZBrush character design board featuring full-body stylized heroic female anatomy turnarounds alongside organic demon and creature head bust sculpts with dynamic facial silhouette and anatomy flow.',
    thumb: 'assets/images/web/page_08.jpg',
    fullSheet: 'assets/images/page_08.png',
    tags: ['ZBrush', 'High-Poly Sculpting', 'Character Anatomy', 'Bust Sculpt'],
    views: [
      { label: 'High-Poly Anatomy & Busts Master Sheet', src: 'assets/images/web/page_08.jpg' },
      { label: 'Goblin Head Bust', src: 'Project/Pic/3D_Art/Gobin_Head.png' },
      { label: 'Creature Head Bust', src: 'Project/Pic/3D_Art/Grass_Hair_Head.png' },
      { label: 'Skinless Demon Bust', src: 'Project/Pic/3D_Art/Skin_Less_Head.png' }
    ]
  },

  // ---------------- 3D BUILDINGS & ARCHITECTURE (4 items) ----------------
  {
    id: 'banana-house',
    featured: false,
    category: 'building',
    badge: '3D ARCHITECTURE',
    year: 'STYLIZED BUILDING',
    spec: 'MODEL & WIREFRAME',
    title: 'Stylized Banana House & Beach Hut',
    desc: 'Whimsical tropical banana beach hut architecture featuring hand-painted peeling banana peel roof tiles, wooden stilts, hanging lantern signage, and clean subdivision wireframe topology.',
    thumb: 'Project/Pic/Intillia/Banana_House.png',
    fullSheet: 'Project/Pic/Intillia/Banana_House.png',
    tags: ['3D Architecture', 'Stylized Modeling', 'Subdivision Topology', 'Props'],
    views: [
      { label: 'Banana House Render', src: 'Project/Pic/Intillia/Banana_House.png' }
    ]
  },
  {
    id: 'pokemon-center',
    featured: false,
    category: 'building',
    badge: '3D ARCHITECTURE',
    year: 'ARCHITECTURE',
    spec: '3 MATERIAL FINISHES',
    title: 'Stylized Pokémon Center — 3 Material Finishes',
    desc: 'Stylized architectural model of a Pokémon Center building explored across three distinct material finishes: pristine clean cartoon, weathered realistic brick, and dark horror overgrown edition.',
    thumb: 'Project/Pic/Intillia/Pokemon_Center_Dark.png',
    fullSheet: 'Project/Pic/Intillia/Pokemon_Center_Dark.png',
    tags: ['3D Architecture', 'Material Look-Dev', 'Texturing', 'Substance Painter'],
    views: [
      { label: 'Dark Horror Edition', src: 'Project/Pic/Intillia/Pokemon_Center_Dark.png' },
      { label: 'Weathered Texture Pass', src: 'Project/Pic/Intillia/Pokemon_Center_Texture.png' },
      { label: 'Clean Cartoon Pass', src: 'Project/Pic/Intillia/Pokemon_Center_Basic.png' }
    ]
  },
  {
    id: 'isometric-studio',
    featured: false,
    category: 'building',
    badge: '3D INTERIOR',
    year: 'ROOM DIORAMA',
    spec: 'ISOMETRIC ARCHITECTURE',
    title: 'Isometric Artist Studio & Bedroom Diorama',
    desc: 'Stylized low-poly 3D bedroom and artist studio interior packed with framed paintings, easels, drafting desk sketches, miniature figures, paint jars, and cool moonlight streaming through frosted windows.',
    thumb: 'Project/Pic/Intillia/Room_Team_Kokocrunch.jpg',
    fullSheet: 'Project/Pic/Intillia/Room_Team_Kokocrunch.jpg',
    tags: ['Interior Architecture', 'Isometric Diorama', 'Lighting', 'Props'],
    views: [
      { label: 'Isometric Studio Diorama Render', src: 'Project/Pic/Intillia/Room_Team_Kokocrunch.jpg' }
    ]
  },
  {
    id: 'alley-lighting',
    featured: true,
    category: 'building',
    badge: '3D ARCHITECTURE',
    year: 'STREET ARCHITECTURE',
    spec: 'JAPANESE ALLEY & INTERIOR',
    title: 'Japanese Sunset Alley & Traditional Architecture',
    desc: 'Atmospheric Japanese alleyway architecture featuring traditional wooden storefronts, overhead cables, sliding lattice doors, and golden sunset volumetric lighting contrasted with an interior room study.',
    thumb: 'assets/images/web/page_12.jpg',
    fullSheet: 'assets/images/page_12.png',
    tags: ['Japanese Architecture', 'Street Environment', 'Sunset Lighting', 'Level Art'],
    views: [
      { label: 'Sunset Alley Master Presentation Sheet', src: 'assets/images/web/page_12.jpg' }
    ]
  },

  // ---------------- 3D PROPS (4 items) ----------------
  {
    id: 'chouri-props',
    featured: false,
    category: 'prop',
    badge: '3D PROPS',
    year: 'WE ARE CHOURI',
    spec: '15 STYLIZED ASSETS',
    title: 'Stylized Candy & Fantasy Props Collection',
    desc: 'Extensive asset sheet presenting fifteen original stylized 3D props designed for the We Are Chouri universe: lollipop flora, giant marshmallow stacks, floating balloon flowers, fantasy fruit, and carved totem signposts.',
    thumb: 'assets/images/web/page_04.jpg',
    fullSheet: 'assets/images/page_04.png',
    tags: ['Prop Modeling', 'Stylized PBR', 'Asset Library', 'Substance 3D Painter'],
    views: [
      { label: '15 Fantasy Props Master Sheet', src: 'assets/images/web/page_04.jpg' }
    ]
  },
  {
    id: 'weapon-models',
    featured: false,
    category: 'prop',
    badge: 'HARD-SURFACE WEAPONS',
    year: 'MILITARY ASSETS',
    spec: 'M16A1 & AK-47 RIFLES',
    title: 'M16 & AK-47 Assault Rifle Models',
    desc: 'Hard-surface game-ready weapon models including an M16A1 assault rifle with high-precision receiver geometry and an AK-47 with treated wood furnishings, metal receiver, and textured magazine.',
    thumb: 'assets/images/web/page_10.jpg',
    fullSheet: 'assets/images/page_10.png',
    tags: ['Hard-Surface Modeling', 'Substance Painter', 'Game Ready Asset', 'PBR Metal'],
    views: [
      { label: 'Weapons Master Presentation Sheet', src: 'assets/images/web/page_10.jpg' }
    ]
  },
  {
    id: 'sculpted-hand',
    featured: false,
    category: 'prop',
    badge: 'DIGITAL SCULPT',
    year: 'PROP SCULPT',
    spec: 'ORGANIC PEDESTAL',
    title: 'Sculpted Ice Pedestal Hand',
    desc: 'High-poly organic hand sculpture emerging from an ice pedestal, showcasing expressive finger gesture anatomy, natural skin tension folds, and crystalline pedestal styling.',
    thumb: 'Project/Pic/3D_Art/Hand.png',
    fullSheet: 'Project/Pic/3D_Art/Hand.png',
    tags: ['ZBrush', 'Organic Sculpting', 'Hand Anatomy', 'Prop Sculpt'],
    views: [
      { label: 'Hand Sculpture Render', src: 'Project/Pic/3D_Art/Hand.png' }
    ]
  },
  {
    id: 'carton-props',
    featured: false,
    category: 'prop',
    badge: 'CEL-SHADED PROPS',
    year: 'STYLIZED ASSETS',
    spec: 'INK-LINED MODELS',
    title: 'Hand-Drawn Cel-Shaded Carton Props',
    desc: 'Stylized cardboard box and vending machine models rendered with vibrant pop colors, bold ink-sketch outlines, hand-painted anime faces, and playful character sticker decals.',
    thumb: 'Project/Pic/purple_6.jpg',
    fullSheet: 'Project/Pic/purple_6.jpg',
    tags: ['Cel Shading', 'Stylized Props', 'Hand-Painted Texture', 'Comic Style'],
    views: [
      { label: 'Cel-Shaded Carton Props Render', src: 'Project/Pic/purple_6.jpg' }
    ]
  },

  // ---------------- 3D ENVIRONMENTS (6 items) ----------------
  {
    id: 'neon-shrine-scene',
    featured: true,
    category: 'environment',
    badge: '3D ENVIRONMENT',
    year: 'SCENE LIGHTING',
    spec: 'NEON TORII SHRINE',
    title: 'Neon Torii Shrine — Unity Atmospheric Scene',
    desc: 'Dramatic in-engine Unity environment showcasing an ethereal glowing neon Torii shrine gate, moody volumetric fog, emissive runic lanterns, and cinematic night lighting.',
    thumb: 'Project/Pic/Unity/Rat_scene1.png',
    fullSheet: 'Project/Pic/Unity/Rat_scene1.png',
    tags: ['Unity Engine', 'Scene Lighting', 'Level Art', 'Atmosphere'],
    views: [
      { label: 'Neon Shrine Main Shot', src: 'Project/Pic/Unity/Rat_scene1.png' }
    ]
  },
  {
    id: 'boss-arena-encounter',
    featured: true,
    category: 'environment',
    badge: '3D ENVIRONMENT',
    year: 'BATTLE LIGHTING',
    spec: 'UNITY BOSS ARENA',
    title: 'Boss Arena Battle Encounter — Unity Battle Lighting',
    desc: 'High-intensity in-engine Unity boss battle encounter scene showcasing dramatic arena floor lighting, atmospheric fog, dynamic rim lights on combatants, and wide perspective staging.',
    thumb: 'Project/Pic/Unity/Rat_scene2.png',
    fullSheet: 'Project/Pic/Unity/Rat_scene2.png',
    tags: ['Unity Engine', 'Boss Arena', 'Combat Staging', 'Dynamic Lighting'],
    views: [
      { label: 'Boss Arena Battle View', src: 'Project/Pic/Unity/Rat_scene2.png' }
    ]
  },
  {
    id: 'chouri-world',
    featured: true,
    category: 'environment',
    badge: '3D ENVIRONMENT',
    year: 'UNITY ENVIRONMENT',
    spec: 'WORLD BUILDING',
    title: 'We Are Chouri — In-Engine Unity Environments',
    desc: 'Complete in-engine world composition sheet showing multiple gameplay environments: mysterious cavern passages, lush neon-lit rope bridge canopies, and sacred ancient stone ruins with custom lighting rigs.',
    thumb: 'assets/images/web/page_05.jpg',
    fullSheet: 'assets/images/page_05.png',
    tags: ['Level Design', 'Unity Engine', 'Environment Lighting', 'World Building'],
    views: [
      { label: 'In-Engine World Presentation Sheet', src: 'assets/images/web/page_05.jpg' }
    ]
  },
  {
    id: 'tiki-island',
    featured: false,
    category: 'environment',
    badge: 'ENVIRONMENT DIORAMA',
    year: 'SCENE ASSEMBLY',
    spec: 'TROPICAL DIORAMA',
    title: 'Stylized Kraken & Tiki Island Diorama',
    desc: 'Vibrant tropical diorama featuring an ominous giant kraken eye nestled among rocky coral reefs, ancient carved tiki statues, stylized wooden huts, and custom stylized water shader look-dev.',
    thumb: 'assets/images/web/page_13.jpg',
    fullSheet: 'assets/images/page_13.png',
    tags: ['Environment Art', 'Diorama', 'Look-Dev', 'Stylized Scene'],
    views: [
      { label: 'Tiki Island Master Presentation Sheet', src: 'assets/images/web/page_13.jpg' }
    ]
  },
  {
    id: 'fantasy-trees',
    featured: false,
    category: 'environment',
    badge: 'FOLIAGE & VEGETATION',
    year: 'ORGANIC ASSETS',
    spec: 'TWISTED NATURE',
    title: 'Stylized Twisted Fantasy Trees',
    desc: 'Whimsical organic vegetation set featuring gnarly twisted tree trunks, hand-painted spiraling canopy foliage, and vibrant bioluminescent mushroom mushrooms built for stylized game worlds.',
    thumb: 'assets/images/web/page_14.jpg',
    fullSheet: 'assets/images/page_14.png',
    tags: ['Stylized Foliage', 'Organic Modeling', 'Hand-Painted Textures', 'Vegetation'],
    views: [
      { label: 'Twisted Trees Master Sheet', src: 'assets/images/web/page_14.jpg' }
    ]
  },
  {
    id: 'shader-studies',
    featured: false,
    category: 'environment',
    badge: 'TECHNICAL ART',
    year: 'CUSTOM SHADERS',
    spec: 'UNITY HLSL / GRAPH',
    title: 'Procedural Holographic, Contour & Glass Shaders',
    desc: 'Technical shader breakdown showcasing procedural holographic scanlines with Fresnel rim lighting, chromatic aberration, cartoon contour outlines, and refractive glass shader graph networks in Unity.',
    thumb: 'assets/images/web/page_15.jpg',
    fullSheet: 'assets/images/page_15.png',
    tags: ['Technical Art', 'Shader Graph', 'HLSL', 'Unity Engine'],
    views: [
      { label: 'Shaders Master Breakdown Sheet', src: 'assets/images/web/page_15.jpg' }
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
      character: ARTWORKS.filter((a) => a.category === 'character').length,
      building: ARTWORKS.filter((a) => a.category === 'building').length,
      prop: ARTWORKS.filter((a) => a.category === 'prop').length,
      environment: ARTWORKS.filter((a) => a.category === 'environment').length
    };
    const baseLabels = {
      all: 'ALL',
      character: 'CHARACTERS',
      building: 'BUILDINGS',
      prop: 'PROPS',
      environment: 'ENVIRONMENTS'
    };
    filterButtons.forEach((btn) => {
      const key = btn.getAttribute('data-filter');
      if (baseLabels[key] !== undefined) {
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
