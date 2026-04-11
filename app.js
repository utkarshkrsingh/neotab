// ── NeoTab ──

// ── SVG icon fragments (inline, consistent 20×20 viewBox) ──
// Used as fallback when favicon fails to load
const FALLBACK_ICON_SVG = `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="10" cy="10" r="7"/>
  <path d="M10 3c0 0-3 3-3 7s3 7 3 7M10 3c0 0 3 3 3 7s-3 7-3 7M3 10h14"/>
</svg>`;

// SVG icons per board title keyword — used in board headers
const BOARD_ICONS = {
  'ai':          `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="8" r="4"/><path d="M6 16s1-3 4-3 4 3 4 3"/><path d="M3 8h1M16 8h1M10 3V2M5.5 4.5l-.7-.7M14.5 4.5l.7-.7"/></svg>`,
  'email':       `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="16" height="12" rx="2"/><path d="M2 7l8 5 8-5"/></svg>`,
  'calendar':    `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="14" height="14" rx="2"/><path d="M3 8h14M7 2v3M13 2v3"/></svg>`,
  'note':        `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h10a1 1 0 011 1v10l-4 4H5a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M12 14h4l-4 4v-4zM7 7h6M7 10h6M7 13h3"/></svg>`,
  'doc':         `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h10a1 1 0 011 1v10l-4 4H5a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M12 14h4l-4 4v-4zM7 7h6M7 10h6M7 13h3"/></svg>`,
  'social':      `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="10" r="2"/><circle cx="15" cy="5" r="2"/><circle cx="15" cy="15" r="2"/><path d="M7 9l6-3M7 11l6 3"/></svg>`,
  'cloud':       `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 14a4 4 0 01-.5-8 5 5 0 019.9-1A3.5 3.5 0 0116 12.5c0 .83-.17 1-.5 1.5"/></svg>`,
  'storage':     `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 14a4 4 0 01-.5-8 5 5 0 019.9-1A3.5 3.5 0 0116 12.5c0 .83-.17 1-.5 1.5"/></svg>`,
  'task':        `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-8"/><rect x="2" y="3" width="16" height="16" rx="2" stroke-opacity="0.3"/></svg>`,
  'communicat':  `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 4H2v10h5l3 3 3-3h5V4z"/></svg>`,
  'video':       `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="12" height="10" rx="2"/><path d="M14 8.5l4-2v7l-4-2V8.5z"/></svg>`,
  'dev':         `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7l-4 3 4 3M14 7l4 3-4 3M11 5l-2 10"/></svg>`,
  'search':      `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="8.5" cy="8.5" r="5.5"/><path d="M12.5 12.5L17 17"/></svg>`,
  'map':         `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l-4 1.5L2 3v12l6 2 4-1.5 6 1.5V5l-6-2z"/><path d="M8 4.5v12M12 3v11.5"/></svg>`,
  'news':        `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M7 7h6M7 10h6M7 13h4"/></svg>`,
  'finance':     `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14l4-5 4 3 3-4 3 2"/><rect x="2" y="3" width="16" height="14" rx="1.5" stroke-opacity="0.4"/></svg>`,
  'shop':        `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h14l-1.5 7H4.5L3 5z"/><circle cx="8" cy="16" r="1.5"/><circle cx="14" cy="16" r="1.5"/><path d="M1 3h2l1 2"/></svg>`,
  'analytic':    `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16V9M8 16V5M12 16v-7M16 16v-4"/></svg>`,
  'design':      `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l3.5-1 9-9a1.4 1.4 0 00-2-2l-9 9L3 17z"/><path d="M12.5 5.5l2 2"/></svg>`,
};

function getBoardIcon(title) {
  const t = title.toLowerCase();
  for (const [key, svg] of Object.entries(BOARD_ICONS)) {
    if (t.includes(key)) return svg;
  }
  // generic folder
  return `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7h16v9a1 1 0 01-1 1H3a1 1 0 01-1-1V7z"/><path d="M2 7V5a1 1 0 011-1h4.5l2 2H17a1 1 0 011 1v0"/></svg>`;
}

// ── State ──
let state = {
  pages: [],
  activePage: 0,
  wallpaper: 'default',
  theme: 'dark',
  privacy: false,
  customWallpapers: [],   // [{ id, dataUrl }]
};

