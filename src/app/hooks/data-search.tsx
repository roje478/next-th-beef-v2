export const HeroInnerSearchData = {
	title: "Search Results",
	breadcrumbs: [
		{ id: 1, title: "Home", link: "/" },
		{ id: 2, title: "Search", link: "" },
	],
	image: "/bg/bg-menu.webp",
	altText: "Search Results",
};

export interface SearchResult {
	id: number;
	category: string;
	title: string;
	titleHighlighted: string;
	excerpt: string;
	meta: {
		icon: string;
		label: string;
	}[];
	link: string;
	linkLabel: string;
}

export const SearchResultsData: SearchResult[] = [
	{
		id: 1,
		category: "Menu Item",
		title: "Premium Ribeye Steak",
		titleHighlighted: "Premium Ribeye <mark>Steak</mark>",
		excerpt:
			'Our signature <mark>steak</mark>, perfectly aged for 28 days and grilled to perfection. Served with roasted vegetables and your choice of sauce. This premium cut delivers exceptional tenderness and rich, beefy flavor in every bite.',
		meta: [
			{ icon: "fa-solid fa-tag", label: "$48.00" },
			{ icon: "fa-solid fa-utensils", label: "Main Course" },
		],
		link: "/menu-single",
		linkLabel: "View dish",
	},
	{
		id: 2,
		category: "Blog Post",
		title: "The Perfect Steak: A Chef's Guide",
		titleHighlighted: "The Perfect <mark>Steak</mark>: A Chef's Guide",
		excerpt:
			'Learn the secrets to cooking the perfect <mark>steak</mark> every time. From selecting the right cut to achieving the ideal temperature, our head chef shares professional techniques you can use at home.',
		meta: [
			{ icon: "fa-solid fa-calendar", label: "December 15, 2023" },
			{ icon: "fa-solid fa-user", label: "By Chef Michael" },
		],
		link: "/blog/the-perfect-steak",
		linkLabel: "Read more",
	},
	{
		id: 3,
		category: "Menu Item",
		title: "Wagyu Steak with Truffle Butter",
		titleHighlighted: "Wagyu <mark>Steak</mark> with Truffle Butter",
		excerpt:
			'Experience luxury dining with our Australian Wagyu <mark>steak</mark>, enhanced with house-made truffle butter. The exceptional marbling creates an unforgettable melt-in-your-mouth experience.',
		meta: [
			{ icon: "fa-solid fa-tag", label: "$85.00" },
			{ icon: "fa-solid fa-utensils", label: "Main Course" },
		],
		link: "/menu-single",
		linkLabel: "View dish",
	},
	{
		id: 4,
		category: "Blog Post",
		title: "Understanding Steak Cuts and Grades",
		titleHighlighted:
			"Understanding <mark>Steak</mark> Cuts and Grades",
		excerpt:
			'Not all <mark>steaks</mark> are created equal. Discover the differences between ribeye, sirloin, and tenderloin cuts, and learn what makes Prime, Choice, and Select grades distinct.',
		meta: [
			{ icon: "fa-solid fa-calendar", label: "November 28, 2023" },
			{ icon: "fa-solid fa-user", label: "By Samantha Olson" },
		],
		link: "/blog/understanding-steak-cuts",
		linkLabel: "Read more",
	},
	{
		id: 5,
		category: "Menu Item",
		title: "New York Strip Steak",
		titleHighlighted: "New York Strip <mark>Steak</mark>",
		excerpt:
			'A classic cut with bold, beefy flavor. Our New York Strip <mark>steak</mark> is dry-aged in-house for 21 days, then grilled over hardwood charcoal for a perfect crust and tender interior.',
		meta: [
			{ icon: "fa-solid fa-tag", label: "$52.00" },
			{ icon: "fa-solid fa-utensils", label: "Main Course" },
		],
		link: "/menu-single",
		linkLabel: "View dish",
	},
	{
		id: 6,
		category: "Page",
		title: "About Our Steakhouse",
		titleHighlighted: "About Our <mark>Steakhouse</mark>",
		excerpt:
			'Since 1985, we\'ve been serving the finest <mark>steaks</mark> in the city. Learn about our commitment to quality, our sourcing practices, and the passion that drives our culinary excellence.',
		meta: [
			{ icon: "fa-solid fa-info-circle", label: "About Us" },
		],
		link: "/about-us",
		linkLabel: "Learn more",
	},
	{
		id: 7,
		category: "Recipe",
		title: "Grilled Steak with Chimichurri Sauce",
		titleHighlighted:
			"Grilled <mark>Steak</mark> with Chimichurri Sauce",
		excerpt:
			'Try this Argentinian-inspired recipe at home. Our chimichurri sauce adds bright, herbaceous notes that perfectly complement a grilled <mark>steak</mark>. Simple ingredients, amazing results.',
		meta: [
			{ icon: "fa-solid fa-calendar", label: "October 12, 2023" },
			{ icon: "fa-solid fa-user", label: "By Chef Michael" },
		],
		link: "/blog/grilled-steak-chimichurri",
		linkLabel: "Read recipe",
	},
	{
		id: 8,
		category: "Page",
		title: "Private Steak Tasting Events",
		titleHighlighted: "Private <mark>Steak</mark> Tasting Events",
		excerpt:
			'Host an unforgettable private dining experience with our exclusive <mark>steak</mark> tasting menu. Sample premium cuts paired with wines selected by our sommelier. Perfect for special occasions.',
		meta: [
			{
				icon: "fa-solid fa-calendar-check",
				label: "Events & Services",
			},
		],
		link: "/services",
		linkLabel: "View services",
	},
];

export const SearchFilters = ["All", "Menu", "Blog", "Pages", "Recipes"];
