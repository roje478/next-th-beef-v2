import type { Metadata } from "next";
import BadgesList from "@/app/blocks/badges/BadgesList";
import { CtaTwo } from "@/app/blocks/cta";
import { GalleryGrid } from "@/app/blocks/gallery";

export const metadata: Metadata = {
	title: "Menu Tabs",
	description:
		"A tabbed menu layout with category filters, two-column design, and smooth transitions. Perfect for organizing food and drink categories.",
};
import { MenuTabsBlock } from "@/app/blocks/menu";
import { SpecialOffersTwoBlock } from "@/app/blocks/special-offers";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";

// Data
import { badgesListData } from "@/app/hooks/data-brands";
import { HeroInnerMenuTabsData } from "@/app/hooks/data";
import { specialOffersData } from "@/app/hooks/data-special-offers";
import { ctaTwoData } from "@/app/hooks/data-cta";
import { galleryAboutData } from "@/app/hooks/data-gallery";
import { categoryDishesData } from "@/app/hooks/data-dish";

const PageMenu = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerMenuTabsData.title}
				image={HeroInnerMenuTabsData.image}
				altText={HeroInnerMenuTabsData.altText}
				breadcrumbs={HeroInnerMenuTabsData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Menu Tabs - Block */}
			<MenuTabsBlock {...categoryDishesData} />
			{/* /Menu Tabs - Block */}

			{/* Special Offers - Block */}
			<SpecialOffersTwoBlock {...specialOffersData} />
			{/* /Special Offers - Block */}

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
