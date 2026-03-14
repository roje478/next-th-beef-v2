export const HeroInnerMenuSingleData = {
	title: "Grilled Black Angus Sirloin Steak",
	breadcrumbs: [
		{ id: 1, title: "Home", link: "/" },
		{ id: 2, title: "Menu", link: "/menu" },
		{ id: 3, title: "Grilled Black Angus Sirloin Steak", link: "/menu-single" },
	],
	image: "/bg/bg-blog.webp",
	altText: "Culinary blog and recipes",
};

export const menuSingleData = {
	categories: [
		{ label: "Main Course", href: "/menu" },
		{ label: "Premium Beef", href: "/menu" },
	],
	chef: "Werner Kuchler",
	price: "$42.50",
	description: [
		"Our signature Grilled Black Angus Sirloin Steak is a masterpiece of culinary craftsmanship. We source only the finest Black Angus beef, aged to perfection for 28 days to ensure maximum tenderness and flavor development. The marbling throughout creates an exceptionally juicy and flavorful experience.",
		'Each steak is carefully hand-cut to ensure consistent thickness and optimal cooking. Our expert chefs <strong>grill each steak to your exact specification</strong>, whether you prefer rare, medium-rare, medium, or well-done. The high-heat grilling process creates a beautiful caramelized crust while sealing in the natural juices.',
		'The steak is seasoned with our proprietary blend of sea salt, cracked black pepper, and aromatic herbs. This simple yet effective seasoning allows the natural beef flavor to shine through while enhancing the overall taste profile. <span class="text-calico-500">View our full preparation process</span> in our behind-the-scenes kitchen tour.',
	],
	contentImage: "/blog/blog-1.webp",
	contentImageAlt: "Grilled Black Angus Sirloin Steak",
	specialSection: {
		title: "What Makes Our Steak Special",
		paragraphs: [
			"We take pride in every aspect of our steak preparation. The beef is sourced from certified Black Angus cattle raised on sustainable farms. <strong>Each cut is inspected by our head chef</strong> to ensure it meets our strict quality standards. The aging process breaks down muscle fibers and intensifies the beef's natural flavors.",
			"Our grilling technique has been refined over decades. We use a combination of direct and indirect heat to achieve the perfect char on the outside while maintaining the desired temperature inside. The result is a steak with exceptional texture, flavor, and presentation.",
		],
	},
	specs: [
		{ label: "Weight", value: "12 oz (340g)" },
		{ label: "Cooking Time", value: "15-20 minutes" },
		{ label: "Calories", value: "580 kcal" },
		{ label: "Protein", value: "52g" },
	],
	ingredients: [
		"Prime Black Angus sirloin (12 oz)",
		"Sea salt and cracked black pepper",
		"Fresh rosemary and thyme",
		"Garlic butter finish",
		"Served with roasted seasonal vegetables",
		"Choice of house-made sauces (peppercorn, béarnaise, or red wine reduction)",
	],
	chefInfo: {
		name: "Werner Kuchler",
		avatar: "/team/team-1.webp",
		bio: "Chef Werner Kuchler brings over 20 years of culinary expertise to our kitchen. Trained in classical French techniques and specialized in premium beef preparation, Chef Werner personally oversees the preparation of every steak that leaves our kitchen. His passion for quality and attention to detail ensures every dish meets our exacting standards.",
		social: [
			{ platform: "Facebook", icon: "fa-brands fa-facebook-f", url: "http://www.facebook.com" },
			{ platform: "Twitter", icon: "fa-brands fa-x-twitter", url: "http://www.twitter.com" },
			{ platform: "Instagram", icon: "fa-brands fa-instagram", url: "http://www.instagram.com" },
		],
	},
	reviews: [
		{
			id: 1,
			name: "Michael Thompson",
			date: "January 15, 2024",
			avatar: "/blog/avatar.webp",
			rating: 5,
			text: "Absolutely outstanding! The steak was cooked to perfection - medium-rare as requested. The quality of the beef is evident from the first bite. The seasoning was perfect, and the char on the outside was incredible. Best steak I've had in years. Will definitely be ordering this again.",
		},
		{
			id: 2,
			name: "Sarah Martinez",
			date: "January 10, 2024",
			avatar: "/blog/author.webp",
			rating: 5,
			text: "Exceptional quality and preparation. The beef was incredibly tender and flavorful. The accompanying vegetables were fresh and perfectly cooked. The peppercorn sauce was the perfect complement. Highly recommend!",
		},
	],
};

export const menuSingleSidebar = {
	quickInfo: [
		{ icon: "fa-solid fa-clock", text: "Preparation: 15-20 min" },
		{ icon: "fa-solid fa-fire", text: "580 calories" },
		{ icon: "fa-solid fa-leaf", text: "Gluten-free" },
		{ icon: "fa-solid fa-utensils", text: "Serves: 1 person" },
	],
	categories: [
		{ name: "Appetizers", count: 12, href: "/menu" },
		{ name: "Main Course", count: 18, href: "/menu" },
		{ name: "Desserts", count: 8, href: "/menu" },
		{ name: "Beverages", count: 15, href: "/menu" },
	],
	relatedItems: [
		{
			id: 1,
			image: "/blog/blog-2.webp",
			category: "Main Course",
			name: "Pan Seared Sea Bass",
			price: "$38.50",
			link: "/menu-single",
		},
		{
			id: 2,
			image: "/blog/blog-3.webp",
			category: "Main Course",
			name: "Viennese Veal Cutlet",
			price: "$36.00",
			link: "/menu-single",
		},
		{
			id: 3,
			image: "/blog/blog-4.webp",
			category: "Seafood",
			name: "King Prawns and Lobster",
			price: "$41.50",
			link: "/menu-single",
		},
	],
	dietaryTags: ["Premium", "Gluten-free", "High-protein", "Keto", "Grilled", "Angus Beef"],
	galleryImages: [
		{ id: 1, src: "/gallery/gallery-9a.webp", alt: "Restaurant culinary artistry" },
		{ id: 2, src: "/gallery/gallery-8a.webp", alt: "Restaurant bar and beverage selection" },
		{ id: 3, src: "/gallery/gallery-7a.webp", alt: "Signature dishes and culinary presentations" },
		{ id: 4, src: "/gallery/gallery-6a.webp", alt: "Fine dining table setting and atmosphere" },
		{ id: 5, src: "/gallery/gallery-5a.webp", alt: "Restaurant interior and dining ambiance" },
		{ id: 6, src: "/gallery/gallery-3a.webp", alt: "Restaurant ambiance and decor" },
	],
};
