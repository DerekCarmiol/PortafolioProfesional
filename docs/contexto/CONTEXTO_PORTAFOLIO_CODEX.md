# Portafolio web profesional — especificación consolidada para Codex

**Titular:** Derek Alessandro Carmiol Achio (marca pública: Derek Carmiol)  
**Curso:** Portafolio Profesional — Universidad CENFOTEC  
**Fecha de consolidación:** 24 de noviembre de 2026  
**Alcance:** proyecto web final, no trabajos de clase ni examen de investigación.

## 0. Instrucciones para Codex

Construye desde cero un portafolio profesional laboral, bilingüe, responsive, interactivo y accesible. Usa este documento y los archivos originales adjuntos como contexto. Prioriza (1) requisitos oficiales y rúbrica, (2) decisiones posteriores explícitas del usuario, (3) CV finales del 30 de octubre, (4) Tarea 2 y guía gráfica, (5) propuestas técnicas de Tarea 1. No copies una plantilla completa ni inventes proyectos, experiencia, certificaciones, enlaces o resultados. Si falta un archivo, deja una configuración pendiente y documenta cómo completarla. No uses información de ejemplo ni retratos generados de la guía visual como si fueran fotografías reales. Comprueba el repositorio antes de modificarlo; preserva archivos existentes que sean válidos.

Este documento es una reconstrucción consolidada, no una copia exacta de la Tarea 1 ni sustituto de los PDF originales. Se distingue entre requisitos oficiales, decisiones recuperadas y propuestas de implementación.

## 1. Requisitos oficiales — proyecto Portafolio Web Interactivo (30 puntos)

Fuente: `Trabajos del curso(2).pdf`, pp. 1, 3, 5–6, 8–9 y especialmente 13–16. La lista siguiente conserva los 20 requisitos del proyecto final en forma operativa.

1. Apariencia innovadora.
2. Calidad del trabajo sujeta a evaluación exclusiva del docente (5 puntos).
3. Incorporar favicon de la identidad web.
4. Elegir enfoque laboral o freelance, nunca mixto. Para este proyecto: laboral.
5. La herramienta tecnológica debe contar con aprobación del docente antes de desarrollar; aprobación no verificada en el contexto disponible.
6. Usar cinco secciones de contenido, sin contar encabezado y pie de página.
7. Exponer el sitio mediante enlace remoto.
8. Aplicar la identidad web creada durante el curso. Aunque el documento oficial emplea «imagen web freelance», aquí corresponde la marca personal del portafolio laboral.
9. Galería interactiva con trabajos individuales o grupales, título de cada producto, descripción y tecnologías aplicadas.
10. Transiciones o animaciones sutiles.
11. Formulario de contacto programado en JavaScript o PHP, utilizando una librería web.
12. Chat de WhatsApp de contacto.
13. Botón ScrollTop para regresar a la parte superior.
14. Botón de descarga de CV digital PDF (ATS o visual).
15. Control programado en la parte superior para cambiar de español a inglés y viceversa.
16. Desarrollo desde cero, sin plantillas web 100 % listas. Optimizar velocidad y creatividad.
17. Preparar TXT con URL del portafolio publicado y URL del repositorio para Moodle.
18. Guardar los archivos del sitio en la carpeta `proyecto` del repositorio del curso.
19. Crear con IA una imagen promocional del sitio, guardada como `promo.png`, para presentarla en la exposición.
20. Exponer el portafolio al grupo.

Además: publicar con Vercel o GitHub Pages, facilitar un avance remoto al profesor, cuidar UX/UI, accesibilidad y responsividad. Si se usa Bootstrap, el CSS del framework debe cargarse desde la nube; el stack elegido no necesita Bootstrap. El repositorio del curso debe contemplar `tarea1`, `tarea2`, `tarea3`, `quiz`, `examen`, `proyecto`. En caso de ausencia justificada de la exposición se solicita MP4 explicativo; no es una funcionalidad del sitio.

### Rúbrica literal en conceptos y valores

