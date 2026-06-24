/* ============================================
   Six months of memories — Application
   ============================================ */

const GALLERY_INTROS = {
  compilation: {
    steps: [{
      type: 'splash',
      title: 'Six Months in Clips',
      text: 'Random moments from our first six months — nothing staged, just us.',
      button: 'Play'
    }]
  },
  edited: {
    steps: [{
      type: 'splash',
      title: 'A Little Edit',
      text: 'This is a short video I made for you. I hope you like it.',
      button: 'Play'
    }]
  },
  finale: {
    steps: [{
      type: 'splash',
      title: 'One I Saved for Last',
      text: 'No rush — press play whenever you feel like it. and this is my favorite video of you',
      button: 'Watch'
    }]
  }
};

const APP_CONTENT = {
  opening: {
    title: 'Our First Six Months',
    subtitle: 'We were sweeter than we probably admitted — and these six months still feel warm when I look back.',
    buttonText: 'Begin',
    hint: 'Tap to start reading'
  },

  music: {
    src: 'assets/audio/rivers-flow-in-you.mp3',
    title: 'Rivers Flow In You',
    artist: 'Instrumental',
    volume: 0.28,
    loop: true
  },

  chapter1: {
    label: 'Chapter One',
    title: 'How It All Started',
    lead: 'Lucu juga kalau diliat lagi — tanpa sadar, foto ini terasa seperti menunjukkan kita sedang di "rumah". Dan memang, begitulah yang aku rasakan, sebenarnya.',
    mainImage: 'assets/images/Mirror Selfie.jpg',
    supportingImages: [
      'assets/images/support-1.jpg'
    ],
    paragraphs: [
      'Semuanya berawal sederhana — obrolan kecil, tertawa, hari demi hari. Mulai dari Sleep Call in Game? hahaha, ke TikTok, Discord, lalu ke WhatsApp. Setiap langkah terasa mengalir. Tanpa terburu-buru. No Pressure.',
      'Aku tidak tahu persis kapan kamu mulai terasa berbeda bagiku. Mungkin saat kita mulai "nyambung" energinya. Nah, yang jelas, sejak saat itu bersama kamu terasa nyaman.',
      '"Pakai sunscreen. Jangan skip skincare. Makannya yang sehat. Kalau bohong, tertimpa musibah, hahaha." Kamu bilangnya seperti becanda. Tapi di baliknya, aku mendengar kepedulian.',
      'At the same time, tanpa kamu sadari, kamu juga memperbolehkanku masuk di masa yang tidak mudah bagimu. Aku tidak pernah merasa terbebani — hanya dipercaya. Kamu membiarkanku ada di sampingmu saat semuanya berat, dan itu berarti banyak bagiku.',
      'Enam bulan kita tumbuh dari hal-hal biasa: pesan, langkah kecil, kehangatan yang pelan-pelan terasa. Kalau dipikir lagi, kesederhanaan itulah yang membuat semuanya terasa nyata — dan manis.'
    ]
  },

  memories: [
    {
      id: 'memory-1',
      title: 'Hampers Lebaran & Surat',
      image: 'assets/images/perkenalan-ke-ibu.jpg',
      hasImage: true,
      visual: {
        icon: '✉',
        tag: 'Ada surat di dalamnya',
        date: 'Lebaran',
        teaser: 'Hampers, surat formal kecil — dan mungkin ibuku yang tahu duluan sebelum kamu cerita.',
        theme: 'letter'
      },
      story: [
        'Lebaran itu, kamu titip hampers ke rumah — dengan surat kecil terselip di dalamnya. Sangat sopan, sangat formal, seolah ingin memperkenalkan diri dengan benar lewat ibuku dulu.',
        'Formal banget, hahaha. "Perkenalkan, saya Nur." Kamu masuk ke duniaku lewat ibuku hari itu, dan aku masih tersenyum kalau mengingatnya. Kamu memang tahu cara menunjukkan niat — dan aku merasakannya.'
      ]
    },
    {
      id: 'memory-2',
      title: 'Saat Aku Sakit di Tempatmu',
      image: 'assets/images/memory-2.jpg',
      hasImage: false,
      visual: {
        icon: '♡',
        tag: 'Dirawat dengan lembut',
        date: '23 Jan 2026',
        teaser: 'Aku sedang sakit di tempatmu — dan kamu ada di sampingku malam itu, dengan halus.',
        theme: 'care'
      },
      story: [
        '23 Januari 2026. Aku sedang sakit saat aku main ke tempatmu. Aku ingat kamu yang mengurusku — kompres hangat, menemani sampai aku bisa tertidur, dan melakukan apa pun yang kubutuhkan, saat aku sadar maupun tidak.',
        'Yang paling kuingat bukan sakitnya. Tapi cara kamu mengurusku dengan lembut malam itu — pelan, sabar, tanpa membuatku merasa menjadi beban. I hope you know how much I appreciate it.'
      ]
    },
    {
      id: 'memory-3',
      title: 'Saat Kamu Membantu Aku Membuat Aplikasi',
      image: 'assets/images/real support.jpeg',
      hasImage: true,
      story: [
        '4 Februari 2026, malam. Di video call, kamu bantu aku yang sedang membuat aplikasi — penuh ide, penuh perhatian, bukan hanya menemani aku.',
        'Aku merasa kita sedang membangun sesuatu bersama. Kamu menemani aku di malam yang berat dan penuh mimpi, dan itu berarti banyak bagiku.'
      ]
    },
    {
      id: 'memory-4',
      title: 'Senja di Rooftop',
      image: 'assets/images/NYUNSET.jpg',
      hasImage: true,
      story: [
        'Sore di atap kala itu. Kopi yang kamu buat, langit berubah warna, dan perasaan nyaman yang tidak perlu dijelaskan oleh kata.',
        'Semuanya terasa tenang. Hanya kamu, senja, dan perasaan nyaman yang tepat di mana aku ingin berada - disampingmu.'
      ]
    },
    {
      id: 'memory-5',
      title: 'Setiap Kali Aku Datang ke tempatmu',
      image: 'assets/images/memory-5.jpg',
      hasImage: false,
      visual: {
        icon: '⌂',
        tag: 'Disambut dengan penuh harap',
        date: 'Saat aku datang',
        teaser: 'Setiap kali aku datang, caramu menyambut selalu terasa excited — jelas banget kalau itu ditunggu.',
        theme: 'home'
      },
      story: [
        'Setiap kali aku main ke tempatmu, rasanya seperti pulang, bukan soal bangunan tapi soal "rumah" yang memberikan kenyamanan.',
        'Yang paling kuingat: betapa semangatnya kamu menyambutku. Pelukan, senyum, matamu yang langsung cerah — seolah kedatanganku memang kamu nantikan. Aku selalu merasa diterima, apa adanya.'
      ]
    },
    {
      id: 'memory-6',
      title: 'Kopi Nako Abdul Muis di Jakarta',
      image: 'assets/images/image.jpg',
      hasImage: true,
      story: [
        'Hari itu, Kita memutuskan untuk ketemu. Aku sedikit gugup; kamu selalu bisa mencairkan suasana. dan betapa senangnya apa yang aku rasakan saat itu.',
        'Ada foto kamu yang melihatku — aku masih tersenyum setiap kali melihatnya. Aku bertanya-tanya apa yang kamu pikirkan saat itu?, hahaha.'
      ]
    }
  ],

  gallery: {
    label: 'Interlude',
    title: 'Little Snapshots',
    hint: 'Tap any moment — photos and clips from our six months.',
    videoVolume: 0.5,
    photos: [
      { type: 'video', src: 'assets/images/all video.mp4', alt: 'Moments from our six months', featured: true, introKey: 'compilation' },

      { src: 'assets/images/Di Travel.jpg', alt: 'On a trip together' },
      { src: 'assets/images/Gantungan 1.jpg', alt: 'Hanging out' },
      { src: 'assets/images/kocak.jpeg', alt: 'A silly moment' },
      { src: 'assets/images/menatap.jpg', alt: 'A look between us' },
      { src: 'assets/images/Ngopi Sip.JPG', alt: 'Coffee sip' },
      { src: 'assets/images/Ngopi.jpg', alt: 'Coffee together' },
      { src: 'assets/images/Renang.jpg', alt: 'Swimming' },
      { src: 'assets/images/Sip.jpg', alt: 'Cheers' },
      { src: 'assets/images/Sycho.PNG', alt: 'Sycho' },
      { src: 'assets/images/Tidur.jpeg', alt: 'Resting' },

      { type: 'video', src: 'assets/images/edit video.mp4', alt: 'A small edit for you', introKey: 'edited' },

      { type: 'video', src: 'assets/images/I Love You.mp4', alt: 'I love you', finale: true, introKey: 'finale' }
    ]
  },

  qualities: [
    {
      id: 'quality-1',
      title: 'Your Little Reminders',
      preview: 'Sunscreen, rest, food — you noticed the small things.',
      letter: [
        'Kamu mungkin tidak selalu menyadarinya, tapi cara kamu mengingatkan aku untuk menjaga diri sendiri membuatku merasa diperhatikan.',
        '"Pakai sunscreen. Jangan skip makan. Makannya yang sehat. Kalau bohong, tertimpa musibah, hahaha." Simple lines — but they always landed as quiet care.'
      ]
    },
    {
      id: 'quality-2',
      title: 'Your Kindness to Others',
      preview: 'Permen untuk anak kecil, berbagi apa yang kamu punya — hatimu besar.',
      letter: [
        'Aku suka melihat sisi kamu yang mungkin tidak selalu kamu tonjolkan — baiknya ke orang lain. Memberi permen ke anak kecil, berbagi apa yang ada, hadir dengan hati yang lembut.',
        'Itu salah satu hal yang membuatku bangga mengenalmu. Kamu tidak hanya baik ke orang yang dekat — kamu memang baik, titik.'
      ]
    },
    {
      id: 'quality-3',
      title: 'The Way You Listen',
      preview: 'Kamu tidak sekadar mendengar — kamu benar-benar hadir.',
      letter: [
        'Aku tidak tahu kapan mulai merasa kamu berbeda. Mungkin saat aku bicara dan kamu benar-benar mendengarkan — bukan sekadar menunggu giliran untuk menjawab.',
        'Di tengah dunia yang sering terburu-buru, rasanya langka ada orang yang hadir seperti itu. Bersama kamu, aku merasa didengar — dan itu membuat banyak hal terasa lebih mudah.'
      ]
    },
    {
      id: 'quality-4',
      title: 'Your Imperfections, Too',
      preview: 'Kelebihanmu, kekuranganmu — aku suka semuanya.',
      letter: [
        'Kamu punya sisi yang lucu, keras kepala, kadang timing yang bikin aku bingung, kadang hal-hal kecil yang tidak sempurna. Dan jujur? Aku suka itu juga.',
        'Tidak hanya sisi terbaikmu. Tapi semuanya. Aku suka kamu apa adanya, lengkap dengan semua sisi itu.'
      ]
    },
    {
      id: 'quality-5',
      title: 'How You Treat Me Like a "Baby"',
      preview: 'Dirawat, diingatkan, diizinkan untuk menjadi manja— dan rasanya aman.',
      letter: [
        'Kadang kamu memperlakukanku seperti aku masih kecil. Lucu? Ya. Tapi juga salah satu hal yang aku suka tentang kita.',
        'Di tengah dunia yang selalu meminta kita untuk menjadi kuat, kelembutanmu terasa seperti tempat yang tidak pernah aku temukan sebelumnya.'
      ]
    },
    {
      id: 'quality-6',
      title: 'All of You',
      preview: 'Kelebihan, kekurangan, dan semua yang di antaranya — aku bersyukur itu kamu.',
      letter: [
        'Ada banyak hal yang aku suka dari kamu — cara kamu peduli, cara kamu hadir, cara kamu baik ke orang lain, bahkan hal-hal kecil yang tidak selalu sempurna.',
        'Bukan cuma sisi terbaikmu. Semuanya. Karena justru dari semua itu, kamu jadi kamu — dan aku bersyukur enam bulan ini ada kamu di dalamnya.'
      ]
    }
  ],

  reflection: {
    label: 'Chapter Four',
    title: 'What These Six Months Mean to Me',
    lead: 'Take your time here — no rush. This is a personal note for you.',
    paragraphs: [
      'Enam bulan itu tidak terlalu lama di atas kertas — tapi aku merasakannya satu persatu. Aku bertumbuh: aku lebih melihat potensiku, belajar untuk memberi ruang untuk perbedaan kita, dan merasa nyaman saat dipahami.',
      'Pelajaran terbesar? Kita tidak harus sama, atau setuju semua. Memahami satu sama lain cukup — dan itu lebih dari cukup.',
      'Yang paling kuingat bukan hal besar. Surat di hampers, kopi yang kamu buat, senja di atap, setiap kali aku datang dan betapa senangnya kamu melihatku. Terimakasih sudah ada untuk aku yaa.'
    ]
  },

  future: {
    label: 'Chapter Five',
    title: 'Whatever Comes Next',
    backgroundImage: 'assets/images/ngopi1.jpg',
    lead: 'No expectations — just honesty.',
    paragraphs: [
      'Bukannya tidak memiliki rencana besar — hanya harapan tenang: jadi tempat yang nyaman dan aman buat kamu.',
      'Ngopi bareng, obrolan ringan, sore yang tenang — aku ingin itu terus ada. Jadi tolong selalu dijaga kesehatannya yaa - biar kita bisa lakukan hal itu terus.',
      'Aku tidak tahu apa yang akan terjadi di bab selanjutnya. Its okay. Aku hanya senang bahwa ini terjadi — dan meninggalkan sesuatu yang hangat di belakangnya.'
    ]
  },

  ending: {
    thankYou: 'Thank You.',
    lines: [
      'For the letter in the hamper — formal, funny, and unforgettable.',
      'For your coffee, our rooftop sunsets, and every easy hour in between.',
      'For showing up when it mattered, and for every time you really listened.',
      'For all of you — and for six months that still make me smile when I think back.'
    ],
    buttonText: 'One Last Note',
    buttonHint: 'A personal note — read it only when you want to.'
  },

  finalLetter: {
    label: 'A Letter For You',
    greeting: 'Untuk Nanun — yang udah jadi bagian terindah dari enam bulan terakhir Ijal,',
    paragraphs: [
      'Ijal nulis ini dengan perasaan yang sulit Ijal jelasin. Bukan karena ga ada kata yang tepat — tapi karena terlalu banyak hal yang ingin Ijal sampaikan.',
      'Maaf, ya — kalau ada hal di mana Ijal belum cukup baik, belum cukup hadir, atau belum cukup menjadi yang Nanun butuhkan. Ijal tahu Ijal masih belajar. Tapi setiap hari, Ijal mencoba menjadi lebih baik untuk Nanun.',
      'Terima kasih sudah ada. Terima kasih sudah mendengarkan. Terima kasih sudah membiarkan Ijal masuk ke hidup Nanun — bahkan di saat-saat tersulit Nanun. Terima kasih sudah mempercayai Ijal, meski Ijal tahu itu tidak selalu mudah.',
      'Enam bulan ini bukan waktu yang Ijal lewati begitu aja. Setiap momennya benar-benar Ijal rasain. Dan Ijal bersyukur — sangat bersyukur — bahwa Nanun ada di dalamnya.',
      'Ijal ingin kita saling menguatkan. Bukan hanya Ijal yang didukung, bukan hanya Ijal yang merasa aman — tapi kita berdua. Tempat untuk pulang. Tempat untuk bernafas. Tempat untuk menjadi diri kita sendiri, tanpa harus berpura-pura.',
      'Dan ini yang paling jujur ingin ijal sampaikan: maafin Ijal ya, kalau Ijal masih jauh dari yang terbaik buat Nanun. Tapi Ijal masih berjanji ke Nanun — Ijal mau terus belajar menjadi yang terbaik untuk Nanun. Tempat ternyaman sekaligus teraman Nanun. Orang yang tidak akan menyia-nyiakan kepercayaan Nanun. I\'m very happy to have you in my life. I think you are the best gift from God has given to me, sejauh ini.',
      'Ini bukan akhir dari cerita kita. Ini hanya akhir dari enam bulan pertama. Dan Ijal ingin terus menulis bareng Nanun — satu demi satu halaman, story of us.'
    ],
    signoff: 'With all my heart, I love you so much, Nun.',
    signature: 'Ijal'
  }
};

