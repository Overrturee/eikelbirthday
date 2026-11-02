/**
 * ============================================================================
 * ROMANTIC BIRTHDAY WEBSITE — SCRIPT
 * Single Page Interactive Experience (Mobile-First)
 * ============================================================================
 */

/* ==========================================================================
   CONFIG & DATA (SILAKAN EDIT DI SINI DENGAN MUDAH)
   ========================================================================== */
const CONFIG = {
  // Data Utama
  namaCewek: "Aku",            // Ganti nama panggilan kamu (misal: "Karin", "Nia", "Sayang")
  namaCowok: "Eikel",          // Nama pacar kamu
  tanggalUltah: "2 November",  // Tanggal ulang tahun pacar
  jumlahBulan: 8,              // Jumlah bulan bersama
  pathMusik: "assets/music/song.mp3", // Path backsound (sudah otomatis disiapkan)

  // 10 Pesan Khusus (1 pesan per foto, urut dari bulan 1 sampai sekarang)
  messages: [
    {
      id: 1,
      photo: "assets/photos/photo-01.jpg",
      tag: "Bulan 1 — Awal Cerita",
      title: "Waktu semuanya masih serba canggung",
      place: "Momen Awal",
      text: "Lucu banget kalau ingat pertama kali kita jalan bareng. Duduknya masih kaku, bingung mau ngobrol apa, dan sama-sama jaim. Nggak nyangka orang yang dulu kikuk di depan aku sekarang jadi orang pertama yang aku cari setiap kali ada cerita seru."
    },
    {
      id: 2,
      photo: "assets/photos/photo-02.jpg",
      tag: "Bulan 2 — Mulai Nyaman",
      title: "Ketawa lepas pertama kita",
      place: "Momen Hangat",
      text: "Ini pas kita ketawa sampai perut sakit cuma gara-gara hal sepele yang orang lain pasti mikir aneh. Di hari itu aku sadar, ternyata bisa sedamai dan senyaman ini ya kalau lagi sama kamu."
    },
    {
      id: 3,
      photo: "assets/photos/photo-03.jpg",
      tag: "Bulan 3 — Kebiasaan Kecil",
      title: "Hal receh yang bikin betah",
      place: "Momen Random",
      text: "Makasih udah selalu sabar nungguin aku milih makanan yang ujung-ujungnya kamu juga yang habisin. Hal-hal kecil kayak gini yang bikin hari-hari biasa berasa spesial kalau lewatnya bareng kamu."
    },
    {
      id: 4,
      photo: "assets/photos/photo-04.jpg",
      tag: "Bulan 4 — Di Perjalanan",
      title: "Obrolan jalan pulang yang nggak mau buru-buru",
      place: "Di Perjalanan",
      text: "Aku paling suka momen pulang pas jalanan lagi sepi. Nggak ada topik berat, cuma dengerin kamu cerita tentang harimu dengan suara kamu yang tenang, rasanya damai banget."
    },
    {
      id: 5,
      photo: "assets/photos/photo-05.jpg",
      tag: "Bulan 5 — Saling Kenal",
      title: "Wajah kamu kalau lagi fokus",
      place: "Momen Favorit",
      text: "Diam-diam aku suka merhatiin ekspresi kamu pas lagi mikir keras atau antusias nyeritain hal yang kamu suka. Matamu langsung berbinar, dan kelihatan gantengnya nambah berkali-kali lipat."
    },
    {
      id: 6,
      photo: "assets/photos/photo-06.jpg",
      tag: "Bulan 6 — Tempat Pulang",
      title: "Rumah ternyaman sehabis hari capek",
      place: "Momen Syahdu",
      text: "Ada hari-hari di mana kerjaan atau tugas lagi berat banget, tapi ketemu kamu sebentar aja rasanya energiku langsung penuh lagi. Kamu selalu tahu cara bikin dunia terasa lebih ramah."
    },
    {
      id: 7,
      photo: "assets/photos/photo-07.jpg",
      tag: "Bulan 7 — Belajar Dewasa",
      title: "Tumbuh bareng setiap hari",
      place: "Momen Berharga",
      text: "Kita nggak selalu mulus, kadang ada bete dan salah paham kecil. Tapi yang bikin aku makin sayang adalah kita berdua selalu milih buat duduk bareng dan ngomong baik-baik, bukan saling menjauh."
    },
    {
      id: 8,
      photo: "assets/photos/photo-08.jpg",
      tag: "Bulan 8 — Delapan Bulan",
      title: "Delapan bulan yang terasa sekejap",
      place: "Hari Ini",
      text: "Delapan bulan ternyata lewat secepat ini kalau dijalanin sama orang yang tepat. Nggak ada satu haripun aku nyesel udah milih buat ada di samping kamu dan jalanin semua ini bareng-bareng."
    },
    {
      id: 9,
      photo: "assets/photos/photo-09.jpg",
      tag: "Tentang Kamu",
      title: "Yang paling aku syukuri dari kamu",
      place: "Paling Berarti",
      text: "Makasih udah jadi pasangan yang tulus, selalu ngehargai aku apa adanya, dan nggak pernah bikin aku ngerasa sendirian. Kamu nggak cuma pacar, tapi juga sahabat terbaik tempat aku bisa jadi diri sendiri."
    },
    {
      id: 10,
      photo: "assets/photos/photo-10.jpg",
      tag: "Puncak Hari Ini",
      title: "Selamat Ulang Tahun, Eikel!",
      place: "Spesial Hari Ini",
      text: "Dan hari ini, semesta ngerayain hari lahirnya orang paling istimewa buat aku. Semoga langkahmu makin dimudahkan, mimpi-mimpimu pelan-pelan tercapai, dan hatimu selalu dipenuhi damai."
    }
  ],

  // Surat Penutup di Bagian Grand Finale
  finalLetter: `Selamat ulang tahun yang paling hangat buat kamu, Eikel.

Delapan bulan ini mungkin baru bab awal dari cerita kita yang masih panjang. Tapi dari delapan bulan ini, aku belajar banyak tentang arti sabar, saling mengerti, dan betapa berharganya punya seseorang yang selalu ada di setiap musim.

Terima kasih sudah lahir ke dunia, dan terima kasih sudah memilih untuk berjalan bersamaku. Semoga di usia barumu ini, kamu selalu diberikan kesehatan, kelapangan hati, rezeki yang berkah, dan kebahagiaan yang melimpah.

Apapun yang ada di depan nanti, semoga aku tetap jadi orang yang ada di sebelahmu untuk ngerayain banyak ulang tahun berikutnya.

I love you, today, tomorrow, and always.`
};

