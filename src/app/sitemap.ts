import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://beef-restaurant.vercel.app";

	const staticRoutes = [
		"",
		"/home-creative",
		"/home-classic",
		"/about-us",
		"/history",
		"/chefs",
		"/chefs-table",
		"/services",
		"/contact-us",
		"/menu",
		"/menu-tabs",
		"/menu-full-width",
		"/menu-sidebar",
		"/menu-category",
		"/menu-single",
		"/events",
		"/testimonials",
		"/faq",
		"/pricing",
		"/blog",
		"/blog-sidebar",
		"/search",
		"/terms",
		"/privacy",
	];

	return staticRoutes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: route === "" ? "weekly" : "monthly",
		priority: route === "" ? 1 : route.startsWith("/home") ? 0.9 : 0.7,
	}));
}
