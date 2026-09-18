// BELG Portfolio — Interactivity

const portfolioData = [
  {
    id: 1,
    title: "Echoes of the Void — Sci-Fi Exploration OST",
    desc: "Атмосферный адаптивный саундтрек для sci-fi хоррора. 4 слоя, вертикальный микс, реакция на стресс игрока.",
    tags: ["Game OST", "Adaptive", "FMOD"],
    year: "2024",
    cat: "games",
    color: "linear-gradient(135deg,#8B5CF6,#CCFF00)",
    link: "https://drive.google.com/drive/folders/1_9MsLRO_MVdzQR0Jp9XiWXmrl8?usp=sharing",
    linkLabel: "Слушать в Drive ↗"
  },
  {
    id: 2,
    title: "Neon Streets — UI & SFX Pack",
    desc: "Полный сет UI звуков для киберпанк игры: клики, ховеры, глитчи, нотификации. 24 звука + вариации.",
    tags: ["UI", "SFX", "Cyberpunk"],
    year: "2024",
    cat: "sfx",
    color: "linear-gradient(135deg,#111,#CCFF00)",
    link: "https://t.me/+bOpSpQd8UjdkNGFi",
    linkLabel: "Telegram Demo ↗"
  },
  {
    id: 3,
    title: "Little Ghost — Cozy Puzzle Game OST",
    desc: "Уютный, но грустный саундтрек для пазл-платформера. Пианино, текстуры, шумы плёнки.",
    tags: ["Cozy", "Piano", "Indie"],
    year: "2023",
    cat: "games",
    color: "linear-gradient(135deg,#FF4D9E,#FFB86C)",
    link: "#",
    linkLabel: "Скоро релиз"
  },
  {
    id: 4,
    title: "Product Trailer — Tech Startup",
    desc: "Музыка для трейлера: от минимализма к эпику за 45 сек. Risers, hits, modern hybrid.",
    tags: ["Trailer", "Ads", "Hybrid"],
    year: "2024",
    cat: "film",
    color: "linear-gradient(135deg,#0EA5E9,#CCFF00)",
    link: "#",
    linkLabel: "Смотреть кейс"
  },
  {
    id: 5,
    title: "Forest Spirits — Animation Short Sound Design",
    desc: "Полный саунд-дизайн для короткометражки: фоли, эмбиенс, музыка. Работа с драматургией тишины.",
    tags: ["Animation", "Foley", "Atmos"],
    year: "2023",
    cat: "film",
    color: "linear-gradient(135deg,#22C55E,#CCFF00)",
    link: "#",
    linkLabel: "Behind the scenes"
  },
  {
    id: 6,
    title: "Wwise Implementation — Horror Prototype",
    desc: "Интерактивное аудио: RTPC по страху, states, switches для оружия, 3D позиционирование.",
    tags: ["Wwise", "Unity", "Horror"],
    year: "2024",
    cat: "games",
    color: "linear-gradient(135deg,#1F1F23,#8B5CF6)",
    link: "https://www.youtube.com/watch?v=aAikR7Be7LE",
    linkLabel: "YouTube Showreel ↗"
  },
  {
    id: 7,
    title: "Beats Pack — Dark Trap / Ambient",
    desc: "Авторские биты для исполнителей. Атмосферные, с пространством и характером. 10 битов.",
    tags: ["Beats", "Trap", "Ambient"],
    year: "2022-24",
    cat: "beats",
    color: "linear-gradient(135deg,#000,#444)",
    link: "https://t.me/myzod3ad",
    linkLabel: "Beats Channel ↗"
  },
  {
    id: 8,
    title: "Cyber Heist — FMOD Adaptive Heist Music",
    desc: "Адаптивная музыка для ограбления: stealth → tension → chase. FMOD logic, parameter-driven.",
    tags: ["FMOD", "Adaptive", "Heist"],
    year: "2024",
    cat: "games",
    color: "linear-gradient(135deg,#CCFF00,#000)",
    link: "https://www.youtube.com/watch?v=vLHIWrCV2MA",
    linkLabel: "FMOD Showreel ↗"
  },
];

