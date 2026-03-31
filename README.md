# IRAC BIOGEN — Ecosistema Web v3

Rediseño estratégico del sitio institucional con contenido real y elevación visual completa.

---

## Stack técnico

- **HTML5** semántico
- **CSS3** Vanilla — Design System v3 con variables CSS completas
- **JavaScript** Vanilla — mobile menu, filtros, sticky header
- **Font Awesome 6.5** (CDN) — iconografía real en todas las páginas
- **Google Fonts** — Lora (serif académico) + Inter (sans-serif UI)

---

## Estructura de archivos

```
/IRAC BIOGEN/
├── index.html              → Home: conversión (Entender > Explorar > Confiar > Consultar)
├── programas.html          → Catálogo filtrable: 8 programas reales
├── programa-detalle.html   → Ficha académica premium: Maestría en Biotecnologías
├── styles.css              → Design System v3: tokens, componentes, responsive
├── script.js               → Mobile menu, filtros con contador, sticky header
├── logo.png                → Logo oficial IRAC BIOGEN (local)
├── existing-base-audit.md  → Auditoría de la base anterior
├── content-audit.md        → Contenido real extraído de iracbiogen.com
├── content-map.md          → Mapeo contenido real ↔ rediseño
└── ui-ux-improvement-audit.md  → Auditoría visual/UX y plan de mejoras
```

---

## Oferta académica implementada

| Programa | Tipo | Modalidad |
|:---|:---|:---|
| Maestría en Biotecnologías Reproductivas en Bovinos | Maestría (UNC) | Híbrida |
| Especialización en Reproducción Bovina | Especialización (CONEAU "A") | Presencial |
| Maestría en Producción de Carne Bovina | Maestría | A confirmar |
| Pasantía Profesional 2026 | Pasantía | Presencial |
| Ecografía Reproductiva en Bovinos | Curso Intensivo | Presencial |
| Evaluación y Manejo de Semen | Curso Intensivo | Presencial |
| Colección, Clasificación y Transferencia de Embriones | Curso Intensivo | Presencial |
| Aspiración Folicular, Búsqueda y Clasificación de Ovocitos | Curso Intensivo | Presencial |

---

## Datos de contacto reales

- **Email:** infoiracbiogen@gmail.com
- **Tel:** +54 9 3517 59-2643 / +549 0351-5891912 (int. 206)
- **WhatsApp:** http://bit.ly/IRACBIOGEN
- **Aula Virtual:** https://educacion.iracbiogen.com/
- **Dirección:** Paraje Pozo del Tigre, Est. Gral. Paz, CP 5145, Córdoba

---

## Lo que se mejoró en v3 (actual)

### Design System
- Variables CSS de spacing (`--sp-1` a `--sp-10`), tipografía (`--fs-xs` a `--fs-4xl`), sombras y radios
- Sistema de botones: `btn-primary`, `btn-outline`, `btn-ghost`, `btn-whatsapp`, `btn-sm`, `btn-lg`, `btn-full`
- Sistema de badges: `badge-blue`, `badge-yellow`, `badge-green`, `badge-open`, `badge-type`
- Cards horizontales en el listado de programas (más escaneables)
- Sidebar sticky real con header colorado

### Funcionalidad JS
- Menú mobile completamente funcional con animación, aria y cierre en click externo
- Filtros con contador de resultados ("X programas disponibles")
- Mensaje "sin resultados" con botón de reset
- Detección automática de página activa en la navegación

### Calidad Visual
- Font Awesome 6.5 en toda la iconografía (categorías, trust block, meta, footer, contacto)
- Redes sociales con iconos reales (Facebook, Instagram, YouTube, WhatsApp)
- Teléfonos y emails clickeables en todo el sitio
- Hero con eyebrow text y overlay de gradiente mejorado
- CTA simple final → triple CTA (email + WhatsApp visible)
- Sin estilos inline: todo centralizado en styles.css

---

## Pendiente (próximas versiones)

- [ ] Páginas individuales para cada programa (Especialización, Cursos)
- [ ] Sección de Investigación con líneas reales
- [ ] Formulario de contacto embebido (servidor de leads)
- [ ] SEO: meta tags dinámicos, Open Graph, Schema.org
- [ ] Imágenes propias del campus (actualmente Unsplash)
- [ ] Sección de servicios especializados (IA, semen, embriones)
# iracbiogen
