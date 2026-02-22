# Checklist de Migración — Beef Next.js v2

> Registro de componentes migrados al HTML de referencia.
> Actualizado: 2026-02-22

## Leyenda
- [ ] Pendiente
- [x] Migrado
- [~] Parcialmente migrado / en progreso

---

## Componentes Globales (Layout)

| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 1 | Topbar | `components/common/topbar/Topbar.tsx` | [ ] |
| 2 | Header | `components/common/header/Header.tsx` | [ ] |
| 3 | MenuMobile | `components/common/menuMobile/menuMobile.tsx` | [ ] |
| 4 | Footer | `components/common/footer/Footer.tsx` | [x] |
| 5 | LogoLink | `components/common/logo/logoLink.tsx` | [ ] |
| 6 | SocialIcons | `components/common/social/SocialIcons.tsx` | [ ] |

---

## Componentes Compartidos (usados por múltiples bloques)

| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 7 | BlockTitle | `components/common/block-title/block-title.tsx` | [ ] |
| 8 | Divider | `components/common/divider/divider.tsx` | [ ] |
| 9 | DishItem | `components/common/dish/DishItem.tsx` | [ ] |
| 10 | OpeningHours | `components/common/opening-hours/opening-hours.tsx` | [ ] |
| 11 | Breadcrumbs | `components/common/breadcrumbs/Breadcrumbs.tsx` | [x] |
| 12 | HeroInnerBlock | `components/common/hero-inner/Hero-inner.tsx` | [x] |
| 13 | LightBox | `components/common/lightbox/LightBox.tsx` | [ ] |
| 14 | SubscriptionForm | `components/common/forms/SubscriptionForm.tsx` | [ ] |
| 15 | StatusPage | `components/common/status-page/StatusPage.tsx` | [ ] |
| 16 | ComingSoonPageContent | `components/common/coming-soon/ComingSoonPageContent.tsx` | [ ] |

---

## Página: `/intro`

| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 17 | HeroBasicBlock | `blocks/hero/hero-classic-slider/hero-classic-slider.tsx` | [x] |
| 18 | HomePagesBlock | `blocks/homepages/homepages.tsx` | [ ] |
| 19 | BannerInnerPages | `blocks/innerspages/BannerInnerPages.tsx` | [ ] |
| 20 | InnersPagesBlock | `blocks/innerspages/innerspages.tsx` | [ ] |
| 21 | ServicesList | `blocks/services/variants/servicesList/ServicesList.tsx` | [x] |
| 22 | CtaOne | `blocks/cta/variants/ctaOne/ctaOne.tsx` | [x] |

---

## Página: `/home-classic`

| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 23 | HeroBasicBlock | *(mismo #17)* | [x] |
| 24 | AboutClassic | `blocks/about/variants/classic/about-classic.tsx` | [x] |
| 25 | SpecialOffersTwoBlock | `blocks/special-offers/variants/specialofferstwo/specialOffersTwo.tsx` | [x] |
| 26 | ~~BadgesList~~ | `blocks/badges/BadgesList.tsx` | N/A (no en esta página, migrado en /home-creative) |
| 27 | WeekSpecials | `blocks/menu/menu-week-specials/menuWeekSpecials.tsx` | [x] |
| 28 | ServicesList | *(mismo #21)* | [x] |
| 29 | CtaOne | *(mismo #22)* | [x] |
| 30 | MasonryGallery | `blocks/gallery/variants/masonry/MasonryGallery.tsx` | [x] |
| 31 | TeamOneBlock | `blocks/team/variants/teamOne/teamOne.tsx` | [x] |

---

## Página: `/home-creative`

| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 47 | HeroCreativeSliderBlock | `blocks/hero/hero-creative-slider/slider-hero.tsx` | [x] |
| 24 | AboutClassic | *(mismo #24)* | [x] |
| 54 | SpecialOffersBlock | `blocks/special-offers/variants/specialoffers/specialOffers.tsx` | [x] |
| 26 | BadgesList | `blocks/badges/BadgesList.tsx` | [x] |
| 27 | WeekSpecials | *(mismo #27)* | [x] |
| 57 | NewsletterBlock | `blocks/newsletter/NewsletterBlock.tsx` | [x] |
| 53 | ServicesListTwo | `blocks/services/variants/servicesListTwo/ServicesListTwo.tsx` | [x] |
| 22 | CtaOne | *(mismo #22)* | [x] |
| 30 | MasonryGallery | *(mismo #30)* | [x] |
| 31 | TeamOneBlock | *(mismo #31)* | [x] |

---

## Página: `/about-us`

| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 12 | HeroInnerBlock | *(mismo #12)* | [x] |
| 32 | AboutModern | *(mismo #32)* | [x] |
| 33 | AboutTwoCols | *(mismo #33)* | [x] |
| 26 | BadgesList | *(mismo #26)* | [x] |
| 56 | TestimonialsBlock | *(mismo #56)* | [x] |
| 55 | TeamTwoBlock | *(mismo #55)* | [x] |
| 42 | ContactBlock | *(mismo #42)* | [x] |
| 58 | GalleryGrid (small) | `blocks/gallery/variants/grid/GalleryGrid.tsx` | [x] |

---

## Página: `/menu`

| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 12 | HeroInnerBlock | *(mismo #12)* | [x] |
| 25 | SpecialOffersTwoBlock | *(mismo #25)* | [x] |
| 50 | MenuImageBlock | *(mismo #50)* | [x] |
| 43 | CtaTwo | *(mismo #43)* | [x] |
| 26 | BadgesList | *(mismo #26)* | [x] |
| 58 | GalleryGrid (small) | *(mismo #58)* | [x] |

---

## Página: `/menu-full-width`

| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 12 | HeroInnerBlock | *(mismo #12)* | [x] |
| 50 | MenuImageBlock (full) | *(mismo #50, variant="full")* | [x] |
| 43 | CtaTwo | *(mismo #43)* | [x] |
| 26 | BadgesList | *(mismo #26)* | [x] |
| 58 | GalleryGrid (small) | *(mismo #58)* | [x] |

---

## Página: `/menu-tabs`

| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 12 | HeroInnerBlock | *(mismo #12)* | [x] |
| 51 | MenuTabsBlock | *(mismo #51)* | [x] |
| 25 | SpecialOffersTwoBlock | *(mismo #25)* | [x] |
| 43 | CtaTwo | *(mismo #43)* | [x] |
| 26 | BadgesList | *(mismo #26)* | [x] |
| 58 | GalleryGrid (small) | *(mismo #58)* | [x] |

---

## Página: `/menu-sidebar`

| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 12 | HeroInnerBlock | *(mismo #12)* | [x] |
| 52 | MenuSidebar | *(mismo #52)* | [x] |
| 43 | CtaTwo | *(mismo #43)* | [x] |
| 26 | BadgesList | *(mismo #26)* | [x] |
| 58 | GalleryGrid (small) | *(mismo #58)* | [x] |

---

## Bloques adicionales (usados en otras páginas/rutas)

### About
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 32 | AboutModern | `blocks/about/variants/modern/about-modern.tsx` | [x] |
| 33 | AboutTwoCols | `blocks/about/variants/twocols/about-twocols.tsx` | [x] |

### Blog
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 34 | BlogCard | `blocks/blog/BlogCard.tsx` | [ ] |
| 35 | BlogGrid | `blocks/blog/BlogGrid.tsx` | [ ] |
| 36 | BlogSidebar | `blocks/blog/BlogSidebar.tsx` | [ ] |
| 37 | CommentForm | `blocks/blog/CommentForm.tsx` | [ ] |
| 38 | CommentsList | `blocks/blog/CommentsList.tsx` | [ ] |
| 39 | RelatedPosts | `blocks/blog/RelatedPosts.tsx` | [ ] |
| 40 | SocialShare | `blocks/blog/SocialShare.tsx` | [ ] |
| 41 | cardPost | `blocks/blog/cardPost.tsx` | [ ] |

### Contact
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 42 | ContactBlock | `blocks/contact/contact.tsx` | [x] |

### CTA
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 43 | CtaTwo | `blocks/cta/variants/ctaTwo/ctaTwo.tsx` | [x] |

### Events
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 44 | EventsBlock | `blocks/events/variants/events.tsx` | [ ] |
| 45 | CardEvent | `blocks/events/variants/cardEvent.tsx` | [ ] |

### Gallery
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 46 | GalleryBasic | `blocks/gallery/variants/basic/GalleryBasic.tsx` | [ ] |

### Hero
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 47 | HeroCreativeSliderBlock | `blocks/hero/hero-creative-slider/slider-hero.tsx` | [x] |

### History
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 48 | HistoryBlock | `blocks/history/variants/history.tsx` | [ ] |

### Locations
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 49 | LocationsBlock | `blocks/locations/locations.tsx` | [ ] |

### Menu
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 50 | MenuImageBlock | `blocks/menu/menu-image/menuImage.tsx` | [x] |
| 51 | MenuTabsBlock | `blocks/menu/menu-tabs/menuTabs.tsx` | [x] |
| 52 | MenuSidebar | `blocks/menu/menu-sidebar/MenuSidebar.tsx` | [x] |

### Services
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 53 | ServicesListTwo | `blocks/services/variants/servicesListTwo/ServicesListTwo.tsx` | [x] |

### Special Offers
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 54 | SpecialOffersBlock | `blocks/special-offers/variants/specialoffers/specialOffers.tsx` | [x] |

### Team
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 55 | TeamTwoBlock | `blocks/team/variants/teamTwo/teamTwo.tsx` | [x] |

### Newsletter
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 57 | NewsletterBlock | `blocks/newsletter/NewsletterBlock.tsx` | [x] |

### Testimonials
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 56 | TestimonialsBlock | `blocks/testimonials/variants/testimonials.tsx` | [x] |

---

## Resumen de Progreso

| Categoría | Total | Migrados | Pendientes |
|-----------|-------|----------|------------|
| Globales (Layout) | 6 | 1 | 5 |
| Compartidos | 10 | 2 | 8 |
| Página `/intro` | 6 | 3 | 3 |
| Página `/home-classic` | 8 | 8 | 0 |
| Página `/home-creative` | 10 | 10 | 0 |
| Página `/about-us` | 8 | 8 | 0 |
| Página `/menu` | 6 | 6 | 0 |
| Página `/menu-full-width` | 5 | 5 | 0 |
| Página `/menu-tabs` | 6 | 6 | 0 |
| Página `/menu-sidebar` | 5 | 5 | 0 |
| Bloques adicionales | 26 | 15 | 11 |
| **TOTAL (únicos)** | **58** | **25** | **33** |

> Nota: Componentes compartidos entre páginas se cuentan una sola vez en el total.
> BadgesList fue removido de /home-classic pero migrado para /home-creative.
> NewsletterBlock (#57) es nuevo, creado para /home-creative.
> GalleryGrid (#58) soporta variant="small" para galería sin título (about-us).
