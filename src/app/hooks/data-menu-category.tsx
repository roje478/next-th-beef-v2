export const HeroInnerMenuCategoryData = {
	title: "Main Course",
	breadcrumbs: [
		{
			id: 1,
			title: "Home",
			link: "/",
		},
		{
			id: 2,
			title: "Menu",
			link: "/menu",
		},
		{
			id: 3,
			title: "Main Course",
			link: "/menu-category",
		},
	],
	image: "/bg/bg-menu.webp",
	altText: "Main Course Category",
};

export const menuCategoryIntro = {
	subtitle: "From Our Kitchen",
	title: "Signature Main Courses",
	description:
		"Our main courses showcase the finest ingredients, expertly prepared by our culinary team. Each dish represents our commitment to quality and flavor, combining traditional techniques with modern presentation.",
};

export const menuCategoryItems = [
	{
		id: 1,
		name: "Grilled Black Angus Sirloin Steak",
		price: "$42.50",
		description: "Prime aged beef, herb butter, roasted vegetables, red wine reduction",
		image: "/special-offers/special-offers-1.webp",
		link: "/menu-single",
	},
	{
		id: 2,
		name: "Pan Seared Sea Bass",
		price: "$38.50",
		description: "Saffron and mussel's broth, new potatoes, fresh herbs",
		image: "/special-offers/special-offers-2.webp",
		link: "/menu-single",
	},
	{
		id: 3,
		name: "King Prawns and Lobster",
		price: "$41.50",
		description: "Creamy saffron sauce, garlic butter, seasonal vegetables",
		image: "/special-offers/special-offers-3.webp",
		link: "/menu-single",
	},
	{
		id: 4,
		name: "Viennese Veal Cutlet",
		price: "$36.00",
		description: "Breaded veal, lemon wedge, parsley potatoes, traditional preparation",
		image: "/menu/menu-1.webp",
		link: "/menu-single",
	},
	{
		id: 5,
		name: "Nduja Pork Chicken Terrine",
		price: "$27.50",
		description: "Smoked duck breast, pistachio, smoked pancetta, house pickles",
		image: "/menu/menu-2.webp",
		link: "/menu-single",
	},
	{
		id: 6,
		name: "Herb Crusted Lamb Rack",
		price: "$44.00",
		description: "Rosemary and thyme crust, mint sauce, roasted root vegetables",
		image: "/menu/menu-3.webp",
		link: "/menu-single",
	},
];

export const menuCategorySidebar = {
	categories: [
		{ id: 1, name: "Appetizers", count: 12, href: "/menu-category", active: false },
		{ id: 2, name: "Main Course", count: 18, href: "/menu-category", active: true },
		{ id: 3, name: "Seafood", count: 10, href: "/menu-category", active: false },
		{ id: 4, name: "Desserts", count: 8, href: "/menu-category", active: false },
		{ id: 5, name: "Beverages", count: 15, href: "/menu-category", active: false },
	],
	chefSpecial: {
		image: "/blog/blog-1.webp",
		category: "Chef's Signature",
		name: "Grilled Black Angus Sirloin Steak",
		price: "$42.50",
		link: "/menu-single",
	},
	dietaryOptions: [
		"Vegetarian",
		"Vegan",
		"Gluten-free",
		"Dairy-free",
		"Keto",
		"Low-carb",
	],
	priceRanges: [
		{ id: 1, label: "Under $25", count: 8 },
		{ id: 2, label: "$25 - $35", count: 12 },
		{ id: 3, label: "$35 - $45", count: 10 },
		{ id: 4, label: "Above $45", count: 6 },
	],
	popularDishes: [
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
	galleryImages: [
		{ id: 1, src: "/gallery/gallery-5a.webp", alt: "Restaurant interior and dining ambiance" },
		{ id: 2, src: "/gallery/gallery-6a.webp", alt: "Fine dining table setting and atmosphere" },
		{ id: 3, src: "/gallery/gallery-7a.webp", alt: "Signature dishes and culinary presentations" },
		{ id: 4, src: "/gallery/gallery-1a.webp", alt: "Restaurant gallery showcase" },
		{ id: 5, src: "/gallery/gallery-1a.webp", alt: "Restaurant gallery showcase" },
		{ id: 6, src: "/gallery/gallery-1a.webp", alt: "Restaurant gallery showcase" },
	],
};
