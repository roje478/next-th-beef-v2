import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { TeamTwoBlock } from "@/app/blocks/team";
import BadgesList from "@/app/blocks/badges/BadgesList";
import { TestimonialsBlock } from "@/app/blocks/testimonials/";
import { GalleryGrid } from "@/app/blocks/gallery";

// Data
import { HeroInnerChefsData } from "@/app/hooks/data";
import { badgesListData } from "@/app/hooks/data-brands";
import { testimonialsData } from "@/app/hooks/data-testimonials";
import { galleryAboutData } from "@/app/hooks/data-gallery";

const ChefsPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerChefsData.title}
				image={HeroInnerChefsData.image}
				altText={HeroInnerChefsData.altText}
				breadcrumbs={HeroInnerChefsData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Team - Block */}
			<TeamTwoBlock />
			{/* /Team - Block */}

			{/* Badges - Block */}
			<BadgesList {...badgesListData} />
			{/* /Badges - Block */}

			{/* Testimonials - Block */}
			<TestimonialsBlock {...testimonialsData} />
			{/* /Testimonials - Block */}

			{/* Gallery - Block */}
			<GalleryGrid {...galleryAboutData} variant="small" />
			{/* /Gallery - Block */}
		</>
	);
};

export default ChefsPage;
