import type { Metadata } from "next";
import BadgesList from "@/app/blocks/badges/BadgesList";
import { CtaTwo } from "@/app/blocks/cta";
import { GalleryGrid } from "@/app/blocks/gallery";

export const metadata: Metadata = {
	title: "Menu Full Width",
	description:
		"A full-width menu layout showcasing dishes in an expansive grid with images, prices, and descriptions. Ideal for restaurants with extensive menus.",
};
import MenuImageBlock from "@/app/blocks/menu/menu-image/menuImage";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
// Data
import { HeroInnerMenuFullData } from "@/app/hooks/data";
import { galleryAboutData } from "@/app/hooks/data-gallery";
import { badgesListData } from "@/app/hooks/data-brands";
import { ctaTwoData } from "@/app/hooks/data-cta";
import { categoryDishesData } from "@/app/hooks/data-dish";

const PageMenu = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerMenuFullData.title}
				image={HeroInnerMenuFullData.image}
				altText={HeroInnerMenuFullData.altText}
				breadcrumbs={HeroInnerMenuFullData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Menu - Block */}
			<MenuImageBlock {...categoryDishesData} variant="full" />
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

export default PageMenu;
