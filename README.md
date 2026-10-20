# Services de nettoyage

Maqueta funcional en React + Vite, Tailwind CSS y Lucide React. Toda la interfaz utiliza francés canadiense (`fr-CA`).

## Ejecutar

Requiere Node.js 20.19+ (o 22.12+) y npm.

```sh
npm install
npm run dev
```

Abrir la dirección que Vite indica en la terminal.

```sh
npm test
npm run build
npm run preview
```

`dist/` contiene el sitio compilado; se sirve mediante HTTP, no abriendo index.html directamente. Para distribuirlo, desplegar `dist/` en cualquier alojamiento estático con HTTPS.

## Configuración

Editar `src/config.js` para cambiar nombre comercial, teléfono, WhatsApp, correo y catálogo de servicios. El título y metadatos del documento están en `index.html`.

Nombre comercial definitivo pendiente. Confirmar antes de producción cobertura geográfica, horarios, tarifas, disponibilidad y condiciones comerciales. No se publican datos no confirmados ni testimonios ficticios.

El formulario utiliza estado local en memoria. No almacena datos personales en localStorage ni envía datos a un backend. La solicitud se prepara para revisión; WhatsApp solamente se abre mediante su botón y el usuario debe confirmar el envío allí. La fecha es una preferencia, no una reserva. La copia necesita un contexto seguro (HTTPS o localhost); si no está disponible, se ofrece selección manual del texto.

## Estructura

- `src/main.jsx`: componentes accesibles, secciones y formulario con resumen.
- `src/config.js`: datos comerciales y opciones.
- `src/quote.js`: validación y composición del mensaje.
- `src/styles.css`: diseño responsive, tokens y Tailwind.
- `src/quote.test.js`: pruebas de validación y enlace WhatsApp.
- `public/interieur.png`: fotografía ilustrativa generada, no representa instalaciones de la empresa.

La imagen se generó con la herramienta integrada de imágenes: «Photorealistic natural editorial interior photography … bright clean warm white living room, cream sofa, oak coffee table, dusty blush cushion, natural sunlight; no people, text or logos». La maqueta se entrega localmente sin publicación externa.

