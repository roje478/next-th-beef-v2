import type { Metadata } from "next";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { BlogDetails, BlogSidebar } from "@/app/blocks/blog";

export const metadata: Metadata = {
	title: "Blog Post",
	description:
		"Read the full article with rich content, images, social sharing, comments, and related posts.",
};

// Data
import {
	BlogListData,
	BlogCategoriesData,
	BlogTagsData,
	BlogSidebarRecentPosts,
	BlogDetailsGalleryImages,
} from "@/app/hooks/data-blog";

interface BlogDetailsPageProps {
	params: { slug: string };
}

const BlogDetailsPage = ({ params }: BlogDetailsPageProps) => {
	const post =
		BlogListData.find((p) => p.slug === params.slug) || BlogListData[0];

	const heroData = {
		title: post.title,
		breadcrumbs: [
			{ id: 1, title: "Home", link: "/" },
			{ id: 2, title: "Blog", link: "" },
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

			{/* Blog Details - Block */}
			<div className="blog blog__sidebar">
				<BlogDetails post={post} />

				{/* Sidebar */}
				<BlogSidebar
					recentPosts={BlogSidebarRecentPosts}
					categories={BlogCategoriesData}
					tags={BlogTagsData}
					galleryImages={BlogDetailsGalleryImages}
				/>
			</div>
			{/* /Blog Details - Block */}
		</>
	);
};

export default BlogDetailsPage;
