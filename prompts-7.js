// ============================================================
//  ARSENAL IA — BIBLIOTECA DE PROMPTS (parte 7)
//  Completar a 20: Marketing · Ventas · Redes · Copywriting · Negocios
// ============================================================

const PROMPTS_7 = [

// ---------- MARKETING (+5) ----------
{ cat:"marketing", t:{es:"Gancho para detener el scroll", en:"Scroll-stopping hook"},
  p:{es:"Actúa como experto en publicidad digital. Dame 12 ganchos (primeras líneas) para anuncios de [PRODUCTO] dirigido a [PÚBLICO] que detengan el scroll en redes sociales. Varía los enfoques: pregunta, dato impactante, error común, promesa, curiosidad. Que en una sola línea logren que la persona deje de deslizar y quiera leer más. Marca los 3 mejores.",
     en:"Act as a digital advertising expert. Give me 12 hooks (opening lines) for ads of [PRODUCT] aimed at [AUDIENCE] that stop the scroll on social media. Vary the approaches: question, shocking fact, common mistake, promise, curiosity. In a single line they should make the person stop scrolling and want to read more. Mark the top 3."}},

{ cat:"marketing", t:{es:"Campaña de marketing de referidos", en:"Referral marketing campaign"},
  p:{es:"Eres experto en crecimiento. Diseña una campaña de referidos para [NEGOCIO/PRODUCTO] donde mis clientes me traigan más clientes. Define: qué incentivo ofrecer a quien refiere y a quien es referido, cómo explicar el programa de forma simple, cómo facilitar que compartan y cómo hacer seguimiento. Que sea atractivo y fácil de poner en marcha.",
     en:"You're a growth expert. Design a referral campaign for [BUSINESS/PRODUCT] where my customers bring me more customers. Define: what incentive to offer the referrer and the referred, how to explain the program simply, how to make sharing easy and how to track it. It should be attractive and easy to launch."}},

{ cat:"marketing", t:{es:"Posicionamiento de marca", en:"Brand positioning"},
  p:{es:"Actúa como estratega de marca. Ayúdame a definir el posicionamiento de [MARCA] en el mercado de [SECTOR]. Responde: qué lugar quiero ocupar en la mente del cliente, contra quién compito, qué me hace única, a qué tipo de cliente le hablo y qué promesa central comunico. Resúmelo en una declaración de posicionamiento clara y memorable.",
     en:"Act as a brand strategist. Help me define the positioning of [BRAND] in the [SECTOR] market. Answer: what place I want to occupy in the customer's mind, who I compete against, what makes me unique, what type of customer I speak to and what central promise I communicate. Sum it up in a clear, memorable positioning statement."}},

{ cat:"marketing", t:{es:"Aprovecha una fecha especial", en:"Leverage a special date"},
  p:{es:"Eres experto en marketing estacional. Se acerca [FECHA: navidad, día de la madre, black friday, etc.] y quiero aprovecharla para vender [PRODUCTO]. Dame una campaña: el ángulo o mensaje acorde a la fecha, una oferta especial, ideas de contenido para anunciarla, y cómo crear urgencia. Que conecte con el espíritu de la fecha y genere ventas.",
     en:"You're a seasonal marketing expert. [DATE: Christmas, Mother's Day, Black Friday, etc.] is coming and I want to leverage it to sell [PRODUCT]. Give me a campaign: the angle or message fitting the date, a special offer, content ideas to announce it, and how to create urgency. It should connect with the spirit of the date and generate sales."}},

{ cat:"marketing", t:{es:"Mensaje de valor en 3 versiones", en:"Value message in 3 versions"},
  p:{es:"Actúa como copywriter de marketing. Para [PRODUCTO/SERVICIO], escríbeme el mensaje de valor principal en 3 versiones: una corta (para un anuncio), una media (para una publicación) y una larga (para una página). Que todas comuniquen el mismo beneficio central de forma clara y atractiva, adaptadas a cada formato. Listas para usar.",
     en:"Act as a marketing copywriter. For [PRODUCT/SERVICE], write me the main value message in 3 versions: a short one (for an ad), a medium one (for a post) and a long one (for a page). All should communicate the same central benefit clearly and attractively, adapted to each format. Ready to use."}},

// ---------- VENTAS (+6) ----------
{ cat:"sales", t:{es:"Maneja la objeción del precio", en:"Handle the price objection"},
  p:{es:"Actúa como cerrador experto. El cliente dice que mi producto [PRODUCTO] está caro. Dame 6 formas de responder que: enfoquen la conversación en el valor y no en el precio, comparen con el costo de no resolver su problema, descompongan el precio para que se vea pequeño, y refuercen el retorno que obtiene. Respuestas naturales, sin sonar a vendedor agresivo.",
     en:"Act as an expert closer. The customer says my product [PRODUCT] is expensive. Give me 6 ways to respond that: shift the conversation to value not price, compare with the cost of not solving their problem, break down the price so it seems small, and reinforce the return they get. Natural responses, without sounding like an aggressive salesperson."}},

{ cat:"sales", t:{es:"Preguntas para descubrir la necesidad", en:"Questions to uncover the need"},
  p:{es:"Eres experto en venta consultiva. Dame una lista de preguntas inteligentes para hacerle a un cliente potencial de [PRODUCTO/SERVICIO] y descubrir su verdadera necesidad, sus dolores y qué lo motivaría a comprar. Ordénalas de lo general a lo específico, de forma que la conversación fluya natural y el cliente se sienta entendido, no interrogado.",
     en:"You're a consultative selling expert. Give me a list of smart questions to ask a potential customer for [PRODUCT/SERVICE] to uncover their real need, their pains and what would motivate them to buy. Order them from general to specific, so the conversation flows naturally and the customer feels understood, not interrogated."}},

{ cat:"sales", t:{es:"Seguimiento sin ser molesto", en:"Follow up without being annoying"},
  p:{es:"Actúa como experto en seguimiento de ventas. Un cliente mostró interés en [PRODUCTO] pero no respondió más. Dame una secuencia de 4 mensajes de seguimiento espaciados en el tiempo que retomen la conversación sin presionar ni parecer desesperado. Cada uno con un enfoque distinto: recordar, aportar valor, generar curiosidad, oferta. Listos para WhatsApp.",
     en:"Act as a sales follow-up expert. A customer showed interest in [PRODUCT] but stopped responding. Give me a sequence of 4 follow-up messages spaced over time that resume the conversation without pressuring or seeming desperate. Each with a different angle: remind, add value, spark curiosity, offer. Ready for WhatsApp."}},

{ cat:"sales", t:{es:"Presenta tu producto en 3 frases", en:"Pitch your product in 3 sentences"},
  p:{es:"Eres experto en ventas. Ayúdame a presentar [PRODUCTO] de forma irresistible en solo 3 frases: una que capte la atención con el beneficio principal, una que explique qué es y para quién, y una que invite a la acción. Dame 3 versiones distintas. Que sirvan para responder rápido cuando alguien pregunta '¿qué vendes?'. Claras y persuasivas.",
     en:"You're a sales expert. Help me pitch [PRODUCT] irresistibly in just 3 sentences: one that grabs attention with the main benefit, one that explains what it is and for whom, and one that invites action. Give me 3 different versions. They should work to respond quickly when someone asks 'what do you sell?'. Clear and persuasive."}},

{ cat:"sales", t:{es:"Convierte una consulta en venta", en:"Turn an inquiry into a sale"},
  p:{es:"Actúa como cerrador por chat. Un cliente me escribió preguntando por [PRODUCTO]. Dame un guion paso a paso para llevar esa consulta hasta la venta: cómo responder al saludo, qué preguntar para entender su necesidad, cómo presentar el producto según lo que necesita, cómo manejar dudas y cómo cerrar. Con frases de ejemplo para cada paso.",
     en:"Act as a chat closer. A customer messaged me asking about [PRODUCT]. Give me a step-by-step script to take that inquiry to the sale: how to respond to the greeting, what to ask to understand their need, how to present the product based on what they need, how to handle doubts and how to close. With example phrases for each step."}},

{ cat:"sales", t:{es:"Recupera una venta perdida", en:"Recover a lost sale"},
  p:{es:"Eres experto en ventas. Un cliente decidió no comprar [PRODUCTO] o se fue con la competencia. Dame estrategias y mensajes para intentar recuperarlo de forma elegante: cómo reabrir la conversación, qué ofrecer para que reconsidere, cómo entender qué lo frenó y cómo dejar la puerta abierta sin rogar. Con ejemplos de mensajes respetuosos.",
     en:"You're a sales expert. A customer decided not to buy [PRODUCT] or went with the competition. Give me strategies and messages to try to win them back elegantly: how to reopen the conversation, what to offer for them to reconsider, how to understand what stopped them and how to leave the door open without begging. With examples of respectful messages."}},

// ---------- REDES SOCIALES (+5) ----------
{ cat:"social", t:{es:"Caption que genera comentarios", en:"Caption that drives comments"},
  p:{es:"Actúa como experto en engagement. Escribe 8 captions para publicaciones de [NICHO] que inviten a la gente a comentar e interactuar. Que terminen con una pregunta o invitación que genere conversación. Varía los temas y enfoques. Que aumenten el alcance al provocar respuestas. Adaptados a un tono cercano para [PÚBLICO]. Marca los 3 que más interacción generarían.",
     en:"Act as an engagement expert. Write 8 captions for [NICHE] posts that invite people to comment and interact. They should end with a question or invitation that sparks conversation. Vary the topics and approaches. They should increase reach by prompting replies. Adapted to a warm tone for [AUDIENCE]. Mark the 3 that would generate the most interaction."}},

{ cat:"social", t:{es:"Carrusel educativo para Instagram", en:"Educational Instagram carousel"},
  p:{es:"Eres creador de contenido. Crea el contenido de un carrusel de Instagram de [NÚMERO] láminas sobre [TEMA] para [PÚBLICO]. Dame: el texto de la portada (que enganche), el contenido de cada lámina (un punto por lámina), y la última con llamada a la acción. Que eduque, aporte valor y haga que guarden y compartan la publicación.",
     en:"You're a content creator. Create the content of an Instagram carousel of [NUMBER] slides about [TOPIC] for [AUDIENCE]. Give me: the cover text (that hooks), the content of each slide (one point per slide), and the last one with a call to action. It should educate, provide value and make people save and share the post."}},

{ cat:"social", t:{es:"Calendario de publicaciones semanal", en:"Weekly posting calendar"},
  p:{es:"Actúa como community manager. Crea un calendario de publicaciones para una semana para [NEGOCIO/NICHO] en [RED SOCIAL]. Para cada día indica: el tipo de contenido, el tema, el formato (reel, carrusel, foto, historia) y el objetivo (educar, vender, entretener, conectar). Que mantenga la cuenta variada, activa y estratégica. En formato de tabla.",
     en:"Act as a community manager. Create a one-week posting calendar for [BUSINESS/NICHE] on [SOCIAL NETWORK]. For each day indicate: the content type, the topic, the format (reel, carousel, photo, story) and the goal (educate, sell, entertain, connect). It should keep the account varied, active and strategic. In table format."}},

{ cat:"social", t:{es:"Bio de perfil que atrae seguidores", en:"Profile bio that attracts followers"},
  p:{es:"Eres experto en perfiles de redes. Escríbeme 5 versiones de biografía para mi perfil de [RED SOCIAL] de [NICHO/NEGOCIO]. Que dejen claro qué ofrezco, a quién ayudo, por qué seguirme, e incluyan una llamada a la acción (visitar enlace, escribir, etc.). Adaptadas al límite de caracteres y con un toque que invite a seguir. Marca la mejor.",
     en:"You're a social profile expert. Write me 5 bio versions for my [SOCIAL NETWORK] profile in [NICHE/BUSINESS]. They should make clear what I offer, who I help, why to follow me, and include a call to action (visit link, message, etc.). Adapted to the character limit and with a touch that invites following. Mark the best one."}},

{ cat:"social", t:{es:"Serie de contenido para fidelizar", en:"Content series to build loyalty"},
  p:{es:"Actúa como estratega de contenido. Diséñame una serie de contenido recurrente para [RED SOCIAL] en el nicho de [NICHO] (como una sección semanal que la gente espere). Dame: el concepto de la serie, el nombre, qué publicar en cada entrega, con qué frecuencia, y por qué haría que la gente vuelva. Que cree comunidad y fidelice a mi audiencia.",
     en:"Act as a content strategist. Design me a recurring content series for [SOCIAL NETWORK] in the [NICHE] niche (like a weekly segment people look forward to). Give me: the series concept, the name, what to post in each installment, how often, and why it would make people come back. It should build community and create loyalty with my audience."}},

// ---------- COPYWRITING (+6) ----------
{ cat:"copywriting", t:{es:"Página de venta completa", en:"Complete sales page"},
  p:{es:"Actúa como copywriter de respuesta directa. Escribe la estructura y el texto de una página de venta completa para [PRODUCTO]. Incluye: titular principal con promesa, subtítulo, identificación del problema, presentación de la solución, beneficios en viñetas, prueba social, la oferta, garantía, preguntas frecuentes y llamada a la acción. Persuasiva de principio a fin.",
     en:"Act as a direct-response copywriter. Write the structure and copy of a complete sales page for [PRODUCT]. Include: main headline with a promise, subheadline, problem identification, solution presentation, benefits in bullets, social proof, the offer, guarantee, FAQs and call to action. Persuasive from start to finish."}},

{ cat:"copywriting", t:{es:"Titular que vende", en:"Headline that sells"},
  p:{es:"Eres experto en titulares. Para [PRODUCTO/OFERTA], escríbeme 15 titulares persuasivos que capten la atención y comuniquen el beneficio principal. Varía las fórmulas: cómo lograr X, el secreto de, la forma de, advertencia, número + beneficio. Que despierten deseo y curiosidad. Marca los 3 más potentes y explica por qué funcionan.",
     en:"You're a headline expert. For [PRODUCT/OFFER], write me 15 persuasive headlines that grab attention and communicate the main benefit. Vary the formulas: how to achieve X, the secret of, the way to, warning, number + benefit. They should spark desire and curiosity. Mark the 3 most powerful and explain why they work."}},

{ cat:"copywriting", t:{es:"Conecta con el dolor del cliente", en:"Connect with the customer's pain"},
  p:{es:"Actúa como copywriter empático. Para [PRODUCTO] dirigido a [PÚBLICO], escribe un texto que conecte profundamente con el dolor o frustración que vive mi cliente antes de comprar. Que describa su situación de forma que sienta 'esto es justo lo que me pasa', y luego presente mi producto como el alivio. Empático y persuasivo, sin manipular.",
     en:"Act as an empathetic copywriter. For [PRODUCT] aimed at [AUDIENCE], write copy that deeply connects with the pain or frustration my customer experiences before buying. It should describe their situation so they feel 'this is exactly what happens to me', and then present my product as the relief. Empathetic and persuasive, without manipulating."}},

{ cat:"copywriting", t:{es:"Llamadas a la acción que convierten", en:"CTAs that convert"},
  p:{es:"Eres experto en conversión. Para [PRODUCTO/PÁGINA], dame 12 llamadas a la acción (CTAs) persuasivas que inviten a comprar o dar el siguiente paso. Que vayan más allá del clásico 'Comprar ahora': que transmitan beneficio, urgencia o facilidad. Organízalas según la intención y marca las que más convertirían. Listas para botones o cierres de texto.",
     en:"You're a conversion expert. For [PRODUCT/PAGE], give me 12 persuasive calls to action (CTAs) that invite buying or taking the next step. They should go beyond the classic 'Buy now': conveying benefit, urgency or ease. Organize them by intent and mark the ones that would convert most. Ready for buttons or text closings."}},

{ cat:"copywriting", t:{es:"Texto para anuncio de Facebook", en:"Facebook ad copy"},
  p:{es:"Actúa como copywriter de anuncios. Escribe el texto completo de un anuncio de Facebook/Instagram para [PRODUCTO] dirigido a [PÚBLICO]. Incluye: el gancho inicial, el desarrollo que despierte deseo enfocándose en el beneficio, prueba o credibilidad, y una llamada a la acción clara. Dame 2 versiones con ángulos distintos. Que generen clics y ventas.",
     en:"Act as an ad copywriter. Write the complete copy of a Facebook/Instagram ad for [PRODUCT] aimed at [AUDIENCE]. Include: the opening hook, the body that sparks desire focusing on the benefit, proof or credibility, and a clear call to action. Give me 2 versions with different angles. They should generate clicks and sales."}},

{ cat:"copywriting", t:{es:"Descripción persuasiva de servicio", en:"Persuasive service description"},
  p:{es:"Eres copywriter. Escribe una descripción persuasiva de mi servicio de [SERVICIO] para mi página o perfil. Que explique qué hago, el problema que resuelvo, los beneficios que obtiene el cliente, por qué elegirme a mí, y termine invitando a contactarme. Enfocada en el cliente y en resultados, no en una lista aburrida de tareas. Profesional y atractiva.",
     en:"You're a copywriter. Write a persuasive description of my [SERVICE] service for my page or profile. It should explain what I do, the problem I solve, the benefits the customer gets, why to choose me, and end by inviting contact. Focused on the customer and results, not a boring task list. Professional and attractive."}},

// ---------- NEGOCIOS (+5) ----------
{ cat:"business", t:{es:"Plan de negocio en una página", en:"One-page business plan"},
  p:{es:"Actúa como consultor de negocios. Ayúdame a crear un plan de negocio resumido en una sola página para [IDEA/NEGOCIO]. Incluye: la propuesta de valor, el cliente ideal, cómo genero ingresos, los principales costos, los canales para conseguir clientes, mi ventaja competitiva y los primeros 3 pasos para arrancar esta semana. Claro, concreto y accionable.",
     en:"Act as a business consultant. Help me create a one-page summarized business plan for [IDEA/BUSINESS]. Include: the value proposition, the ideal customer, how I generate revenue, the main costs, the channels to get customers, my competitive advantage and the first 3 steps to start this week. Clear, concrete and actionable."}},

{ cat:"business", t:{es:"Calcula tus precios con ganancia", en:"Calculate prices with profit"},
  p:{es:"Eres experto en finanzas de negocios. Ayúdame a calcular el precio de venta de [PRODUCTO/SERVICIO] para tener una buena ganancia. Mis costos son: [DESCRIBE TUS COSTOS]. Explícame cómo calcular el precio considerando costos, margen de ganancia deseado y valor de mercado, y dime cómo asegurarme de que cada venta sea rentable. Con el cálculo paso a paso.",
     en:"You're a business finance expert. Help me calculate the selling price of [PRODUCT/SERVICE] to have a good profit. My costs are: [DESCRIBE YOUR COSTS]. Explain how to calculate the price considering costs, desired profit margin and market value, and tell me how to ensure each sale is profitable. With the step-by-step calculation."}},

{ cat:"business", t:{es:"Analiza a tu competencia", en:"Analyze your competition"},
  p:{es:"Actúa como analista de mercado. Ayúdame a analizar a mi competencia en [SECTOR]. Dame un marco para evaluar: qué ofrecen, sus precios, sus fortalezas y debilidades, cómo se comunican, qué dicen sus clientes, y dónde tienen vacíos que yo podría aprovechar. Al final, dame 3 oportunidades concretas para diferenciarme y ganar clientes.",
     en:"Act as a market analyst. Help me analyze my competition in [SECTOR]. Give me a framework to evaluate: what they offer, their prices, their strengths and weaknesses, how they communicate, what their customers say, and where they have gaps I could exploit. At the end, give me 3 concrete opportunities to differentiate myself and win customers."}},

{ cat:"business", t:{es:"Metas y objetivos del negocio", en:"Business goals and objectives"},
  p:{es:"Eres consultor estratégico. Ayúdame a definir metas claras para mi negocio [NEGOCIO] para los próximos [PERIODO]. Ayúdame a establecer objetivos específicos y medibles, divididos en pasos, con indicadores para saber si voy bien. Que sean ambiciosos pero realistas. Dame también cómo hacer seguimiento para mantenerme en el camino.",
     en:"You're a strategic consultant. Help me define clear goals for my business [BUSINESS] for the next [PERIOD]. Help me set specific, measurable objectives, broken into steps, with indicators to know if I'm on track. They should be ambitious but realistic. Also give me how to track them to stay on course."}},

{ cat:"business", t:{es:"Convierte tu conocimiento en producto", en:"Turn your knowledge into a product"},
  p:{es:"Actúa como experto en productos de conocimiento. Tengo experiencia o conocimiento en [TEMA/HABILIDAD] y quiero convertirlo en un producto que pueda vender. Dame ideas concretas de qué crear (curso, guía, asesoría, plantilla, etc.), cómo estructurarlo, a quién venderlo, y cuál sería el más fácil y rentable para empezar. Práctico y aplicable.",
     en:"Act as a knowledge-product expert. I have experience or knowledge in [TOPIC/SKILL] and want to turn it into a product I can sell. Give me concrete ideas of what to create (course, guide, consulting, template, etc.), how to structure it, who to sell it to, and which would be the easiest and most profitable to start. Practical and applicable."}},

];
