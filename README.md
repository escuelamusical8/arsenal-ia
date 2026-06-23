# Prompts.IA — Portal de venta bilingüe

Portal web para vender tu pack de prompts y robots de IA. Bilingüe (Español / Inglés), responsive, optimizado para conversión. Sin dependencias, funciona como sitio estático en GitHub Pages.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Estructura de la página. No suele necesitar cambios. |
| `styles.css` | Todo el diseño (colores, tipografías, espaciados). |
| `app.js` | Lógica: idioma, copiar prompts, FAQ, menú. |
| `data.js` | **Tu contenido**: textos, prompts, robots, precios. Edita aquí. |

## Cómo cambiar tu información

Abre `data.js` con cualquier editor de texto y modifica:

1. **Precio** — busca `price`, `priceOld`, `currency` y pon tus valores.
2. **Enlace de compra** — abre `app.js`, arriba está `CHECKOUT_URL`. Cambia ese enlace por el de tu checkout (Hotmart, link de pago, WhatsApp, etc.).
3. **WhatsApp / Instagram** — en `index.html`, busca `wa.me/573189562677` e `instagram.com` y reemplaza por los tuyos.
4. **Prompts y robots** — en `data.js`, las secciones `CATEGORIES` y `ROBOTS` tienen todo. Cada uno trae su versión en español (`es`) e inglés (`en`).

## Cómo subirlo a GitHub Pages

1. Entra a [github.com](https://github.com) e inicia sesión.
2. Crea un repositorio nuevo (botón **New**). Ponle un nombre, por ejemplo `prompts-ia`. Déjalo **Public**.
3. En el repositorio, haz clic en **Add file → Upload files**.
4. Arrastra los 4 archivos (`index.html`, `styles.css`, `app.js`, `data.js`) y confirma con **Commit changes**.
5. Ve a **Settings → Pages** (menú lateral).
6. En **Source**, elige la rama `main` y la carpeta `/ (root)`. Guarda.
7. Espera 1–2 minutos. GitHub te dará un enlace tipo `https://tuusuario.github.io/prompts-ia/`.

¡Listo! Ese es tu sitio en vivo. Cada vez que subas un archivo actualizado, el sitio se actualiza solo.

## Notas

- El idioma elegido por el visitante se recuerda automáticamente.
- El botón "Copiar" copia el prompt de muestra al portapapeles.
- En móvil aparece un botón fijo abajo para llevar a la compra.
