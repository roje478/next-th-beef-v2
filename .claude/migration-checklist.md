# Checklist de Migración — Beef Next.js v2

> Registro de componentes migrados al HTML de referencia.
> Actualizado: 2026-02-21

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
| 11 | Breadcrumbs | `components/common/breadcrumbs/Breadcrumbs.tsx` | [ ] |
| 12 | HeroInnerBlock | `components/common/hero-inner/Hero-inner.tsx` | [ ] |
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
| 25 | SpecialOffersTwoBlock | `blocks/special-offers/variants/specialofferstwo/specialOffersTwo.tsx` | [ ] |
| 26 | BadgesList | `blocks/badges/BadgesList.tsx` | [ ] |
| 27 | WeekSpecials | `blocks/menu/menu-week-specials/menuWeekSpecials.tsx` | [ ] |
| 28 | ServicesList | *(mismo #21)* | [x] |
| 29 | CtaOne | *(mismo #22)* | [x] |
| 30 | MasonryGallery | `blocks/gallery/variants/masonry/MasonryGallery.tsx` | [ ] |
| 31 | TeamOneBlock | `blocks/team/variants/teamOne/teamOne.tsx` | [ ] |

---

## Bloques adicionales (usados en otras páginas/rutas)

### About
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 32 | AboutModern | `blocks/about/variants/modern/about-modern.tsx` | [ ] |
| 33 | AboutTwoCols | `blocks/about/variants/twocols/about-twocols.tsx` | [ ] |

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
| 42 | ContactBlock | `blocks/contact/contact.tsx` | [ ] |

### CTA
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 43 | CtaTwo | `blocks/cta/variants/ctaTwo/ctaTwo.tsx` | [ ] |

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
| 47 | HeroCreativeSliderBlock | `blocks/hero/hero-creative-slider/slider-hero.tsx` | [ ] |

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
| 50 | MenuImageBlock | `blocks/menu/menu-image/menuImage.tsx` | [ ] |
| 51 | MenuTabsBlock | `blocks/menu/menu-tabs/menuTabs.tsx` | [ ] |
| 52 | MenuSidebar | `blocks/menu/menu-sidebar/MenuSidebar.tsx` | [ ] |

### Services
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 53 | ServicesListTwo | `blocks/services/variants/servicesListTwo/ServicesListTwo.tsx` | [ ] |

### Special Offers
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 54 | SpecialOffersBlock | `blocks/special-offers/variants/specialoffers/specialOffers.tsx` | [ ] |

### Team
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 55 | TeamTwoBlock | `blocks/team/variants/teamTwo/teamTwo.tsx` | [ ] |

### Testimonials
| # | Componente | Ruta | Estado |
|---|-----------|------|--------|
| 56 | TestimonialsBlock | `blocks/testimonials/variants/testimonials.tsx` | [ ] |

---

## Resumen de Progreso

| Categoría | Total | Migrados | Pendientes |
|-----------|-------|----------|------------|
| Globales (Layout) | 6 | 1 | 5 |
| Compartidos | 10 | 0 | 10 |
| Página `/intro` | 6 | 3 | 3 |
| Página `/home-classic` | 9 | 4 | 5 |
| Bloques adicionales | 25 | 0 | 25 |
| **TOTAL (únicos)** | **56** | **5** | **51** |

> Nota: Componentes compartidos entre páginas se cuentan una sola vez en el total.
> Los ya migrados (Footer, HeroBasic, ServicesList, CtaOne, AboutClassic) se basan en commits recientes del repo.
