import React from "react";
import { BlogGridProps } from "@/app/types/common.types";
import BlogCard from "./BlogCard";
import Pagination from "@/app/components/common/pagination/Pagination";

interface BlogGridExtendedProps extends BlogGridProps {
	currentPage?: number;
	totalPages?: number;
	baseUrl?: string;
	variant?: "standard" | "sidebar";
	children?: React.ReactNode;
}

const BlogGrid: React.FC<BlogGridExtendedProps> = ({
	posts,
	emptyMessage = "No blog posts available at the moment.",
	currentPage = 1,
	totalPages = 1,
	baseUrl = "/blog",
	variant = "standard",
	children,
}) => {
	const isSidebar = variant === "sidebar";

	if (!posts || posts.length === 0) {
		return (
			<section className={`blog${isSidebar ? " blog__sidebar" : ""}`}>
				<div className="blog__posts">
					<p className="text-center text-coarseWool-300">{emptyMessage}</p>
				</div>
				{isSidebar && children}
			</section>
		);
	}

	return (
		<section className={`blog${isSidebar ? " blog__sidebar" : ""}`}>
			{/* post list */}
			<div className="blog__posts">
				{posts.map((post, index) => (
					<BlogCard key={post.id} post={post} index={index} />
				))}

				{/* Pagination */}
				{totalPages > 1 && (
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						baseUrl={baseUrl}
					/>
				)}
				{/* /Pagination */}
			</div>
			{/* /post list */}

			{/* Sidebar */}
			{isSidebar && children}
		</section>
	);
};

export default BlogGrid;
