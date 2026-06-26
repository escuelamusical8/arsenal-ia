// ============================================================
//  ARSENAL IA — BIBLIOTECA DE PROMPTS (parte 8)
//  Completar a ~20: Diseño · Productividad · E-commerce · Email
//  SEO · Video · Marca personal · IA y Agentes
// ============================================================

const PROMPTS_8 = [

// ---------- DISEÑO (+6) ----------
{ cat:"design", t:{es:"Mockup de producto con IA", en:"Product mockup with AI"},
  p:{es:"Crea un prompt en inglés para generar con IA un mockup profesional de [PRODUCTO] (por ejemplo, una camiseta, una taza, un empaque, una app en un celular). Describe el producto, el contexto donde se muestra, el estilo de presentación, la iluminación y el fondo. Incluye parámetros para que se vea como una imagen de presentación profesional.",
     en:"Create an English prompt to generate a professional mockup of [PRODUCT] with AI (for example, a t-shirt, a mug, packaging, an app on a phone). Describe the product, the context where it's shown, the presentation style, the lighting and the background. Include parameters so it looks like a professional presentation image."}},

{ cat:"design", t:{es:"Ilustración para tu contenido", en:"Illustration for your content"},
  p:{es:"Crea un prompt en inglés para generar con IA una ilustración que acompañe contenido sobre [TEMA]. Describe: el estilo de ilustración (plano, moderno, minimalista, etc.), los elementos que debe incluir, la paleta de colores, y el ambiente o emoción. Que sea original, atractiva y útil para una publicación, artículo o presentación. Con parámetros recomendados.",
     en:"Create an English prompt to generate an illustration with AI to accompany content about [TOPIC]. Describe: the illustration style (flat, modern, minimalist, etc.), the elements it should include, the color palette, and the mood or emotion. It should be original, attractive and useful for a post, article or presentation. With recommended parameters."}},

{ cat:"design", t:{es:"Diseño de tarjeta de presentación", en:"Business card design"},
  p:{es:"Actúa como diseñador gráfico. Describe el diseño de una tarjeta de presentación para [NOMBRE/NEGOCIO] del sector [SECTOR]. Indica: qué información incluir y cómo jerarquizarla, la paleta de colores, el estilo de tipografía, la distribución de los elementos y qué transmitir. Que se vea profesional, moderna y acorde a mi actividad. Con una descripción clara para mandarla a diseñar.",
     en:"Act as a graphic designer. Describe the design of a business card for [NAME/BUSINESS] in the [SECTOR] sector. Indicate: what information to include and how to prioritize it, the color palette, the typography style, the element layout and what to convey. It should look professional, modern and fit my activity. With a clear description to send for design."}},

{ cat:"design", t:{es:"Escena o fondo con IA", en:"Scene or background with AI"},
  p:{es:"Crea un prompt en inglés para generar con IA un fondo o escena para [USO: publicación, banner, presentación, etc.] sobre [TEMA]. Describe: el ambiente o lugar, el estilo visual, la iluminación, los colores y el espacio para colocar texto encima si hace falta. Que sea atractivo y profesional. Incluye los parámetros recomendados para la mejor calidad.",
     en:"Create an English prompt to generate a background or scene with AI for [USE: post, banner, presentation, etc.] about [TOPIC]. Describe: the environment or place, the visual style, the lighting, the colors and space to place text on top if needed. It should be attractive and professional. Include the recommended parameters for the best quality."}},

{ cat:"design", t:{es:"Estilo visual coherente para redes", en:"Coherent visual style for social media"},
  p:{es:"Actúa como director de arte de redes sociales. Ayúdame a definir un estilo visual coherente para el feed de [NEGOCIO/MARCA] en [RED SOCIAL]. Dame: la paleta de colores, el tipo de tipografías, el estilo de fotos o gráficos, cómo mantener consistencia entre publicaciones y cómo lograr que el perfil se vea profesional y reconocible. Práctico y aplicable.",
     en:"Act as a social media art director. Help me define a coherent visual style for the feed of [BUSINESS/BRAND] on [SOCIAL NETWORK]. Give me: the color palette, the type of fonts, the style of photos or graphics, how to keep consistency between posts and how to make the profile look professional and recognizable. Practical and applicable."}},

{ cat:"design", t:{es:"Avatar o personaje de marca con IA", en:"Brand avatar or character with AI"},
  p:{es:"Crea un prompt en inglés para generar con IA un avatar o personaje que represente a [MARCA/NEGOCIO]. Describe: el tipo de personaje, su personalidad visual, el estilo (caricatura, realista, 3D, etc.), los colores acordes a mi marca, y la expresión o pose. Que sea memorable y conecte con [PÚBLICO]. Incluye parámetros recomendados.",
     en:"Create an English prompt to generate an avatar or character with AI that represents [BRAND/BUSINESS]. Describe: the character type, its visual personality, the style (cartoon, realistic, 3D, etc.), brand-appropriate colors, and the expression or pose. It should be memorable and connect with [AUDIENCE]. Include recommended parameters."}},

// ---------- PRODUCTIVIDAD (+6) ----------
{ cat:"productivity", t:{es:"Redacta un correo profesional", en:"Write a professional email"},
  p:{es:"Actúa como experto en comunicación. Ayúdame a redactar un correo profesional para [SITUACIÓN: pedir algo, responder, dar seguimiento, etc.]. El contexto es: [DESCRIBE LA SITUACIÓN]. Que sea claro, cordial, directo al punto y con el tono adecuado. Dame el asunto y el cuerpo del correo, listo para enviar. Que cause buena impresión y logre su objetivo.",
     en:"Act as a communication expert. Help me write a professional email for [SITUATION: request something, reply, follow up, etc.]. The context is: [DESCRIBE THE SITUATION]. It should be clear, cordial, to the point and with the right tone. Give me the subject and the body of the email, ready to send. It should make a good impression and achieve its goal."}},

{ cat:"productivity", t:{es:"Divide un proyecto grande en pasos", en:"Break a big project into steps"},
  p:{es:"Eres experto en gestión de proyectos. Tengo este proyecto: [DESCRIBE EL PROYECTO]. Ayúdame a dividirlo en etapas y tareas manejables: dame las fases principales, las tareas concretas de cada fase, en qué orden hacerlas, y qué entregar al final de cada etapa. Que pase de ser algo abrumador a un plan claro que pueda ir ejecutando paso a paso.",
     en:"You're a project management expert. I have this project: [DESCRIBE THE PROJECT]. Help me break it into manageable stages and tasks: give me the main phases, the concrete tasks of each phase, in what order to do them, and what to deliver at the end of each stage. So it goes from overwhelming to a clear plan I can execute step by step."}},

{ cat:"productivity", t:{es:"Plantilla de lista de tareas diaria", en:"Daily task list template"},
  p:{es:"Actúa como experto en productividad. Ayúdame a crear un sistema simple para organizar mis tareas diarias. Diseña una estructura de lista que me ayude a: priorizar lo importante, no olvidar nada, enfocarme en pocas tareas clave al día y sentir avance. Explícame cómo usarla cada mañana y cada noche. Que sea simple y sostenible, no complicada.",
     en:"Act as a productivity expert. Help me create a simple system to organize my daily tasks. Design a list structure that helps me: prioritize what's important, not forget anything, focus on a few key tasks per day and feel progress. Explain how to use it each morning and evening. It should be simple and sustainable, not complicated."}},

{ cat:"productivity", t:{es:"Aprende algo nuevo más rápido", en:"Learn something new faster"},
  p:{es:"Eres experto en aprendizaje acelerado. Quiero aprender [TEMA/HABILIDAD] de la forma más eficiente posible. Dame un plan: por dónde empezar, qué es lo esencial que debo dominar primero, cómo practicar para que se quede, qué evitar para no perder tiempo, y cómo medir mi avance. Enfócate en lo práctico que me dé resultados rápido.",
     en:"You're an accelerated learning expert. I want to learn [TOPIC/SKILL] as efficiently as possible. Give me a plan: where to start, what's the essential I should master first, how to practice so it sticks, what to avoid to not waste time, and how to measure my progress. Focus on the practical that gives me fast results."}},

{ cat:"productivity", t:{es:"Maneja mejor tu tiempo", en:"Manage your time better"},
  p:{es:"Actúa como coach de gestión del tiempo. Siento que el día no me alcanza para [LO QUE QUIERES LOGRAR]. Ayúdame a manejar mejor mi tiempo: cómo identificar en qué se me va, cómo eliminar o reducir lo que no aporta, cómo agrupar tareas, y cómo crear una rutina que me deje espacio para lo importante. Consejos concretos y realistas para mi situación.",
     en:"Act as a time management coach. I feel the day isn't enough for [WHAT YOU WANT TO ACHIEVE]. Help me manage my time better: how to identify where it goes, how to eliminate or reduce what doesn't add value, how to batch tasks, and how to create a routine that leaves room for what's important. Concrete, realistic advice for my situation."}},

{ cat:"productivity", t:{es:"Prepara una presentación o exposición", en:"Prepare a presentation or talk"},
  p:{es:"Eres experto en comunicación efectiva. Tengo que presentar sobre [TEMA] ante [PÚBLICO]. Ayúdame a prepararla: cómo estructurar la presentación (inicio, desarrollo, cierre), los puntos clave a destacar, cómo empezar para captar la atención, cómo mantener el interés y cómo cerrar con impacto. Dame también consejos para transmitir seguridad al hablar.",
     en:"You're an effective communication expert. I have to present on [TOPIC] to [AUDIENCE]. Help me prepare it: how to structure the presentation (opening, body, closing), the key points to highlight, how to start to grab attention, how to keep interest and how to close with impact. Also give me tips to convey confidence when speaking."}},

// ---------- E-COMMERCE (+6) ----------
{ cat:"ecommerce", t:{es:"Bundle o combo de productos", en:"Product bundle or combo"},
  p:{es:"Actúa como experto en e-commerce. Ayúdame a crear combos o paquetes de productos para mi tienda de [PRODUCTOS] que aumenten el valor de cada venta. Dame: qué productos combinar y por qué, cómo ponerle precio al combo para que sea atractivo pero rentable, cómo nombrarlo, y cómo presentarlo para que el cliente sienta que ahorra comprando más.",
     en:"Act as an e-commerce expert. Help me create product bundles or packages for my [PRODUCTS] store that increase the value of each sale. Give me: what products to combine and why, how to price the bundle so it's attractive but profitable, how to name it, and how to present it so the customer feels they save by buying more."}},

{ cat:"ecommerce", t:{es:"Email de confirmación de compra", en:"Purchase confirmation email"},
  p:{es:"Eres experto en experiencia de cliente. Escríbeme el correo de confirmación de compra para mi tienda de [PRODUCTOS]. Que confirme el pedido con claridad, genere tranquilidad y emoción por la compra, explique los siguientes pasos (envío, acceso, etc.), y aproveche para fortalecer la relación. Cálido y profesional. Que el cliente se sienta bien atendido.",
     en:"You're a customer experience expert. Write me the purchase confirmation email for my [PRODUCTS] store. It should confirm the order clearly, create reassurance and excitement about the purchase, explain the next steps (shipping, access, etc.), and take the chance to strengthen the relationship. Warm and professional. The customer should feel well taken care of."}},

{ cat:"ecommerce", t:{es:"Convence a un cliente indeciso", en:"Convince an undecided customer"},
  p:{es:"Actúa como vendedor experto online. Un cliente está indeciso sobre comprar [PRODUCTO] en mi tienda. Dame respuestas y argumentos para ayudarlo a decidirse sin presionar: cómo resolver sus dudas más comunes, cómo transmitir confianza y seguridad, qué garantías o beneficios destacar, y cómo facilitarle la decisión. Con mensajes listos para enviar.",
     en:"Act as an expert online seller. A customer is undecided about buying [PRODUCT] in my store. Give me responses and arguments to help them decide without pressuring: how to resolve their most common doubts, how to convey trust and security, what guarantees or benefits to highlight, and how to make the decision easier. With ready-to-send messages."}},

{ cat:"ecommerce", t:{es:"Pide una reseña a tus clientes", en:"Ask customers for a review"},
  p:{es:"Eres experto en prueba social. Ayúdame a pedirles reseñas a mis clientes que compraron [PRODUCTO]. Dame: el mensaje para solicitar la reseña de forma amable (sin sonar insistente), cuándo es el mejor momento para pedirla, cómo facilitarles dejarla, y qué incentivo podría ofrecer. Con varios ejemplos de mensajes listos para WhatsApp o email.",
     en:"You're a social proof expert. Help me ask my customers who bought [PRODUCT] for reviews. Give me: the message to request the review kindly (without sounding pushy), when is the best time to ask, how to make it easy for them to leave it, and what incentive I could offer. With several example messages ready for WhatsApp or email."}},

{ cat:"ecommerce", t:{es:"Aumenta el ticket promedio", en:"Increase average order value"},
  p:{es:"Actúa como consultor de e-commerce. Quiero que mis clientes gasten más en cada compra en mi tienda de [PRODUCTOS]. Dame estrategias concretas para aumentar el ticket promedio: productos complementarios para ofrecer, combos, envío gratis a partir de cierto monto, recomendaciones, y cómo presentarlas en el momento justo. Con ejemplos aplicados a mi tienda.",
     en:"Act as an e-commerce consultant. I want my customers to spend more on each purchase in my [PRODUCTS] store. Give me concrete strategies to increase the average order value: complementary products to offer, bundles, free shipping above a certain amount, recommendations, and how to present them at the right moment. With examples applied to my store."}},

{ cat:"ecommerce", t:{es:"Lanza un producto nuevo en tu tienda", en:"Launch a new product in your store"},
  p:{es:"Eres experto en lanzamientos de producto. Voy a lanzar [PRODUCTO NUEVO] en mi tienda. Dame un plan de lanzamiento: cómo generar expectativa antes, cómo presentarlo el día del lanzamiento, qué oferta o incentivo de apertura ofrecer, en qué canales anunciarlo, y cómo aprovechar a mis clientes actuales. Que genere ventas desde el primer día.",
     en:"You're a product launch expert. I'm going to launch [NEW PRODUCT] in my store. Give me a launch plan: how to build anticipation beforehand, how to present it on launch day, what opening offer or incentive to give, on what channels to announce it, and how to leverage my current customers. It should generate sales from day one."}},

// ---------- EMAIL MARKETING (+8) ----------
{ cat:"email", t:{es:"Correo con storytelling", en:"Email with storytelling"},
  p:{es:"Actúa como copywriter de email. Escribe un correo que use una historia para conectar y luego presentar [PRODUCTO]. Que empiece con un relato breve y atractivo (una experiencia, un caso, una anécdota) relacionado con el problema que resuelve mi producto, y que de forma natural lleve a la oferta. Con asunto incluido. Emotivo, cercano y persuasivo.",
     en:"Act as an email copywriter. Write an email that uses a story to connect and then present [PRODUCT]. It should start with a brief, engaging story (an experience, a case, an anecdote) related to the problem my product solves, and naturally lead to the offer. Subject included. Emotional, warm and persuasive."}},

{ cat:"email", t:{es:"Secuencia de bienvenida de 5 correos", en:"5-email welcome sequence"},
  p:{es:"Eres estratega de email marketing. Crea una secuencia de bienvenida de 5 correos para nuevos suscriptores de [NEGOCIO/NICHO]. Correo 1: bienvenida y valor inmediato. Correo 2: mi historia/misión. Correo 3: contenido útil. Correo 4: prueba social/casos. Correo 5: presentar mi oferta principal. Para cada uno dame el asunto y el contenido. Que construya confianza y lleve a la venta.",
     en:"You're an email marketing strategist. Create a 5-email welcome sequence for new subscribers of [BUSINESS/NICHE]. Email 1: welcome and immediate value. Email 2: my story/mission. Email 3: useful content. Email 4: social proof/cases. Email 5: present my main offer. For each give me the subject and content. It should build trust and lead to the sale."}},

{ cat:"email", t:{es:"Correo de carrito abandonado", en:"Abandoned cart email"},
  p:{es:"Actúa como experto en conversión. Escribe un correo para recuperar a un cliente que dejó [PRODUCTO] en el carrito sin comprar. Que le recuerde lo que dejó de forma amable, refuerce el beneficio o lo que se está perdiendo, resuelva la posible duda que lo frenó, y lo invite a completar la compra con un incentivo si hace falta. Con asunto. Persuasivo pero no agresivo.",
     en:"Act as a conversion expert. Write an email to recover a customer who left [PRODUCT] in the cart without buying. It should remind them what they left kindly, reinforce the benefit or what they're missing, resolve the possible doubt that stopped them, and invite them to complete the purchase with an incentive if needed. With subject. Persuasive but not aggressive."}},

{ cat:"email", t:{es:"Correo educativo que aporta valor", en:"Educational email that adds value"},
  p:{es:"Eres experto en email marketing de valor. Escribe un correo educativo para mi lista de [NICHO] que enseñe algo útil sobre [TEMA] sin vender directamente. Que aporte valor real, posicione mi conocimiento, genere confianza y, al final, conecte sutilmente con cómo mi producto puede ayudar. Con asunto. Que el lector quede agradecido y más cerca de comprarme.",
     en:"You're a value email marketing expert. Write an educational email for my [NICHE] list that teaches something useful about [TOPIC] without selling directly. It should provide real value, position my knowledge, build trust and, at the end, subtly connect with how my product can help. With subject. The reader should feel grateful and closer to buying from me."}},

{ cat:"email", t:{es:"Correo de última oportunidad", en:"Last chance email"},
  p:{es:"Actúa como experto en cierres por email. Escribe un correo de 'última oportunidad' para una oferta de [PRODUCTO] que está por terminar. Que genere urgencia real y honesta, recuerde el beneficio principal y lo que se pierde si no actúa, y motive a comprar ahora antes de que se acabe. Con asunto que invite a abrir de inmediato. Persuasivo y directo.",
     en:"Act as an email closing expert. Write a 'last chance' email for an offer of [PRODUCT] that's about to end. It should create real, honest urgency, remind of the main benefit and what's lost if they don't act, and motivate buying now before it ends. With a subject that invites opening immediately. Persuasive and direct."}},

{ cat:"email", t:{es:"Correo para presentar tu negocio", en:"Email to introduce your business"},
  p:{es:"Eres copywriter de email. Escribe un correo para presentar mi negocio [NEGOCIO] a contactos nuevos o potenciales clientes. Que explique quién soy, qué ofrezco, cómo puedo ayudarlos, qué me diferencia, y los invite a dar un siguiente paso (responder, agendar, visitar). Cercano y profesional, que despierte interés sin abrumar. Con asunto incluido.",
     en:"You're an email copywriter. Write an email to introduce my business [BUSINESS] to new contacts or potential customers. It should explain who I am, what I offer, how I can help them, what differentiates me, and invite them to take a next step (reply, schedule, visit). Warm and professional, sparking interest without overwhelming. Subject included."}},

{ cat:"email", t:{es:"Correo de agradecimiento postventa", en:"Post-purchase thank you email"},
  p:{es:"Actúa como experto en fidelización. Escribe un correo de agradecimiento para enviar después de que un cliente compra [PRODUCTO]. Que agradezca de forma genuina, refuerce que tomó una buena decisión, explique cómo aprovechar al máximo lo que compró, y abra la puerta a seguir en contacto. Que el cliente se sienta valorado y quiera volver a comprar. Con asunto.",
     en:"Act as a loyalty expert. Write a thank you email to send after a customer buys [PRODUCT]. It should thank them genuinely, reinforce that they made a good decision, explain how to make the most of what they bought, and open the door to staying in touch. The customer should feel valued and want to buy again. With subject."}},

{ cat:"email", t:{es:"Mejora un correo que no funciona", en:"Improve an email that's not working"},
  p:{es:"Eres experto en email marketing. Este correo no me está dando resultados (pocas aperturas o clics): \"[PEGA TU CORREO]\". Analízalo y mejóralo: dime qué le falla, mejora el asunto para que lo abran más, haz el contenido más persuasivo y claro, y fortalece la llamada a la acción. Muéstrame la versión mejorada y explícame los cambios.",
     en:"You're an email marketing expert. This email isn't getting me results (few opens or clicks): \"[PASTE YOUR EMAIL]\". Analyze and improve it: tell me what's failing, improve the subject so more people open it, make the content more persuasive and clear, and strengthen the call to action. Show me the improved version and explain the changes."}},

{ cat:"email", t:{es:"Línea de asunto con emojis y urgencia", en:"Subject line with emojis and urgency"},
  p:{es:"Actúa como experto en email marketing. Para un correo sobre [TEMA/OFERTA], dame 10 líneas de asunto que combinen un toque de urgencia o curiosidad con un uso inteligente (no excesivo) de emojis para destacar en la bandeja de entrada. Que inviten a abrir sin parecer spam. Adaptadas a [PÚBLICO]. Marca las 3 que mejor funcionarían y explica por qué.",
     en:"Act as an email marketing expert. For an email about [TOPIC/OFFER], give me 10 subject lines that combine a touch of urgency or curiosity with smart (not excessive) emoji use to stand out in the inbox. They should invite opening without looking like spam. Adapted to [AUDIENCE]. Mark the 3 that would work best and explain why."}},

// ---------- SEO Y BLOGS (+8) ----------
{ cat:"seo", t:{es:"Artículo completo optimizado", en:"Complete optimized article"},
  p:{es:"Actúa como redactor SEO experto. Escribe un artículo de blog completo y optimizado sobre [TEMA] para la palabra clave [KEYWORD], dirigido a [PÚBLICO]. Incluye: título atractivo con la keyword, introducción que enganche, subtítulos bien organizados, contenido de valor real, la palabra clave de forma natural, y una conclusión con llamada a la acción. Mínimo [NÚMERO] palabras.",
     en:"Act as an expert SEO writer. Write a complete, optimized blog article about [TOPIC] for the keyword [KEYWORD], aimed at [AUDIENCE]. Include: attractive title with the keyword, an engaging intro, well-organized subheadings, real valuable content, the keyword naturally, and a conclusion with a call to action. Minimum [NUMBER] words."}},

{ cat:"seo", t:{es:"Investiga palabras clave de cola larga", en:"Research long-tail keywords"},
  p:{es:"Eres experto en SEO. Para el tema [TEMA/NICHO], dame 20 palabras clave de cola larga (frases específicas de 3+ palabras) que la gente busca y que tienen menos competencia. Organízalas por subtema o intención, y señala cuáles serían más fáciles de posicionar para un sitio nuevo. Adaptadas a búsquedas reales del mercado hispano. Útiles para crear contenido.",
     en:"You're an SEO expert. For the topic [TOPIC/NICHE], give me 20 long-tail keywords (specific 3+ word phrases) people search for that have less competition. Organize them by subtopic or intent, and indicate which would be easier to rank for a new site. Adapted to real searches in the relevant market. Useful for creating content."}},

{ cat:"seo", t:{es:"Mejora el posicionamiento de una página", en:"Improve a page's ranking"},
  p:{es:"Actúa como consultor SEO. Tengo una página sobre [TEMA] que no posiciona bien en Google para [KEYWORD]. Dame un diagnóstico de qué podría estar fallando y una lista de acciones concretas para mejorar su posición: mejoras en el contenido, estructura, palabras clave, y qué le falta frente a la competencia. Prioriza las acciones por impacto. Práctico y aplicable.",
     en:"Act as an SEO consultant. I have a page about [TOPIC] that doesn't rank well on Google for [KEYWORD]. Give me a diagnosis of what might be failing and a list of concrete actions to improve its position: content improvements, structure, keywords, and what it's missing versus the competition. Prioritize the actions by impact. Practical and applicable."}},

{ cat:"seo", t:{es:"Contenido para responder a Google", en:"Content to answer Google"},
  p:{es:"Eres experto en SEO. Para la búsqueda [PALABRA CLAVE/PREGUNTA], crea contenido optimizado que responda exactamente lo que la gente busca y tenga potencial de aparecer en los primeros resultados o fragmentos destacados. Dame: una respuesta directa y clara al inicio, el desarrollo completo del tema, y las preguntas relacionadas que también debería responder. Estructurado para SEO.",
     en:"You're an SEO expert. For the search [KEYWORD/QUESTION], create optimized content that answers exactly what people are looking for and has potential to appear in the top results or featured snippets. Give me: a direct, clear answer at the start, the complete development of the topic, and the related questions I should also answer. Structured for SEO."}},

{ cat:"seo", t:{es:"Plan de contenidos SEO mensual", en:"Monthly SEO content plan"},
  p:{es:"Actúa como estratega de SEO. Crea un plan de contenidos SEO para un mes para un blog de [TEMA/NICHO]. Dame 8 artículos a publicar, cada uno con: el título optimizado, la palabra clave objetivo, la intención de búsqueda y de qué tratará. Que estén conectados temáticamente para construir autoridad, e incluye una mezcla de temas para atraer y temas para vender.",
     en:"Act as an SEO strategist. Create a one-month SEO content plan for a blog about [TOPIC/NICHE]. Give me 8 articles to publish, each with: the optimized title, the target keyword, the search intent and what it'll be about. They should be thematically connected to build authority, and include a mix of topics to attract and topics to sell."}},

{ cat:"seo", t:{es:"Reescribe un título para más clics", en:"Rewrite a title for more clicks"},
  p:{es:"Eres experto en SEO y titulares. Este es mi título actual y no genera muchos clics: \"[PEGA TU TÍTULO]\". Reescríbelo en 8 versiones que mantengan o mejoren el SEO (incluyendo la palabra clave [KEYWORD]) pero que sean mucho más atractivas para hacer clic. Varía los enfoques y marca las 3 mejores explicando por qué generarían más clics.",
     en:"You're an SEO and headline expert. This is my current title and it doesn't get many clicks: \"[PASTE YOUR TITLE]\". Rewrite it in 8 versions that keep or improve the SEO (including the keyword [KEYWORD]) but are much more attractive to click. Vary the approaches and mark the 3 best explaining why they'd get more clicks."}},

{ cat:"seo", t:{es:"Estructura de página de categoría", en:"Category page structure"},
  p:{es:"Actúa como experto en SEO para e-commerce. Ayúdame a estructurar y optimizar una página de categoría de [CATEGORÍA DE PRODUCTOS] para que posicione en Google. Dame: el título y meta descripción, qué texto incluir y dónde, cómo organizar los productos, las palabras clave a usar, y qué elementos ayudan a posicionar este tipo de página. Práctico y aplicable.",
     en:"Act as an e-commerce SEO expert. Help me structure and optimize a category page for [PRODUCT CATEGORY] so it ranks on Google. Give me: the title and meta description, what text to include and where, how to organize the products, the keywords to use, and what elements help this type of page rank. Practical and applicable."}},

{ cat:"seo", t:{es:"Encuentra temas que la gente busca", en:"Find topics people search for"},
  p:{es:"Eres experto en SEO e investigación de contenido. Para mi negocio de [SECTOR/TEMA], ayúdame a descubrir qué temas y preguntas busca mi público en internet y que yo podría responder con contenido. Dame una lista de temas con potencial de tráfico, organizados por etapa del cliente (los que apenas exploran, los que comparan, los que están por comprar). Útiles y accionables.",
     en:"You're an SEO and content research expert. For my [SECTOR/TOPIC] business, help me discover what topics and questions my audience searches online that I could answer with content. Give me a list of topics with traffic potential, organized by customer stage (those just exploring, those comparing, those about to buy). Useful and actionable."}},

// ---------- VIDEO Y GUIONES (+8) ----------
{ cat:"video", t:{es:"Serie de videos cortos", en:"Short video series"},
  p:{es:"Actúa como estratega de contenido en video. Diséñame una serie de videos cortos (Reels/TikToks) sobre [TEMA] para [PÚBLICO]. Dame: el concepto de la serie, 7 ideas de episodios con su gancho y de qué trata cada uno, y por qué la gente querría ver todos. Que estén conectados para que la audiencia siga mi cuenta esperando el siguiente. Listos para grabar.",
     en:"Act as a video content strategist. Design me a short video series (Reels/TikToks) about [TOPIC] for [AUDIENCE]. Give me: the series concept, 7 episode ideas with their hook and what each is about, and why people would want to watch them all. They should be connected so the audience follows my account waiting for the next. Ready to film."}},

{ cat:"video", t:{es:"Guion de video de ventas (VSL)", en:"Video sales letter script (VSL)"},
  p:{es:"Eres experto en video de ventas. Escribe el guion de un video de ventas (VSL) para [PRODUCTO]. Estructura: gancho que capte la atención, identificación del problema del cliente, agitación del problema, presentación de mi producto como solución, beneficios y prueba, la oferta, manejo de objeciones, garantía y llamada a la acción. Persuasivo de principio a fin. Indica el tono.",
     en:"You're a video sales expert. Write the script of a video sales letter (VSL) for [PRODUCT]. Structure: attention-grabbing hook, identification of the customer's problem, agitation of the problem, presentation of my product as the solution, benefits and proof, the offer, objection handling, guarantee and call to action. Persuasive from start to finish. Indicate the tone."}},

{ cat:"video", t:{es:"Guion de video tutorial", en:"Tutorial video script"},
  p:{es:"Actúa como creador de tutoriales. Escribe el guion de un video tutorial que enseñe a [HACER ALGO] paso a paso. Incluye: una intro que diga qué van a aprender y por qué les sirve, los pasos explicados de forma clara y ordenada, consejos o errores a evitar en cada paso, y un cierre. Indica qué decir y qué mostrar en pantalla en cada momento. Fácil de seguir.",
     en:"Act as a tutorial creator. Write the script of a tutorial video that teaches how to [DO SOMETHING] step by step. Include: an intro saying what they'll learn and why it's useful, the steps explained clearly and in order, tips or mistakes to avoid at each step, and a closing. Indicate what to say and what to show on screen at each moment. Easy to follow."}},

{ cat:"video", t:{es:"Ideas de Reels que se vuelven virales", en:"Reel ideas that go viral"},
  p:{es:"Eres experto en contenido viral. Dame 12 ideas de Reels para [NICHO] con alto potencial de hacerse virales. Para cada una: el concepto, el gancho de los primeros segundos, el formato y por qué la gente lo compartiría. Enfócate en ideas que generen emoción, identificación o sorpresa. Ordénalas por potencial viral y marca las 3 que probaría primero.",
     en:"You're a viral content expert. Give me 12 Reel ideas for [NICHE] with high potential to go viral. For each: the concept, the first-seconds hook, the format and why people would share it. Focus on ideas that generate emotion, relatability or surprise. Sort them by viral potential and mark the 3 I'd try first."}},

{ cat:"video", t:{es:"Guion para presentar tu producto en video", en:"Script to present your product on video"},
  p:{es:"Actúa como guionista de marketing. Escribe el guion de un video donde presento [PRODUCTO] mostrando sus beneficios. Que tenga: una apertura que enganche, la presentación del producto enfocada en cómo ayuda al cliente (no solo características), una demostración de su valor, y un cierre que invite a comprar. Indica qué mostrar en cada parte. Natural y convincente, que genere ganas de tenerlo.",
     en:"Act as a marketing scriptwriter. Write the script of a video where I present [PRODUCT] showing its benefits. It should have: an engaging opening, the product presentation focused on how it helps the customer (not just features), a demonstration of its value, and a closing that invites buying. Indicate what to show in each part. Natural and convincing, generating the desire to have it."}},

{ cat:"video", t:{es:"Storyboard para un video", en:"Storyboard for a video"},
  p:{es:"Eres director de video. Ayúdame a crear el storyboard (guion visual) de un video sobre [TEMA] de [DURACIÓN]. Divídelo escena por escena, y para cada una indica: qué se ve en pantalla, qué se dice o qué texto aparece, y cuánto dura aproximadamente. Que tenga un buen ritmo y mantenga la atención de principio a fin. Listo para grabar o editar siguiendo el plan.",
     en:"You're a video director. Help me create the storyboard (visual script) of a video about [TOPIC] of [DURATION]. Break it scene by scene, and for each indicate: what's on screen, what's said or what text appears, and approximately how long it lasts. It should have good pacing and keep attention from start to finish. Ready to film or edit following the plan."}},

{ cat:"video", t:{es:"Guion para historia de Instagram en video", en:"Script for video Instagram story"},
  p:{es:"Actúa como creador de contenido. Escribe el guion para una serie de historias en video de Instagram sobre [TEMA/PRODUCTO] con el objetivo de [VENDER/INFORMAR/CONECTAR]. Divídelo en varias historias cortas (de 15 segundos cada una), indicando qué decir y mostrar en cada una, y cómo encadenarlas para que la gente las vea todas. Cercano y dinámico.",
     en:"Act as a content creator. Write the script for a series of video Instagram stories about [TOPIC/PRODUCT] with the goal of [SELL/INFORM/CONNECT]. Break it into several short stories (15 seconds each), indicating what to say and show in each, and how to chain them so people watch them all. Warm and dynamic."}},

{ cat:"video", t:{es:"Convierte un texto en guion de video", en:"Turn a text into a video script"},
  p:{es:"Eres experto en adaptar contenido a video. Toma este texto o tema y conviértelo en un guion de video atractivo: \"[PEGA TU TEXTO O TEMA]\". Adáptalo a un formato dinámico para [PLATAFORMA], con un buen gancho al inicio, el contenido resumido en lo esencial y atractivo, y un cierre con llamada a la acción. Indica qué mostrar mientras se narra. Que funcione mejor en video que en texto.",
     en:"You're an expert at adapting content to video. Take this text or topic and turn it into an engaging video script: \"[PASTE YOUR TEXT OR TOPIC]\". Adapt it to a dynamic format for [PLATFORM], with a good hook at the start, the content summarized to the essential and engaging, and a closing with a call to action. Indicate what to show while narrating. It should work better as video than as text."}},

// ---------- MARCA PERSONAL (+8) ----------
{ cat:"personal", t:{es:"Contenido para mostrar autoridad", en:"Content to show authority"},
  p:{es:"Actúa como estratega de marca personal. Dame 10 ideas de contenido para posicionarme como autoridad en [TEMA/ÁREA] ante [PÚBLICO]. Para cada idea: el tema, el formato ideal y qué demuestra de mi experiencia. Que combine compartir conocimiento, casos reales, opiniones de valor y lecciones aprendidas. Que generen credibilidad y confianza con mi audiencia.",
     en:"Act as a personal brand strategist. Give me 10 content ideas to position myself as an authority in [TOPIC/AREA] for [AUDIENCE]. For each idea: the topic, the ideal format and what it demonstrates of my experience. It should combine sharing knowledge, real cases, valuable opinions and lessons learned. They should build credibility and trust with my audience."}},

{ cat:"personal", t:{es:"Perfil de LinkedIn optimizado", en:"Optimized LinkedIn profile"},
  p:{es:"Eres experto en LinkedIn. Ayúdame a optimizar mi perfil para que me posicione y atraiga oportunidades en [ÁREA/SECTOR]. Dame: un titular profesional potente, un texto 'Acerca de' que cuente mi propuesta de valor y conecte, cómo describir mi experiencia enfocándola en logros, y qué palabras clave incluir para que me encuentren. Profesional y atractivo.",
     en:"You're a LinkedIn expert. Help me optimize my profile to position myself and attract opportunities in [AREA/SECTOR]. Give me: a powerful professional headline, an 'About' text that tells my value proposition and connects, how to describe my experience focusing on achievements, and what keywords to include so I'm found. Professional and attractive."}},

{ cat:"personal", t:{es:"Frase o lema personal", en:"Personal motto or tagline"},
  p:{es:"Actúa como experto en marca personal. Ayúdame a crear una frase o lema personal que resuma quién soy y qué aporto en [ÁREA]. Dame 10 opciones cortas y memorables que transmitan mi esencia, mi valor o mi enfoque, y que pueda usar en mi perfil, presentaciones o contenido. Que me hagan reconocible. Marca las 3 que mejor me representan.",
     en:"Act as a personal branding expert. Help me create a personal motto or tagline that sums up who I am and what I bring in [AREA]. Give me 10 short, memorable options that convey my essence, my value or my approach, and that I can use in my profile, presentations or content. They should make me recognizable. Mark the 3 that best represent me."}},

{ cat:"personal", t:{es:"Plan para crecer tu marca personal", en:"Plan to grow your personal brand"},
  p:{es:"Eres estratega de marca personal. Quiero hacer crecer mi presencia y autoridad en [TEMA/ÁREA] en los próximos meses. Dame un plan: en qué plataformas enfocarme, qué tipo de contenido publicar, con qué frecuencia, cómo conectar con otras personas de mi sector, y cómo medir mi crecimiento. Realista y sostenible para alguien que también tiene otras ocupaciones.",
     en:"You're a personal brand strategist. I want to grow my presence and authority in [TOPIC/AREA] over the next months. Give me a plan: what platforms to focus on, what type of content to publish, how often, how to connect with others in my sector, and how to measure my growth. Realistic and sustainable for someone who also has other occupations."}},

{ cat:"personal", t:{es:"Responde a un comentario o mensaje difícil", en:"Respond to a difficult comment or message"},
  p:{es:"Actúa como experto en comunicación. Recibí este comentario o mensaje complicado relacionado con mi marca o trabajo: \"[PEGA EL MENSAJE]\". Ayúdame a responder de forma profesional y con altura: que mantenga mi imagen, responda con respeto y firmeza, y resuelva o cierre la situación de la mejor manera. Dame 2 versiones según el tono que quiera usar.",
     en:"Act as a communication expert. I received this difficult comment or message related to my brand or work: \"[PASTE THE MESSAGE]\". Help me respond professionally and with class: keeping my image, responding with respect and firmness, and resolving or closing the situation in the best way. Give me 2 versions depending on the tone I want to use."}},

{ cat:"personal", t:{es:"Comparte un logro sin presumir", en:"Share an achievement without bragging"},
  p:{es:"Eres experto en marca personal. Logré [LOGRO/HITO] y quiero compartirlo en redes de forma que inspire y conecte, sin sonar arrogante. Ayúdame a escribir una publicación que cuente el logro con humildad, comparta el aprendizaje o el camino detrás, agradezca a quien corresponda, y aporte valor a quien lo lea. Que genere admiración genuina y cercanía, no rechazo.",
     en:"You're a personal branding expert. I achieved [ACHIEVEMENT/MILESTONE] and want to share it on social media in a way that inspires and connects, without sounding arrogant. Help me write a post that tells the achievement with humility, shares the lesson or the journey behind it, thanks whoever deserves it, and adds value to whoever reads it. It should generate genuine admiration and warmth, not rejection."}},

{ cat:"personal", t:{es:"Tu propuesta de valor profesional", en:"Your professional value proposition"},
  p:{es:"Actúa como experto en marca personal. Ayúdame a definir mi propuesta de valor profesional. Me dedico a [ACTIVIDAD], mi experiencia es [EXPERIENCIA] y ayudo a [PÚBLICO]. Resume en una declaración clara: qué hago, para quién, qué problema resuelvo y qué me hace diferente. Dame 3 versiones que pueda usar para presentarme con seguridad. Clara y convincente.",
     en:"Act as a personal branding expert. Help me define my professional value proposition. I work in [ACTIVITY], my experience is [EXPERIENCE] and I help [AUDIENCE]. Summarize in a clear statement: what I do, for whom, what problem I solve and what makes me different. Give me 3 versions I can use to introduce myself with confidence. Clear and convincing."}},

{ cat:"personal", t:{es:"Ideas para tu primer contenido", en:"Ideas for your first content"},
  p:{es:"Eres coach de marca personal. Quiero empezar a crear contenido en [RED SOCIAL] sobre [TEMA] pero no sé por dónde empezar y me da algo de miedo. Dame 10 ideas de primeras publicaciones fáciles de hacer, que rompan el hielo, muestren quién soy y aporten valor sin necesidad de ser perfecto. Que me ayuden a arrancar con confianza. Concretas y accionables.",
     en:"You're a personal brand coach. I want to start creating content on [SOCIAL NETWORK] about [TOPIC] but don't know where to start and I'm a bit afraid. Give me 10 easy first-post ideas that break the ice, show who I am and add value without needing to be perfect. They should help me start with confidence. Concrete and actionable."}},

// ---------- IA Y AGENTES (+7) ----------
{ cat:"agents", t:{es:"Prompt maestro para una tarea repetida", en:"Master prompt for a repeated task"},
  p:{es:"Actúa como experto en prompts. Hago seguido esta tarea con IA: [DESCRIBE LA TAREA]. Ayúdame a crear un 'prompt maestro' reutilizable que me dé buenos resultados siempre. Inclúyele el rol, el contexto, las instrucciones claras paso a paso, el formato de salida que quiero, y espacios para que yo solo cambie los datos variables. Listo para guardar y reusar cada vez.",
     en:"Act as a prompt expert. I often do this task with AI: [DESCRIBE THE TASK]. Help me create a reusable 'master prompt' that gives me good results every time. Include the role, the context, clear step-by-step instructions, the output format I want, and slots where I only change the variable data. Ready to save and reuse each time."}},

{ cat:"agents", t:{es:"Agente para crear contenido de redes", en:"Agent to create social content"},
  p:{es:"Eres experto en IA para creadores. Ayúdame a configurar un agente o asistente de IA que me ayude a crear contenido para redes sociales de [NICHO]. Dame las instrucciones completas: qué rol darle, mi estilo y tono, qué tipo de contenido genera, qué información necesita de mí cada vez, y cómo pedirle ideas, captions o guiones. Listo para configurar y usar.",
     en:"You're an AI-for-creators expert. Help me set up an AI agent or assistant that helps me create social media content for [NICHE]. Give me the complete instructions: what role to give it, my style and tone, what type of content it generates, what information it needs from me each time, and how to ask it for ideas, captions or scripts. Ready to set up and use."}},

{ cat:"agents", t:{es:"Resuelve un problema con ayuda de la IA", en:"Solve a problem with AI's help"},
  p:{es:"Actúa como consultor experto. Tengo este problema o reto: [DESCRIBE EL PROBLEMA]. Ayúdame a resolverlo pensándolo paso a paso: hazme las preguntas necesarias para entenderlo bien, analiza las posibles causas, propón varias soluciones con sus pros y contras, y recomiéndame el mejor camino a seguir. Que me ayudes a salir del estancamiento con claridad.",
     en:"Act as an expert consultant. I have this problem or challenge: [DESCRIBE THE PROBLEM]. Help me solve it by thinking step by step: ask me the necessary questions to understand it well, analyze the possible causes, propose several solutions with their pros and cons, and recommend the best path forward. Help me get unstuck with clarity."}},

{ cat:"agents", t:{es:"Crea una serie de prompts encadenados", en:"Create a chain of prompts"},
  p:{es:"Eres experto en flujos con IA. Quiero lograr [OBJETIVO/RESULTADO] usando la IA, pero es un proceso de varios pasos. Diséñame una serie de prompts encadenados: el primero para [paso 1], cuyo resultado alimenta al segundo, y así sucesivamente hasta lograr el resultado final. Dame cada prompt listo y explícame cómo usar la salida de uno como entrada del siguiente.",
     en:"You're an AI workflow expert. I want to achieve [GOAL/RESULT] using AI, but it's a multi-step process. Design me a chain of prompts: the first for [step 1], whose result feeds the second, and so on until achieving the final result. Give me each prompt ready and explain how to use the output of one as the input of the next."}},

{ cat:"agents", t:{es:"Asistente personal de IA", en:"Personal AI assistant"},
  p:{es:"Actúa como experto en productividad con IA. Ayúdame a configurar un asistente de IA personal que me ayude con mi día a día en [ÁREA: trabajo, negocio, estudio]. Define: en qué tareas me puede ayudar, cómo darle contexto sobre mí y mis objetivos, qué instrucciones darle para que sea útil, y ejemplos de cómo pedirle ayuda. Que se sienta como tener un asistente que me conoce.",
     en:"Act as an AI productivity expert. Help me set up a personal AI assistant that helps me with my daily life in [AREA: work, business, study]. Define: what tasks it can help me with, how to give it context about me and my goals, what instructions to give it to be useful, and examples of how to ask it for help. It should feel like having an assistant that knows me."}},

{ cat:"agents", t:{es:"Evalúa una decisión con la IA", en:"Evaluate a decision with AI"},
  p:{es:"Eres asesor experto en toma de decisiones. Estoy evaluando [DECISIÓN/OPCIÓN] y quiero pensarla bien. Ayúdame a analizarla a fondo: hazme preguntas clave para considerar todos los ángulos, dame los pros y contras objetivos, los riesgos y oportunidades, y un marco para decidir según lo que más me conviene. No decidas por mí, ayúdame a ver con claridad para elegir mejor.",
     en:"You're an expert decision-making advisor. I'm evaluating [DECISION/OPTION] and want to think it through well. Help me analyze it deeply: ask me key questions to consider all angles, give me the objective pros and cons, the risks and opportunities, and a framework to decide based on what suits me best. Don't decide for me, help me see clearly to choose better."}},

{ cat:"agents", t:{es:"Convierte la IA en tu tutor personal", en:"Turn AI into your personal tutor"},
  p:{es:"Actúa como tutor personal experto. Quiero que me enseñes [TEMA/HABILIDAD] desde cero, adaptándote a mi ritmo. Empieza evaluando qué sé, luego enséñame paso a paso de lo básico a lo avanzado, con explicaciones simples y ejemplos, y hazme preguntas o ejercicios para comprobar que entiendo antes de seguir. Acompáñame como un profesor paciente hasta que domine el tema.",
     en:"Act as an expert personal tutor. I want you to teach me [TOPIC/SKILL] from scratch, adapting to my pace. Start by assessing what I know, then teach me step by step from basic to advanced, with simple explanations and examples, and ask me questions or exercises to check I understand before continuing. Accompany me like a patient teacher until I master the topic."}},

];
