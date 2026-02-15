# Auditoría Pre-Marketplace — Next.js Premium Theme

## INSTRUCCIONES DE EJECUCIÓN

### Comando Único
```
Ejecuta la auditoría completa del theme Next.js
```

### Comportamiento Esperado
1. Claude lee `claude.md` o `README.md` para contexto del proyecto
2. Claude lee `progress.md` para conocer claims del autor (si existe)
3. Claude lee `.audits/` para auditorías anteriores (si existen)
4. Claude ejecuta las 9 fases secuencialmente (sin mostrar cada una)
5. Claude **valida** los claims del autor (no los asume como verdad)
6. Claude **compara** con auditoría anterior (si existe)
7. Claude entrega UN SOLO reporte consolidado al final
8. Claude **genera/actualiza archivos de seguimiento**

### Lectura de Auditorías Anteriores
Si existe la carpeta `.audits/`:

1. **Buscar última auditoría:** Archivo más reciente `audit-YYYY-MM-DD.md`
2. **Extraer scores anteriores:** Para comparar evolución (↑↓→)
3. **Leer IMPROVEMENTS.md:** Para no duplicar mejoras ya registradas

### Archivos a Generar/Actualizar
Al finalizar la auditoría, Claude debe:

```
.audits/
├── audit-[FECHA].md      ← CREAR: Resultado de esta auditoría
└── IMPROVEMENTS.md       ← ACTUALIZAR: Mejoras pendientes
```

### Reglas para IMPROVEMENTS.md
1. **NO duplicar:** Si una mejora ya existe, no agregarla de nuevo
2. **Marcar resueltas:** Si un problema P0/P1/P2 ya no aparece, marcarlo ✅
3. **Agregar nuevas:** Solo agregar mejoras que no existían antes
4. **Actualizar contadores:** Recalcular totales de Pendiente/Completado

### Reglas Generales
- NO modificar código del theme durante la auditoría
- NO mostrar resultados parciales por fase
- NO asumir que los claims del autor son correctos
- SÍ evaluar contra el Theme DNA definido
- SÍ comparar con auditoría anterior si existe
- SÍ ser estricto como reviewer de marketplace
- SÍ identificar todo lo que pueda causar rechazo

---

## CONTEXTO DEL PROYECTO

| Aspecto | Valor |
|---------|-------|
| **Nombre** | [Nombre del Theme] |
| **Destino** | ThemeForest / Vercel Templates / Gumroad / Otros |
| **Stack** | Next.js + React + TypeScript + Tailwind CSS |
| **Tipo** | [App Router / Pages Router] |
| **Target** | [Industria/Nicho] |

### Archivos de Referencia (Leer antes de auditar)
| Archivo | Propósito | Prioridad |
|---------|-----------|-----------|
| `README.md` | Descripción general, setup | **Obligatorio** |
| `claude.md` | Theme DNA, arquitectura (si existe) | **Obligatorio** |
| `progress.md` | Estado actual, claims del autor | Recomendado |
| `package.json` | Dependencias, scripts | **Obligatorio** |
| `next.config.js` | Configuración Next.js | **Obligatorio** |
| `tsconfig.json` | Configuración TypeScript | **Obligatorio** |