/* ============================================
   State & Config
   ============================================ */

const CHAPTERS = [
  { id: 'opening', label: 'Cover' },
  { id: 'chapter-1', label: 'Start' },
  { id: 'chapter-2', label: 'Memories' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'chapter-3', label: 'You' },
  { id: 'chapter-4', label: 'Meaning' },
  { id: 'chapter-5', label: 'Next' },
  { id: 'ending', label: 'End' }
];

let currentMemoryIndex = 0;
let currentGalleryIndex = 0;
let galleryIntroStep = 0;
let galleryIntroNoTaps = 0;
let galleryIntroActive = false;
let activeOverlay = null;
let currentChapterIndex = 0;

const musicState = {
  audio: null,
  playing: false,
  ready: false,
  error: false,
  wasPlayingBeforeVideo: false,
  suppressedByVideo: false
};

/* ============================================
   Utilities
   ============================================ */

function createElement(tag, className, innerHTML) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML !== undefined) el.innerHTML = innerHTML;
  return el;
}

function paragraphsToHTML(paragraphs) {
  return paragraphs.map(p => `<p>${p}</p>`).join('');
}

let scrollLockY = 0;

function lockBody() {
  scrollLockY = window.scrollY;
  document.body.classList.add('locked');
  document.body.style.top = `-${scrollLockY}px`;
}

