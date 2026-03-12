---
description: Migra los componentes de una página completa para que coincidan con el HTML de referencia del theme Beef
---

# Migración de Página — Beef Next.js v2

## Flujo de trabajo

El usuario indica qué página quiere migrar (por nombre o ruta). El HTML de referencia se encuentra en la carpeta `html/` del proyecto.

### Mapeo de páginas HTML → Rutas Next.js

| HTML de referencia | Ruta Next.js |
|-------------------|--------------|
| `index.html` | `/intro` |
| `page-home-classic.html` | `/home-classic` |
| `page-home-creative.html` | `/home-creative` |
| `page-about.html` | `/about-us` |
| `page-history.html` | `/history` |
| `page-team.html` | `/chefs` |
| `page-services.html` | `/services` |
| `page-chefs-table.html` | `/chefs-table` |
| `page-testimonials.html` | `/testimonials` |
| `page-menu.html` | `/menu` |
| `page-menu-tabs.html` | `/menu-tabs` |
| `page-menu-full-width.html` | `/menu-full-width` |
| `page-menu-sidebar.html` | `/menu-sidebar` |
| `page-menu-category.html` | `/menu-category` |
| `page-menu-single.html` | `/menu-single` |
| `blog-standard.html` | `/blog` |
| `blog-sidebar-right.html` | `/blog-sidebar` |
| `blog-details.html` | `/blog/[slug]` |
| `blog-category.html` | `/blog/category/[slug]` |
| `page-contact.html` | `/contact-us` |
| `page-events-private-dining.html` | `/events` |
| `page-pricing.html` | `/pricing` |
| `page-faq.html` | `/faq` |
| `page-privacy.html` | `/privacy` |
| `page-terms.html` | `/terms` |
| `page-search-results.html` | `/search` |
| `page-confirmation.html` | `/confirmation` |
| `coming-soon.html` | `/coming-soon` |
| `404.html` | `/not-found` |

### Cómo obtener el HTML de referencia

1. Identifica qué archivo HTML corresponde a la página solicitada usando el mapeo anterior
2. Lee el archivo directamente desde `html/{nombre-archivo}.html`
3. Si la ruta Next.js no existe aún en `src/app/(routes)/`, créala

---

## Paso 0: Checklist de migración

Lee el checklist de migración en la memoria persistente (`memory/migration-checklist.md`) para conocer el estado actual de migración de todas las páginas. Este archivo es la fuente de verdad.

---

## Paso 1: Análisis de la página

1. Lee el `page.tsx` abierto por el usuario e identifica todos los bloques/componentes que importa
2. Analiza el HTML de referencia y mapea cada sección del HTML con su componente correspondiente
3. Consulta el checklist y clasifica cada componente en una de estas categorías:

   - **Ya migrado** `[x]` → NO tocar, saltar
   - **Pendiente** `[ ]` → Migrar
   - **Nuevo componente** (no existe en el proyecto) → Crear y registrar en el checklist
   - **Variante nueva** (existe el bloque pero no esta variante) → Crear variante y registrar

4. Presenta el plan al usuario:
    ```
    Página: /home-classic

    Componentes a migrar:
    ├── ✅ HeroBasicBlock → ya migrado, se salta
    ├── ✅ AboutClassic → ya migrado, se salta
    ├── 🔄 BadgesList → pendiente, se migrará
    ├── 🔄 WeekSpecials → pendiente, se migrará
    ├── 🔄 MasonryGallery → pendiente, se migrará
    ├── 🔄 TeamOneBlock → pendiente, se migrará
    └── 🆕 TestimonialsBlock → nuevo en esta página, se creará

    ¿Proceder con la migración?
    ```

5. Espera confirmación del usuario antes de empezar

---

## Paso 2: Migración secuencial

Migra cada componente pendiente **uno por uno**, en el orden en que aparecen en la página (de arriba hacia abajo).

Para **cada componente**:

### 2a. Análisis del componente

1. Lee el componente actual y detecta todos los sub-componentes que importa
2. Identifica qué sección del HTML de referencia corresponde a este componente
3. Genera un mini-mapa de archivos afectados:
    ```
    Componente: BadgesList
    Ruta: blocks/badges/BadgesList.tsx
    ├── Sub-componente 1: [ruta] → necesita cambios
    ├── Sub-componente 2: [ruta] → sin cambios
    └── Nuevo sub-componente: (si aplica)
    ```
