# diegovega007.github.io

Sitio portafolio personal de **Diego Vega Reyes** — Ingeniero de Software Backend.

Publicado en <https://diegovega007.github.io>

## Contenido del repositorio

| Ruta                          | Descripción                                                   |
| ----------------------------- | ------------------------------------------------------------- |
| `site/`                       | Aplicación del portafolio (Vite + React + TypeScript)         |
| `Diego_Vega_Reyes_CV.pdf`     | CV en PDF, también servido desde el sitio para descarga       |
| `cv.html`                     | Fuente HTML con la que se genera el PDF del CV                |
| `Diego_Vega_Reyes_CV_ATS.md`  | Versión en texto plano, optimizada para filtros ATS           |
| `.github/workflows/deploy.yml`| Build y despliegue automático a GitHub Pages                  |

## Características del sitio

- **Bilingüe** (español / inglés) con selector en la barra superior; el idioma inicial se detecta del navegador y se recuerda en `localStorage`.
- **Tema claro y oscuro**, aplicado antes del primer render para evitar el destello de color incorrecto.
- **Animaciones al hacer scroll** con [Motion](https://motion.dev): reveals escalonados, parallax en el hero, línea de tiempo ligada al progreso de scroll, contadores animados y barra de progreso de lectura.
- **Interfaz interactiva**: navegación con indicador animado y scroll spy, pestañas de stack técnico, tarjetas de proyecto expandibles con foco que sigue al cursor, y formulario de contacto con validación que redacta el correo.
- **Accesibilidad**: navegación por teclado, `aria-*` en componentes interactivos, enlace para saltar al contenido y respeto por `prefers-reduced-motion`.
- **SEO**: metadatos Open Graph y Twitter Card, imagen de previsualización 1200×630 y datos estructurados `Person` en JSON-LD.

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev) 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4 (configuración CSS-first con `@theme`)
- [Motion](https://motion.dev) para animación

## Desarrollo local

```bash
cd site
npm install
npm run dev
```

El servidor de desarrollo queda en <http://localhost:5173>.

Otros comandos:

```bash
npm run build    # verifica tipos y genera dist/
npm run preview  # sirve dist/ para revisar el build de producción
npm run lint     # oxlint
```

## Despliegue

Cada push a `main` dispara el workflow de GitHub Actions, que compila `site/` y publica
`site/dist` en GitHub Pages. En **Settings → Pages**, la fuente debe estar configurada
como **GitHub Actions**.

## Editar el contenido

Todo el texto del sitio vive en la capa de contenido tipada, no en los componentes:

- `site/src/content/es.ts` — contenido en español
- `site/src/content/en.ts` — contenido en inglés
- `site/src/content/contact.ts` — datos de contacto y enlaces
- `site/src/content/types.ts` — tipos; TypeScript avisa si un idioma queda incompleto

Para reemplazar el CV descargable, actualiza `site/public/Diego_Vega_Reyes_CV.pdf`.