function unlockBody() {
  document.body.classList.remove('locked');
  document.body.style.top = '';
  window.scrollTo(0, scrollLockY);
}

function setOverlayOpen(open) {
  document.body.classList.toggle('overlay-open', open);
}

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isGalleryVideo(item) {
  if (item.type === 'video') return true;
  if (item.type === 'photo') return false;
  return /\.(mp4|mov|webm)(\?.*)?$/i.test(item.src);
}

function galleryVideoMime(src) {
  if (/\.mov(\?.*)?$/i.test(src)) return 'video/quicktime';
  if (/\.webm(\?.*)?$/i.test(src)) return 'video/webm';
  return 'video/mp4';
}

function pauseGalleryVideo() {
  const video = document.getElementById('gallery-lightbox-video');
  if (!video) return;
  video.pause();
  video.currentTime = 0;
  restoreMusicAfterVideo();
}

function isGalleryVideoPlaying() {
  const video = document.getElementById('gallery-lightbox-video');
  return Boolean(
    activeOverlay === 'gallery' &&
    video &&
    !video.hidden &&
    !video.paused &&
    !video.ended
  );
}

function suppressMusicForVideo() {
  if (musicState.suppressedByVideo) return;
  musicState.wasPlayingBeforeVideo = musicState.playing;
  musicState.suppressedByVideo = true;
  if (musicState.playing) pauseMusic();
}

function restoreMusicAfterVideo() {
  if (!musicState.suppressedByVideo) return;
  const shouldResume = musicState.wasPlayingBeforeVideo;
  musicState.suppressedByVideo = false;
  musicState.wasPlayingBeforeVideo = false;
  if (shouldResume) playMusic();
}

function bindGalleryVideoAudio() {
  const video = document.getElementById('gallery-lightbox-video');
  if (!video || video.dataset.audioBound) return;
  video.dataset.audioBound = '1';

  video.addEventListener('play', () => {
    if (activeOverlay === 'gallery') suppressMusicForVideo();
  });

  video.addEventListener('pause', () => {
    if (activeOverlay === 'gallery') restoreMusicAfterVideo();
  });

  video.addEventListener('ended', () => {
    if (activeOverlay === 'gallery') restoreMusicAfterVideo();
  });
}

function applyGalleryVideoVolume(video) {
  if (!video) return;
  const vol = APP_CONTENT.gallery.videoVolume;
  video.volume = typeof vol === 'number' ? Math.min(1, Math.max(0, vol)) : 0.5;
}

function memoryArtDeco(theme) {
  const decos = {
    letter: `
      <span class="memory-art__deco memory-art__deco--stamp" aria-hidden="true"></span>
      <span class="memory-art__deco memory-art__deco--fold" aria-hidden="true"></span>
      <span class="memory-art__deco memory-art__deco--line memory-art__deco--line-1" aria-hidden="true"></span>
      <span class="memory-art__deco memory-art__deco--line memory-art__deco--line-2" aria-hidden="true"></span>
      <span class="memory-art__deco memory-art__deco--line memory-art__deco--line-3" aria-hidden="true"></span>`,
    care: `
      <span class="memory-art__deco memory-art__deco--ring" aria-hidden="true"></span>
      <span class="memory-art__deco memory-art__deco--orb memory-art__deco--orb-1" aria-hidden="true"></span>
      <span class="memory-art__deco memory-art__deco--orb memory-art__deco--orb-2" aria-hidden="true"></span>`,
    home: `
      <span class="memory-art__deco memory-art__deco--frame" aria-hidden="true"></span>
      <span class="memory-art__deco memory-art__deco--warmth" aria-hidden="true"></span>`
  };
  return decos[theme] || `<span class="memory-art__deco memory-art__deco--orb memory-art__deco--orb-1" aria-hidden="true"></span>`;
}

