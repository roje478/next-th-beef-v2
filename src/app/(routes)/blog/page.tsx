import type { Metadata } from "next";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { BlogGrid } from "@/app/blocks/blog";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Read our latest articles about food, cooking techniques, restaurant news, and culinary trends. Stay updated with our blog.",
};

// Data
import { HeroInnerBlogData } from "@/app/hooks/data";
import { BlogListData } from "@/app/hooks/data-blog";

const BlogPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerBlogData.title}
				image={HeroInnerBlogData.image}
				altText={HeroInnerBlogData.altText}
				breadcrumbs={HeroInnerBlogData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Blog Standard - Block */}
			<BlogGrid
				posts={BlogListData}
				currentPage={1}
				totalPages={3}
				baseUrl="/blog"
			/>
			{/* /Blog Standard - Block */}
		</>
	);
};

export default BlogPage;
