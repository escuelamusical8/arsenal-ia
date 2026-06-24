// ============================================================
//  ARSENAL IA — CONFIGURACIÓN DE LA BIBLIOTECA (portal de acceso)
// ============================================================

// ---- CATEGORÍAS (deben coincidir con el campo "cat" de los prompts) ----
const CATS = [
  { id:"all",          icon:"🗂️", name:{ es:"Todas",                 en:"All" } },
  { id:"marketing",    icon:"📣", name:{ es:"Marketing",             en:"Marketing" } },
  { id:"sales",        icon:"💰", name:{ es:"Ventas",                en:"Sales" } },
  { id:"social",       icon:"📱", name:{ es:"Redes sociales",        en:"Social media" } },
  { id:"copywriting",  icon:"✍️", name:{ es:"Copywriting",           en:"Copywriting" } },
  { id:"business",     icon:"📊", name:{ es:"Negocios",              en:"Business" } },
  { id:"design",       icon:"🎨", name:{ es:"Diseño",                en:"Design" } },
  { id:"productivity", icon:"⚙️", name:{ es:"Productividad",         en:"Productivity" } },
  { id:"ecommerce",    icon:"🛒", name:{ es:"E-commerce",            en:"E-commerce" } },
  { id:"email",        icon:"📧", name:{ es:"Email marketing",       en:"Email marketing" } },
  { id:"seo",          icon:"🔍", name:{ es:"SEO y blogs",           en:"SEO & blogs" } },
  { id:"video",        icon:"🎬", name:{ es:"Video y guiones",       en:"Video & scripts" } },
  { id:"personal",     icon:"🚀", name:{ es:"Marca personal",        en:"Personal brand" } },
  { id:"agents",       icon:"🤖", name:{ es:"IA y Agentes",          en:"AI & Agents" } }
];

// ---- Une todas las tandas de prompts en una sola lista ----
// Si agregas un archivo prompts-4.js, suma PROMPTS_4 aquí.
const ALL_PROMPTS = [].concat(
  typeof PROMPTS_1 !== "undefined" ? PROMPTS_1 : [],
  typeof PROMPTS_2 !== "undefined" ? PROMPTS_2 : [],
  typeof PROMPTS_3 !== "undefined" ? PROMPTS_3 : []
);

// ---- Textos del portal de acceso (bilingüe) ----
const PORTAL_TEXT = {
  es: {
    brandSub: "Portal de acceso",
    searchPlaceholder: "Buscar prompt por palabra clave...",
    resultsLabel: "prompts",
    resultLabel: "prompt",
    noResults: "No se encontraron prompts con esa búsqueda. Prueba otra palabra.",
    copy: "Copiar prompt",
    copied: "¡Copiado!",
    logout: "Salir",
    backToSite: "Ver el sitio",
    welcome: "Bienvenido a tu Arsenal IA",
    welcomeSub: "Tienes acceso completo a toda la biblioteca. Usa el buscador o filtra por categoría. Cada día agregamos más.",
    // Pantalla de login
    gateTitle: "Acceso a la biblioteca",
    gateSub: "Ingresa la clave que recibiste al comprar tu acceso.",
    gatePlaceholder: "Escribe tu clave de acceso",
    gateButton: "Entrar",
    gateError: "Clave incorrecta. Revisa e intenta de nuevo.",
    gateNoAccess: "¿Aún no tienes acceso?",
    gateBuy: "Conseguir mi acceso",
    gateHelp: "¿Problemas para entrar? Escríbenos por WhatsApp."
  },
  en: {
    brandSub: "Access portal",
    searchPlaceholder: "Search prompts by keyword...",
    resultsLabel: "prompts",
    resultLabel: "prompt",
    noResults: "No prompts found for that search. Try another word.",
    copy: "Copy prompt",
    copied: "Copied!",
    logout: "Log out",
    backToSite: "View site",
    welcome: "Welcome to your AI Arsenal",
    welcomeSub: "You have full access to the entire library. Use the search or filter by category. We add more every day.",
    gateTitle: "Library access",
    gateSub: "Enter the key you received when you bought your access.",
    gatePlaceholder: "Type your access key",
    gateButton: "Enter",
    gateError: "Wrong key. Check it and try again.",
    gateNoAccess: "Don't have access yet?",
    gateBuy: "Get my access",
    gateHelp: "Trouble logging in? Message us on WhatsApp."
  }
};
