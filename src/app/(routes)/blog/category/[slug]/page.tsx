import type { Metadata } from "next";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { BlogGrid, BlogSidebar } from "@/app/blocks/blog";

export const metadata: Metadata = {
	title: "Blog Category",
	description:
		"Browse articles filtered by category. Find posts about food, recipes, restaurant tips, and more.",
};

// Data
import {
	BlogListData,
	BlogCategoriesData,
	BlogTagsData,
	BlogSidebarRecentPosts,
	BlogGalleryImages,
} from "@/app/hooks/data-blog";

interface BlogCategoryPageProps {
	params: { slug: string };
}

const BlogCategoryPage = ({ params }: BlogCategoryPageProps) => {
	const category = BlogCategoriesData.find((c) => c.slug === params.slug);
	const categoryName = category?.name || "Category";

	const filteredPosts = BlogListData.filter((post) =>
		post.categorySlug?.includes(params.slug)
	);

	const heroData = {
		title: categoryName,
		breadcrumbs: [
			{ id: 1, title: "Home", link: "/" },
			{ id: 2, title: "Blog", link: "/blog" },
			{ id: 3, title: categoryName, link: "" },
		],
		image: "/bg/bg-blog.webp",
		altText: "Culinary blog and recipes",
	};

	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={heroData.title}
				image={heroData.image}
				altText={heroData.altText}
				breadcrumbs={heroData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Blog Category + Sidebar - Block */}
			<BlogGrid
				posts={filteredPosts.length > 0 ? filteredPosts : BlogListData}
				currentPage={1}
				totalPages={1}
				baseUrl={`/blog/category/${params.slug}`}
				variant="sidebar"
			>
				<BlogSidebar
					recentPosts={BlogSidebarRecentPosts}
					categories={BlogCategoriesData}
					tags={BlogTagsData}
					galleryImages={BlogGalleryImages}
				/>
			</BlogGrid>
			{/* /Blog Category + Sidebar - Block */}
		</>
	);
};

export default BlogCategoryPage;
