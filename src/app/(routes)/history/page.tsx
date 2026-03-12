import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import HistoryBlock from "@/app/blocks/history/variants/history";
import BadgesList from "@/app/blocks/badges/BadgesList";
import { GalleryGrid } from "@/app/blocks/gallery";

// Data
import { HeroInnerHistoryData } from "@/app/hooks/data";
import { historyData } from "@/app/hooks/data-history";
import { badgesListData } from "@/app/hooks/data-brands";
import { galleryAboutData } from "@/app/hooks/data-gallery";

const HistoryPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerHistoryData.title}
				image={HeroInnerHistoryData.image}
				altText={HeroInnerHistoryData.altText}
				breadcrumbs={HeroInnerHistoryData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* History - Block */}
			<HistoryBlock {...historyData} />
			{/* /History - Block */}

			{/* Badges - Block */}
			<BadgesList {...badgesListData} />
			{/* /Badges - Block */}

			{/* Gallery - Block */}
			<GalleryGrid {...galleryAboutData} variant="small" />
			{/* /Gallery - Block */}
		</>
	);
};

export default HistoryPage;
