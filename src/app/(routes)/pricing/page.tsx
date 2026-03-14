import type { Metadata } from "next";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import {
	PricingIntro,
	PricingGrid,
	PricingEvents,
	PricingFaq,
	PricingCta,
} from "@/app/blocks/pricing";
import { GalleryGrid } from "@/app/blocks/gallery";

export const metadata: Metadata = {
	title: "Pricing",
	description:
		"View our pricing plans for events, private dining, and catering services. Flexible packages for every budget and occasion.",
};

// Data
import {
	HeroInnerPricingData,
	PricingIntroData,
	PricingCardsData,
	PricingEventsIntroData,
	PricingEventsData,
	PricingFaqIntroData,
	PricingFaqData,
	PricingCtaData,
	PricingGalleryData,
} from "@/app/hooks/data-pricing";

const PricingPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerPricingData.title}
				image={HeroInnerPricingData.image}
				altText={HeroInnerPricingData.altText}
				breadcrumbs={HeroInnerPricingData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Pricing Intro - Block */}
			<PricingIntro {...PricingIntroData} />
			{/* /Pricing Intro - Block */}

			{/* Pricing Grid - Block */}
			<PricingGrid cards={PricingCardsData} />
			{/* /Pricing Grid - Block */}

			{/* Private Events - Block */}
			<PricingEvents
				{...PricingEventsIntroData}
				events={PricingEventsData}
			/>
			{/* /Private Events - Block */}

			{/* Pricing FAQ - Block */}
			<PricingFaq {...PricingFaqIntroData} faqs={PricingFaqData} />
			{/* /Pricing FAQ - Block */}

			{/* Pricing CTA - Block */}
			<PricingCta {...PricingCtaData} />
			{/* /Pricing CTA - Block */}

			{/* Gallery - Block */}
			<GalleryGrid {...PricingGalleryData} variant="small" />
			{/* /Gallery - Block */}
		</>
	);
};

export default PricingPage;