function renderMemoryVisual(memory, index, context) {
  const v = memory.visual || {};
  const theme = v.theme || 'default';
  const num = String(index + 1).padStart(2, '0');
  const deco = memory.hasImage ? '' : memoryArtDeco(theme);
  const dateBadge = v.date ? `<span class="memory-art__date">${v.date}</span>` : '';

  if (memory.hasImage) {
    const cls = context === 'card' ? 'memory-card__img memory-card__img--photo' : 'overlay__img img-ph';
    return `<div class="${cls}">
      <img src="${memory.image}" alt="${memory.title}" loading="lazy">
    </div>`;
  }

  const overlayNote = context === 'overlay'
    ? '<p class="overlay__art-note">No photo — but the feeling is still here.</p>'
    : '';

  if (context === 'card') {
    return `
      <div class="memory-card__img memory-card__img--art">
        <div class="memory-art memory-art--${theme}">
          ${deco}
          <span class="memory-art__num">${num}</span>
          ${dateBadge}
          <span class="memory-art__icon" aria-hidden="true">${v.icon || '✦'}</span>
          <span class="memory-art__tag">${v.tag || 'A memory'}</span>
          <p class="memory-art__teaser">${v.teaser || ''}</p>
        </div>
      </div>`;
  }

  return `
    <div class="overlay__art memory-art memory-art--overlay memory-art--${theme}">
      ${deco}
      ${dateBadge}
      <span class="memory-art__icon" aria-hidden="true">${v.icon || '✦'}</span>
      <span class="memory-art__tag">${v.tag || 'A moment without a photo'}</span>
      <p class="memory-art__teaser">${v.teaser || ''}</p>
      ${overlayNote}
    </div>`;
}

/* ============================================
   Render
   ============================================ */

function renderOpening() {
  const { title, subtitle, buttonText } = APP_CONTENT.opening;
  const parts = title.split(' ');
  const section = createElement('section', 'story-section cover');
  section.id = 'opening';
  section.innerHTML = `
    <div class="cover__glow" aria-hidden="true"></div>
    <h1 class="cover__title">
      <span class="cover__line cover__line--1">${parts.slice(0, -2).join(' ')}</span>
      <span class="cover__line cover__line--2"><em>${parts.slice(-2).join(' ')}</em></span>
    </h1>
    <p class="cover__subtitle cover__line cover__line--3">${subtitle}</p>
    <button class="btn cover__line cover__line--4" id="begin-btn">${buttonText}</button>
    <p class="cover__hint">${APP_CONTENT.opening.hint || 'Tap to start reading'}</p>
  `;
  return section;
}

function renderChapter1() {
  const c = APP_CONTENT.chapter1;
  const section = createElement('section', 'story-section story-section--auto ch1');
  section.id = 'chapter-1';
  section.innerHTML = `
    <div class="ch1__grid">
      <div class="reveal" style="--d:0s">
        <p class="chapter-tag">${c.label}</p>
        <h2 class="chapter-title">${c.title}</h2>
        <div class="ch1__photo img-ph reveal-scale" style="--d:0.1s">
          <img src="${c.mainImage}" alt="${c.title}" loading="lazy" onerror="this.parentElement.style.display='none'">
        </div>
      </div>
      <div class="reveal" style="--d:0.15s">
        <p class="ch1__lead">${c.lead}</p>
        <div class="body-text">${paragraphsToHTML(c.paragraphs)}</div>
      </div>
    </div>
    <div class="scroll-cue" aria-hidden="true"><div class="scroll-cue__bar"></div>Scroll</div>
  `;
  return section;
}

function renderChapter2() {
  const section = createElement('section', 'story-section story-section--auto ch2');
  section.id = 'chapter-2';

  const cardsHTML = APP_CONTENT.memories.map((m, i) => `
    <button class="memory-card${i === 0 ? ' is-active' : ''}${m.hasImage ? ' memory-card--photo' : ' memory-card--art'}" data-index="${i}" aria-label="Open: ${m.title}">
      ${renderMemoryVisual(m, i, 'card')}
      <div class="memory-card__body">
        <p class="memory-card__num">${String(i + 1).padStart(2, '0')}</p>
        <h3 class="memory-card__title">${m.title}</h3>
        <span class="memory-card__tap">Tap to read <span aria-hidden="true">→</span></span>
      </div>
    </button>`).join('');

  const dotsHTML = APP_CONTENT.memories.map((_, i) =>
    `<button class="slider-dot${i === 0 ? ' active' : ''}" data-dot="${i}" aria-label="Memory ${i + 1}"></button>`
  ).join('');

  section.innerHTML = `
    <div class="ch2__header reveal">
      <p class="chapter-tag">Chapter Two</p>
      <h2 class="chapter-title">Moments I Keep Returning To</h2>
      <p class="chapter-lead ch2__hint">Swipe to browse memories</p>
    </div>
    <div class="memories-track-wrap reveal" style="--d:0.1s">
      <div class="memories-track" id="memories-track">${cardsHTML}</div>
      <div class="slider-dots" id="memory-dots">${dotsHTML}</div>
    </div>
  `;
  return section;
}

function resolveGalleryIntro(item) {
  if (!isGalleryVideo(item)) return null;
  if (item.introKey && GALLERY_INTROS[item.introKey]) return GALLERY_INTROS[item.introKey];
  if (item.intro?.steps?.length) return item.intro;
  const file = (item.src || '').split('/').pop().toLowerCase();
  if (file.includes('i love you')) return GALLERY_INTROS.finale;
  if (file.includes('edit video')) return GALLERY_INTROS.edited;
  if (file.includes('all video')) return GALLERY_INTROS.compilation;
  return null;
}

function isGalleryFinale(item) {
  return Boolean(item.finale) || /i love you/i.test(item.src || '');
}

function hasGalleryIntro(item) {
  return Boolean(resolveGalleryIntro(item));
}

function renderGalleryThumb(item, i) {
  const isVideo = isGalleryVideo(item);
  const isFinale = isGalleryFinale(item);
  const classes = [
    'gallery__item',
    'reveal',
    item.featured ? 'gallery__item--featured' : '',
    isVideo ? 'gallery__item--video' : '',
    isFinale ? 'gallery__item--finale' : ''
  ].filter(Boolean).join(' ');
  const label = isVideo ? `Play video ${i + 1}` : `Open photo ${i + 1}`;

  let media;
  if (isVideo) {
    const poster = item.poster ? ` poster="${item.poster}"` : '';
    const badge = isFinale
      ? '<span class="gallery__special gallery__special--finale" aria-hidden="true">♡</span>'
      : '';
    media = `
      <video src="${item.src}"${poster} muted playsinline preload="metadata" aria-hidden="true"
        onerror="this.closest('.gallery__item').classList.add('gallery__item--missing')"></video>
      <span class="gallery__play" aria-hidden="true"></span>
      ${badge}`;
  } else {
    media = `
      <img src="${item.src}" alt="${item.alt || ''}" loading="lazy"
        onerror="this.closest('.gallery__item').classList.add('gallery__item--missing')">`;
  }

  return `
    <button type="button" class="${classes}" data-index="${i}" aria-label="${label}"
      style="--d:${(i % 6) * 0.05}s">${media}</button>`;
}

function renderGallery() {
  const g = APP_CONTENT.gallery;
  const section = createElement('section', 'story-section story-section--auto gallery');
  section.id = 'gallery';

  const itemsHTML = g.photos.map((item, i) => renderGalleryThumb(item, i)).join('');

  section.innerHTML = `
    <div class="gallery__header reveal">
      <p class="chapter-tag">${g.label}</p>
      <h2 class="chapter-title">${g.title}</h2>
      <p class="gallery__hint">${g.hint}</p>
    </div>
    <div class="gallery__grid">${itemsHTML}</div>
  `;
  return section;
}

