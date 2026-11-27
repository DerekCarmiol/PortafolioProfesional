# Portafolio profesional de Derek Carmiol

Portafolio laboral bilingüe con cinco secciones. Usa Next.js, React, TypeScript y Tailwind CSS. Los archivos del sitio están en `proyecto/`.

## Desarrollo local

    cd proyecto
    npm ci
    npm run dev

Abre [localhost:3000](http://localhost:3000) para español o [localhost:3000/en](http://localhost:3000/en) para inglés. Para verificar una entrega, ejecuta `npm run lint`, `npm run build` y `npm run typecheck`.

## Contenido y recursos

- Las traducciones están en `proyecto/src/lib/content.ts` y los proyectos en `proyecto/src/lib/projects.ts`. La API EBAIS y el sistema de gestión universitaria aparecen como propuestas mientras se confirma la selección. Las tecnologías de veterinaria y esports, los enlaces de proyectos y sus capturas se pueden añadir cuando se confirmen.
- Agrega el logo original (`logo.svg` o `logo.png`), el fondo (`fondo.jpg`) y el favicon (`favicon.ico`, `favicon.svg` o `favicon.png`) a `proyecto/public/brand/`.
- Agrega los PDF originales a `proyecto/public/cv/` con los nombres `CV_Derek_Carmiol_ATS_ES.pdf`, `CV_Derek_Carmiol_ATS_EN.pdf`, `CV_Derek_Carmiol_Visual_ES.pdf` y `CV_Derek_Carmiol_Visual_EN.pdf`. Compila de nuevo. Los enlaces aparecen al detectar los originales en el idioma activo.
- La portada y las tarjetas usan ilustraciones temáticas SVG. La animación de portada usa fotogramas de `src/app/motion.json` con Web Animations y respeta la preferencia de movimiento reducido.
- La especificación y sus extractos están en `docs/contexto/`. Los CV reconstruidos del ZIP quedan como referencia local en `docs/contexto/CV_reconstruidos/`.
- `proyecto/promo.png` es la imagen promocional generada con IA para la exposición.

## Formulario y despliegue

1. Crea un formulario en Formspree y selecciona el correo verificado que recibirá los mensajes. En **Integration**, copia el ID que sigue a `/f/` en la URL del formulario. Para probar en local, copia `proyecto/.env.example` a `proyecto/.env.local` y guarda el ID en `FORMSPREE_FORM_ID`.
2. Importa el repositorio en Vercel, selecciona Next.js y fija **Root Directory** en `proyecto`. El sitio usa el ID de Formspree del portafolio en producción. Puedes seleccionar otro formulario con `FORMSPREE_FORM_ID` o con `NEXT_PUBLIC_FORM` de la integración de Formspree en Vercel. Define `SITE_URL` cuando esté confirmada la URL del sitio.
3. Antes de publicar, incorpora los recursos originales, confirma la selección de proyectos, la cuenta de WhatsApp y la aprobación del stack por el docente. Verifica que el formulario entregue un mensaje al buzón, prueba la descarga de los CV y comprueba las dos rutas de idioma.
4. Registra la URL final del sitio y la del repositorio en el TXT para Moodle.

El formulario valida los datos en el navegador y el servidor, rechaza orígenes cruzados y usa un campo trampa contra spam básico. Muestra confirmación al recibir una respuesta de éxito de Formspree. Mientras falte el ID, el formulario avisa y el correo directo sigue disponible.
