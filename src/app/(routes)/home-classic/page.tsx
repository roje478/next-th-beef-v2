import { AboutClassic } from "@/app/blocks/about";
import Cta from "@/app/blocks/cta/variants/ctaOne/ctaOne";
import { SpecialOffersTwoBlock } from "@/app/blocks/special-offers";
import { TeamOneBlock as TeamBlock } from "@/app/blocks/team";
import WeekSpecials from "@/app/blocks/menu/menu-week-specials/menuWeekSpecials";
import { HeroBasicBlock } from "@/app/blocks/hero";
import { GalleryGrid } from "@/app/blocks/gallery";
import {ServicesList} from "@/app/blocks/services/";

// Data
import { heroBasicClassicData } from "@/app/hooks/data-hero";
import { aboutData } from "@/app/hooks/data-about";
import { specialOffersData } from "@/app/hooks/data-special-offers";
import { menuWeekData } from "@/app/hooks/data-dish";
import { ServiceCardListData } from "@/app/hooks/data-services";
import { ctaData } from "@/app/hooks/data-cta";
import { galleryData } from "@/app/hooks/data-gallery";


const PageHomeClassic = () => {
    return (
		<>
			{/* Hero - Block */}
			<HeroBasicBlock {...heroBasicClassicData} />
			{/* / Hero - Block */}

			{/* About - Block */}
			<AboutClassic {...aboutData} />
			{/* / About - Block */}

			{/* Special Offers - Block */}
			<SpecialOffersTwoBlock {...specialOffersData} />
			{/* / Special Offers - Block */}

			{/* Menu - Block */}
			<WeekSpecials {...menuWeekData} />
			{/* / Menu - Block */}

			{/* Illustrations Card - List - Block */}
			<ServicesList {...ServiceCardListData} />
			{/* / Illustrations Card - List - Block */}

			{/* CTA - Block */}
			<Cta {...ctaData} />
			{/* / CTA - Block */}

			{/* Gallery - Block */}
			<GalleryGrid {...galleryData} />
			{/* / Gallery - Block */}

			{/* Team - Block */}
			<TeamBlock />
			{/* / Team - Block */}
		</>
	);
};

export default PageHomeClassic;
