# Improvements — Beef Next.js v2
> Priorized list of improvements from audit 2026-03-13

## P0 — Critical (must fix before submission)

- [ ] **SEO-001**: Add page-specific metadata exports to all 28 routes (title, description, OG tags)
- [ ] **SEO-002**: Create `public/robots.txt` with crawl directives
- [ ] **SEO-003**: Create `src/app/sitemap.ts` with all routes
- [ ] **SEO-004**: Create OG image at `public/images/og-image.webp` (1200x630)
- [ ] **SEO-005**: Fix favicon path in layout.tsx (`/images/favicon.webp` → `/favicon.webp`)
- [ ] **SEC-001**: Update swiper to >=12.1.2 (critical prototype pollution vulnerability)
- [ ] **DX-001**: Change package.json name from `nombre-de-tu-proyecto` to `beef-restaurant-nextjs`
- [ ] **CFG-001**: Remove `turbo: undefined` from next.config.mjs (unrecognized key warning)

## P1 — High (should fix before submission)

- [ ] **SEC-002**: Remove unused dependencies: `masonry-layout`, `react-masonry-layout` (only `react-layout-masonry` used)
- [ ] **SEC-003**: Remove unused devDependencies: `@babel/cli`, `@babel/core`, `@babel/preset-env`, `css-loader`, `postcss-loader`
- [ ] **SEC-004**: Move `@types/tailwindcss`, `@types/lodash.throttle` from dependencies to devDependencies
- [ ] **SEO-006**: Replace all `yourwebsite.com` placeholder URLs in layout.tsx metadata and JSON-LD
- [ ] **A11Y-001**: Fix 8 instances of `<a href="#">` — convert to `<Link>` or `<button>` (BlogDetails, MenuSingleBlock, MenuCategoryBlock)
- [ ] **A11Y-002**: Fix 2 empty alt="" attributes (ctaTwo.tsx, SidebarNavigation.tsx)
- [ ] **PERF-001**: Consider loading Font Awesome via npm package instead of CDN `<link>` (render-blocking)
- [ ] **DX-002**: Create user-facing README.md with setup instructions, features, and customization guide

## P2 — Medium (nice to have)

- [ ] **CODE-001**: Externalize hardcoded lorem ipsum in BlogDetails.tsx to data hooks
- [ ] **CODE-002**: Externalize hardcoded search query in SearchResults.tsx
- [ ] **CODE-003**: Make Pagination.tsx a server component (doesn't use hooks/events)
- [ ] **CSS-001**: Review PostCSS config — both `@tailwindcss/nesting` (insiders) and `postcss-nesting` installed
- [ ] **CSS-002**: Review duplicate 2xl breakpoint (same value as xl: 1280px)
- [ ] **SEO-007**: Add breadcrumb JSON-LD schema to inner pages
- [ ] **SEO-008**: Add MenuItem schema to menu pages
- [ ] **SEO-009**: Add Event schema to events page
- [ ] **DX-003**: Create `.env.example` with placeholder variables
- [ ] **DX-004**: Create CHANGELOG.md

## Completed
_(Items move here when fixed)_