function renderChapter3() {
  const section = createElement('section', 'story-section story-section--auto ch3');
  section.id = 'chapter-3';

  const itemsHTML = APP_CONTENT.qualities.map((q, i) => `
    <div class="quality-item reveal" style="--d:${i * 0.06}s">
      <button class="quality-item__head" aria-expanded="false">
        <span class="quality-item__title">${q.title}</span>
        <span class="quality-item__icon" aria-hidden="true">+</span>
      </button>
      <div class="quality-item__body">
        <div class="quality-item__text">${paragraphsToHTML(q.letter)}</div>
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="ch3__header reveal">
      <p class="chapter-tag">Chapter Three</p>
      <h2 class="chapter-title">Things I Love About You</h2>
      <p class="chapter-lead" style="margin:1rem auto 0">Tap to read →</p>
    </div>
    <div class="qualities-list">${itemsHTML}</div>
  `;
  return section;
}

function renderChapter4() {
  const c = APP_CONTENT.reflection;
  const section = createElement('section', 'story-section story-section--auto ch4');
  section.id = 'chapter-4';
  const paras = c.paragraphs.map(p => `<p class="ch4__para">${p}</p>`).join('');
  const lead = c.lead ? `<p class="chapter-lead ch4__lead">${c.lead}</p>` : '';
  section.innerHTML = `
    <div class="reveal">
      <p class="chapter-tag">${c.label}</p>
      <h2 class="chapter-title">${c.title}</h2>
      ${lead}
    </div>
    <div class="ch4__inner">${paras}</div>
  `;
  return section;
}

function renderChapter5() {
  const c = APP_CONTENT.future;
  const section = createElement('section', 'story-section ch5');
  section.id = 'chapter-5';
  const lead = c.lead ? `<p class="chapter-lead ch5__lead">${c.lead}</p>` : '';
  section.innerHTML = `
    <div class="ch5__bg img-ph">
      <img src="${c.backgroundImage}" alt="" loading="lazy" onerror="this.style.display='none'">
    </div>
    <div class="ch5__overlay"></div>
    <div class="ch5__content reveal">
      <p class="chapter-tag">${c.label}</p>
      <h2 class="chapter-title">${c.title}</h2>
      ${lead}
      <div class="ch5__text">${paragraphsToHTML(c.paragraphs)}</div>
    </div>
  `;
  return section;
}

function renderEnding() {
  const c = APP_CONTENT.ending;
  const section = createElement('section', 'story-section ending');
  section.id = 'ending';
  const linesHTML = c.lines.map(l => `<p class="ending__line">${l}</p>`).join('');
  const hint = c.buttonHint ? `<p class="ending__hint">${c.buttonHint}</p>` : '';
  section.innerHTML = `
    <h2 class="ending__thankyou" id="ending-thankyou">${c.thankYou}</h2>
    <div class="ending__lines">${linesHTML}</div>
    <div class="ending__cta" id="ending-cta">
      <button class="btn" id="open-letter-btn">${c.buttonText}</button>
      ${hint}
    </div>
  `;
  return section;
}

/* ============================================
   Gallery Lightbox
   ============================================ */

function createGalleryLightbox() {
  const el = createElement('div', 'gallery-lightbox');
  el.id = 'gallery-lightbox';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.innerHTML = `
    <div class="gallery-lightbox__bg" id="gallery-lightbox-bg"></div>
    <div class="gallery-lightbox__top">
      <span class="gallery-lightbox__counter" id="gallery-lightbox-counter"></span>
      <button type="button" class="gallery-lightbox__close" id="gallery-lightbox-close" aria-label="Close">✕</button>
    </div>
    <button class="gallery-lightbox__nav gallery-lightbox__nav--prev" id="gallery-prev" aria-label="Previous">←</button>
    <div class="gallery-lightbox__stage">
      <div class="gallery-intro" id="gallery-intro" hidden></div>
      <img class="gallery-lightbox__img" id="gallery-lightbox-img" alt="" hidden>
      <video class="gallery-lightbox__video" id="gallery-lightbox-video"
        playsinline controls preload="metadata" hidden></video>
    </div>
    <button class="gallery-lightbox__nav gallery-lightbox__nav--next" id="gallery-next" aria-label="Next">→</button>
  `;
  return el;
}

function bindGalleryLightboxEvents() {
  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox || lightbox.dataset.bound) return;
  lightbox.dataset.bound = '1';

  bindGalleryVideoAudio();

  lightbox.querySelector('#gallery-lightbox-bg')?.addEventListener('click', closeGalleryLightbox);
  lightbox.querySelector('#gallery-lightbox-close')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeGalleryLightbox();
  });
}

function openGalleryLightbox(index) {
  currentGalleryIndex = index;
  updateGalleryLightbox();
  document.getElementById('gallery-lightbox').classList.add('open');
  lockBody();
  setOverlayOpen(true);
  activeOverlay = 'gallery';
}

function closeGalleryLightbox() {
  pauseGalleryVideo();
  restoreMusicAfterVideo();
  galleryIntroActive = false;
  galleryIntroStep = 0;
  galleryIntroNoTaps = 0;
  const intro = document.getElementById('gallery-intro');
  if (intro) { intro.hidden = true; intro.innerHTML = ''; }
  document.getElementById('gallery-lightbox')?.classList.remove('gallery-lightbox--intro');
  document.getElementById('gallery-lightbox').classList.remove('open');
  unlockBody();
  setOverlayOpen(false);
  activeOverlay = null;
}

function setGalleryMediaVisible(show) {
  const img = document.getElementById('gallery-lightbox-img');
  const video = document.getElementById('gallery-lightbox-video');
  const intro = document.getElementById('gallery-intro');
  const lightbox = document.getElementById('gallery-lightbox');
  if (show) {
    intro.hidden = true;
    lightbox?.classList.remove('gallery-lightbox--intro');
    galleryIntroActive = false;
  } else {
    intro.hidden = false;
    img.hidden = true;
    video.hidden = true;
    lightbox?.classList.add('gallery-lightbox--intro');
    galleryIntroActive = true;
  }
}

function renderGalleryIntroStep(item) {
  const intro = document.getElementById('gallery-intro');
  const introConfig = resolveGalleryIntro(item);
  const step = introConfig?.steps[galleryIntroStep];
  if (!step) {
    finishGalleryIntro(item);
    return;
  }

  setGalleryMediaVisible(false);
  intro.innerHTML = '';
  intro.className = 'gallery-intro' + (isGalleryFinale(item) ? ' gallery-intro--finale' : '');

  const card = createElement('div', 'gallery-intro__card');

  if (step.type === 'splash') {
    card.innerHTML = `
      ${step.badge ? `<p class="gallery-intro__badge">${step.badge}</p>` : ''}
      <h3 class="gallery-intro__title">${step.title}</h3>
      <p class="gallery-intro__text">${step.text}</p>
      <button type="button" class="btn gallery-intro__btn" data-intro-action="next">${step.button || 'Play'}</button>
    `;
  }

  if (step.type === 'checklist') {
    const checksHTML = step.items.map((label, i) => `
      <label class="gallery-intro__check">
        <input type="checkbox" class="gallery-intro__checkbox" data-check="${i}">
        <span class="gallery-intro__check-box" aria-hidden="true"></span>
        <span>${label}</span>
      </label>
    `).join('');
    card.innerHTML = `
      <h3 class="gallery-intro__title">${step.title}</h3>
      <div class="gallery-intro__checks">${checksHTML}</div>
      <button type="button" class="btn gallery-intro__btn" data-intro-action="check" disabled>${step.button || 'Continue'}</button>
    `;
  }

  if (step.type === 'confirm') {
    card.innerHTML = `
      <h3 class="gallery-intro__title">${step.title}</h3>
      <p class="gallery-intro__text" id="gallery-intro-confirm-text">${step.text}</p>
      <div class="gallery-intro__dual">
        <button type="button" class="gallery-intro__ghost" data-intro-action="no">${step.no || 'Not yet'}</button>
        <button type="button" class="btn gallery-intro__btn gallery-intro__btn--sm" data-intro-action="next">${step.yes || 'Yes'}</button>
      </div>
    `;
    card.dataset.noReply = step.noReply || '';
  }

  if (step.type === 'loading') {
    card.innerHTML = `
      <p class="gallery-intro__badge">LOADING</p>
      <h3 class="gallery-intro__title" id="gallery-intro-load-text">${step.messages[0]}</h3>
      <div class="gallery-intro__bar"><span id="gallery-intro-load-bar"></span></div>
    `;
    intro.appendChild(card);
    runGalleryIntroLoading(step);
    return;
  }

  intro.appendChild(card);
  bindGalleryIntroActions(item, card);
}

