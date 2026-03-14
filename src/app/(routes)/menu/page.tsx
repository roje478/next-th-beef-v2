import type { Metadata } from "next";
import HeroInner from "@/app/components/common/hero-inner/Hero-inner";
import { HeroInnerMenuData } from "@/app/hooks/data";
import { SpecialOffersTwoBlock } from "@/app/blocks/special-offers";

export const metadata: Metadata = {
	title: "Menu",
	description:
		"Explore our restaurant menu featuring premium steaks, appetizers, desserts, and curated wine selections. Beautifully designed with image cards.",
};
import { specialOffersData } from "@/app/hooks/data-special-offers";
import MenuImageBlock from "@/app/blocks/menu/menu-image/menuImage";
import { categoryDishesData } from "@/app/hooks/data-dish";
import BadgesList from "@/app/blocks/badges/BadgesList";
import { badgesListData } from "@/app/hooks/data-brands";
import { GalleryGrid } from "@/app/blocks/gallery";
import { galleryAboutData } from "@/app/hooks/data-gallery";
import { CtaTwo } from "@/app/blocks/cta";
import { ctaTwoData } from "@/app/hooks/data-cta";

const MenuPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInner
				title={HeroInnerMenuData.title}
				image={HeroInnerMenuData.image}
				altText={HeroInnerMenuData.altText}
				breadcrumbs={HeroInnerMenuData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Special Offers - Block */}
			<SpecialOffersTwoBlock {...specialOffersData} />
			{/* /Special Offers - Block */}

			{/* Menu - Block */}
			<MenuImageBlock {...categoryDishesData} />
			{/* /Menu - Block */}

			{/* CTA - Block */}
			<CtaTwo {...ctaTwoData} />
			{/* /CTA - Block */}

			{/* Badges - Block */}
			<BadgesList {...badgesListData} />
			{/* /Badges - Block */}

			{/* Gallery - Block */}
			<GalleryGrid {...galleryAboutData} variant="small" />
			{/* /Gallery - Block */}
		</>
	);
};

export default MenuPage;
