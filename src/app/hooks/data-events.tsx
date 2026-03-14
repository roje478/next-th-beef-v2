// Hero Inner Data
export const HeroInnerEventsData = {
	title: "Events & Private Dining",
	image: "/bg/bg-cta.webp",
	altText: "Events and Private Dining",
	breadcrumbs: [
		{ id: 1, title: "Home", link: "/" },
		{ id: 2, title: "Events", link: "" },
	],
};

// Events Intro Data
export const eventsIntroData = {
	subtitle: "Exclusive Experiences",
	title: "Create Unforgettable Moments",
	description:
		"Whether you're celebrating a milestone, hosting a corporate gathering, or planning an intimate dinner, our exclusive venues and personalized service ensure every detail is perfect. From custom menus crafted by our award-winning chefs to elegant spaces designed for memorable occasions, we transform your vision into an extraordinary experience.",
};

// Events Block Data
export const eventsBlockData = {
	subtitle: "Events",
	title: "Upcoming Events",
	description:
		"The first restaurant proprietor is believed to have been one A. Boulanger, a soup vendor, who opened his business in 1765.",
	align: "center",
	emptyMessage: "No events available at the moment.",
	items: [
		{
			id: 1,
			image: "/events/event-1.webp",
			subtitle: "birthday",
			title: "celebration",
			pharse: "Lorem Ipsum is simply dummy text of the printingand typesetting.",
		},
		{
			id: 2,
			image: "/events/event-2.webp",
			subtitle: "unplugged",
			title: "steve harvys",
			pharse: "Lorem Ipsum is simply dummy text of the printingand typesetting.",
		},
		{
			id: 3,
			image: "/events/event-3.webp",
			subtitle: "moments",
			title: "sweet wine",
			pharse: "Lorem Ipsum is simply dummy text of the printingand typesetting.",
		},
		{
			id: 4,
			image: "/events/event-4.webp",
			subtitle: "business lunch",
			title: "marffan co.",
			pharse: "Lorem Ipsum is simply dummy text of the printingand typesetting.",
		},
		{
			id: 5,
			image: "/events/event-5.webp",
			subtitle: "celebration",
			title: "champagne",
			pharse: "Lorem Ipsum is simply dummy text of the printingand typesetting.",
		},
		{
			id: 6,
			image: "/events/event-6.webp",
			subtitle: "events",
			title: "concert",
			pharse: "Lorem Ipsum is simply dummy text of the printingand typesetting.",
		},
	],
};

// Venue Spaces Data
export const venueSpacesData = {
	subtitle: "Our Spaces",
	title: "Explore Our Venues",
	description:
		"Each space is meticulously designed to create the perfect atmosphere for your event, combining elegance with functionality.",
	detailsTitle: "Available Venues",
	venues: [
		{
			id: 1,
			icon: "fa-solid fa-users",
			title: "Main Dining Hall",
			capacity: "80 - 120 guests",
			description: "Grand space with soaring ceilings and elegant chandeliers.",
			features: ["Audio/Visual Equipment", "Private Bar", "Dance Floor"],
			animation: "left" as const,
			delay: 0.2,
		},
		{
			id: 2,
			icon: "fa-solid fa-champagne-glasses",
			title: "Private Dining Room",
			capacity: "20 - 40 guests",
			description: "Intimate setting with customizable lighting and elegant décor.",
			features: ["Presentation Screen", "Private Entrance", "Custom Menus"],
			animation: "right" as const,
			delay: 0.4,
		},
		{
			id: 3,
			icon: "fa-solid fa-utensils",
			title: "Chef's Table",
			capacity: "8 - 12 guests",
			description: "Exclusive culinary theater with kitchen views and personal chef service.",
			features: ["Tasting Menu", "Wine Pairing", "Chef Interaction"],
			animation: "left" as const,
			delay: 0.2,
		},
		{
			id: 4,
			icon: "fa-solid fa-wine-glass",
			title: "Garden Terrace",
			capacity: "40 - 60 guests",
			description: "Al fresco dining with city views and seasonal availability.",
			features: ["Outdoor Seating", "Climate Control", "Garden Views"],
			animation: "right" as const,
			delay: 0.4,
		},
	],
	galleryImages: [
		{
			id: 1,
			src: "/gallery/gallery-1a.webp",
			alt: "Restaurant gallery showcase",
			title: "Spring Roll",
			category: "Food",
		},
		{
			id: 2,
			src: "/gallery/gallery-2a.webp",
			alt: "Culinary experience highlights",
			title: "Dinner Series",
			category: "Food",
		},
		{
			id: 3,
			src: "/gallery/gallery-3a.webp",
			alt: "Restaurant ambiance and decor",
			title: "Bevereges",
			category: "Drinks",
		},
		{
			id: 4,
			src: "/gallery/gallery-4a.webp",
			alt: "Dining experience moments",
			title: "Great Moments",
			category: "Events",
		},
		{
			id: 5,
			src: "/gallery/gallery-5a.webp",
			alt: "Restaurant interior and dining ambiance",
			title: "Beautiful Spaces",
			category: "Locations",
		},
		{
			id: 6,
			src: "/gallery/gallery-6a.webp",
			alt: "Fine dining table setting and atmosphere",
			title: "Pleasant Spaces",
			category: "Locations",
		},
		{
			id: 7,
			src: "/gallery/gallery-7a.webp",
			alt: "Signature dishes and culinary presentations",
			title: "House Recipe",
			category: "Food",
		},
		{
			id: 8,
			src: "/gallery/gallery-8a.webp",
			alt: "Restaurant bar and beverage selection",
			title: "Food and Wine",
			category: "Events",
		},
	],
};

