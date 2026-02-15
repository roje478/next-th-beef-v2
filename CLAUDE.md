# TH Beef - Proyecto Next.js

## Descripción del Proyecto
Aplicación web de restaurante construida con Next.js 14, diseñada para ThemeForest. Incluye funcionalidades de blog, menú, reservas, y múltiples páginas de presentación.

## Stack Tecnológico

### Core
- **Framework**: Next.js 14.2.5 (App Router)
- **Runtime**: React 18
- **Lenguaje**: TypeScript 5 (modo estricto)
- **Gestor de Paquetes**: pnpm

### Estilos y UI
- **CSS Framework**: Tailwind CSS 3.4.1
- **Animaciones**: Framer Motion 11.18.2, GSAP 3.13.0
- **Componentes**:
  - Radix UI (Dialogs)
  - Lucide React (Iconos)
  - React Icons
- **Utilidades**:
  - class-variance-authority
  - clsx
  - tailwind-merge

### Funcionalidades
- **Carruseles**: Swiper 11.2.6
- **Galería**: Masonry Layout (múltiples implementaciones)
- **Blog**: Sistema completo con categorías, tags, autores y búsqueda

## Configuración del Entorno

### Instalación de Dependencias

⚠️ **IMPORTANTE**: Este proyecto tiene un problema conocido con el pnpm-store en disco externo. Siempre usar el store local:

```bash
pnpm install --store-dir ~/.pnpm-store
```

### Scripts Disponibles

```bash
# Desarrollo (puerto 4000)
pnpm dev

# Producción
pnpm build
pnpm start
```

### Puerto de Desarrollo
El servidor de desarrollo corre en **http://localhost:4000** (no en el puerto 3000 por defecto)

## Estructura del Proyecto

```
/
├── src/
│   ├── app/
│   │   ├── (routes)/          # Rutas de la aplicación
│   │   │   ├── home-creative/ # Página principal creativa
│   │   │   ├── home-classic/  # Página principal clásica
│   │   │   ├── blog/          # Sistema de blog
│   │   │   │   ├── [slug]/    # Post individual
│   │   │   │   ├── category/  # Categorías
│   │   │   │   ├── author/    # Autores
│   │   │   │   ├── tag/       # Tags
│   │   │   │   └── search/    # Búsqueda
│   │   │   ├── menu/          # Menú del restaurante
│   │   │   ├── menu-tabs/     # Menú con pestañas
│   │   │   ├── menu-full-width/ # Menú ancho completo
│   │   │   ├── menu-sidebar/  # Menú con sidebar
│   │   │   ├── about-us/      # Sobre nosotros
│   │   │   ├── contact-us/    # Contacto
│   │   │   ├── chefs/         # Chefs
│   │   │   ├── history/       # Historia
│   │   │   ├── services/      # Servicios
│   │   │   ├── confirmation/  # Confirmación
│   │   │   ├── coming-soon/   # Próximamente
│   │   │   └── intro/         # Introducción
│   │   └── blocks/            # Componentes de bloques
│   │       ├── contact/
│   │       └── testimonials/
│   └── types/                 # Definiciones de tipos TypeScript
│
├── public/                    # Archivos estáticos
│   ├── sections/
│   ├── gallery/
│   ├── blog/
│   ├── menu/
│   ├── team/
│   ├── about/
│   ├── hero/
│   ├── bg/
│   └── ...
│
└── config files              # Archivos de configuración

```

## Path Aliases

El proyecto usa alias de TypeScript para imports más limpios:

```typescript
// Configurado en tsconfig.json
"@/*" => "./src/*"

// Ejemplo de uso:
import Component from '@/app/components/Component'
```

## Convenciones de Código

### TypeScript
- Modo estricto habilitado
- Usar tipos explícitos cuando sea necesario
- Evitar `any`, usar tipos específicos o `unknown`

### Componentes
- Usar Server Components por defecto (Next.js 14)
- Marcar explícitamente Client Components con `'use client'` cuando sea necesario
- Preferir componentes funcionales

### Estilos
- Usar Tailwind CSS para estilos
- Usar `clsx` o `cn()` (tailwind-merge) para clases condicionales
- Evitar CSS inline cuando sea posible

### Rutas
- El proyecto usa App Router de Next.js 14
- Las rutas están organizadas en `(routes)` para agrupar sin afectar la URL

## Características Implementadas

### Sistema de Blog
- ✅ Listado de posts
- ✅ Vista detallada de post
- ✅ Categorías con páginas dinámicas
- ✅ Tags con páginas dinámicas
- ✅ Autores con páginas dinámicas
- ✅ Búsqueda
- ✅ Comentarios (CommentForm y CommentsList)
- ✅ Compartir en redes sociales (SocialShare)
- ✅ Sidebar con widgets
- ✅ Grid de posts

### Menú
- ✅ Vista completa del menú
- ✅ Menú con tabs
- ✅ Menú con sidebar
- ✅ Menú full-width

### Páginas Institucionales
- ✅ Home (variantes creative y classic)
- ✅ Sobre nosotros
- ✅ Contacto
- ✅ Historia
- ✅ Chefs
- ✅ Servicios

## Dependencias Clave

### Producción
- `next`: 14.2.5
- `react` & `react-dom`: 18
- `framer-motion`: 11.18.2
- `gsap`: 3.13.0
- `swiper`: 11.2.6
- `tailwindcss`: 3.4.17
- `lucide-react`: 0.441.0

### Desarrollo
- `typescript`: 5.8.3
- `eslint`: 8.57.1
- `autoprefixer`: 10.4.21
- `postcss`: 8.5.3

## Notas de Desarrollo

### Actualización de Browserslist
Si ves una advertencia sobre browserslist desactualizado:
```bash
npx update-browserslist-db@latest
```

### Git
- Rama principal: `main`
- Usar commits descriptivos en español
- Seguir el formato: `feat(scope): description` o `fix(scope): description`

### Performance
- Optimizar imágenes usando Next.js Image
- Lazy loading habilitado por defecto
- Code splitting automático con App Router

## Problemas Conocidos

1. **pnpm-store en disco externo**: Usar siempre `--store-dir ~/.pnpm-store` al instalar
2. **Browserslist desactualizado**: Advertencia menor, no afecta funcionalidad

## Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## Notas para Claude

- Al hacer cambios, siempre verificar que el servidor de desarrollo esté corriendo
- Leer archivos existentes antes de sugerir modificaciones
- Mantener la estructura de carpetas consistente con App Router
- Respetar las convenciones de TypeScript estricto
- Usar componentes Server-side por defecto, Client-side solo cuando sea necesario
- Verificar que las animaciones funcionen correctamente después de cambios
- Probar la navegación del blog después de modificaciones
