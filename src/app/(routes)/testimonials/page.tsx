import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import {
	TestimonialsStatsBlock,
	TestimonialsGridBlock,
	TestimonialsCtaBlock,
} from "@/app/blocks/testimonials";
import { GalleryGrid } from "@/app/blocks/gallery";

// Data
import { HeroInnerTestimonialsData } from "@/app/hooks/data-testimonials-page";
import { galleryAboutData } from "@/app/hooks/data-gallery";

const TestimonialsPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerTestimonialsData.title}
				image={HeroInnerTestimonialsData.image}
				altText={HeroInnerTestimonialsData.altText}
				breadcrumbs={HeroInnerTestimonialsData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Stats - Block */}
			<TestimonialsStatsBlock />
			{/* /Stats - Block */}

			{/* Testimonials Grid - Block */}
			<TestimonialsGridBlock />
			{/* /Testimonials Grid - Block */}

			{/* CTA - Block */}
			<TestimonialsCtaBlock />
			{/* /CTA - Block */}

			{/* Gallery - Block */}
			<GalleryGrid {...galleryAboutData} variant="small" />
			{/* /Gallery - Block */}
		</>
	);
};

export default TestimonialsPage;