// ── Default pages ──
const DEFAULT_PAGES = [
  {
    name: 'Home',
    boards: [
      { title: 'AI Tools', links: [
        { name: 'ChatGPT',    url: 'https://chat.openai.com',      desc: '' },
        { name: 'Claude',     url: 'https://claude.ai',            desc: '' },
        { name: 'Perplexity', url: 'https://perplexity.ai',        desc: '' },
        { name: 'Gemini',     url: 'https://gemini.google.com',    desc: '' },
        { name: 'Midjourney', url: 'https://midjourney.com',       desc: '' },
      ]},
      { title: 'Email & Calendar', links: [
        { name: 'Gmail',             url: 'https://mail.google.com',       desc: '' },
        { name: 'Google Calendar',   url: 'https://calendar.google.com',   desc: '' },
        { name: 'Outlook',           url: 'https://outlook.com',           desc: '' },
        { name: 'Calendly',          url: 'https://calendly.com',          desc: '' },
      ]},
      { title: 'Notes & Docs', links: [
        { name: 'Google Docs', url: 'https://docs.google.com', desc: '' },
        { name: 'Notion',      url: 'https://notion.so',       desc: '' },
        { name: 'Obsidian',    url: 'https://obsidian.md',     desc: '' },
        { name: 'Evernote',    url: 'https://evernote.com',    desc: '' },
      ]},
      { title: 'Social Media', links: [
        { name: 'Twitter / X', url: 'https://twitter.com',    desc: '' },
        { name: 'Instagram',   url: 'https://instagram.com',  desc: '' },
        { name: 'LinkedIn',    url: 'https://linkedin.com',   desc: '' },
        { name: 'Reddit',      url: 'https://reddit.com',     desc: '' },
      ]},
      { title: 'Cloud Storage', links: [
        { name: 'Google Drive', url: 'https://drive.google.com',   desc: '' },
        { name: 'Dropbox',      url: 'https://dropbox.com',        desc: '' },
        { name: 'OneDrive',     url: 'https://onedrive.live.com',  desc: '' },
      ]},
      { title: 'Communication', links: [
        { name: 'Slack',         url: 'https://slack.com',          desc: '' },
        { name: 'Discord',       url: 'https://discord.com',        desc: '' },
        { name: 'WhatsApp Web',  url: 'https://web.whatsapp.com',   desc: '' },
        { name: 'Zoom',          url: 'https://zoom.us',            desc: '' },
      ]},
    ]
  },
  {
    name: 'Work',
    boards: [
      { title: 'Task Management', links: [
        { name: 'Todoist', url: 'https://todoist.com',   desc: '' },
        { name: 'Asana',   url: 'https://asana.com',     desc: '' },
        { name: 'Trello',  url: 'https://trello.com',    desc: '' },
        { name: 'Linear',  url: 'https://linear.app',    desc: '' },
      ]},
      { title: 'Video Calls', links: [
        { name: 'Google Meet',     url: 'https://meet.google.com',      desc: '' },
        { name: 'Microsoft Teams', url: 'https://teams.microsoft.com',  desc: '' },
        { name: 'Zoom',            url: 'https://zoom.us',              desc: '' },
      ]},
    ]
  },
  {
    name: 'Dev & Code',
    boards: [
      { title: 'Dev Tools', links: [
        { name: 'GitHub',        url: 'https://github.com',        desc: '' },
        { name: 'GitLab',        url: 'https://gitlab.com',        desc: '' },
        { name: 'Stack Overflow',url: 'https://stackoverflow.com', desc: '' },
        { name: 'Vercel',        url: 'https://vercel.com',        desc: '' },
        { name: 'CodePen',       url: 'https://codepen.io',        desc: '' },
      ]},
      { title: 'Search Engines', links: [
        { name: 'Google',     url: 'https://google.com',      desc: '' },
        { name: 'DuckDuckGo', url: 'https://duckduckgo.com',  desc: '' },
        { name: 'Bing',       url: 'https://bing.com',        desc: '' },
      ]},
    ]
  },
];

function uid() { return Math.random().toString(36).slice(2, 9); }

function seedIds(pages) {
  pages.forEach(p => {
    if (!p.id) p.id = uid();
    p.boards.forEach(b => {
      if (!b.id) b.id = uid();
      b.links.forEach(l => { if (!l.id) l.id = uid(); });
    });
  });
}

