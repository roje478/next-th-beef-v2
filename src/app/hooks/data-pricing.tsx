export const HeroInnerPricingData = {
	title: "Pricing & Packages",
	breadcrumbs: [
		{ id: 1, title: "Home", link: "/" },
		{ id: 2, title: "Pricing", link: "" },
	],
	image: "/bg/bg-cta.webp",
	altText: "Premium dining experiences and packages",
};

export const PricingIntroData = {
	subtitle: "Our Packages",
	title: "Choose Your Experience",
	description:
		"From intimate dinners to exclusive chef's table experiences, we offer carefully curated packages designed to elevate your dining journey. Each package includes premium ingredients, expert preparation, and exceptional service.",
};

export interface PricingFeature {
	id: number;
	text: string;
}

export interface PricingCard {
	id: number;
	name: string;
	currency: string;
	amount: string;
	period: string;
	features: PricingFeature[];
	ctaText: string;
	ctaLink: string;
	featured?: boolean;
	badge?: string;
}

export const PricingCardsData: PricingCard[] = [
	{
		id: 1,
		name: "Classic Dining",
		currency: "$",
		amount: "45",
		period: "/person",
		features: [
			{ id: 1, text: "3-course menu" },
			{ id: 2, text: "House wine pairing" },
			{ id: 3, text: "Seasonal ingredients" },
			{ id: 4, text: "Standard seating" },
		],
		ctaText: "Reserve Now",
		ctaLink: "/contact-us",
	},
	{
		id: 2,
		name: "Premium Experience",
		currency: "$",
		amount: "85",
		period: "/person",
		featured: true,
		badge: "Popular",
		features: [
			{ id: 1, text: "5-course tasting menu" },
			{ id: 2, text: "Premium wine pairing" },
			{ id: 3, text: "Chef's special selections" },
			{ id: 4, text: "Priority seating" },
			{ id: 5, text: "Amuse-bouche included" },
		],
		ctaText: "Reserve Now",
		ctaLink: "/contact-us",
	},
	{
		id: 3,
		name: "Chef's Table",
		currency: "$",
		amount: "150",
		period: "/person",
		features: [
			{ id: 1, text: "7-course tasting menu" },
			{ id: 2, text: "Sommelier-curated wine flight" },
			{ id: 3, text: "Personalized menu consultation" },
			{ id: 4, text: "Private dining area" },
			{ id: 5, text: "Kitchen tour included" },
			{ id: 6, text: "Meet the chef experience" },
		],
		ctaText: "Book Experience",
		ctaLink: "/contact-us",
	},
];

export const PricingEventsIntroData = {
	subtitle: "Private Events",
	title: "Celebrate Your Special Moments",
	description:
		"Host your private celebrations in our elegant dining spaces. From intimate gatherings to grand occasions, we create unforgettable experiences tailored to your vision.",
};

export interface EventCard {
	id: number;
	icon: string;
	title: string;
	price: string;
	description: string;
	ctaText: string;
	ctaLink: string;
}

export const PricingEventsData: EventCard[] = [
	{
		id: 1,
		icon: "fa-solid fa-cake-candles",
		title: "Birthday / Anniversary",
		price: "$1,200 for 10 guests",
		description:
			"Celebrate your milestone with a personalized dining experience. Includes custom menu, dedicated server, and complimentary champagne toast.",
		ctaText: "Book Event",
		ctaLink: "/contact-us",
	},
	{
		id: 2,
		icon: "fa-solid fa-briefcase",
		title: "Corporate Dinner",
		price: "$2,500 for 20 guests",
		description:
			"Impress clients and colleagues with our professional event services. Includes AV equipment, private dining room, and customized business menu.",
		ctaText: "Book Event",
		ctaLink: "/contact-us",
	},
	{
		id: 3,
		icon: "fa-solid fa-heart",
		title: "Wedding Reception",
		price: "Custom Pricing",
		description:
			"Create the wedding celebration of your dreams. Our events team will work with you to design a bespoke menu and ambiance for your special day.",
		ctaText: "Contact Us",
		ctaLink: "/contact-us",
	},
];

export const PricingFaqIntroData = {
	subtitle: "Common Questions",
	title: "Pricing FAQ",
	description:
		"Find answers to frequently asked questions about our pricing and packages.",
};

export interface FaqItem {
	id: number;
	question: string;
	answer: string;
}

export const PricingFaqData: FaqItem[] = [
	{
		id: 1,
		question: "Are gratuities included in the pricing?",
		answer: "A service charge of 18% is automatically added to all dining packages. Additional gratuity for exceptional service is at your discretion and greatly appreciated by our team.",
	},
	{
		id: 2,
		question: "Can I customize a package to fit my preferences?",
		answer: "Absolutely! We're happy to accommodate dietary restrictions, allergies, and personal preferences. Contact us at least 48 hours in advance to discuss customization options.",
	},
	{
		id: 3,
		question: "What is your cancellation policy for packages?",
		answer: "Dining packages can be cancelled up to 24 hours in advance for a full refund. Private events require 7 days notice for a full refund. Cancellations within this period may incur fees.",
	},
	{
		id: 4,
		question: "Do you offer gift certificates for your packages?",
		answer: "Yes! Gift certificates are available for all our dining packages and can be purchased online or by calling our reservations team. They make perfect gifts for food enthusiasts and special occasions.",
	},
];

export const PricingCtaData = {
	title: "Need a Custom Package?",
	description:
		"We specialize in creating bespoke dining experiences tailored to your exact requirements. Whether it's a special dietary need, unique celebration, or exclusive event, our team is here to make it perfect.",
	primaryCta: { text: "Contact Our Team", link: "/contact-us" },
	secondaryCta: { text: "Call +1 123 456 7890", link: "tel:+11234567890" },
};

export { galleryAboutData as PricingGalleryData } from "./data-gallery";
