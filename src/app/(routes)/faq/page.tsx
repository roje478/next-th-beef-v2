import type { Metadata } from "next";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { FaqBlock } from "@/app/blocks/faq";
import { CtaTwo } from "@/app/blocks/cta";

export const metadata: Metadata = {
	title: "FAQ",
	description:
		"Find answers to frequently asked questions about reservations, dietary accommodations, private events, dress code, and more.",
};

// Data
import {
	HeroInnerFaqData,
	FaqIntroData,
	FaqCategoriesData,
	FaqAdditionalData,
} from "@/app/hooks/data-faq";
import { ctaTwoData } from "@/app/hooks/data-cta";

const FaqPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerFaqData.title}
				image={HeroInnerFaqData.image}
				altText={HeroInnerFaqData.altText}
				breadcrumbs={HeroInnerFaqData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* FAQ - Block */}
			<FaqBlock
				{...FaqIntroData}
				categories={FaqCategoriesData}
				additionalInfo={FaqAdditionalData}
			/>
			{/* /FAQ - Block */}

			{/* CTA 2 - Block */}
			<CtaTwo {...ctaTwoData} />
			{/* /CTA 2 - Block */}
		</>
	);
};

export default FaqPage;
