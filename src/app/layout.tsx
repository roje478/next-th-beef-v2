import type { Metadata, Viewport } from "next";
import { Josefin_Sans, Barlow_Condensed, Sorts_Mill_Goudy, Mulish } from "next/font/google";
import "./globals.css";
import LayoutProvider from "./LayoutProvider";

const josefinSans = Josefin_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
	variable: "--font-josefin-sans",
	display: "swap",
});

const barlowCondensed = Barlow_Condensed({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-barlow-condensed",
	display: "swap",
});

const sortsMillGoudy = Sorts_Mill_Goudy({
	subsets: ["latin"],
	weight: ["400"],
	style: ["normal", "italic"],
	variable: "--font-sorts-mill-goudy",
	display: "swap",
});

const mulish = Mulish({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	variable: "--font-mulish",
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "Beef - Premium Restaurant & Steakhouse Next.js Template",
		template: "%s | Beef Restaurant",
	},
	description:
		"Beef is a premium restaurant HTML template perfect for steakhouses, fine dining, and upscale eateries. Built with Tailwind CSS, fully responsive, 30+ pages, modern design.",
	keywords:
		"restaurant template, steakhouse template, fine dining template, tailwind css restaurant, html5 restaurant, responsive restaurant template, premium restaurant theme, food template, menu template, reservation template",
	authors: [{ name: "jrtemplate", url: "https://jrstudio.com.co" }],
	creator: "JRTemplate",
	publisher: "JRTemplate",
	metadataBase: new URL("https://beef-restaurant.vercel.app"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: "https://beef-restaurant.vercel.app/",
		title: "Beef - Premium Restaurant & Steakhouse Next.js Template",
		description:
			"Premium restaurant Next.js template with 28+ pages, modern design, and Tailwind CSS. Perfect for steakhouses and fine dining establishments.",
		siteName: "Beef Restaurant",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Beef - Premium Restaurant & Steakhouse Next.js Template",
		description:
			"Premium restaurant Next.js template with 28+ pages, modern design, and Tailwind CSS.",
		site: "@BeefRestaurant",
	},
	icons: {
		icon: "/favicon.webp",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 2,
	minimumScale: 1,
	themeColor: "#050608",
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Restaurant",
	name: "Beef Steakhouse",
	image: "https://beef-restaurant.vercel.app/images/restaurant-exterior.webp",
	description:
		"Premium steakhouse specializing in dry-aged beef, fine wines, and exceptional service. Located in the heart of London, offering an unforgettable dining experience.",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Restaurant St, Delicious City",
		addressLocality: "London",
		addressRegion: "Greater London",
		postalCode: "W1 9578",
		addressCountry: "UK",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 51.5074,
		longitude: -0.1278,
	},
	telephone: "+1-123-456-7890",
	email: "booking@restaurant.com",
	url: "https://beef-restaurant.vercel.app",
	priceRange: "$$$",
	servesCuisine: ["Steakhouse", "American", "Fine Dining", "Contemporary"],
	acceptsReservations: "True",
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
			opens: "11:00",
			closes: "22:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Friday", "Saturday"],
			opens: "11:00",
			closes: "23:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Sunday",
			opens: "10:00",
			closes: "21:00",
		},
	],
	menu: "https://beef-restaurant.vercel.app/menu",
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "4.8",
		reviewCount: "245",
		bestRating: "5",
		worstRating: "1",
	},
	sameAs: [
		"https://www.facebook.com/beefrestaurant",
		"https://www.instagram.com/beefrestaurant",
		"https://twitter.com/beefrestaurant",
		"https://www.yelp.com/biz/beef-steakhouse",
		"https://www.tripadvisor.com/Restaurant_Review-beef-steakhouse",
	],
	hasMap: "https://maps.google.com/?q=Beef+Steakhouse+London",
	paymentAccepted: "Cash, Credit Card, Debit Card",
	currenciesAccepted: "USD, GBP, EUR",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${josefinSans.variable} ${barlowCondensed.variable} ${sortsMillGoudy.variable} ${mulish.variable}`}>
			<head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body>
				<LayoutProvider>{children}</LayoutProvider>
			</body>
		</html>
	);
}
