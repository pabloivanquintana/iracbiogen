# Mapeo de Contenido — IRAC BIOGEN

## Principio de Trabajo
Modificar lo mínimo necesario. Reemplazar contenido ficticio con contenido real dentro de la estructura ya construida.

---

## Mapeo por Bloque: Home (index.html)

| Bloque Actual          | Contenido Nuevo Asignado                                | Acción     |
| :--------------------- | :------------------------------------------------------ | :--------- |
| **Header / Nav**       | Añadir link `programas.html`, actualizar anclas         | ✏️ Ajustar |
| **Hero H1**            | "Formación de posgrado en reproducción animal y biotecnología" | ✏️ Ajustar |
| **Hero subtítulo**     | "Desde 1993, formando profesionales con estándares académicos internacionales." | ✏️ Reemplazar |
| **Categoría 1** (Diplomaturas → Maestrías) | "Maestrías y Especializaciones: Formación de posgrado avalada por UNC y CONEAU." | ✏️ Renombrar |
| **Categoría 2** (Carreras → Cursos Intensivos) | "Cursos Intensivos: Capacitación técnica de alta intensidad y cupos reducidos." | ✏️ Renombrar |
| **Categoría 3** (Cursos → Se mantiene como Cursos) | Mantener                                  | ✅ OK      |
| **Categoría 4** (Pasantías) | "Pasantías 2026: Experiencia real junto a profesionales con amplia trayectoria." | ✏️ Actualizar |
| **Programa 1 (ficticio)** | **Maestría en Biotecnologías Reproductivas** / Híbrida / 2 años | 🔄 Reemplazar |
| **Programa 2 (ficticio)** | **Especialización en Reproducción Bovina** / Presencial / 2 años — CONEAU "A" | 🔄 Reemplazar |
| **Programa 3 (ficticio)** | **Pasantía Profesional Estándar 2026** / Presencial / 5.5 meses | 🔄 Reemplazar |
| **Trust: +30 años**    | "Desde 1993 transformando las biotecnologías reproductivas." | ✅ Mantener |
| **Trust: Alcance**     | "Alumnos de México, Nueva Zelanda y California formándose en IRAC." | ✏️ Actualizar |
| **Trust: Práctica**    | "La Posta del Tigre: residencia universitaria para tu estadía." | ✏️ Actualizar |
| **Trust: Científico**  | "Acreditado por CONEAU (categoría A) — Título otorgado por UNC." | 🔄 Reemplazar |
| **Final CTA**          | Mantener copy actual + link a `mailto:infoiracbiogen@gmail.com` | ✏️ Ajustar |
| **Footer**             | Datos de contacto reales + redes sociales + Aula Virtual | 🔄 Reemplazar |

---

## Mapeo por Bloque: Programas (programas.html)

| Bloque Actual            | Contenido Nuevo                                           | Acción     |
| :----------------------- | :-------------------------------------------------------- | :--------- |
| **Hero Subtítulo**       | "Elegí el programa que se adapte a tu perfil y especialízate junto a los mejores." | ✏️ Ajustar |
| **Filtro "tipo"**        | Cambiar `maestria` → incluye Maestría y Especialización; mantener `curso`, `pasantia` | ✏️ Ajustar |
| **Card 1 (Especialización)** | Maestría en Biotecnologías Reproductivas / Híbrida / 2 años | 🔄 Reemplazar |
| **Card 2 (Curso IATF)**  | Especialización en Reproducción Bovina / Presencial / 2 años | 🔄 Reemplazar |
| **Card 3 (Online)**      | Maestría en Producción de Carne Bovina / Confirmar / -   | 🔄 Reemplazar |
| **Card 4 (Pasantía)**    | Pasantía Profesional Estándar 2026 / Presencial / Feb-Jul | ✏️ Actualizar |
| **Card 5 (Maestría)**    | Ecografía Reproductiva en Bovinos / Presencial / Intensivo | 🔄 Reemplazar |
| **Card 6 (Curso)**       | Evaluación y Manejo de Semen / Presencial / Intensivo     | 🔄 Reemplazar |
| **CTA Intermedio**       | Mantener — ya es correcto                                 | ✅ OK      |
| **Footer**               | Datos reales                                              | 🔄 Reemplazar |

---

## Mapeo por Bloque: Detalle (programa-detalle.html)

| Bloque Actual              | Contenido Nuevo (Maestría en Biotecnologías)             | Acción      |
| :------------------------- | :------------------------------------------------------- | :---------- |
| **Hero: Título**           | "Maestría en Biotecnologías Reproductivas en Bovinos"    | 🔄 Reemplazar |
| **Badge**                  | "Maestría de Posgrado — UNC"                             | 🔄 Reemplazar |
| **Hero: Descripción**      | Texto real de objetivos (párrafo 1)                      | 🔄 Reemplazar |
| **Key Info: Modalidad**    | "Híbrida (70% online — 30% presencial)"                  | 🔄 Reemplazar |
| **Key Info: Duración**     | "2 años"                                                 | 🔄 Reemplazar |
| **Key Info: Inicio**       | "Inscripciones 2026 — A confirmar"                       | 🔄 Reemplazar |
| **Key Info: Ubicación**    | "Paraje Pozo del Tigre, Córdoba"                         | 🔄 Reemplazar |
| **Qué vas a aprender**     | 4 objetivos reales del programa                          | 🔄 Reemplazar |
| **A quién está dirigido**  | Médico Vet., Ing. Agrónomo, Biotecnólogo, Biólogo        | 🔄 Reemplazar |
| **Módulos**                | 1 módulo introductorio + 12 módulos específicos de 8 semanas | 🔄 Reemplazar |
| **Docentes: Docente 1**    | Dr. Humberto Tribulo — Director                          | 🔄 Reemplazar |
| **Docentes: Docente 2**    | Dr. Gabriel Bo — Co-director                             | 🔄 Reemplazar |
| **Sidebar CTA**            | "Preinscripción 2026" + link a formulario real           | ✏️ Ajustar  |

---

## Decisiones de Jerarquía

1. **La home NO incluye:** formularios internos, políticas, Red BioGen, detalle de becas.
2. **La home SÍ incluye:** 3 programas representativos, 4 trust items con datos reales, footer con contacto real.
3. **Investigación y Servicios:** No se incluyen en esta v2 — requieren más contenido especializado.
4. **Las Novedades Internacionales:** Se reflejan en el bloque de confianza (items actualizar, no sección nueva).

---

## Cambios Mínimos Necesarios en Estructura Actual

| Archivo      | Cambios Mínimos                                                    |
| :----------- | :----------------------------------------------------------------- |
| `index.html` | Actualizar nav, textos categorías, 3 cards, 4 trust items, footer  |
| `programas.html` | Reemplazar 6 cards con datos reales, actualizar footer        |
| `programa-detalle.html` | Reemplazar todo el contenido con datos de la Maestría  |
| `styles.css` | Ningún cambio estructural — solo refinamientos si surgen           |
| `script.js`  | Ningún cambio — lógica de filtros ya funciona correctamente        |
