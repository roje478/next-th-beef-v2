import type { Metadata } from "next";
import { AboutClassic } from "@/app/blocks/about";
import BadgesList from "@/app/blocks/badges/BadgesList";
import Cta from "@/app/blocks/cta/variants/ctaOne/ctaOne";

export const metadata: Metadata = {
	title: "Home Creative",
	description:
		"A creative homepage design with full-screen hero slider, special offers, masonry gallery, and team showcase. Built with Next.js and Framer Motion animations.",
};
import { MasonryGallery } from "@/app/blocks/gallery";
import ServicesListTwo from "@/app/blocks/services/variants/servicesListTwo/ServicesListTwo";
import { HeroCreativeSliderBlock } from "@/app/blocks/hero";
import { SpecialOffersBlock } from "@/app/blocks/special-offers";
import { TeamOneBlock as TeamBlock } from "@/app/blocks/team";
import WeekSpecials from "@/app/blocks/menu/menu-week-specials/menuWeekSpecials";
import NewsletterBlock from "@/app/blocks/newsletter/NewsletterBlock";

// Data
import { badgesListData } from "@/app/hooks/data-brands";
import { sliderHeroData } from "@/app/hooks/data-hero";
import { aboutData } from "@/app/hooks/data-about";
import { specialOffersData } from "@/app/hooks/data-special-offers";
import { menuWeekData } from "@/app/hooks/data-dish";
import { ServiceCardListData } from "@/app/hooks/data-services";
import { ctaData } from "@/app/hooks/data-cta";
import { galleryData } from "@/app/hooks/data-gallery";

const PageHomeCreative = () => {
    return (
		<>
			{/* Hero Slider - Block */}
			<HeroCreativeSliderBlock {...sliderHeroData} />
			{/* /Hero Slider - Block */}

			{/* About - Block */}
			<AboutClassic {...aboutData} />
			{/* /About - Block */}

			{/* Special Offers 2 - Block */}
			<SpecialOffersBlock {...specialOffersData} />
			{/* /Special Offers 2 - Block */}

			{/* Badges - Block */}
			<BadgesList {...badgesListData} />
			{/* /Badges - Block */}

			{/* Week Specials - Block */}
			<WeekSpecials {...menuWeekData} />
			{/* /Week Specials - Block */}

			{/* Newsletter - Block */}
			<NewsletterBlock />
			{/* /Newsletter - Block */}

			{/* Services - Block */}
			<ServicesListTwo {...ServiceCardListData} />
			{/* /Services - Block */}

			{/* CTA - Block */}
			<Cta {...ctaData} />
			{/* /CTA - Block */}

			{/* Gallery Masonry - Block */}
			<MasonryGallery {...galleryData} />
			{/* /Gallery Masonry - Block */}

			{/* Team - Block */}
			<TeamBlock />
			{/* /Team - Block */}
		</>
	);
};

export default PageHomeCreative;
