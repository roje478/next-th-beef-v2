import type { Metadata } from "next";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { BlogGrid, BlogSidebar } from "@/app/blocks/blog";

export const metadata: Metadata = {
	title: "Blog with Sidebar",
	description:
		"Browse our blog articles with a sidebar featuring categories, tags, recent posts, and search. A classic blog layout for content-rich sites.",
};

// Data
import {
	BlogListData,
	BlogCategoriesData,
	BlogTagsData,
	BlogSidebarRecentPosts,
	BlogGalleryImages,
	HeroInnerBlogSidebarData,
} from "@/app/hooks/data-blog";

const BlogSidebarPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerBlogSidebarData.title}
				image={HeroInnerBlogSidebarData.image}
				altText={HeroInnerBlogSidebarData.altText}
				breadcrumbs={HeroInnerBlogSidebarData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Blog + Sidebar - Block */}
			<BlogGrid
				posts={BlogListData}
				currentPage={1}
				totalPages={3}
				baseUrl="/blog-sidebar"
				variant="sidebar"
			>
				<BlogSidebar
					recentPosts={BlogSidebarRecentPosts}
					categories={BlogCategoriesData}
					tags={BlogTagsData}
					galleryImages={BlogGalleryImages}
				/>
			</BlogGrid>
			{/* /Blog + Sidebar - Block */}
		</>
	);
};

export default BlogSidebarPage;
