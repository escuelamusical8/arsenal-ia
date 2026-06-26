// ============================================================
//  CONTENIDO DEL PORTAL — Bilingüe ES / EN
//  Edita este archivo para cambiar textos, prompts y precios.
// ============================================================

const CONTENT = {
  es: {
    nav: {
      benefits: "Qué incluye",
      catalog: "Catálogo",
      robots: "Robots IA",
      faq: "Preguntas",
      cta: "Quiero acceso",
      login: "Ya compré · Entrar"
    },
    hero: {
      badge: "Actualizado 2026 · GPT-5, Claude, Gemini, Midjourney v7",
      growthNote: "📈 Biblioteca en constante crecimiento. Cada semana añadimos nuevos prompts, robots y recursos para que siempre tengas contenido actualizado. Precio especial de lanzamiento: este valor puede aumentar para nuevos miembros a medida que Arsenal IA siga creciendo.",
      title: "Arsenal IA: tu biblioteca completa de prompts, robots y agentes",
      subtitle: "Todo lo que necesitas para sacarle el máximo provecho a la inteligencia artificial, organizado y en un solo lugar. Copia, ajusta y obtén resultados profesionales en tu negocio, contenido, estudios y más. En español e inglés.",
      ctaPrimary: "Conseguir acceso ahora",
      ctaSecondary: "Ver qué incluye",
      stat1num: "10.500+",
      stat1label: "Prompts probados",
      stat2num: "30",
      stat2label: "Robots / GPTs",
      stat3num: "15",
      stat3label: "Categorías",
      stat4num: "∞",
      stat4label: "Actualizaciones"
    },
    trust: {
      title: "Compatible con las mejores herramientas de IA",
      tools: ["ChatGPT / GPT-5", "Claude", "Gemini", "Grok", "Midjourney v7", "DALL·E", "Perplexity", "Copilot"]
    },
    benefits: {
      title: "Todo lo que necesitas para dominar la IA",
      subtitle: "No son prompts genéricos copiados de internet. Cada uno está estructurado, probado y listo para darte resultados reales.",
      items: [
        { icon: "⚡", title: "Resultados inmediatos", text: "Copia el prompt, pégalo en tu IA favorita y obtén un resultado profesional en segundos. Cero curva de aprendizaje." },
        { icon: "🎯", title: "Organizados por objetivo", text: "15 categorías claras: marketing, ventas, redes sociales, copywriting, negocios, diseño, productividad y más." },
        { icon: "🤖", title: "30 robots especializados", text: "Asistentes de IA preconfigurados para tareas específicas: cierre de ventas, creación de embudos, guiones, ideas virales." },
        { icon: "🌎", title: "Pensado para Latinoamérica", text: "Prompts adaptados al mercado hispano, con ejemplos reales de negocios locales y lenguaje cercano." },
        { icon: "📲", title: "Acceso desde cualquier dispositivo", text: "Funciona en PC, tablet y celular. Lleva tu biblioteca de prompts contigo a donde vayas." },
        { icon: "🔄", title: "Acceso vitalicio de lanzamiento", text: "Los miembros que ingresen durante esta etapa conservarán el acceso y todas las actualizaciones futuras sin costo adicional. Un solo pago, sin mensualidades ni renovaciones." }
      ]
    },
    catalog: {
      title: "Explora el catálogo por categorías",
      subtitle: "Un vistazo a lo que encontrarás dentro. Cada categoría incluye decenas de prompts listos para usar.",
      tryLabel: "Probar este prompt",
      copyLabel: "Copiar",
      copiedLabel: "¡Copiado!"
    },
    robots: {
      title: "Los 30 robots de IA",
      subtitle: "Asistentes preconfigurados que hacen el trabajo pesado por ti. Solo eliges, pegas tu situación y recibes resultados.",
      useLabel: "Para qué sirve"
    },
    pricing: {
      title: "Acceso completo, un solo pago",
      subtitle: "Sin suscripciones ni sorpresas. Pagas una vez y accedes a todo, para siempre.",
      badge: "Oferta de lanzamiento",
      planName: "Arsenal IA Completo",
      price: "$80.000",
      priceOld: "$160.000",
      currency: "COP · ≈ 20 USD",
      priceNote: "Pago único · Acceso inmediato",
      features: [
        "Más de 10.500 prompts organizados",
        "Los 30 robots / GPTs especializados",
        "Agentes de IA preconfigurados",
        "15 categorías de negocio y contenido",
        "Versión en español e inglés",
        "Acceso vitalicio (oferta de lanzamiento)",
        "Acceso desde PC, tablet y celular",
        "Soporte directo por WhatsApp"
      ],
      cta: "Quiero mi acceso ahora",
      guarantee: "Garantía de satisfacción · Soporte incluido"
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { q: "¿Cómo recibo el acceso después de pagar?", a: "Inmediatamente después de tu compra recibes el enlace de acceso al portal con todos los prompts y robots. Si tienes cualquier inconveniente, escríbenos por WhatsApp y lo resolvemos al instante." },
        { q: "¿Necesito saber de tecnología o programación?", a: "Para nada. Si sabes copiar y pegar, sabes usar estos prompts. Cada uno viene listo: solo lo pegas en ChatGPT, Claude o tu IA favorita y obtienes el resultado." },
        { q: "¿Funciona con la versión gratuita de ChatGPT?", a: "Sí. Los prompts funcionan tanto en versiones gratuitas como de pago de ChatGPT, Claude, Gemini y otras. Algunos robots avanzados rinden mejor en las versiones pro, pero todos son utilizables gratis." },
        { q: "¿Los prompts están actualizados y cuántos hay?", a: "Arsenal IA es una biblioteca en crecimiento constante: agregamos nuevos prompts cada semana en camino a superar los 10.000. Al comprar accedes a toda la colección disponible hoy y recibes cada actualización gratis, de por vida, sin pagar de nuevo. Todo optimizado para los modelos más nuevos como GPT-5, Claude y Gemini." },
        { q: "¿El acceso es realmente de por vida?", a: "Sí. Como parte de la oferta de lanzamiento, quienes ingresan ahora obtienen acceso vitalicio con un único pago: sin mensualidades ni renovaciones, y con todas las actualizaciones futuras incluidas sin costo adicional. Este es un precio especial de lanzamiento que puede aumentar para nuevos miembros a medida que la biblioteca siga creciendo, pero si ingresas ahora conservas tu acceso para siempre." },
        { q: "¿Sirve para mi tipo de negocio?", a: "Hay prompts para emprendedores, freelancers, dueños de tiendas, creadores de contenido, agencias y más. Si vendes algo o creas contenido, te va a servir." },
        { q: "¿Puedo usarlos en español y en inglés?", a: "Sí. El portal completo está disponible en ambos idiomas y muchos prompts incluyen las dos versiones para que trabajes en el mercado que quieras." }
      ]
    },
    finalCta: {
      title: "Empieza a usar la IA como un profesional hoy",
      subtitle: "Deja de perder horas escribiendo prompts que no funcionan. Accede a la biblioteca completa y obtén resultados desde el primer minuto.",
      button: "Conseguir acceso completo",
      note: "Pago único · Acceso inmediato · Oferta de lanzamiento"
    },
    pay: {
      badge: "Oferta de lanzamiento",
      title: "Arsenal IA Completo",
      price: "$80.000",
      currency: "COP · ≈ 20 USD",
      sub: "Acceso total a +10.500 prompts, 30 robots y agentes. Pago único, acceso de por vida.",
      step1: "Realiza el pago a cualquiera de las cuentas de abajo.",
      step2: "Envíanos el comprobante por WhatsApp con el botón verde.",
      step3: "Recibes tu clave de acceso y entras a ver todo el contenido.",
      methodsTitle: "Métodos de pago",
      savings: "(ahorros)",
      copy: "copiar",
      copied: "✓",
      waButton: "Enviar comprobante por WhatsApp",
      foot: "Te respondemos lo más rápido posible · Soporte 3112541324"
    },
    footer: {
      rights: "Todos los derechos reservados.",
      support: "Soporte",
      follow: "Sígueme",
      legal: "Este material es de uso personal. La reproducción, distribución o reventa no autorizada está prohibida y protegida por la ley de derechos de autor."
    }
  },

  en: {
    nav: {
      benefits: "What's inside",
      catalog: "Catalog",
      robots: "AI Robots",
      faq: "FAQ",
      cta: "Get access",
      login: "Already bought · Enter"
    },
    hero: {
      badge: "Updated 2026 · GPT-5, Claude, Gemini, Midjourney v7",
      growthNote: "📈 A constantly growing library. Every week we add new prompts, robots and resources so you always have updated content. Special launch price: this value may increase for new members as Arsenal IA keeps growing.",
      title: "Arsenal IA: your complete library of AI prompts, robots and agents",
      subtitle: "Everything you need to get the most out of artificial intelligence, organized and in one place. Copy, adjust and get professional results for your business, content, studies and more. In Spanish and English.",
      ctaPrimary: "Get access now",
      ctaSecondary: "See what's inside",
      stat1num: "10,500+",
      stat1label: "Tested prompts",
      stat2num: "30",
      stat2label: "Robots / GPTs",
      stat3num: "15",
      stat3label: "Categories",
      stat4num: "∞",
      stat4label: "Updates"
    },
    trust: {
      title: "Works with every major AI tool",
      tools: ["ChatGPT / GPT-5", "Claude", "Gemini", "Grok", "Midjourney v7", "DALL·E", "Perplexity", "Copilot"]
    },
    benefits: {
      title: "Everything you need to master AI",
      subtitle: "These aren't generic prompts copied off the internet. Each one is structured, tested and ready to deliver real results.",
      items: [
        { icon: "⚡", title: "Instant results", text: "Copy the prompt, paste it into your favorite AI and get a professional result in seconds. Zero learning curve." },
        { icon: "🎯", title: "Organized by goal", text: "15 clear categories: marketing, sales, social media, copywriting, business, design, productivity and more." },
        { icon: "🤖", title: "30 specialized robots", text: "Pre-built AI assistants for specific tasks: sales closing, funnel building, scripts, viral content ideas." },
        { icon: "🌎", title: "Built for real business", text: "Prompts adapted to real markets, with practical examples for local businesses and natural language." },
        { icon: "📲", title: "Access from any device", text: "Works on desktop, tablet and phone. Take your prompt library with you wherever you go." },
        { icon: "🔄", title: "Launch lifetime access", text: "Members who join during this stage keep access and all future updates at no extra cost. One single payment, no monthly fees or renewals." }
      ]
    },
    catalog: {
      title: "Browse the catalog by category",
      subtitle: "A preview of what you'll find inside. Each category includes dozens of ready-to-use prompts.",
      tryLabel: "Try this prompt",
      copyLabel: "Copy",
      copiedLabel: "Copied!"
    },
    robots: {
      title: "The 30 AI robots",
      subtitle: "Pre-configured assistants that do the heavy lifting for you. Just pick one, paste your situation and get results.",
      useLabel: "What it does"
    },
    pricing: {
      title: "Full access, one single payment",
      subtitle: "No subscriptions, no surprises. Pay once and access everything, forever.",
      badge: "Launch offer",
      planName: "Complete AI Arsenal",
      price: "$20",
      priceOld: "$40",
      currency: "USD",
      priceNote: "One-time payment · Instant access",
      features: [
        "10,500+ organized prompts",
        "All 30 specialized robots / GPTs",
        "Pre-configured AI agents",
        "15 business and content categories",
        "Spanish and English versions",
        "Lifetime access (launch offer)",
        "Access from desktop, tablet and phone",
        "Direct WhatsApp support"
      ],
      cta: "Get my access now",
      guarantee: "Satisfaction guarantee · Support included"
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "How do I get access after paying?", a: "Right after your purchase you receive the access link to the portal with all the prompts and robots. If you run into any issue, message us on WhatsApp and we'll fix it instantly." },
        { q: "Do I need any tech or coding knowledge?", a: "Not at all. If you can copy and paste, you can use these prompts. Each one comes ready: just paste it into ChatGPT, Claude or your favorite AI and get the result." },
        { q: "Does it work with the free version of ChatGPT?", a: "Yes. The prompts work on both free and paid versions of ChatGPT, Claude, Gemini and others. Some advanced robots perform better on pro versions, but all are usable for free." },
        { q: "Are the prompts up to date and how many are there?", a: "Arsenal IA is a constantly growing library: we add new prompts every week on the way to 10,000+. When you buy, you access the full collection available today and get every update free, for life, with no extra payment. All optimized for the newest models like GPT-5, Claude and Gemini." },
        { q: "Is the access really for life?", a: "Yes. As part of the launch offer, those who join now get lifetime access with a single payment: no monthly fees or renewals, and all future updates included at no extra cost. This is a special launch price that may increase for new members as the library keeps growing, but if you join now you keep your access forever." },
        { q: "Will it work for my type of business?", a: "There are prompts for entrepreneurs, freelancers, shop owners, content creators, agencies and more. If you sell something or create content, it'll work for you." },
        { q: "Can I use them in both Spanish and English?", a: "Yes. The whole portal is available in both languages and many prompts include both versions so you can work in whichever market you want." }
      ]
    },
    finalCta: {
      title: "Start using AI like a pro today",
      subtitle: "Stop wasting hours writing prompts that don't work. Get the full library and see results from the very first minute.",
      button: "Get full access",
      note: "One-time payment · Instant access · Launch offer"
    },
    pay: {
      badge: "Launch offer",
      title: "Complete AI Arsenal",
      price: "$20",
      currency: "USD",
      sub: "Full access to 10,500+ prompts, 30 robots and agents. One-time payment, lifetime access.",
      step1: "Make the payment to any of the accounts below.",
      step2: "Send us the receipt on WhatsApp using the green button.",
      step3: "You'll get your access key and enter to see all the content.",
      methodsTitle: "Payment methods",
      savings: "(savings)",
      copy: "copy",
      copied: "✓",
      waButton: "Send receipt on WhatsApp",
      foot: "We reply as fast as possible · Support 3112541324"
    },
    footer: {
      rights: "All rights reserved.",
      support: "Support",
      follow: "Follow me",
      legal: "This material is for personal use. Unauthorized reproduction, distribution or resale is prohibited and protected by copyright law."
    }
  }
};

