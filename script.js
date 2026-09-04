/* =========================================================
   PERSONALIZE EVERYTHING DOWN HERE — no need to touch logic below
   ========================================================= */
const birthdayConfig = {
  sisterName: "Bengi",
  yourName: "Your (much cooler, much older) sibling",
  musicSrc: "assets/music/birthday.mp3",
};

// Timeline / "Where It All Began" — add as many as you want
const storyMoments = [
  { image: "assets/photos/photo1.jpg", title: "The beginning", text: "The day you showed up and ruined my only-child privileges forever." },
  { image: "assets/photos/photo2.jpg", title: "The chaos years", text: "Every time you copied everything I did, then acted like it was your idea." },
  { image: "assets/photos/photo3.jpg", title: "The growing up", text: "Somewhere along the way, the annoying kid became someone I'd fight anyone for." },
  { image: "assets/photos/photo4.jpg", title: "Now", text: "Still stealing my stuff. Still my favorite person to complain to." },
];

// Memory gallery — 8 to 12 works best
const memories = [
  { image: "assets/photos/mem1.jpg", caption: "Our favorite chaos ❤️" },
  { image: "assets/photos/mem2.jpg", caption: "That day 😂" },
  { image: "assets/photos/mem3.jpg", caption: "You, being extra" },
  { image: "assets/photos/mem4.jpg", caption: "The trip we still talk about" },
  { image: "assets/photos/mem5.jpg", caption: "Unfiltered chaos" },
  { image: "assets/photos/mem6.jpg", caption: "This face, always" },
  { image: "assets/photos/mem7.jpg", caption: "Best day of that year" },
  { image: "assets/photos/mem8.jpg", caption: "You owe me for this photo" },
];

// Funny section — setup / punchline pairs
const funnyLines = [
  { setup: "Steal my stuff and somehow make it disappear.", punch: "I still haven't found that charger." },
  { setup: "Annoy me for 10 straight minutes\u2026", punch: "\u2026then make me laugh 30 seconds later." },
  { setup: "Say \u201cI'm not hungry\u201d\u2026", punch: "\u2026and then eat half my food anyway." },
  { setup: "Lose every argument\u2026", punch: "\u2026and still somehow win." },
];

// "A Few Things I Love About You"
const loveReasons = [
  "Your kindness",
  "The way you fight for the people you love",
  "Your stubbornness (most days)",
  "How you never let me take myself too seriously",
  "The fact that you're simply YOU",
  "That you're still, somehow, my favorite person to annoy",
];

// The letter — edit freely, line breaks become paragraph breaks
const letterText = null; // leave null to use the pre-written HTML lines in index.html

// Secret / easter egg message
const secretMessage = "Just between us \u2014 out of everyone, I'd still pick you as my sister, every single time. Don't let it go to your head.";


