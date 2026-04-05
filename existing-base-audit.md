# Auditoría de Base Existente — IRAC BIOGEN

## Resumen de lo Construido

El proyecto ya cuenta con una primera versión funcional del ecosistema académico.

| Archivo        | Estado    | Descripción                                     |
| :------------- | :-------- | :---------------------------------------------- |
| `index.html`   | ✅ Sólido  | Home con flujo Entender→Explorar→Confiar→Consultar |
| `programas.html` | ✅ Sólido  | Listado con filtros JS funcionales              |
| `programa-detalle.html` | ✅ Sólido  | Detalle de programa con Sticky Sidebar    |
| `styles.css`   | ✅ Sólido  | Design System completo, variables CSS           |
| `script.js`    | ✅ Funcional | Filtros, smooth scroll, sticky header         |
| `logo.png`     | ✅ Oficial | Logo real integrado localmente                  |

---

## Elementos que se Conservan

| Componente              | Motivo para conservar                        |
| :---------------------- | :------------------------------------------- |
| **Header sticky**       | Responsive, logo local, navegación clara     |
| **Hero con doble CTA**  | Estructura y copy ya ajustados               |
| **Grid categorías (4)** | Lógica correcta: Maestrías, Cursos, Pasantías |
| **Cards de programas**  | Estructura ideal (badge, h3, meta, btns)     |
| **Trust Block**         | Contenido a actualizar, estructura óptima    |
| **Final CTA**           | Bien posicionado antes del footer            |
| **Footer**              | Estructura de 3 columnas, funcional          |
| **Filtros JS**          | Lógica de `data-type/modality/duration` ✅   |
| **CSS Variables**       | Design System completo y coherente           |

---

## Elementos con Textos Ficticios / Placeholders

| Elemento                    | Problema                              | Prioridad |
| :-------------------------- | :------------------------------------ | :-------- |
| Teléfono `+54 351 123 4567` | Inventado                             | 🔴 Alta   |
| Email `info@iracbiogen.com` | Parcialmente incorrecto               | 🔴 Alta   |
| Nombre de programas destacados | Ficticios ("Ecografía Fetal Avanzada", "Gestión de Genética Lechera") | 🔴 Alta |
| Categorías "Diplomaturas" y "Carreras" | IRAC no usa "Diplomaturas" — usa "Carreras" y categorías distintas | 🟡 Media  |
| Índices de confianza        | "+30 años" correcto, resto genérico   | 🟡 Media  |
| Links de nav `href="#investigacion"` | Sección no existe en la home     | 🟡 Media  |
| Footer links                | Apuntan a `#` sin destinos reales    | 🟡 Media  |

---

## Partes que Requieren Reorganización Mayor

- **Navegación:** Debe incluir link real a `programas.html`, no solo anclas de home.
- **Categorías:** Cambiar "Diplomaturas" → reflejar la oferta real: Maestrías / Especialización / Cursos Intensivos / Pasantías.
- **Programas Destacados:** Reemplazar los 3 ficticios por programas reales de la oferta IRAC.
- **Footer:** Añadir redes sociales, link al aula virtual, datos de contacto reales.

---

## Riesgos si se Modifica Demasiado

> [!WARNING]
> Reescribir completamente `styles.css` rompe la consistencia visual lograda. Usar ÚNICAMENTE ajustes incrementales.

> [!CAUTION]
> Cambiar la lógica de los filtros JS sin mantener los atributos `data-type/modality/duration` en los cards romperá el filtrado.

---

## Estimación de Trabajo Restante

- **Mínimo:** Actualizaciones de contenido (textos, datos) — ~60% del trabajo
- **Medio:** Ajustes de navegación y sección de categorías — ~30%
- **Menor:** Pequeños ajustes CSS para nuevas tarjetas — ~10%