### Estructura Esperada (App Router)
```
project/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Estilos globales
│   ├── (routes)/            # Grupos de rutas
│   └── api/                 # API routes
├── components/
│   ├── ui/                  # Componentes base (buttons, cards, etc.)
│   ├── layout/              # Header, Footer, Sidebar
│   └── sections/            # Secciones de página
├── lib/                     # Utilidades, helpers
├── hooks/                   # Custom hooks
├── types/                   # TypeScript types
├── public/                  # Assets estáticos
├── styles/                  # CSS adicional (si aplica)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Estructura Esperada (Pages Router)
```
project/
├── pages/
│   ├── _app.tsx             # App wrapper
│   ├── _document.tsx        # Document wrapper
│   ├── index.tsx            # Homepage
│   └── api/                 # API routes
├── components/
├── lib/
├── styles/
├── public/
└── ...
```

---

## FASE 1: Theme DNA & Diseño (Peso: 15%)

**Evaluar identidad visual:**
- [ ] Propuesta de diseño única y diferenciada
- [ ] Coherencia visual entre todas las páginas
- [ ] Sistema de diseño consistente
- [ ] Paleta de colores bien definida
- [ ] Tipografía con jerarquía clara
- [ ] Espaciado y ritmo visual consistente
- [ ] Sensación premium / profesional

**Señales de alarma:**
- Diseño genérico o "template-like"
- Inconsistencias visuales entre páginas
- Falta de personalidad
- Animaciones excesivas o distractoras
- UI desactualizada

**Preguntas clave:**
- ¿Se ve como un theme de $49+ o uno gratuito?
- ¿Tiene identidad visual propia?
- ¿Los detalles están pulidos?

---

## FASE 2: Arquitectura Next.js (Peso: 15%)

### 2.1 Estructura del Proyecto
**App Router:**
- [ ] Uso correcto de `app/` directory
- [ ] Layouts anidados apropiados
- [ ] Loading states (`loading.tsx`)
- [ ] Error boundaries (`error.tsx`)
- [ ] Not found pages (`not-found.tsx`)
- [ ] Metadata bien configurada

**Pages Router:**
- [ ] Estructura de `pages/` correcta
- [ ] `_app.tsx` configurado
- [ ] `_document.tsx` si es necesario
- [ ] getStaticProps / getServerSideProps apropiados

### 2.2 Server vs Client Components
- [ ] Uso apropiado de Server Components (default)
- [ ] `'use client'` solo donde es necesario
- [ ] No hay `'use client'` innecesarios en componentes sin interactividad
- [ ] Datos fetched en Server Components cuando es posible

### 2.3 Data Fetching
- [ ] Fetch en Server Components (no useEffect para datos iniciales)
- [ ] Uso de `cache` y `revalidate` apropiado
- [ ] No hay waterfalls de requests innecesarios
- [ ] Parallel data fetching donde aplica

### 2.4 Rendering Strategy
- [ ] SSG para páginas estáticas
- [ ] SSR solo cuando es necesario
- [ ] ISR configurado si aplica
- [ ] generateStaticParams para rutas dinámicas

**Scoring Arquitectura: ___/10**

---

## FASE 3: Componentes React (Peso: 12%)

### 3.1 Estructura de Componentes
- [ ] Componentes pequeños y reutilizables
- [ ] Separación clara: UI / Layout / Sections / Features
- [ ] Props tipadas con TypeScript
- [ ] Default exports para páginas, named exports para componentes

### 3.2 Patrones React
- [ ] Hooks usados correctamente
- [ ] No hay prop drilling excesivo
- [ ] Context usado apropiadamente (no abusado)
- [ ] Keys en listas correctas
- [ ] useCallback/useMemo donde tiene sentido (no prematuramente)

### 3.3 Componentes de UI
| Componente | Existe | Variantes | Estados | A11y |
|------------|--------|-----------|---------|------|
| Button | [ ] | [ ] | [ ] | [ ] |
| Card | [ ] | [ ] | [ ] | [ ] |
| Input | [ ] | [ ] | [ ] | [ ] |
| Modal | [ ] | [ ] | [ ] | [ ] |
| Dropdown | [ ] | [ ] | [ ] | [ ] |
| Tabs | [ ] | [ ] | [ ] | [ ] |
| Toast | [ ] | [ ] | [ ] | [ ] |

### 3.4 Calidad del Código
- [ ] Componentes no superan 200-300 líneas
- [ ] Lógica compleja extraída a hooks
- [ ] No hay código duplicado
- [ ] Nombres descriptivos

**Scoring Componentes: ___/10**

---

## FASE 4: TypeScript (Peso: 10%)

### 4.1 Configuración
- [ ] `strict: true` en tsconfig.json
- [ ] No `any` innecesarios
- [ ] Paths aliases configurados (@/components, etc.)

### 4.2 Tipado
- [ ] Props tipadas en todos los componentes
- [ ] Interfaces/Types para datos
- [ ] API responses tipadas
- [ ] No uso de `as` casting innecesario
- [ ] Generics donde aplica

### 4.3 Errores
- [ ] Zero errores de TypeScript
- [ ] Zero warnings ignorados con @ts-ignore

**Verificar:**
```bash
npx tsc --noEmit
```

**Scoring TypeScript: ___/10**

---

## FASE 5: Estilos & Tailwind (Peso: 10%)

### 5.1 Configuración Tailwind
- [ ] `tailwind.config.ts` bien estructurado
- [ ] Colores custom definidos
- [ ] Fuentes configuradas
- [ ] Breakpoints (si custom)
- [ ] Plugins necesarios

### 5.2 Uso de Tailwind
- [ ] Clases utilitarias preferidas
- [ ] Componentes extraídos con @apply solo si se repiten 3+ veces
- [ ] No mezcla con CSS vanilla innecesariamente
- [ ] Dark mode implementado (si aplica)
- [ ] Responsive con mobile-first

### 5.3 CSS Modules (si aplica)
- [ ] Nombrado consistente
- [ ] No conflictos de estilos
- [ ] Scoped correctamente

### 5.4 Animaciones
- [ ] Framer Motion o CSS transitions
- [ ] No animaciones bloqueantes
- [ ] Respeta `prefers-reduced-motion`
- [ ] 60fps sin jank

**Scoring Estilos: ___/10**

---

## FASE 6: Responsive Design (Peso: 10%)

### 6.1 Breakpoints
| Viewport | Verificar |
|----------|-----------|
| 320px | Mobile small |
| 375px | Mobile standard |
| 768px | Tablet |
| 1024px | Desktop small |
| 1280px | Desktop |
| 1536px | Large desktop |

### 6.2 Mobile
- [ ] Mobile-first implementado
- [ ] Touch targets ≥ 44px
- [ ] No horizontal scroll
- [ ] Navegación móvil funcional
- [ ] Formularios usables en touch
- [ ] Imágenes responsive (next/image)

### 6.3 Desktop
- [ ] Aprovecha el espacio disponible
- [ ] Hover states funcionan
- [ ] No hay elementos huérfanos

**Scoring Responsive: ___/10**

---

## FASE 7: Performance (Peso: 12%)

### 7.1 Core Web Vitals
- [ ] LCP < 2.5s
- [ ] FID/INP < 100ms
- [ ] CLS < 0.1

### 7.2 Imágenes
- [ ] Uso de `next/image` en todas las imágenes
- [ ] Formatos modernos (WebP, AVIF)
- [ ] Sizes y srcset correctos
- [ ] Placeholder blur para LCP
- [ ] Lazy loading para below-the-fold
- [ ] Priority para LCP image

### 7.3 Fonts
- [ ] `next/font` para fuentes
- [ ] Font display swap
- [ ] Subset de caracteres si es posible
- [ ] No FOUT/FOIT notable

### 7.4 Bundle
- [ ] Bundle size razonable
- [ ] Code splitting automático funcionando
- [ ] Dynamic imports para componentes pesados
- [ ] No dependencias innecesarias
- [ ] Tree shaking funcionando

### 7.5 Caching
- [ ] Static assets cacheados
- [ ] API responses con cache headers apropiados
- [ ] ISR configurado donde aplica

**Verificar con:**
```bash
npm run build
# Revisar output de build
# Correr Lighthouse
```

**Scoring Performance: ___/10**

---

## FASE 8: Calidad de Código (Peso: 8%)

### 8.1 ESLint
- [ ] ESLint configurado
- [ ] Zero errores
- [ ] Zero warnings (o justificados)
- [ ] Rules de Next.js activadas

### 8.2 Prettier
- [ ] Configurado y consistente
- [ ] Todo el código formateado

### 8.3 Estructura de Archivos
- [ ] Nombrado consistente (kebab-case / PascalCase)
- [ ] Index files donde tiene sentido
- [ ] No hay archivos huérfanos
- [ ] Imports ordenados

### 8.4 Git
- [ ] .gitignore correcto
- [ ] No hay archivos sensibles
- [ ] No hay node_modules, .next, etc.

**Verificar:**
```bash
npm run lint
npm run build
```

**Scoring Código: ___/10**

---

## FASE 9: SEO & Metadata (Peso: 8%)

### 9.1 Metadata (App Router)
- [ ] Metadata en layout.tsx raíz
- [ ] Title y description en todas las páginas
- [ ] Open Graph configurado
- [ ] Twitter cards configurado
- [ ] Favicon y app icons

### 9.2 SEO Técnico
- [ ] Sitemap.xml generado
- [ ] Robots.txt presente
- [ ] Canonical URLs
- [ ] Structured data (JSON-LD) donde aplica
- [ ] No contenido duplicado

### 9.3 Accesibilidad
- [ ] Semántica HTML correcta
- [ ] ARIA labels donde necesario
- [ ] Contraste WCAG AA
- [ ] Navegación por teclado
- [ ] Focus visible
- [ ] Alt text en imágenes
- [ ] Skip links

**Scoring SEO: ___/10**

---

## FASE 10: Documentación & DX (Peso: 10%)

### 10.1 README.md
- [ ] Descripción clara del proyecto
- [ ] Screenshots / Demo link
- [ ] Requisitos (Node version, etc.)
- [ ] Instalación paso a paso
- [ ] Variables de entorno documentadas
- [ ] Scripts disponibles
- [ ] Estructura de carpetas explicada

### 10.2 Setup Experience
- [ ] `npm install` sin errores
- [ ] `npm run dev` funciona de inmediato
- [ ] `.env.example` presente
- [ ] No requiere configuración compleja

### 10.3 Personalización
- [ ] Cómo cambiar colores/fuentes
- [ ] Cómo agregar páginas
- [ ] Cómo modificar componentes
- [ ] Cómo conectar CMS/API (si aplica)

### 10.4 Archivos de Marketplace
- [ ] Preview images de calidad
- [ ] Demo desplegado (Vercel/Netlify)
- [ ] Changelog
- [ ] Licencia clara

**Scoring Documentación: ___/10**

---

## FASE 11: Dependencias & Seguridad (Peso: 5%)

### 11.1 package.json
- [ ] Dependencias actualizadas
- [ ] No vulnerabilidades críticas
- [ ] Scripts correctos (dev, build, start, lint)
- [ ] No dependencias innecesarias

### 11.2 Seguridad
- [ ] No secrets en código
- [ ] Variables de entorno para datos sensibles
- [ ] No XSS vulnerabilities
- [ ] Sanitización de inputs

**Verificar:**
```bash
npm audit
```

### 11.3 Licencias
- [ ] Todas las dependencias con licencias compatibles
- [ ] Créditos donde sea necesario
- [ ] Assets con licencias apropiadas

**Scoring Dependencias: ___/10**

---

## OUTPUT: REPORTE CONSOLIDADO

```
════════════════════════════════════════════════════════════════
                    AUDITORÍA PRE-MARKETPLACE
                    [Nombre del Theme] - Next.js
