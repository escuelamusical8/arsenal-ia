// ============================================================
//  ARSENAL IA — BIBLIOTECA DE PROMPTS (parte 2)
//  Negocios · Diseño · Productividad · E-commerce
// ============================================================

const PROMPTS_2 = [

// ---------- NEGOCIOS ----------
{ cat:"business", t:{es:"Plan de negocio en 1 página", en:"1-page business plan"},
  p:{es:"Actúa como consultor de negocios. Ayúdame a crear un plan de negocio en una sola página para [IDEA DE NEGOCIO]. Incluye: propuesta de valor, cliente ideal, principales fuentes de ingreso, estructura de costos, canales de adquisición, ventaja competitiva y los 3 primeros pasos concretos para arrancar esta semana. Sé directo y práctico.",
     en:"Act as a business consultant. Help me create a one-page business plan for [BUSINESS IDEA]. Include: value proposition, ideal customer, main revenue streams, cost structure, acquisition channels, competitive advantage and the first 3 concrete steps to start this week. Be direct and practical."}},

{ cat:"business", t:{es:"Análisis de la competencia", en:"Competitor analysis"},
  p:{es:"Eres analista de mercado. Ayúdame a analizar a mi competencia en el sector [SECTOR]. Mis principales competidores son [COMPETIDORES]. Para cada uno identifica: sus fortalezas, sus debilidades, su propuesta de valor y su rango de precios. Al final, dame 3 oportunidades concretas donde yo podría diferenciarme y ganar clientes.",
     en:"You're a market analyst. Help me analyze my competition in the [SECTOR] sector. My main competitors are [COMPETITORS]. For each, identify: their strengths, weaknesses, value proposition and price range. At the end, give me 3 concrete opportunities where I could differentiate and win customers."}},

{ cat:"business", t:{es:"Cómo poner precio a mi producto", en:"How to price my product"},
  p:{es:"Actúa como experto en estrategia de precios. Tengo un producto/servicio [PRODUCTO] con un costo de [COSTO] y mi competencia cobra entre [RANGO]. Recomiéndame una estrategia de precios: cuánto cobrar, cómo justificar el valor, si conviene ofrecer paquetes o niveles, y cómo presentar el precio para que parezca una buena decisión. Explica tu razonamiento.",
     en:"Act as a pricing strategy expert. I have a product/service [PRODUCT] with a cost of [COST] and my competition charges between [RANGE]. Recommend a pricing strategy: how much to charge, how to justify the value, whether bundles or tiers make sense, and how to present the price so it looks like a good decision. Explain your reasoning."}},

{ cat:"business", t:{es:"Ideas de negocio rentables", en:"Profitable business ideas"},
  p:{es:"Eres consultor emprendedor. Dame 10 ideas de negocio rentables que pueda iniciar con poca inversión, considerando que tengo habilidades en [HABILIDADES] y vivo en [LUGAR]. Para cada idea: en qué consiste, inversión aproximada, a quién va dirigida y por qué tiene potencial. Ordénalas de menor a mayor inversión.",
     en:"You're an entrepreneurial consultant. Give me 10 profitable business ideas I can start with little investment, considering I have skills in [SKILLS] and live in [PLACE]. For each idea: what it is, approximate investment, who it targets and why it has potential. Sort them from lowest to highest investment."}},

{ cat:"business", t:{es:"Validar una idea antes de invertir", en:"Validate an idea before investing"},
  p:{es:"Actúa como mentor de startups. Quiero validar esta idea de negocio antes de invertir: [IDEA]. Dame un plan paso a paso para comprobar si tiene demanda real con el menor gasto posible: qué preguntas hacer, a quién, cómo hacer una prueba pequeña, qué señales indican que vale la pena y cuáles indican que debo descartarla. Sé brutalmente honesto.",
     en:"Act as a startup mentor. I want to validate this business idea before investing: [IDEA]. Give me a step-by-step plan to check if there's real demand with the least possible spending: what questions to ask, to whom, how to run a small test, what signals say it's worth it and which say I should drop it. Be brutally honest."}},

// ---------- DISEÑO ----------
{ cat:"design", t:{es:"Imagen de producto para Midjourney", en:"Product image for Midjourney"},
  p:{es:"Crea un prompt en inglés para Midjourney v7 que genere una foto de producto profesional de [PRODUCTO]. Incluye: descripción del producto, estilo de fotografía (estudio, luz natural, etc.), fondo, iluminación, ángulo de cámara, ambiente y parámetros técnicos (--ar 4:5 --v 7). Hazlo detallado y fotorrealista.",
     en:"Create an English prompt for Midjourney v7 that generates a professional product photo of [PRODUCT]. Include: product description, photography style (studio, natural light, etc.), background, lighting, camera angle, mood and technical parameters (--ar 4:5 --v 7). Make it detailed and photorealistic."}},

{ cat:"design", t:{es:"Concepto de logo", en:"Logo concept"},
  p:{es:"Actúa como diseñador de marca. Dame 5 conceptos de logo para [NEGOCIO], que se dedica a [ACTIVIDAD] y quiere transmitir [VALORES/SENSACIÓN]. Para cada concepto describe: el tipo de logo (icono, texto, combinado), la idea visual, la paleta de colores sugerida con códigos y la sensación que genera. Luego conviértelo en un prompt para generador de imágenes IA.",
     en:"Act as a brand designer. Give me 5 logo concepts for [BUSINESS], which does [ACTIVITY] and wants to convey [VALUES/FEELING]. For each concept describe: the logo type (icon, text, combined), the visual idea, the suggested color palette with codes and the feeling it creates. Then turn it into a prompt for an AI image generator."}},

{ cat:"design", t:{es:"Miniatura de YouTube que llama", en:"Click-worthy YouTube thumbnail"},
  p:{es:"Eres experto en miniaturas virales. Describe el diseño de una miniatura de YouTube para un video titulado \"[TÍTULO]\". Incluye: qué elemento principal mostrar, qué texto corto poner, colores que generen contraste, expresión o emoción, y composición. Explica por qué ese diseño aumentaría los clics. Luego conviértelo en un prompt para IA.",
     en:"You're a viral thumbnail expert. Describe the design of a YouTube thumbnail for a video titled \"[TITLE]\". Include: the main element to show, short text to add, contrasting colors, expression or emotion, and composition. Explain why that design would increase clicks. Then turn it into an AI prompt."}},

{ cat:"design", t:{es:"Paleta de colores para mi marca", en:"Color palette for my brand"},
  p:{es:"Actúa como experto en identidad visual. Crea una paleta de colores para [NEGOCIO] que transmite [SENSACIÓN/VALORES] y se dirige a [PÚBLICO]. Dame: 1 color principal, 2 secundarios y 2 de acento, todos con su código hexadecimal. Explica la psicología de cada color y muéstrame en qué elementos usar cada uno (logo, botones, fondos).",
     en:"Act as a visual identity expert. Create a color palette for [BUSINESS] that conveys [FEELING/VALUES] and targets [AUDIENCE]. Give me: 1 main color, 2 secondary and 2 accent, all with their hex codes. Explain the psychology of each color and show me which elements to use each on (logo, buttons, backgrounds)."}},

{ cat:"design", t:{es:"Diseño de flyer promocional", en:"Promotional flyer design"},
  p:{es:"Eres diseñador gráfico publicitario. Describe el diseño de un flyer para promocionar [PRODUCTO/EVENTO/OFERTA]. Indica: qué debe ir en la parte superior, el centro y la parte inferior, jerarquía de la información, qué resaltar, colores, y el llamado a la acción. Que sea claro, atractivo y que comunique la oferta en 3 segundos.",
     en:"You're an advertising graphic designer. Describe the design of a flyer to promote [PRODUCT/EVENT/OFFER]. Indicate: what goes at the top, center and bottom, information hierarchy, what to highlight, colors, and the call to action. It should be clear, attractive and communicate the offer in 3 seconds."}},

// ---------- PRODUCTIVIDAD ----------
{ cat:"productivity", t:{es:"Resume cualquier documento", en:"Summarize any document"},
  p:{es:"Resume el siguiente texto en 3 niveles: 1) una frase de una sola línea, 2) un párrafo ejecutivo, 3) los 5 puntos clave en viñetas. Al final, dame 3 acciones concretas que debería tomar según el contenido. Texto: [PEGA AQUÍ TU TEXTO].",
     en:"Summarize the following text at 3 levels: 1) a single one-line sentence, 2) an executive paragraph, 3) the 5 key points as bullets. At the end, give me 3 concrete actions I should take based on the content. Text: [PASTE YOUR TEXT HERE]."}},

{ cat:"productivity", t:{es:"Organiza mi semana", en:"Organize my week"},
  p:{es:"Actúa como coach de productividad. Tengo estas tareas pendientes: [LISTA DE TAREAS]. Ayúdame a organizarlas en un plan semanal realista. Priorízalas por importancia y urgencia, distribúyelas en los días, sugiere bloques de tiempo y dime cuáles puedo delegar o eliminar. Dame el plan en formato de tabla por días.",
     en:"Act as a productivity coach. I have these pending tasks: [TASK LIST]. Help me organize them into a realistic weekly plan. Prioritize by importance and urgency, distribute them across the days, suggest time blocks and tell me which ones I can delegate or eliminate. Give me the plan as a table by day."}},

{ cat:"productivity", t:{es:"Convierte ideas en plan de acción", en:"Turn ideas into an action plan"},
  p:{es:"Eres experto en ejecución. Tengo esta idea o meta: [IDEA/META]. Conviértela en un plan de acción concreto: divídela en etapas, cada etapa en tareas específicas, asígnale un orden lógico y dime cuál es el primer paso que debo dar hoy mismo. Que sea tan claro que solo tenga que seguirlo sin pensar.",
     en:"You're an execution expert. I have this idea or goal: [IDEA/GOAL]. Turn it into a concrete action plan: break it into stages, each stage into specific tasks, give it a logical order and tell me the first step to take today. Make it so clear I just have to follow it without thinking."}},

{ cat:"productivity", t:{es:"Redacta correos profesionales rápido", en:"Write professional emails fast"},
  p:{es:"Actúa como asistente ejecutivo. Necesito escribir un correo a [DESTINATARIO] sobre [ASUNTO/SITUACIÓN]. El objetivo es [OBJETIVO]. Escríbeme el correo: claro, profesional, directo al punto, con el tono adecuado (formal/cercano según corresponda). Incluye un asunto efectivo. Que sea breve pero completo.",
     en:"Act as an executive assistant. I need to write an email to [RECIPIENT] about [SUBJECT/SITUATION]. The goal is [GOAL]. Write the email for me: clear, professional, to the point, with the right tone (formal/warm as appropriate). Include an effective subject line. Keep it brief but complete."}},

{ cat:"productivity", t:{es:"Toma de decisiones difícil", en:"Hard decision-making"},
  p:{es:"Eres asesor estratégico. Tengo que tomar esta decisión: [DECISIÓN/DILEMA]. Las opciones son [OPCIONES]. Ayúdame a decidir: analiza los pros y contras de cada opción, los riesgos, lo que ganaría y perdería con cada una, y dame tu recomendación con argumentos. No te quedes neutral, dime qué harías tú y por qué.",
     en:"You're a strategic advisor. I have to make this decision: [DECISION/DILEMMA]. The options are [OPTIONS]. Help me decide: analyze the pros and cons of each option, the risks, what I'd gain and lose with each, and give me your recommendation with arguments. Don't stay neutral, tell me what you'd do and why."}},

// ---------- E-COMMERCE ----------
{ cat:"ecommerce", t:{es:"Descripción de producto que vende", en:"Product description that sells"},
  p:{es:"Eres experto en e-commerce. Escribe una descripción de producto para [PRODUCTO] que venda. Incluye: titular con beneficio principal, 4 características traducidas a beneficios, sección de \"para quién es ideal\", manejo de la duda más común y un cierre con sensación de urgencia. Optimizada para conversión en tienda online o Marketplace.",
     en:"You're an e-commerce expert. Write a product description for [PRODUCT] that sells. Include: a headline with the main benefit, 4 features translated into benefits, a \"who it's ideal for\" section, handling of the most common doubt and a closing with a sense of urgency. Optimized for conversion in an online store or Marketplace."}},

{ cat:"ecommerce", t:{es:"Publicación para Marketplace", en:"Marketplace listing"},
  p:{es:"Actúa como vendedor experto en Facebook Marketplace. Crea una publicación para vender [PRODUCTO] a [PRECIO]. Incluye: título llamativo con la palabra clave, descripción que genere confianza y deseo, datos importantes (estado, entrega, garantía), y un cierre que invite a escribir. Que destaque entre la competencia y genere mensajes.",
     en:"Act as an expert Facebook Marketplace seller. Create a listing to sell [PRODUCT] for [PRICE]. Include: a catchy title with the keyword, a description that builds trust and desire, important details (condition, delivery, warranty), and a closing that invites messages. It should stand out from the competition and generate inquiries."}},

{ cat:"ecommerce", t:{es:"Respuestas de atención al cliente", en:"Customer service replies"},
  p:{es:"Eres experto en atención al cliente de tienda online. Crea respuestas listas para las 10 preguntas más comunes de mis clientes sobre [PRODUCTO/TIENDA]: disponibilidad, precio, envío, tiempos de entrega, métodos de pago, garantía, devoluciones, tallas/variantes, descuentos y datos de contacto. Tono amable, profesional y que cierre la venta.",
     en:"You're an online store customer service expert. Create ready-to-use replies for the 10 most common customer questions about [PRODUCT/STORE]: availability, price, shipping, delivery times, payment methods, warranty, returns, sizes/variants, discounts and contact info. Friendly, professional tone that closes the sale."}},

{ cat:"ecommerce", t:{es:"Recupera carritos abandonados", en:"Recover abandoned carts"},
  p:{es:"Actúa como experto en conversión e-commerce. Escribe una secuencia de 3 mensajes (para email o WhatsApp) para recuperar a un cliente que dejó [PRODUCTO] en el carrito sin comprar. Mensaje 1: recordatorio amable. Mensaje 2: resolver dudas u objeciones. Mensaje 3: incentivo final con urgencia. Cortos y persuasivos.",
     en:"Act as an e-commerce conversion expert. Write a sequence of 3 messages (for email or WhatsApp) to recover a customer who left [PRODUCT] in the cart without buying. Message 1: friendly reminder. Message 2: resolve doubts or objections. Message 3: final incentive with urgency. Short and persuasive."}},

{ cat:"ecommerce", t:{es:"Nombres para mi tienda o producto", en:"Names for my store or product"},
  p:{es:"Eres experto en branding. Dame 15 nombres creativos para [TIENDA/PRODUCTO] que vende [QUÉ VENDE] y se dirige a [PÚBLICO]. Que sean fáciles de recordar, fáciles de pronunciar y que transmitan [SENSACIÓN]. Organízalos en 3 grupos: nombres descriptivos, nombres creativos/inventados y nombres con juego de palabras. Marca tus 3 favoritos.",
     en:"You're a branding expert. Give me 15 creative names for [STORE/PRODUCT] that sells [WHAT IT SELLS] and targets [AUDIENCE]. They should be easy to remember, easy to pronounce and convey [FEELING]. Organize them into 3 groups: descriptive names, creative/invented names and pun-based names. Mark your top 3 favorites."}},

];