| Criterio | Puntos |
|---|---:|
| Responsividad | 1 |
| Paleta 60-30-10 | 1 |
| Secciones web de contenido | 2 |
| Enlaces a 2 espacios digitales | 2 |
| Ilustraciones web SVG | 1 |
| Botón de descarga de CV PDF | 2 |
| Chat WhatsApp | 2 |
| Formulario de contacto programado | 2 |
| Conversión español-inglés | 2 |
| Botón ScrollTop | 1 |
| Galería interactiva | 1 |
| Transición o animación | 1 |
| Elementos interactivos | 1 |
| Animación web JSON | 1 |
| Exposición | 2 |
| Enlace remoto | 1 |
| Imagen promocional | 2 |
| Análisis exclusivo del docente | 5 |
| Total | 30 |

No olvidar las ilustraciones SVG y la animación JSON: aparecen expresamente en la rúbrica aunque no estén detalladas en la lista de 20 instrucciones.

## 2. Tarea 1 — decisiones recuperadas de planificación

- **Enfoque:** exclusivamente laboral. Público: reclutadores, empresas de tecnología y equipos de desarrollo. Meta: primera oportunidad profesional o práctica, no vender paquetes freelance.
- **Estilo:** one-page, navegación por anclas y experiencia fluida.
- **Fortaleza técnica:** frontend; lenguaje preferido Java. Demostrar calidad de interfaz, diseño responsive, interactividad y capacidad de desarrollar soluciones.
- **Fortalezas humanas:** perseverancia, responsabilidad, adaptabilidad y aprendizaje continuo.
- **Stack planificado:** Next.js (React), TypeScript, Tailwind CSS, HTML5, CSS3 y JavaScript; Git y GitHub; VS Code; despliegue en Vercel. Figma puede utilizarse para prototipar. No se ha verificado una aprobación formal del docente.
- **Contenido previsto inicialmente:** Inicio, Sobre mí, Habilidades, Proyectos, Formación/Experiencia, Currículum y Contacto. Se ajusta abajo a cinco secciones para cumplir la rúbrica.
- **Galería:** mínimo cinco proyectos identificados en Tarea 1. Los tres proyectos de los CV finales tienen prioridad. Otros candidatos se indican en la sección 6. La pregunta 10 original había quedado pendiente y no se encontró una lista definitiva completa de cinco proyectos aprobada por el usuario.
- **Calidad:** navegación intuitiva, diseño profesional y moderno, carga rápida, responsive, legibilidad, accesibilidad, descripción clara de los trabajos, contacto fácil y enlaces profesionales.

### Arquitectura propuesta para cumplir los cinco apartados oficiales

Esta agrupación es una decisión de implementación de esta consolidación, no una selección previa confirmada por el usuario. Encabezado y footer no cuentan como secciones.

| ID | Español | English | Contenido |
|---|---|---|---|
| `inicio` | Inicio | Home | Nombre, perfil, slogan, logo, fondo y CTA hacia proyectos y CV. |
| `sobre-mi` | Sobre mí | About | Biografía, fortalezas, formación, idiomas, certificación B2+, misión, visión y valores. |
| `habilidades` | Habilidades | Skills | Lenguajes, frameworks, bases de datos, herramientas y competencias personales. |
| `proyectos` | Proyectos | Projects | Galería interactiva, fichas, descripción, tecnologías y enlaces reales si existen. |
| `contacto` | Contacto | Contact | Formulario funcional, email, WhatsApp, GitHub, LinkedIn y descarga CV. |

Encabezado: marca DC, navegación, selector ES/EN y menú móvil. Footer: marca, enlaces de contacto y navegación básica. El CV y la formación se integran dentro de las cinco secciones en lugar de crear secciones principales adicionales. Las CTA deben funcionar, no ser decorativas.

## 3. Tarea 2 — identidad visual vigente

Fuente: `Tarea2_Identidad_Visual_Web_Derek_Carmiol.docx`, pp. 3–6, corrección de colores del 1 de octubre y `Guía de Marca Digital Derek Carmiol.png`.

### Paleta definitiva (sustituye por completo la propuesta azul/cian inicial del Word)

| Proporción | Color | HEX | Uso |
|---|---|---|---|
| 60 % | Gris oscuro | `#2B2B2B` | Fondo, navegación y áreas predominantes |
| 30 % | Blanco | `#FFFFFF` | Texto sobre oscuro, tarjetas y superficies secundarias |
| 10 % | Rojo intenso | `#E63946` | CTA, enlaces, detalles y acentos |

Mantener predominio oscuro y contraste legible. Usar un tono rojo derivado o texto oscuro cuando sea necesario para que el texto de botones cumpla contraste WCAG AA; no alterar los tres colores base de la marca. Evitar exceso de rojo, brillos o efectos que dificulten lectura.