════════════════════════════════════════════════════════════════

RESUMEN EJECUTIVO
─────────────────
Estado General    : [Excelente / Bueno / Necesita trabajo / No listo]
Sensación Premium : ⭐⭐⭐⭐⭐ (1-5)
Probabilidad de Aprobación: ____%
Auditoría #       : ___ (Primera / Segunda / etc.)

════════════════════════════════════════════════════════════════
COMPARACIÓN CON AUDITORÍA ANTERIOR
════════════════════════════════════════════════════════════════
(Si es la primera auditoría, omitir esta sección)

| Métrica | Anterior | Actual | Cambio |
|---------|----------|--------|--------|
| Score Total | __/110 | __/110 | ↑↓→ __ |
| Problemas P0 | __ | __ | ↑↓→ __ |
| Problemas P1 | __ | __ | ↑↓→ __ |

Mejoras completadas desde última auditoría:
- [ ] ID - Descripción

════════════════════════════════════════════════════════════════
SCORING POR FASE
════════════════════════════════════════════════════════════════

| #  | Fase                      | Anterior | Actual | Cambio | Estado |
|----|---------------------------|----------|--------|--------|--------|
| 1  | Theme DNA & Diseño        | __/10    | __/10  | ↑↓→    | ✅/⚠️/❌ |
| 2  | Arquitectura Next.js      | __/10    | __/10  | ↑↓→    | ✅/⚠️/❌ |
| 3  | Componentes React         | __/10    | __/10  | ↑↓→    | ✅/⚠️/❌ |
| 4  | TypeScript                | __/10    | __/10  | ↑↓→    | ✅/⚠️/❌ |
| 5  | Estilos & Tailwind        | __/10    | __/10  | ↑↓→    | ✅/⚠️/❌ |
| 6  | Responsive Design         | __/10    | __/10  | ↑↓→    | ✅/⚠️/❌ |
| 7  | Performance               | __/10    | __/10  | ↑↓→    | ✅/⚠️/❌ |
| 8  | Calidad de Código         | __/10    | __/10  | ↑↓→    | ✅/⚠️/❌ |
| 9  | SEO & Metadata            | __/10    | __/10  | ↑↓→    | ✅/⚠️/❌ |
| 10 | Documentación & DX        | __/10    | __/10  | ↑↓→    | ✅/⚠️/❌ |
| 11 | Dependencias & Seguridad  | __/10    | __/10  | ↑↓→    | ✅/⚠️/❌ |
|----|---------------------------|----------|--------|--------|--------|
|    | **TOTAL**                 | __/110   | __/110 | ↑↓→    |        |