// ── Storage ──
function save() {
  try {
    if (typeof browser !== 'undefined' && browser.storage) {
      browser.storage.local.set({ neotab: state });
    } else {
      localStorage.setItem('neotab', JSON.stringify(state));
    }
  } catch { localStorage.setItem('neotab', JSON.stringify(state)); }
}

function load(cb) {
  const init = () => { seedIds(state.pages); cb(); };
  try {
    if (typeof browser !== 'undefined' && browser.storage) {
      browser.storage.local.get('neotab').then(r => {
        if (r.neotab) state = r.neotab; else state.pages = JSON.parse(JSON.stringify(DEFAULT_PAGES));
        init();
      });
    } else {
      const s = localStorage.getItem('neotab');
      if (s) state = JSON.parse(s); else state.pages = JSON.parse(JSON.stringify(DEFAULT_PAGES));
      init();
    }
  } catch { state.pages = JSON.parse(JSON.stringify(DEFAULT_PAGES)); init(); }
}

// ── Favicon URL ──
function faviconUrl(url) {
  try { return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=32`; }
  catch { return ''; }
}

// ── Render ──
function render() {
  const isCustom = state.wallpaper.startsWith('custom-');

  document.body.className = [
    `theme-${state.theme}`,
    isCustom ? 'wallpaper-custom' : `wallpaper-${state.wallpaper}`,
    state.privacy ? 'privacy' : ''
  ].filter(Boolean).join(' ');

  // Apply custom wallpaper image to overlay
  const overlay = document.getElementById('wallpaper-overlay');
  if (isCustom) {
    const cw = (state.customWallpapers || []).find(w => w.id === state.wallpaper);
    overlay.style.backgroundImage = cw ? `url(${cw.dataUrl})` : 'none';
  } else {
    overlay.style.backgroundImage = 'none';
  }

  // Privacy FAB state
  document.getElementById('btn-privacy').classList.toggle('privacy-on', state.privacy);

  // Sync active state on all preset wallpaper items
  document.querySelectorAll('.wallpaper-item').forEach(el => {
    el.classList.toggle('active', el.dataset.wp === state.wallpaper);
  });

  // Render custom wallpaper thumbnails
  const cGrid = document.getElementById('wallpaper-grid-custom');
  if (cGrid) {
    cGrid.innerHTML = '';
    (state.customWallpapers || []).forEach(cw => {
      const item = document.createElement('div');
      item.className = 'wp-custom-item' + (state.wallpaper === cw.id ? ' active' : '');
      item.dataset.id = cw.id;

      const img = document.createElement('img');
      img.src = cw.dataUrl;
      img.alt = '';

      const delBtn = document.createElement('button');
      delBtn.className = 'wp-del';
      delBtn.title = 'Remove';
      delBtn.innerHTML = `<svg viewBox="0 0 9 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1.5 1.5l6 6M7.5 1.5l-6 6"/></svg>`;
      delBtn.addEventListener('click', e => {
        e.stopPropagation();
        state.customWallpapers = state.customWallpapers.filter(w => w.id !== cw.id);
        if (state.wallpaper === cw.id) state.wallpaper = 'default';
        save(); render();
      });

      item.appendChild(img);
      item.appendChild(delBtn);
      item.addEventListener('click', () => {
        state.wallpaper = cw.id;
        save(); render();
      });
      cGrid.appendChild(item);
    });
  }

  // Tabs
  const tc = document.getElementById('tabs-container');
  tc.innerHTML = '';
  state.pages.forEach((page, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab' + (i === state.activePage ? ' active' : '');

    const label = document.createElement('span');
    label.textContent = page.name;

    const del = document.createElement('button');
    del.className = 'tab-del-btn';
    del.title = 'Remove page';
    del.innerHTML = `<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 2l6 6M8 2L2 8"/></svg>`;
    del.addEventListener('click', e => { e.stopPropagation(); deletePage(i); });

    btn.appendChild(label);
    btn.appendChild(del);
    btn.addEventListener('click', () => { state.activePage = i; save(); render(); });
    tc.appendChild(btn);
  });

  // Boards
  const ba = document.getElementById('boards-area');
  ba.innerHTML = '';
  const page = state.pages[state.activePage];
  if (!page) return;

  page.boards.forEach((board, bi) => {
    const card = document.createElement('div');
    card.className = 'board';
    card.style.animationDelay = `${bi * 0.04}s`;

    // Header
    const header = document.createElement('div');
    header.className = 'board-header';

    const titleRow = document.createElement('div');
    titleRow.style.cssText = 'display:flex;align-items:center;gap:7px;min-width:0;';

    const iconWrap = document.createElement('span');
    iconWrap.style.cssText = 'width:16px;height:16px;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:var(--text-muted);';
    iconWrap.innerHTML = getBoardIcon(board.title);
    iconWrap.querySelector('svg').style.cssText = 'width:14px;height:14px;';

    const titleEl = document.createElement('span');
    titleEl.className = 'board-title';
    titleEl.textContent = board.title;

    titleRow.appendChild(iconWrap);
    titleRow.appendChild(titleEl);

    const actions = document.createElement('div');
    actions.className = 'board-actions';

    const delBtn = document.createElement('button');
    delBtn.className = 'board-action-btn danger';
    delBtn.title = 'Delete board';
    delBtn.innerHTML = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 4h10M5 4V3h6v1M6 7v5M10 7v5M4 4l.8 9h6.4L12 4"/>
    </svg>`;
    delBtn.addEventListener('click', () => { page.boards.splice(bi, 1); save(); render(); });

    actions.appendChild(delBtn);
    header.appendChild(titleRow);
    header.appendChild(actions);

    const divider = document.createElement('div');
    divider.className = 'board-divider';

    const linkList = document.createElement('div');
    linkList.className = 'link-list';

    board.links.forEach((link, li) => {
      const a = document.createElement('a');
      a.className = 'link-item';
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';

      // Icon container
      const iconDiv = document.createElement('div');
      iconDiv.className = 'link-icon';

      const img = document.createElement('img');
      img.src = faviconUrl(link.url);
      img.alt = '';
      img.addEventListener('error', () => {
        iconDiv.innerHTML = FALLBACK_ICON_SVG;
        iconDiv.querySelector('svg').style.cssText = 'width:13px;height:13px;';
      });
      iconDiv.appendChild(img);

      // Info
      const info = document.createElement('div');
      info.className = 'link-info';
      const name = document.createElement('div');
      name.className = 'link-name';
      name.textContent = link.name;
      info.appendChild(name);
      if (link.desc) {
        const desc = document.createElement('div');
        desc.className = 'link-desc';
        desc.textContent = link.desc;
        info.appendChild(desc);
      }

      // Delete
      const delLink = document.createElement('button');
      delLink.className = 'link-del-btn';
      delLink.title = 'Remove';
      delLink.innerHTML = `<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 2l6 6M8 2L2 8"/></svg>`;
      delLink.addEventListener('click', e => {
        e.preventDefault(); e.stopPropagation();
        board.links.splice(li, 1); save(); render();
      });

      a.appendChild(iconDiv);
      a.appendChild(info);
      a.appendChild(delLink);
      linkList.appendChild(a);
    });

    // Add link button
    const addLinkBtn = document.createElement('button');
    addLinkBtn.className = 'add-link-btn';
    addLinkBtn.innerHTML = `<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 1v10M1 6h10"/></svg> Add link`;
    addLinkBtn.addEventListener('click', () => openAddLink(bi));

    card.appendChild(header);
    card.appendChild(divider);
    card.appendChild(linkList);
    card.appendChild(addLinkBtn);
    ba.appendChild(card);
  });

  // Add board card
  const addCard = document.createElement('button');
  addCard.className = 'add-board-card';
  addCard.innerHTML = `
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2.5" y="2.5" width="6" height="6" rx="1.5"/>
      <rect x="11.5" y="2.5" width="6" height="6" rx="1.5"/>
      <rect x="2.5" y="11.5" width="6" height="6" rx="1.5"/>
      <path d="M14.5 11.5v6M11.5 14.5h6"/>
    </svg>
    <span>New Board</span>`;
  addCard.addEventListener('click', openAddBoard);
  ba.appendChild(addCard);
}

