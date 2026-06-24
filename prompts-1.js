// ============================================================
//  ARSENAL IA — BIBLIOTECA DE PROMPTS (parte 1)
//  Marketing · Ventas · Redes sociales · Copywriting
//
//  Estructura de cada prompt:
//  { cat, t:{es,en}, p:{es,en} }
//  cat = id de categoría (debe existir en CATS de library.js)
//  t   = título (es/en)
//  p   = prompt completo (es/en)
//
//  Para AGREGAR un prompt: copia un bloque, cámbialo y listo.
// ============================================================

const PROMPTS_1 = [

// ---------- MARKETING ----------
{ cat:"marketing", t:{es:"Anuncio de Facebook que convierte", en:"High-converting Facebook ad"},
  p:{es:"Actúa como un copywriter experto en Meta Ads. Crea un anuncio para Facebook que venda [PRODUCTO/SERVICIO] dirigido a [PÚBLICO]. Incluye: 1 gancho que detenga el scroll en la primera línea, 3 beneficios concretos enfocados en la transformación del cliente, 1 prueba social creíble, manejo de la objeción principal y una llamada a la acción clara. Tono cercano y persuasivo. Dame 3 variantes distintas.",
     en:"Act as an expert Meta Ads copywriter. Create a Facebook ad to sell [PRODUCT/SERVICE] targeting [AUDIENCE]. Include: 1 scroll-stopping hook in the first line, 3 concrete benefits focused on the customer's transformation, 1 believable social proof, handling of the main objection and a clear call to action. Warm, persuasive tone. Give me 3 different variations."}},

{ cat:"marketing", t:{es:"Estrategia de campaña en 30 días", en:"30-day campaign strategy"},
  p:{es:"Eres un estratega de marketing digital. Diseña una campaña completa de 30 días para lanzar [PRODUCTO/SERVICIO] con un presupuesto de [PRESUPUESTO]. Divídela en 4 semanas con objetivos por semana, canales a usar, tipo de contenido cada día, y las métricas que debo vigilar. Sé práctico y realista para un negocio pequeño.",
     en:"You're a digital marketing strategist. Design a complete 30-day campaign to launch [PRODUCT/SERVICE] with a budget of [BUDGET]. Split it into 4 weeks with weekly goals, channels to use, content type for each day, and the metrics I should track. Be practical and realistic for a small business."}},

{ cat:"marketing", t:{es:"Segmentación de público para Meta Ads", en:"Audience targeting for Meta Ads"},
  p:{es:"Actúa como experto en pauta publicitaria. Para mi producto [PRODUCTO] dirigido a [DESCRIPCIÓN DE CLIENTE], dame 5 públicos diferentes para probar en Meta Ads: detallando intereses, comportamientos, edades y ubicación para cada uno. Ordénalos del más probable al menos probable de convertir, y explica por qué cada uno.",
     en:"Act as a paid advertising expert. For my product [PRODUCT] targeting [CUSTOMER DESCRIPTION], give me 5 different audiences to test in Meta Ads: detailing interests, behaviors, ages and location for each. Sort them from most to least likely to convert, and explain why for each."}},

{ cat:"marketing", t:{es:"Propuesta de valor irresistible", en:"Irresistible value proposition"},
  p:{es:"Eres experto en posicionamiento de marca. Ayúdame a crear una propuesta de valor clara y potente para [NEGOCIO]. Dame 5 versiones distintas de una sola frase que responda: qué ofrezco, para quién, y por qué soy diferente de la competencia. Cada versión con un enfoque distinto (emocional, práctico, de resultados, de ahorro, de estatus).",
     en:"You're a brand positioning expert. Help me create a clear, powerful value proposition for [BUSINESS]. Give me 5 different one-sentence versions that answer: what I offer, for whom, and why I'm different from the competition. Each version with a different angle (emotional, practical, results, savings, status)."}},

{ cat:"marketing", t:{es:"Calendario de promociones del mes", en:"Monthly promotions calendar"},
  p:{es:"Actúa como gerente de marketing. Crea un calendario de promociones para [NEGOCIO] durante el próximo mes. Incluye fechas clave, tipo de promoción para cada una (descuento, 2x1, combo, regalo), el mensaje gancho y por qué funcionaría. Aprovecha fechas comerciales relevantes. Hazlo en formato de tabla.",
     en:"Act as a marketing manager. Create a promotions calendar for [BUSINESS] over the next month. Include key dates, the type of promotion for each (discount, BOGO, bundle, gift), the hook message and why it would work. Take advantage of relevant commercial dates. Format it as a table."}},

// ---------- VENTAS ----------
{ cat:"sales", t:{es:"Cierre de venta por WhatsApp", en:"WhatsApp sales closer"},
  p:{es:"Eres un experto en ventas consultivas por WhatsApp. Mi cliente me dice: \"[OBJECIÓN DEL CLIENTE]\". Dame 3 respuestas distintas para manejar esa objeción sin sonar desesperado ni agresivo, que validen su preocupación, reenfoquen hacia el valor y cierren con una pregunta que avance la venta. Mensajes cortos, naturales, listos para enviar.",
     en:"You're an expert in consultative WhatsApp sales. My customer says: \"[CUSTOMER OBJECTION]\". Give me 3 different replies to handle that objection without sounding desperate or pushy, that validate their concern, refocus on value and close with a question that moves the sale forward. Short, natural messages ready to send."}},

{ cat:"sales", t:{es:"Manejo de \"está muy caro\"", en:"Handling \"it's too expensive\""},
  p:{es:"Actúa como cerrador de ventas experto. El cliente dice que mi producto [PRODUCTO] está muy caro. Dame 5 formas distintas de responder a la objeción de precio: justificando el valor, comparando con el costo de no comprarlo, ofreciendo facilidades, usando prueba social y replanteando la inversión. Tono empático, nunca a la defensiva.",
     en:"Act as an expert sales closer. The customer says my product [PRODUCT] is too expensive. Give me 5 different ways to respond to the price objection: justifying value, comparing to the cost of not buying it, offering payment options, using social proof and reframing the investment. Empathetic tone, never defensive."}},

{ cat:"sales", t:{es:"Mensaje de seguimiento sin ser pesado", en:"Follow-up message without being annoying"},
  p:{es:"Eres experto en seguimiento de ventas. Un cliente mostró interés en [PRODUCTO] pero no respondió mi último mensaje hace [TIEMPO]. Escríbeme 3 mensajes de seguimiento que reactiven la conversación sin sonar insistente ni desesperado: uno aportando valor, uno con una novedad/oferta y uno con una pregunta abierta. Cortos y naturales.",
     en:"You're a sales follow-up expert. A customer showed interest in [PRODUCT] but didn't reply to my last message [TIME] ago. Write me 3 follow-up messages that reactivate the conversation without sounding pushy or desperate: one adding value, one with news/an offer and one with an open question. Short and natural."}},

{ cat:"sales", t:{es:"Guion de venta completo", en:"Complete sales script"},
  p:{es:"Actúa como entrenador de ventas. Crea un guion de venta completo para ofrecer [PRODUCTO/SERVICIO] por chat o llamada. Estructura: apertura para generar confianza, preguntas para descubrir la necesidad, presentación enfocada en beneficios, manejo de las 3 objeciones más comunes y cierre. Dame las palabras exactas para cada parte.",
     en:"Act as a sales coach. Create a complete sales script to offer [PRODUCT/SERVICE] via chat or call. Structure: an opening to build trust, questions to uncover the need, a benefit-focused presentation, handling of the 3 most common objections and a close. Give me the exact words for each part."}},

{ cat:"sales", t:{es:"Detectar el dolor del cliente", en:"Uncover the customer's pain"},
  p:{es:"Eres experto en ventas consultivas. Para vender [PRODUCTO] a [TIPO DE CLIENTE], dame una lista de 10 preguntas inteligentes que pueda hacerle al cliente para descubrir su verdadero dolor o necesidad, de modo que después yo pueda presentar mi producto como la solución exacta. Ordénalas de lo general a lo específico.",
     en:"You're a consultative selling expert. To sell [PRODUCT] to [CUSTOMER TYPE], give me a list of 10 smart questions I can ask the customer to uncover their real pain or need, so I can then present my product as the exact solution. Sort them from general to specific."}},

// ---------- REDES SOCIALES ----------
{ cat:"social", t:{es:"30 ideas de contenido viral", en:"30 viral content ideas"},
  p:{es:"Actúa como un estratega de contenido viral. Mi cuenta es de [NICHO] y mi público es [PÚBLICO]. Dame 30 ideas de Reels/TikTok organizadas en 4 tipos: educativas, de entretenimiento, de venta y de comunidad. Para cada idea incluye el gancho de los primeros 3 segundos y el formato sugerido. Ordénalas de mayor a menor potencial de viralización.",
     en:"Act as a viral content strategist. My account is about [NICHE] and my audience is [AUDIENCE]. Give me 30 Reels/TikTok ideas organized in 4 types: educational, entertainment, sales and community. For each idea include the first-3-seconds hook and the suggested format. Sort them from highest to lowest viral potential."}},

{ cat:"social", t:{es:"Calendario de contenido de 7 días", en:"7-day content calendar"},
  p:{es:"Eres community manager profesional. Crea un calendario de contenido de 7 días para [NEGOCIO] en [RED SOCIAL]. Para cada día: el tema, el formato (Reel, carrusel, historia, post), el gancho, el texto del caption y los hashtags. Equilibra contenido de valor, entretenimiento y venta. Hazlo en tabla.",
     en:"You're a professional community manager. Create a 7-day content calendar for [BUSINESS] on [SOCIAL NETWORK]. For each day: the topic, format (Reel, carousel, story, post), the hook, the caption text and hashtags. Balance value, entertainment and sales content. Format it as a table."}},

{ cat:"social", t:{es:"Caption que genera comentarios", en:"Caption that drives comments"},
  p:{es:"Actúa como experto en engagement. Escribe 5 captions distintos para una publicación sobre [TEMA] dirigida a [PÚBLICO]. Cada uno debe terminar con una pregunta o llamado que invite a comentar. Varía el tono: uno inspirador, uno polémico, uno divertido, uno educativo y uno personal. Incluye sugerencia de emojis.",
     en:"Act as an engagement expert. Write 5 different captions for a post about [TOPIC] aimed at [AUDIENCE]. Each must end with a question or call that invites comments. Vary the tone: one inspiring, one controversial, one fun, one educational and one personal. Include emoji suggestions."}},

{ cat:"social", t:{es:"Guion de carrusel de Instagram", en:"Instagram carousel script"},
  p:{es:"Eres creador de contenido experto. Diseña un carrusel de Instagram de 8 láminas sobre [TEMA]. Lámina 1: portada con gancho irresistible. Láminas 2-7: desarrollo con una idea clara por lámina. Lámina 8: cierre con llamada a la acción. Para cada lámina dame el título y el texto breve. Optimizado para que la gente deslice hasta el final.",
     en:"You're an expert content creator. Design an 8-slide Instagram carousel about [TOPIC]. Slide 1: cover with an irresistible hook. Slides 2-7: development with one clear idea per slide. Slide 8: closing with a call to action. For each slide give me the title and short text. Optimized so people swipe to the end."}},

{ cat:"social", t:{es:"Bio de Instagram profesional", en:"Professional Instagram bio"},
  p:{es:"Actúa como experto en marca personal. Escribe 5 versiones de una bio de Instagram para [NEGOCIO/PERSONA] que se dedica a [ACTIVIDAD]. Cada bio debe dejar claro qué hace, para quién, el beneficio principal y una llamada a la acción. Máximo 150 caracteres, con emojis estratégicos. Que dé ganas de seguir la cuenta.",
     en:"Act as a personal brand expert. Write 5 versions of an Instagram bio for [BUSINESS/PERSON] who does [ACTIVITY]. Each bio must make clear what they do, for whom, the main benefit and a call to action. Max 150 characters, with strategic emojis. It should make people want to follow."}},

{ cat:"social", t:{es:"Respuestas a comentarios negativos", en:"Replies to negative comments"},
  p:{es:"Eres experto en gestión de comunidad. Recibí este comentario negativo: \"[COMENTARIO]\". Dame 3 formas profesionales de responder que: mantengan la calma, no escalen el conflicto, demuestren buen servicio ante quienes lo lean y, si aplica, redirijan a una solución privada. Tono cordial pero firme.",
     en:"You're a community management expert. I received this negative comment: \"[COMMENT]\". Give me 3 professional ways to reply that: stay calm, don't escalate the conflict, show good service to anyone reading, and if applicable redirect to a private solution. Cordial but firm tone."}},

// ---------- COPYWRITING ----------
{ cat:"copywriting", t:{es:"Estructura de página de venta", en:"Sales page structure"},
  p:{es:"Eres un copywriter de respuesta directa. Escribe la estructura completa de una página de venta para [PRODUCTO]. Incluye: titular principal con promesa clara, subtítulo, identificación del problema, agitación, presentación de la solución, beneficios en viñetas, prueba social, oferta, garantía, preguntas frecuentes y llamada a la acción final. Hazla persuasiva y enfocada en el cliente, no en el producto.",
     en:"You're a direct-response copywriter. Write the complete structure of a sales page for [PRODUCT]. Include: main headline with a clear promise, subheadline, problem identification, agitation, solution presentation, bulleted benefits, social proof, offer, guarantee, FAQ and final call to action. Make it persuasive and focused on the customer, not the product."}},

{ cat:"copywriting", t:{es:"10 titulares que enganchan", en:"10 hooking headlines"},
  p:{es:"Actúa como copywriter experto en titulares. Dame 10 titulares irresistibles para [PRODUCTO/CONTENIDO] dirigido a [PÚBLICO]. Usa distintas fórmulas probadas: pregunta, número, beneficio directo, curiosidad, urgencia, contraste, historia, error común, secreto y promesa. Que cada uno dé ganas de seguir leyendo.",
     en:"Act as an expert headline copywriter. Give me 10 irresistible headlines for [PRODUCT/CONTENT] aimed at [AUDIENCE]. Use different proven formulas: question, number, direct benefit, curiosity, urgency, contrast, story, common mistake, secret and promise. Each one should make people want to keep reading."}},

{ cat:"copywriting", t:{es:"Email de venta persuasivo", en:"Persuasive sales email"},
  p:{es:"Eres copywriter de email marketing. Escribe un correo de venta para [PRODUCTO] dirigido a [PÚBLICO]. Estructura: asunto que genere apertura, gancho inicial, conexión con el problema del lector, presentación de la solución, beneficios, oferta con urgencia y llamada a la acción clara. Tono cercano, como si le escribiera a un amigo. Que no parezca spam.",
     en:"You're an email marketing copywriter. Write a sales email for [PRODUCT] aimed at [AUDIENCE]. Structure: a subject line that drives opens, an initial hook, connection with the reader's problem, solution presentation, benefits, an offer with urgency and a clear call to action. Warm tone, as if writing to a friend. It shouldn't look like spam."}},

{ cat:"copywriting", t:{es:"Convierte características en beneficios", en:"Turn features into benefits"},
  p:{es:"Actúa como copywriter de ventas. Mi producto [PRODUCTO] tiene estas características: [LISTA DE CARACTERÍSTICAS]. Convierte cada característica en un beneficio claro que le importe al cliente, respondiendo a la pregunta \"¿y eso de qué me sirve a mí?\". Preséntalo en formato: característica → beneficio → emoción que despierta.",
     en:"Act as a sales copywriter. My product [PRODUCT] has these features: [LIST OF FEATURES]. Turn each feature into a clear benefit the customer cares about, answering \"what's in it for me?\". Present it as: feature → benefit → emotion it triggers."}},

{ cat:"copywriting", t:{es:"Descripción para perfil o landing", en:"About section for profile or landing"},
  p:{es:"Eres copywriter de marca. Escribe la sección \"sobre nosotros/sobre mí\" para [NEGOCIO/PERSONA]. Que conecte emocionalmente, cuente brevemente la historia o misión, genere confianza y termine invitando a dar el siguiente paso. Dame una versión corta (3 líneas) y una larga (1 párrafo). Tono humano, nada acartonado.",
     en:"You're a brand copywriter. Write the \"about us/about me\" section for [BUSINESS/PERSON]. It should connect emotionally, briefly tell the story or mission, build trust and end by inviting the next step. Give me a short version (3 lines) and a long one (1 paragraph). Human tone, nothing stiff."}},

];