/* =========================================================
   CORE LOGIC \u2014 you shouldn't need to edit below this line
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.matchMedia("(max-width: 640px)").matches || ("ontouchstart" in window);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- star field ---------- */
  const starField = document.getElementById("starField");
  const starCount = isMobile ? 40 : 90;
  for (let i = 0; i < starCount; i++) {
    const s = document.createElement("div");
    s.className = "star";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    const size = Math.random() * 2 + 1;
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.setProperty("--max-op", (Math.random() * 0.6 + 0.3).toFixed(2));
    s.style.animationDelay = (Math.random() * 2) + "s, " + (Math.random() * 4) + "s";
    starField.appendChild(s);
  }

  /* ---------- opening sequence ---------- */
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");
  const enterBtn = document.getElementById("enterBtn");

  setTimeout(() => line1.classList.add("show"), 300);
  setTimeout(() => { line1.classList.remove("show"); line1.style.opacity = 0; line2.classList.add("show"); }, 2300);
  setTimeout(() => { line2.classList.remove("show"); line2.style.opacity = 0; line3.classList.add("show"); }, 4600);
  setTimeout(() => enterBtn.classList.add("show"), 6600);

  const opening = document.getElementById("opening");
  const bgMusic = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");
  const particleBurst = document.getElementById("particleBurst");

  enterBtn.addEventListener("click", () => {
    // start music (best-effort, browsers require the gesture — this click counts)
    bgMusic.volume = 0.5;
    bgMusic.play().then(() => {
      musicToggle.classList.add("playing");
    }).catch(() => { /* autoplay blocked, user can press the toggle */ });

    opening.classList.add("hidden");
    musicToggle.classList.add("visible");
    burstGoldParticles();
    document.body.style.overflow = "auto";
  });

  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {});
      musicToggle.classList.add("playing");
    } else {
      bgMusic.pause();
      musicToggle.classList.remove("playing");
    }
  });

  function burstGoldParticles() {
    const count = isMobile ? 18 : 36;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "gold-particle";
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 220 + 60;
      const x = Math.cos(angle) * dist;
      const y = Math.sin(angle) * dist;
      p.style.left = "50%";
      p.style.top = "38%";
      p.style.transition = `transform ${1 + Math.random()}s cubic-bezier(.22,1,.36,1), opacity ${1.4 + Math.random()}s ease`;
      particleBurst.appendChild(p);
      requestAnimationFrame(() => {
        p.style.transform = `translate(${x}px, ${y}px)`;
        p.style.opacity = "0";
      });
      setTimeout(() => p.remove(), 2600);
    }
  }

  /* ---------- cursor glow ---------- */
  if (!isMobile) {
    const glow = document.getElementById("cursorGlow");
    window.addEventListener("mousemove", (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  }

  /* ---------- smooth scroll buttons ---------- */
  document.querySelectorAll(".scroll-to").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------- generic scroll reveal ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll(".reveal-fade, .story-line, .funny-pair, .love-card, .letter-line, .cake-lead, .final-lead")
    .forEach(el => revealObserver.observe(el));

  /* ---------- build timeline ---------- */
  const timeline = document.getElementById("timeline");
  storyMoments.forEach((m, i) => {
    const item = document.createElement("div");
    item.className = "timeline-item" + (i % 2 === 1 ? " right" : "");
    item.innerHTML = `
      <div class="timeline-photo" style="background-image:url('${m.image}')"></div>
      <div class="timeline-caption"><span>${m.title}</span>${m.text}</div>
    `;
    timeline.appendChild(item);
    revealObserver.observe(item);
  });

  /* ---------- build gallery ---------- */
  const galleryGrid = document.getElementById("galleryGrid");
  memories.forEach((mem, i) => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.innerHTML = `
      <img src="${mem.image}" alt="${mem.caption}" loading="lazy"
        onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg,#241a3b,#3a2b52)';">
      <div class="gallery-caption">${mem.caption}</div>
    `;
    card.addEventListener("click", () => openLightbox(i));
    galleryGrid.appendChild(card);
  });

  /* ---------- lightbox ---------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  let lightboxIndex = 0;

  function openLightbox(i) {
    lightboxIndex = i;
    updateLightbox();
    lightbox.classList.add("open");
  }
  function updateLightbox() {
    const m = memories[lightboxIndex];
    lightboxImg.src = m.image;
    lightboxImg.alt = m.caption;
    lightboxCaption.textContent = m.caption;
  }
  document.getElementById("lightboxClose").addEventListener("click", () => lightbox.classList.remove("open"));
  document.getElementById("lightboxPrev").addEventListener("click", () => {
    lightboxIndex = (lightboxIndex - 1 + memories.length) % memories.length;
    updateLightbox();
  });
  document.getElementById("lightboxNext").addEventListener("click", () => {
    lightboxIndex = (lightboxIndex + 1) % memories.length;
    updateLightbox();
  });
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.classList.remove("open"); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") lightbox.classList.remove("open");
    if (e.key === "ArrowLeft") document.getElementById("lightboxPrev").click();
    if (e.key === "ArrowRight") document.getElementById("lightboxNext").click();
  });

  /* ---------- build funny section ---------- */
  const funnyList = document.getElementById("funnyList");
  funnyLines.forEach(line => {
    const el = document.createElement("div");
    el.className = "funny-pair";
    el.innerHTML = `<p class="setup">${line.setup}</p><p class="punch">${line.punch}</p>`;
    funnyList.appendChild(el);
    revealObserver.observe(el);
  });

  /* ---------- build love cards ---------- */
  const loveCardsWrap = document.getElementById("loveCards");
  loveReasons.forEach(reason => {
    const el = document.createElement("div");
    el.className = "love-card";
    el.textContent = "\u2661 " + reason;
    loveCardsWrap.appendChild(el);
    revealObserver.observe(el);
    if (!isMobile) {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `translateY(0) rotateX(${y * -8}deg) rotateY(${x * 8}deg)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    }
  });

  /* ---------- easter egg secret star ---------- */
  const secretStar = document.getElementById("secretStar");
  const secretSection = document.getElementById("secretSection");
  document.getElementById("secretMessage").textContent = secretMessage;
  let secretClicks = 0;
  secretStar.addEventListener("click", () => {
    secretClicks++;
    secretStar.style.transform = `scale(${1 + secretClicks * 0.1})`;
    if (secretClicks >= 5) {
      secretSection.classList.add("reveal");
      secretStar.style.pointerEvents = "none";
      secretStar.style.opacity = "0";
      setTimeout(() => secretSection.scrollIntoView({ behavior: "smooth" }), 200);
    }
  });

  /* ---------- cake / blow out candles ---------- */
  const blowBtn = document.getElementById("blowBtn");
  const cakeEl = document.getElementById("cakeEl");
  const smokeLayer = document.getElementById("smokeLayer");
  const wishResult = document.getElementById("wishResult");

  blowBtn.addEventListener("click", () => {
    blowBtn.disabled = true;
    const candles = cakeEl.querySelectorAll(".candle");

    // flicker then extinguish, staggered
    candles.forEach((c, i) => {
      setTimeout(() => {
        c.setAttribute("data-lit", "false");
        spawnSmoke(i);
      }, i * 220 + 300);
    });

    setTimeout(() => {
      document.getElementById("cake").style.transition = "filter .6s ease";
      document.getElementById("cake").style.filter = "brightness(0.7)";
    }, 1100);

    setTimeout(() => {
      document.getElementById("cake").style.filter = "";
      burstGoldParticles();
      spawnConfettiBurst(document.getElementById("cake"), 30);
      wishResult.classList.add("show");
    }, 1700);
  });

  function spawnSmoke(candleIndex) {
    const offsets = [0, -70, 60];
    for (let i = 0; i < 5; i++) {
      const s = document.createElement("div");
      s.className = "smoke";
      s.style.left = (offsets[candleIndex] || 0) + "px";
      s.style.animationDelay = (i * 0.15) + "s";
      smokeLayer.appendChild(s);
      setTimeout(() => s.remove(), 2200);
    }
  }

  function spawnConfettiBurst(anchorEl, count) {
    const colors = ["#e8b76a", "#e8879a", "#f7ecd9", "#a89bc2"];
    const rect = anchorEl.getBoundingClientRect();
    for (let i = 0; i < count; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.position = "fixed";
      piece.style.left = (rect.left + rect.width / 2 + (Math.random() * 160 - 80)) + "px";
      piece.style.top = (rect.top - 20) + "px";
      piece.style.background = colors[i % colors.length];
      piece.style.animationDuration = (1.6 + Math.random() * 1.2) + "s";
      piece.style.zIndex = "80";
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 3000);
    }
  }

  /* ---------- final surprise ---------- */
  const finalBtn = document.getElementById("finalBtn");
  const finaleOverlay = document.getElementById("finaleOverlay");
  const countdownEl = document.getElementById("countdown");
  const finaleContent = document.getElementById("finaleContent");

  finalBtn.addEventListener("click", () => {
    finaleOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    let n = 3;
    countdownEl.textContent = n;
    const interval = setInterval(() => {
      n--;
      if (n > 0) {
        countdownEl.textContent = n;
      } else {
        clearInterval(interval);
        countdownEl.style.display = "none";
        finaleContent.classList.add("show");
        launchFireworks();
        launchConfettiRain();
        launchHearts();
      }
    }, 900);
  });

  function launchConfettiRain() {
    const layer = document.getElementById("confettiLayer");
    const colors = ["#e8b76a", "#e8879a", "#f7ecd9", "#a89bc2"];
    const count = isMobile ? 40 : 90;
    for (let i = 0; i < count; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "%";
      piece.style.background = colors[i % colors.length];
      piece.style.animationDuration = (2.5 + Math.random() * 2.5) + "s";
      piece.style.animationDelay = (Math.random() * 1.5) + "s";
      layer.appendChild(piece);
    }
  }

  function launchHearts() {
    const layer = document.getElementById("heartsLayer");
    const count = isMobile ? 12 : 24;
    for (let i = 0; i < count; i++) {
      const h = document.createElement("div");
      h.className = "heart-piece";
      h.textContent = "\u2764";
      h.style.left = Math.random() * 100 + "%";
      h.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
      h.style.animationDuration = (4 + Math.random() * 3) + "s";
      h.style.animationDelay = (Math.random() * 2) + "s";
      layer.appendChild(h);
    }
  }

  function launchFireworks() {
    const canvas = document.getElementById("fireworksCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colors = ["#e8b76a", "#e8879a", "#f7ecd9", "#a89bc2", "#ffd27a"];
    let particles = [];

    function spawnBurst() {
      const x = Math.random() * canvas.width * 0.7 + canvas.width * 0.15;
      const y = Math.random() * canvas.height * 0.5 + canvas.height * 0.1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const count = prefersReducedMotion ? 0 : (isMobile ? 24 : 45);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = Math.random() * 3 + 2;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 60 + Math.random() * 20,
          color
        });
      }
    }

    let bursts = 0;
    const burstInterval = setInterval(() => {
      spawnBurst();
      bursts++;
      if (bursts >= (isMobile ? 5 : 8)) clearInterval(burstInterval);
    }, 600);

    let animFrame;
    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03;
        p.life -= 1;
        ctx.globalAlpha = Math.max(p.life / 80, 0);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      });
      particles = particles.filter(p => p.life > 0);
      ctx.globalAlpha = 1;
      animFrame = requestAnimationFrame(tick);
    }
    tick();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
});
