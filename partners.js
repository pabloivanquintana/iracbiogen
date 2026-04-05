/**
 * IRAC BIOGEN — Instituciones que nos acompañan
 * =====================================================
 * Este archivo es la fuente de datos central para los logos
 * de instituciones y empresas que acompañan a IRAC BIOGEN.
 *
 * CÓMO AGREGAR O EDITAR UNA INSTITUCIÓN:
 * 1. Agregá un objeto al array PARTNERS (abajo)
 * 2. Colocá el logo en la carpeta /images/partners/
 *    — formato recomendado: PNG con fondo transparente, mínimo 300px de ancho
 * 3. Asigná la propiedad "variant":
 *    — "clean"  → PNG con fondo transparente. Se muestra como silueta blanca sobre el footer.
 *    — "boxed"  → Logo con fondo blanco, gris o JPEG sin transparencia.
 *                 Se muestra dentro de una caja sutil con colores originales.
 * 4. El campo "url" es opcional — dejarlo en null si no hay URL confirmada
 * 5. El campo "orden" controla el orden de aparición (menor número = primero)
 *
 * ⚠️  URLS SIN CONFIRMAR:
 * Antes de publicar, verificar las URLs marcadas con "PENDIENTE CONFIRMAR".
 * Dejá en null cualquier URL que no esté confirmada por el cliente.
 *
 * CÓMO REUTILIZAR EN OTRA SECCIÓN:
 * 1. Agregá en el HTML: <div id="homePartners" class="partners-on-light"></div>
 *    (usá la clase "partners-on-light" si el fondo es claro)
 * 2. Llamá: renderPartners('homePartners')
 * =====================================================
 */

const PARTNERS = [
    {
        name: 'Vetanco',
        logo: 'images/partners/logo-vetanco.png',
        variant: 'boxed', // PNG sin canal alpha (RGB) — fondo blanco
        // ⚠️ PENDIENTE CONFIRMAR — URL asumida, verificar con el cliente
        // url: 'https://www.vetanco.com.ar',
        url: null,
        orden: 1,
    },
    {
        name: 'Biogénesis Bagó',
        logo: 'images/partners/BiogenesisBago.png',
        variant: 'clean', // PNG RGBA con fondo transparente
        // ⚠️ PENDIENTE CONFIRMAR — URL asumida, verificar con el cliente
        // url: 'https://biogenesisbago.com',
        url: null,
        orden: 2,
    },
    {
        name: 'Zoetis',
        logo: 'images/partners/zoetis-logo-300x108.jpg',
        variant: 'boxed', // JPEG sin transparencia
        // ⚠️ PENDIENTE CONFIRMAR — URL asumida, verificar con el cliente
        // url: 'https://www.zoetis.com.ar',
        url: null,
        orden: 3,
    },
    {
        name: 'Ceva',
        logo: 'images/partners/Ceva-juntos-mas-alla-e1750257261576-300x300.png',
        variant: 'boxed', // PNG indexed (paleta 8-bit) — fondo posiblemente no transparente
        // ⚠️ PENDIENTE CONFIRMAR — URL asumida, verificar con el cliente
        // url: 'https://www.ceva.com',
        url: null,
        orden: 4,
    },
    {
        name: 'Calier Argentina',
        logo: 'images/partners/calier-argentina-es_0.png',
        variant: 'clean', // PNG RGBA con fondo transparente
        url: null,
        orden: 5,
    },
    {
        name: 'Over',
        logo: 'images/partners/LOGO-OVER-300x150.png',
        variant: 'clean', // PNG RGBA con fondo transparente
        url: null,
        orden: 6,
    },
    {
        name: 'Allignani',
        logo: 'images/partners/ALLIGNANI.rdj_Mesa-de-trabajo-11-300x137.png',
        variant: 'clean', // PNG RGBA con fondo transparente
        url: null,
        orden: 7,
    },
    {
        name: 'Von Franken / Fatro',
        logo: 'images/partners/vonfranken-300x157.png',
        variant: 'boxed', // PNG RGBA pero fondo blanco opaco (0% píxeles transparentes)
        url: null,
        orden: 8,
    },
    {
        name: 'FEACO',
        logo: 'images/partners/WhatsApp-Image-2025-06-17-at-16.27.20-300x50.jpeg',
        variant: 'boxed', // JPEG sin transparencia
        url: null,
        orden: 9,
    },
];

/**
 * Renderiza el bloque de partners en cualquier contenedor del DOM.
 *
 * @param {string} containerId — ID del elemento donde se inserta el bloque.
 *   Si el elemento no existe en la página actual, la función termina sin error.
 *
 * Uso básico (fondo oscuro, ej. footer):
 *   <div id="footerPartners"></div>
 *   renderPartners('footerPartners')
 *
 * Uso en fondo claro (ej. Home):
 *   <div id="homePartners" class="partners-on-light"></div>
 *   renderPartners('homePartners')
 */
function renderPartners(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !PARTNERS.length) return;

    const sorted = [...PARTNERS].sort((a, b) => (a.orden ?? 999) - (b.orden ?? 999));

    container.innerHTML = sorted.map((partner) => {
        const variant = partner.variant === 'boxed' ? 'boxed' : 'clean';
        const variantClass = `partner-item--${variant}`;

        const imgTag = `<img
            src="${partner.logo}"
            alt="${partner.name}"
            class="partner-logo"
            loading="lazy"
            onerror="this.style.display='none'; if (this.nextElementSibling) this.nextElementSibling.style.display='inline';"
        ><span class="partner-logo-fallback">${partner.name}</span>`;

        if (partner.url) {
            return `<a href="${partner.url}" target="_blank" rel="noopener noreferrer" class="partner-item partner-item--link ${variantClass}" title="${partner.name}">${imgTag}</a>`;
        }

        return `<span class="partner-item ${variantClass}" title="${partner.name}">${imgTag}</span>`;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderPartners('footerPartners');
});