const tracks = [
  { title: "Cyber Forest — Ambient Exploration (Demo)", sub: "Game OST • Adaptive", time: "01:24 / 03:42" },
  { title: "Neon Rain — UI Clicks & Glitches Pack Preview", sub: "SFX • UI • 24 sounds", time: "00:32 / 01:10" },
  { title: "Little Ghost — Main Theme (Piano + Tape)", sub: "Cozy Puzzle • OST", time: "02:11 / 02:58" },
  { title: "Void Echoes — Tension Layer A", sub: "Horror • Adaptive • Wwise", time: "00:58 / 04:12" },
];

function initPortfolio(){
  const grid = document.getElementById('portfolioGrid');
  const filters = document.querySelectorAll('.filter-btn');
  let active = 'all';

  function render(filter){
    grid.innerHTML = '';
    const list = filter === 'all' ? portfolioData : portfolioData.filter(p=>p.cat===filter);
    list.forEach((item, idx)=>{
      const span = idx % 3 === 0 ? 'span-8' : idx % 3 === 1 ? 'span-4' : 'span-6';
      const el = document.createElement('div');
      el.className = `card ${span}`;
      el.innerHTML = `
        <div class="card-media">
          <div class="card-cover" style="background:${item.color}">${item.title.split(' ')[0].toUpperCase()}</div>
          <div class="card-play">▶</div>
        </div>
        <div class="card-body">
          <div class="card-tags">${item.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
          <div class="card-title">${item.title}</div>
          <div class="card-desc">${item.desc}</div>
          <div class="card-foot">
            <a class="card-link" href="${item.link}" target="_blank">${item.linkLabel}</a>
            <span class="card-year">${item.year}</span>
          </div>
        </div>
      `;
      el.querySelector('.card-play').addEventListener('click', ()=>{
        const idx = tracks.findIndex(t=> t.title.includes(item.title.split('—')[0].trim())) ;
        playTrack(idx >=0 ? idx : (item.id % tracks.length));
        document.getElementById('portfolio').scrollIntoView({behavior:'smooth'});
        setTimeout(()=> document.getElementById('heroVisual').scrollIntoView({behavior:'smooth', block:'center'}), 400);
      });
      grid.appendChild(el);
    });
  }

  filters.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filters.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      active = btn.dataset.filter;
      render(active);
    });
  });

  render(active);
}

function initVisualizer(){
  const viz = document.getElementById('visualizer');
  const bars = 48;
  viz.innerHTML = '';
  const els = [];
  for(let i=0;i<bars;i++){
    const b = document.createElement('div');
    b.className = 'bar';
    b.style.height = `${12 + Math.random()*40}px`;
    b.style.opacity = `${0.4 + Math.random()*0.6}`;
    viz.appendChild(b);
    els.push(b);
  }

  let playing = false;
  let raf;
  let t = 0;

  function animate(){
    t+=0.08;
    els.forEach((bar,i)=>{
      const base = 14;
      const amp = playing ? 120 : 20;
      const freq = 0.18 + i*0.01;
      const h = base + Math.abs(Math.sin(t*freq + i*0.2))*amp + Math.random()*(playing?18:4);
      bar.style.height = `${h}px`;
      if(playing){
        const hueShift = (i/bars);
        bar.style.background = `linear-gradient(to top, hsl(${265 + hueShift*20} 80% 65%), hsl(${70 + hueShift*10} 100% 50%))`;
      }
    });
    if(playing){
      raf = requestAnimationFrame(animate);
    }
  }

  function start(){ if(!playing){ playing=true; animate(); } }
  function stop(){ playing=false; cancelAnimationFrame(raf); animateOnce(); }
  function animateOnce(){
    els.forEach((bar,i)=>{
      bar.style.height = `${12 + Math.random()*18}px`;
      bar.style.background = `linear-gradient(to top, var(--violet), var(--lime))`;
    });
  }

  animateOnce();
  setInterval(()=>{ if(!playing){ animateOnce(); } }, 180);

  return { start, stop, isPlaying:()=>playing };
}

