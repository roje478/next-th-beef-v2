---
description: Actualiza un componente React existente para que coincida visualmente con el HTML de referencia del theme Beef
---

# Migración de Componente — Beef Next.js v2

## HTML de referencia

El usuario proporcionará el HTML de referencia. Si no lo ha proporcionado, solicítalo antes de continuar:

> "Pega el HTML de referencia del componente que quieres actualizar."

---

## Proceso

### Paso 1: Análisis previo

Antes de modificar código:

1. Analiza el componente actual que está abierto y detecta todos los sub-componentes que importa
2. Revisa el HTML de referencia e identifica qué partes corresponden a cada componente/sub-componente
3. Genera un mini-mapa de archivos afectados:
    ```
    Componente principal: [ruta]
    ├── Sub-componente 1: [ruta] → necesita cambios
    ├── Sub-componente 2: [ruta] → sin cambios
    └── Nuevo sub-componente: (si aplica)
    ```
4. Si un sub-componente se usa en otros lugares del proyecto, verifica que los cambios no rompan esos otros usos. Si hay conflicto, pregunta antes de modificar
5. Pregunta si no estás seguro de qué sub-componente corresponde a qué parte del HTML

### Paso 2: Actualización

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

### Paso 3: Fidelidad visual

- El resultado debe verse **idéntico** al HTML de referencia
- Respeta espaciados, colores, tipografía, hover/focus states y responsive breakpoints
- Si hay diferencias que no puedes resolver, documéntalas

### Paso 4: Verificación

Antes de entregar, verifica:

- [ ] Todos los sub-componentes relacionados fueron revisados/actualizados
- [ ] TypeScript sin errores
- [ ] Visualmente idéntico al HTML de referencia
- [ ] Lógica funcional preservada
- [ ] Animaciones WOW.js convertidas a Framer Motion
- [ ] Responsive funcional
- [ ] Los cambios en sub-componentes no rompen otros usos en el proyecto
