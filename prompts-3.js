// ============================================================
//  ARSENAL IA — BIBLIOTECA DE PROMPTS (parte 3)
//  Email · SEO · Video · Marca personal · IA y Agentes
// ============================================================

const PROMPTS_3 = [

// ---------- EMAIL ----------
{ cat:"email", t:{es:"Secuencia de bienvenida de 3 emails", en:"3-email welcome sequence"},
  p:{es:"Actúa como experto en email marketing. Crea una secuencia de bienvenida de 3 correos para nuevos suscriptores de [NEGOCIO]. Email 1: dar la bienvenida y entregar valor inmediato. Email 2: contar la historia/misión y generar conexión. Email 3: presentar la oferta principal. Para cada uno dame el asunto, el preheader y el cuerpo. Tono cercano.",
     en:"Act as an email marketing expert. Create a 3-email welcome sequence for new subscribers of [BUSINESS]. Email 1: welcome them and deliver immediate value. Email 2: tell the story/mission and build connection. Email 3: present the main offer. For each, give me the subject line, preheader and body. Warm tone."}},

{ cat:"email", t:{es:"50 asuntos que se abren", en:"50 subject lines that get opened"},
  p:{es:"Eres copywriter de email. Dame 50 ideas de asuntos para correos de [NEGOCIO/NICHO] que aumenten la tasa de apertura. Organízalos por tipo: curiosidad, urgencia, beneficio, pregunta, personalización, número y polémica. Que sean cortos (menos de 50 caracteres) y eviten palabras que caigan en spam.",
     en:"You're an email copywriter. Give me 50 subject line ideas for [BUSINESS/NICHE] emails that boost open rates. Organize them by type: curiosity, urgency, benefit, question, personalization, number and controversy. Keep them short (under 50 characters) and avoid spam-trigger words."}},

{ cat:"email", t:{es:"Email de lanzamiento de producto", en:"Product launch email"},
  p:{es:"Actúa como experto en lanzamientos. Escribe un correo para anunciar el lanzamiento de [PRODUCTO] a mi lista de suscriptores. Que genere expectativa, explique qué es y para quién, destaque el beneficio principal, incluya una oferta de lanzamiento con plazo limitado y termine con una llamada a la acción clara. Tono emocionante pero creíble.",
     en:"Act as a launch expert. Write an email to announce the launch of [PRODUCT] to my subscriber list. It should build anticipation, explain what it is and for whom, highlight the main benefit, include a limited-time launch offer and end with a clear call to action. Exciting but believable tone."}},

{ cat:"email", t:{es:"Newsletter de valor semanal", en:"Weekly value newsletter"},
  p:{es:"Eres redactor de newsletters. Escribe una newsletter para [NEGOCIO/NICHO] dirigida a [PÚBLICO]. Estructura: asunto atractivo, saludo cercano, una idea principal de valor desarrollada de forma útil, un consejo práctico aplicable hoy y un cierre con una pregunta o invitación. Que aporte valor real, no solo venda. Tono conversacional.",
     en:"You're a newsletter writer. Write a newsletter for [BUSINESS/NICHE] aimed at [AUDIENCE]. Structure: catchy subject, warm greeting, one main value idea developed usefully, a practical tip applicable today and a closing with a question or invitation. Provide real value, don't just sell. Conversational tone."}},

// ---------- SEO ----------
{ cat:"seo", t:{es:"Artículo de blog optimizado", en:"SEO-optimized blog article"},
  p:{es:"Eres experto en SEO. Escribe un artículo de blog optimizado sobre [TEMA] para la palabra clave [PALABRA CLAVE]. Incluye: título atractivo con la keyword, meta descripción, introducción que enganche, subtítulos H2 y H3 bien estructurados, contenido de valor real y una conclusión con llamada a la acción. Mínimo 800 palabras, natural y fácil de leer.",
     en:"You're an SEO expert. Write an optimized blog article about [TOPIC] for the keyword [KEYWORD]. Include: an attractive title with the keyword, meta description, an engaging intro, well-structured H2 and H3 subheadings, real valuable content and a conclusion with a call to action. Minimum 800 words, natural and easy to read."}},

{ cat:"seo", t:{es:"Investigación de palabras clave", en:"Keyword research"},
  p:{es:"Actúa como especialista en SEO. Para un negocio de [SECTOR] dirigido a [PÚBLICO] en [PAÍS/REGIÓN], dame una lista de 20 palabras clave para posicionar. Organízalas en: palabras de alta intención de compra, informativas y de cola larga. Para cada una indica la intención de búsqueda y una idea de contenido para atacarla.",
     en:"Act as an SEO specialist. For a [SECTOR] business targeting [AUDIENCE] in [COUNTRY/REGION], give me a list of 20 keywords to rank for. Organize them into: high purchase-intent keywords, informational, and long-tail. For each, indicate the search intent and a content idea to target it."}},

{ cat:"seo", t:{es:"Meta título y descripción", en:"Meta title and description"},
  p:{es:"Eres experto en SEO on-page. Para una página sobre [TEMA/PRODUCTO] con la palabra clave [KEYWORD], escríbeme 5 opciones de meta título (máximo 60 caracteres) y 5 de meta descripción (máximo 155 caracteres). Que incluyan la keyword, generen clics y comuniquen el beneficio. Marca la mejor combinación.",
     en:"You're an on-page SEO expert. For a page about [TOPIC/PRODUCT] with the keyword [KEYWORD], write me 5 meta title options (max 60 characters) and 5 meta description options (max 155 characters). They should include the keyword, drive clicks and communicate the benefit. Mark the best combination."}},

{ cat:"seo", t:{es:"Estructura de artículo para posicionar", en:"Article structure to rank"},
  p:{es:"Actúa como estratega de contenidos SEO. Quiero posicionar para la búsqueda \"[PALABRA CLAVE]\". Dame la estructura completa del artículo ideal: título, todos los subtítulos (H2, H3), qué responder en cada sección, qué preguntas frecuentes incluir y cuántas palabras debería tener cada parte. Que cubra mejor el tema que la competencia.",
     en:"Act as an SEO content strategist. I want to rank for the search \"[KEYWORD]\". Give me the complete structure of the ideal article: title, all subheadings (H2, H3), what to answer in each section, which FAQs to include and how many words each part should have. It should cover the topic better than the competition."}},

// ---------- VIDEO ----------
{ cat:"video", t:{es:"Guion de video corto viral", en:"Viral short-video script"},
  p:{es:"Actúa como guionista de contenido corto. Escribe un guion para un video de 30 a 45 segundos sobre [TEMA] para [PLATAFORMA]. Estructura: gancho potente en los primeros 3 segundos, desarrollo con una sola idea clara, momento de valor o sorpresa y un cierre con llamada a la acción. Indica qué decir y qué mostrar en cada escena.",
     en:"Act as a short-form content scriptwriter. Write a script for a 30–45 second video about [TOPIC] for [PLATFORM]. Structure: a powerful hook in the first 3 seconds, development with a single clear idea, a value or surprise moment and a closing with a call to action. Indicate what to say and what to show in each scene."}},

{ cat:"video", t:{es:"Guion de VSL (video de ventas)", en:"VSL (video sales letter) script"},
  p:{es:"Eres experto en videos de venta. Escribe el guion de un VSL para vender [PRODUCTO]. Estructura: gancho que detenga, identificación del problema, agitación del dolor, presentación de la solución, prueba/credibilidad, oferta, garantía, urgencia y llamada a la acción. Indica la duración aproximada de cada sección. Persuasivo y enfocado en el cliente.",
     en:"You're a sales video expert. Write the script of a VSL to sell [PRODUCT]. Structure: a stopping hook, problem identification, pain agitation, solution presentation, proof/credibility, offer, guarantee, urgency and call to action. Indicate the approximate duration of each section. Persuasive and customer-focused."}},

{ cat:"video", t:{es:"Guion para YouTube de 10 minutos", en:"10-minute YouTube script"},
  p:{es:"Actúa como guionista de YouTube. Escribe la estructura de un video de unos 10 minutos sobre [TEMA] para un canal de [NICHO]. Incluye: gancho inicial (primeros 30 segundos), introducción, los puntos principales en orden, momentos para retener la atención, y cierre con llamada a la suscripción. Que mantenga al espectador hasta el final.",
     en:"Act as a YouTube scriptwriter. Write the structure of an approximately 10-minute video about [TOPIC] for a [NICHE] channel. Include: opening hook (first 30 seconds), intro, the main points in order, retention moments, and a closing with a subscribe call. It should keep the viewer until the end."}},

{ cat:"video", t:{es:"10 ganchos para los primeros 3 segundos", en:"10 hooks for the first 3 seconds"},
  p:{es:"Eres experto en retención de video. Para un video sobre [TEMA] dirigido a [PÚBLICO], dame 10 ganchos distintos para los primeros 3 segundos que eviten que la gente pase el video. Usa diferentes técnicas: pregunta, dato impactante, promesa, error común, contraste, controversia, curiosidad y resultado. Que sean frases exactas para decir o poner en pantalla.",
     en:"You're a video retention expert. For a video about [TOPIC] aimed at [AUDIENCE], give me 10 different hooks for the first 3 seconds that stop people from scrolling past. Use different techniques: question, shocking fact, promise, common mistake, contrast, controversy, curiosity and result. Make them exact phrases to say or put on screen."}},

// ---------- MARCA PERSONAL ----------
{ cat:"personal", t:{es:"Propuesta ganadora para freelancers", en:"Winning freelancer proposal"},
  p:{es:"Eres un freelancer top con muchas propuestas aceptadas. Escribe una propuesta para este proyecto: \"[DESCRIPCIÓN DEL PROYECTO]\". Estructura: saludo personalizado que demuestre que leíste el proyecto, comprensión clara de su necesidad, cómo lo resolverías paso a paso, por qué soy la mejor opción y un cierre con una pregunta que invite a responder. Breve, profesional y sin sonar genérico.",
     en:"You're a top freelancer with many accepted proposals. Write a proposal for this project: \"[PROJECT DESCRIPTION]\". Structure: a personalized greeting that shows you read the project, clear understanding of their need, how you'd solve it step by step, why I'm the best choice and a closing with a question that invites a reply. Short, professional and not generic."}},

{ cat:"personal", t:{es:"Perfil de LinkedIn que atrae", en:"LinkedIn profile that attracts"},
  p:{es:"Actúa como experto en marca personal en LinkedIn. Ayúdame a optimizar mi perfil. Mi profesión es [PROFESIÓN] y quiero atraer [OBJETIVO: clientes/empleo/red]. Escríbeme: un titular potente, un extracto \"acerca de\" que conecte y posicione, y 3 ideas de publicaciones para empezar a generar visibilidad. Tono profesional pero humano.",
     en:"Act as a LinkedIn personal brand expert. Help me optimize my profile. My profession is [PROFESSION] and I want to attract [GOAL: clients/jobs/network]. Write me: a powerful headline, an \"about\" summary that connects and positions me, and 3 post ideas to start building visibility. Professional but human tone."}},

{ cat:"personal", t:{es:"Hoja de vida que destaca", en:"Resume that stands out"},
  p:{es:"Eres experto en selección de personal. Ayúdame a mejorar mi hoja de vida para el puesto de [PUESTO]. Mi experiencia es: [EXPERIENCIA]. Escríbeme: un resumen profesional impactante de 3 líneas, cómo redactar mis logros con resultados medibles, y qué habilidades destacar. Que pase los filtros automáticos y llame la atención del reclutador.",
     en:"You're a recruiting expert. Help me improve my resume for the [POSITION] role. My experience is: [EXPERIENCE]. Write me: a powerful 3-line professional summary, how to phrase my achievements with measurable results, and which skills to highlight. It should pass automated filters and catch the recruiter's attention."}},

{ cat:"personal", t:{es:"Pitch de presentación en 30 segundos", en:"30-second elevator pitch"},
  p:{es:"Actúa como experto en comunicación. Ayúdame a crear mi pitch de presentación de 30 segundos. Soy [PROFESIÓN/NEGOCIO], ayudo a [PÚBLICO] a [RESULTADO/BENEFICIO]. Dame 3 versiones distintas: una para networking, una para clientes potenciales y una para redes sociales. Que sea claro, memorable y genere ganas de saber más.",
     en:"Act as a communication expert. Help me create my 30-second elevator pitch. I'm a [PROFESSION/BUSINESS], I help [AUDIENCE] to [RESULT/BENEFIT]. Give me 3 different versions: one for networking, one for potential clients and one for social media. It should be clear, memorable and make people want to know more."}},

// ---------- IA Y AGENTES ----------
{ cat:"agents", t:{es:"Crea tu propio agente/GPT personalizado", en:"Build your own custom agent/GPT"},
  p:{es:"Actúa como experto en configuración de agentes de IA. Ayúdame a crear las instrucciones para un GPT/agente personalizado que se especialice en [TAREA/FUNCIÓN]. Dame: el rol que debe asumir, su personalidad y tono, qué debe hacer paso a paso, qué información pedir al usuario, qué formato de respuesta usar y qué NO debe hacer. Listo para copiar y pegar en la configuración.",
     en:"Act as an AI agent configuration expert. Help me create the instructions for a custom GPT/agent specialized in [TASK/FUNCTION]. Give me: the role it should take, its personality and tone, what it should do step by step, what info to ask the user, what response format to use and what it should NOT do. Ready to copy and paste into the configuration."}},

{ cat:"agents", t:{es:"Agente para responder clientes 24/7", en:"Agent to answer customers 24/7"},
  p:{es:"Eres experto en automatización con IA. Crea las instrucciones para un agente de atención al cliente de mi negocio [NEGOCIO] que venda [PRODUCTO/SERVICIO]. Debe: saludar amablemente, responder dudas frecuentes sobre precio, envío y disponibilidad, manejar objeciones, guiar hacia la compra y derivar a un humano cuando sea necesario. Incluye la información de mi negocio que debe conocer y su tono de voz.",
     en:"You're an AI automation expert. Create the instructions for a customer service agent for my business [BUSINESS] that sells [PRODUCT/SERVICE]. It should: greet warmly, answer FAQs about price, shipping and availability, handle objections, guide toward purchase and hand off to a human when needed. Include the business info it should know and its tone of voice."}},

{ cat:"agents", t:{es:"Flujo de automatización paso a paso", en:"Step-by-step automation flow"},
  p:{es:"Actúa como consultor de automatización. Quiero automatizar este proceso de mi negocio: [PROCESO]. Diséñame el flujo completo paso a paso: qué dispara la automatización, qué pasos sigue, qué herramientas necesito (sin complicarme), qué se hace automático y qué requiere mi intervención. Explícamelo de forma sencilla, como si no supiera de tecnología.",
     en:"Act as an automation consultant. I want to automate this process in my business: [PROCESS]. Design the complete step-by-step flow: what triggers the automation, what steps it follows, what tools I need (keeping it simple), what's automatic and what needs my input. Explain it simply, as if I don't know tech."}},

{ cat:"agents", t:{es:"Asistente de contenido personalizado", en:"Custom content assistant"},
  p:{es:"Eres experto en agentes de IA para creadores. Configura un asistente que me ayude a crear contenido para [NEGOCIO/NICHO] en [REDES]. Debe conocer mi marca, mi público y mi tono. Que pueda generar ideas, escribir captions, sugerir ganchos y adaptar un mismo contenido a varias plataformas. Dame las instrucciones completas y la información de marca que debe tener.",
     en:"You're an expert in AI agents for creators. Set up an assistant that helps me create content for [BUSINESS/NICHE] on [PLATFORMS]. It should know my brand, audience and tone. It should generate ideas, write captions, suggest hooks and adapt the same content to several platforms. Give me the complete instructions and the brand info it needs."}},

{ cat:"agents", t:{es:"Cómo escribir mejores prompts", en:"How to write better prompts"},
  p:{es:"Actúa como experto en prompt engineering. Enséñame a transformar esta petición vaga en un prompt profesional: \"[TU PETICIÓN]\". Reescríbelo aplicando buenas prácticas: asignar un rol, dar contexto, ser específico en la tarea, indicar el formato de salida y dar un ejemplo si ayuda. Muéstrame el antes y el después, y explícame qué mejoraste y por qué.",
     en:"Act as a prompt engineering expert. Teach me to transform this vague request into a professional prompt: \"[YOUR REQUEST]\". Rewrite it applying best practices: assign a role, give context, be specific about the task, indicate the output format and give an example if it helps. Show me the before and after, and explain what you improved and why."}},

];