### Tipografías

- Word original de Tarea 2: Poppins SemiBold/Bold para títulos; Inter Regular/Medium para párrafos.
- Guía gráfica posterior (1 de octubre): Montserrat para títulos; Inter para párrafos.
- **Resolución propuesta para Codex:** usar Montserrat + Inter, coherente con la guía gráfica posterior; Poppins es la propuesta anterior documentada. Mantener fácil de cambiar si el titular prefiere la versión original. Esta elección no se presenta como una confirmación explícita adicional del usuario.

### Slogan y estilo

- ES (documento original y guía gráfica): **Construyendo soluciones, aprendiendo constantemente.**
- EN (traducción propuesta): **Building solutions, learning continuously.**
- Logotipo: monograma DC entrelazado rojo, acompañado de DEREK CARMIOL y DESARROLLADOR WEB en el archivo original. Conservar el arte original; en el texto de la web el cargo actualizado es Desarrollador de software / Software Developer.
- El docente exige logo vectorial; el archivo recuperado del chat es PNG. Solicitar SVG original y favicon existente al usuario. No confundir una imagen raster con un vector real; no reemplazar el logo de marca por otro inventado.
- Fondo: composición tecnológica oscura con diagonales rojas y gris/negro, espacio para contenido y contraste.
- Referencia gráfica: cabecera oscura, acentos rojos, CTA, navegación simple, responsive, iconografía lineal, tarjetas claras/oscuro según contraste. La guía incluye un retrato ilustrativo y contacto de ejemplo: no publicar ninguno de ellos como real.

### Misión, visión y valores (texto recuperado de la Tarea 2)

**Misión ES:** Desarrollar mis habilidades como ingeniero de software mediante la creación de soluciones tecnológicas útiles, funcionales y de calidad, aplicando mis conocimientos y manteniendo una actitud de aprendizaje continuo.

**Visión ES:** Convertirme en un profesional de Ingeniería del Software con experiencia sólida en desarrollo de aplicaciones, capaz de participar en proyectos tecnológicos de impacto, asumir nuevos retos y continuar creciendo junto con la evolución de la industria.

**Mission EN (traducción propuesta):** To develop my software engineering skills by creating useful, functional, high-quality technology solutions, applying my knowledge and maintaining a continuous learning mindset.

**Vision EN (traducción propuesta):** To become a software engineering professional with solid application development experience, capable of contributing to impactful technology projects, taking on new challenges, and growing with the industry.

| Valor ES | Value EN | Significado |
|---|---|---|
| Perseverancia | Perseverance | Constancia para alcanzar objetivos. |
| Responsabilidad | Responsibility | Cumplir compromisos y asumir decisiones. |
| Aprendizaje continuo | Continuous learning | Apertura a nuevos conocimientos. |
| Adaptabilidad | Adaptability | Responder a cambios y tecnologías nuevas. |
| Trabajo en equipo | Teamwork | Escuchar, colaborar y aportar soluciones. |
| Compromiso | Commitment | Actitud responsable hacia proyectos y metas. |

## 4. Perfil profesional y datos de contacto

Fuentes: CV ATS y visual ES/EN finales del 30 de octubre de 2026. Usar estos datos por encima de los campos de ejemplo del Word y guía visual.

- Marca: Derek Carmiol.
- Cargo ES: Desarrollador de software. EN: Software Developer.
- Ubicación: Desamparados, Alajuela, Costa Rica.
- Email: derek.carmiol@gmail.com
- Teléfono / WhatsApp: +506 8486-3394. Enlace: `https://wa.me/50684863394` (formato derivado del número; verificar que la cuenta sea la correcta antes de publicar).
- LinkedIn: `https://www.linkedin.com/in/derekcarmiol`
- GitHub: `https://github.com/DerekCarmiol`
- URL del sitio y URL del repositorio específico: pendientes; no inventar.
- Formación: Bachillerato en Ingeniería del Software, Universidad CENFOTEC, en curso desde 2022. Liceo Regional de Flores, 2021.
- Español nativo; inglés intermedio alto, certificación B2+. Entidad emisora y fecha no recuperadas; no inventarlas.
- Experiencia laboral formal: ninguna indicada. No mostrar años de experiencia laboral, cargos ni empresas ficticias. Presentar proyectos como académicos o personales según corresponda.

