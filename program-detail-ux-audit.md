# Program Detail UX Audit

## Contexto

Auditoría UX/CRO de `programa-detalle.html` sobre la base existente del proyecto IRAC BIOGEN.

Objetivo:
- reducir fatiga de scroll
- mantener claridad académica
- sostener conversión sin duplicación torpe
- ordenar mejor la secuencia de lectura

## Problemas detectados

1. La página tenía demasiados bloques completos uno debajo del otro.
   - `Qué vas a aprender`
   - `A quién está dirigido`
   - `Plan de estudios`
   - `Experiencia formativa`
   - `Equipo docente`
   - `Inversión`
   - `Formulario`
   - `Requisitos`
   - `Trust strip`
   - `CTA final`

2. La lectura obligaba a recorrer demasiado antes de llegar al bloque económico y al formulario.

3. Había redundancia funcional entre tres zonas de conversión:
   - sidebar sticky
   - bloque de inversión
   - CTA final

4. WhatsApp, consulta y contacto aparecían varias veces con una lógica muy parecida.

5. La información académica extensa siempre estaba abierta, incluso cuando no era crítica en primera lectura.

## Bloques imprescindibles

Estos debían quedar visibles sin clic extra:
- nombre del programa
- descripción breve
- modalidad
- duración
- inicio / convocatoria
- CTA principal
- a quién está dirigido
- inversión / consulta

## Bloques largos que convenía compactar

- plan de estudios
- experiencia formativa
- equipo docente
- requisitos de ingreso

Estos bloques son valiosos, pero no todos necesitan ocupar altura completa desde el inicio.

## Redundancias detectadas

- `Qué vas a aprender` y `Experiencia formativa` estaban cerca en intención: ambos explicaban valor percibido.
- `Inversión y formas de pago` y `CTA final` empujaban a contacto con mensajes muy próximos.
- `Formulario + WhatsApp` aparecían con una función similar en varios puntos.

## Oportunidades de mejora

1. Crear una vista rápida superior.
   - Resume valor del programa
   - mantiene visible el perfil al que está dirigido
   - evita abrir tres bloques separados muy temprano

2. Agregar navegación interna por secciones.
   - mejora escaneo
   - reduce sensación de página larga

3. Aplicar disclosure progresivo.
   - dejar visible lo esencial
   - compactar detalle académico secundario

4. Diferenciar conversiones por intención.
   - inversión: resolver dudas económicas
   - cierre final: ayudar a decidir y hablar con admisiones

## Propuesta de nueva jerarquía

1. Hero del programa
2. Barra rápida de datos clave
3. Navegación interna
4. Vista rápida del programa
   - qué te vas a llevar
   - a quién está dirigido
   - highlights de modalidad / experiencia / residencia
5. Detalle académico
   - acordeones
6. Inversión y formas de pago
7. Formulario
8. Sidebar sticky de apoyo
9. Trust strip compacto
10. CTA final diferenciado

## Criterio para colapsar y qué no

### Debe quedar visible

- hero
- datos clave
- CTA principal
- a quién está dirigido
- inversión
- acceso al formulario

### Puede ir en acordeón

- plan de estudios: importante, pero puede quedar como único acordeón abierto por defecto
- experiencia formativa: aporta profundidad, no es crítica en primera pasada
- equipo docente: relevante para confianza, pero secundaria respecto de decisión inicial
- requisitos: importante, pero no necesita ocupar altura completa todo el tiempo

## Decisión UX aplicada

- Se fusionó la lectura inicial en una `vista rápida` para bajar scroll temprano.
- Se creó un bloque `detalle académico` con acordeones.
- Se dejó abierto por defecto `Plan de estudios` porque es el contenido largo más consultable.
- Se mantuvo `A quién está dirigido` visible dentro del overview.
- Se diferenció el tono del bloque de inversión y del bloque final.
- Se compactó el trust strip para conservar prueba institucional sin sumar demasiada altura.

## Resultado esperado

- menor fatiga de scroll
- mejor escaneo inicial
- menos repetición de CTAs
- más claridad entre “resolver dudas” y “dar el siguiente paso”
- una experiencia más refinada sin rehacer el sitio
