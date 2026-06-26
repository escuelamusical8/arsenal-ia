// ============================================================
//  ARSENAL IA — BIBLIOTECA DE PROMPTS (parte 5)
//  Más: Marketing · Ventas · Redes sociales · Copywriting
// ============================================================

const PROMPTS_5 = [

// ---------- MARKETING ----------
{ cat:"marketing", t:{es:"Embudo de ventas completo", en:"Complete sales funnel"},
  p:{es:"Actúa como experto en embudos de venta. Diseña un embudo completo para vender [PRODUCTO] a [PÚBLICO]. Define las 4 etapas (atracción, interés, deseo, acción), qué contenido usar en cada una, el gancho de entrada, cómo capturar contactos, la oferta principal y el seguimiento post-venta. Explícamelo paso a paso y de forma aplicable.",
     en:"Act as a sales funnel expert. Design a complete funnel to sell [PRODUCT] to [AUDIENCE]. Define the 4 stages (attract, interest, desire, action), what content to use in each, the entry hook, how to capture leads, the main offer and post-sale follow-up. Explain it step by step and in an applicable way."}},

{ cat:"marketing", t:{es:"Análisis de público objetivo", en:"Target audience analysis"},
  p:{es:"Eres estratega de marketing. Ayúdame a definir el perfil detallado de mi cliente ideal para [PRODUCTO/NEGOCIO]. Incluye: datos demográficos, intereses, problemas y dolores, deseos y aspiraciones, dónde pasa su tiempo online, qué lo motiva a comprar y qué objeciones suele tener. Crea un perfil concreto tipo 'persona'.",
     en:"You're a marketing strategist. Help me define the detailed profile of my ideal customer for [PRODUCT/BUSINESS]. Include: demographics, interests, problems and pains, desires and aspirations, where they spend time online, what motivates them to buy and what objections they usually have. Create a concrete 'persona' profile."}},

{ cat:"marketing", t:{es:"Eslogan y frases publicitarias", en:"Slogan and ad taglines"},
  p:{es:"Actúa como creativo publicitario. Crea 10 eslóganes memorables para [NEGOCIO/PRODUCTO] que se dedica a [ACTIVIDAD]. Que sean cortos, fáciles de recordar, que transmitan el beneficio principal y que conecten emocionalmente. Varía los estilos: directos, emocionales, con juego de palabras y aspiracionales. Marca tus 3 favoritos.",
     en:"Act as an advertising creative. Create 10 memorable slogans for [BUSINESS/PRODUCT] that does [ACTIVITY]. They should be short, easy to remember, convey the main benefit and connect emotionally. Vary the styles: direct, emotional, pun-based and aspirational. Mark your top 3."}},

{ cat:"marketing", t:{es:"Estrategia de marketing de contenidos", en:"Content marketing strategy"},
  p:{es:"Eres experto en marketing de contenidos. Crea una estrategia para [NEGOCIO] dirigida a [PÚBLICO]. Define: los temas pilares de contenido, los formatos a usar, la frecuencia de publicación, en qué canales, cómo convertir seguidores en clientes y qué métricas medir. Práctica y enfocada en resultados de negocio.",
     en:"You're a content marketing expert. Create a strategy for [BUSINESS] aimed at [AUDIENCE]. Define: the content pillar topics, formats to use, publishing frequency, which channels, how to convert followers into customers and what metrics to measure. Practical and focused on business results."}},

{ cat:"marketing", t:{es:"Promoción de lanzamiento", en:"Launch promotion"},
  p:{es:"Actúa como experto en lanzamientos. Diseña una promoción de lanzamiento para [PRODUCTO]. Incluye: el tipo de oferta de apertura, cómo crear expectativa antes, el incentivo por comprar rápido (urgencia/escasez), los canales para anunciarlo y la secuencia de mensajes durante el lanzamiento. Que genere ventas desde el primer día.",
     en:"Act as a launch expert. Design a launch promotion for [PRODUCT]. Include: the type of opening offer, how to build anticipation beforehand, the incentive to buy fast (urgency/scarcity), the channels to announce it and the message sequence during launch. It should generate sales from day one."}},

{ cat:"marketing", t:{es:"Diferénciate de la competencia", en:"Stand out from competitors"},
  p:{es:"Eres consultor de posicionamiento. Mi negocio [NEGOCIO] compite con [COMPETENCIA]. Ayúdame a encontrar mi factor diferenciador único: qué puedo ofrecer que ellos no, cómo comunicarlo, y cómo posicionarme en la mente del cliente como la mejor opción. Dame 3 ángulos de diferenciación concretos y aplicables.",
     en:"You're a positioning consultant. My business [BUSINESS] competes with [COMPETITORS]. Help me find my unique differentiator: what I can offer that they can't, how to communicate it, and how to position myself in the customer's mind as the best option. Give me 3 concrete, applicable differentiation angles."}},

{ cat:"marketing", t:{es:"Plan de marketing para evento", en:"Event marketing plan"},
  p:{es:"Actúa como organizador de eventos. Crea un plan de marketing para promocionar [EVENTO: webinar, taller, lanzamiento, etc.]. Incluye: cómo generar interés, dónde y cuándo anunciarlo, qué mensaje usar para que la gente se inscriba, recordatorios antes del evento y cómo aprovecharlo para vender después. Práctico y paso a paso.",
     en:"Act as an event organizer. Create a marketing plan to promote [EVENT: webinar, workshop, launch, etc.]. Include: how to generate interest, where and when to announce it, what message to use to get people to sign up, reminders before the event and how to leverage it to sell afterward. Practical and step by step."}},

{ cat:"marketing", t:{es:"Mensaje publicitario por emoción", en:"Emotion-based ad message"},
  p:{es:"Eres experto en publicidad emocional. Crea 3 mensajes publicitarios para [PRODUCTO] que apelen a emociones distintas: uno al miedo de perderse algo, uno al deseo de pertenecer/estatus, y uno a la aspiración de mejorar. Para cada uno explica qué emoción activa y por qué funcionaría con [PÚBLICO]. Persuasivos pero honestos.",
     en:"You're an emotional advertising expert. Create 3 ad messages for [PRODUCT] that appeal to different emotions: one to fear of missing out, one to the desire to belong/status, and one to the aspiration to improve. For each, explain what emotion it activates and why it would work with [AUDIENCE]. Persuasive but honest."}},

{ cat:"marketing", t:{es:"Reactiva clientes antiguos", en:"Reactivate old customers"},
  p:{es:"Actúa como experto en retención. Tengo clientes que me compraron antes pero no han vuelto. Crea una campaña para reactivarlos: el mensaje para reconectar, un incentivo atractivo para que vuelvan, cómo recordarles el valor que ofrezco y una llamada a la acción clara. Dame los mensajes listos para enviar por email o WhatsApp.",
     en:"Act as a retention expert. I have customers who bought before but haven't returned. Create a campaign to reactivate them: the message to reconnect, an attractive incentive to come back, how to remind them of the value I offer and a clear call to action. Give me ready-to-send messages for email or WhatsApp."}},

{ cat:"marketing", t:{es:"Calendario de marketing anual", en:"Annual marketing calendar"},
  p:{es:"Eres director de marketing. Crea un calendario de marketing para todo el año para [NEGOCIO]. Identifica las fechas y temporadas clave de mi sector, qué tipo de campaña hacer en cada una, los productos a destacar y el objetivo de cada periodo. Organízalo por meses en formato de tabla. Realista y estratégico.",
     en:"You're a marketing director. Create a full-year marketing calendar for [BUSINESS]. Identify the key dates and seasons of my sector, what type of campaign to run in each, the products to highlight and the goal of each period. Organize it by month in a table. Realistic and strategic."}},

// ---------- VENTAS ----------
{ cat:"sales", t:{es:"Supera la objeción 'lo voy a pensar'", en:"Overcome 'I'll think about it'"},
  p:{es:"Actúa como cerrador experto. El cliente me dice 'lo voy a pensar'. Dame 5 formas de responder que descubran la verdadera objeción detrás, mantengan la conversación abierta, refuercen el valor y creen un motivo para decidir ahora, sin presionar de forma agresiva. Mensajes naturales listos para usar por chat.",
     en:"Act as an expert closer. The customer says 'I'll think about it'. Give me 5 ways to respond that uncover the real objection behind it, keep the conversation open, reinforce value and create a reason to decide now, without aggressive pressure. Natural messages ready to use via chat."}},

{ cat:"sales", t:{es:"Argumentario de ventas", en:"Sales pitch arguments"},
  p:{es:"Eres entrenador de ventas. Crea un argumentario completo para vender [PRODUCTO]. Incluye: los 5 beneficios más fuertes, cómo presentar cada uno, las respuestas a las 5 objeciones más comunes, frases de cierre y cómo transmitir confianza. Que pueda usarlo como guía en cualquier conversación de venta.",
     en:"You're a sales trainer. Create a complete pitch to sell [PRODUCT]. Include: the 5 strongest benefits, how to present each, responses to the 5 most common objections, closing phrases and how to convey confidence. So I can use it as a guide in any sales conversation."}},

{ cat:"sales", t:{es:"Crea urgencia sin mentir", en:"Create urgency without lying"},
  p:{es:"Actúa como experto en persuasión ética. Dame 7 formas honestas de crear urgencia para que el cliente compre [PRODUCTO] pronto, sin inventar mentiras ni falsa escasez. Por ejemplo: ofertas con fecha real, bonos limitados, beneficios de actuar ya. Explica cómo aplicar cada una de forma creíble y respetuosa.",
     en:"Act as an ethical persuasion expert. Give me 7 honest ways to create urgency so the customer buys [PRODUCT] soon, without making up lies or false scarcity. For example: offers with a real deadline, limited bonuses, benefits of acting now. Explain how to apply each one credibly and respectfully."}},

{ cat:"sales", t:{es:"Primer mensaje a un cliente potencial", en:"First message to a prospect"},
  p:{es:"Eres experto en prospección. Escribe 5 primeros mensajes para contactar a un cliente potencial interesado en [PRODUCTO/SERVICIO], sin sonar a spam ni a vendedor desesperado. Que generen curiosidad, aporten algo de valor y abran la conversación de forma natural. Cortos, cercanos y listos para enviar por WhatsApp o DM.",
     en:"You're a prospecting expert. Write 5 first messages to contact a potential customer interested in [PRODUCT/SERVICE], without sounding like spam or a desperate salesperson. They should spark curiosity, offer some value and open the conversation naturally. Short, warm and ready to send via WhatsApp or DM."}},

{ cat:"sales", t:{es:"Aumenta el valor de cada venta", en:"Increase the value of each sale"},
  p:{es:"Actúa como experto en ventas. Para mi producto [PRODUCTO], dame estrategias para aumentar el valor de cada compra: qué ofrecer como complemento (cross-sell), qué versión superior ofrecer (upsell), qué combos crear y cómo presentarlos en el momento justo para que el cliente compre más sin sentirse presionado. Con ejemplos concretos.",
     en:"Act as a sales expert. For my product [PRODUCT], give me strategies to increase the value of each purchase: what to offer as a complement (cross-sell), what higher version to offer (upsell), what bundles to create and how to present them at the right moment so the customer buys more without feeling pressured. With concrete examples."}},

{ cat:"sales", t:{es:"Responde a 'no tengo dinero ahora'", en:"Respond to 'I don't have money now'"},
  p:{es:"Eres cerrador empático. El cliente dice que le interesa pero no tiene dinero ahora. Dame 4 respuestas que: muestren comprensión, ofrezcan alternativas (facilidades de pago, reservar el precio, plan menor), mantengan la puerta abierta y no lo hagan sentir mal. Tono humano y respetuoso, nunca insistente.",
     en:"You're an empathetic closer. The customer says they're interested but don't have money now. Give me 4 responses that: show understanding, offer alternatives (payment options, lock in the price, smaller plan), keep the door open and don't make them feel bad. Human, respectful tone, never pushy."}},

{ cat:"sales", t:{es:"Testimonios que venden", en:"Testimonials that sell"},
  p:{es:"Actúa como experto en prueba social. Ayúdame a sacarle el máximo provecho a los testimonios de mis clientes de [PRODUCTO]. Dame: qué preguntas hacerle a un cliente satisfecho para obtener un buen testimonio, cómo redactarlo para que sea convincente, y dónde y cómo mostrarlo para que genere más ventas.",
     en:"Act as a social proof expert. Help me get the most out of my customer testimonials for [PRODUCT]. Give me: what questions to ask a satisfied customer to get a good testimonial, how to write it so it's convincing, and where and how to show it to generate more sales."}},

{ cat:"sales", t:{es:"Cierra por mensaje de voz o nota", en:"Close via voice message or note"},
  p:{es:"Eres experto en ventas por WhatsApp. Escríbeme el guion de una nota de voz (de 30-40 segundos) para cerrar una venta de [PRODUCTO] con un cliente que ya mostró interés. Que suene natural y cercano, refuerce el beneficio principal, maneje la duda más común y termine invitando a dar el paso. Indica el tono a usar.",
     en:"You're a WhatsApp sales expert. Write me the script of a voice note (30-40 seconds) to close a sale of [PRODUCT] with a customer who already showed interest. It should sound natural and warm, reinforce the main benefit, handle the most common doubt and end by inviting them to take the step. Indicate the tone to use."}},

{ cat:"sales", t:{es:"Vende sin parecer vendedor", en:"Sell without seeming salesy"},
  p:{es:"Actúa como experto en venta consultiva. Enséñame cómo vender [PRODUCTO] de forma natural, ayudando en vez de presionando. Dame un enfoque de conversación que: haga buenas preguntas, escuche la necesidad real, recomiende como un amigo experto y deje que el cliente llegue solo a la decisión de comprar. Con ejemplos de frases.",
     en:"Act as a consultative selling expert. Teach me how to sell [PRODUCT] naturally, helping instead of pressuring. Give me a conversation approach that: asks good questions, listens to the real need, recommends like an expert friend and lets the customer reach the buying decision on their own. With example phrases."}},

// ---------- REDES SOCIALES ----------
{ cat:"social", t:{es:"Plan de contenido de 30 días", en:"30-day content plan"},
  p:{es:"Actúa como estratega de redes. Crea un plan de contenido de 30 días para [NEGOCIO/NICHO] en [RED SOCIAL]. Dame una idea de publicación para cada día, variando entre educativo, entretenido, de venta, inspiracional y de comunidad. Para cada una, el tema y el formato. Organízalo en tabla por semanas. Que mantenga la cuenta activa y atractiva.",
     en:"Act as a social media strategist. Create a 30-day content plan for [BUSINESS/NICHE] on [SOCIAL NETWORK]. Give me a post idea for each day, varying between educational, entertaining, sales, inspirational and community. For each, the topic and format. Organize it in a table by weeks. It should keep the account active and attractive."}},

{ cat:"social", t:{es:"Guion de Reel de tendencia", en:"Trending Reel script"},
  p:{es:"Eres creador viral. Crea el guion de un Reel sobre [TEMA] para [NICHO] que aproveche un formato de tendencia. Incluye: el gancho de los primeros 3 segundos, el desarrollo escena por escena, el texto en pantalla, la música o audio sugerido y la llamada a la acción final. Que tenga potencial de hacerse viral.",
     en:"You're a viral creator. Create the script of a Reel about [TOPIC] for [NICHE] that leverages a trending format. Include: the first-3-seconds hook, scene-by-scene development, on-screen text, suggested music or audio and the final call to action. It should have viral potential."}},

{ cat:"social", t:{es:"Responde mensajes directos para vender", en:"Reply to DMs to sell"},
  p:{es:"Actúa como experto en ventas por redes. Crea respuestas para los mensajes directos más comunes que recibo sobre [PRODUCTO]: cuando preguntan precio, cuando dicen 'info', cuando dudan, y cuando están listos para comprar. Que sean cercanas, guíen hacia la venta y no suenen robóticas. Listas para copiar y pegar.",
     en:"Act as a social selling expert. Create replies for the most common direct messages I get about [PRODUCT]: when they ask the price, when they say 'info', when they hesitate, and when they're ready to buy. They should be warm, guide toward the sale and not sound robotic. Ready to copy and paste."}},

{ cat:"social", t:{es:"Historias de Instagram que enganchan", en:"Engaging Instagram stories"},
  p:{es:"Eres experto en stories. Diseña una secuencia de 5 historias de Instagram para [OBJETIVO: vender, generar interacción, mostrar producto]. Para cada historia indica: qué mostrar, qué texto poner, qué elemento interactivo usar (encuesta, pregunta, cuenta regresiva) y cómo conectar una con la siguiente. Que mantengan a la gente viendo hasta el final.",
     en:"You're a stories expert. Design a sequence of 5 Instagram stories for [GOAL: sell, drive interaction, show product]. For each story indicate: what to show, what text to add, what interactive element to use (poll, question, countdown) and how to connect one to the next. They should keep people watching to the end."}},

{ cat:"social", t:{es:"Hashtags estratégicos", en:"Strategic hashtags"},
  p:{es:"Actúa como experto en alcance orgánico. Para una cuenta de [NICHO] dirigida a [PÚBLICO], dame una estrategia de hashtags: 10 hashtags grandes, 10 medianos y 10 específicos de nicho, explicando cómo combinarlos para maximizar el alcance sin parecer spam. Adáptalos al mercado hispano.",
     en:"Act as an organic reach expert. For a [NICHE] account targeting [AUDIENCE], give me a hashtag strategy: 10 large hashtags, 10 medium and 10 niche-specific, explaining how to combine them to maximize reach without looking spammy. Adapt them to the relevant market."}},

{ cat:"social", t:{es:"Idea de contenido para volverse viral", en:"Content idea to go viral"},
  p:{es:"Eres experto en viralidad. Dame 10 ideas de contenido con alto potencial viral para [NICHO]. Para cada una: el concepto, por qué la gente la compartiría, el formato ideal y el gancho. Enfócate en emociones que generan compartidos: sorpresa, identificación, humor, controversia útil e inspiración. Ordénalas por potencial.",
     en:"You're a virality expert. Give me 10 content ideas with high viral potential for [NICHE]. For each: the concept, why people would share it, the ideal format and the hook. Focus on emotions that drive shares: surprise, relatability, humor, useful controversy and inspiration. Sort them by potential."}},

{ cat:"social", t:{es:"Convierte seguidores en clientes", en:"Turn followers into customers"},
  p:{es:"Actúa como estratega de conversión en redes. Tengo seguidores en [RED SOCIAL] pero pocos compran. Dame una estrategia para convertirlos en clientes: qué tipo de contenido genera confianza y deseo, cómo presentar mi oferta sin saturar, cómo usar las historias y los mensajes directos, y cómo crear una secuencia que lleve del 'me gusta' a la compra.",
     en:"Act as a social conversion strategist. I have followers on [SOCIAL NETWORK] but few buy. Give me a strategy to convert them into customers: what content builds trust and desire, how to present my offer without saturating, how to use stories and DMs, and how to create a sequence that leads from a 'like' to a purchase."}},

{ cat:"social", t:{es:"Responde a haters y críticas", en:"Respond to haters and criticism"},
  p:{es:"Eres experto en gestión de reputación. Dame una guía para responder a comentarios negativos y haters en redes sin dañar mi marca: cómo distinguir una crítica válida de un hater, cómo responder con altura, cuándo ignorar, cuándo eliminar y cómo convertir una crítica en una oportunidad. Con ejemplos de respuestas.",
     en:"You're a reputation management expert. Give me a guide to respond to negative comments and haters on social media without harming my brand: how to tell a valid criticism from a hater, how to respond with class, when to ignore, when to delete and how to turn a criticism into an opportunity. With example responses."}},

{ cat:"social", t:{es:"Colaboraciones entre cuentas", en:"Account collaborations"},
  p:{es:"Actúa como experto en crecimiento. Quiero hacer colaboraciones con otras cuentas de [NICHO] para crecer. Dame: cómo identificar cuentas ideales para colaborar, el mensaje para proponerles la colaboración, qué tipos de colaboración funcionan mejor (lives, intercambios, sorteos) y cómo asegurar que ambos ganen. Práctico y aplicable.",
     en:"Act as a growth expert. I want to collaborate with other [NICHE] accounts to grow. Give me: how to identify ideal accounts to collaborate with, the message to propose the collaboration, what types of collaboration work best (lives, shoutouts, giveaways) and how to ensure both sides win. Practical and applicable."}},

// ---------- COPYWRITING ----------
{ cat:"copywriting", t:{es:"Fórmula AIDA para tu texto", en:"AIDA formula for your copy"},
  p:{es:"Actúa como copywriter experto. Escribe un texto de venta para [PRODUCTO] usando la fórmula AIDA: Atención (un gancho potente), Interés (despierta curiosidad con un beneficio), Deseo (haz que lo quiera con prueba y emoción) y Acción (una llamada clara a comprar). Explica brevemente cada parte mientras lo escribes.",
     en:"Act as an expert copywriter. Write a sales copy for [PRODUCT] using the AIDA formula: Attention (a powerful hook), Interest (spark curiosity with a benefit), Desire (make them want it with proof and emotion) and Action (a clear call to buy). Briefly explain each part as you write it."}},

{ cat:"copywriting", t:{es:"Reescribe mi texto para que venda más", en:"Rewrite my copy to sell more"},
  p:{es:"Eres copywriter de respuesta directa. Toma este texto mío y reescríbelo para que sea más persuasivo y venda más: \"[PEGA TU TEXTO]\". Mejóralo enfocándolo en el cliente y sus beneficios, hazlo más claro y directo, agrega un gancho fuerte y una llamada a la acción potente. Muéstrame el antes y el después, y explica qué cambiaste.",
     en:"You're a direct-response copywriter. Take this copy of mine and rewrite it to be more persuasive and sell more: \"[PASTE YOUR TEXT]\". Improve it by focusing on the customer and their benefits, make it clearer and more direct, add a strong hook and a powerful call to action. Show me the before and after, and explain what you changed."}},

{ cat:"copywriting", t:{es:"Bullets de beneficios irresistibles", en:"Irresistible benefit bullets"},
  p:{es:"Actúa como copywriter. Para mi producto [PRODUCTO], escribe 10 viñetas (bullets) de beneficios irresistibles que despierten deseo y curiosidad. Que cada una combine un beneficio claro con un toque de intriga (sin revelar todo), para que el lector quiera comprar para descubrir más. Estilo de página de venta profesional.",
     en:"Act as a copywriter. For my product [PRODUCT], write 10 irresistible benefit bullets that spark desire and curiosity. Each should combine a clear benefit with a touch of intrigue (without revealing everything), so the reader wants to buy to discover more. Professional sales page style."}},

{ cat:"copywriting", t:{es:"Historia que vende (storytelling)", en:"Story that sells (storytelling)"},
  p:{es:"Eres experto en storytelling de ventas. Escribe una historia breve y emotiva para promocionar [PRODUCTO/MARCA] que conecte con [PÚBLICO]. Que tenga un personaje con el que se identifiquen, un problema, el descubrimiento de la solución (mi producto) y una transformación. Que termine invitando sutilmente a comprar. Auténtica y persuasiva.",
     en:"You're a sales storytelling expert. Write a short, emotional story to promote [PRODUCT/BRAND] that connects with [AUDIENCE]. It should have a character they identify with, a problem, the discovery of the solution (my product) and a transformation. It should end by subtly inviting them to buy. Authentic and persuasive."}},

{ cat:"copywriting", t:{es:"Garantía que elimina el miedo", en:"Guarantee that removes fear"},
  p:{es:"Actúa como copywriter de conversión. Ayúdame a redactar una garantía potente para [PRODUCTO] que elimine el miedo del cliente a comprar. Dame 3 versiones distintas que transmitan confianza total, reduzcan el riesgo percibido y hagan que comprar sea una decisión fácil. Explica por qué cada una funciona.",
     en:"Act as a conversion copywriter. Help me write a powerful guarantee for [PRODUCT] that removes the customer's fear of buying. Give me 3 different versions that convey total confidence, reduce perceived risk and make buying an easy decision. Explain why each one works."}},

{ cat:"copywriting", t:{es:"Microcopys para botones y CTAs", en:"Microcopy for buttons and CTAs"},
  p:{es:"Eres experto en copy de conversión. Para [PRODUCTO/PÁGINA], dame 15 textos cortos para botones y llamadas a la acción que generen más clics que el típico 'Comprar' o 'Enviar'. Que sean específicos, transmitan el beneficio y creen ganas de hacer clic. Organízalos según la etapa (descubrir, registrarse, comprar).",
     en:"You're a conversion copy expert. For [PRODUCT/PAGE], give me 15 short texts for buttons and calls to action that get more clicks than the typical 'Buy' or 'Submit'. They should be specific, convey the benefit and create the urge to click. Organize them by stage (discover, sign up, buy)."}},

{ cat:"copywriting", t:{es:"Anuncio clasificado persuasivo", en:"Persuasive classified ad"},
  p:{es:"Actúa como copywriter. Escribe un anuncio corto y persuasivo para vender [PRODUCTO/SERVICIO] en clasificados, Marketplace o grupos. Que tenga un titular que llame la atención, destaque el beneficio principal, genere confianza y termine con un llamado claro a contactar. Directo, sin relleno, optimizado para generar mensajes.",
     en:"Act as a copywriter. Write a short, persuasive ad to sell [PRODUCT/SERVICE] in classifieds, Marketplace or groups. It should have an attention-grabbing headline, highlight the main benefit, build trust and end with a clear call to contact. Direct, no fluff, optimized to generate messages."}},

{ cat:"copywriting", t:{es:"Texto para la sección de preguntas", en:"Copy for the FAQ section"},
  p:{es:"Eres copywriter de ventas. Para [PRODUCTO], escribe una sección de preguntas frecuentes que además de informar, ayude a vender. Incluye las 6 dudas u objeciones más comunes y respóndelas de forma que eliminen el miedo a comprar y refuercen el valor. Que cada respuesta acerque al cliente a la decisión de compra.",
     en:"You're a sales copywriter. For [PRODUCT], write an FAQ section that, besides informing, helps sell. Include the 6 most common doubts or objections and answer them in a way that removes the fear of buying and reinforces value. Each answer should bring the customer closer to the buying decision."}},

{ cat:"copywriting", t:{es:"Promesa principal de tu oferta", en:"Main promise of your offer"},
  p:{es:"Actúa como estratega de copywriting. Ayúdame a crear la promesa principal (big idea) de mi oferta de [PRODUCTO]. Dame 5 versiones de una promesa potente que resuma el mayor beneficio o transformación que ofrezco, de forma clara, creíble y deseable. Que sea el mensaje central de toda mi comunicación. Marca la más fuerte.",
     en:"Act as a copywriting strategist. Help me create the main promise (big idea) of my offer for [PRODUCT]. Give me 5 versions of a powerful promise that sums up the biggest benefit or transformation I offer, clearly, believably and desirably. It should be the central message of all my communication. Mark the strongest one."}},

];
