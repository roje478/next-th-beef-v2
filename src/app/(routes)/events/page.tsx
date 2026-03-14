import type { Metadata } from "next";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import {
	EventsBlock,
	EventsIntroBlock,
	VenueSpacesBlock,
	EventsServicesBlock,
	EventsContactBlock,
} from "@/app/blocks/events";

export const metadata: Metadata = {
	title: "Events",
	description:
		"Host your next event at our restaurant. Explore venue spaces, catering services, and event packages for weddings, corporate events, and celebrations.",
};

// Data
import {
	HeroInnerEventsData,
	eventsIntroData,
	eventsBlockData,
	venueSpacesData,
	eventsServicesData,
	eventsContactData,
} from "@/app/hooks/data-events";

const EventsPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerEventsData.title}
				image={HeroInnerEventsData.image}
				altText={HeroInnerEventsData.altText}
				breadcrumbs={HeroInnerEventsData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Events Intro - Block */}
			<EventsIntroBlock {...eventsIntroData} />
			{/* /Events Intro - Block */}

			{/* Events - Block */}
			<EventsBlock {...eventsBlockData} />
			{/* /Events - Block */}

			{/* Venue Spaces - Block */}
			<VenueSpacesBlock {...venueSpacesData} />
			{/* /Venue Spaces - Block */}

			{/* Events Services - Block */}
			<EventsServicesBlock {...eventsServicesData} />
			{/* /Events Services - Block */}

			{/* Events Contact Form - Block */}
			<EventsContactBlock {...eventsContactData} />
			{/* /Events Contact Form - Block */}
		</>
	);
};

export default EventsPage;