/* ==========================================================================
   APP CONTROLLER & STATE
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Sync CONFIG data with DOM text
  injectConfigToDOM();

  // 2. Generate detailed Gerbera Flower SVG Petals
  buildGerberaPetals();

  // 3. Render Story Timeline Cards
  renderStoryTimeline();

  // 4. Initialize Background Ambient Canvas (Drifting stardust)
  initAmbientCanvas();

  // 5. Initialize Audio Management
  initAudioPlayer();

  // 6. Setup Gate Screen & Bloom Orchestration
  initGateAndBloom();

  // 7. Setup Scroll Animations & Lightbox
  initScrollObserver();
  initLightbox();

  // 8. Setup Closing Interactions & Confetti
  initClosingSection();
});

/* ==========================================================================
   1. INJECT CONFIG DATA TO DOM
   ========================================================================== */
function injectConfigToDOM() {
  const safeSet = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  safeSet("gateRecipientName", CONFIG.namaCowok);
  safeSet("gateSubtitle", `${CONFIG.jumlahBulan} bulan cerita kita, dan satu hari yang paling istimewa.`);
  safeSet("metaDuration", `${CONFIG.jumlahBulan} Bulan Bersama`);
  safeSet("closingRecipientName", CONFIG.namaCowok);
  safeSet("closingSenderName", CONFIG.namaCewek);

  const letterBody = document.getElementById("closingLetterBody");
  if (letterBody) {
    letterBody.textContent = CONFIG.finalLetter;
  }

  const closingDate = document.getElementById("closingDateFull");
  if (closingDate) {
    closingDate.textContent = `${CONFIG.tanggalUltah} • 8 Bulan Bersama`;
  }
}