4. Si un sub-componente se usa en otros lugares del proyecto, verifica que los cambios no rompan esos otros usos. Si hay conflicto, pregunta antes de modificar

### 2b. Aplicar cambios

Aplica los cambios siguiendo estas reglas:

**Conversión HTML → JSX:**

- `class` → `className`
- `for` → `htmlFor`
- `<img>` → `<Image>` de `next/image` (con width, height, alt)
- `<a href>` internos → `<Link>` de `next/link`
- Self-closing tags: `<br />`, `<hr />`, `<input />`
- Comentarios: `{/* */}`
- Clases dinámicas: usa `cn()` (clsx + tailwind-merge)

**Estilos:**

- Usa las clases de Tailwind y las clases CSS custom de `src/styles/`
- Si el HTML tiene clases que no existen en el proyecto, avisa antes de agregarlas
- NO modifiques `tailwind.config.js` ni archivos en `src/styles/`
- NO crees archivos CSS nuevos

**Animaciones — WOW.js → Framer Motion:**

- `wow fadeInUp` → `motion.div` con `initial={{ opacity: 0, y: 30 }}` + `whileInView={{ opacity: 1, y: 0 }}`
- `wow fadeInDown` → igual pero con `y: -30`
- `wow fadeInLeft` → con `x: -30`
- `wow fadeInRight` → con `x: 30`
- `wow fadeIn` → solo opacity
- `wow zoomIn` → con `scale: 0.9`
- `data-wow-delay` → `transition={{ delay: X }}`
- `data-wow-duration` → `transition={{ duration: X }}`
- Usa `viewport={{ once: true }}` para que la animación se ejecute solo una vez (mismo comportamiento que WOW.js)
- Si el componente ya tiene animaciones con Framer Motion o GSAP funcionando, mantenlas y solo ajusta si el HTML muestra algo diferente

**Preservar:**

- Lógica funcional existente (state, hooks, eventos)
- Props e interfaces TypeScript existentes (solo agrega si es necesario)
- Estructura de archivos actual

**NO hacer:**

- NO instales dependencias nuevas
- NO borres lógica funcional existente para reemplazarla con algo más simple
- NO dejes console.log en el código final

### 2c. Fidelidad visual

- El resultado debe verse **idéntico** al HTML de referencia
- Respeta espaciados, colores, tipografía, hover/focus states y responsive breakpoints
- Si hay diferencias que no puedes resolver, documéntalas

### 2d. Registrar en checklist

Después de migrar cada componente:

1. Marca la página como `[x] Migrada` en la memoria persistente (`memory/migration-checklist.md`)
2. Si es una página nueva (no estaba en el checklist), agrégala en la sección correspondiente ya marcada como `[x]`
3. Actualiza la tabla de "Resumen de Progreso" con los nuevos conteos
4. Informa al usuario: `✅ /history migrada y registrada en checklist (8/29)`

---

## Paso 3: Actualización del page.tsx

Si el HTML de referencia muestra que la página necesita:
- Agregar nuevos componentes que no estaban antes
- Reordenar los componentes existentes
- Eliminar componentes que ya no aparecen en el HTML

Actualiza el `page.tsx` de la ruta acorde.

---

## Paso 4: Verificación final

Antes de entregar, verifica para cada componente migrado:

- [ ] Todos los sub-componentes relacionados fueron revisados/actualizados
- [ ] TypeScript sin errores
- [ ] Visualmente idéntico al HTML de referencia
- [ ] Lógica funcional preservada
- [ ] Animaciones WOW.js convertidas a Framer Motion
- [ ] Responsive funcional
- [ ] Los cambios en sub-componentes no rompen otros usos en el proyecto
- [ ] Checklist actualizado en ambos archivos (proyecto y memoria)

Presenta el resumen final:
```
Migración de /home-classic completada:
✅ BadgesList — migrado
✅ WeekSpecials — migrado
✅ MasonryGallery — migrado
✅ TeamOneBlock — migrado
⏭️ HeroBasicBlock — ya estaba migrado
⏭️ AboutClassic — ya estaba migrado
⏭️ ServicesList — ya estaba migrado
⏭️ CtaOne — ya estaba migrado

Progreso total: 10/56 componentes migrados
```