function bindGalleryIntroActions(item, card) {
  const btn = card.querySelector('[data-intro-action="check"]');
  if (btn) {
    const boxes = card.querySelectorAll('.gallery-intro__checkbox');
    const update = () => {
      btn.disabled = ![...boxes].every(b => b.checked);
    };
    boxes.forEach(box => {
      box.addEventListener('change', update);
    });
  }

  card.querySelectorAll('[data-intro-action]').forEach(el => {
    el.addEventListener('click', () => {
      const action = el.dataset.introAction;
      if (action === 'next') advanceGalleryIntro(item);
      if (action === 'check' && !el.disabled) advanceGalleryIntro(item);
      if (action === 'no') handleGalleryIntroNo(item, card);
    });
  });
}

function handleGalleryIntroNo(item, card) {
  galleryIntroNoTaps++;
  const introConfig = resolveGalleryIntro(item);
  const step = introConfig?.steps[galleryIntroStep];
  const textEl = card.querySelector('#gallery-intro-confirm-text');
  if (galleryIntroNoTaps >= 2) {
    advanceGalleryIntro(item);
    return;
  }
  if (textEl && step.noReply) {
    textEl.textContent = step.noReply;
    card.classList.add('gallery-intro__card--wobble');
    setTimeout(() => card.classList.remove('gallery-intro__card--wobble'), 500);
  }
}

function runGalleryIntroLoading(step) {
  const textEl = document.getElementById('gallery-intro-load-text');
  const barEl = document.getElementById('gallery-intro-load-bar');
  const msgs = step.messages || ['Loading...'];
  const duration = step.duration || 2500;
  const start = performance.now();
  let msgIndex = 0;

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    if (barEl) barEl.style.width = `${p * 100}%`;
    const nextMsg = Math.min(Math.floor(p * msgs.length), msgs.length - 1);
    if (nextMsg !== msgIndex && textEl) {
      msgIndex = nextMsg;
      textEl.textContent = msgs[msgIndex];
    }
    if (p < 1) {
      requestAnimationFrame(tick);
    } else {
      const item = APP_CONTENT.gallery.photos[currentGalleryIndex];
      advanceGalleryIntro(item);
    }
  }
  requestAnimationFrame(tick);
}

function advanceGalleryIntro(item) {
  galleryIntroNoTaps = 0;
  galleryIntroStep++;
  const introConfig = resolveGalleryIntro(item);
  if (!introConfig || galleryIntroStep >= introConfig.steps.length) {
    finishGalleryIntro(item);
  } else {
    renderGalleryIntroStep(item);
  }
}

function finishGalleryIntro(item) {
  galleryIntroStep = 0;
  galleryIntroNoTaps = 0;
  setGalleryMediaVisible(true);
  showGalleryMedia(item);
  const video = document.getElementById('gallery-lightbox-video');
  if (video && !video.hidden) {
    applyGalleryVideoVolume(video);
    suppressMusicForVideo();
    video.play().catch(() => restoreMusicAfterVideo());
  }
}

function showGalleryMedia(item) {
  const img = document.getElementById('gallery-lightbox-img');
  const video = document.getElementById('gallery-lightbox-video');
  const isVideo = isGalleryVideo(item);

  if (isVideo) {
    img.hidden = true;
    img.removeAttribute('src');
    video.hidden = false;
    video.innerHTML = `<source src="${item.src}" type="${galleryVideoMime(item.src)}">`;
    if (item.poster) video.setAttribute('poster', item.poster);
    else video.removeAttribute('poster');
    applyGalleryVideoVolume(video);
    video.onloadedmetadata = () => applyGalleryVideoVolume(video);
    video.load();
  } else {
    video.hidden = true;
    video.innerHTML = '';
    video.removeAttribute('poster');
    img.hidden = false;
    img.src = item.src;
    img.alt = item.alt || '';
  }
}

function updateGalleryLightbox() {
  pauseGalleryVideo();
  galleryIntroStep = 0;
  galleryIntroNoTaps = 0;
  const items = APP_CONTENT.gallery.photos;
  const item = items[currentGalleryIndex];
  const lightbox = document.getElementById('gallery-lightbox');

  if (hasGalleryIntro(item)) {
    renderGalleryIntroStep(item);
  } else {
    setGalleryMediaVisible(true);
    showGalleryMedia(item);
  }

  lightbox?.classList.toggle('gallery-lightbox--intro', galleryIntroActive);

  document.getElementById('gallery-lightbox-counter').textContent =
    `${currentGalleryIndex + 1} / ${items.length}`;
  document.getElementById('gallery-prev').disabled = currentGalleryIndex === 0;
  document.getElementById('gallery-next').disabled = currentGalleryIndex === items.length - 1;
}

function initGallery() {
  const items = document.querySelectorAll('.gallery__item:not(.gallery__item--missing)');
  items.forEach(item => {
    item.addEventListener('click', () => openGalleryLightbox(Number(item.dataset.index)));
  });

  document.getElementById('gallery-prev').addEventListener('click', () => {
    if (currentGalleryIndex > 0) {
      currentGalleryIndex--;
      updateGalleryLightbox();
    }
  });

  document.getElementById('gallery-next').addEventListener('click', () => {
    if (currentGalleryIndex < APP_CONTENT.gallery.photos.length - 1) {
      currentGalleryIndex++;
      updateGalleryLightbox();
    }
  });

  initGallerySwipe();
}

function initGallerySwipe() {
  const stage = document.querySelector('.gallery-lightbox__stage');
  if (!stage) return;

  let startX = 0;
  let dragging = false;

  stage.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    dragging = true;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    if (!dragging || galleryIntroActive) return;
    dragging = false;
    const diff = e.changedTouches[0].clientX - startX;
    const total = APP_CONTENT.gallery.photos.length;
    if (diff < -50 && currentGalleryIndex < total - 1) {
      currentGalleryIndex++;
      updateGalleryLightbox();
    } else if (diff > 50 && currentGalleryIndex > 0) {
      currentGalleryIndex--;
      updateGalleryLightbox();
    }
  }, { passive: true });
}

/* ============================================
   Memory Sheet
   ============================================ */