(Si es primera auditoría, columna "Anterior" muestra "N/A")

Escala: 99-110 ✅ Aprobación segura | 88-98 ✅ Probable | 77-87 ⚠️ Revisar | <77 ❌ No listo

════════════════════════════════════════════════════════════════
VALIDACIÓN TÉCNICA
════════════════════════════════════════════════════════════════

| Check | Comando | Resultado |
|-------|---------|-----------|
| TypeScript | `npx tsc --noEmit` | ✅/❌ ___ errores |
| ESLint | `npm run lint` | ✅/❌ ___ errores |
| Build | `npm run build` | ✅/❌ |
| Audit | `npm audit` | ✅/❌ ___ vulnerabilidades |
| Lighthouse | Performance | __/100 |
| Lighthouse | Accessibility | __/100 |
| Lighthouse | Best Practices | __/100 |
| Lighthouse | SEO | __/100 |

════════════════════════════════════════════════════════════════
PROBLEMAS CRÍTICOS (Bloquean envío)
════════════════════════════════════════════════════════════════

| # | Problema | Ubicación | Tipo | Impacto |
|---|----------|-----------|------|---------|
| 1 |          |           | Hard/Soft |      |

════════════════════════════════════════════════════════════════
CORRECCIONES OBLIGATORIAS
════════════════════════════════════════════════════════════════