function initPlayer(){
  let current = 0;
  const titleEl = document.getElementById('playerTitle');
  const timeEl = document.getElementById('playerTime');
  const playBtn = document.getElementById('playBtn');
  const prevBtn = document.getElementById('prevTrack');
  const nextBtn = document.getElementById('nextTrack');
  const progress = document.getElementById('progressFill');
  const pill = document.getElementById('header-pill');
  const nowPlaying = document.getElementById('now-playing');

  const viz = initVisualizer();

  let progressInterval;
  let prog = 38;

  function updateTrack(){
    const track = tracks[current];
    titleEl.textContent = track.title;
    timeEl.textContent = track.time;
    nowPlaying.textContent = track.title.split('—')[0].trim().toUpperCase().slice(0,16);
    prog = 20 + Math.random()*50;
    progress.style.width = prog+'%';
  }

  function togglePlay(){
    const isPlaying = viz.isPlaying();
    if(isPlaying){
      viz.stop();
      playBtn.textContent = '▶';
      pill.style.display = 'none';
      clearInterval(progressInterval);
    } else {
      viz.start();
      playBtn.textContent = '⏸';
      pill.style.display = 'inline-flex';
      progressInterval = setInterval(()=>{
        prog += 0.08;
        if(prog>100){ prog=0; current=(current+1)%tracks.length; updateTrack(); }
        progress.style.width = prog+'%';
        // fake time update
        const mins = Math.floor((prog/100)*3);
        const secs = Math.floor(((prog/100)*3*60)%60);
        timeEl.textContent = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')} / 03:42`;
      }, 80);
    }
  }

  playBtn.addEventListener('click', togglePlay);
  prevBtn.addEventListener('click', ()=>{ current = (current-1+tracks.length)%tracks.length; updateTrack(); if(viz.isPlaying()){ prog=5; } });
  nextBtn.addEventListener('click', ()=>{ current = (current+1)%tracks.length; updateTrack(); if(viz.isPlaying()){ prog=5; } });

  // expose global
  window.playTrack = (idx)=>{
    current = idx % tracks.length;
    updateTrack();
    if(!viz.isPlaying()) togglePlay();
  };

  updateTrack();
  // auto start after 1s for demo feel? but keep paused initially for UX
  setTimeout(()=>{ /* viz.start(); playBtn.textContent='⏸'; pill.style.display='inline-flex'; */ }, 800);
}

