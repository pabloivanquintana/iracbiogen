/**
 * IRAC BIOGEN — XVI Simposio Internacional de Reproducción Animal
 * =====================================================================
 * Fuente de datos central. Usada tanto en el home (bloque compacto)
 * como en simposio.html (página completa).
 *
 * CÓMO ACTUALIZAR DATOS DEL EVENTO:
 *   Editar el objeto SIMPOSIO (fechas, lugar, descripción, CTA).
 *
 * CÓMO AGREGAR O EDITAR UN DISERTANTE:
 *   Editar el array SPEAKERS. Cada entry:
 *     nombre      — nombre completo
 *     institucion — filiación institucional
 *     pais        — país en texto
 *     bandera     — emoji de bandera
 *     featured    — true = aparece en el preview del home
 *     bio         — texto de presentación. '' = no muestra botón "Ver bio"
 *
 *   Solo 4 speakers deben tener featured: true (los que se muestran en home).
 *   El resto aparece únicamente en simposio.html.
 *
 * CÓMO EDITAR UNA BIO:
 *   Editar el campo "bio" del speaker correspondiente.
 *   Si se quiere ocultar temporalmente, dejarlo en ''.
 * =====================================================================
 */

const SIMPOSIO = {
    titulo: 'XVI Simposio Internacional de Reproducción Animal',
    edicion: 'XVI',
    fechas: '26, 27 y 28 de agosto de 2026',
    lugar: 'Centro de Convenciones Córdoba, Argentina',
    lugarCompleto: 'Centro de Convenciones Córdoba, Córdoba, Argentina',
    descripcion: 'El encuentro científico de referencia en reproducción bovina de Latinoamérica, con los principales especialistas mundiales de la disciplina.',
    descripcionLarga: 'El XVI Simposio Internacional de Reproducción Animal reúne a los referentes más destacados de la ciencia reproductiva bovina a nivel global. Tres jornadas de conferencias magistrales, casos clínicos y discusión científica sobre los avances más relevantes en biotecnologías reproductivas, genómica y manejo productivo.',
    cta: {
        texto: 'Conocer el simposio',
        href: 'simposio.html',
    },
};

const SPEAKERS = [
    {
        nombre: 'Pietro Baruselli',
        institucion: 'Universidade de São Paulo',
        pais: 'Brasil',
        bandera: '🇧🇷',
        featured: true,
        bio: 'Profesor titular de la FMVZ-USP y referente mundial en fisiología reproductiva bovina. Pionero en protocolos de sincronización de ovulación en zebuinos y uno de los investigadores más citados en reproducción animal de Latinoamérica.',
    },
    {
        nombre: 'Alejo Menchaca',
        institucion: 'INIA Uruguay',
        pais: 'Uruguay',
        bandera: '🇺🇾',
        featured: true,
        bio: 'Investigador principal en INIA Uruguay, especializado en biotecnologías reproductivas bovinas: transferencia de embriones, fertilización in vitro y sincronización de celos en razas europeas y cruzas.',
    },
    {
        nombre: 'Marcelo Seneda',
        institucion: 'Universidade de Londrina',
        pais: 'Brasil',
        bandera: '🇧🇷',
        featured: false,
        bio: 'Especialista en producción in vitro de embriones bovinos. Coordinador de grupos de investigación en biotecnología reproductiva en la Universidade Estadual de Londrina, con extensa producción científica en OPU-FIV.',
    },
    {
        nombre: 'Álvaro García Guerra',
        institucion: 'The Ohio State University',
        pais: 'USA',
        bandera: '🇺🇸',
        featured: false,
        bio: 'Investigador y docente en la Ohio State University. Su trabajo se centra en fisiología reproductiva bovina, sincronización hormonal y eficiencia reproductiva en rodeos lecheros y de carne de alta producción.',
    },
    {
        nombre: 'Francisco Peñagaricano',
        institucion: 'University of Wisconsin',
        pais: 'USA',
        bandera: '🇺🇸',
        featured: false,
        bio: 'Especialista en genómica aplicada a la reproducción animal. Integra herramientas de bioinformática para identificar variantes genéticas asociadas a eficiencia reproductiva en bovinos lecheros.',
    },
    {
        nombre: 'Julio Giordano',
        institucion: 'Cornell University',
        pais: 'USA',
        bandera: '🇺🇸',
        featured: false,
        bio: 'Profesor asociado en Cornell University. Referente internacional en manejo reproductivo de rodeos lecheros, protocolos de sincronización y análisis de datos a nivel de rodeo.',
    },
    {
        nombre: 'Alexandre Souza',
        institucion: 'Ceva Santé Animale',
        pais: 'Brasil',
        bandera: '🇧🇷',
        featured: false,
        bio: 'Médico veterinario y referente técnico de Ceva Brasil en programas de reproducción y bienestar animal a escala productiva.',
    },
    {
        nombre: 'Gabriel Bó',
        institucion: 'IRAC · UMV',
        pais: 'Argentina',
        bandera: '🇦🇷',
        featured: true,
        bio: 'Fundador y director científico de IRAC. Pionero en protocolos de sincronización de ovulación e IATF, con más de 30 años de trayectoria en reproducción bovina y una influencia directa en la ganadería de Latinoamérica.',
    },
    // ─── Para agregar un disertante nuevo, copiar este bloque: ───────
    // {
    //     nombre: 'Nombre Apellido',
    //     institucion: 'Universidad / Institución',
    //     pais: 'País',
    //     bandera: '🇦🇷',
    //     featured: false,
    //     bio: '',
    // },
];

