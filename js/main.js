/**
 * AI METHICHAI — 3D Artist Portfolio
 * Work data (follows assets/Portfolio.pdf page by page) + rendering,
 * filters, lightbox and mobile navigation.
 */

// ------------------------------------------------------------
// Work data — each image is a page of assets/Portfolio.pdf
// ------------------------------------------------------------
const WORK = [
  {
    id: '3d',
    title: 'We Are Chouri',
    sub: 'Unity game project — Position: Modeler',
    items: [
      {
        img: 'assets/images/page_02.png',
        title: 'Player Characters — Guidi & Zeppe',
        meta: 'Character design & modeling',
        desc: 'Designed and modeled both player characters, from colour-variant concept sheets to textured models shown in front, side and back views.'
      },
      {
        img: 'assets/images/page_03.png',
        title: 'Monsters & Scene Objects',
        meta: '3D modeling · UV · Texturing',
        desc: 'Monster models with their UV texture layouts, plus a lantern set shown from wireframe and UV checker through to final textures.'
      },
      {
        img: 'assets/images/page_04.png',
        title: 'Candy Props',
        meta: 'Props · Texturing',
        desc: 'Fifteen sweet-themed props for the game world — macaron, waffle, candy cane, donut, candle and more.'
      },
      {
        img: 'assets/images/page_05.png',
        title: 'In-Engine Scenes',
        meta: 'Unity',
        desc: 'The props and monsters assembled into the game\'s environments in Unity.'
      }
    ]
  },
  {
    id: '3d',
    title: 'No More Rat!',
    sub: 'Roblox game — Boss & enemy models',
    items: [
      {
        img: 'assets/images/page_06.png',
        title: 'Boss & Enemy Models',
        meta: 'Roblox',
        desc: 'Boss and enemy models for "[Updated] No More Rat!", a hack-and-slash Roblox game by MidnightParadise where you play a hamster clearing rats out of people\'s homes.'
      },
      {
        img: 'assets/images/page_07.png',
        title: 'Creature Models',
        meta: 'Roblox',
        desc: 'More bosses and enemy creatures made for the same game.'
      }
    ]
  },
  {
    id: 'animation',
    title: 'Animation',
    sub: 'In-class & self projects',
    videos: [
      {
        youtube: '4QMDKKF5QoQ',
        url: 'https://youtu.be/4QMDKKF5QoQ',
        title: 'Chouri — Wake Up in the Forest',
        meta: 'Unity cutscene',
        desc: 'Created a cutscene for the We Are Chouri Unity project.'
      },
      {
        youtube: 'wsLVAP0mqXw',
        url: 'https://www.youtube.com/watch?v=wsLVAP0mqXw',
        title: 'Four-Arm Character Animation',
        meta: 'Animation · Python',
        desc: 'Applied Python scripting to automate animation stamping and colour adjustments.'
      }
    ]
  },
  {
    id: '3d',
    title: 'Render Scenes & Other Models',
    sub: 'Coursework & personal projects',
    items: [
      {
        img: 'assets/images/page_09.png',
        title: 'Buildings & Render Scenes',
        meta: 'Modeling · Rendering',
        desc: 'A Pokémon Center in three texture passes, a banana house with wireframe, a hand-on-pedestal render and two lit scenes.'
      },
      {
        img: 'assets/images/page_10.png',
        title: 'Environment & Lighting Renders',
        meta: 'Lighting · Rendering',
        desc: 'A Japanese alley, a modern living room, a stylized creature render and a panoramic character scene.'
      },
      {
        img: 'assets/images/page_11.png',
        title: 'Isometric Art Room & Jester Rig',
        meta: 'Modeling · Rigging · UV',
        desc: 'A detailed isometric artist\'s room, and a jester character shown with its skeleton and UV layouts.'
      },
      {
        img: 'assets/images/page_12.png',
        title: 'Weapon Models',
        meta: 'Hard-surface',
        desc: 'M16 and AK-47 rifle models.'
      },
      {
        img: 'assets/images/page_13.png',
        title: 'Stylized Island Diorama',
        meta: 'Environment',
        desc: 'Low-poly island with giant tentacles, a tiki totem, wooden docks and barrels.'
      },
      {
        img: 'assets/images/page_14.png',
        title: 'Stylized Trees',
        meta: 'Props',
        desc: 'A twisted fantasy tree in three colour variants.'
      },
      {
        img: 'assets/images/page_15.png',
        title: 'Carton Prop',
        meta: 'Props · Hand-painted',
        desc: 'A hand-drawn style carton prop in three colourways.'
      },
      {
        img: 'assets/images/page_16.png',
        title: 'Material & Shader Studies',
        meta: 'Shading',
        desc: 'Glow, outline and translucent material tests on a duck model, plus a glass sphere.'
      },
      {
        img: 'assets/images/page_17.png',
        title: 'Character Sculpts',
        meta: 'Sculpting',
        desc: 'Sculpted busts in several colour variants around a stylized full-body character.'
      }
    ]
  },
  {
    id: 'games',
    title: 'Games & UI',
    sub: '2D PC & mobile games',
    items: [
      {
        img: 'assets/images/page_18.png',
        title: 'TiTLE\'s Nightmare — 2D Horror Shot',
        meta: 'PC game · UX / UI design',
        desc: 'Icon, main menu, in-game HUD and settings screens for a 2D horror shooter.'
      },
      {
        img: 'assets/images/page_19.png',
        title: 'Juukie!! The Mouse & Dominion\'s War',
        meta: 'Mobile games · Designed & developed',
        desc: 'Two 2D mobile games: "Juukie!! The Mouse: Adventures" and "Dominion\'s War: The Card Game".'
      },
      {
        img: 'assets/images/page_20.png',
        title: 'Seamless Sheets & Character Designs',
        meta: '2D game art · Unity',
        desc: 'Character designs and a seamless cave tileset set up as a tile palette in Unity.'
      }
    ]
  },
  {
    id: '2d',
    title: '2D Art',
    sub: 'Illustration',
    items: [
      {
        img: 'assets/images/page_21.png',
        title: 'Noodle Art',
        meta: 'Illustration',
        desc: 'A dense hand-drawn doodle piece, shown in colour and as line art.'
      },
      {
        img: 'assets/images/page_22.png',
        title: 'Adobe Illustrator & Portraits',
        meta: 'Illustrator · Portrait',
        desc: 'Three portrait illustrations in different styles.'
      },
      {
        img: 'assets/images/page_23.png',
        title: 'Painted Portraits',
        meta: 'Digital painting',
        desc: 'Three digitally painted portraits.'
      },
      {
        img: 'assets/images/page_24.png',
        title: 'Character Illustrations',
        meta: 'Illustration',
        desc: 'Character pieces with bold colour and line work.'
      }
    ]
  }
];

