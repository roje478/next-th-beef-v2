# Auditoría Pre-Marketplace — Next.js Theme

Ejecuta una auditoría completa del theme Next.js para validar si está listo para marketplace.

## Instrucciones

1. **Lee los archivos de contexto:**
   - `README.md` → Descripción, setup
   - `claude.md` → Theme DNA, arquitectura (si existe)
   - `progress.md` → Estado actual (si existe)
   - `package.json` → Dependencias, scripts
   - `next.config.js` → Configuración Next.js
   - `.audits/` → Auditorías anteriores (si existen)

2. **Ejecuta comandos de verificación:**
   ```bash
   npx tsc --noEmit      # TypeScript errors
   npm run lint          # ESLint errors
   npm run build         # Build exitoso
   npm audit             # Vulnerabilidades
   ```

3. **Evalúa las 11 fases:**
   - Fase 1: Theme DNA & Diseño
   - Fase 2: Arquitectura Next.js (App/Pages Router, SSR/SSG)
   - Fase 3: Componentes React
   - Fase 4: TypeScript
   - Fase 5: Estilos & Tailwind
   - Fase 6: Responsive Design
   - Fase 7: Performance (Core Web Vitals)
   - Fase 8: Calidad de Código (ESLint, Prettier)
   - Fase 9: SEO & Metadata
   - Fase 10: Documentación & DX
   - Fase 11: Dependencias & Seguridad

4. **Compara con auditoría anterior** (si existe)

5. **Genera reporte consolidado** con:
   - Validación técnica (tsc, lint, build, audit)
   - Score total (__/110)
   - Lighthouse scores
   - Problemas críticos
   - Mejoras priorizadas (P0, P1, P2)
   - Veredicto final

6. **Crea/Actualiza archivos:**
   - `.audits/audit-[FECHA].md`
   - `.audits/IMPROVEMENTS.md`

## Criterios de Scoring

| Score | Interpretación |
|-------|----------------|
| 99-110 | ✅ Aprobación casi segura |
| 88-98 | ✅ Aprobación probable |
| 77-87 | ⚠️ Necesita revisión |
| <77 | ❌ No listo |

## Reglas

- NO modificar código del theme
- NO mostrar resultados parciales
- NO duplicar mejoras en IMPROVEMENTS.md
- SÍ ejecutar comandos de verificación
- SÍ ser estricto como reviewer de marketplace
- SÍ comparar con auditoría anterior si existe
- SÍ marcar mejoras completadas

## Validaciones Específicas Next.js

### Arquitectura
- Server vs Client Components correctos
- Data fetching apropiado
- Rendering strategy (SSG/SSR/ISR)

### Performance
- next/image para todas las imágenes
- next/font para fuentes
- Bundle size razonable
- Core Web Vitals en verde

### TypeScript
- strict: true
- Zero errores
- Props tipadas

## Output

Reporte consolidado + archivos en `.audits/`
