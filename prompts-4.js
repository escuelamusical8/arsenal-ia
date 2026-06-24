// ============================================================
//  ARSENAL IA — BIBLIOTECA DE PROMPTS (parte 4)
//  Educación · Salud y bienestar
// ============================================================

const PROMPTS_4 = [

// ==========================================================
//  EDUCACIÓN (20)
// ==========================================================
{ cat:"education", t:{es:"Plan de clase completo", en:"Complete lesson plan"},
  p:{es:"Actúa como experto en pedagogía. Crea un plan de clase completo sobre [TEMA] para estudiantes de [NIVEL/GRADO]. Incluye: objetivo de aprendizaje, conocimientos previos necesarios, introducción que enganche, desarrollo de la clase paso a paso con tiempos, una actividad práctica, materiales necesarios y forma de evaluar lo aprendido. Que sea dinámico y fácil de aplicar.",
     en:"Act as a pedagogy expert. Create a complete lesson plan about [TOPIC] for [LEVEL/GRADE] students. Include: learning objective, required prior knowledge, an engaging introduction, step-by-step lesson development with timing, a hands-on activity, needed materials and a way to assess learning. Make it dynamic and easy to apply."}},

{ cat:"education", t:{es:"Explica un tema difícil de forma simple", en:"Explain a hard topic simply"},
  p:{es:"Eres un profesor experto en explicar cosas complejas de forma sencilla. Explícame [TEMA DIFÍCIL] como si tuviera [EDAD/NIVEL]. Usa una analogía de la vida cotidiana, un ejemplo concreto y, al final, una pregunta para comprobar que entendí. Evita tecnicismos innecesarios y hazlo claro y memorable.",
     en:"You're a teacher who's an expert at explaining complex things simply. Explain [HARD TOPIC] to me as if I were [AGE/LEVEL]. Use an everyday-life analogy, a concrete example and, at the end, a question to check I understood. Avoid unnecessary jargon and make it clear and memorable."}},

{ cat:"education", t:{es:"Crea un examen con respuestas", en:"Create a test with answers"},
  p:{es:"Actúa como diseñador de evaluaciones. Crea un examen sobre [TEMA] para nivel [NIVEL]. Incluye: 5 preguntas de opción múltiple, 3 de verdadero/falso y 2 abiertas. Para cada pregunta indica la respuesta correcta y una breve explicación. Varía la dificultad de fácil a difícil. Que evalúe comprensión real, no solo memoria.",
     en:"Act as an assessment designer. Create a test about [TOPIC] for [LEVEL] level. Include: 5 multiple-choice questions, 3 true/false and 2 open-ended. For each question give the correct answer and a brief explanation. Vary the difficulty from easy to hard. It should assess real understanding, not just memory."}},

{ cat:"education", t:{es:"Resumen de estudio para examen", en:"Study summary for an exam"},
  p:{es:"Eres un tutor experto. Tengo examen de [MATERIA/TEMA] y necesito estudiar. Crea un resumen claro de los puntos más importantes que debo saber, organizado de lo más básico a lo más avanzado. Incluye reglas mnemotécnicas para recordar lo difícil y los 5 conceptos que más suelen preguntar. Hazlo fácil de repasar.",
     en:"You're an expert tutor. I have an exam on [SUBJECT/TOPIC] and need to study. Create a clear summary of the most important points I should know, organized from most basic to most advanced. Include mnemonics to remember the hard parts and the 5 concepts most often asked. Make it easy to review."}},

{ cat:"education", t:{es:"Plan de estudio personalizado", en:"Personalized study plan"},
  p:{es:"Actúa como coach de aprendizaje. Quiero aprender [TEMA/HABILIDAD] y tengo [TIEMPO DISPONIBLE] al día durante [PLAZO]. Diséñame un plan de estudio realista: divídelo por semanas, dime qué aprender en cada etapa, qué practicar, qué recursos buscar y cómo medir mi progreso. Empieza por lo más importante y práctico.",
     en:"Act as a learning coach. I want to learn [TOPIC/SKILL] and I have [AVAILABLE TIME] per day for [TIMEFRAME]. Design a realistic study plan: split it by weeks, tell me what to learn at each stage, what to practice, what resources to look for and how to measure my progress. Start with the most important and practical things."}},

{ cat:"education", t:{es:"Actividad didáctica divertida", en:"Fun learning activity"},
  p:{es:"Eres experto en gamificación educativa. Diseña una actividad divertida y participativa para enseñar [TEMA] a [PÚBLICO/EDAD]. Que sea interactiva, fácil de organizar en un salón o en casa, con materiales sencillos. Explica las reglas, el objetivo pedagógico y cómo mantener la atención. Que aprendan jugando.",
     en:"You're an expert in educational gamification. Design a fun, participatory activity to teach [TOPIC] to [AUDIENCE/AGE]. It should be interactive, easy to organize in a classroom or at home, with simple materials. Explain the rules, the pedagogical goal and how to keep attention. They should learn by playing."}},

{ cat:"education", t:{es:"Retroalimentación para un estudiante", en:"Feedback for a student"},
  p:{es:"Actúa como docente con vocación. Un estudiante entregó este trabajo: \"[TRABAJO/RESPUESTA]\". Dame una retroalimentación constructiva que: reconozca lo que hizo bien, señale con amabilidad lo que debe mejorar, dé sugerencias concretas para crecer y termine motivándolo. Tono respetuoso y alentador, nunca desmoralizante.",
     en:"Act as a dedicated teacher. A student submitted this work: \"[WORK/ANSWER]\". Give me constructive feedback that: acknowledges what they did well, kindly points out what to improve, gives concrete suggestions to grow and ends by motivating them. Respectful, encouraging tone, never demoralizing."}},

{ cat:"education", t:{es:"Convierte un tema en historia", en:"Turn a topic into a story"},
  p:{es:"Eres experto en aprendizaje por narrativa. Convierte el tema [TEMA] en una historia corta y entretenida que ayude a [PÚBLICO] a entenderlo y recordarlo. Usa personajes, una situación y un desenlace que enseñe el concepto sin que parezca una clase. Al final, resume la lección clave de la historia.",
     en:"You're an expert in learning through narrative. Turn the topic [TOPIC] into a short, entertaining story that helps [AUDIENCE] understand and remember it. Use characters, a situation and an ending that teaches the concept without feeling like a class. At the end, summarize the key lesson of the story."}},

{ cat:"education", t:{es:"Preguntas para fomentar pensamiento crítico", en:"Questions to spark critical thinking"},
  p:{es:"Actúa como educador socrático. Sobre el tema [TEMA], dame 10 preguntas que estimulen el pensamiento crítico en [PÚBLICO/NIVEL]. Que no se respondan con un simple sí o no, sino que inviten a analizar, comparar, cuestionar y argumentar. Ordénalas de menor a mayor profundidad. Ideales para debate en clase.",
     en:"Act as a Socratic educator. On the topic [TOPIC], give me 10 questions that spark critical thinking in [AUDIENCE/LEVEL]. They shouldn't be answered with a simple yes or no, but invite analysis, comparison, questioning and argument. Sort them from shallow to deep. Ideal for classroom debate."}},

{ cat:"education", t:{es:"Material de apoyo para padres", en:"Support material for parents"},
  p:{es:"Eres orientador escolar. Crea una guía sencilla para que los padres ayuden a sus hijos con [TEMA/MATERIA] en casa. Incluye: explicación clara del tema en lenguaje de padres, 3 actividades para hacer juntos, errores comunes a evitar y cómo motivar al niño sin presionarlo. Práctica y empática.",
     en:"You're a school counselor. Create a simple guide so parents can help their kids with [TOPIC/SUBJECT] at home. Include: a clear explanation of the topic in parent-friendly language, 3 activities to do together, common mistakes to avoid and how to motivate the child without pressuring them. Practical and empathetic."}},

{ cat:"education", t:{es:"Rúbrica de evaluación", en:"Grading rubric"},
  p:{es:"Actúa como experto en evaluación educativa. Crea una rúbrica para calificar [TIPO DE TRABAJO: ensayo, proyecto, exposición] sobre [TEMA]. Define 4 o 5 criterios claros, cada uno con niveles de desempeño (excelente, bueno, regular, insuficiente) y qué se espera en cada nivel. Que sea justa, clara y fácil de aplicar.",
     en:"Act as an educational assessment expert. Create a rubric to grade [WORK TYPE: essay, project, presentation] about [TOPIC]. Define 4 or 5 clear criteria, each with performance levels (excellent, good, fair, insufficient) and what's expected at each level. It should be fair, clear and easy to apply."}},

{ cat:"education", t:{es:"Mapa conceptual de un tema", en:"Concept map of a topic"},
  p:{es:"Eres experto en organización del conocimiento. Crea la estructura de un mapa conceptual sobre [TEMA]. Identifica el concepto central, los conceptos principales que se derivan, los subconceptos de cada uno y cómo se conectan entre sí. Preséntalo de forma jerárquica y clara para que sirva de guía de estudio.",
     en:"You're a knowledge-organization expert. Create the structure of a concept map about [TOPIC]. Identify the central concept, the main concepts that derive from it, the subconcepts of each and how they connect. Present it hierarchically and clearly so it works as a study guide."}},

{ cat:"education", t:{es:"Adapta contenido para distintos niveles", en:"Adapt content for different levels"},
  p:{es:"Actúa como diseñador instruccional. Toma el tema [TEMA] y explícamelo en 3 versiones: una para principiantes (sencilla), una para nivel intermedio (con más detalle) y una avanzada (técnica y profunda). Así puedo enseñar al público correcto según su nivel. Marca claramente cada versión.",
     en:"Act as an instructional designer. Take the topic [TOPIC] and explain it to me in 3 versions: one for beginners (simple), one intermediate (more detailed) and one advanced (technical and deep). That way I can teach the right audience based on their level. Clearly label each version."}},

{ cat:"education", t:{es:"Idea de proyecto escolar", en:"School project idea"},
  p:{es:"Eres profesor creativo. Propón 5 ideas de proyectos para que estudiantes de [NIVEL] aprendan sobre [TEMA] haciendo. Para cada idea: en qué consiste, qué aprenden, materiales, tiempo estimado y cómo presentarlo. Que sean realizables, motivadores y conecten el tema con la vida real. Marca tu favorito.",
     en:"You're a creative teacher. Suggest 5 project ideas for [LEVEL] students to learn about [TOPIC] by doing. For each idea: what it involves, what they learn, materials, estimated time and how to present it. They should be doable, motivating and connect the topic to real life. Mark your favorite."}},

{ cat:"education", t:{es:"Técnica de memorización", en:"Memorization technique"},
  p:{es:"Actúa como experto en técnicas de memoria. Necesito memorizar [QUÉ NECESITAS MEMORIZAR]. Enséñame la mejor técnica para lograrlo (palacio de la memoria, asociación, acrónimos, etc.), aplicándola directamente a mi caso con un ejemplo concreto. Explícame paso a paso cómo usarla y cómo repasar para no olvidar.",
     en:"Act as a memory-technique expert. I need to memorize [WHAT YOU NEED TO MEMORIZE]. Teach me the best technique to do it (memory palace, association, acronyms, etc.), applying it directly to my case with a concrete example. Explain step by step how to use it and how to review so I don't forget."}},

{ cat:"education", t:{es:"Guion para clase en video", en:"Script for a video class"},
  p:{es:"Eres creador de contenido educativo. Escribe el guion de un video corto (5 minutos) para enseñar [TEMA] a [PÚBLICO]. Estructura: gancho inicial que despierte curiosidad, explicación clara con ejemplos, un punto clave a recordar y un cierre con una tarea o reflexión. Indica qué decir y qué mostrar en pantalla.",
     en:"You're an educational content creator. Write the script of a short video (5 minutes) to teach [TOPIC] to [AUDIENCE]. Structure: an opening hook that sparks curiosity, a clear explanation with examples, a key takeaway and a closing with a task or reflection. Indicate what to say and what to show on screen."}},

{ cat:"education", t:{es:"Resuelve y explica un ejercicio", en:"Solve and explain an exercise"},
  p:{es:"Actúa como tutor paciente. Resuelve este ejercicio paso a paso: \"[EJERCICIO]\". No solo des el resultado: explica cada paso, por qué se hace así, dónde suele equivocarse la gente y cómo verificar que la respuesta está bien. Al final, dame un ejercicio parecido para que yo practique.",
     en:"Act as a patient tutor. Solve this exercise step by step: \"[EXERCISE]\". Don't just give the result: explain each step, why it's done that way, where people usually go wrong and how to verify the answer is right. At the end, give me a similar exercise to practice."}},

{ cat:"education", t:{es:"Dinámica para romper el hielo", en:"Icebreaker activity"},
  p:{es:"Eres facilitador educativo. Dame 5 dinámicas para romper el hielo al inicio de una clase o taller sobre [TEMA] con [PÚBLICO]. Que sean rápidas (5-10 min), generen participación, conecten con el tema y creen un buen ambiente. Para cada una explica cómo hacerla y qué se logra.",
     en:"You're an educational facilitator. Give me 5 icebreaker activities for the start of a class or workshop about [TOPIC] with [AUDIENCE]. They should be quick (5-10 min), drive participation, connect to the topic and create a good atmosphere. For each, explain how to do it and what it achieves."}},

{ cat:"education", t:{es:"Carta de presentación académica", en:"Academic cover letter"},
  p:{es:"Actúa como asesor académico. Ayúdame a escribir una carta de motivación para [BECA/UNIVERSIDAD/PROGRAMA] en el área de [ÁREA]. Que destaque mi interés genuino, mis fortalezas, por qué soy buen candidato y mis metas. Tono profesional pero auténtico, que conecte con quien la lea. Pídeme los datos que necesites.",
     en:"Act as an academic advisor. Help me write a motivation letter for [SCHOLARSHIP/UNIVERSITY/PROGRAM] in the field of [FIELD]. It should highlight my genuine interest, my strengths, why I'm a good candidate and my goals. Professional but authentic tone that connects with the reader. Ask me for any data you need."}},

{ cat:"education", t:{es:"Glosario de términos clave", en:"Glossary of key terms"},
  p:{es:"Eres experto en material didáctico. Crea un glosario de los 15 términos más importantes del tema [TEMA] para estudiantes de [NIVEL]. Para cada término: una definición clara y sencilla, y un ejemplo de uso en contexto. Ordénalos de forma lógica (no alfabética) para que faciliten la comprensión del tema.",
     en:"You're an expert in educational materials. Create a glossary of the 15 most important terms of the topic [TOPIC] for [LEVEL] students. For each term: a clear, simple definition and an example of use in context. Order them logically (not alphabetically) to aid understanding of the topic."}},

// ==========================================================
//  SALUD Y BIENESTAR (20)
//  Enfoque: apoyo a profesionales, educación al paciente,
//  hábitos y bienestar. NO diagnóstico ni tratamiento.
// ==========================================================
{ cat:"health", t:{es:"Material educativo para pacientes", en:"Educational material for patients"},
  p:{es:"Actúa como comunicador en salud. Crea un material educativo claro y sencillo para explicar a pacientes qué es [CONDICIÓN/TEMA DE SALUD], en lenguaje fácil de entender, sin tecnicismos. Incluye: qué es, hábitos que ayudan, señales de cuándo consultar al médico y preguntas frecuentes. Importante: aclara que no reemplaza la consulta médica profesional.",
     en:"Act as a health communicator. Create clear, simple educational material to explain to patients what [CONDITION/HEALTH TOPIC] is, in easy-to-understand language, without jargon. Include: what it is, helpful habits, signs of when to see a doctor and FAQs. Important: clarify it doesn't replace professional medical consultation."}},

{ cat:"health", t:{es:"Plan de hábitos saludables", en:"Healthy habits plan"},
  p:{es:"Eres coach de bienestar. Ayúdame a crear un plan realista de hábitos saludables para alguien con un estilo de vida [DESCRIBE: sedentario, muy ocupado, etc.]. Incluye pequeños cambios graduales en alimentación, movimiento, descanso e hidratación, fáciles de mantener. Enfócate en el progreso sostenible, no en cambios extremos. Aclara que ante condiciones médicas se debe consultar a un profesional.",
     en:"You're a wellness coach. Help me create a realistic healthy-habits plan for someone with a [DESCRIBE: sedentary, very busy, etc.] lifestyle. Include small, gradual changes in nutrition, movement, rest and hydration that are easy to keep. Focus on sustainable progress, not extreme changes. Clarify that for medical conditions a professional should be consulted."}},

{ cat:"health", t:{es:"Organiza la agenda de un consultorio", en:"Organize a clinic's schedule"},
  p:{es:"Actúa como administrador de consultorios médicos. Ayúdame a organizar la agenda de citas de mi consultorio de [ESPECIALIDAD]. Dame un sistema para distribuir las citas eficientemente, reducir tiempos de espera, manejar urgencias y recordatorios a pacientes. Práctico y aplicable para un consultorio pequeño en Colombia.",
     en:"Act as a medical office administrator. Help me organize the appointment schedule for my [SPECIALTY] clinic. Give me a system to distribute appointments efficiently, reduce wait times, handle emergencies and patient reminders. Practical and applicable for a small clinic."}},

{ cat:"health", t:{es:"Mensajes de recordatorio de citas", en:"Appointment reminder messages"},
  p:{es:"Eres experto en comunicación con pacientes. Escribe 5 mensajes de recordatorio de citas médicas para enviar por WhatsApp, con tono cordial y profesional. Que incluyan la importancia de asistir, qué llevar, y cómo reagendar si no pueden. Que reduzcan las inasistencias sin sonar fríos. Cortos y claros.",
     en:"You're an expert in patient communication. Write 5 medical appointment reminder messages to send via WhatsApp, with a cordial, professional tone. Include the importance of attending, what to bring, and how to reschedule if they can't. They should reduce no-shows without sounding cold. Short and clear."}},

{ cat:"health", t:{es:"Contenido de bienestar para redes", en:"Wellness content for social media"},
  p:{es:"Actúa como creador de contenido de salud y bienestar. Dame 10 ideas de publicaciones para redes sociales sobre hábitos saludables y bienestar para [PÚBLICO]. Que sean informativas, motivadoras y basadas en recomendaciones generales seguras (no consejos médicos específicos). Para cada idea, el gancho y el mensaje principal.",
     en:"Act as a health and wellness content creator. Give me 10 social media post ideas about healthy habits and wellness for [AUDIENCE]. They should be informative, motivating and based on safe general recommendations (not specific medical advice). For each idea, the hook and the main message."}},

{ cat:"health", t:{es:"Guía de alimentación balanceada", en:"Balanced eating guide"},
  p:{es:"Eres educador en nutrición general. Crea una guía sencilla de alimentación balanceada para una persona promedio sana que quiere comer mejor. Explica el plato saludable, porciones, alimentos a incluir más seguido y a moderar, y consejos prácticos para el día a día con comida local y económica. Aclara que para necesidades específicas o condiciones de salud se debe consultar a un nutricionista.",
     en:"You're a general nutrition educator. Create a simple balanced-eating guide for an average healthy person who wants to eat better. Explain the healthy plate, portions, foods to include more often and to moderate, and practical day-to-day tips with local, affordable food. Clarify that for specific needs or health conditions a nutritionist should be consulted."}},

{ cat:"health", t:{es:"Rutina de ejercicio para principiantes", en:"Beginner exercise routine"},
  p:{es:"Actúa como instructor de actividad física. Diseña una rutina de ejercicio suave para una persona sana principiante que quiere empezar a moverse más, sin equipo y en casa. Incluye calentamiento, ejercicios básicos con repeticiones moderadas, estiramiento y progresión por semanas. Enfócate en la constancia y la técnica segura. Recomienda consultar al médico antes de iniciar si hay alguna condición.",
     en:"Act as a physical activity instructor. Design a gentle exercise routine for a healthy beginner who wants to start moving more, with no equipment and at home. Include warm-up, basic exercises with moderate reps, stretching and weekly progression. Focus on consistency and safe technique. Recommend consulting a doctor before starting if there's any condition."}},

{ cat:"health", t:{es:"Técnicas de manejo del estrés", en:"Stress management techniques"},
  p:{es:"Eres facilitador de bienestar emocional. Explícame 7 técnicas prácticas y seguras para manejar el estrés del día a día (respiración, pausas, organización, etc.). Para cada una: cómo hacerla paso a paso y cuándo usarla. Que sean fáciles de aplicar en cualquier momento. Aclara que ante malestar emocional persistente es importante buscar apoyo de un profesional de salud mental.",
     en:"You're an emotional wellness facilitator. Explain 7 practical, safe techniques to manage everyday stress (breathing, breaks, organization, etc.). For each: how to do it step by step and when to use it. They should be easy to apply anytime. Clarify that for persistent emotional distress it's important to seek support from a mental health professional."}},

{ cat:"health", t:{es:"Folleto informativo de prevención", en:"Prevention information leaflet"},
  p:{es:"Actúa como educador en salud pública. Crea el contenido de un folleto informativo sobre la prevención de [TEMA DE SALUD GENERAL: ej. deshidratación, golpe de calor, higiene]. Incluye: qué es, cómo prevenirlo, señales de alerta y cuándo buscar atención médica. Lenguaje claro para el público general. Basado en recomendaciones generales seguras.",
     en:"Act as a public health educator. Create the content of an information leaflet about preventing [GENERAL HEALTH TOPIC: e.g. dehydration, heat stroke, hygiene]. Include: what it is, how to prevent it, warning signs and when to seek medical care. Clear language for the general public. Based on safe general recommendations."}},

{ cat:"health", t:{es:"Comunicar malas noticias con empatía", en:"Communicate bad news with empathy"},
  p:{es:"Eres experto en comunicación clínica. Ayúdame a preparar cómo comunicar con empatía una noticia difícil a un paciente o familiar sobre [SITUACIÓN GENERAL]. Dame una guía de qué decir, el tono adecuado, cómo manejar las emociones de la persona y qué evitar. Enfócate en la calidez humana y el respeto. (Apoyo de comunicación, no contenido médico específico.)",
     en:"You're a clinical communication expert. Help me prepare how to empathetically communicate difficult news to a patient or family member about [GENERAL SITUATION]. Give me a guide on what to say, the right tone, how to handle the person's emotions and what to avoid. Focus on human warmth and respect. (Communication support, not specific medical content.)"}},

{ cat:"health", t:{es:"Plan de bienestar laboral", en:"Workplace wellness plan"},
  p:{es:"Actúa como consultor de bienestar organizacional. Diseña un plan sencillo de bienestar para los empleados de [TIPO DE EMPRESA]. Incluye: pausas activas, manejo del estrés, ergonomía básica, hábitos saludables en la jornada y actividades de integración. Práctico, de bajo costo y aplicable. Enfocado en mejorar el ambiente y la salud general del equipo.",
     en:"Act as an organizational wellness consultant. Design a simple wellness plan for the employees of [COMPANY TYPE]. Include: active breaks, stress management, basic ergonomics, healthy habits during the workday and team-building activities. Practical, low-cost and applicable. Focused on improving the team's environment and general health."}},

{ cat:"health", t:{es:"Educación sobre el sueño", en:"Sleep education"},
  p:{es:"Eres educador en higiene del sueño. Crea una guía clara con recomendaciones generales para dormir mejor: rutina antes de dormir, ambiente ideal, hábitos a evitar y cómo crear un horario regular. Práctica para una persona sana con problemas leves de sueño por malos hábitos. Aclara que ante insomnio persistente se debe consultar a un profesional de salud.",
     en:"You're a sleep hygiene educator. Create a clear guide with general recommendations to sleep better: pre-sleep routine, ideal environment, habits to avoid and how to create a regular schedule. Practical for a healthy person with mild sleep issues due to bad habits. Clarify that for persistent insomnia a health professional should be consulted."}},

{ cat:"health", t:{es:"Mensajes motivacionales de salud", en:"Motivational health messages"},
  p:{es:"Actúa como coach de hábitos. Escribe 10 mensajes cortos y motivadores para animar a las personas a cuidar su salud y mantener hábitos saludables (moverse, hidratarse, descansar, alimentarse bien). Que sean positivos, cercanos y que inspiren acción sin culpar ni asustar. Ideales para redes o recordatorios.",
     en:"Act as a habits coach. Write 10 short, motivating messages to encourage people to take care of their health and keep healthy habits (move, hydrate, rest, eat well). They should be positive, warm and inspire action without blaming or scaring. Ideal for social media or reminders."}},

{ cat:"health", t:{es:"Preguntas para entender al paciente", en:"Questions to understand the patient"},
  p:{es:"Eres experto en atención centrada en la persona. Dame una lista de preguntas empáticas que un profesional de salud puede hacer para entender mejor el contexto y las preocupaciones de un paciente en una consulta de [ÁREA]. Que ayuden a generar confianza y a que el paciente se sienta escuchado. (Apoyo a la comunicación, no a diagnóstico.)",
     en:"You're an expert in person-centered care. Give me a list of empathetic questions a health professional can ask to better understand a patient's context and concerns in a [AREA] consultation. They should build trust and make the patient feel heard. (Communication support, not diagnosis.)"}},

{ cat:"health", t:{es:"Guía de primeros auxilios básicos", en:"Basic first aid guide"},
  p:{es:"Actúa como educador en primeros auxilios. Crea una guía básica y clara de qué hacer ante [SITUACIÓN COMÚN: ej. una cortada leve, un desmayo, atragantamiento] mientras llega ayuda profesional. Pasos sencillos y seguros para el público general, qué NO hacer, y cuándo llamar a emergencias. Basado en recomendaciones estándar de primeros auxilios. Recalca llamar a emergencias en casos graves.",
     en:"Act as a first aid educator. Create a basic, clear guide on what to do in case of [COMMON SITUATION: e.g. a minor cut, a fainting, choking] while professional help arrives. Simple, safe steps for the general public, what NOT to do, and when to call emergency services. Based on standard first aid recommendations. Emphasize calling emergencies in serious cases."}},

{ cat:"health", t:{es:"Campaña de concientización en salud", en:"Health awareness campaign"},
  p:{es:"Eres estratega de salud pública. Diseña una campaña de concientización sobre [TEMA DE SALUD: ej. importancia de la hidratación, actividad física, salud mental]. Incluye: mensaje central, público objetivo, 3 piezas de contenido, canales para difundir y llamada a la acción. Que eduque e inspire hábitos saludables de forma positiva.",
     en:"You're a public health strategist. Design an awareness campaign about [HEALTH TOPIC: e.g. importance of hydration, physical activity, mental health]. Include: core message, target audience, 3 content pieces, channels to distribute and a call to action. It should educate and inspire healthy habits positively."}},

{ cat:"health", t:{es:"Explica un examen o procedimiento", en:"Explain a test or procedure"},
  p:{es:"Actúa como comunicador en salud. Explica de forma clara y tranquilizadora en qué consiste [EXAMEN/PROCEDIMIENTO GENERAL], para que un paciente entienda qué esperar: cómo prepararse, qué se siente, cuánto dura y qué hacer después. Lenguaje sencillo que reduzca el miedo. Aclara que las indicaciones específicas las da su médico tratante.",
     en:"Act as a health communicator. Clearly and reassuringly explain what [GENERAL TEST/PROCEDURE] involves, so a patient understands what to expect: how to prepare, what it feels like, how long it takes and what to do after. Simple language that reduces fear. Clarify that specific instructions come from their treating doctor."}},

{ cat:"health", t:{es:"Rutina de autocuidado", en:"Self-care routine"},
  p:{es:"Eres facilitador de bienestar integral. Diseña una rutina de autocuidado semanal sencilla para una persona con vida ocupada que quiere cuidar su salud física y emocional. Incluye momentos de descanso, movimiento, conexión social, desconexión digital y algo que disfrute. Realista y sostenible, con pequeños hábitos diarios.",
     en:"You're a holistic wellness facilitator. Design a simple weekly self-care routine for a busy person who wants to care for their physical and emotional health. Include moments of rest, movement, social connection, digital disconnection and something they enjoy. Realistic and sustainable, with small daily habits."}},

{ cat:"health", t:{es:"Información sobre vacunación", en:"Vaccination information"},
  p:{es:"Actúa como educador en salud pública. Crea un contenido informativo claro sobre la importancia de la vacunación para [PÚBLICO: ej. niños, adultos mayores], basado en recomendaciones generales de salud pública. Explica por qué es importante, mitos comunes aclarados con respeto, y dónde informarse o acceder a vacunas. Tono educativo y confiable.",
     en:"Act as a public health educator. Create clear informational content about the importance of vaccination for [AUDIENCE: e.g. children, older adults], based on general public health recommendations. Explain why it matters, common myths respectfully clarified, and where to get informed or access vaccines. Educational, trustworthy tone."}},

{ cat:"health", t:{es:"Apoyo para hablar de salud mental", en:"Support for talking about mental health"},
  p:{es:"Eres facilitador en bienestar emocional. Ayúdame a crear contenido que normalice hablar de salud mental y anime a [PÚBLICO] a buscar apoyo cuando lo necesiten. Incluye: por qué es importante cuidar la mente, cómo identificar cuándo pedir ayuda, y dónde buscar apoyo profesional. Mensaje cálido, empático y sin estigma. Recalca la importancia de acudir a profesionales de salud mental.",
     en:"You're an emotional wellness facilitator. Help me create content that normalizes talking about mental health and encourages [AUDIENCE] to seek support when they need it. Include: why caring for the mind matters, how to identify when to ask for help, and where to find professional support. Warm, empathetic, stigma-free message. Emphasize the importance of seeing mental health professionals."}},

];
