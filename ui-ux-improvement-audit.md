# Auditoría Visual y UX — IRAC BIOGEN v2

**Fecha:** Marzo 2026
**Archivos revisados:** index.html, programas.html, programa-detalle.html, styles.css, script.js

---

## ✅ Qué ya funciona bien

- Design tokens definidos en `:root` (colores, tipografías)
- Estructura general de las 3 páginas coherente
- Filtros JS funcionales en programas.html
- Logo local integrado correctamente
- Contenido real de IRAC BIOGEN incorporado
- Smooth scroll y sticky header funcionales

---

## 🔴 Problemas Críticos

| Problema | Impacto |
|:--|:--|
| **Menú mobile no funcional** — solo se oculta, nunca se abre | Sitio inutilizable en mobile |
| **Redes sociales con texto "fb/ig/yt"** — no icono real | No profesional, área clickeable mínima |
| **Estilos inline en los 3 HTML** — `style=` en footer, sidebar, CTAs | Inconsistente, inmantenible |
| **Footer-grid duplicado** en CSS | Cascada CSS conflictiva |
| **`.btn-card` sin `.btn` base** — no hereda padding ni border-radius | Aspecto no consistente con otros botones |
| **`.btn-secondary` tiene margin-left fijo** | Rompe layouts donde aparece solo |
| **Hero sin max-width en mobile** — texto desborda en pantallas pequeñas | UX rota en mobile |

---

## 🟡 Problemas de Calidad Visual

| Problema | Impacto |
|:--|:--|
| Sin sistema de spacing — uso arbitrario de `margin-top: 20px`, `padding: 40px` sin variables | Inconsistencia visual |
| `.section-title` sin sub-escala — todos los h2 tienen el mismo tamaño | Sin ritmo de jerarquía |
| Trust block con emoji como iconos — poco profesional | Credibilidad inst. reducida |
| Categorías en home usan emoji — inconsistente con el tono institucional | Baja calidad visual |
| Sidebar de filtros sin hover ni estilo de checkbox custom | UX de formulario pobre |
| `programa-detalle.html` tiene `<style>` inline al final del body | Mala práctica |
| `programas.html` tiene `<style>` inline al final del body | Mala práctica |
| Background de hero es siempre el mismo Unsplash | Imagen genérica poco relevante |
| Sin separación visual entre secciones alternas en la home | Todo se ve igual, falta ritmo |
| Cards del listado tienen meta info apilada sin iconografía | Escaneabilidad baja |
| Sin estado "active" visual claro en la navegación | Usuario no sabe en qué página está |
| CTA final de home se ve como "una sección más" | Poco impacto conversional |
| Breadcrumb sin estilo — texto plano | Bajo nivel visual |
| Key-info-bar del detalle sin estilos propios formales | Se ve como bloque flotante |

---

## 🟢 Quick Wins Visuales (alto impacto, bajo esfuerzo)

1. **Iconos Font Awesome** en toda la navegación, trust block, categorías, docentes, contacto
2. **Menu mobile funcional** con 15 líneas de JS adicionales
3. **Alternancia de fondo** entre secciones (blanco / azul claro) para ritmo visual
4. **Active nav state** con borde inferior amarillo
5. **Cards del listado** con badge pill colorizado según tipo de programa
6. **Sidebar del detalle** sticky real con `position: sticky`
7. **WhatsApp CTA** con color verde y botón visible

---

## 🔵 Mejoras Estructurales Mínimas Necesarias

1. Unificar variables CSS de spacing (`--space-xs`, `--space-sm`, etc.)
2. Eliminar todos los `<style>` inline del final de cada HTML
3. Agregar CDN de Font Awesome en todos los archivos (ya está en programa-detalle)
4. Mobile menu con panel deslizante en JS
5. `.btn-card` debe heredar de `.btn`
6. Separar sección trust block de Programas vs. Home

---

## 📊 Prioridades por Impacto

| Prioridad | Acción |
|:--|:--|
| 🔴 P1 | Mobile menu funcional |
| 🔴 P1 | Iconos reales (Font Awesome) en todo el sitio |
| 🔴 P1 | Estilos inline → CSS centralizado |
| 🟡 P2 | Spacing system unificado |
| 🟡 P2 | Jerarquía visual entre secciones (fondo alterno) |
| 🟡 P2 | Badge system por tipo de programa en el listado |
| 🟢 P3 | Active nav state |
| 🟢 P3 | Cards de docentes mejoradas |
| 🟢 P3 | Key info bar con iconos |