/* ─── Utilidades ──────────────────────────────────────────────────── */

function getInitials(nombre) {
    const parts = nombre.trim().split(' ');
    return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
}

/* ─── Render: bloque compacto del home ───────────────────────────── */

function renderSimposioHome() {
    const block = document.getElementById('simposioBlock');
    if (!block) return;

    const featured = SPEAKERS.filter((s) => s.featured);
    const total = SPEAKERS.length;

    block.innerHTML = `
        <div class="simposio-inner">
            <div class="simposio-info">
                <span class="simposio-eyebrow">
                    <i class="fas fa-globe"></i> Simposio internacional
                </span>
                <h2 class="simposio-title">${SIMPOSIO.titulo}</h2>
                <p class="simposio-desc">${SIMPOSIO.descripcion}</p>
                <div class="simposio-meta">
                    <span class="simposio-meta-item">
                        <i class="fas fa-calendar-days"></i> ${SIMPOSIO.fechas}
                    </span>
                    <span class="simposio-meta-sep" aria-hidden="true">·</span>
                    <span class="simposio-meta-item">
                        <i class="fas fa-location-dot"></i> ${SIMPOSIO.lugar}
                    </span>
                </div>
                <a href="${SIMPOSIO.cta.href}" class="simposio-cta">
                    ${SIMPOSIO.cta.texto} <i class="fas fa-arrow-right"></i>
                </a>
            </div>
            <div class="simposio-preview">
                <p class="simposio-preview-label">Disertantes confirmados</p>
                <div class="simposio-preview-list">
                    ${featured.map((s) => `
                        <div class="simposio-spk">
                            <div class="simposio-spk-av" aria-hidden="true">${getInitials(s.nombre)}</div>
                            <div class="simposio-spk-info">
                                <span class="simposio-spk-name">${s.nombre}</span>
                                <span class="simposio-spk-institution">${s.institucion}</span>
                                <span class="simposio-spk-country">${s.bandera} ${s.pais}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <a href="${SIMPOSIO.cta.href}" class="simposio-preview-more">
                    Ver todos los disertantes <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
}

/* ─── Render: página completa (simposio.html) ────────────────────── */

function renderSimposioPage() {
    const grid = document.getElementById('simposioSpeakersGrid');
    if (!grid) return;

    grid.innerHTML = SPEAKERS.map((s) => {
        const initials = getInitials(s.nombre);
        const bioSection = s.bio ? `
            <button class="spk-bio-toggle" aria-expanded="false">
                Ver bio <i class="fas fa-chevron-down"></i>
            </button>
            <div class="spk-bio-body" hidden>
                <p>${s.bio}</p>
            </div>` : '';

        return `
            <div class="spk-card">
                <span class="spk-flag" aria-hidden="true">${s.bandera}</span>
                <div class="spk-av" aria-hidden="true">${initials}</div>
                <div class="spk-name">${s.nombre}</div>
                <div class="spk-institution">${s.institucion}</div>
                <div class="spk-country">${s.pais}</div>
                ${bioSection}
            </div>
        `;
    }).join('');

    // Accordion — event delegation en el grid
    grid.addEventListener('click', (e) => {
        const btn = e.target.closest('.spk-bio-toggle');
        if (!btn) return;
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        btn.nextElementSibling.hidden = expanded;
        btn.querySelector('i').style.transform = expanded ? '' : 'rotate(180deg)';
    });
}

/* ─── Init ────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    renderSimposioHome();   // no-op si no hay #simposioBlock
    renderSimposioPage();   // no-op si no hay #simposioSpeakersGrid
});