// ============================================================
//  CATEGORÍAS Y PROMPTS DE MUESTRA (bilingüe)
//  Estos son los prompts visibles en la landing como vitrina.
//  La biblioteca completa va en el portal de acceso.
// ============================================================

const CATEGORIES = [
  {
    id: "agents",
    icon: "🤖",
    count: 600,
    name: { es: "IA y Agentes", en: "AI & Agents" },
    desc: { es: "Crea tus propios GPTs, agentes y automatizaciones.", en: "Build your own GPTs, agents and automations." },
    sample: {
      title: { es: "Crea tu propio agente personalizado", en: "Build your own custom agent" },
      prompt: {
        es: "Actúa como experto en configuración de agentes de IA. Ayúdame a crear las instrucciones para un GPT/agente personalizado que se especialice en [TAREA]. Dame: el rol que debe asumir, su personalidad y tono, qué debe hacer paso a paso, qué información pedir al usuario, qué formato de respuesta usar y qué NO debe hacer. Listo para copiar y pegar en la configuración.",
        en: "Act as an AI agent configuration expert. Help me create the instructions for a custom GPT/agent specialized in [TASK]. Give me: the role it should take, its personality and tone, what it should do step by step, what info to ask the user, what response format to use and what it should NOT do. Ready to copy and paste into the configuration."
      }
    }
  },
  {
    id: "education",
    icon: "🎓",
    count: 400,
    name: { es: "Educación", en: "Education" },
    desc: { es: "Planes de clase, exámenes, material para enseñar y estudiar.", en: "Lesson plans, tests, material to teach and study." },
    sample: {
      title: { es: "Plan de clase completo", en: "Complete lesson plan" },
      prompt: {
        es: "Actúa como experto en pedagogía. Crea un plan de clase completo sobre [TEMA] para estudiantes de [NIVEL/GRADO]. Incluye: objetivo de aprendizaje, conocimientos previos necesarios, introducción que enganche, desarrollo de la clase paso a paso con tiempos, una actividad práctica, materiales necesarios y forma de evaluar lo aprendido. Que sea dinámico y fácil de aplicar.",
        en: "Act as a pedagogy expert. Create a complete lesson plan about [TOPIC] for [LEVEL/GRADE] students. Include: learning objective, required prior knowledge, an engaging introduction, step-by-step lesson development with timing, a hands-on activity, needed materials and a way to assess learning. Make it dynamic and easy to apply."
      }
    }
  },
  {
    id: "health",
    icon: "🩺",
    count: 400,
    name: { es: "Salud y bienestar", en: "Health & wellness" },
    desc: { es: "Educación al paciente, hábitos saludables, gestión de consultorios.", en: "Patient education, healthy habits, clinic management." },
    sample: {
      title: { es: "Material educativo para pacientes", en: "Educational material for patients" },
      prompt: {
        es: "Actúa como comunicador en salud. Crea un material educativo claro y sencillo para explicar a pacientes qué es [CONDICIÓN/TEMA DE SALUD], en lenguaje fácil de entender, sin tecnicismos. Incluye: qué es, hábitos que ayudan, señales de cuándo consultar al médico y preguntas frecuentes. Importante: aclara que no reemplaza la consulta médica profesional.",
        en: "Act as a health communicator. Create clear, simple educational material to explain to patients what [CONDITION/HEALTH TOPIC] is, in easy-to-understand language, without jargon. Include: what it is, helpful habits, signs of when to see a doctor and FAQs. Important: clarify it doesn't replace professional medical consultation."
      }
    }
  },
  {
    id: "marketing",
    icon: "📣",
    count: 1200,
    name: { es: "Marketing y publicidad", en: "Marketing & advertising" },
    desc: { es: "Campañas, anuncios de Meta y Google, estrategias de embudo.", en: "Campaigns, Meta & Google ads, funnel strategies." },
    sample: {
      title: { es: "Anuncio de Facebook que convierte", en: "High-converting Facebook ad" },
      prompt: {
        es: "Actúa como un copywriter experto en Meta Ads. Crea un anuncio para Facebook que venda [PRODUCTO/SERVICIO] dirigido a [PÚBLICO]. Incluye: 1 gancho que detenga el scroll en la primera línea, 3 beneficios concretos enfocados en la transformación del cliente, 1 prueba social creíble, manejo de la objeción principal y una llamada a la acción clara. Tono cercano y persuasivo. Dame 3 variantes distintas.",
        en: "Act as an expert Meta Ads copywriter. Create a Facebook ad to sell [PRODUCT/SERVICE] targeting [AUDIENCE]. Include: 1 scroll-stopping hook in the first line, 3 concrete benefits focused on the customer's transformation, 1 believable social proof, handling of the main objection and a clear call to action. Warm, persuasive tone. Give me 3 different variations."
      }
    }
  },
  {
    id: "sales",
    icon: "💰",
    count: 950,
    name: { es: "Ventas y cierres", en: "Sales & closing" },
    desc: { es: "Guiones de WhatsApp, manejo de objeciones, seguimiento.", en: "WhatsApp scripts, objection handling, follow-ups." },
    sample: {
      title: { es: "Cierre de venta por WhatsApp", en: "WhatsApp sales closer" },
      prompt: {
        es: "Eres un experto en ventas consultivas por WhatsApp. Mi cliente me dice: \"[OBJECIÓN DEL CLIENTE]\". Dame 3 respuestas distintas para manejar esa objeción sin sonar desesperado ni agresivo, que validen su preocupación, reenfoquen hacia el valor y cierren con una pregunta que avance la venta. Mensajes cortos, naturales, listos para enviar.",
        en: "You're an expert in consultative WhatsApp sales. My customer says: \"[CUSTOMER OBJECTION]\". Give me 3 different replies to handle that objection without sounding desperate or pushy, that validate their concern, refocus on value and close with a question that moves the sale forward. Short, natural messages ready to send."
      }
    }
  },
  {
    id: "social",
    icon: "📱",
    count: 1100,
    name: { es: "Redes sociales", en: "Social media" },
    desc: { es: "Ideas virales, calendarios, captions para Reels y TikTok.", en: "Viral ideas, calendars, captions for Reels & TikTok." },
    sample: {
      title: { es: "30 ideas de contenido viral", en: "30 viral content ideas" },
      prompt: {
        es: "Actúa como un estratega de contenido viral. Mi cuenta es de [NICHO] y mi público es [PÚBLICO]. Dame 30 ideas de Reels/TikTok organizadas en 4 tipos: educativas, de entretenimiento, de venta y de comunidad. Para cada idea incluye el gancho de los primeros 3 segundos y el formato sugerido. Ordénalas de mayor a menor potencial de viralización.",
        en: "Act as a viral content strategist. My account is about [NICHE] and my audience is [AUDIENCE]. Give me 30 Reels/TikTok ideas organized in 4 types: educational, entertainment, sales and community. For each idea include the first-3-seconds hook and the suggested format. Sort them from highest to lowest viral potential."
      }
    }
  },
  {
    id: "copywriting",
    icon: "✍️",
    count: 900,
    name: { es: "Copywriting", en: "Copywriting" },
    desc: { es: "Páginas de venta, emails, títulos y descripciones.", en: "Sales pages, emails, headlines and descriptions." },
    sample: {
      title: { es: "Estructura de página de venta", en: "Sales page structure" },
      prompt: {
        es: "Eres un copywriter de respuesta directa. Escribe la estructura completa de una página de venta para [PRODUCTO]. Incluye: titular principal con promesa clara, subtítulo, identificación del problema, agitación, presentación de la solución, beneficios en viñetas, prueba social, oferta, garantía, preguntas frecuentes y llamada a la acción final. Hazla persuasiva y enfocada en el cliente, no en el producto.",
        en: "You're a direct-response copywriter. Write the complete structure of a sales page for [PRODUCT]. Include: main headline with a clear promise, subheadline, problem identification, agitation, solution presentation, bulleted benefits, social proof, offer, guarantee, FAQ and final call to action. Make it persuasive and focused on the customer, not the product."
      }
    }
  },
  {
    id: "business",
    icon: "📊",
    count: 850,
    name: { es: "Negocios y estrategia", en: "Business & strategy" },
    desc: { es: "Modelos de negocio, precios, análisis de competencia.", en: "Business models, pricing, competitor analysis." },
    sample: {
      title: { es: "Plan de negocio en 1 página", en: "1-page business plan" },
      prompt: {
        es: "Actúa como consultor de negocios. Ayúdame a crear un plan de negocio en una sola página para [IDEA DE NEGOCIO]. Incluye: propuesta de valor, cliente ideal, principales fuentes de ingreso, estructura de costos, canales de adquisición, ventaja competitiva y los 3 primeros pasos concretos para arrancar esta semana. Sé directo y práctico.",
        en: "Act as a business consultant. Help me create a one-page business plan for [BUSINESS IDEA]. Include: value proposition, ideal customer, main revenue streams, cost structure, acquisition channels, competitive advantage and the first 3 concrete steps to start this week. Be direct and practical."
      }
    }
  },
  {
    id: "design",
    icon: "🎨",
    count: 800,
    name: { es: "Diseño e imágenes", en: "Design & images" },
    desc: { es: "Prompts para Midjourney, DALL·E, logos y miniaturas.", en: "Prompts for Midjourney, DALL·E, logos and thumbnails." },
    sample: {
      title: { es: "Imagen de producto para Midjourney", en: "Product image for Midjourney" },
      prompt: {
        es: "Crea un prompt en inglés para Midjourney v7 que genere una foto de producto profesional de [PRODUCTO]. Incluye: descripción del producto, estilo de fotografía (estudio, luz natural, etc.), fondo, iluminación, ángulo de cámara, ambiente y parámetros técnicos (--ar 4:5 --v 7). Hazlo detallado y fotorrealista.",
        en: "Create an English prompt for Midjourney v7 that generates a professional product photo of [PRODUCT]. Include: product description, photography style (studio, natural light, etc.), background, lighting, camera angle, mood and technical parameters (--ar 4:5 --v 7). Make it detailed and photorealistic."
      }
    }
  },
  {
    id: "productivity",
    icon: "⚙️",
    count: 700,
    name: { es: "Productividad", en: "Productivity" },
    desc: { es: "Automatización de tareas, resúmenes, organización.", en: "Task automation, summaries, organization." },
    sample: {
      title: { es: "Resume cualquier documento", en: "Summarize any document" },
      prompt: {
        es: "Resume el siguiente texto en 3 niveles: 1) una frase de una sola línea, 2) un párrafo ejecutivo, 3) los 5 puntos clave en viñetas. Al final, dame 3 acciones concretas que debería tomar según el contenido. Texto: [PEGA AQUÍ TU TEXTO].",
        en: "Summarize the following text at 3 levels: 1) a single one-line sentence, 2) an executive paragraph, 3) the 5 key points as bullets. At the end, give me 3 concrete actions I should take based on the content. Text: [PASTE YOUR TEXT HERE]."
      }
    }
  },
  {
    id: "ecommerce",
    icon: "🛒",
    count: 650,
    name: { es: "E-commerce y dropshipping", en: "E-commerce & dropshipping" },
    desc: { es: "Descripciones de producto, fichas, atención al cliente.", en: "Product descriptions, listings, customer service." },
    sample: {
      title: { es: "Descripción de producto que vende", en: "Product description that sells" },
      prompt: {
        es: "Eres experto en e-commerce. Escribe una descripción de producto para [PRODUCTO] que venda. Incluye: titular con beneficio principal, 4 características traducidas a beneficios, sección de \"para quién es ideal\", manejo de la duda más común y un cierre con sensación de urgencia. Optimizada para conversión en tienda online o Marketplace.",
        en: "You're an e-commerce expert. Write a product description for [PRODUCT] that sells. Include: a headline with the main benefit, 4 features translated into benefits, a \"who it's ideal for\" section, handling of the most common doubt and a closing with a sense of urgency. Optimized for conversion in an online store or Marketplace."
      }
    }
  },
  {
    id: "email",
    icon: "📧",
    count: 600,
    name: { es: "Email marketing", en: "Email marketing" },
    desc: { es: "Secuencias de bienvenida, ofertas, recuperación de carrito.", en: "Welcome sequences, offers, cart recovery." },
    sample: {
      title: { es: "Secuencia de bienvenida de 3 emails", en: "3-email welcome sequence" },
      prompt: {
        es: "Actúa como experto en email marketing. Crea una secuencia de bienvenida de 3 correos para nuevos suscriptores de [NEGOCIO]. Email 1: dar la bienvenida y entregar valor inmediato. Email 2: contar la historia/misión y generar conexión. Email 3: presentar la oferta principal. Para cada uno dame el asunto, el preheader y el cuerpo. Tono cercano.",
        en: "Act as an email marketing expert. Create a 3-email welcome sequence for new subscribers of [BUSINESS]. Email 1: welcome them and deliver immediate value. Email 2: tell the story/mission and build connection. Email 3: present the main offer. For each, give me the subject line, preheader and body. Warm tone."
      }
    }
  },
  {
    id: "seo",
    icon: "🔍",
    count: 550,
    name: { es: "SEO y blogs", en: "SEO & blogs" },
    desc: { es: "Artículos, palabras clave, estructura optimizada.", en: "Articles, keywords, optimized structure." },
    sample: {
      title: { es: "Artículo de blog optimizado", en: "SEO-optimized blog article" },
      prompt: {
        es: "Eres experto en SEO. Escribe un artículo de blog optimizado sobre [TEMA] para la palabra clave [PALABRA CLAVE]. Incluye: título atractivo con la keyword, meta descripción, introducción que enganche, subtítulos H2 y H3 bien estructurados, contenido de valor real y una conclusión con llamada a la acción. Mínimo 800 palabras, natural y fácil de leer.",
        en: "You're an SEO expert. Write an optimized blog article about [TOPIC] for the keyword [KEYWORD]. Include: an attractive title with the keyword, meta description, an engaging intro, well-structured H2 and H3 subheadings, real valuable content and a conclusion with a call to action. Minimum 800 words, natural and easy to read."
      }
    }
  },
  {
    id: "video",
    icon: "🎬",
    count: 500,
    name: { es: "Video y guiones", en: "Video & scripts" },
    desc: { es: "Guiones para YouTube, Reels, anuncios y VSL.", en: "Scripts for YouTube, Reels, ads and VSLs." },
    sample: {
      title: { es: "Guion de video corto viral", en: "Viral short-video script" },
      prompt: {
        es: "Actúa como guionista de contenido corto. Escribe un guion para un video de 30 a 45 segundos sobre [TEMA] para [PLATAFORMA]. Estructura: gancho potente en los primeros 3 segundos, desarrollo con una sola idea clara, momento de valor o sorpresa y un cierre con llamada a la acción. Indica qué decir y qué mostrar en cada escena.",
        en: "Act as a short-form content scriptwriter. Write a script for a 30–45 second video about [TOPIC] for [PLATFORM]. Structure: a powerful hook in the first 3 seconds, development with a single clear idea, a value or surprise moment and a closing with a call to action. Indicate what to say and what to show in each scene."
      }
    }
  },
  {
    id: "personal",
    icon: "🚀",
    count: 450,
    name: { es: "Marca personal y carrera", en: "Personal brand & career" },
    desc: { es: "LinkedIn, hojas de vida, propuestas para freelancers.", en: "LinkedIn, resumes, freelancer proposals." },
    sample: {
      title: { es: "Propuesta ganadora para freelancers", en: "Winning freelancer proposal" },
      prompt: {
        es: "Eres un freelancer top con muchas propuestas aceptadas. Escribe una propuesta para este proyecto: \"[DESCRIPCIÓN DEL PROYECTO]\". Estructura: saludo personalizado que demuestre que leíste el proyecto, comprensión clara de su necesidad, cómo lo resolverías paso a paso, por qué soy la mejor opción y un cierre con una pregunta que invite a responder. Breve, profesional y sin sonar genérico.",
        en: "You're a top freelancer with many accepted proposals. Write a proposal for this project: \"[PROJECT DESCRIPTION]\". Structure: a personalized greeting that shows you read the project, clear understanding of their need, how you'd solve it step by step, why I'm the best choice and a closing with a question that invites a reply. Short, professional and not generic."
      }
    }
  }
];