// Events Services Data
export const eventsServicesData = {
	subtitle: "What's Included",
	title: "Exceptional Event Services",
	description:
		"Every detail meticulously crafted to exceed your expectations and create lasting memories.",
	columns: [
		{
			id: 1,
			icon: "fa-solid fa-crown",
			title: "Premium Experience",
			iconVariant: "primary" as const,
			animation: "left" as const,
			cards: [
				{
					id: 1,
					icon: "fa-solid fa-concierge-bell",
					title: "Bespoke Menu Creation",
					description:
						"Our award-winning chefs design personalized menus tailored to your taste, dietary needs, and cultural preferences.",
					features: [
						"Multi-course tasting options",
						"Dietary accommodations",
						"Seasonal ingredients",
					],
				},
				{
					id: 2,
					icon: "fa-solid fa-wine-bottle",
					title: "Curated Beverage Program",
					description:
						"Expert sommeliers craft the perfect drink experience with premium selections and creative pairings.",
					features: [
						"Wine pairing consultations",
						"Signature cocktail creation",
						"Full bar service",
					],
				},
				{
					id: 3,
					icon: "fa-solid fa-user-tie",
					title: "Dedicated Event Team",
					description:
						"Personal event coordinator and professional staff ensure flawless execution of every detail.",
					features: [
						"Pre-event planning sessions",
						"Day-of coordination",
						"Professional service staff",
					],
				},
			],
		},
		{
			id: 2,
			icon: "fa-solid fa-wand-magic-sparkles",
			title: "Creative Touches",
			iconVariant: "secondary" as const,
			animation: "right" as const,
			cards: [
				{
					id: 4,
					icon: "fa-solid fa-palette",
					title: "Custom Décor & Design",
					description:
						"Transform your venue with elegant table settings, floral arrangements, and atmospheric lighting.",
					features: [
						"Custom table settings",
						"Ambient lighting design",
						"Floral arrangements",
					],
				},
				{
					id: 5,
					icon: "fa-solid fa-music",
					title: "Entertainment & Technology",
					description:
						"State-of-the-art audio-visual systems and curated entertainment to enhance your event.",
					features: [
						"Live music arrangements",
						"Professional A/V equipment",
						"Presentation support",
					],
				},
				{
					id: 6,
					icon: "fa-solid fa-gift",
					title: "Special Amenities",
					description:
						"Thoughtful extras that elevate your event from memorable to extraordinary.",
					features: [
						"Welcome reception service",
						"Custom printed menus",
						"Valet parking coordination",
					],
				},
			],
		},
	],
	banner: {
		title: "Need Something Unique?",
		text: "We specialize in bringing your vision to life. From intimate gatherings to grand celebrations, our team can accommodate special requests and create bespoke experiences.",
		buttonText: "Discuss Your Event",
		buttonHref: "#contact-form",
	},
};

// Events Contact Form Data
export const eventsContactData = {
	eventTypes: [
		{ value: "", label: "Select Event Type" },
		{ value: "corporate", label: "Corporate Event" },
		{ value: "wedding", label: "Wedding Reception" },
		{ value: "private-party", label: "Private Party" },
		{ value: "chefs-table", label: "Chef's Table" },
		{ value: "cocktail", label: "Cocktail Reception" },
		{ value: "seasonal", label: "Seasonal Event" },
		{ value: "other", label: "Other" },
	],
	guestCounts: [
		{ value: "", label: "Select guest count" },
		{ value: "10-20", label: "10-20 Guests" },
		{ value: "20-40", label: "20-40 Guests" },
		{ value: "40-60", label: "40-60 Guests" },
		{ value: "60-80", label: "60-80 Guests" },
		{ value: "80-100", label: "80-100 Guests" },
		{ value: "100+", label: "100+ Guests" },
	],
};