function createMemoryOverlay() {
  const el = createElement('div', 'overlay');
  el.id = 'memory-overlay';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.innerHTML = `
    <div class="overlay__bg" id="memory-overlay-bg"></div>
    <div class="overlay__sheet">
      <div class="overlay__handle"></div>
      <div class="overlay__top">
        <button class="overlay__nav-btn" id="memory-prev">← Prev</button>
        <span class="overlay__counter" id="memory-counter"></span>
        <button class="overlay__nav-btn" id="memory-next">Next →</button>
      </div>
      <div class="overlay__scroll" id="memory-content"></div>
      <div style="text-align:center;padding-bottom:1rem">
        <button class="overlay__close" id="memory-close">Close</button>
      </div>
    </div>
  `;
  el.querySelector('#memory-overlay-bg').addEventListener('click', closeMemoryOverlay);
  el.querySelector('#memory-close').addEventListener('click', closeMemoryOverlay);
  return el;
}

function openMemoryOverlay(index) {
  currentMemoryIndex = index;
  updateMemoryContent();
  const overlay = document.getElementById('memory-overlay');
  overlay.classList.add('open');
  lockBody();
  setOverlayOpen(true);
  activeOverlay = 'memory';
  const scroll = overlay.querySelector('.overlay__scroll');
  if (scroll) scroll.scrollTop = 0;
}

function closeMemoryOverlay() {
  document.getElementById('memory-overlay').classList.remove('open');
  unlockBody();
  setOverlayOpen(false);
  activeOverlay = null;
}

function updateMemoryContent() {
  const m = APP_CONTENT.memories[currentMemoryIndex];
  const total = APP_CONTENT.memories.length;
  const sheet = document.querySelector('#memory-overlay .overlay__sheet');

  if (sheet) sheet.classList.toggle('overlay__sheet--art', !m.hasImage);

  document.getElementById('memory-content').innerHTML = `
    ${renderMemoryVisual(m, currentMemoryIndex, 'overlay')}
    <p class="overlay__tag">Memory ${String(currentMemoryIndex + 1).padStart(2, '0')}</p>
    <h3 class="overlay__title">${m.title}</h3>
    <div class="overlay__story">${paragraphsToHTML(m.story)}</div>
  `;
  document.getElementById('memory-counter').textContent = `${currentMemoryIndex + 1} / ${total}`;
  document.getElementById('memory-prev').disabled = currentMemoryIndex === 0;
  document.getElementById('memory-next').disabled = currentMemoryIndex === total - 1;

  const scroll = document.querySelector('#memory-overlay .overlay__scroll');
  if (scroll) scroll.scrollTop = 0;
}

/* ============================================
   Letter
   ============================================ */

function createLetterOverlay() {
  const l = APP_CONTENT.finalLetter;
  const el = createElement('div', 'letter-overlay');
  el.id = 'letter-overlay';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.innerHTML = `
    <div class="letter-overlay__head">
      <span class="letter-overlay__tag">${l.label}</span>
      <button class="overlay__close" id="letter-close">Close</button>
    </div>
    <div class="letter-overlay__body">
      <p class="letter-overlay__greeting">${l.greeting}</p>
      <div class="letter-overlay__content">${paragraphsToHTML(l.paragraphs)}</div>
      <p class="letter-overlay__sign">${l.signoff}</p>
      <p class="letter-overlay__name">${l.signature}</p>
    </div>
  `;
  el.querySelector('#letter-close').addEventListener('click', closeLetterOverlay);
  return el;
}

function openLetterOverlay() {
  document.getElementById('letter-overlay').classList.add('open');
  lockBody();
  setOverlayOpen(true);
  activeOverlay = 'letter';
}

function closeLetterOverlay() {
  document.getElementById('letter-overlay').classList.remove('open');
  unlockBody();
  setOverlayOpen(false);
  activeOverlay = null;
}

/* ============================================
   Interactions
   ============================================ */

function initReveal() {
  if (reducedMotion()) {
    document.querySelectorAll('.reveal, .reveal-scale').forEach(el => el.classList.add('show'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, .reveal-scale').forEach(el => obs.observe(el));
}

function initChapter4Reveal() {
  const paras = document.querySelectorAll('.ch4__para');
  if (reducedMotion()) { paras.forEach(p => p.classList.add('show')); return; }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
  }, { threshold: 0.3 });
  paras.forEach(p => obs.observe(p));
}

function initMemorySlider() {
  const track = document.getElementById('memories-track');
  if (!track) return;

  const dots = document.querySelectorAll('.slider-dot');
  const cards = track.querySelectorAll('.memory-card');
  let trackScrolling = false;
  let scrollEndTimer;

  track.addEventListener('scroll', () => {
    trackScrolling = true;
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(() => { trackScrolling = false; }, 180);
    updateActiveFromScroll();
  }, { passive: true });

  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (trackScrolling) return;
      openMemoryOverlay(Number(card.dataset.index));
    });
  });

  function setActive(i) {
    cards.forEach((c, idx) => c.classList.toggle('is-active', idx === i));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  }

  function updateActiveFromScroll() {
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - cardCenter);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActive(closest);
  }

  requestAnimationFrame(updateActiveFromScroll);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const i = Number(dot.dataset.dot);
      const card = cards[i];
      if (card) {
        track.scrollTo({
          left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
          behavior: 'smooth'
        });
      }
    });
  });

  document.getElementById('memory-prev').addEventListener('click', () => {
    if (currentMemoryIndex > 0) {
      currentMemoryIndex--;
      updateMemoryContent();
    }
  });
  document.getElementById('memory-next').addEventListener('click', () => {
    if (currentMemoryIndex < APP_CONTENT.memories.length - 1) {
      currentMemoryIndex++;
      updateMemoryContent();
    }
  });

  initSheetSwipe();
}

function initSheetSwipe() {
  const sheet = document.querySelector('#memory-overlay .overlay__sheet');
  if (!sheet) return;

  let startY = 0;
  let currentY = 0;
  let dragging = false;

  sheet.addEventListener('touchstart', (e) => {
    const scroll = sheet.querySelector('.overlay__scroll');
    if (scroll && scroll.scrollTop > 0) return;
    startY = e.touches[0].clientY;
    dragging = true;
    sheet.style.transition = 'none';
  }, { passive: true });

  sheet.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    currentY = Math.max(0, e.touches[0].clientY - startY);
    sheet.style.transform = `translateY(${currentY}px)`;
  }, { passive: true });

  sheet.addEventListener('touchend', () => {
    if (!dragging) return;
    dragging = false;
    sheet.style.transition = '';
    if (currentY > 100) {
      closeMemoryOverlay();
    }
    sheet.style.transform = '';
    currentY = 0;
  });
}

function initQualities() {
  const items = document.querySelectorAll('.quality-item');
  items.forEach(item => {
    const head = item.querySelector('.quality-item__head');
    const body = item.querySelector('.quality-item__body');
    const inner = item.querySelector('.quality-item__text');

    head.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      items.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.quality-item__head').setAttribute('aria-expanded', 'false');
        const b = i.querySelector('.quality-item__body');
        if (b) b.style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('open');
        head.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = `${inner.scrollHeight}px`;
        setTimeout(() => {
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 280);
      }
    });
  });
}

