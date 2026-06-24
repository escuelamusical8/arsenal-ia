// ============================================================
//  ARSENAL IA — Lógica del portal de acceso
// ============================================================

// ====== CONFIGURACIÓN ======
// Clave(s) de acceso. Puedes tener varias (ej: una por campaña).
// Cuando un cliente paga, le entregas una de estas claves.
const ACCESS_KEYS = ["ARSENAL2026", "CENTROIA-VIP"];

// Enlace de compra (Hotmart u otro). Cámbialo por el tuyo.
const BUY_URL = "index.html#pricing";
// ===========================

let lang = localStorage.getItem('lang') || 'es';
let activeCat = 'all';
let searchTerm = '';

// ---------- Helpers ----------
const $ = (id) => document.getElementById(id);

function txt(key){ return PORTAL_TEXT[lang][key]; }

// ---------- Aplicar idioma a textos estáticos ----------
function applyPortalText(){
  document.querySelectorAll('[data-pt]').forEach(el => {
    const v = PORTAL_TEXT[lang][el.getAttribute('data-pt')];
    if (v !== undefined) el.textContent = v;
  });
  // textos sueltos
  $('gateButton').textContent = txt('gateButton');
  $('gateInput').placeholder = txt('gatePlaceholder');
  $('searchInput').placeholder = txt('searchPlaceholder');
  $('backToSite').textContent = txt('backToSite');
  $('logoutBtn').textContent = txt('logout');
  $('welcomeTitle').textContent = txt('welcome');
  $('welcomeSub').textContent = txt('welcomeSub');
  $('noResults').textContent = txt('noResults');
  document.documentElement.lang = lang;
}

// ---------- GATE: control de acceso ----------
function checkAccess(){
  const val = $('gateInput').value.trim().toUpperCase();
  const keys = ACCESS_KEYS.map(k => k.toUpperCase());
  if (keys.includes(val)){
    sessionStorage.setItem('arsenal_access', 'granted');
    openLibrary();
  } else {
    const err = $('gateError');
    err.textContent = txt('gateError');
    err.classList.add('show');
    $('gateInput').value = '';
    $('gateInput').focus();
  }
}

function openLibrary(){
  $('gate').style.display = 'none';
  $('library').hidden = false;
  initLibrary();
}

function logout(){
  sessionStorage.removeItem('arsenal_access');
  location.reload();
}

// ---------- Render: filtros de categoría ----------
function renderFilters(){
  const wrap = $('catFilters');
  wrap.innerHTML = CATS.map(c => {
    const count = c.id === 'all'
      ? ALL_PROMPTS.length
      : ALL_PROMPTS.filter(p => p.cat === c.id).length;
    const active = c.id === activeCat ? ' active' : '';
    return `<button class="cat-pill${active}" data-cat="${c.id}">
      <span>${c.icon}</span> ${c.name[lang]}
      <span class="cat-pill-count">${count}</span>
    </button>`;
  }).join('');

  wrap.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      activeCat = pill.getAttribute('data-cat');
      renderFilters();
      renderPrompts();
    });
  });
}

// ---------- Render: prompts ----------
function renderPrompts(){
  const grid = $('promptsGrid');
  const term = searchTerm.toLowerCase();

  let list = ALL_PROMPTS.filter(p => {
    const matchCat = activeCat === 'all' || p.cat === activeCat;
    const matchSearch = !term ||
      p.t[lang].toLowerCase().includes(term) ||
      p.p[lang].toLowerCase().includes(term);
    return matchCat && matchSearch;
  });

  // contador
  const n = list.length;
  const label = n === 1 ? txt('resultLabel') : txt('resultsLabel');
  $('resultsCount').textContent = `${n} ${label}`;

  // sin resultados
  $('noResults').hidden = n !== 0;

  grid.innerHTML = list.map((p, i) => {
    const cat = CATS.find(c => c.id === p.cat);
    const catName = cat ? cat.name[lang] : '';
    const catIcon = cat ? cat.icon : '';
    return `
    <div class="prompt-card" data-i="${i}">
      <div class="prompt-card-head">
        <h3 class="prompt-title">${p.t[lang]}</h3>
        <span class="prompt-tag">${catIcon} ${catName}</span>
      </div>
      <div class="prompt-body">
        <div class="prompt-text">${escapeHtml(p.p[lang])}<div class="prompt-text-fade"></div></div>
      </div>
      <div class="prompt-card-foot">
        <button class="prompt-expand" data-action="expand">+</button>
        <button class="prompt-copy" data-action="copy">${txt('copy')}</button>
      </div>
    </div>`;
  }).join('');

  // listeners
  grid.querySelectorAll('.prompt-card').forEach((card, i) => {
    const p = list[i];
    card.querySelector('[data-action="expand"]').addEventListener('click', () => {
      const isExp = card.classList.toggle('expanded');
      card.querySelector('[data-action="expand"]').textContent = isExp ? '−' : '+';
    });
    card.querySelector('[data-action="copy"]').addEventListener('click', (e) => {
      const btn = e.currentTarget;
      navigator.clipboard.writeText(p.p[lang]).then(() => {
        btn.textContent = txt('copied');
        btn.classList.add('copied');
        showToast(txt('copied'));
        setTimeout(() => { btn.textContent = txt('copy'); btn.classList.remove('copied'); }, 1600);
      });
    });
  });
}

function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ---------- Toast ----------
let toastTimer;
function showToast(msg){
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1600);
}

// ---------- Cambio de idioma ----------
function setLang(l){
  lang = l;
  localStorage.setItem('lang', l);
  document.querySelectorAll('[data-lang]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === l);
  });
  applyPortalText();
  if (!$('library').hidden){
    renderFilters();
    renderPrompts();
  }
}

// ---------- Init de la biblioteca ----------
function initLibrary(){
  $('year').textContent = new Date().getFullYear();
  renderFilters();
  renderPrompts();
  $('searchInput').addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderPrompts();
  });
  $('logoutBtn').addEventListener('click', logout);
}

// ---------- Arranque ----------
document.addEventListener('DOMContentLoaded', () => {
  applyPortalText();

  // botones de idioma (gate y biblioteca)
  document.querySelectorAll('[data-lang]').forEach(b => {
    b.addEventListener('click', () => setLang(b.getAttribute('data-lang')));
  });

  // gate
  $('gateButton').addEventListener('click', checkAccess);
  $('gateInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkAccess();
  });

  // si ya tenía acceso en esta sesión, entra directo
  if (sessionStorage.getItem('arsenal_access') === 'granted'){
    openLibrary();
  }
});
