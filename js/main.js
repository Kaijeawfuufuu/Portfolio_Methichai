/**
 * AI METHICHAI — 3D GAME ARTIST & MODELER PORTFOLIO
 * Core JavaScript: Dynamic Rendering, Filter System, Rich Lightbox Modal,
 * 25-Page PDF Viewer, Smooth Navigation & Clipboard Utilities.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // 1. DATA SOURCE RESOLUTION (Zero CORS + Fallback)
  // ============================================================
  let portfolioData = window.PORTFOLIO_DATA;

  if (portfolioData) {
    initializeApp(portfolioData);
  } else {
    // Fallback if data/portfolio.json is requested via web server
    fetch('data/portfolio.json')
      .then(res => res.json())
      .then(data => {
        portfolioData = data;
        window.PORTFOLIO_DATA = data;
        initializeApp(portfolioData);
      })
      .catch(err => {
        console.warn('Could not load data/portfolio.json via fetch, falling back to static markup.', err);
      });
  }

  // ============================================================
  // 2. MAIN APPLICATION INITIALIZATION
  // ============================================================
  function initializeApp(data) {
    initGallery(data.projects);
    initPdfViewer(data.pdfPages);
    initSculptSpotlight();
    initCopyButtons();
    initModalEvents(data.projects);
    initNavigation();
  }

  // ============================================================
  // 3. GALLERY RENDERING & FILTERING
  // ============================================================
  let currentProjects = [];
  let currentFilter = 'all';

  function initGallery(projects) {
    currentProjects = projects || [];
    const grid = document.getElementById('gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Update filter counts
    updateFilterCounts(currentProjects);

    // Initial render
    renderGallery(currentProjects, 'all');

    // Filter Click Handlers
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-filter');
        currentFilter = cat;
        renderGallery(currentProjects, cat);
      });
    });
  }

  function updateFilterCounts(projects) {
    const counts = {
      'all': projects.length,
      '3d-character': 0,
      '3d-env': 0,
      '3d-props': 0,
      'game-project': 0,
      'animation': 0,
      '2d-art': 0
    };

    projects.forEach(p => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
      const cat = btn.getAttribute('data-filter');
      const countSpan = btn.querySelector('.filter-count');
      if (countSpan && counts[cat] !== undefined) {
        countSpan.textContent = counts[cat];
      }
    });
  }

  function renderGallery(projects, category) {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    const filtered = category === 'all'
      ? projects
      : projects.filter(p => p.category === category);

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-dim);">
          <p style="font-size: 1.1rem;">ไม่พบผลงานในหมวดหมู่นี้</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map((proj, idx) => {
      const toolsHtml = (proj.tools || [])
        .slice(0, 3)
        .map(t => `<span class="mini-tool-pill">${escapeHtml(t)}</span>`)
        .join('');

      return `
        <article class="proj-card" data-id="${proj.id}" data-index="${idx}">
          <div class="proj-thumb-frame">
            <img src="${proj.cover}" alt="${escapeHtml(proj.title)}" class="proj-thumb-img" loading="lazy">
            <span class="proj-page-pill">${escapeHtml(proj.pdfPageStr || 'Page ' + proj.page)}</span>
            <span class="proj-cat-pill">${escapeHtml(proj.categoryTh || proj.categoryName)}</span>
            <div class="proj-hover-curtain">
              <span class="inspect-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                ดูรายละเอียด 3D
              </span>
            </div>
          </div>

          <div class="proj-card-body">
            <span class="proj-role-tag">${escapeHtml(proj.role)}</span>
            <h3 class="proj-title">${escapeHtml(proj.title)}</h3>
            <p class="proj-summary">${escapeHtml(proj.summary || proj.description)}</p>

            <div class="proj-tools-row">
              ${toolsHtml}
            </div>
          </div>

          <div class="proj-card-footer">
            <span>${proj.year || '2024'}</span>
            <span class="proj-view-link">
              Inspect Breakdown &rarr;
            </span>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to cards
    grid.querySelectorAll('.proj-card').forEach(card => {
      card.addEventListener('click', () => {
        const projId = card.getAttribute('data-id');
        openProjectModalById(projId);
      });
    });
  }

  // ============================================================
  // 4. RICH PROJECT DETAIL MODAL (LIGHTBOX)
  // ============================================================
  const modalOverlay = document.getElementById('project-modal');
  let activeModalIndex = 0;

  function openProjectModalById(id) {
    const idx = currentProjects.findIndex(p => p.id === id);
    if (idx !== -1) {
      openProjectModalByIndex(idx);
    }
  }

  function openProjectModalByIndex(index) {
    if (!modalOverlay || !currentProjects[index]) return;
    activeModalIndex = index;
    const proj = currentProjects[index];

    // Header info
    document.getElementById('modal-page-num').textContent = proj.pdfPageStr || `Page ${proj.page}`;
    document.getElementById('modal-proj-title').textContent = proj.title;

    // Media Stage
    const heroMedia = document.getElementById('modal-hero-container');
    heroMedia.innerHTML = `
      <img src="${proj.cover}" alt="${escapeHtml(proj.title)}" class="modal-main-img" id="modal-zoomable-img">
    `;

    // Spec Box
    document.getElementById('modal-spec-role').textContent = proj.role;
    document.getElementById('modal-spec-category').textContent = `${proj.categoryTh} (${proj.categoryName})`;
    document.getElementById('modal-spec-year').textContent = proj.year || '2024';
    document.getElementById('modal-spec-tools').textContent = (proj.tools || []).join(', ');

    // Detailed Narratives
    document.getElementById('modal-desc-text').textContent = proj.description || proj.summary;

    // Process Steps
    const processContainer = document.getElementById('modal-process-container');
    if (proj.process && Array.isArray(proj.process)) {
      processContainer.innerHTML = proj.process.map(step => `
        <div class="modal-process-step">${escapeHtml(step)}</div>
      `).join('');
    } else if (typeof proj.process === 'string') {
      processContainer.innerHTML = proj.process.split('\n').filter(s => s.trim()).map(step => `
        <div class="modal-process-step">${escapeHtml(step)}</div>
      `).join('');
    } else {
      processContainer.innerHTML = `
        <div class="modal-process-step">1. Reference & Conceptual Blockout</div>
        <div class="modal-process-step">2. High-Poly 3D Modeling & Retopology</div>
        <div class="modal-process-step">3. UV Unwrapping & PBR Hand-painted Texturing</div>
        <div class="modal-process-step">4. In-Engine Staging, Rigging & Realtime Lighting</div>
      `;
    }

    // Tools cluster
    const toolsContainer = document.getElementById('modal-tools-list');
    toolsContainer.innerHTML = (proj.tools || []).map(t => `
      <span class="pipeline-badge">${escapeHtml(t)}</span>
    `).join('');

    // YouTube links if present
    const videoSection = document.getElementById('modal-video-section');
    if (proj.youtubeLinks && proj.youtubeLinks.length > 0) {
      videoSection.style.display = 'block';
      videoSection.innerHTML = `
        <h4 class="modal-section-heading">🎬 วิดีโอสาธิตการทำงาน (Video Breakdown)</h4>
        <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin-top: 0.5rem;">
          ${proj.youtubeLinks.map(yt => `
            <div style="aspect-ratio: 16/9; border-radius: var(--radius-md); overflow: hidden; background: #000;">
              <iframe src="${yt.url}" title="${escapeHtml(yt.title)}" style="width: 100%; height: 100%; border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">${escapeHtml(yt.title)}</p>
          `).join('')}
        </div>
      `;
    } else {
      videoSection.style.display = 'none';
      videoSection.innerHTML = '';
    }

    // Modal navigation status
    document.getElementById('modal-nav-prev').disabled = (index === 0);
    document.getElementById('modal-nav-next').disabled = (index === currentProjects.length - 1);

    // Open & Lock Body Scroll
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function initModalEvents(projects) {
    const closeBtn = document.getElementById('modal-close-btn');
    const prevBtn = document.getElementById('modal-nav-prev');
    const nextBtn = document.getElementById('modal-nav-next');

    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (activeModalIndex > 0) {
          openProjectModalByIndex(activeModalIndex - 1);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (activeModalIndex < currentProjects.length - 1) {
          openProjectModalByIndex(activeModalIndex + 1);
        }
      });
    }

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (!modalOverlay.classList.contains('active')) return;

      if (e.key === 'Escape') {
        closeProjectModal();
      } else if (e.key === 'ArrowLeft' && activeModalIndex > 0) {
        openProjectModalByIndex(activeModalIndex - 1);
      } else if (e.key === 'ArrowRight' && activeModalIndex < currentProjects.length - 1) {
        openProjectModalByIndex(activeModalIndex + 1);
      }
    });
  }

  // ============================================================
  // 5. INTERACTIVE 25-PAGE PDF VIEWER
  // ============================================================
  let currentPdfPage = 1;
  let pdfPagesList = [];

  function initPdfViewer(pages) {
    pdfPagesList = pages || [];
    if (pdfPagesList.length === 0) return;

    const displayImg = document.getElementById('pdf-display-img');
    const pageNumText = document.getElementById('pdf-cur-page');
    const totalPagesText = document.getElementById('pdf-total-pages');
    const titleBadge = document.getElementById('pdf-page-title-badge');
    const prevBtn = document.getElementById('pdf-btn-prev');
    const nextBtn = document.getElementById('pdf-btn-next');
    const thumbsStrip = document.getElementById('pdf-thumbs-strip');

    if (totalPagesText) totalPagesText.textContent = pdfPagesList.length;

    // Render Thumbnail Strip
    if (thumbsStrip) {
      thumbsStrip.innerHTML = pdfPagesList.map((p, i) => `
        <div class="pdf-thumb-item ${i === 0 ? 'active' : ''}" data-page="${p.page}" title="หน้า ${p.page}: ${escapeHtml(p.title)}">
          <img src="${p.img}" alt="Page ${p.page}" loading="lazy">
        </div>
      `).join('');

      thumbsStrip.querySelectorAll('.pdf-thumb-item').forEach(thumb => {
        thumb.addEventListener('click', () => {
          const p = parseInt(thumb.getAttribute('data-page'), 10);
          goToPdfPage(p);
        });
      });
    }

    function goToPdfPage(pageNum) {
      if (pageNum < 1 || pageNum > pdfPagesList.length) return;
      currentPdfPage = pageNum;
      const curItem = pdfPagesList[pageNum - 1];

      // Update image
      if (displayImg) {
        displayImg.style.opacity = '0.4';
        setTimeout(() => {
          displayImg.src = curItem.img;
          displayImg.alt = curItem.title;
          displayImg.style.opacity = '1';
        }, 120);
      }

      // Update counters
      if (pageNumText) pageNumText.textContent = pageNum;
      if (titleBadge) titleBadge.textContent = `${curItem.tag} — ${curItem.title}`;

      // Update Prev / Next buttons
      if (prevBtn) prevBtn.disabled = (pageNum === 1);
      if (nextBtn) nextBtn.disabled = (pageNum === pdfPagesList.length);

      // Update active thumbnail
      if (thumbsStrip) {
        thumbsStrip.querySelectorAll('.pdf-thumb-item').forEach(t => {
          const tPage = parseInt(t.getAttribute('data-page'), 10);
          if (tPage === pageNum) {
            t.classList.add('active');
            t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          } else {
            t.classList.remove('active');
          }
        });
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToPdfPage(currentPdfPage - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToPdfPage(currentPdfPage + 1);
      });
    }

    // Clicking display stage opens in lightbox
    const displayStage = document.getElementById('pdf-display-stage');
    if (displayStage) {
      displayStage.addEventListener('click', () => {
        const curItem = pdfPagesList[currentPdfPage - 1];
        if (curItem) {
          // Find matching project or open preview
          const matchedProj = currentProjects.find(p => p.cover === curItem.img || p.page === curItem.page);
          if (matchedProj) {
            openProjectModalById(matchedProj.id);
          } else {
            // Direct lightbox modal
            openCustomLightbox(curItem.img, curItem.title, `หน้า ${curItem.page} / 25 — เอกสารพอร์ตโฟลิโอต้นฉบับ`);
          }
        }
      });
    }

    // Set initial
    goToPdfPage(1);
  }

  // ============================================================
  // 6. 3D SCULPTING SPOTLIGHT TILES
  // ============================================================
  function initSculptSpotlight() {
    const tiles = document.querySelectorAll('.sculpt-tile');
    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        const img = tile.getAttribute('data-img') || tile.querySelector('img')?.src;
        const name = tile.getAttribute('data-name') || '3D Creature Sculpt';
        const desc = tile.getAttribute('data-desc') || 'ZBrush & Blender Organic High-Poly Sculpting Study';
        openCustomLightbox(img, name, desc);
      });
    });
  }

  function openCustomLightbox(imgSrc, title, desc) {
    if (!modalOverlay) return;
    document.getElementById('modal-page-num').textContent = '3D SPOTLIGHT';
    document.getElementById('modal-proj-title').textContent = title;

    const heroMedia = document.getElementById('modal-hero-container');
    heroMedia.innerHTML = `<img src="${imgSrc}" alt="${escapeHtml(title)}" class="modal-main-img">`;

    document.getElementById('modal-spec-role').textContent = 'Digital Sculptor';
    document.getElementById('modal-spec-category').textContent = '3D Creature & Character';
    document.getElementById('modal-spec-year').textContent = '2024';
    document.getElementById('modal-spec-tools').textContent = 'ZBrush, Blender, Digital Clay';

    document.getElementById('modal-desc-text').textContent = desc;

    document.getElementById('modal-process-container').innerHTML = `
      <div class="modal-process-step">1. DynaMesh Blockout: ขึ้นรูปสรีระและโครงกระดูกหลัก</div>
      <div class="modal-process-step">2. Organic Anatomy: กำหนดแนวกล้ามเนื้อ รอยพับผิว และลวดลายเฉพาะ</div>
      <div class="modal-process-step">3. Tertiary Detailing: สลักริ้วรอย รูขุมขน และรอยแผลเป็น</div>
      <div class="modal-process-step">4. Digital Clay Render: เรนเดอร์จัดแสงเพื่อดูความลึกของแสงเงา</div>
    `;

    document.getElementById('modal-tools-list').innerHTML = `
      <span class="pipeline-badge">ZBrush</span>
      <span class="pipeline-badge">Digital Sculpt</span>
      <span class="pipeline-badge">Blender</span>
    `;

    document.getElementById('modal-video-section').style.display = 'none';

    document.getElementById('modal-nav-prev').disabled = true;
    document.getElementById('modal-nav-next').disabled = true;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // ============================================================
  // 7. COPY TO CLIPBOARD & TOAST NOTIFICATION
  // ============================================================
  function initCopyButtons() {
    const copyBtns = document.querySelectorAll('.copy-trigger');
    const toast = document.getElementById('copy-toast');

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('active');
      setTimeout(() => {
        toast.classList.remove('active');
      }, 2500);
    }

    copyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const textToCopy = btn.getAttribute('data-copy');
        if (!textToCopy) return;

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            showToast(`คัดลอก "${textToCopy}" เรียบร้อยแล้ว! 📋`);
          }).catch(() => fallbackCopy(textToCopy));
        } else {
          fallbackCopy(textToCopy);
        }
      });
    });

    function fallbackCopy(text) {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast(`คัดลอก "${text}" เรียบร้อยแล้ว! 📋`);
    }
  }

  // ============================================================
  // 8. SITE NAVIGATION & SCROLLSPY
  // ============================================================
  function initNavigation() {
    const header = document.querySelector('.site-header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Header scroll background
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      updateScrollspy();
    }, { passive: true });

    // Mobile Toggle
    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        mobileDrawer.classList.toggle('active');
      });

      mobileDrawer.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileToggle.classList.remove('active');
          mobileDrawer.classList.remove('active');
        });
      });
    }

    // Scrollspy
    function updateScrollspy() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach(sec => {
        const top = sec.offsetTop - 140;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }
  }

  // Utility
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

});