**Perfil ES (CV final):** Desarrollador de software con formación académica en Ingeniería del Software en la Universidad CENFOTEC. Cuenta con conocimientos en desarrollo frontend y programación con Java, C# y JavaScript, así como en desarrollo web y bases de datos. Se caracteriza por su perseverancia, responsabilidad y adaptabilidad, con interés en seguir fortaleciendo sus habilidades y aportar soluciones mediante el trabajo colaborativo.

**Profile EN (CV final):** Software developer with an academic background in Software Engineering from Universidad CENFOTEC. Knowledgeable in frontend development and programming with Java, C#, and JavaScript, as well as web development and databases. Recognized for perseverance, responsibility, and adaptability, with a strong interest in continuous learning and contributing to solutions through collaborative work.

Para el hero se puede adaptar a primera persona y usar una versión breve de estos textos. No presentar al titular como graduado: los estudios están en curso. El foco profesional es conseguir empleo, no una tienda de servicios freelance.

## 5. Habilidades — CV final como referencia principal

| Categoría | Tecnologías / competencias |
|---|---|
| Lenguajes | Java, C#, JavaScript, HTML5, CSS3 |
| Frameworks y tecnologías | .NET, React, Angular, Spring Boot |
| Bases de datos | SQL, SQL Server |
| Herramientas | Git, GitHub, Visual Studio |
| Personales | Perseverancia, responsabilidad, adaptabilidad, aprendizaje continuo, trabajo en equipo y resolución de problemas |

Otros conocimientos documentados por proyectos anteriores: Java OOP, estructuras de datos, Java Swing, MySQL, ASP.NET, REST, Swagger, JWT, Entity Framework. Diferenciar habilidades confirmadas por CV y tecnologías usadas en proyectos/stack de este sitio. No inventar porcentajes de dominio ni afirmar nivel experto.

## 6. Galería de proyectos

### Tres proyectos confirmados en los CV finales (prioridad)

**1. Plataforma de gestión veterinaria / Veterinary Management Platform**
- ES (CV): Desarrollo de un sistema integral para veterinarias con funcionalidades de gestión de citas, clientes, mascotas, servicios y manejo de datos.
- EN (CV): Developed a comprehensive system for veterinary clinics, including appointment, client, pet, and service management, as well as data handling.
- Contexto académico relacionado: Java OOP, Swing, MySQL; gestión de citas y hotel de mascotas. Confirmar que este sistema corresponde exactamente a la versión final antes de atribuir todas las tecnologías.
- No se recuperó enlace o captura específica.

**2. Sistema de gestión de torneos de esports / Esports Tournament Management System**
- ES (CV): Desarrollo de una plataforma para crear y administrar torneos de videojuegos, con gestión de participantes, equipos, competencias y datos.
- EN (CV): Developed a platform to create and manage video game tournaments, including participant, team, competition, and data management.
- Stack, repositorio y capturas: pendientes de verificar.

**3. Proyecto de billetera digital / Digital Wallet Project**
- ES (CV): Desarrollo académico de una solución de gestión de billeteras, con trabajo sobre la capa de acceso a datos y exploración de integración con MetaMask.
- EN (CV): Academic development of a digital wallet management solution, working on the data access layer and exploring MetaMask integration.
- Contexto: .NET/C#, Entity Framework, acceso a datos, MetaMask (integración explorada, no afirmar implementación productiva completa sin evidencia).
- Repositorio, demo y capturas: pendientes.

### Candidatos adicionales recuperados del historial académico — confirmar selección y detalles

Se necesitan al menos cinco proyectos identificados para la galería según Tarea 1. Se proponen los dos siguientes para completar cinco, sin afirmar que fueron elegidos definitivamente:

**4. API EBAIS / EBAIS API** — API académica en ASP.NET/.NET y C#, autenticación JWT, SQL Server y documentación/pruebas mediante Swagger. EN: Academic healthcare-related REST API using .NET, JWT authentication, SQL Server and Swagger. No mostrar datos reales de pacientes.

**5. Sistema de gestión universitaria / University Management System** — Java; árboles binarios de búsqueda para estudiantes y profesores, listas enlazadas de cursos y cola de atención con prioridad, validación de asignaciones y excepciones personalizadas. EN: Academic Java system implementing binary search trees, linked lists, priority-based service queues and course assignment validation.