Prioridad P0 (Bloquean):
1. [Corrección] → Archivo(s) → Tiempo estimado

Prioridad P1 (Muy importantes):
1. [Corrección] → Archivo(s) → Tiempo estimado

════════════════════════════════════════════════════════════════
MEJORAS RECOMENDADAS
════════════════════════════════════════════════════════════════

| # | Mejora | Impacto | Esfuerzo |
|---|--------|---------|----------|
| 1 |        | Alto/Medio/Bajo | |

════════════════════════════════════════════════════════════════
VEREDICTO FINAL
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [ ] ✅ LISTO PARA ENVIAR                                  │
│                                                             │
│  [ ] ⚠️ CASI LISTO - Requiere:                             │
│      1.                                                     │
│      2.                                                     │
│                                                             │
│  [ ] ❌ NO LISTO - Problemas principales:                   │
│      1.                                                     │
│      2.                                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘

════════════════════════════════════════════════════════════════
INFORMACIÓN PARA MARKETPLACE
════════════════════════════════════════════════════════════════

Nombre sugerido    : ______________________
Categoría          : ______________________
Precio sugerido    : $__
Tags               : nextjs, react, typescript, tailwind, ...
Demo URL           : ______________________

════════════════════════════════════════════════════════════════
CHECKLIST PRE-ENVÍO
════════════════════════════════════════════════════════════════

Código:
[ ] TypeScript sin errores
[ ] ESLint sin errores
[ ] Build exitoso
[ ] Zero vulnerabilidades críticas

Performance:
[ ] Lighthouse Performance ≥ 90
[ ] Core Web Vitals en verde
[ ] Imágenes optimizadas con next/image
[ ] Fonts con next/font

Documentación:
[ ] README completo
[ ] .env.example presente
[ ] Demo desplegado
[ ] Preview images listas

Archivos:
[ ] .gitignore correcto
[ ] No secrets en código
[ ] Licencias verificadas

════════════════════════════════════════════════════════════════
                      FIN DEL REPORTE
════════════════════════════════════════════════════════════════
```

---

## NOTAS PARA CLAUDE

### Al ejecutar esta auditoría:
1. Lee archivos de contexto (README, claude.md, package.json)
2. Lee auditorías anteriores si existen
3. Ejecuta comandos de verificación (tsc, lint, build)
4. Evalúa cada fase internamente
5. Valida claims del autor
6. NO muestres resultados parciales
7. Genera SOLO el reporte consolidado final
8. Genera archivos en `.audits/`

### Comandos de verificación:
```bash
# TypeScript
npx tsc --noEmit

# ESLint
npm run lint

# Build
npm run build

# Vulnerabilidades
npm audit

# Bundle analysis (si está configurado)
npm run analyze
```

### Criterio de scoring:
- **10/10**: Perfecto, supera expectativas
- **8-9/10**: Excelente, mínimos ajustes
- **6-7/10**: Bueno, necesita mejoras
- **4-5/10**: Deficiente, problemas significativos
- **1-3/10**: Crítico, requiere rehacer

---

## GENERACIÓN DE ARCHIVOS

Al finalizar, crear:
1. `.audits/audit-[YYYY-MM-DD].md` - Reporte completo
2. `.audits/IMPROVEMENTS.md` - Actualizar con mejoras (sin duplicar)

Confirmar al final:
```
📁 Archivos generados:
- .audits/audit-YYYY-MM-DD.md (nuevo)
- .audits/IMPROVEMENTS.md (creado/actualizado)
```
