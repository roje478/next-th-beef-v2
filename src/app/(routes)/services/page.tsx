import type { Metadata } from "next";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import ServicesListTwo from "@/app/blocks/services/variants/servicesListTwo/ServicesListTwo";
import { EventsBlock } from "@/app/blocks/events";

export const metadata: Metadata = {
	title: "Services",
	description:
		"Discover our restaurant services including private dining, catering, event hosting, and special celebrations. Tailored experiences for every occasion.",
};
import BadgesList from "@/app/blocks/badges/BadgesList";
import { TestimonialsBlock } from "@/app/blocks/testimonials/";

// Data
import { HeroInnerServicesData } from "@/app/hooks/data";
import { ServiceCardListData } from "@/app/hooks/data-services";
import { eventsBlockData } from "@/app/hooks/data-events";
import { badgesListData } from "@/app/hooks/data-brands";
import { testimonialsData } from "@/app/hooks/data-testimonials";

const ServicesPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerServicesData.title}
				image={HeroInnerServicesData.image}
				altText={HeroInnerServicesData.altText}
				breadcrumbs={HeroInnerServicesData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Services - Block */}
			<ServicesListTwo {...ServiceCardListData} />
			{/* /Services - Block */}

			{/* Events - Block */}
			<EventsBlock {...eventsBlockData} />
			{/* /Events - Block */}

			{/* Badges - Block */}
			<BadgesList {...badgesListData} />
			{/* /Badges - Block */}

			{/* Testimonials - Block */}
			<TestimonialsBlock {...testimonialsData} />
			{/* /Testimonials - Block */}
		</>
	);
};

export default ServicesPage;