Alternativas si el titular las prefiere: Transmideo (SQL, consultas y reportes de películas, series, documentales y reproducciones/descargas); API RH (ASP.NET, C#, REST, integración con servicio externo y DTO). La planificación también menciona un proyecto personal, sin selección definitiva recuperada. No crear nombres ni funcionalidades ficticias para rellenar la galería.

### Diseño e interacción de la galería

Cada proyecto: título ES/EN, descripción, problema, funciones verificadas, tecnologías verificadas, rol si conocido, imagen auténtica o ilustración abstracta claramente identificada, repositorio y demo solo cuando existan. Usar tarjetas con apertura de detalle o filtros funcionales, navegación de teclado, cierre Escape y foco restaurado si hay modal. Los campos pendientes deben residir en datos/configuración y no producir botones muertos ni enlaces `#` ficticios. No inventar métricas de resultados o usuarios.

## 7. Archivos originales que deben acompañar el código

Los archivos siguientes fueron localizados en el proyecto. No están incluidos como bytes en este Markdown; recuperar/adjuntar originales manualmente. El acceso disponible permitió leer los documentos, no exportarlos como una copia binaria.

| Original localizado | Destino sugerido dentro del proyecto |
|---|---|
| `image(1).png` (logo enviado el 30 de octubre) | `public/brand/logo.png` (referencia mientras se aporta vector) |
| `fondo.jpg` | `public/brand/fondo.jpg` |
| `Guía de Marca Digital Derek Carmiol.png` | referencia de diseño, no necesariamente recurso publicado |
| `CV_Derek_Carmiol_ATS_ES.pdf` | `public/cv/CV_Derek_Carmiol_ATS_ES.pdf` |
| `CV_Derek_Carmiol_ATS_EN.pdf` | `public/cv/CV_Derek_Carmiol_ATS_EN.pdf` |
| `CV_Derek_Carmiol_Visual_ES.pdf` | `public/cv/CV_Derek_Carmiol_Visual_ES.pdf` |
| `CV_Derek_Carmiol_Visual_EN.pdf` | `public/cv/CV_Derek_Carmiol_Visual_EN.pdf` |
| `Tarea2_Identidad_Visual_Web_Derek_Carmiol.docx` | referencia privada; usar corrección de paleta de este documento |
| `Trabajos del curso(2).pdf` | referencia privada de requisitos; pp. 13–16 |

Faltantes: favicon original (usuario indicó que lo tiene), logo SVG original, capturas y enlaces de proyectos, foto real si se desea utilizar, URL de video si se quiere incluir (no obligatorio en rúbrica final), URL remota/repo y `promo.png` final. No inventarlos. La Tarea 3 exige un video breve de presentación, pero no obliga a integrarlo en el proyecto final. No incluir cotizaciones ni presentaciones de clase en el sitio laboral.

## 8. Implementación técnica propuesta (no son nuevas exigencias del docente)

- Next.js + TypeScript + Tailwind CSS, componentes propios. Preferir App Router si compatible con el repositorio. Separar contenido bilingüe de la UI, por ejemplo `src/content/es.ts` y `src/content/en.ts` o diccionarios JSON tipados; almacenar proyectos en una estructura común con campos traducibles.
- Selector ES/EN visible desde header también en móvil. Traducir toda la UI: navegación, CTA, validaciones, textos de proyecto, accesibilidad, metadata razonable y botón de CV. Ajustar atributo `lang`; conservar preferencia local si procede.
- Descarga CV funcional: inicialmente ofrecer ATS en el idioma activo y, opcionalmente, opción visual; verificar existencia de los cuatro PDF originales antes de activar enlaces. No generar PDFs ficticios como si fueran los finales.
- Formulario de contacto: librería JavaScript (por ejemplo, React Hook Form con validación accesible) + servicio o endpoint real. Elegir un mecanismo compatible con Vercel; gestionar credenciales en variables de entorno, nunca en cliente/repo. Validar servidor, controlar spam y mostrar éxito solo al recibir confirmación real. Si no hay proveedor configurado, indicar claramente la configuración pendiente y ofrecer email/WhatsApp como vías reales. No presentar un formulario que simula enviar como completo.
- Chat WhatsApp: widget/botón accesible con enlace al número real y mensaje prellenado traducido. No simular chat atendido por humano ni afirmar disponibilidad inmediata.
- Animaciones: CSS/transiciones discretas, y una animación JSON local válida (por ejemplo Lottie) con fallback estático y respeto de `prefers-reduced-motion`. No confundir JSON de contenido con animación web. SVG originales o propios para ilustraciones; iconos accesibles y decorativos con tratamiento semántico adecuado.
- ScrollTop: visible tras desplazamiento, foco y comportamiento accesibles; navegación suave salvo preferencia de movimiento reducido.
- Diseño: mobile-first, menú móvil real, sin overflow horizontal; contraste WCAG AA, foco visible, semántica HTML, etiquetas del formulario, enlaces con nombres claros, texto alternativo adecuado, soporte teclado, modal accesible.
- Rendimiento: optimizar imágenes, fuentes, carga diferida, minimizar JS no necesario; no cargar videos pesados automáticamente. Usar metadata y Open Graph solo con URLs verificadas; no inventar calificaciones Lighthouse.
- Repositorio: poner sitio en `proyecto/`; configurar Vercel Root Directory `proyecto` si se despliega desde el repo del curso. Mantener README con instalación, scripts, variables y despliegue. Usar `.env.example` sin secretos. Si el repositorio es exclusivo del sitio, documentar el ajuste necesario para cumplir la estructura oficial.
- Crear imagen de promoción con IA `promo.png` basada en el sitio real, una vez exista el diseño. No fabricar una imagen de un sitio ya publicado ni afirmar que el archivo existe si no se generó.

## 9. Criterios de aceptación y entrega

- [ ] Desarrollo propio desde cero, herramienta aprobada por docente (verificar).
- [ ] Cinco secciones principales más header/footer.
- [ ] Branding definitivo 60/30/10, tipografías, logo vectorial y favicon auténtico.
- [ ] Responsive y navegación por teclado en móvil, tablet y escritorio.
- [ ] Galería interactiva con los tres proyectos de CV y selección confirmada de al menos dos adicionales; tecnologías verificadas.
- [ ] LinkedIn y GitHub reales, contacto correcto.
- [ ] Formulario implementado con librería y probado con entrega real (configuración pendiente si faltan credenciales).
- [ ] WhatsApp funcional y botón ScrollTop.
- [ ] Idioma ES/EN completo; CV correcto por idioma y descarga PDF real.
- [ ] Ilustración SVG, animación JSON y transiciones discretas.
- [ ] Sin contenido de ejemplo, retratos falsos, enlaces inventados o afirmaciones laborales no verificadas.
- [ ] Ejecutar scripts de lint, typecheck, tests aplicables y build; comprobar consola, enlaces y accesibilidad; reportar resultados y pendientes.
- [ ] Publicar en Vercel/GitHub Pages con URL real, verificar despliegue; preparar TXT con URL web y repositorio real para Moodle.
- [ ] `promo.png` creado con IA para la exposición. No dar por hecha una entrega o exposición que dependa del titular.

## 10. Fuentes y decisiones de consolidación

- `Trabajos del curso(2).pdf`: requisitos oficiales pp. 13–16; condiciones generales p. 1; mínimo cinco proyectos p. 3; identidad pp. 5–6; CV y video pp. 8–9.
- Tarea 1 y planificación previa: chats del proyecto de septiembre de 2026 y decisiones del cuaderno (solo información útil para el sitio, sin anexar las actividades de clase).
- `Tarea2_Identidad_Visual_Web_Derek_Carmiol.docx`: perfil, slogan, tipografía inicial, misión, visión, valores. La paleta anterior azul/cian quedó obsoleta.
- Corrección de paleta y `Guía de Marca Digital Derek Carmiol.png`, 1 de octubre de 2026: gris/blanco/rojo y Montserrat/Inter en la guía.
- CV ATS y visual ES/EN finales, 30 de octubre de 2026: perfil, datos de contacto, formación, habilidades y tres proyectos finales. Son posteriores a las plantillas Word del 17 de octubre.
- Historial académico previo: candidatos adicionales de proyectos. Su selección no está confirmada.

**Prioridades de verificación antes de publicar:** archivos gráficos/CV originales, selección final de proyectos y repositorios, aprobación del stack, fuente final (Montserrat frente a Poppins), configuración de contacto, URL de despliegue y promo. Las decisiones sugeridas de implementación pueden cambiar siempre que se preserve la identidad y la rúbrica oficial.
