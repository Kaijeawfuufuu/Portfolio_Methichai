/* ==========================================================================
   METHICHAI PRUEKSAKING (AI METHICHAI) — PORTFOLIO CONTROLLER
   Verified from Portfolio Slides (Pages 2–24) & Co-op Resume
   ========================================================================== */

(() => {
  'use strict';

  const ARTWORKS = [
    // ---------------- CHARACTERS & BOSSES ----------------
    {
      id: 'chouri-characters',
      featured: true,
      category: 'characters',
      badge: '3D CHARACTER • CO-OP',
      year: 'WE ARE CHOURI (2026)',
      spec: '2P CO-OP • MAYA',
      title: 'Guidi & Zeppe — We Are Chouri (2-Player Co-op)',
      desc: 'ออกแบบคอนเซปต์และปั้นโมเดลตัวละครหลักคู่หู Guidi & Zeppe สำหรับเกม We Are Chouri (2 Players / Co-op / Puzzle / Action-Adventure / Split-screen) พร้อมทำพื้นผิว Rigging และ Animation ในเกม',
      thumb: 'assets/images/crops/chouri_characters.jpg',
      slideThumb: 'assets/images/web/page_02.jpg',
      fullSheet: 'assets/images/page_02.png',
      tags: ['Autodesk Maya', 'Substance 3D Painter', 'Unity Engine', 'GitHub'],
      views: [
        { label: 'Slide 02: Character Sheet', src: 'assets/images/web/page_02.jpg' },
        { label: '3D Turnaround Closeup', src: 'assets/images/crops/chouri_characters.jpg' },
        { label: 'Slide 03: Monsters & UVs', src: 'assets/images/web/page_03.jpg' },
        { label: 'Slide 04: 15 Fantasy Props', src: 'assets/images/web/page_04.jpg' },
        { label: 'Slide 05: Co-op Split-Screen World', src: 'assets/images/web/page_05.jpg' }
      ]
    },
    {
      id: 'roblox-bosses',
      featured: true,
      category: 'characters',
      badge: 'BOSS & ENEMY MODELS',
      year: 'NO MORE RAT (2025)',
      spec: '6 CREATURE MODELS',
      title: 'No More Rat : Down The Drain — 6 Boss & Enemy Models',
      desc: 'ออกแบบคอนเซปต์และปั้นโมเดลศัตรูและบอสหนูกลายพันธุ์ทั้ง 6 รูปแบบ รวมถึงทำ Rigging และเตรียม Animation สำหรับเกมแนว Hack & Slash / Action-Adventure บน Roblox',
      thumb: 'assets/images/web/page_07.jpg',
      slideThumb: 'assets/images/web/page_07.jpg',
      fullSheet: 'assets/images/page_07.png',
      externalUrl: 'https://www.roblox.com/games/79475326799719/No-More-Rat',
      externalLabel: 'Play No More Rat on Roblox',
      tags: ['Autodesk Maya', 'Blender', 'Substance 3D Painter', 'Roblox Studio'],
      views: [
        { label: 'Slide 07: 6 Boss Lineup', src: 'assets/images/web/page_07.jpg' },
        { label: 'Four-Arm Rat Boss', src: 'Project/Pic/3D_Art/Four_Arm_Rat.png' },
        { label: 'Dark Rat Demon', src: 'Project/Pic/3D_Art/Rat_demon.png' },
        { label: 'Mutant Green Rat', src: 'Project/Pic/3D_Art/Green_Rat.png' },
        { label: 'Slide 06: Game Overview', src: 'assets/images/web/page_06.jpg' }
      ]
    },
    {
      id: 'roblox-game',
      featured: false,
      category: 'characters',
      badge: 'ROBLOX ACTION GAME',
      year: 'NO MORE RAT (2025)',
      spec: 'HERO & WEAPONS',
      title: 'No More Rat : Down The Drain — Hero Model & Game Overview',
      desc: 'ออกแบบคอนเซปต์โลกของเกม อาวุธ ตัวละครแฮมสเตอร์หลัก และฉากต่อสู้ในเกม No More Rat : Down The Drain (Roblox / Hack & Slash / Action-Adventure)',
      thumb: 'assets/images/crops/roblox_keyart.jpg',
      slideThumb: 'assets/images/web/page_06.jpg',
      fullSheet: 'assets/images/page_06.png',
      externalUrl: 'https://www.roblox.com/games/79475326799719/No-More-Rat',
      externalLabel: 'Play No More Rat on Roblox',
      tags: ['Autodesk Maya', 'Blender', 'Substance 3D Painter', 'Roblox Studio'],
      views: [
        { label: 'Slide 06: Full Game Sheet', src: 'assets/images/web/page_06.jpg' },
        { label: 'Combat Key Art', src: 'assets/images/crops/roblox_keyart.jpg' },
        { label: 'In-Game Stage', src: 'assets/images/crops/roblox_gameplay.jpg' }
      ]
    },
    {
      id: 'chouri-monsters',
      featured: false,
      category: 'characters',
      badge: 'MONSTERS & UVs',
      year: 'WE ARE CHOURI (2026)',
      spec: 'UV & TEXTURING',
      title: 'We Are Chouri — Scene Objects, Monsters & Lantern UVs',
      desc: 'โมเดลศัตรูและบอสในเกม We Are Chouri พร้อมการกาง UV (UDIM 1001) และชุดโคมไฟโทเท็มแสดงขั้นตอน Wireframe, UV Checker และ Texture',
      thumb: 'assets/images/crops/chouri_monsters.jpg',
      slideThumb: 'assets/images/web/page_03.jpg',
      fullSheet: 'assets/images/page_03.png',
      tags: ['Autodesk Maya', 'UV Unwrapping', 'Substance 3D Painter'],
      views: [
        { label: 'Slide 03: Full Monster & UV Sheet', src: 'assets/images/web/page_03.jpg' },
        { label: 'Monsters Closeup', src: 'assets/images/crops/chouri_monsters.jpg' }
      ]
    },
    {
      id: 'zbrush-sculpts',
      featured: true,
      category: 'characters',
      badge: 'ZBRUSH SCULPTING',
      year: '3D SCULPT STUDY',
      spec: 'ZBRUSH • HIGH POLY',
      title: 'Stylized Character & Warrior Bust Sculpts',
      desc: 'งานปั้น High-Poly Digital Sculpting ในโปรแกรม ZBrush แสดงรายละเอียดโครงสร้างใบหน้าและวัสดุพื้นผิว 4 รูปแบบ พร้อมหุ่นตัวละครเต็มตัวบนแท่นจัดแสดง',
      thumb: 'assets/images/web/page_17.jpg',
      slideThumb: 'assets/images/web/page_17.jpg',
      fullSheet: 'assets/images/page_17.png',
      tags: ['ZBrush', 'Digital Sculpting', 'Character Anatomy', 'Materials'],
      views: [
        { label: 'Slide 17: ZBrush Sculpt Showcase', src: 'assets/images/web/page_17.jpg' }
      ]
    },
    {
      id: 'jester-rig',
      featured: false,
      category: 'characters',
      badge: 'CHARACTER RIG & UV',
      year: '3D RIGGING',
      spec: 'MAYA RIGGING',
      title: 'Stylized Jester — Character Model, Skeletal Rig & UV Maps',
      desc: 'โมเดลตัวละคร Jester พร้อมระบบกระดูกและคอนโทรลเลอร์ (Skeletal Rigging) ใน Autodesk Maya และแผ่น Texture / UV Map แยกชิ้นส่วน',
      thumb: 'assets/images/crops/jester_rig.jpg',
      slideThumb: 'assets/images/web/page_11.jpg',
      fullSheet: 'assets/images/page_11.png',
      tags: ['Autodesk Maya', 'Character Rigging', 'UV Layout', 'Substance 3D Painter'],
      views: [
        { label: 'Slide 11: Isometric Room & Jester Rig', src: 'assets/images/web/page_11.jpg' },
        { label: 'Jester Rig & UV Closeup', src: 'assets/images/crops/jester_rig.jpg' },
        { label: 'Front Viewport', src: 'Project/Pic/3D_Art/Joker_Front.png' },
        { label: 'Side Viewport', src: 'Project/Pic/3D_Art/Joker_Side.png' }
      ]
    },

    // ---------------- ENVIRONMENTS & PROPS ----------------
    {
      id: 'alley-lighting',
      featured: true,
      category: 'environments',
      badge: '3D ENVIRONMENT',
      year: 'LIGHTING & SCENE',
      spec: 'ENVIRONMENT ART',
      title: 'Japanese Sunset Alley & Architectural Lighting Renders',
      desc: 'ผลงานการสร้างฉาก 3D Environment และการจัดแสงบรรยากาศ (Lighting & Rendering) ทั้งตรอกร้านค้าญี่ปุ่นยามเย็น ห้องนั่งเล่นโมเดิร์นโทนอุ่น และการจัดองค์ประกอบฉาก',
      thumb: 'assets/images/crops/alley_sunset.jpg',
      slideThumb: 'assets/images/web/page_10.jpg',
      fullSheet: 'assets/images/page_10.png',
      tags: ['3D Environment', 'Blender', 'Autodesk Maya', 'Lighting & Rendering'],
      views: [
        { label: 'Slide 10: Full 4-Scene Sheet', src: 'assets/images/web/page_10.jpg' },
        { label: 'Japanese Sunset Alley', src: 'assets/images/crops/alley_sunset.jpg' },
        { label: 'Modern Interior Render', src: 'assets/images/crops/modern_interior.jpg' },
        { label: 'Cel-Shaded Creature', src: 'assets/images/crops/cel_creature.jpg' },
        { label: 'Sunset Street Render', src: 'assets/images/crops/street_character.jpg' }
      ]
    },
    {
      id: 'tiki-island',
      featured: true,
      category: 'environments',
      badge: 'ISLAND ENVIRONMENT',
      year: 'WINGBEAT (2026)',
      spec: 'STYLIZED ISLAND',
      title: 'Wingbeat — Stylized Island Environment Diorama',
      desc: 'การออกแบบและปั้นโมเดลฉากเกาะสำหรับเกมแนว Simulation / Party Game (Wingbeat) โดดเด่นด้วยโขดหิน ท่าเรือไม้ เสาโทเท็มคริสตัล และหนวดยักษ์สีสันสดใส',
      thumb: 'assets/images/web/page_13.jpg',
      slideThumb: 'assets/images/web/page_13.jpg',
      fullSheet: 'assets/images/page_13.png',
      tags: ['Autodesk Maya', 'Blender', 'Substance 3D Painter', 'Unity Engine'],
      views: [
        { label: 'Slide 13: Stylized Island Diorama', src: 'assets/images/web/page_13.jpg' },
        { label: 'Slide 14: Stylized Foliage Trees', src: 'assets/images/web/page_14.jpg' }
      ]
    },
    {
      id: 'isometric-studio',
      featured: false,
      category: 'environments',
      badge: 'ISOMETRIC DIORAMA',
      year: '3D INTERIOR',
      spec: 'INTERIOR & PROPS',
      title: 'Isometric Artist Studio Diorama',
      desc: 'ฉากห้องทำงานศิลปินแบบ Isometric 3D เก็บรายละเอียดเฟอร์นิเจอร์ โต๊ะวาดเขียน ขวดสี เฟรมภาพวาด และแสงจันทร์ส่องผ่านหน้าต่างยามค่ำคืน',
      thumb: 'Project/Pic/Intillia/Room_Team_Kokocrunch.jpg',
      slideThumb: 'assets/images/web/page_11.jpg',
      fullSheet: 'assets/images/page_11.png',
      tags: ['3D Environment', 'Autodesk Maya', 'Blender', 'Lighting'],
      views: [
        { label: 'Isometric Studio Render', src: 'Project/Pic/Intillia/Room_Team_Kokocrunch.jpg' },
        { label: 'Slide 11: Full Sheet', src: 'assets/images/web/page_11.jpg' }
      ]
    },
    {
      id: 'chouri-world',
      featured: false,
      category: 'environments',
      badge: 'CO-OP GAME WORLD',
      year: 'WE ARE CHOURI (2026)',
      spec: 'UNITY ENGINE',
      title: 'We Are Chouri — In-Engine Co-op Environments',
      desc: 'บรรยากาศฉากในเกม We Are Chouri บน Unity Engine แสดงการจัดแสงสะพานวาฟเฟิล เสาโทเท็มเรืองแสง วิหารมอนสเตอร์ และถ้ำคริสตัล',
      thumb: 'assets/images/crops/chouri_shrine.jpg',
      slideThumb: 'assets/images/web/page_05.jpg',
      fullSheet: 'assets/images/page_05.png',
      tags: ['Unity Engine', '3D Environment', 'Level Lighting', 'GitHub'],
      views: [
        { label: 'Slide 05: Full 4-Shot Sheet', src: 'assets/images/web/page_05.jpg' },
        { label: 'Totem Shrine', src: 'assets/images/crops/chouri_shrine.jpg' },
        { label: 'Waffle Bridge', src: 'assets/images/crops/chouri_bridge.jpg' },
        { label: 'Crystal Cavern', src: 'assets/images/crops/chouri_cavern.jpg' }
      ]
    },
    {
      id: 'render-scenes-props',
      featured: false,
      category: 'environments',
      badge: 'SCENES & MODELS',
      year: '3D PROJECTS',
      spec: 'ENVIRONMENT & PROPS',
      title: 'Render Scenes, Pokémon Center (3 Passes) & Banana House',
      desc: 'รวมผลงานฉากเรนเดอร์และโมเดลสถาปัตยกรรม: Pokémon Center 3 รูปแบบพื้นผิว (Basic, Texture, Dark Horror), บ้านกล้วย stylized, มือบนแท่นน้ำแข็ง และฉากบอสใน Unity',
      thumb: 'Project/Pic/Unity/Rat_scene1.png',
      slideThumb: 'assets/images/web/page_09.jpg',
      fullSheet: 'assets/images/page_09.png',
      tags: ['Autodesk Maya', 'Blender', 'Substance 3D Painter', 'Unity Engine'],
      views: [
        { label: 'Slide 09: Full Project Sheet', src: 'assets/images/web/page_09.jpg' },
        { label: 'Neon Shrine Scene', src: 'Project/Pic/Unity/Rat_scene1.png' },
        { label: 'Boss Arena Scene', src: 'Project/Pic/Unity/Rat_scene2.png' },
        { label: 'Pokémon Center (Dark)', src: 'Project/Pic/Intillia/Pokemon_Center_Dark.png' },
        { label: 'Banana House', src: 'Project/Pic/Intillia/Banana_House.png' },
        { label: 'Ice Pedestal Hand', src: 'Project/Pic/3D_Art/Hand.png' }
      ]
    },
    {
      id: 'weapon-models',
      featured: false,
      category: 'environments',
      badge: '3D WEAPONS',
      year: 'HARD SURFACE',
      spec: 'PBR TEXTURING',
      title: 'M16 & AK-47 Assault Rifle 3D Models',
      desc: 'โมเดลอาวุธปืน M16 และ AK-47 แบบ Hard-Surface พร้อมทำพื้นผิวโลหะและลายไม้ (Modeling & Texturing) สำหรับใช้เป็น Game Asset',
      thumb: 'assets/images/web/page_12.jpg',
      slideThumb: 'assets/images/web/page_12.jpg',
      fullSheet: 'assets/images/page_12.png',
      tags: ['Hard-Surface Modeling', 'Autodesk Maya', 'Blender', 'Substance 3D Painter'],
      views: [
        { label: 'Slide 12: M16 & AK-47 Models', src: 'assets/images/web/page_12.jpg' }
      ]
    },
    {
      id: 'chouri-props',
      featured: false,
      category: 'environments',
      badge: '15 GAME PROPS',
      year: 'WE ARE CHOURI (2026)',
      spec: 'PROP ASSET PACK',
      title: 'We Are Chouri — 15 Stylized Candy & Fantasy Props',
      desc: 'ชุดโมเดล 3D Props ประกอบฉากจำนวน 15 ชิ้นในเกม We Are Chouri เช่น มาการอง วาฟเฟิล แคนดี้เคน โดนัท เทียนเรืองแสง และเห็ดแฟนตาซี',
      thumb: 'assets/images/web/page_04.jpg',
      slideThumb: 'assets/images/web/page_04.jpg',
      fullSheet: 'assets/images/page_04.png',
      tags: ['3D Prop Modeling', 'Substance 3D Painter', 'Unity Engine'],
      views: [
        { label: 'Slide 04: 15 Props Sheet', src: 'assets/images/web/page_04.jpg' }
      ]
    },
    {
      id: 'fantasy-trees',
      featured: false,
      category: 'environments',
      badge: 'FOLIAGE ASSETS',
      year: 'WINGBEAT / PROPS',
      spec: '3 COLORWAYS',
      title: 'Stylized Twisted Fantasy Trees (3 Colorways)',
      desc: 'โมเดลต้นไม้แฟนตาซีทรงบิดเกลียวพร้อมลวดลายพื้นผิว 3 โทนสี สำหรับตกแต่งฉากเกาะและโลกแฟนตาซีในเกม',
      thumb: 'assets/images/web/page_14.jpg',
      slideThumb: 'assets/images/web/page_14.jpg',
      fullSheet: 'assets/images/page_14.png',
      tags: ['3D Environment Prop', 'Blender', 'Autodesk Maya'],
      views: [
        { label: 'Slide 14: Stylized Trees', src: 'assets/images/web/page_14.jpg' }
      ]
    },
    {
      id: 'carton-props',
      featured: false,
      category: 'environments',
      badge: 'STYLIZED TOON PROP',
      year: 'NPR / CEL SHADING',
      spec: '3 COLORWAYS',
      title: 'Hand-Drawn Cel-Shaded Carton Props',
      desc: 'โมเดลกล่องนมสไตล์ Pop-Art / Cel-Shaded ผสมผสานเส้นขอบการ์ตูน 2D เข้ากับรูปทรง 3D ใน 3 โทนสีสดใส',
      thumb: 'assets/images/web/page_15.jpg',
      slideThumb: 'assets/images/web/page_15.jpg',
      fullSheet: 'assets/images/page_15.png',
      tags: ['Stylized 3D', 'Toon Outline', 'Blender'],
      views: [
        { label: 'Slide 15: Carton Prop Variants', src: 'assets/images/web/page_15.jpg' }
      ]
    },

    // ---------------- SHADERS & ANIMATION ----------------
    {
      id: 'anim-chouri',
      featured: true,
      category: 'tech',
      badge: '3D CUTSCENE',
      year: 'WE ARE CHOURI (2026)',
      spec: 'UNITY CUTSCENE',
      title: 'We Are Chouri — Opening Forest Cutscene Animation',
      desc: 'ผลงานการทำ 3D Animation และจัดมุมกล้องฉาก Cutscene เปิดเรื่องของเกม We Are Chouri ใน Unity Engine',
      thumb: 'assets/images/crops/anim_chouri.jpg',
      slideThumb: 'assets/images/web/page_08.jpg',
      videoId: '4QMDKKF5QoQ',
      externalUrl: 'https://youtu.be/4QMDKKF5QoQ',
      externalLabel: 'Watch on YouTube',
      fullSheet: 'assets/images/page_08.png',
      tags: ['3D Animation', 'Unity Engine', 'Autodesk Maya', 'Cutscene'],
      views: [
        { label: 'Play Cutscene Video', videoId: '4QMDKKF5QoQ', thumb: 'assets/images/crops/anim_chouri.jpg' },
        { label: 'Slide 08: Animation Showcase', src: 'assets/images/web/page_08.jpg' }
      ]
    },
    {
      id: 'anim-four-arm',
      featured: false,
      category: 'tech',
      badge: 'CHARACTER ANIMATION',
      year: '3D ANIMATION REEL',
      spec: 'MOTION TRAIL FX',
      title: 'Four-Arm Character Animation — Motion Trail Effect',
      desc: 'ผลงานอนิเมชันตัวละคร 4 แขน พร้อมเอฟเฟกต์ภาพติดตาไล่โทนสี (Sandevistan Motion Trail) และการเคลื่อนไหวแบบดุดันใน Autodesk Maya',
      thumb: 'assets/images/crops/anim_python.jpg',
      slideThumb: 'assets/images/web/page_08.jpg',
      videoId: 'wsLVAP0mqXw',
      externalUrl: 'https://www.youtube.com/watch?v=wsLVAP0mqXw',
      externalLabel: 'Watch on YouTube',
      fullSheet: 'assets/images/page_08.png',
      tags: ['3D Animation', 'Autodesk Maya', 'Character Rigging', 'Motion Trail FX'],
      views: [
        { label: 'Play Character Animation', videoId: 'wsLVAP0mqXw', thumb: 'assets/images/crops/anim_python.jpg' },
        { label: 'Slide 08: Animation Showcase', src: 'assets/images/web/page_08.jpg' }
      ]
    },
    {
      id: 'shader-studies',
      featured: false,
      category: 'tech',
      badge: 'SHADERS & MATERIALS',
      year: 'LOOK-DEV STUDY',
      spec: 'EMISSIVE • GLASS',
      title: 'Holographic, Contour Wireframe & Refractive Glass Shaders',
      desc: 'การทดลองสร้าง Shader และ Material รูปแบบพิเศษ ทั้งแสงเรืองรอง Emissive, เส้นโครงร่าง Contour, แสงโปร่งใส Fresnel และการหักเหแสงของลูกแก้ว',
      thumb: 'assets/images/crops/shader_ducks.jpg',
      slideThumb: 'assets/images/web/page_16.jpg',
      fullSheet: 'assets/images/page_16.png',
      tags: ['Shader Look-Dev', 'Blender', 'Unity Engine', 'Materials'],
      views: [
        { label: 'Slide 16: Full Shader Sheet', src: 'assets/images/web/page_16.jpg' },
        { label: 'Shader Strip Closeup', src: 'assets/images/crops/shader_ducks.jpg' }
      ]
    },

    // ---------------- 2D ART & GAME UI ----------------
    {
      id: 'mobile-games',
      featured: false,
      category: '2d',
      badge: '2D GAMES (2023–2024)',
      year: 'UNITY 2D GAMES',
      spec: 'ENDLESS RUNNER & CARD',
      title: 'Juukie!! The Mouse (2024) & Dominion’s War: The Card Game (2023)',
      desc: 'ผลงานการออกแบบและพัฒนาเกม 2D บนมือถือ: Juukie!! The Mouse: Adventures (2D Endless Runner) และ Dominion’s War: The Card Game (2D Strategy Card Game)',
      thumb: 'assets/images/crops/dominion_cardgame.jpg',
      slideThumb: 'assets/images/web/page_19.jpg',
      fullSheet: 'assets/images/page_19.png',
      tags: ['Pixel Studio', 'Adobe Photoshop', 'Adobe Illustrator', 'Unity Engine'],
      views: [
        { label: 'Slide 19: Mobile Games Showcase', src: 'assets/images/web/page_19.jpg' },
        { label: 'Slide 20: Seamless Tiles & Characters', src: 'assets/images/web/page_20.jpg' },
        { label: 'Juukie Gameplay Screen', src: 'Project/Pic/Unity/Juukie.png' }
      ]
    },
    {
      id: 'horror-ui',
      featured: false,
      category: '2d',
      badge: 'PC GAME UX/UI',
      year: 'TiTLE’S NIGHTMARE',
      spec: 'HUD & MENU UI',
      title: 'TiTLE’s Nightmare : 2D Horror Shot — UX/UI Design',
      desc: 'การออกแบบ UX/UI สำหรับเกมยิงสยองขวัญ 2D บน PC ครอบคลุมไอคอนเกม หน้าเมนูหลัก หน้าจอ HUD ปืนลูกโม่ และหน้าตั้งค่าระบบเสียง',
      thumb: 'assets/images/crops/horror_hud.jpg',
      slideThumb: 'assets/images/web/page_18.jpg',
      fullSheet: 'assets/images/page_18.png',
      tags: ['UX/UI Design', 'Adobe Photoshop', 'Adobe Illustrator', 'Figma'],
      views: [
        { label: 'Slide 18: Full UX/UI Sheet', src: 'assets/images/web/page_18.jpg' },
        { label: 'Revolver Combat HUD', src: 'assets/images/crops/horror_hud.jpg' },
        { label: 'Title Screen Menu', src: 'assets/images/crops/horror_menu.jpg' }
      ]
    },
    {
      id: '2d-tiles-characters',
      featured: false,
      category: '2d',
      badge: '2D TILESET & SPRITES',
      year: 'UNITY 2D ASSETS',
      spec: 'TILE PALETTE',
      title: '2D Seamless Cave Tilesets & Character Designs',
      desc: 'การออกแบบตัวละคร 2D ทั้ง 6 คาแรกเตอร์ และการสร้าง Seamless Tile Palette ฉากถ้ำสำหรับประกอบฉากใน Unity 2D',
      thumb: 'assets/images/crops/2d_characters_sheet.jpg',
      slideThumb: 'assets/images/web/page_20.jpg',
      fullSheet: 'assets/images/page_20.png',
      tags: ['Unity 2D Tilemap', 'Character Sprites', 'Adobe Photoshop'],
      views: [
        { label: 'Slide 20: Full Sheet', src: 'assets/images/web/page_20.jpg' }
      ]
    },
    {
      id: 'noodle-art',
      featured: false,
      category: '2d',
      badge: '2D ILLUSTRATION',
      year: 'NOODLE ART',
      spec: 'LINE & COLOR',
      title: '2D Arts — Panoramic Noodle Art Illustration',
      desc: 'งานวาดภาพประกอบแนว Doodle / Noodle Art ขนาดพาโนรามา เปรียบเทียบฝั่งลงสีสันสดใสและฝั่งเส้น Line Art รายละเอียดสูง',
      thumb: 'assets/images/crops/noodle_art.jpg',
      slideThumb: 'assets/images/web/page_21.jpg',
      fullSheet: 'assets/images/page_21.png',
      tags: ['Digital Illustration', 'Procreate', 'Adobe Photoshop'],
      views: [
        { label: 'Slide 21: Noodle Art Sheet', src: 'assets/images/web/page_21.jpg' },
        { label: 'Panoramic Artwork Closeup', src: 'assets/images/crops/noodle_art.jpg' }
      ]
    },
    {
      id: '2d-portraits-collection',
      featured: false,
      category: '2d',
      badge: '2D PORTRAITS & VECTOR',
      year: '2D DIGITAL ART',
      spec: 'ILLUSTRATOR & PAINTING',
      title: '2D Digital Portraits & Adobe Illustrator Vector Artworks',
      desc: 'ชุดผลงานภาพวาดดิจิทัลพอร์ตเทรต โปสเตอร์คาแรกเตอร์สีสันจัดจ้าน และงานดราฟต์เวกเตอร์ใน Adobe Illustrator',
      thumb: 'assets/images/web/page_24.jpg',
      slideThumb: 'assets/images/web/page_24.jpg',
      fullSheet: 'assets/images/page_24.png',
      tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Procreate'],
      views: [
        { label: 'Slide 24: Character Posters', src: 'assets/images/web/page_24.jpg' },
        { label: 'Slide 23: Digital Portraits', src: 'assets/images/web/page_23.jpg' },
        { label: 'Slide 22: Adobe Illustrator Portraits', src: 'assets/images/web/page_22.jpg' }
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
          : `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`;
        const ctaText = isVideo ? 'คลิกเพื่อดูวิดีโอและสไลด์' : 'คลิกเพื่อดูสไลด์และภาพขยายใหญ่';

        const tagsHtml = item.tags
          .map((tag, idx) => `<span class="tag ${idx === 0 ? 'tag-category' : 'tag-tool'}">${tag}</span>`)
          .join('');

        return `
          <article class="Projects-item" data-open-id="${item.id}" tabindex="0" role="button" aria-label="${item.title}">
            <div class="Projects-image">
              <img src="${item.thumb}" alt="${item.title}" loading="lazy">
              <div class="artwork-type-badge">${item.badge}</div>
              <div class="Projects-overlay">
                <div class="artwork-play-btn">${actionIcon}</div>
                <span class="view-details">${isVideo ? 'Watch Animation' : 'Inspect Large Slide'}</span>
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
  // 2. RENDER LARGE SLIDE & ARTSTATION GALLERY (#gallery-grid)
  // =========================================================================
  const galleryGrid = document.getElementById('gallery-grid');
  const filterButtons = Array.from(document.querySelectorAll('.gallery-filter-btn'));
  const modeSlidesBtn = document.getElementById('mode-slides-btn');
  const modeRendersBtn = document.getElementById('mode-renders-btn');

  let activeGalleryFilter = 'all';
  let galleryDisplayMode = 'slides'; // 'slides' (extra-large full slides) or 'renders'

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
      characters: 'CHARACTERS & BOSSES',
      environments: 'ENVIRONMENTS & PROPS',
      tech: 'SHADERS & ANIMATION',
      '2d': '2D ART & GAME UI'
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
    galleryGrid.classList.toggle('slide-large-mode', galleryDisplayMode === 'slides');

    const list = getFilteredGalleryItems();
    galleryGrid.innerHTML = list
      .map((item) => {
        const displayImg = galleryDisplayMode === 'slides' ? (item.slideThumb || item.thumb) : item.thumb;
        const indicator = item.videoId
          ? '&#9654; VIDEO + SLIDE'
          : item.views && item.views.length > 1
            ? `${item.views.length} SLIDES / VIEWS`
            : 'FULL HD SLIDE';

        return `
          <div class="pure-gallery-item" data-open-id="${item.id}" tabindex="0" role="button" aria-label="${item.title}">
            <div class="tile-img-frame">
              <img src="${displayImg}" alt="${item.title}" loading="lazy">
              <span class="as-tile-indicator">${indicator}</span>
            </div>
            <div class="as-tile-footer">
              <div>
                <span class="as-tile-cat">${item.badge} &bull; ${item.year}</span>
                <div class="as-tile-title">${item.title}</div>
              </div>
              <span class="as-tile-zoom-pill">ขยายเต็มจอ &#10530;</span>
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

  if (modeSlidesBtn && modeRendersBtn) {
    modeSlidesBtn.addEventListener('click', () => {
      galleryDisplayMode = 'slides';
      modeSlidesBtn.classList.add('active');
      modeRendersBtn.classList.remove('active');
      renderGallery();
    });
    modeRendersBtn.addEventListener('click', () => {
      galleryDisplayMode = 'renders';
      modeRendersBtn.classList.add('active');
      modeSlidesBtn.classList.remove('active');
      renderGallery();
    });
  }

  // =========================================================================
  // 3. ARTSTATION EXTRA-LARGE SPLIT LIGHTBOX MODAL
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
    const views = item.views && item.views.length > 0 ? item.views : [{ label: 'Slide', src: item.slideThumb || item.thumb }];
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
        `<a href="${item.externalUrl}" target="_blank" rel="noopener noreferrer" class="as-action-link">${item.externalLabel || 'Open Link'} &#8599;</a>`
      );
    }
    if (item.fullSheet) {
      actionButtons.push(
        `<a href="${item.fullSheet}" target="_blank" rel="noopener noreferrer" class="as-action-link ${item.externalUrl ? 'secondary' : ''}">เปิดภาพสไลด์ 3K เต็มจอ &#8599;</a>`
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
  // 4. HERO SHOWCASE SLIDESHOW (5 SLIDES + PREV/NEXT ARROWS)
  // =========================================================================
  const heroImgs = Array.from(document.querySelectorAll('#hero-slides .hero-bg-media'));
  const heroDots = Array.from(document.querySelectorAll('#hero-dots .hero-dot'));
  const heroSlideLabel = document.getElementById('hero-slide-label');
  const heroPrevBtn = document.getElementById('hero-prev');
  const heroNextBtn = document.getElementById('hero-next');
  let heroIdx = 0;
  let heroTimer = null;

  function setHeroSlide(index) {
    if (!heroImgs.length) return;
    heroIdx = (index + heroImgs.length) % heroImgs.length;
    heroImgs.forEach((img, i) => img.classList.toggle('active', i === heroIdx));
    heroDots.forEach((dot, i) => dot.classList.toggle('active', i === heroIdx));
    if (heroSlideLabel && heroImgs[heroIdx]) {
      heroSlideLabel.textContent = heroImgs[heroIdx].getAttribute('data-caption') || '';
    }
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

  if (heroPrevBtn) {
    heroPrevBtn.addEventListener('click', () => {
      setHeroSlide(heroIdx - 1);
      startHeroTimer();
    });
  }

  if (heroNextBtn) {
    heroNextBtn.addEventListener('click', () => {
      setHeroSlide(heroIdx + 1);
      startHeroTimer();
    });
  }

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
