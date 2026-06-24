# Arsenal IA — Sitio completo de venta + portal de acceso

Sistema completo para vender acceso a tu biblioteca de prompts, robots y agentes de IA. Bilingüe (ES/EN), funciona gratis en GitHub Pages.

## Cómo funciona (el flujo de venta)

1. El visitante llega a la **vitrina** (`index.html`): ve las categorías, cuántos prompts hay en cada una y un ejemplo de cada categoría.
2. Da clic en "Quiero acceso" o en "Ver los X prompts" → lo llevas a **pagar** (Hotmart o WhatsApp).
3. Cuando paga, le entregas la **clave de acceso**.
4. Entra a `acceso.html`, escribe la clave y ve **toda la biblioteca** con buscador y filtros.

---

## Archivos del sitio

### La vitrina (página de venta)
| Archivo | Qué es |
|---|---|
| `index.html` | La página de venta. |
| `styles.css` | Diseño general. |
| `app.js` | Lógica de la vitrina + **enlace de pago** (CHECKOUT_URL). |
| `data.js` | Textos, precios y categorías de la vitrina. |

### El portal de acceso (lo que ve quien pagó)
| Archivo | Qué es |
|---|---|
| `acceso.html` | La pantalla de clave + la biblioteca. |
| `portal.css` | Diseño del portal. |
| `portal.js` | Lógica + **claves de acceso** (ACCESS_KEYS). |
| `library-config.js` | Categorías y textos del portal. |
| `prompts-1.js` `prompts-2.js` `prompts-3.js` | **Los prompts**. Aquí agregas más. |

---

## Lo que TIENES que configurar

### 1. El pago (ventana de pago manual)
Cuando el cliente da clic en "Quiero acceso", se abre una ventana con tus métodos de pago y un botón de WhatsApp. El flujo es:
1. El cliente paga a tus cuentas (Bancolombia, Nequi, Daviplata, Bre-B).
2. Te envía el comprobante por WhatsApp.
3. Tú le das la clave de acceso.

Para cambiar tus datos de pago, abre `index.html` y busca el bloque `pay-methods` (los números de cuenta están ahí).
Para cambiar el WhatsApp que recibe el comprobante, abre `app.js` arriba (`const WHATSAPP`).

### 2. La clave de acceso
Abre `portal.js`. Arriba está `ACCESS_KEYS`. Ahí defines las claves que les das a tus clientes:
```
const ACCESS_KEYS = ["ARSENAL2026", "CENTROIA-VIP"];
```
Puedes poner varias. Cuando alguien paga, le das una de estas. Cámbialas cuando quieras por seguridad.

### 3. Tu WhatsApp e Instagram
En `index.html` y `acceso.html`, busca `573189562677` e `instagram.com` y pon los tuyos.

---

## Cómo AGREGAR prompts cada día

Esta es la parte que querías: alimentar el sitio a diario.

1. Abre cualquier archivo `prompts-1.js`, `prompts-2.js` o `prompts-3.js`.
2. Copia un bloque existente (empieza en `{ cat:` y termina en `}},`).
3. Pégalo y cámbialo:
   - `cat`: la categoría (marketing, sales, social, copywriting, business, design, productivity, ecommerce, email, seo, video, personal, agents).
   - `t`: el título en español (`es`) e inglés (`en`).
   - `p`: el prompt completo en español (`es`) e inglés (`en`).
4. Guarda y sube el archivo a GitHub. Listo, ya aparece en la biblioteca.

Ejemplo de un prompt:
```javascript
{ cat:"marketing", t:{es:"Mi título", en:"My title"},
  p:{es:"Actúa como... [VARIABLE].", en:"Act as... [VARIABLE]."}},
```

Si quieres, puedes crear un `prompts-4.js`, `prompts-5.js`, etc. Solo recuerda:
- Añadir `<script src="prompts-4.js"></script>` en `acceso.html` (antes de library-config.js).
- Sumarlo en `library-config.js` dentro de `ALL_PROMPTS`.

---

## Cómo subirlo a GitHub Pages

1. Crea un repositorio público (ej: `arsenal-ia`).
2. **Add file → Upload files** y sube TODOS los archivos `.html`, `.css` y `.js` (sueltos, no en carpeta).
3. **Commit changes**.
4. **Settings → Pages → Source: rama `main`, carpeta `/ (root)` → Save**.
5. Espera 1-2 min. Tu sitio: `https://tuusuario.github.io/arsenal-ia/`

---

## Importante sobre la seguridad

GitHub Pages es público. La clave de acceso protege la biblioteca de usuarios normales, pero alguien muy técnico podría saltársela. Para un negocio normal funciona perfecto. Si más adelante vendes mucho y quieres protección total, se puede migrar a Hotmart Members o un servidor con login real.

## Precio configurado
- Español: $80.000 COP (≈ 20 USD)
- Inglés: $20 USD