function initCalculator(){
  const typeEl = document.getElementById('calcType');
  const qtyEl = document.getElementById('calcQty');
  const qtyVal = document.getElementById('qtyVal');
  const compEl = document.getElementById('calcComplexity');
  const checkImpl = document.getElementById('checkImpl');
  const checkUrgent = document.getElementById('checkUrgent');
  const checkRev = document.getElementById('checkRev');
  const checkStem = document.getElementById('checkStem');
  const totalEl = document.getElementById('calcTotal');
  const sendBtn = document.getElementById('calcSend');

  const basePrices = {
    sfx10: 3000,
    ui: 2500,
    track: 5000,
    adaptive: 12000,
    trailer: 7000,
    full: 25000,
    custom: 2000
  };

  function calc(){
    const base = basePrices[typeEl.value] || 3000;
    const qty = parseInt(qtyEl.value,10);
    const comp = parseFloat(compEl.value);
    let total = base * (typeEl.value === 'custom' ? qty : (qty*0.85 + 0.15)) * comp;
    if(checkImpl.checked) total *= 1.3;
    if(checkUrgent.checked) total *= 1.4;
    if(checkRev.checked) total *= 1.15;
    if(checkStem.checked) total *= 1.2;
    // small discount for bulk
    if(qty>=3 && typeEl.value!=='custom') total *= 0.9;
    if(qty>=5) total *= 0.9;

    totalEl.textContent = `${Math.round(total).toLocaleString('ru-RU')}₽`;
    qtyVal.textContent = typeEl.value === 'custom' ? `${qty}ч` : `${qty}×`;

    return { base, qty, comp, total: Math.round(total), type: typeEl.options[typeEl.selectedIndex].text };
  }

  [typeEl, qtyEl, compEl, checkImpl, checkUrgent, checkRev, checkStem].forEach(el=> el.addEventListener('input', calc));
  [typeEl, compEl, checkImpl, checkUrgent, checkRev, checkStem].forEach(el=> el.addEventListener('change', calc));

  calc();

  window.selectService = (id)=>{
    typeEl.value = id;
    calc();
    document.getElementById('calculator').scrollIntoView({behavior:'smooth', block:'center'});
    qtyEl.focus();
    showToast(`Выбрано: ${typeEl.options[typeEl.selectedIndex].text}`);
  };

  sendBtn.addEventListener('click', ()=>{
    const res = calc();
    const checks = [];
    if(checkImpl.checked) checks.push('FMOD/Wwise имплементация');
    if(checkUrgent.checked) checks.push('Срочно 48ч');
    if(checkRev.checked) checks.push('+2 ревизии');
    if(checkStem.checked) checks.push('Стемы/исходники');
    const message = `Привет! Хочу заказать:\n— ${res.type}\n— Количество: ${res.qty}\n— Сложность: ${compEl.options[compEl.selectedIndex].text}\n— Допы: ${checks.join(', ') || 'нет'}\n— Предварительный расчёт: ${res.total.toLocaleString('ru-RU')}₽\n\nПроект: [опиши жанр, референсы, сроки]`;
    const formMsg = document.getElementById('formMessage');
    formMsg.value = message;
    document.getElementById('formProjectType').value = 'Игра (Indie)';
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    showToast('Расчёт добавлен в форму — дополни детали и отправь!');
  });
}

function initMarquee(){
  const track = document.getElementById('marqueeTrack');
  const clone = track.innerHTML;
  track.innerHTML = clone + clone + clone;
}

function initMobileMenu(){
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  const close = document.getElementById('closeMenu');
  const links = document.querySelectorAll('.m-link');
  burger.addEventListener('click', ()=> menu.classList.add('open'));
  close.addEventListener('click', ()=> menu.classList.remove('open'));
  links.forEach(l=> l.addEventListener('click', ()=> menu.classList.remove('open')));
}

function initContactForm(){
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());
    console.log('Form data', obj);
    // Simulate sending
    const btn = form.querySelector('button[type=submit]');
    const orig = btn.textContent;
    btn.textContent = 'Отправляю...';
    btn.disabled = true;
    setTimeout(()=>{
      btn.textContent = '✓ Отправлено!';
      showToast('Бриф отправлен! Я отвечу в течение часа в TG @belg_pr');
      form.reset();
      setTimeout(()=>{ btn.textContent = orig; btn.disabled=false; }, 2500);
    }, 1200);
  });
}

function showToast(text){
  const toast = document.getElementById('toast');
  const txt = document.getElementById('toastText');
  txt.textContent = text;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(()=> toast.classList.remove('show'), 4000);
}
window.showToast = showToast;

function initSmoothActive(){
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.id;
        navLinks.forEach(a=>{
          a.classList.toggle('active', a.getAttribute('href')===`#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s=> obs.observe(s));
}

// INIT
initPortfolio();
initPlayer();
initCalculator();
initMarquee();
initMobileMenu();
initContactForm();
initSmoothActive();

// Easter egg: press L to toggle lime/violet theme
let lime = true;
document.addEventListener('keydown', (e)=>{
  if(e.key.toLowerCase()==='l' && e.ctrlKey){
    lime = !lime;
    document.documentElement.style.setProperty('--lime', lime ? '#CCFF00' : '#8B5CF6');
    showToast(`Тема: ${lime ? 'Lime' : 'Violet'}`);
  }
});
