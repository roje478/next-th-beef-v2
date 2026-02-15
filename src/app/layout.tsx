import type { Metadata, Viewport } from "next";
import "./globals.css";
import LayoutProvider from "./LayoutProvider";

export const metadata: Metadata = {
	title: "Beef - Premium Restaurant & Steakhouse HTML Template | Tailwind CSS",
	description:
		"Beef is a premium restaurant HTML template perfect for steakhouses, fine dining, and upscale eateries. Built with Tailwind CSS, fully responsive, 30+ pages, modern design.",
	keywords:
		"restaurant template, steakhouse template, fine dining template, tailwind css restaurant, html5 restaurant, responsive restaurant template, premium restaurant theme, food template, menu template, reservation template",
	authors: [{ name: "jrtemplate", url: "https://jrstudio.com.co" }],
	creator: "JRTemplate",
	publisher: "JRTemplate",
	metadataBase: new URL("https://yourwebsite.com"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: "https://yourwebsite.com/",
		title: "Beef - Premium Restaurant & Steakhouse HTML Template",
		description:
			"Premium restaurant HTML template with 30+ pages, modern design, and Tailwind CSS. Perfect for steakhouses and fine dining establishments.",
		siteName: "Beef Restaurant",
		locale: "en_US",
		images: [
			{
				url: "/images/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Beef Restaurant - Premium Steakhouse HTML Template",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Beef - Premium Restaurant & Steakhouse HTML Template",
		description:
			"Premium restaurant HTML template with 30+ pages, modern design, and Tailwind CSS.",
		images: ["/images/og-image.webp"],
		site: "@BeefRestaurant",
	},
	icons: {
		icon: "/images/favicon.webp",
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
	image: "https://yourwebsite.com/images/restaurant-exterior.webp",
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
	url: "https://yourwebsite.com",
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
	menu: "https://yourwebsite.com/menu",
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
		<html lang="en">
			<head>
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