function initBottomNav() {
  const nav = document.getElementById('bottom-nav');
  const label = document.getElementById('nav-label');
  const count = document.getElementById('nav-count');
  const prev = document.getElementById('nav-prev');
  const next = document.getElementById('nav-next');
  const sections = CHAPTERS.map(c => document.getElementById(c.id)).filter(Boolean);

  function getChapterFromScroll() {
    const y = window.scrollY + window.innerHeight * 0.38;
    let idx = 0;
    sections.forEach((s, i) => {
      if (s.offsetTop <= y) idx = i;
    });
    return idx;
  }

  function goTo(i) {
    if (i < 0 || i >= CHAPTERS.length) return;
    currentChapterIndex = i;
    sections[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateNav();
  }

  function updateNav() {
    label.textContent = CHAPTERS[currentChapterIndex].label;
    count.textContent = `${String(currentChapterIndex + 1).padStart(2, '0')} / ${String(CHAPTERS.length).padStart(2, '0')}`;
    prev.disabled = currentChapterIndex === 0;
    next.disabled = currentChapterIndex === CHAPTERS.length - 1;
  }

  prev.addEventListener('click', () => goTo(currentChapterIndex - 1));
  next.addEventListener('click', () => goTo(currentChapterIndex + 1));

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 60) nav.classList.add('visible');
        const idx = getChapterFromScroll();
        if (idx !== currentChapterIndex) {
          currentChapterIndex = idx;
          updateNav();
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  updateNav();
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${h > 0 ? (window.scrollY / h) * 100 : 0}%`;
  }, { passive: true });
}

function initPageTurn(cb) {
  const curtain = document.getElementById('page-curtain');
  if (reducedMotion()) { cb(); return; }
  curtain.classList.add('active');
  setTimeout(() => {
    cb();
    curtain.classList.add('reveal');
    setTimeout(() => curtain.classList.remove('active', 'reveal'), 800);
  }, 500);
}

function initEndingReveal() {
  const ending = document.getElementById('ending');
  const thank = document.getElementById('ending-thankyou');
  const lines = ending.querySelectorAll('.ending__line');
  const cta = document.getElementById('ending-cta');
  let done = false;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !done) {
        done = true;
        if (reducedMotion()) {
          thank.classList.add('show');
          lines.forEach(l => l.classList.add('show'));
          cta.classList.add('show');
          return;
        }
        setTimeout(() => thank.classList.add('show'), 200);
        lines.forEach((l, i) => setTimeout(() => l.classList.add('show'), 700 + i * 500));
        setTimeout(() => cta.classList.add('show'), 700 + lines.length * 500 + 400);
      }
    });
  }, { threshold: 0.35 });
  obs.observe(ending);
}

function initEvents() {
  document.getElementById('begin-btn').addEventListener('click', () => {
    initPageTurn(() => {
      document.getElementById('chapter-1').scrollIntoView({ behavior: 'smooth' });
      document.getElementById('bottom-nav').classList.add('visible');
      playMusic();
    });
  });

  document.getElementById('open-letter-btn').addEventListener('click', openLetterOverlay);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (activeOverlay === 'memory') closeMemoryOverlay();
      if (activeOverlay === 'letter') closeLetterOverlay();
      if (activeOverlay === 'gallery') closeGalleryLightbox();
    }
    if (activeOverlay === 'memory') {
      if (e.key === 'ArrowLeft' && currentMemoryIndex > 0) { currentMemoryIndex--; updateMemoryContent(); }
      if (e.key === 'ArrowRight' && currentMemoryIndex < APP_CONTENT.memories.length - 1) { currentMemoryIndex++; updateMemoryContent(); }
    }
    if (activeOverlay === 'gallery') {
      const total = APP_CONTENT.gallery.photos.length;
      if (e.key === 'ArrowLeft' && currentGalleryIndex > 0) { currentGalleryIndex--; updateGalleryLightbox(); }
      if (e.key === 'ArrowRight' && currentGalleryIndex < total - 1) { currentGalleryIndex++; updateGalleryLightbox(); }
    }
  });
}

/* ============================================
   Background Music
   ============================================ */

function createMusicPlayer() {
  const { music } = APP_CONTENT;
  const el = createElement('div', 'music-player');
  el.innerHTML = `
    <button class="music-btn" id="music-btn" type="button"
      aria-label="Play background music" aria-pressed="false" title="${music.title} — ${music.artist}">
      <span class="music-btn__icon music-btn__icon--off" aria-hidden="true">♪</span>
      <span class="music-btn__bars" aria-hidden="true">
        <span></span><span></span><span></span>
      </span>
    </button>
    <p class="music-player__label" id="music-label" aria-hidden="true">
      <span class="music-player__title">${music.title}</span>
      <span class="music-player__artist">${music.artist}</span>
    </p>
  `;
  el.querySelector('#music-btn').addEventListener('click', toggleMusic);
  return el;
}

function initMusic() {
  const { music } = APP_CONTENT;
  const audio = new Audio(music.src);
  audio.loop = music.loop;
  audio.volume = music.volume;
  audio.preload = 'auto';

  audio.addEventListener('canplaythrough', () => {
    musicState.ready = true;
    document.getElementById('music-btn')?.classList.remove('music-btn--loading');
  });

  audio.addEventListener('error', () => {
    musicState.error = true;
    const btn = document.getElementById('music-btn');
    if (btn) {
      btn.classList.add('music-btn--error');
      btn.title = 'Music file missing — add lofi-ambient.mp3 to assets/audio/';
    }
  });

  audio.addEventListener('play', () => {
    musicState.playing = true;
    updateMusicButton();
  });

  audio.addEventListener('pause', () => {
    musicState.playing = false;
    updateMusicButton();
  });

  let resumeOnVisible = false;
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      resumeOnVisible = musicState.playing;
      if (resumeOnVisible) audio.pause();
    } else if (resumeOnVisible) {
      audio.play().catch(() => {});
      resumeOnVisible = false;
    }
  });

  musicState.audio = audio;
  document.getElementById('music-btn')?.classList.add('music-btn--loading');
}

function updateMusicButton() {
  const btn = document.getElementById('music-btn');
  const label = document.getElementById('music-label');
  if (!btn) return;

  btn.classList.toggle('music-btn--playing', musicState.playing);
  btn.setAttribute('aria-pressed', musicState.playing ? 'true' : 'false');
  btn.setAttribute('aria-label', musicState.playing ? 'Pause background music' : 'Play background music');
  label?.classList.toggle('music-player__label--show', musicState.playing);
}

function playMusic() {
  if (!musicState.audio || musicState.error) return;
  if (isGalleryVideoPlaying()) return;
  musicState.audio.play().then(() => {
    musicState.playing = true;
    updateMusicButton();
  }).catch(() => {
    updateMusicButton();
  });
}

function pauseMusic() {
  if (!musicState.audio) return;
  musicState.audio.pause();
  musicState.playing = false;
  updateMusicButton();
}

function toggleMusic() {
  if (musicState.error) return;
  if (musicState.playing) pauseMusic();
  else playMusic();
}

/* ============================================
   Init
   ============================================ */

function init() {
  const app = document.getElementById('app');
  app.appendChild(renderOpening());
  app.appendChild(renderChapter1());
  app.appendChild(renderChapter2());
  app.appendChild(renderGallery());
  app.appendChild(renderChapter3());
  app.appendChild(renderChapter4());
  app.appendChild(renderChapter5());
  app.appendChild(renderEnding());
  document.body.appendChild(createMemoryOverlay());
  document.body.appendChild(createGalleryLightbox());
  bindGalleryLightboxEvents();
  document.body.appendChild(createLetterOverlay());
  document.body.appendChild(createMusicPlayer());

  initScrollProgress();
  initBottomNav();
  initMusic();
  initReveal();
  initChapter4Reveal();
  initMemorySlider();
  initGallery();
  initQualities();
  initEndingReveal();
  initEvents();
}

document.addEventListener('DOMContentLoaded', init);

