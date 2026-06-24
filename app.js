// =========================================================
//  PROMPTS.IA — Lógica del sitio
// =========================================================

// ---- CONFIGURACIÓN ----
// Tu WhatsApp Business (sin +, sin espacios). Aquí te llega el comprobante.
const WHATSAPP = "573189562677";
// Mensaje que se escribe solo cuando el cliente toca el botón verde.
const WA_MSG = {
  es: "Hola, acabo de pagar el Arsenal IA (20 USD / $80.000 COP). Aquí está mi comprobante:",
  en: "Hi, I just paid for the AI Arsenal (20 USD). Here's my receipt:"
};
// -----------------------------------------------------------------

let currentLang = localStorage.getItem('lang') || 'es';

// Helper: obtiene un valor anidado por ruta "a.b.c"
function getByPath(obj, path){
  return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
}

// Aplica todas las traducciones marcadas con data-i18n
function applyI18n(){
  const dict = CONTENT[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getByPath(dict, el.getAttribute('data-i18n'));
    if (val !== undefined) el.textContent = val;
  });
  document.documentElement.lang = currentLang;
}

// Render: herramientas (trust)
function renderTools(){
  const wrap = document.getElementById('trustTools');
  wrap.innerHTML = CONTENT[currentLang].trust.tools
    .map(t => `<span class="trust-tool">${t}</span>`).join('');
}

// Render: beneficios
function renderBenefits(){
  const wrap = document.getElementById('benefitsGrid');
  wrap.innerHTML = CONTENT[currentLang].benefits.items.map(b => `
    <div class="benefit-card">
      <div class="benefit-icon">${b.icon}</div>
      <h3>${b.title}</h3>
      <p>${b.text}</p>
    </div>`).join('');
}

// Render: catálogo (con prompts de muestra)
function renderCatalog(){
  const wrap = document.getElementById('catalogGrid');
  const t = CONTENT[currentLang].catalog;
  wrap.innerHTML = CATEGORIES.map((c, i) => `
    <div class="cat-card">
      <div class="cat-head">
        <span class="cat-icon">${c.icon}</span>
        <div class="cat-title-wrap">
          <div class="cat-name">${c.name[currentLang]}
            <span class="cat-count">${c.count.toLocaleString(currentLang === 'es' ? 'es-CO' : 'en-US')}+</span>
          </div>
          <div class="cat-desc">${c.desc[currentLang]}</div>
        </div>
      </div>
      <div class="cat-sample">
        <div class="cat-sample-head">
          <span class="cat-sample-label">${c.sample.title[currentLang]}</span>
          <button class="copy-btn" data-cat="${i}">${t.copyLabel}</button>
        </div>
        <div class="cat-sample-prompt" id="prompt-${i}">${c.sample.prompt[currentLang]}</div>
      </div>
      <a href="#" class="cat-unlock" data-unlock="1">${currentLang === 'es' ? '🔓 Ver los ' + c.count.toLocaleString('es-CO') + '+ prompts de esta categoría' : '🔓 See all ' + c.count.toLocaleString('en-US') + '+ prompts in this category'}</a>
    </div>`).join('');

  // Listeners de copiar
  wrap.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.getAttribute('data-cat');
      const text = CATEGORIES[idx].sample.prompt[currentLang];
      navigator.clipboard.writeText(text).then(() => {
        const original = CONTENT[currentLang].catalog.copyLabel;
        btn.textContent = CONTENT[currentLang].catalog.copiedLabel;
        btn.classList.add('copied');
        showToast(CONTENT[currentLang].catalog.copiedLabel);
        setTimeout(() => { btn.textContent = original; btn.classList.remove('copied'); }, 1800);
      });
    });
  });

  // Listeners de "desbloquear categoría" -> abre el modal de pago
  wrap.querySelectorAll('[data-unlock]').forEach(el => {
    el.addEventListener('click', (e) => { e.preventDefault(); if (typeof openPay === 'function') openPay(); });
  });
}

// Render: robots
function renderRobots(){
  const wrap = document.getElementById('robotsGrid');
  wrap.innerHTML = ROBOTS.map(r => `
    <div class="robot-card">
      <span class="robot-icon">${r.icon}</span>
      <div class="robot-info">
        <h4>${r.name[currentLang]}</h4>
        <p>${r.use[currentLang]}</p>
      </div>
    </div>`).join('');
}

// Render: features del precio
function renderPriceFeatures(){
  const wrap = document.getElementById('priceFeatures');
  wrap.innerHTML = CONTENT[currentLang].pricing.features
    .map(f => `<li>${f}</li>`).join('');
}

// Render: FAQ
function renderFaq(){
  const wrap = document.getElementById('faqList');
  wrap.innerHTML = CONTENT[currentLang].faq.items.map((f, i) => `
    <div class="faq-item" data-faq="${i}">
      <button class="faq-q">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>`).join('');

  wrap.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-a');
      const isOpen = item.classList.contains('open');
      // cierra todos
      wrap.querySelectorAll('.faq-item').forEach(it => {
        it.classList.remove('open');
        it.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen){
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// Toast
let toastTimer;
function showToast(msg){
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

// Cambia el idioma y re-renderiza todo
function setLang(lang){
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('#langSwitch button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyI18n();
  renderTools();
  renderBenefits();
  renderCatalog();
  renderRobots();
  renderPriceFeatures();
  renderFaq();
  if (typeof updateWhatsappLink === 'function') updateWhatsappLink();
  // actualizar textos de los botones copiar del modal
  document.querySelectorAll('.pay-copy').forEach(b => {
    if (!b.classList.contains('copied')) b.textContent = CONTENT[currentLang].pay.copy;
  });
}

// Abre/cierra la ventana de pago y conecta los botones
function wirePayModal(){
  const overlay = document.getElementById('payOverlay');
  const openBtns = ['buyButton', 'buyButton2', 'stickyCta'];

  // Botones que abren el modal (incluye el botón "Quiero acceso" del header y hero)
  document.querySelectorAll('a[data-i18n="nav.cta"], a[data-i18n="hero.ctaPrimary"], a[data-i18n="pricing.cta"], a[data-i18n="finalCta.button"]').forEach(el => {
    el.addEventListener('click', (e) => { e.preventDefault(); openPay(); });
  });
  openBtns.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', (e) => { e.preventDefault(); openPay(); });
  });

  // Cerrar
  document.getElementById('payClose').addEventListener('click', closePay);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closePay(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePay(); });

  // Botón de WhatsApp con mensaje
  updateWhatsappLink();

  // Botones copiar de cada método
  overlay.querySelectorAll('.pay-copy').forEach(btn => {
    btn.textContent = CONTENT[currentLang].pay.copy;
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.getAttribute('data-copy')).then(() => {
        const orig = CONTENT[currentLang].pay.copy;
        btn.textContent = CONTENT[currentLang].pay.copied;
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 1400);
      });
    });
  });
}

function openPay(){
  document.getElementById('payOverlay').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closePay(){
  document.getElementById('payOverlay').hidden = true;
  document.body.style.overflow = '';
}
function updateWhatsappLink(){
  const wa = document.getElementById('payWhatsapp');
  if (wa){
    const msg = encodeURIComponent(WA_MSG[currentLang]);
    wa.href = `https://wa.me/${WHATSAPP}?text=${msg}`;
  }
}

// Menú móvil
function wireMenu(){
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  document.querySelectorAll('#langSwitch button').forEach(b => {
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });
  setLang(currentLang);
  wirePayModal();
  wireMenu();
});
