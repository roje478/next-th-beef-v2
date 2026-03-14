export const HeroInnerFaqData = {
	title: "Frequently Asked Questions",
	breadcrumbs: [
		{ id: 1, title: "Home", link: "/" },
		{ id: 2, title: "FAQ", link: "" },
	],
	image: "/bg/bg-cta.webp",
	altText: "Frequently Asked Questions",
};

export const FaqIntroData = {
	subtitle: "Questions & Answers",
	title: "Everything You Need to Know",
	description:
		"Find answers to the most common questions about our restaurant, reservations, menu, and more. If you don't find what you're looking for, feel free to contact us.",
};

export interface FaqCategoryItem {
	id: number;
	question: string;
	answer: string;
}

export interface FaqCategory {
	id: number;
	title: string;
	items: FaqCategoryItem[];
}

export const FaqCategoriesData: FaqCategory[] = [
	{
		id: 1,
		title: "Reservations & Hours",
		items: [
			{
				id: 1,
				question: "Do I need a reservation?",
				answer: "While walk-ins are welcome, we highly recommend making a reservation, especially for dinner service and weekends. You can book online through our website, call us directly, or use our mobile app.",
			},
			{
				id: 2,
				question: "What are your opening hours?",
				answer: "We're open Tuesday to Sunday from 12:00 PM to 10:00 PM. We're closed on Mondays. During holidays, our hours may vary, so please check our website or call ahead.",
			},
			{
				id: 3,
				question: "What is your cancellation policy?",
				answer: "We understand that plans change. Please cancel or modify your reservation at least 24 hours in advance. For parties of 6 or more, we require 48 hours notice.",
			},
			{
				id: 4,
				question: "Can I book for large groups?",
				answer: "Yes! We can accommodate groups of up to 20 people in our main dining room. For larger parties or private events, please contact our events coordinator at events@beef.com or call us at +1 123 456 7890.",
			},
		],
	},
	{
		id: 2,
		title: "Menu & Dining",
		items: [
			{
				id: 5,
				question: "Do you offer vegetarian or vegan options?",
				answer: "While we specialize in premium beef, we offer several vegetarian options and can accommodate vegan requests with advance notice. Our seasonal menu includes fresh salads, grilled vegetables, and plant-based alternatives.",
			},
			{
				id: 6,
				question: "Can you accommodate food allergies?",
				answer: "Absolutely. Please inform your server of any allergies or dietary restrictions when you arrive. Our kitchen team takes allergies seriously and will work to create a safe, delicious dining experience for you.",
			},
			{
				id: 7,
				question: "Where does your beef come from?",
				answer: "We source our beef exclusively from certified organic farms and trusted local suppliers. Our premium cuts include Black Angus, Wagyu, and dry-aged selections, all chosen for their exceptional quality and flavor.",
			},
			{
				id: 8,
				question: "Do you have a wine list?",
				answer: "Yes, we offer an extensive wine list featuring over 100 selections from around the world. Our sommelier is available to help pair wines with your meal. We also have a full bar with craft cocktails and premium spirits.",
			},
		],
	},
];

export interface FaqAdditionalItem {
	id: number;
	title: string;
	description: string;
}

export const FaqAdditionalData: FaqAdditionalItem[] = [
	{
		id: 1,
		title: "Parking & Accessibility",
		description:
			"We offer complimentary valet parking for all guests. Street parking is also available nearby. Our restaurant is fully wheelchair accessible, with ramps at the entrance and accessible restrooms.",
	},
	{
		id: 2,
		title: "Dress Code",
		description:
			"We maintain a smart casual dress code. While jackets are not required, we encourage elegant attire to enhance the dining experience. Athletic wear and flip-flops are not permitted.",
	},
];
