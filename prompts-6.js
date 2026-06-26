// ============================================================
//  ARSENAL IA — BIBLIOTECA DE PROMPTS (parte 6)
//  Negocios · Diseño · Productividad · E-commerce · Email
//  SEO · Video · Marca personal · IA y Agentes
// ============================================================

const PROMPTS_6 = [

// ---------- NEGOCIOS ----------
{ cat:"business", t:{es:"Analiza la viabilidad de una idea", en:"Analyze an idea's viability"},
  p:{es:"Actúa como consultor de negocios. Analiza la viabilidad de esta idea: [DESCRIBE TU IDEA]. Evalúa: el problema que resuelve, el mercado potencial, la competencia, cómo ganaría dinero, los riesgos principales y qué tan fácil es empezar. Dame una conclusión honesta y los 3 primeros pasos si vale la pena.",
     en:"Act as a business consultant. Analyze the viability of this idea: [DESCRIBE YOUR IDEA]. Evaluate: the problem it solves, the potential market, the competition, how it would make money, the main risks and how easy it is to start. Give me an honest conclusion and the first 3 steps if it's worth it."}},

{ cat:"business", t:{es:"Estructura de precios de tus productos", en:"Pricing structure for your products"},
  p:{es:"Eres experto en estrategia de precios. Ayúdame a definir los precios de [PRODUCTOS/SERVICIOS]. Considera mis costos, el valor percibido, la competencia y el público. Propón una estructura con distintos niveles (básico, medio, premium), explica la lógica de cada precio y cómo presentarlos para que el cliente elija el que más me conviene.",
     en:"You're a pricing strategy expert. Help me define the prices for [PRODUCTS/SERVICES]. Consider my costs, perceived value, competition and audience. Propose a structure with different tiers (basic, mid, premium), explain the logic of each price and how to present them so the customer picks the one that benefits me most."}},

{ cat:"business", t:{es:"Análisis FODA de mi negocio", en:"SWOT analysis of my business"},
  p:{es:"Actúa como consultor estratégico. Haz un análisis FODA completo de mi negocio [NEGOCIO]. Identifica mis Fortalezas, Oportunidades, Debilidades y Amenazas de forma concreta y realista. Para cada cuadrante dame al menos 4 puntos, y al final, 3 acciones estratégicas que surjan del análisis. Práctico y aplicable.",
     en:"Act as a strategic consultant. Do a complete SWOT analysis of my business [BUSINESS]. Identify my Strengths, Weaknesses, Opportunities and Threats concretely and realistically. For each quadrant give me at least 4 points, and at the end, 3 strategic actions that emerge from the analysis. Practical and applicable."}},

{ cat:"business", t:{es:"Reduce costos sin perder calidad", en:"Cut costs without losing quality"},
  p:{es:"Eres consultor de optimización. Ayúdame a reducir los costos de mi negocio [NEGOCIO] sin afectar la calidad ni la experiencia del cliente. Dame áreas típicas donde se puede ahorrar, preguntas para detectar gastos innecesarios, y estrategias concretas para ser más eficiente. Enfócate en cambios realistas para un negocio pequeño.",
     en:"You're an optimization consultant. Help me reduce my business's costs [BUSINESS] without affecting quality or customer experience. Give me typical areas where savings are possible, questions to detect unnecessary expenses, and concrete strategies to be more efficient. Focus on realistic changes for a small business."}},

{ cat:"business", t:{es:"Crea una propuesta de valor clara", en:"Create a clear value proposition"},
  p:{es:"Actúa como estratega de negocios. Ayúdame a definir la propuesta de valor de [NEGOCIO/PRODUCTO]. Responde con claridad: qué ofrezco, a quién, qué problema resuelvo, por qué soy mejor que las alternativas y qué resultado obtiene el cliente. Resúmelo en una frase potente y clara que pueda usar en toda mi comunicación.",
     en:"Act as a business strategist. Help me define the value proposition of [BUSINESS/PRODUCT]. Answer clearly: what I offer, to whom, what problem I solve, why I'm better than the alternatives and what result the customer gets. Sum it up in a powerful, clear sentence I can use across all my communication."}},

{ cat:"business", t:{es:"Plan para conseguir tus primeros clientes", en:"Plan to get your first customers"},
  p:{es:"Eres consultor de emprendimiento. Estoy empezando [NEGOCIO] y necesito mis primeros clientes sin mucho presupuesto. Dame un plan concreto de acciones para conseguir las primeras 10 ventas: dónde buscar clientes, qué decirles, cómo generar confianza siendo nuevo y cómo aprovechar mi red de contactos. Realista y paso a paso.",
     en:"You're an entrepreneurship consultant. I'm starting [BUSINESS] and need my first customers without much budget. Give me a concrete action plan to get the first 10 sales: where to find customers, what to tell them, how to build trust as a newcomer and how to leverage my network. Realistic and step by step."}},

{ cat:"business", t:{es:"Modelo de ingresos del negocio", en:"Business revenue model"},
  p:{es:"Actúa como consultor de modelos de negocio. Para [NEGOCIO/IDEA], ayúdame a definir cómo va a generar ingresos. Propón distintas formas de monetizar (venta directa, suscripción, servicios, comisiones, etc.), cuáles encajan mejor con mi caso, cómo combinarlas y cuál priorizar al inicio. Con ejemplos concretos aplicados a mi negocio.",
     en:"Act as a business model consultant. For [BUSINESS/IDEA], help me define how it will generate revenue. Propose different ways to monetize (direct sales, subscription, services, commissions, etc.), which fit my case best, how to combine them and which to prioritize at the start. With concrete examples applied to my business."}},

{ cat:"business", t:{es:"Decisión difícil de negocio", en:"Tough business decision"},
  p:{es:"Eres asesor de negocios. Tengo que tomar esta decisión: [DESCRIBE LA DECISIÓN]. Ayúdame a pensarla con claridad: dame los pros y contras de cada opción, los riesgos, las preguntas clave que debo responderme y un marco para decidir. No decidas por mí, ayúdame a ver el panorama completo para elegir mejor.",
     en:"You're a business advisor. I have to make this decision: [DESCRIBE THE DECISION]. Help me think it through clearly: give me the pros and cons of each option, the risks, the key questions I should answer and a framework to decide. Don't decide for me, help me see the full picture to choose better."}},

{ cat:"business", t:{es:"Sistema para organizar tu negocio", en:"System to organize your business"},
  p:{es:"Actúa como consultor de procesos. Mi negocio [NEGOCIO] está desorganizado y todo depende de mí. Ayúdame a crear sistemas simples para ordenarlo: cómo documentar las tareas repetitivas, qué procesos automatizar o delegar, cómo organizar la información y los clientes. Dame un plan para que el negocio funcione sin que yo haga todo.",
     en:"Act as a process consultant. My business [BUSINESS] is disorganized and everything depends on me. Help me create simple systems to organize it: how to document repetitive tasks, what processes to automate or delegate, how to organize information and customers. Give me a plan so the business runs without me doing everything."}},

{ cat:"business", t:{es:"Encuentra nuevas fuentes de ingreso", en:"Find new income streams"},
  p:{es:"Eres consultor de crecimiento. Para mi negocio [NEGOCIO], ayúdame a encontrar nuevas formas de generar ingresos aprovechando lo que ya tengo (clientes, conocimiento, productos). Dame 7 ideas concretas de productos o servicios complementarios que podría ofrecer, por qué funcionarían y cuál sería el más fácil de empezar.",
     en:"You're a growth consultant. For my business [BUSINESS], help me find new ways to generate income by leveraging what I already have (customers, knowledge, products). Give me 7 concrete ideas for complementary products or services I could offer, why they'd work and which would be the easiest to start."}},

// ---------- DISEÑO ----------
{ cat:"design", t:{es:"Logo para Midjourney", en:"Logo for Midjourney"},
  p:{es:"Crea un prompt detallado en inglés para que Midjourney genere un logo para [MARCA] del sector [SECTOR]. Describe: estilo (minimalista, moderno, etc.), elementos o símbolos, paleta de colores, tipo de imagen (icono, símbolo abstracto, letra) y parámetros recomendados. Dame 3 variaciones del prompt para distintos enfoques.",
     en:"Create a detailed English prompt for Midjourney to generate a logo for [BRAND] in the [SECTOR] sector. Describe: style (minimalist, modern, etc.), elements or symbols, color palette, image type (icon, abstract symbol, lettermark) and recommended parameters. Give me 3 variations of the prompt for different approaches."}},

{ cat:"design", t:{es:"Paleta de colores para tu marca", en:"Color palette for your brand"},
  p:{es:"Actúa como diseñador de marca. Crea una paleta de colores para [MARCA/NEGOCIO] que transmita [SENSACIÓN: confianza, energía, lujo, etc.]. Dame: 1 color principal, 2 secundarios y 2 de acento, con sus códigos hexadecimales, la psicología detrás de cada color y cómo usarlos (fondos, textos, botones). Adecuada para mi sector.",
     en:"Act as a brand designer. Create a color palette for [BRAND/BUSINESS] that conveys [FEELING: trust, energy, luxury, etc.]. Give me: 1 main color, 2 secondary and 2 accent, with their hex codes, the psychology behind each color and how to use them (backgrounds, text, buttons). Suitable for my sector."}},

{ cat:"design", t:{es:"Miniatura de YouTube que genera clics", en:"YouTube thumbnail that gets clicks"},
  p:{es:"Eres experto en diseño de miniaturas. Para un video sobre [TEMA], describe el diseño de una miniatura de YouTube que genere muchos clics. Indica: qué imagen o expresión usar, el texto corto e impactante, los colores que resalten, la composición y el elemento que despierte curiosidad. Que se destaque entre los demás videos.",
     en:"You're a thumbnail design expert. For a video about [TOPIC], describe the design of a YouTube thumbnail that gets lots of clicks. Indicate: what image or expression to use, the short impactful text, colors that stand out, the composition and the element that sparks curiosity. It should stand out among other videos."}},

{ cat:"design", t:{es:"Concepto visual para tu marca", en:"Visual concept for your brand"},
  p:{es:"Actúa como director de arte. Ayúdame a definir el concepto visual de [MARCA] dirigida a [PÚBLICO]. Dame recomendaciones de: estilo visual general, tipo de tipografías, paleta de colores, estilo de imágenes o fotos, y la sensación que debe transmitir todo en conjunto. Que sea coherente y conecte con mi público.",
     en:"Act as an art director. Help me define the visual concept of [BRAND] aimed at [AUDIENCE]. Give me recommendations on: overall visual style, type of fonts, color palette, style of images or photos, and the feeling everything together should convey. It should be coherent and connect with my audience."}},

{ cat:"design", t:{es:"Imagen de producto profesional con IA", en:"Professional product image with AI"},
  p:{es:"Crea un prompt en inglés para generar con IA una foto de producto profesional de [PRODUCTO]. Describe: el producto en detalle, el tipo de fondo, la iluminación, el ángulo, el ambiente y el estilo (minimalista, lujoso, natural). Incluye los parámetros técnicos recomendados para que se vea como foto de catálogo profesional.",
     en:"Create an English prompt to generate a professional product photo of [PRODUCT] with AI. Describe: the product in detail, the type of background, lighting, angle, ambiance and style (minimalist, luxurious, natural). Include recommended technical parameters so it looks like a professional catalog photo."}},

{ cat:"design", t:{es:"Diseño de publicación para redes", en:"Social media post design"},
  p:{es:"Actúa como diseñador gráfico. Describe el diseño de una publicación para [RED SOCIAL] sobre [TEMA/PRODUCTO]. Indica: la composición, dónde va el texto y la imagen, qué colores usar, la tipografía, y cómo jerarquizar la información para que sea atractiva y comunique claro. Que se vea profesional y detenga el scroll.",
     en:"Act as a graphic designer. Describe the design of a post for [SOCIAL NETWORK] about [TOPIC/PRODUCT]. Indicate: the composition, where the text and image go, what colors to use, the typography, and how to prioritize the information so it's attractive and communicates clearly. It should look professional and stop the scroll."}},

{ cat:"design", t:{es:"Ideas de diseño para empaque", en:"Packaging design ideas"},
  p:{es:"Eres diseñador de empaques. Dame ideas para el diseño del empaque de [PRODUCTO] dirigido a [PÚBLICO]. Considera: el estilo que conecte con el cliente, los colores y materiales, qué información destacar, cómo diferenciarse en el estante y cómo transmitir el valor del producto. Que sea atractivo y funcional. Con ejemplos descritos.",
     en:"You're a packaging designer. Give me ideas for the packaging design of [PRODUCT] aimed at [AUDIENCE]. Consider: the style that connects with the customer, colors and materials, what information to highlight, how to stand out on the shelf and how to convey the product's value. It should be attractive and functional. With described examples."}},

{ cat:"design", t:{es:"Banner para tu página web", en:"Banner for your website"},
  p:{es:"Crea un prompt en inglés para generar con IA un banner principal (hero) para la página web de [NEGOCIO]. Describe: el mensaje visual, el estilo, los colores acordes a la marca, los elementos gráficos, y el ambiente. Que transmita profesionalismo y el valor del negocio. Incluye parámetros para una imagen horizontal de alta calidad.",
     en:"Create an English prompt to generate a main hero banner for the website of [BUSINESS] with AI. Describe: the visual message, the style, brand-appropriate colors, graphic elements, and the ambiance. It should convey professionalism and the business's value. Include parameters for a high-quality horizontal image."}},

{ cat:"design", t:{es:"Mejora el diseño de tu marca", en:"Improve your brand design"},
  p:{es:"Actúa como consultor de branding. Mi marca [MARCA] se ve [DESCRIBE: anticuada, amateur, etc.]. Dame recomendaciones concretas para mejorar su imagen: qué cambiar del logo, colores y tipografías, cómo modernizarla sin perder su esencia, y cómo lograr que se vea más profesional y confiable. Consejos aplicables sin gran presupuesto.",
     en:"Act as a branding consultant. My brand [BRAND] looks [DESCRIBE: outdated, amateur, etc.]. Give me concrete recommendations to improve its image: what to change in the logo, colors and fonts, how to modernize it without losing its essence, and how to make it look more professional and trustworthy. Applicable advice without a big budget."}},

// ---------- PRODUCTIVIDAD ----------
{ cat:"productivity", t:{es:"Organiza tu semana de trabajo", en:"Organize your work week"},
  p:{es:"Actúa como experto en productividad. Ayúdame a organizar mi semana. Estas son mis tareas y responsabilidades: [LISTA TUS TAREAS]. Ayúdame a priorizarlas, distribuirlas en la semana de forma realista, agrupar las similares, e identificar qué hacer primero. Dame un plan claro que me ayude a avanzar sin saturarme.",
     en:"Act as a productivity expert. Help me organize my week. These are my tasks and responsibilities: [LIST YOUR TASKS]. Help me prioritize them, distribute them through the week realistically, group similar ones, and identify what to do first. Give me a clear plan that helps me make progress without overwhelming myself."}},

{ cat:"productivity", t:{es:"Resume un texto largo", en:"Summarize a long text"},
  p:{es:"Actúa como experto en síntesis. Resume el siguiente texto destacando solo lo más importante: \"[PEGA EL TEXTO]\". Dame: un resumen breve en un párrafo, los puntos clave en viñetas, y cualquier conclusión o acción importante. Que pueda entender lo esencial en segundos sin leer todo. Claro y bien organizado.",
     en:"Act as a synthesis expert. Summarize the following text highlighting only the most important: \"[PASTE THE TEXT]\". Give me: a brief one-paragraph summary, the key points in bullets, and any important conclusion or action. So I can understand the essentials in seconds without reading everything. Clear and well organized."}},

{ cat:"productivity", t:{es:"Plan para dejar de procrastinar", en:"Plan to stop procrastinating"},
  p:{es:"Eres coach de productividad. Tengo problemas para [TAREA QUE EVITAS] y siempre la postergo. Ayúdame a dejar de procrastinar con esto: por qué creo que la evito, cómo dividirla en pasos pequeños y fáciles, técnicas para empezar aunque no tenga ganas, y cómo mantenerme constante. Consejos prácticos y aplicables hoy mismo.",
     en:"You're a productivity coach. I struggle with [TASK YOU AVOID] and always put it off. Help me stop procrastinating on this: why I might be avoiding it, how to break it into small easy steps, techniques to start even when I don't feel like it, and how to stay consistent. Practical advice I can apply today."}},

{ cat:"productivity", t:{es:"Automatiza tareas repetitivas", en:"Automate repetitive tasks"},
  p:{es:"Actúa como experto en eficiencia. En mi trabajo hago estas tareas repetitivas: [DESCRIBE LAS TAREAS]. Ayúdame a identificar cuáles puedo automatizar o simplificar, qué herramientas o métodos usar, y cómo crear un sistema que me ahorre tiempo. Enfócate en soluciones simples que pueda implementar sin ser experto en tecnología.",
     en:"Act as an efficiency expert. At work I do these repetitive tasks: [DESCRIBE THE TASKS]. Help me identify which I can automate or simplify, what tools or methods to use, and how to create a system that saves me time. Focus on simple solutions I can implement without being a tech expert."}},

{ cat:"productivity", t:{es:"Toma decisiones más rápido", en:"Make decisions faster"},
  p:{es:"Eres experto en toma de decisiones. Me cuesta decidir y pierdo mucho tiempo dudando. Dame un método simple para tomar decisiones más rápido y con confianza: cómo distinguir decisiones importantes de las que no lo son, preguntas clave para decidir rápido, y cómo dejar de darle tantas vueltas. Práctico y fácil de aplicar.",
     en:"You're a decision-making expert. I struggle to decide and waste a lot of time hesitating. Give me a simple method to make decisions faster and with confidence: how to tell important decisions from trivial ones, key questions to decide quickly, and how to stop overthinking. Practical and easy to apply."}},

{ cat:"productivity", t:{es:"Convierte ideas en un plan de acción", en:"Turn ideas into an action plan"},
  p:{es:"Actúa como experto en ejecución. Tengo esta idea o meta: [DESCRIBE TU IDEA/META]. Ayúdame a convertirla en un plan de acción concreto: divídela en etapas, dime los pasos específicos de cada una, en qué orden hacerlos, y cómo medir mi avance. Que pase de ser una idea en mi cabeza a algo que pueda empezar a ejecutar ya.",
     en:"Act as an execution expert. I have this idea or goal: [DESCRIBE YOUR IDEA/GOAL]. Help me turn it into a concrete action plan: break it into stages, tell me the specific steps of each, in what order to do them, and how to measure my progress. So it goes from an idea in my head to something I can start executing now."}},

{ cat:"productivity", t:{es:"Reduce las distracciones", en:"Reduce distractions"},
  p:{es:"Eres coach de enfoque. Me distraigo mucho con [DISTRACCIONES: celular, redes, etc.] y no logro concentrarme. Dame estrategias prácticas para reducir las distracciones y mantener el foco: cómo organizar mi entorno, técnicas de concentración, cómo manejar el celular, y cómo crear bloques de trabajo profundo. Aplicable a mi día a día.",
     en:"You're a focus coach. I get distracted a lot by [DISTRACTIONS: phone, social media, etc.] and can't concentrate. Give me practical strategies to reduce distractions and stay focused: how to organize my environment, concentration techniques, how to manage my phone, and how to create deep-work blocks. Applicable to my daily routine."}},

{ cat:"productivity", t:{es:"Prepara una reunión efectiva", en:"Prepare an effective meeting"},
  p:{es:"Actúa como experto en gestión. Tengo una reunión sobre [TEMA] con [PARTICIPANTES]. Ayúdame a prepararla para que sea efectiva y no una pérdida de tiempo: el objetivo claro, la agenda con tiempos, las preguntas o puntos a tratar, cómo mantenerla enfocada y cómo cerrar con acciones concretas. Dame todo organizado.",
     en:"Act as a management expert. I have a meeting about [TOPIC] with [PARTICIPANTS]. Help me prepare it so it's effective and not a waste of time: the clear objective, the agenda with timing, the questions or points to cover, how to keep it focused and how to close with concrete actions. Give me everything organized."}},

{ cat:"productivity", t:{es:"Rutina de mañana productiva", en:"Productive morning routine"},
  p:{es:"Eres coach de hábitos. Ayúdame a diseñar una rutina de mañana que me prepare para un día productivo. Tengo [TIEMPO DISPONIBLE] en las mañanas y mi trabajo es [TIPO DE TRABAJO]. Incluye actividades que mejoren mi energía, enfoque y ánimo, sin que sea complicada de mantener. Realista y adaptada a mi situación.",
     en:"You're a habits coach. Help me design a morning routine that sets me up for a productive day. I have [AVAILABLE TIME] in the mornings and my work is [TYPE OF WORK]. Include activities that improve my energy, focus and mood, without being hard to maintain. Realistic and adapted to my situation."}},

// ---------- E-COMMERCE ----------
{ cat:"ecommerce", t:{es:"Ficha de producto que convierte", en:"Product page that converts"},
  p:{es:"Actúa como experto en e-commerce. Escribe la ficha completa de producto para [PRODUCTO] en una tienda online. Incluye: un título optimizado, una descripción persuasiva enfocada en beneficios, las características clave en viñetas, qué incluye, y por qué comprarlo. Que convenza al cliente y resuelva sus dudas antes de comprar.",
     en:"Act as an e-commerce expert. Write the complete product page for [PRODUCT] in an online store. Include: an optimized title, a persuasive description focused on benefits, the key features in bullets, what's included, and why to buy it. It should convince the customer and resolve their doubts before buying."}},

{ cat:"ecommerce", t:{es:"Recupera carritos abandonados", en:"Recover abandoned carts"},
  p:{es:"Eres experto en conversión de tiendas online. Crea una secuencia de 3 mensajes para recuperar clientes que dejaron productos en el carrito sin comprar. Mensaje 1: recordatorio amable. Mensaje 2: resolver dudas o dar confianza. Mensaje 3: incentivo final con urgencia. Para email o WhatsApp, listos para usar y personalizar.",
     en:"You're an online store conversion expert. Create a sequence of 3 messages to recover customers who left products in the cart without buying. Message 1: friendly reminder. Message 2: resolve doubts or build trust. Message 3: final incentive with urgency. For email or WhatsApp, ready to use and personalize."}},

{ cat:"ecommerce", t:{es:"Descripción de producto para Marketplace", en:"Product description for Marketplace"},
  p:{es:"Actúa como vendedor experto en Marketplace. Escribe una descripción de producto para vender [PRODUCTO] en Facebook Marketplace o similar. Que sea clara, destaque los beneficios, genere confianza, incluya los detalles importantes (estado, características) y termine invitando a contactar. Optimizada para generar mensajes de interesados.",
     en:"Act as an expert Marketplace seller. Write a product description to sell [PRODUCT] on Facebook Marketplace or similar. It should be clear, highlight the benefits, build trust, include the important details (condition, features) and end by inviting contact. Optimized to generate messages from interested buyers."}},

{ cat:"ecommerce", t:{es:"Estrategia para vender más en tu tienda", en:"Strategy to sell more in your store"},
  p:{es:"Eres consultor de e-commerce. Mi tienda online vende [PRODUCTOS] pero quiero aumentar las ventas. Dame estrategias concretas: cómo mejorar las fichas de producto, qué ofertas o combos crear, cómo aumentar el valor de cada compra, cómo generar confianza y reducir el abandono. Enfocado en acciones que pueda aplicar pronto.",
     en:"You're an e-commerce consultant. My online store sells [PRODUCTS] but I want to increase sales. Give me concrete strategies: how to improve product pages, what offers or bundles to create, how to increase the value of each purchase, how to build trust and reduce abandonment. Focused on actions I can apply soon."}},

{ cat:"ecommerce", t:{es:"Responde dudas de clientes online", en:"Answer online customer questions"},
  p:{es:"Actúa como experto en atención al cliente de tiendas online. Crea respuestas profesionales y amables para las preguntas más comunes de clientes sobre [PRODUCTO/TIENDA]: tiempos de envío, formas de pago, garantía, devoluciones y características del producto. Que generen confianza y ayuden a cerrar la venta. Listas para usar.",
     en:"Act as an online store customer service expert. Create professional, friendly responses to the most common customer questions about [PRODUCT/STORE]: shipping times, payment methods, warranty, returns and product features. They should build trust and help close the sale. Ready to use."}},

{ cat:"ecommerce", t:{es:"Oferta irresistible para tu tienda", en:"Irresistible offer for your store"},
  p:{es:"Eres experto en ofertas. Ayúdame a crear una oferta irresistible para [PRODUCTO] en mi tienda. Combina elementos que aumenten el valor percibido: el producto principal, bonos o regalos, descuento por tiempo limitado, garantía y facilidad de pago. Preséntala de forma que el cliente sienta que no comprarla sería una mala decisión.",
     en:"You're an offers expert. Help me create an irresistible offer for [PRODUCT] in my store. Combine elements that increase perceived value: the main product, bonuses or gifts, limited-time discount, guarantee and easy payment. Present it so the customer feels that not buying it would be a bad decision."}},

{ cat:"ecommerce", t:{es:"Nombres para tus productos", en:"Names for your products"},
  p:{es:"Actúa como experto en branding de productos. Dame 10 nombres atractivos para [TIPO DE PRODUCTO] dirigido a [PÚBLICO]. Que sean fáciles de recordar, transmitan el beneficio o la sensación del producto, y suenen profesionales. Varía los estilos y al final marca los 3 con mejor potencial comercial, explicando por qué.",
     en:"Act as a product branding expert. Give me 10 attractive names for [TYPE OF PRODUCT] aimed at [AUDIENCE]. They should be easy to remember, convey the benefit or feeling of the product, and sound professional. Vary the styles and at the end mark the 3 with the best commercial potential, explaining why."}},

{ cat:"ecommerce", t:{es:"Política de envíos y devoluciones", en:"Shipping and returns policy"},
  p:{es:"Actúa como experto en e-commerce. Ayúdame a redactar una política clara de envíos y devoluciones para mi tienda online de [PRODUCTOS]. Que cubra: tiempos y costos de envío, zonas de cobertura, condiciones de devolución, garantía y cómo proceder. Redactada de forma clara y que genere confianza, no que asuste al cliente.",
     en:"Act as an e-commerce expert. Help me write a clear shipping and returns policy for my online store of [PRODUCTS]. It should cover: shipping times and costs, coverage areas, return conditions, warranty and how to proceed. Written clearly and in a way that builds trust, not that scares the customer."}},

{ cat:"ecommerce", t:{es:"Vende productos digitales", en:"Sell digital products"},
  p:{es:"Eres experto en productos digitales. Quiero vender [PRODUCTO DIGITAL]. Ayúdame con: cómo presentarlo para que se perciba valioso, cómo poner el precio, qué incluir para aumentar el valor, cómo entregarlo al cliente y cómo manejar la confianza al vender algo que no se toca. Dame una estrategia completa para venderlo bien.",
     en:"You're a digital products expert. I want to sell [DIGITAL PRODUCT]. Help me with: how to present it so it's perceived as valuable, how to price it, what to include to increase value, how to deliver it to the customer and how to handle trust when selling something intangible. Give me a complete strategy to sell it well."}},

// ---------- EMAIL MARKETING ----------
{ cat:"email", t:{es:"Asunto de correo que abren", en:"Email subject they open"},
  p:{es:"Actúa como experto en email marketing. Dame 15 líneas de asunto para un correo sobre [TEMA/OFERTA] dirigido a [PÚBLICO] que logren altas tasas de apertura. Varía los estilos: curiosidad, beneficio, urgencia, pregunta y personalización. Cortos y potentes. Marca los 3 con mayor probabilidad de ser abiertos.",
     en:"Act as an email marketing expert. Give me 15 subject lines for an email about [TOPIC/OFFER] aimed at [AUDIENCE] that achieve high open rates. Vary the styles: curiosity, benefit, urgency, question and personalization. Short and powerful. Mark the 3 most likely to be opened."}},

{ cat:"email", t:{es:"Correo de venta directa", en:"Direct sales email"},
  p:{es:"Eres copywriter de email. Escribe un correo de venta para [PRODUCTO] dirigido a [PÚBLICO]. Que tenga: un asunto irresistible, una apertura que enganche, el desarrollo enfocado en beneficios y en resolver una objeción, prueba o testimonio, y una llamada a la acción clara. Persuasivo, cercano y enfocado en que el lector compre.",
     en:"You're an email copywriter. Write a sales email for [PRODUCT] aimed at [AUDIENCE]. It should have: an irresistible subject, an engaging opening, the body focused on benefits and resolving an objection, proof or testimonial, and a clear call to action. Persuasive, warm and focused on getting the reader to buy."}},

{ cat:"email", t:{es:"Newsletter que la gente lee", en:"Newsletter people read"},
  p:{es:"Actúa como experto en newsletters. Ayúdame a crear una edición de newsletter para mi audiencia de [NICHO]. Dame: un tema interesante, una estructura que mantenga el interés, contenido de valor que conecte, un toque personal y una sección que lleve sutilmente hacia mi producto. Que aporte valor real y no solo venda. Lista para enviar.",
     en:"Act as a newsletter expert. Help me create a newsletter edition for my [NICHE] audience. Give me: an interesting topic, a structure that keeps interest, valuable content that connects, a personal touch and a section that subtly leads toward my product. It should provide real value and not just sell. Ready to send."}},

{ cat:"email", t:{es:"Secuencia de correos de seguimiento", en:"Follow-up email sequence"},
  p:{es:"Eres estratega de email marketing. Crea una secuencia de 4 correos de seguimiento para alguien que se interesó en [PRODUCTO] pero no compró. Correo 1: aportar valor. Correo 2: resolver dudas. Correo 3: prueba social. Correo 4: oferta con urgencia. Para cada uno dame el asunto y el contenido. Que lleven naturalmente a la compra.",
     en:"You're an email marketing strategist. Create a sequence of 4 follow-up emails for someone who showed interest in [PRODUCT] but didn't buy. Email 1: provide value. Email 2: resolve doubts. Email 3: social proof. Email 4: offer with urgency. For each give me the subject and content. They should lead naturally to the purchase."}},

{ cat:"email", t:{es:"Correo de reactivación", en:"Re-engagement email"},
  p:{es:"Actúa como experto en email. Escribe un correo para reactivar suscriptores que llevan tiempo sin abrir mis correos, en el nicho de [NICHO]. Que reconozca la ausencia con cercanía, ofrezca algo de valor para reconectar, recuerde por qué se suscribieron y los invite a seguir. Honesto y cálido, que recupere su interés.",
     en:"Act as an email expert. Write an email to re-engage subscribers who haven't opened my emails in a while, in the [NICHE] niche. It should acknowledge the absence warmly, offer something valuable to reconnect, remind them why they subscribed and invite them to stay. Honest and warm, to win back their interest."}},

{ cat:"email", t:{es:"Correo de bienvenida con gancho", en:"Welcome email with a hook"},
  p:{es:"Eres copywriter de email. Escribe el primer correo de bienvenida para alguien que acaba de suscribirse a [NEGOCIO/LISTA]. Que dé una cálida bienvenida, genere una buena primera impresión, entregue algo de valor de inmediato, cuente brevemente qué puede esperar y deje ganas de abrir el siguiente correo. Cercano y profesional.",
     en:"You're an email copywriter. Write the first welcome email for someone who just subscribed to [BUSINESS/LIST]. It should give a warm welcome, create a good first impression, deliver some value immediately, briefly tell them what to expect and leave them wanting to open the next email. Warm and professional."}},

{ cat:"email", t:{es:"Correo para lanzar una oferta", en:"Email to launch an offer"},
  p:{es:"Actúa como experto en lanzamientos por email. Escribe un correo para anunciar una oferta especial de [PRODUCTO] a mi lista. Que genere expectativa, presente la oferta de forma irresistible, explique el beneficio y la razón de la promoción, ponga una fecha límite clara y motive a actuar ya. Con asunto incluido. Que impulse ventas rápido.",
     en:"Act as an email launch expert. Write an email to announce a special offer for [PRODUCT] to my list. It should build anticipation, present the offer irresistibly, explain the benefit and the reason for the promotion, set a clear deadline and motivate action now. Subject included. It should drive sales fast."}},

// ---------- SEO Y BLOGS ----------
{ cat:"seo", t:{es:"Palabras clave para tu negocio", en:"Keywords for your business"},
  p:{es:"Actúa como experto en SEO. Para un negocio de [SECTOR/TEMA] dirigido a [PÚBLICO], dame una lista de palabras clave que la gente busca en Google. Inclúyelas organizadas por intención (informativas, de compra), con palabras clave principales y de cola larga, y sugiéreme sobre cuáles enfocar primero por su potencial. Adaptadas al mercado hispano.",
     en:"Act as an SEO expert. For a business in [SECTOR/TOPIC] aimed at [AUDIENCE], give me a list of keywords people search on Google. Include them organized by intent (informational, purchase), with main and long-tail keywords, and suggest which to focus on first by their potential. Adapted to the relevant market."}},

{ cat:"seo", t:{es:"Estructura de artículo optimizado", en:"Optimized article structure"},
  p:{es:"Eres experto en SEO de contenidos. Dame la estructura completa de un artículo de blog optimizado sobre [TEMA] para la palabra clave [PALABRA CLAVE]. Incluye: el título con la keyword, la meta descripción, los subtítulos (H2, H3) organizados, qué cubrir en cada sección y dónde colocar la palabra clave de forma natural. Listo para redactar.",
     en:"You're a content SEO expert. Give me the complete structure of an SEO-optimized blog article about [TOPIC] for the keyword [KEYWORD]. Include: the title with the keyword, the meta description, the subheadings (H2, H3) organized, what to cover in each section and where to place the keyword naturally. Ready to write."}},

{ cat:"seo", t:{es:"Meta título y descripción", en:"Meta title and description"},
  p:{es:"Actúa como experto en SEO. Para una página sobre [TEMA/PRODUCTO] con la palabra clave [KEYWORD], escríbeme 5 opciones de meta título (máximo 60 caracteres) y 5 de meta descripción (máximo 155 caracteres) optimizadas para que la gente haga clic desde Google. Que incluyan la keyword y un gancho. Marca las mejores.",
     en:"Act as an SEO expert. For a page about [TOPIC/PRODUCT] with the keyword [KEYWORD], write me 5 meta title options (max 60 characters) and 5 meta description options (max 155 characters) optimized to make people click from Google. They should include the keyword and a hook. Mark the best ones."}},

{ cat:"seo", t:{es:"Ideas de contenido para posicionar", en:"Content ideas to rank"},
  p:{es:"Eres estratega de SEO. Para un blog de [TEMA/NICHO], dame 15 ideas de artículos que tengan buen potencial de posicionar en Google y atraer a [PÚBLICO]. Para cada idea: el título sugerido, la palabra clave que apunta y la intención de búsqueda. Enfócate en temas que la gente realmente busca y que puedan traer tráfico.",
     en:"You're an SEO strategist. For a blog about [TOPIC/NICHE], give me 15 article ideas with good potential to rank on Google and attract [AUDIENCE]. For each idea: the suggested title, the keyword it targets and the search intent. Focus on topics people actually search for and that can bring traffic."}},

{ cat:"seo", t:{es:"Optimiza un texto existente para SEO", en:"Optimize existing text for SEO"},
  p:{es:"Actúa como experto en SEO. Toma este texto y optimízalo para posicionar mejor en Google para la palabra clave [KEYWORD]: \"[PEGA TU TEXTO]\". Mejora la estructura, agrega la keyword de forma natural, sugiere subtítulos, y dime qué le falta para ser más completo que la competencia. Muéstrame las mejoras y explícalas.",
     en:"Act as an SEO expert. Take this text and optimize it to rank better on Google for the keyword [KEYWORD]: \"[PASTE YOUR TEXT]\". Improve the structure, add the keyword naturally, suggest subheadings, and tell me what it needs to be more complete than the competition. Show me the improvements and explain them."}},

{ cat:"seo", t:{es:"Responde la intención de búsqueda", en:"Answer the search intent"},
  p:{es:"Eres experto en SEO. Cuando alguien busca [PALABRA CLAVE/PREGUNTA] en Google, ¿qué está buscando realmente y qué espera encontrar? Analiza la intención de búsqueda, qué tipo de contenido debería crear para satisfacerla mejor que otros, qué preguntas relacionadas responder y cómo estructurarlo para posicionar. Detallado y práctico.",
     en:"You're an SEO expert. When someone searches [KEYWORD/QUESTION] on Google, what are they really looking for and what do they expect to find? Analyze the search intent, what type of content I should create to satisfy it better than others, what related questions to answer and how to structure it to rank. Detailed and practical."}},

{ cat:"seo", t:{es:"Título de blog que atrae clics", en:"Blog title that attracts clicks"},
  p:{es:"Actúa como experto en titulares SEO. Para un artículo sobre [TEMA] con la palabra clave [KEYWORD], dame 12 títulos optimizados que combinen SEO con poder de atracción para generar clics. Varía los formatos: listas, cómo hacer, preguntas, guías. Que incluyan la keyword sin sonar forzados. Marca los 3 con mejor equilibrio entre SEO y clics.",
     en:"Act as an SEO headline expert. For an article about [TOPIC] with the keyword [KEYWORD], give me 12 optimized titles that combine SEO with attraction power to generate clicks. Vary the formats: lists, how-to, questions, guides. They should include the keyword without sounding forced. Mark the 3 with the best balance between SEO and clicks."}},

{ cat:"seo", t:{es:"Preguntas frecuentes para posicionar", en:"FAQs to rank"},
  p:{es:"Eres experto en SEO. Para el tema [TEMA], dame una lista de 10 preguntas frecuentes que la gente busca en Google, con una respuesta breve y optimizada para cada una. Que sirvan para agregar a un artículo o página y captar tráfico de búsquedas, además de posicionar para fragmentos destacados. Claras y útiles.",
     en:"You're an SEO expert. For the topic [TOPIC], give me a list of 10 frequently asked questions people search on Google, with a brief, optimized answer for each. They should work to add to an article or page and capture search traffic, plus rank for featured snippets. Clear and useful."}},

// ---------- VIDEO Y GUIONES ----------
{ cat:"video", t:{es:"Guion para video de YouTube", en:"YouTube video script"},
  p:{es:"Actúa como guionista de YouTube. Escribe el guion de un video sobre [TEMA] de aproximadamente [DURACIÓN]. Incluye: un gancho en los primeros 15 segundos que retenga, una introducción de lo que verán, el desarrollo organizado por puntos, momentos para mantener la atención y un cierre con llamada a la acción. Indica qué decir y qué mostrar.",
     en:"Act as a YouTube scriptwriter. Write the script for a video about [TOPIC] of about [DURATION]. Include: a hook in the first 15 seconds that retains, an intro of what they'll see, the body organized by points, moments to keep attention and a closing with a call to action. Indicate what to say and what to show."}},

{ cat:"video", t:{es:"Guion para anuncio en video", en:"Video ad script"},
  p:{es:"Eres experto en video ads. Escribe el guion de un anuncio en video de 30 segundos para [PRODUCTO] dirigido a [PÚBLICO]. Que tenga: un gancho que detenga el scroll, presente el problema, muestre mi producto como solución, genere deseo y termine con una llamada a la acción clara. Indica las escenas, el texto en pantalla y la narración. Que venda.",
     en:"You're a video ads expert. Write the script for a 30-second video ad for [PRODUCT] aimed at [AUDIENCE]. It should have: a hook that stops the scroll, present the problem, show my product as the solution, generate desire and end with a clear call to action. Indicate the scenes, on-screen text and narration. It should sell."}},

{ cat:"video", t:{es:"Ideas de videos para tu canal", en:"Video ideas for your channel"},
  p:{es:"Actúa como estratega de contenido en video. Para un canal de [TEMA/NICHO] dirigido a [PÚBLICO], dame 15 ideas de videos con buen potencial. Para cada una: el título atractivo, de qué trataría y por qué le interesaría a mi audiencia. Varía entre educativos, de entretenimiento, tendencias y de venta. Ordénalas por potencial de vistas.",
     en:"Act as a video content strategist. For a [TOPIC/NICHE] channel aimed at [AUDIENCE], give me 15 video ideas with good potential. For each: the attractive title, what it would be about and why my audience would care. Vary between educational, entertainment, trends and sales. Sort them by view potential."}},

{ cat:"video", t:{es:"Guion para video corto (Reel/TikTok)", en:"Short video script (Reel/TikTok)"},
  p:{es:"Eres creador de contenido corto. Escribe el guion de un video de 30-45 segundos sobre [TEMA] para [PLATAFORMA]. Estructura: un gancho potente en los primeros 3 segundos, desarrollo con una sola idea clara, un momento de valor o sorpresa, y un cierre con llamada a la acción. Indica el texto en pantalla y lo que se ve. Que enganche de principio a fin.",
     en:"You're a short content creator. Write the script of a 30-45 second video about [TOPIC] for [PLATFORM]. Structure: a powerful hook in the first 3 seconds, development with one clear idea, a moment of value or surprise, and a closing with a call to action. Indicate the on-screen text and what's shown. It should engage from start to finish."}},

{ cat:"video", t:{es:"Ganchos para los primeros segundos", en:"Hooks for the first seconds"},
  p:{es:"Actúa como experto en retención de video. Para un video sobre [TEMA], dame 10 ganchos potentes para los primeros 3-5 segundos que eviten que la gente pase de largo. Varía los tipos: pregunta intrigante, dato sorprendente, promesa, error común, afirmación polémica. Que generen ganas de seguir viendo. Marca los 3 más fuertes.",
     en:"Act as a video retention expert. For a video about [TOPIC], give me 10 powerful hooks for the first 3-5 seconds that prevent people from scrolling past. Vary the types: intriguing question, surprising fact, promise, common mistake, controversial statement. They should make people want to keep watching. Mark the 3 strongest."}},

{ cat:"video", t:{es:"Guion para video explicativo", en:"Explainer video script"},
  p:{es:"Eres guionista de videos explicativos. Escribe el guion para explicar [TEMA/PRODUCTO/SERVICIO] de forma clara y sencilla en un video corto. Que presente el problema, explique la solución paso a paso de forma fácil de entender, use un lenguaje cercano y termine invitando a la acción. Indica la narración y los apoyos visuales sugeridos.",
     en:"You're an explainer video scriptwriter. Write the script to explain [TOPIC/PRODUCT/SERVICE] clearly and simply in a short video. It should present the problem, explain the solution step by step in an easy-to-understand way, use warm language and end by inviting action. Indicate the narration and suggested visual aids."}},

{ cat:"video", t:{es:"Descripción y título para tu video", en:"Description and title for your video"},
  p:{es:"Actúa como experto en YouTube. Para mi video sobre [TEMA], dame: 5 títulos optimizados que atraigan clics e incluyan la palabra clave, una descripción completa que ayude a posicionar y enganche, y una lista de etiquetas relevantes. Que ayuden a que el video sea encontrado y tenga más vistas. Adaptado al público hispano.",
     en:"Act as a YouTube expert. For my video about [TOPIC], give me: 5 optimized titles that attract clicks and include the keyword, a complete description that helps it rank and engages, and a list of relevant tags. They should help the video be found and get more views. Adapted to the relevant audience."}},

{ cat:"video", t:{es:"Guion de testimonio o caso de éxito", en:"Testimonial or success story script"},
  p:{es:"Eres experto en video marketing. Ayúdame a crear el guion para un video de testimonio o caso de éxito sobre [PRODUCTO/SERVICIO]. Estructura: la situación antes, el problema que tenía el cliente, cómo mi producto ayudó, el resultado obtenido y una recomendación final. Que sea creíble, emotivo y genere confianza para vender. Natural, no robótico.",
     en:"You're a video marketing expert. Help me create the script for a testimonial or success story video about [PRODUCT/SERVICE]. Structure: the situation before, the problem the customer had, how my product helped, the result achieved and a final recommendation. It should be believable, emotional and build trust to sell. Natural, not robotic."}},

// ---------- MARCA PERSONAL ----------
{ cat:"personal", t:{es:"Define tu marca personal", en:"Define your personal brand"},
  p:{es:"Actúa como experto en marca personal. Ayúdame a definir la mía. Me dedico a [ACTIVIDAD] y quiero ser conocido por [TEMA/VALOR]. Dame: cuál podría ser mi mensaje central, qué me diferencia, qué temas debería tratar, qué tono usar y cómo quiero que me perciban. Que tenga claridad sobre cómo construir mi marca personal de forma auténtica.",
     en:"Act as a personal branding expert. Help me define mine. I work in [ACTIVITY] and want to be known for [TOPIC/VALUE]. Give me: what my central message could be, what differentiates me, what topics I should cover, what tone to use and how I want to be perceived. So I have clarity on how to build my personal brand authentically."}},

{ cat:"personal", t:{es:"Bio profesional para redes", en:"Professional bio for social media"},
  p:{es:"Eres experto en marca personal. Escríbeme 5 versiones de una biografía corta para mi perfil de [RED SOCIAL/LINKEDIN]. Me dedico a [ACTIVIDAD] y ayudo a [PÚBLICO] a [BENEFICIO]. Que sea clara, transmita mi valor, genere confianza e invite a seguirme o contactarme. Adaptada al límite de caracteres. Marca la que mejor me posiciona.",
     en:"You're a personal branding expert. Write me 5 versions of a short bio for my [SOCIAL NETWORK/LINKEDIN] profile. I work in [ACTIVITY] and help [AUDIENCE] to [BENEFIT]. It should be clear, convey my value, build trust and invite people to follow or contact me. Adapted to the character limit. Mark the one that positions me best."}},

{ cat:"personal", t:{es:"Publicación para LinkedIn que destaca", en:"LinkedIn post that stands out"},
  p:{es:"Actúa como experto en contenido para LinkedIn. Escribe una publicación sobre [TEMA/EXPERIENCIA] que genere interacción y me posicione como referente en [ÁREA]. Que tenga un inicio que enganche, una historia o aprendizaje de valor, un mensaje que aporte y una invitación a comentar. Profesional pero cercano, en el estilo que funciona en LinkedIn.",
     en:"Act as a LinkedIn content expert. Write a post about [TOPIC/EXPERIENCE] that drives engagement and positions me as a reference in [AREA]. It should have an engaging opening, a valuable story or lesson, a message that adds value and an invitation to comment. Professional but warm, in the style that works on LinkedIn."}},

{ cat:"personal", t:{es:"Cuenta tu historia profesional", en:"Tell your professional story"},
  p:{es:"Eres experto en storytelling personal. Ayúdame a contar mi historia profesional de forma que conecte e inspire. Mi trayectoria es: [RESUME TU HISTORIA]. Conviértela en un relato atractivo que muestre mi propósito, los retos que superé y el valor que aporto hoy. Que genere conexión y confianza con quien lo lea. Auténtico y memorable.",
     en:"You're a personal storytelling expert. Help me tell my professional story in a way that connects and inspires. My background is: [SUMMARIZE YOUR STORY]. Turn it into an engaging narrative that shows my purpose, the challenges I overcame and the value I bring today. It should create connection and trust with whoever reads it. Authentic and memorable."}},

{ cat:"personal", t:{es:"Posiciónate como experto en tu tema", en:"Position yourself as an expert"},
  p:{es:"Actúa como estratega de marca personal. Quiero posicionarme como experto en [TEMA] ante [PÚBLICO]. Dame una estrategia: qué tipo de contenido demuestra mi conocimiento, cómo compartir mi experiencia con autoridad, qué temas tratar para destacar, y cómo ganar credibilidad con el tiempo. Plan concreto y aplicable para construir autoridad.",
     en:"Act as a personal brand strategist. I want to position myself as an expert in [TOPIC] for [AUDIENCE]. Give me a strategy: what type of content demonstrates my knowledge, how to share my experience with authority, what topics to cover to stand out, and how to gain credibility over time. A concrete, applicable plan to build authority."}},

{ cat:"personal", t:{es:"Discurso de presentación (elevator pitch)", en:"Elevator pitch"},
  p:{es:"Eres experto en comunicación. Ayúdame a crear mi discurso de presentación de 30 segundos. Me dedico a [ACTIVIDAD] y ayudo a [PÚBLICO] a [BENEFICIO/RESULTADO]. Que sea claro, memorable, despierte interés y deje a la otra persona queriendo saber más. Dame 3 versiones para distintos contextos (networking, cliente, redes). Natural y convincente.",
     en:"You're a communication expert. Help me create my 30-second elevator pitch. I work in [ACTIVITY] and help [AUDIENCE] to [BENEFIT/RESULT]. It should be clear, memorable, spark interest and leave the other person wanting to know more. Give me 3 versions for different contexts (networking, client, social media). Natural and convincing."}},

{ cat:"personal", t:{es:"Plan de contenido de marca personal", en:"Personal brand content plan"},
  p:{es:"Actúa como estratega de contenido personal. Crea un plan de contenido para construir mi marca personal en [RED SOCIAL] sobre [TEMA]. Dame: los pilares de contenido (qué temas tratar), una mezcla de tipos de publicación, con qué frecuencia publicar, y cómo equilibrar mostrar mi experiencia, aportar valor y conectar a nivel humano. Práctico y sostenible.",
     en:"Act as a personal content strategist. Create a content plan to build my personal brand on [SOCIAL NETWORK] about [TOPIC]. Give me: the content pillars (what topics to cover), a mix of post types, how often to post, and how to balance showing my expertise, providing value and connecting on a human level. Practical and sustainable."}},

{ cat:"personal", t:{es:"Responde a una oportunidad laboral", en:"Respond to a job opportunity"},
  p:{es:"Eres experto en comunicación profesional. Ayúdame a responder a una oportunidad de [TRABAJO/COLABORACIÓN/PROYECTO] de forma que cause buena impresión. El contexto es: [DESCRIBE LA OPORTUNIDAD]. Redacta un mensaje profesional que muestre interés genuino, destaque por qué soy buena opción y deje una excelente impresión. Seguro pero no arrogante.",
     en:"You're a professional communication expert. Help me respond to a [JOB/COLLABORATION/PROJECT] opportunity in a way that makes a good impression. The context is: [DESCRIBE THE OPPORTUNITY]. Write a professional message that shows genuine interest, highlights why I'm a good fit and leaves an excellent impression. Confident but not arrogant."}},

// ---------- IA Y AGENTES ----------
{ cat:"agents", t:{es:"Crea instrucciones para un GPT personalizado", en:"Create instructions for a custom GPT"},
  p:{es:"Actúa como experto en configuración de agentes de IA. Ayúdame a crear las instrucciones para un GPT/agente personalizado que se especialice en [TAREA/FUNCIÓN]. Dame: el rol que debe asumir, su personalidad y tono, qué debe hacer paso a paso, qué información pedir al usuario, qué formato de respuesta usar y qué NO debe hacer. Listo para copiar y configurar.",
     en:"Act as an AI agent configuration expert. Help me create the instructions for a custom GPT/agent specialized in [TASK/FUNCTION]. Give me: the role it should take, its personality and tone, what it should do step by step, what information to ask the user, what response format to use and what it should NOT do. Ready to copy and configure."}},

{ cat:"agents", t:{es:"Diseña un asistente para tu negocio", en:"Design an assistant for your business"},
  p:{es:"Eres experto en automatización con IA. Ayúdame a diseñar un asistente de IA para mi negocio [NEGOCIO] que me ahorre tiempo en [TAREA: atención a clientes, crear contenido, etc.]. Dime: qué tareas puede manejar, cómo configurarlo, qué instrucciones darle, qué información necesita y cómo integrarlo en mi día a día. Práctico y aplicable.",
     en:"You're an AI automation expert. Help me design an AI assistant for my business [BUSINESS] that saves me time on [TASK: customer service, content creation, etc.]. Tell me: what tasks it can handle, how to set it up, what instructions to give it, what information it needs and how to integrate it into my routine. Practical and applicable."}},

{ cat:"agents", t:{es:"Mejora un prompt para mejores resultados", en:"Improve a prompt for better results"},
  p:{es:"Actúa como experto en prompts de IA. Toma este prompt mío y mejóralo para obtener mejores resultados: \"[PEGA TU PROMPT]\". Hazlo más claro y específico, agrégale el contexto y el rol necesarios, define mejor el formato de salida y dame la versión mejorada. Explícame qué cambiaste y por qué funciona mejor, para que aprenda a hacerlo yo.",
     en:"Act as an AI prompt expert. Take this prompt of mine and improve it to get better results: \"[PASTE YOUR PROMPT]\". Make it clearer and more specific, add the necessary context and role, better define the output format and give me the improved version. Explain what you changed and why it works better, so I learn to do it myself."}},

{ cat:"agents", t:{es:"Flujo de trabajo automatizado con IA", en:"Automated workflow with AI"},
  p:{es:"Eres experto en flujos de trabajo con IA. Tengo este proceso en mi trabajo: [DESCRIBE EL PROCESO]. Ayúdame a diseñar un flujo de trabajo que use IA para hacerlo más rápido. Dime: qué partes puede hacer la IA, qué prompts usar en cada paso, en qué orden, y cómo encadenar los resultados. Que me ahorre tiempo de forma concreta. Paso a paso.",
     en:"You're an AI workflow expert. I have this process at work: [DESCRIBE THE PROCESS]. Help me design a workflow that uses AI to do it faster. Tell me: what parts AI can do, what prompts to use at each step, in what order, and how to chain the results. So it saves me time concretely. Step by step."}},

{ cat:"agents", t:{es:"Agente para atención al cliente", en:"Customer service agent"},
  p:{es:"Actúa como experto en IA para atención al cliente. Ayúdame a crear las instrucciones para un agente que atienda a los clientes de mi negocio [NEGOCIO]. Define: cómo debe saludar y su tono, qué información dar sobre mis productos, cómo responder las dudas comunes, cómo manejar quejas, cuándo derivar a un humano y qué nunca debe hacer. Completo y listo para usar.",
     en:"Act as a customer service AI expert. Help me create the instructions for an agent that serves my business's customers [BUSINESS]. Define: how it should greet and its tone, what information to give about my products, how to answer common questions, how to handle complaints, when to escalate to a human and what it should never do. Complete and ready to use."}},

{ cat:"agents", t:{es:"Enséñame a usar mejor la IA", en:"Teach me to use AI better"},
  p:{es:"Eres profesor experto en inteligencia artificial. Quiero aprender a sacarle más provecho a la IA para [OBJETIVO: mi trabajo, mi negocio, etc.]. Enséñame: los principios básicos para escribir buenos prompts, los errores comunes que debo evitar, ejemplos de cómo pedir mejor las cosas, y trucos para obtener mejores respuestas. Explícamelo de forma simple y práctica, con ejemplos.",
     en:"You're an expert AI teacher. I want to learn to get more out of AI for [GOAL: my work, my business, etc.]. Teach me: the basic principles for writing good prompts, the common mistakes to avoid, examples of how to ask for things better, and tricks to get better responses. Explain it simply and practically, with examples."}},

{ cat:"agents", t:{es:"Genera ideas con lluvia de ideas IA", en:"Generate ideas with AI brainstorming"},
  p:{es:"Actúa como facilitador creativo experto. Ayúdame con una lluvia de ideas sobre [TEMA/PROBLEMA/PROYECTO]. Genera muchas ideas variadas y creativas, desde las más obvias hasta las más originales, organízalas por enfoque, y al final destaca las 5 con más potencial explicando por qué. Que me ayudes a desbloquear opciones que no había pensado.",
     en:"Act as an expert creative facilitator. Help me brainstorm about [TOPIC/PROBLEM/PROJECT]. Generate many varied, creative ideas, from the most obvious to the most original, organize them by approach, and at the end highlight the 5 with the most potential explaining why. Help me unlock options I hadn't thought of."}},

{ cat:"agents", t:{es:"Analiza datos o información con IA", en:"Analyze data or information with AI"},
  p:{es:"Eres analista experto. Tengo esta información/datos: [PEGA TUS DATOS]. Ayúdame a analizarla y sacar conclusiones útiles: identifica patrones o cosas importantes, qué significan para mi situación, qué oportunidades o problemas revelan, y qué acciones debería tomar. Explícame los hallazgos de forma clara y con recomendaciones concretas.",
     en:"You're an expert analyst. I have this information/data: [PASTE YOUR DATA]. Help me analyze it and draw useful conclusions: identify patterns or important things, what they mean for my situation, what opportunities or problems they reveal, and what actions I should take. Explain the findings clearly and with concrete recommendations."}},

];
