import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	// Preserve classes from being purged
	safelist: [
		"no-js",
		"no-js-warning",
		"js-enabled",
		// Preserve animation classes
		"animate__animated",
		"animate__fadeInUp",
		"animate__fadeInDown",
		"animate__fadeInLeft",
		"animate__fadeInRight",
		"animate__zoomIn",
		"animate__slideInLeft",
		"animate__slideInRight",
		"wow",
		// Preserve Splide/carousel classes
		"splide",
		"splide__track",
		"splide__list",
		"splide__slide",
		"splide__arrow",
		"splide__pagination",
		// Preserve mmenu classes
		"mm-menu",
		"mm-navbar",
		"mm-listview",
	],
	theme: {
		extend: {
			backgroundImage: {
				slider: "linear-gradient(to bottom, rgba(5, 6, 8, 0.6), rgba(5, 6, 8, 1))",
				thumbnails: "linear-gradient(to top, #000 2%, transparent)",
			},
			colors: {
				// Semantic color palette for easy theming
				primary: "#D9B282",
				secondary: "#AE8E68",
				background: "#0A0D0F",
				surface: "#151A1E",
				"surface-dark": "#050608",
				"text-base": "#FBF7F3",
				"text-muted": "#A3A6A8",
				border: "#484D51",

				black: "#000000",
				white: "#ffffff",

				calico: {
					0: "#FBF7F3",
					100: "#F7F0E6",
					200: "#F0E0CD",
					300: "#E8D1B4",
					400: "#E1C19B",
					500: "#D9B282",
					600: "#AE8E68",
					700: "#826B4E",
					800: "#574734",
					900: "#2B241A",
				},
				coarseWool: {
					// Light grays - Text on dark backgrounds
					0: "#E8E9EA",
					100: "#D1D2D4",
					200: "#B5B7B9",

					// Medium grays - Secondary text, placeholders
					300: "#8B8E91",
					400: "#5E6165",

					// Dark grays - Borders, UI elements
					500: "#3A3D41",

					// Very dark grays - Component backgrounds
					600: "#24272B",
					700: "#0E1013",

					// Blacks - Main backgrounds
					800: "#0A0D0F",
					900: "#050608",
				},
			},
			fontFamily: {
				"josefin-sans": ["Josefin Sans", "sans-serif"],
				mulish: ["Mulish", "sans-serif"],
				"sorts-mill-goudy": ["Sorts Mill Goudy", "serif"],
				"barlow-condensed": ["Barlow Condensed", "sans-serif"],
			},
			fontSize: {
				// Display sizes (81-120px range)
				"display-special": [
					"120px",
					{ lineHeight: "1", letterSpacing: "-2px" },
				],
				display: [
					"100px",
					{ lineHeight: "1.2", letterSpacing: "-1.5px" },
				],
				"display-1": [
					"91px",
					{ lineHeight: "1.2", letterSpacing: "-1.5px" },
				],
				"display-2": [
					"81px",
					{ lineHeight: "1.2", letterSpacing: "-1.5px" },
				],

				// Title sizes (18-58px range)
				"title-1": ["58px", { lineHeight: "1.2" }],
				"title-2": ["48px", { lineHeight: "1.2" }],
				"title-3": ["38px", { lineHeight: "1.2" }],
				"title-4": ["28px", { lineHeight: "1.4" }],
				"title-5": ["22px", { lineHeight: "1.4" }],
				"title-6": [
					"18px",
					{ lineHeight: "1.4", letterSpacing: "-0.5px" },
				],

				// Subtitle sizes (18-20px range)
				"subtitle-1": [
					"20px",
					{ lineHeight: "1.4", letterSpacing: "1.5px" },
				],
				"subtitle-2": [
					"18px",
					{ lineHeight: "1.4", letterSpacing: "1px" },
				],

				// Body sizes (12-21px range)
				lead: [
					"21px",
					{ lineHeight: "1.6", letterSpacing: "0.5px" },
				],
				body: [
					"18px",
					{ lineHeight: "1.6", letterSpacing: "0.25px" },
				],
				"body-small": [
					"16px",
					{ lineHeight: "1.6", letterSpacing: "0.25px" },
				],
				button: [
					"18px",
					{ lineHeight: "1.6", letterSpacing: "0.5px" },
				],
				caption: [
					"15px",
					{ lineHeight: "1.6", letterSpacing: "0.5px" },
				],
				small: [
					"14px",
					{ lineHeight: "1.6", letterSpacing: "0.25px" },
				],
				overline: [
					"13px",
					{ lineHeight: "1.6", letterSpacing: "1.5px" },
				],
				micro: [
					"12px",
					{ lineHeight: "1.4", letterSpacing: "0.25px" },
				],

				// UI element sizes
				indicator: ["10px", { lineHeight: "1" }],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "1rem",
					md: "1.5rem",
					lg: "2rem",
					xl: "1rem",
				},
				screens: {
					sm: "640px",
					md: "768px",
					lg: "1024px",
					xl: "1280px",
					"2xl": "1280px",
				},
			},
			maxWidth: {
				content: "600px",
				"content-md": "720px",
				"content-lg": "800px",
				container: "1200px",
			},
			/* =====================================
			   Customization Tokens
			   Easy to modify for brand adaptation
			===================================== */
			width: {
				// Logo sizes
				logo: "160px",
				"logo-md": "180px",
				// Card/Info box widths
				"card-info": "480px",
				"card-info-lg": "580px",
				"card-info-xl": "680px",
				// Thumbnail widths
				thumb: "480px",
				"thumb-lg": "560px",
				// History section
				"history-icon": "120px",
				"history-img": "260px",
			},
			minHeight: {
				"img-sm": "320px",
				"img-md": "420px",
			},
			maxHeight: {
				"img-sm": "240px",
				"img-md": "480px",
				"img-lg": "600px",
				"img-xl": "768px",
				"img-hero": "1080px",
			},
			opacity: {
				"0": "0",
				"5": "0.05",
				"10": "0.1",
				"15": "0.15",
				"20": "0.2",
				"25": "0.25",
				"30": "0.3",
				"40": "0.4",
				"50": "0.5",
				"60": "0.6",
				"70": "0.7",
				"75": "0.75",
				"80": "0.8",
				"85": "0.85",
				"90": "0.9",
				"95": "0.95",
				"100": "1",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		plugin(function ({ addComponents, theme }) {
			addComponents({
				/* Container fluid */
				".container-fluid": {
					width: "100%",
					maxWidth: "1420px",
					marginRight: "auto",
					marginLeft: "auto",
					paddingRight: "1rem",
					paddingLeft: "1rem",
				},
				/* Focus ring utilities - registered as plugin for @apply compatibility */
				".focus-ring": {
					outline: "2px solid transparent",
					outlineOffset: "2px",
					boxShadow: `0 0 0 2px ${theme("colors.coarseWool.900")}, 0 0 0 4px ${theme("colors.calico.500")}`,
				},
				".focus-ring-dark": {
					outline: "2px solid transparent",
					outlineOffset: "2px",
					boxShadow: `0 0 0 2px ${theme("colors.coarseWool.800")}, 0 0 0 4px ${theme("colors.calico.500")}`,
				},
				".focus-ring-light": {
					outline: "2px solid transparent",
					outlineOffset: "2px",
					boxShadow: `0 0 0 2px ${theme("colors.white")}, 0 0 0 4px ${theme("colors.calico.500")}`,
				},
				".focus-ring-thick": {
					outline: "2px solid transparent",
					outlineOffset: "2px",
					boxShadow: `0 0 0 2px ${theme("colors.coarseWool.900")}, 0 0 0 6px ${theme("colors.calico.500")}`,
				},
				".focus-ring-compact": {
					outline: "2px solid transparent",
					outlineOffset: "2px",
					boxShadow: `0 0 0 2px ${theme("colors.calico.500")}`,
				},
			});
		}),
	],
};
export default config;