/* ==========================================================================
   2. BUILD GERBERA FLOWER SVG PETALS
   - 3 Lapisan kelopak lebat & hidup (Outer, Mid, Inner)
   - Setiap helai dibungkus <g transform="rotate(...)"> agar rotasi 360° TIDAK pernah tertimpa oleh CSS
   - Bentuk kelopak lebar, melingkar utuh, dan hidup
   ========================================================================== */
function buildGerberaPetals() {
  const flowers = [
    {
      outerId: "petalsOuterLeft",
      midId: "petalsMidLeft",
      innerId: "petalsInnerLeft",
      gradOuter: "url(#petalGradWhite)",
      gradMid: "url(#petalGradWhite)",
      gradInner: "url(#petalGradWhiteInner)",
      stroke: "rgba(195, 208, 224, 0.45)", // subtle grey-blue hint contour
      outerLen: 102,
      midLen: 84,
      innerLen: 64,
      outerCount: 28,
      midCount: 24,
      innerCount: 20
    },
    {
      outerId: "petalsOuterCenter",
      midId: "petalsMidCenter",
      innerId: "petalsInnerCenter",
      gradOuter: "url(#petalGradBlack)",
      gradMid: "url(#petalGradBlack)",
      gradInner: "url(#petalGradBlackInner)",
      stroke: "rgba(232, 208, 142, 0.65)", // luminous golden-silver rim light!
      outerLen: 110,
      midLen: 90,
      innerLen: 70,
      outerCount: 30,
      midCount: 26,
      innerCount: 22
    },
    {
      outerId: "petalsOuterRight",
      midId: "petalsMidRight",
      innerId: "petalsInnerRight",
      gradOuter: "url(#petalGradYellow)",
      gradMid: "url(#petalGradYellow)",
      gradInner: "url(#petalGradYellowInner)",
      stroke: "rgba(255, 235, 120, 0.45)",
      outerLen: 104,
      midLen: 86,
      innerLen: 66,
      outerCount: 28,
      midCount: 24,
      innerCount: 20
    }
  ];

  flowers.forEach(f => {
    const outerEl = document.getElementById(f.outerId);
    const midEl = document.getElementById(f.midId);
    const innerEl = document.getElementById(f.innerId);

    if (outerEl) {
      outerEl.innerHTML = createPetalTier(f.outerCount, f.outerLen, 21, f.gradOuter, f.stroke, 0, "tier-outer");
    }
    if (midEl) {
      midEl.innerHTML = createPetalTier(f.midCount, f.midLen, 18, f.gradMid, f.stroke, 360 / (f.midCount * 2), "tier-mid");
    }
    if (innerEl) {
      innerEl.innerHTML = createPetalTier(f.innerCount, f.innerLen, 14.5, f.gradInner, f.stroke, 360 / (f.innerCount * 4), "tier-inner");
    }
  });
}

function getGerberaPetalPath(length, width) {
  const hw = width / 2;
  // Natural realistic Gerbera ray-floret contour with soft rounded tip
  return `M 0 0 
    C -${(hw * 0.45).toFixed(1)} -${(length * 0.22).toFixed(1)}, -${hw.toFixed(1)} -${(length * 0.62).toFixed(1)}, -${(hw * 0.9).toFixed(1)} -${(length * 0.88).toFixed(1)} 
    C -${(hw * 0.65).toFixed(1)} -${(length * 0.98).toFixed(1)}, -${(hw * 0.25).toFixed(1)} -${length.toFixed(1)}, 0 -${(length * 1.02).toFixed(1)} 
    C ${(hw * 0.25).toFixed(1)} -${length.toFixed(1)}, ${(hw * 0.65).toFixed(1)} -${(length * 0.98).toFixed(1)}, ${(hw * 0.9).toFixed(1)} -${(length * 0.88).toFixed(1)} 
    C ${hw.toFixed(1)} -${(length * 0.62).toFixed(1)}, ${(hw * 0.45).toFixed(1)} -${(length * 0.22).toFixed(1)}, 0 0 Z`;
}

function createPetalTier(count, length, width, fill, stroke, offsetAngle, tierClass) {
  let html = "";
  const step = 360 / count;
  const pathData = getGerberaPetalPath(length, width);

  for (let i = 0; i < count; i++) {
    const angle = (i * step) + offsetAngle;
    html += `
      <g class="petal-item" transform="rotate(${angle.toFixed(2)})">
        <path class="petal-blade ${tierClass}" d="${pathData}" fill="${fill}" stroke="${stroke}" stroke-width="0.85" />
      </g>`;
  }
  return html;
}