// ============================================================
//  LOS 30 ROBOTS (bilingüe)
// ============================================================

const ROBOTS = [
  { icon: "🎯", name: { es: "Cerrador de Ventas", en: "Sales Closer" }, use: { es: "Maneja objeciones y cierra clientes por chat.", en: "Handles objections and closes clients via chat." } },
  { icon: "🧲", name: { es: "Constructor de Embudos", en: "Funnel Builder" }, use: { es: "Diseña embudos de venta completos paso a paso.", en: "Designs complete sales funnels step by step." } },
  { icon: "✍️", name: { es: "Copywriter Pro", en: "Pro Copywriter" }, use: { es: "Escribe textos de venta persuasivos al instante.", en: "Writes persuasive sales copy instantly." } },
  { icon: "📱", name: { es: "Genio del Contenido", en: "Content Genius" }, use: { es: "Genera ideas virales para redes sin bloqueos.", en: "Generates viral social ideas, never stuck." } },
  { icon: "📣", name: { es: "Experto en Meta Ads", en: "Meta Ads Expert" }, use: { es: "Crea y optimiza campañas de Facebook e Instagram.", en: "Creates and optimizes Facebook & Instagram campaigns." } },
  { icon: "🔍", name: { es: "Maestro del SEO", en: "SEO Master" }, use: { es: "Optimiza tu contenido para aparecer en Google.", en: "Optimizes your content to rank on Google." } },
  { icon: "📧", name: { es: "Estratega de Email", en: "Email Strategist" }, use: { es: "Arma secuencias de correo que venden.", en: "Builds email sequences that sell." } },
  { icon: "💡", name: { es: "Generador de Ideas", en: "Idea Generator" }, use: { es: "Lluvia de ideas para negocios y productos.", en: "Brainstorms ideas for businesses and products." } },
  { icon: "🎬", name: { es: "Guionista Viral", en: "Viral Scriptwriter" }, use: { es: "Escribe guiones para Reels, TikTok y YouTube.", en: "Writes scripts for Reels, TikTok and YouTube." } },
  { icon: "🛒", name: { es: "Vendedor E-commerce", en: "E-commerce Seller" }, use: { es: "Crea fichas de producto que convierten.", en: "Creates product listings that convert." } },
  { icon: "📊", name: { es: "Analista de Negocios", en: "Business Analyst" }, use: { es: "Analiza tu negocio y propone mejoras.", en: "Analyzes your business and suggests improvements." } },
  { icon: "🎨", name: { es: "Director de Arte IA", en: "AI Art Director" }, use: { es: "Crea prompts perfectos para Midjourney y DALL·E.", en: "Creates perfect prompts for Midjourney and DALL·E." } },
  { icon: "🗣️", name: { es: "Community Manager", en: "Community Manager" }, use: { es: "Responde comentarios y gestiona tu comunidad.", en: "Replies to comments and manages your community." } },
  { icon: "📅", name: { es: "Planificador de Contenido", en: "Content Planner" }, use: { es: "Crea calendarios editoriales de un mes.", en: "Creates monthly editorial calendars." } },
  { icon: "💬", name: { es: "Asistente de WhatsApp", en: "WhatsApp Assistant" }, use: { es: "Redacta respuestas profesionales para clientes.", en: "Drafts professional replies for customers." } },
  { icon: "🏷️", name: { es: "Experto en Precios", en: "Pricing Expert" }, use: { es: "Te ayuda a poner precio a tus productos.", en: "Helps you price your products right." } },
  { icon: "📝", name: { es: "Redactor de Blogs", en: "Blog Writer" }, use: { es: "Escribe artículos completos y optimizados.", en: "Writes complete, optimized articles." } },
  { icon: "🎤", name: { es: "Creador de Hooks", en: "Hook Creator" }, use: { es: "Genera ganchos que detienen el scroll.", en: "Generates scroll-stopping hooks." } },
  { icon: "🤝", name: { es: "Negociador", en: "Negotiator" }, use: { es: "Te prepara para negociaciones y acuerdos.", en: "Prepares you for negotiations and deals." } },
  { icon: "📈", name: { es: "Growth Hacker", en: "Growth Hacker" }, use: { es: "Estrategias para crecer rápido y sin presupuesto.", en: "Strategies to grow fast on a low budget." } },
  { icon: "🎓", name: { es: "Creador de Cursos", en: "Course Creator" }, use: { es: "Estructura cursos y formaciones online.", en: "Structures online courses and trainings." } },
  { icon: "📰", name: { es: "Generador de Titulares", en: "Headline Generator" }, use: { es: "Crea titulares irresistibles para todo.", en: "Creates irresistible headlines for anything." } },
  { icon: "🧠", name: { es: "Consultor de Estrategia", en: "Strategy Consultant" }, use: { es: "Asesoría estratégica para tu negocio.", en: "Strategic advice for your business." } },
  { icon: "💼", name: { es: "Asesor de Marca Personal", en: "Personal Brand Advisor" }, use: { es: "Construye tu posicionamiento profesional.", en: "Builds your professional positioning." } },
  { icon: "🔄", name: { es: "Reescritor de Textos", en: "Text Rewriter" }, use: { es: "Mejora y adapta cualquier texto.", en: "Improves and adapts any text." } },
  { icon: "🎯", name: { es: "Definidor de Cliente Ideal", en: "Ideal Customer Definer" }, use: { es: "Te ayuda a definir tu público perfecto.", en: "Helps you define your perfect audience." } },
  { icon: "📞", name: { es: "Guion de Llamadas", en: "Call Script Builder" }, use: { es: "Crea guiones para llamadas de venta.", en: "Creates scripts for sales calls." } },
  { icon: "🎁", name: { es: "Creador de Ofertas", en: "Offer Creator" }, use: { es: "Diseña ofertas irresistibles que venden.", en: "Designs irresistible offers that sell." } },
  { icon: "📋", name: { es: "Organizador de Proyectos", en: "Project Organizer" }, use: { es: "Estructura y planifica tus proyectos.", en: "Structures and plans your projects." } },
  { icon: "🌟", name: { es: "Asistente Todo en Uno", en: "All-in-One Assistant" }, use: { es: "Tu asistente general para cualquier tarea.", en: "Your general assistant for any task." } }
];