// ------------------------------------------------------------
// App
// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderWork();
  initFilters();
  initLightbox();
  initVideos();
  initHeader();
});

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderWork() {
  const root = document.getElementById('work-groups');
  if (!root) return;

  root.innerHTML = WORK.map((group, gi) => {
    const num = String(gi + 1).padStart(2, '0');

    const cards = group.videos
      ? group.videos.map(v => `
          <article class="video-card">
            <div class="card-media" data-youtube="${v.youtube}" role="button" tabindex="0" aria-label="Play ${esc(v.title)}">
              <img src="https://img.youtube.com/vi/${v.youtube}/hqdefault.jpg" alt="${esc(v.title)}" loading="lazy">
              <span class="play"></span>
            </div>
            <div class="card-body">
              <p class="card-meta">${esc(v.meta)}</p>
              <h4 class="card-title">${esc(v.title)}</h4>
              <p class="card-desc">${esc(v.desc)}</p>
              <a class="card-link" href="${v.url}" target="_blank" rel="noopener">Watch on YouTube &rarr;</a>
            </div>
          </article>`).join('')
      : group.items.map(item => `
          <article class="card" tabindex="0"
            data-img="${item.img}" data-title="${esc(item.title)}" data-desc="${esc(item.desc)}">
            <div class="card-media">
              <img src="${item.img}" alt="${esc(item.title)}" loading="lazy" decoding="async">
            </div>
            <div class="card-body">
              <p class="card-meta">${esc(item.meta)}</p>
              <h4 class="card-title">${esc(item.title)}</h4>
              <p class="card-desc">${esc(item.desc)}</p>
            </div>
          </article>`).join('');

    return `
      <div class="group" data-cat="${group.id}">
        <div class="group-head">
          <span class="group-num">${num}</span>
          <h3 class="group-title">${esc(group.title)}</h3>
          <p class="group-sub">${esc(group.sub)}</p>
        </div>
        <div class="grid">${cards}</div>
      </div>`;
  }).join('');
}

function initFilters() {
  const buttons = document.querySelectorAll('.filter');
  const groups = document.querySelectorAll('.group');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      groups.forEach(g => { g.hidden = !(f === 'all' || g.dataset.cat === f); });
    });
  });
}

function initLightbox() {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lb-img');
  const title = document.getElementById('lb-title');
  const desc = document.getElementById('lb-desc');
  const prev = document.getElementById('lb-prev');
  const next = document.getElementById('lb-next');
  let list = [];
  let index = 0;

  function show(i) {
    index = i;
    const card = list[i];
    img.src = card.dataset.img;
    img.alt = card.dataset.title;
    title.textContent = card.dataset.title;
    desc.textContent = card.dataset.desc;
    prev.disabled = i === 0;
    next.disabled = i === list.length - 1;
  }

  function open(card) {
    // Navigate only through the cards that are currently visible
    list = [...document.querySelectorAll('.group:not([hidden]) .card')];
    show(list.indexOf(card));
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if (card) open(card);
  });
  document.addEventListener('keydown', e => {
    const card = e.target.closest && e.target.closest('.card');
    if (card && e.key === 'Enter') open(card);

    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft' && index > 0) show(index - 1);
    if (e.key === 'ArrowRight' && index < list.length - 1) show(index + 1);
  });

  document.getElementById('lb-close').addEventListener('click', close);
  prev.addEventListener('click', () => index > 0 && show(index - 1));
  next.addEventListener('click', () => index < list.length - 1 && show(index + 1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
}

function initVideos() {
  // Load the YouTube player only when clicked (keeps the page light)
  function play(el) {
    const id = el.dataset.youtube;
    el.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    el.removeAttribute('role');
    el.removeAttribute('tabindex');
  }
  document.querySelectorAll('[data-youtube]').forEach(el => {
    el.addEventListener('click', () => play(el), { once: true });
    el.addEventListener('keydown', e => { if (e.key === 'Enter') play(el); });
  });
}

function initHeader() {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