/* ==========================================================================
   3. RENDER STORY TIMELINE CARDS
   ========================================================================== */
function renderStoryTimeline() {
  const container = document.getElementById("timelineContainer");
  if (!container) return;

  const fallbackPlaceholder = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="100%" height="100%" fill="%231a1a24"/><text x="50%" y="48%" font-family="sans-serif" font-size="14" fill="%23c2beb5" text-anchor="middle">Foto Kenangan Kita</text><text x="50%" y="58%" font-family="sans-serif" font-size="24" fill="%23d4af37" text-anchor="middle">💛</text></svg>`;

  container.innerHTML = CONFIG.messages.map((item, index) => {
    const isEven = index % 2 === 1;
    const directionClass = isEven ? "direction-even" : "direction-odd";
    const rotation = isEven ? "1.2deg" : "-1.2deg";

    return `
      <article class="story-card ${directionClass} reveal-on-scroll" data-id="${item.id}">
        <!-- Media (Polaroid Frame) -->
        <div class="card-media">
          <div class="polaroid-frame" style="transform: rotate(${rotation});" data-index="${index}" role="button" tabindex="0" aria-label="Lihat foto ${item.title}">
            <div class="polaroid-img-wrapper">
              <img 
                src="${item.photo}" 
                alt="${item.title}" 
                class="polaroid-img" 
                loading="lazy" 
                onerror="this.onerror=null; this.src='${fallbackPlaceholder}';"
              >
              <div class="polaroid-zoom-hint">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <span>Perbesar</span>
              </div>
            </div>
            <div class="polaroid-caption-bar">
              <span class="polaroid-order">#${String(item.id).padStart(2, "0")}</span>
              <span class="polaroid-place">${item.place || "Kenangan Indah"}</span>
            </div>
          </div>
        </div>

        <!-- Narrative (Text Message) -->
        <div class="card-narrative">
          <span class="narrative-tag">✦ ${item.tag}</span>
          <h3 class="narrative-title">${item.title}</h3>
          <p class="narrative-text">${item.text}</p>
        </div>
      </article>
    `;
  }).join("");

  // Attach click listeners to polaroid frames for Lightbox
  container.querySelectorAll(".polaroid-frame").forEach(frame => {
    frame.addEventListener("click", () => {
      const idx = parseInt(frame.getAttribute("data-index"), 10);
      openLightbox(idx);
    });
    frame.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const idx = parseInt(frame.getAttribute("data-index"), 10);
        openLightbox(idx);
      }
    });
  });
}

/* ==========================================================================
   4. AUDIO MANAGEMENT (Safe autoplay unlock with smooth volume fade-in)
   ========================================================================== */
let audioCtx = {
  element: null,
  isPlaying: false,
  fadeInterval: null
};

function initAudioPlayer() {
  const audio = document.getElementById("bgMusic");
  const controller = document.getElementById("audioController");
  const toggleBtn = document.getElementById("audioToggleBtn");
  const tooltip = document.getElementById("audioTooltip");

  if (!audio) return;
  audioCtx.element = audio;
  audio.volume = 0; // Starts silent for gentle fade-in

  toggleBtn.addEventListener("click", () => {
    if (audioCtx.isPlaying) {
      pauseMusic();
      showToast("Musik dimatikan");
    } else {
      playMusic(true);
      showToast("Musik dinyalakan");
    }
  });

  function pauseMusic() {
    audio.pause();
    audioCtx.isPlaying = false;
    controller.classList.add("is-muted");
    if (tooltip) tooltip.textContent = "Nyalakan";
  }

  function playMusic(fadeFast = false) {
    audio.play().then(() => {
      audioCtx.isPlaying = true;
      controller.classList.remove("is-muted");
      if (tooltip) tooltip.textContent = "Musik Nyala";
      fadeVolumeTo(0.7, fadeFast ? 800 : 2500);
    }).catch(err => {
      console.warn("Autoplay was blocked:", err);
    });
  }

  window.playBackgroundMusic = playMusic;
  window.pauseBackgroundMusic = pauseMusic;
}

function fadeVolumeTo(targetVolume, durationMs) {
  const audio = audioCtx.element;
  if (!audio) return;
  clearInterval(audioCtx.fadeInterval);

  const startVolume = audio.volume;
  const stepTime = 50;
  const steps = durationMs / stepTime;
  const stepVolume = (targetVolume - startVolume) / steps;
  let currentStep = 0;

  audioCtx.fadeInterval = setInterval(() => {
    currentStep++;
    const newVol = Math.min(1, Math.max(0, audio.volume + stepVolume));
    audio.volume = newVol;
    if (currentStep >= steps || Math.abs(audio.volume - targetVolume) < 0.02) {
      audio.volume = targetVolume;
      clearInterval(audioCtx.fadeInterval);
    }
  }, stepTime);
}

/* ==========================================================================
   5. GATE SCREEN & FLOWER BLOOM ORCHESTRATION
   Choreography (Total Durasi: 10 - 12 Detik):
   a. Tiga batang tumbuh naik dari titik bawah (menjadi satu rumpun dari titik bawah,
      sedikit melengkung natural dengan tinggi berbeda).
   b. Daun muncul bertahap sepanjang batang (scale dari 0, stagger per daun), lalu
      rumpun daun tebal dan rumput tipis melengkung muncul di dasar, kiri dan kanan.
   c. Kepala bunga mekar paling akhir, kelopak terbuka satu per satu dari tengah ke
      luar dengan easing halus. Tiap bunga mulai dengan jeda berbeda (stagger).
   d. Setelah mekar: sway sangat lembut pada batang dan daun, glow berdenyut pelan
      di sekitar bunga, dan partikel kecil kuning keemasan melayang naik pelan seperti
      kunang-kunang.
   ========================================================================== */
function initGateAndBloom() {
  const gateScreen = document.getElementById("gateScreen");
  const openBtn = document.getElementById("openBtn");
  const skipBtn = document.getElementById("skipBloomBtn");
  const bloomHeader = document.getElementById("bloomHeader");
  const scrollCue = document.getElementById("scrollCue");
  const auraGlow = document.getElementById("flowerGlowAura");
  const clusterGlowCircle = document.getElementById("clusterGlowCircle");
  const clusterGroup = document.getElementById("flowerClusterGroup");

  openBtn.addEventListener("click", () => {
    // 1. Play background music (fade-in volume)
    if (window.playBackgroundMusic) {
      window.playBackgroundMusic();
    }

    // 2. Dismiss gate screen
    gateScreen.classList.add("is-dismissed");

    // 3. Start the 4-step bloom animation (~10-12 seconds total)
    startBloomAnimation();
  });

  // Skip animation button for quick navigation
  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      instantBloomAll();
      unlockScrollAndCue();
      const storyEl = document.getElementById("storyWrapper");
      if (storyEl) {
        storyEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  function startBloomAnimation() {
    // Reveal warm background glow
    setTimeout(() => {
      if (auraGlow) auraGlow.classList.add("is-active");
      if (clusterGlowCircle) clusterGlowCircle.classList.add("is-active");
    }, 400);

    // ------------------------------------------------------------------------
    // TAHAP A: TIGA BATANG TUMBUH NAIK DARI TITIK BAWAH (0.6s - 4.2s)
    // Tiga batang tumbuh dari satu titik bawah (400, 860) melengkung natural
    // ------------------------------------------------------------------------
    setTimeout(() => {
      const stemLeft = document.getElementById("stemLeft");
      if (stemLeft) stemLeft.classList.add("is-grown");
    }, 600);

    setTimeout(() => {
      const stemRight = document.getElementById("stemRight");
      if (stemRight) stemRight.classList.add("is-grown");
    }, 900);

    setTimeout(() => {
      const stemCenter = document.getElementById("stemCenter");
      if (stemCenter) stemCenter.classList.add("is-grown");
    }, 1200);

    // ------------------------------------------------------------------------
    // TAHAP B: DAUN BERTAHAP SEPANJANG BATANG + RUMPUN DAUN TEBAL & RUMPUT (1.8s - 5.2s)
    // ------------------------------------------------------------------------
    // Daun muncul bertahap sepanjang batang (scale dari 0, rotate halus)
    const stemLeavesSchedule = [
      { id: "leafL1", delay: 1800 },
      { id: "leafR1", delay: 2100 },
      { id: "leafC1", delay: 2400 },
      { id: "leafL2", delay: 2800 },
      { id: "leafR2", delay: 3100 },
      { id: "leafC2", delay: 3400 },
      { id: "leafC3", delay: 3700 }
    ];

    stemLeavesSchedule.forEach(item => {
      setTimeout(() => {
        const leaf = document.getElementById(item.id);
        if (leaf) leaf.classList.add("is-unfurled");
      }, item.delay);
    });

    // Rumpun daun tebal di dasar muncul mengembang
    setTimeout(() => {
      const baseLeaves = document.getElementById("baseLeavesGroup");
      if (baseLeaves) baseLeaves.classList.add("is-unfurled");
    }, 3200);

    // Rumput tipis melengkung di dasar muncul bertahap ke kiri dan kanan
    const grassBlades = document.querySelectorAll(".grass-blade");
    grassBlades.forEach((blade, idx) => {
      setTimeout(() => {
        blade.classList.add("is-grown");
      }, 3500 + (idx * 160));
    });

    // ------------------------------------------------------------------------
    // TAHAP C: KEPALA BUNGA MEKAR PALING AKHIR (4.8s - 9.8s)
    // Kelopak terbuka satu per satu dari tengah ke luar, tiap bunga ada jeda (stagger)
    // ------------------------------------------------------------------------

    // BUNGA 1 (PUTIH - KIRI): mulai mekar di ~4.8s
    setTimeout(() => {
      bloomFlowerHead({
        calyxId: "calyxLeft",
        headId: "headLeft",
        outerId: "petalsOuterLeft",
        midId: "petalsMidLeft",
        innerId: "petalsInnerLeft",
        discId: "centerDiscLeft",
        unitId: "flowerGroupLeft"
      });
    }, 4800);

    // BUNGA 2 (HITAM - TENGAH GAGAH): mulai mekar di ~6.4s
    setTimeout(() => {
      bloomFlowerHead({
        calyxId: "calyxCenter",
        headId: "headCenter",
        outerId: "petalsOuterCenter",
        midId: "petalsMidCenter",
        innerId: "petalsInnerCenter",
        discId: "centerDiscCenter",
        unitId: "flowerGroupCenter"
      });
    }, 6400);

    // BUNGA 3 (KUNING - KANAN): mulai mekar di ~7.8s
    setTimeout(() => {
      bloomFlowerHead({
        calyxId: "calyxRight",
        headId: "headRight",
        outerId: "petalsOuterRight",
        midId: "petalsMidRight",
        innerId: "petalsInnerRight",
        discId: "centerDiscRight",
        unitId: "flowerGroupRight"
      });
    }, 7800);

    // ------------------------------------------------------------------------
    // TAHAP D: SETELAH MEKAR (10s - 12s)
    // Sway lembut satu rumpun, glow berdenyut, kunang-kunang melayang, teks muncul
    // ------------------------------------------------------------------------
    setTimeout(() => {
      // 1. Sway sangat lembut pada batang dan daun (satu rumpun menyatu)
      if (clusterGroup) clusterGroup.classList.add("is-swaying");

      // 2. Partikel kecil kuning keemasan melayang naik pelan seperti kunang-kunang
      spawnBouquetFireflies();

      // 3. Tampilkan kutipan & petunjuk scroll
      if (bloomHeader) bloomHeader.classList.add("is-visible");
      unlockScrollAndCue();
    }, 10200);
  }

  function bloomFlowerHead({ calyxId, headId, outerId, midId, innerId, discId, unitId }) {
    const calyx = document.getElementById(calyxId);
    const head = document.getElementById(headId);
    const disc = document.getElementById(discId);
    const unit = document.getElementById(unitId);

    if (calyx) calyx.classList.add("is-visible");
    if (head) head.classList.add("is-bloomed");

    // Kelopak mekar 360° berlapis dari luar ke dalam dengan ripple stagger halus
    bloomPetalTier(outerId, 120, 20);
    bloomPetalTier(midId, 360, 22);
    bloomPetalTier(innerId, 640, 24);

    // Pusat floret terbuka mekar
    setTimeout(() => {
      if (disc) disc.classList.add("is-open");
    }, 950);

    // Micro sway pada kepala bunga
    setTimeout(() => {
      if (unit) unit.classList.add("is-swaying");
    }, 1200);
  }

  function bloomPetalTier(containerId, startDelayMs, staggerStepMs) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const blades = Array.from(container.querySelectorAll(".petal-blade"));
    blades.forEach((b, idx) => {
      setTimeout(() => {
        b.classList.add("is-open");
      }, startDelayMs + (idx * staggerStepMs));
    });
  }

  function unlockScrollAndCue() {
    document.body.classList.remove("is-locked");
    if (scrollCue) scrollCue.classList.add("is-visible");
  }

  function instantBloomAll() {
    if (auraGlow) auraGlow.classList.add("is-active");
    if (clusterGlowCircle) clusterGlowCircle.classList.add("is-active");
    document.querySelectorAll(".stem").forEach(el => el.classList.add("is-grown"));
    document.querySelectorAll(".stem-leaf").forEach(el => el.classList.add("is-unfurled"));
    const baseLeaves = document.getElementById("baseLeavesGroup");
    if (baseLeaves) baseLeaves.classList.add("is-unfurled");
    document.querySelectorAll(".grass-blade").forEach(el => el.classList.add("is-grown"));
    document.querySelectorAll(".calyx").forEach(el => el.classList.add("is-visible"));
    document.querySelectorAll(".flower-head").forEach(el => el.classList.add("is-bloomed"));
    document.querySelectorAll(".petal-blade").forEach(el => el.classList.add("is-open"));
    document.querySelectorAll(".center-disc").forEach(el => el.classList.add("is-open"));
    document.querySelectorAll(".flower-unit").forEach(el => el.classList.add("is-swaying"));
    if (clusterGroup) clusterGroup.classList.add("is-swaying");
    if (bloomHeader) bloomHeader.classList.add("is-visible");
    spawnBouquetFireflies();
  }
}

/* ==========================================================================
   KUNANG-KUNANG / FLOATING GOLDEN FIREFLIES OVER BOUQUET
   ========================================================================== */
function spawnBouquetFireflies() {
  const container = document.getElementById("bouquetFireflies");
  if (!container || container.children.length > 0) return;

  const fireflyCount = 20;
  let svgContent = "";

  for (let i = 0; i < fireflyCount; i++) {
    // Coordinate region around the 3 flower heads: x between 220 and 580, y between 180 and 520
    const cx = Math.floor(Math.random() * 380 + 210);
    const cy = Math.floor(Math.random() * 340 + 190);
    const r = (Math.random() * 2.2 + 1.2).toFixed(1);
    const delay = (Math.random() * 4).toFixed(2);
    const duration = (Math.random() * 2.5 + 3.5).toFixed(2);

    svgContent += `
      <circle cx="${cx}" cy="${cy}" r="${r}" opacity="0.65" style="animation-delay: ${delay}s; animation-duration: ${duration}s;">
      </circle>
    `;
  }

  container.innerHTML = svgContent;
}

/* ==========================================================================
   6. SCROLL REVEAL OBSERVER & LIGHTBOX
   ========================================================================== */
function initScrollObserver() {
  const elementsToReveal = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  });

  elementsToReveal.forEach(el => observer.observe(el));
}

let activeLightboxIdx = null;

function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxCloseBtn");
  const backdrop = document.getElementById("lightboxBackdrop");

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    activeLightboxIdx = null;
  };

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-active")) {
      closeModal();
    }
  });
}

function openLightbox(index) {
  const modal = document.getElementById("lightboxModal");
  const imgEl = document.getElementById("lightboxImg");
  const tagEl = document.getElementById("lightboxTag");
  const titleEl = document.getElementById("lightboxTitle");
  const descEl = document.getElementById("lightboxDesc");

  const item = CONFIG.messages[index];
  if (!item || !modal) return;

  activeLightboxIdx = index;
  imgEl.src = item.photo;
  tagEl.textContent = item.tag;
  titleEl.textContent = item.title;
  descEl.textContent = item.text;

  modal.classList.add("is-active");
  modal.setAttribute("aria-hidden", "false");
}

/* ==========================================================================
   7. CLOSING SECTION & CELEBRATION (Stardust & Floating Hearts)
   ========================================================================== */
function initClosingSection() {
  const loveBtn = document.getElementById("sendLoveBtn");
  const loveBadge = document.getElementById("loveCountBadge");
  const replayBtn = document.getElementById("replayBtn");

  let loveCount = parseInt(localStorage.getItem("ultah_love_count") || "0", 10);
  if (loveBadge) loveBadge.textContent = loveCount;

  if (loveBtn) {
    loveBtn.addEventListener("click", (e) => {
      loveCount++;
      if (loveBadge) loveBadge.textContent = loveCount;
      localStorage.setItem("ultah_love_count", loveCount);

      // Spawn floating hearts
      spawnFloatingHeart(e.clientX, e.clientY);
      showToast(`Peluk hangat terkirim! (${loveCount}x) 💖`);
    });
  }

  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Initialize Confetti Canvas (Delicate falling petals & gold stardust)
  initConfettiCanvas();
}

function spawnFloatingHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = ["💖", "🌸", "✨", "💛", "🤍"][Math.floor(Math.random() * 5)];

  const randomDx = (Math.random() - 0.5) * 80;
  const randomRot = (Math.random() - 0.5) * 60;
  heart.style.setProperty("--dx", `${randomDx}px`);
  heart.style.setProperty("--rot", `${randomRot}deg`);
  heart.style.left = `${x || window.innerWidth / 2}px`;
  heart.style.top = `${y || window.innerHeight / 2}px`;

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1900);
}

/* ==========================================================================
   8. AMBIENT BACKGROUND & CELEBRATION CANVASES
   - Canvas 1 (#ambientCanvas): Very subtle floating warm motes
   - Canvas 2 (#confettiCanvas): Falling gold flakes and petals at closing
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambientCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Subtle fine stars with low opacity (0.12 - 0.35)
  const starCount = window.innerWidth < 600 ? 55 : 110;
  const stars = Array.from({ length: starCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 0.9 + 0.35, // tiny delicate stars
    baseAlpha: Math.random() * 0.25 + 0.1, // low opacity
    twinkleSpeed: Math.random() * 0.015 + 0.005,
    twinklePhase: Math.random() * Math.PI * 2,
    vx: (Math.random() - 0.5) * 0.08,
    vy: -Math.random() * 0.15 - 0.04,
    isGold: Math.random() > 0.6
  }));

  function loop() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach(s => {
      s.x += s.vx;
      s.y += s.vy;
      s.twinklePhase += s.twinkleSpeed;

      if (s.y < -5) {
        s.y = height + 5;
        s.x = Math.random() * width;
      }
      if (s.x < -5) s.x = width + 5;
      if (s.x > width + 5) s.x = -5;

      const currentAlpha = Math.max(0.05, s.baseAlpha + Math.sin(s.twinklePhase) * 0.12);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.isGold
        ? `rgba(245, 214, 114, ${currentAlpha.toFixed(3)})`
        : `rgba(240, 240, 245, ${currentAlpha.toFixed(3)})`;
      ctx.fill();
    });

    requestAnimationFrame(loop);
  }

  loop();
}

function initConfettiCanvas() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener("resize", () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  // Delicate petals and gold stardust
  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 8 + 4,
    speedY: Math.random() * 1.2 + 0.6,
    speedX: (Math.random() - 0.5) * 0.8,
    angle: Math.random() * 360,
    angularSpeed: (Math.random() - 0.5) * 2,
    color: Math.random() > 0.5
      ? "rgba(212, 175, 55, 0.45)" // Gold dust
      : (Math.random() > 0.5 ? "rgba(245, 194, 66, 0.35)" : "rgba(245, 240, 230, 0.4)") // Soft Gerbera Petal
  }));

  function loop() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.y * 0.02) * 0.4;
      p.angle += p.angularSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);

      // Draw delicate petal shape
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size * 0.5, p.size, 0, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      ctx.restore();
    });

    requestAnimationFrame(loop);
  }

  loop();
}

/* ==========================================================================
   TOAST HELPER
   ========================================================================== */
let toastTimeout = null;
function showToast(msg) {
  const toast = document.getElementById("toastNotice");
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}