// ── Page management ──
function deletePage(i) {
  if (state.pages.length <= 1) return;
  state.pages.splice(i, 1);
  if (state.activePage >= state.pages.length) state.activePage = state.pages.length - 1;
  save(); render();
}

// ── Modals ──
let _linkBoardIndex = -1;

function openAddBoard() {
  document.getElementById('board-name-input').value = '';
  document.getElementById('board-modal').classList.add('open');
  setTimeout(() => document.getElementById('board-name-input').focus(), 40);
}
function closeAddBoard() { document.getElementById('board-modal').classList.remove('open'); }

function openAddLink(bi) {
  _linkBoardIndex = bi;
  ['link-name-input','link-url-input','link-desc-input'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('link-modal').classList.add('open');
  setTimeout(() => document.getElementById('link-name-input').focus(), 40);
}
function closeAddLink() { document.getElementById('link-modal').classList.remove('open'); }

// ── Events ──
document.addEventListener('DOMContentLoaded', () => {
  load(() => { render(); bindEvents(); });
});

function bindEvents() {

  // New page
  document.getElementById('btn-add-page').addEventListener('click', () => {
    const name = prompt('Page name:');
    if (!name || !name.trim()) return;
    state.pages.push({ id: uid(), name: name.trim(), boards: [] });
    state.activePage = state.pages.length - 1;
    save(); render();
  });

  // Tab scroll left
  document.getElementById('tab-scroll-left').addEventListener('click', () => {
    document.getElementById('tabs-container').scrollBy({ left: -140, behavior: 'smooth' });
  });

  // Add board (FAB)
  document.getElementById('btn-add-board').addEventListener('click', openAddBoard);

  // Board modal confirm
  document.getElementById('confirm-add-board').addEventListener('click', () => {
    const name = document.getElementById('board-name-input').value.trim();
    if (!name) return;
    state.pages[state.activePage].boards.push({ id: uid(), title: name, links: [] });
    closeAddBoard(); save(); render();
  });
  document.getElementById('board-name-input').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('confirm-add-board').click(); });
  document.getElementById('close-board-modal').addEventListener('click', closeAddBoard);
  document.getElementById('board-modal').addEventListener('click', e => { if (e.target === e.currentTarget) closeAddBoard(); });

  // Link modal confirm
  document.getElementById('confirm-add-link').addEventListener('click', () => {
    const name = document.getElementById('link-name-input').value.trim();
    let url    = document.getElementById('link-url-input').value.trim();
    const desc = document.getElementById('link-desc-input').value.trim();
    if (!name || !url) return;
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    state.pages[state.activePage].boards[_linkBoardIndex].links.push({ id: uid(), name, url, desc });
    closeAddLink(); save(); render();
  });
  document.getElementById('link-url-input').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('confirm-add-link').click(); });
  document.getElementById('close-link-modal').addEventListener('click', closeAddLink);
  document.getElementById('link-modal').addEventListener('click', e => { if (e.target === e.currentTarget) closeAddLink(); });

  // Privacy
  document.getElementById('btn-privacy').addEventListener('click', () => {
    state.privacy = !state.privacy;
    save(); render();
  });

  // Wallpaper panel
  document.getElementById('btn-wallpaper').addEventListener('click', () => {
    document.getElementById('wallpaper-panel').classList.toggle('open');
  });
  document.getElementById('close-wallpaper').addEventListener('click', () => {
    document.getElementById('wallpaper-panel').classList.remove('open');
  });

  // Wallpaper selection — preset grids
  ['wallpaper-grid', 'wallpaper-grid-light'].forEach(gridId => {
    document.getElementById(gridId).addEventListener('click', e => {
      const item = e.target.closest('.wallpaper-item');
      if (!item) return;
      state.wallpaper = item.dataset.wp;
      save(); render();
    });
  });

  // Dark / Light theme toggle
  document.querySelectorAll('.style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.theme = btn.dataset.mode;
      save(); render();
    });
  });

  // Custom wallpaper upload
  document.getElementById('wp-upload-input').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    // Warn if file is very large (> 4MB after base64 ~= 3MB raw)
    if (file.size > 3 * 1024 * 1024) {
      alert('Image is large and may be slow to load. Consider using a smaller file (< 3 MB).');
    }
    const reader = new FileReader();
    reader.onload = ev => {
      const id = 'custom-' + uid();
      if (!state.customWallpapers) state.customWallpapers = [];
      state.customWallpapers.push({ id, dataUrl: ev.target.result });
      state.wallpaper = id;
      save(); render();
    };
    reader.readAsDataURL(file);
    e.target.value = ''; // reset so same file can be re-uploaded
  });

  // Export
  document.getElementById('btn-export').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'neotab-backup.json';
    a.click();
  });
}
