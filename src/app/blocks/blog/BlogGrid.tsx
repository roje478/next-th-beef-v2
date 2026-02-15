import React from 'react';
import { BlogGridProps } from '@/app/types/common.types';
import BlogCard from './BlogCard';

const BlogGrid: React.FC<BlogGridProps> = ({
	posts,
	emptyMessage = 'No blog posts available at the moment.',
}) => {
	// Early return if there are no posts
	if (!posts || posts.length === 0) {
		return (
			<div className="blog">
				<div className="blog__posts">
					<p className="text-center text-coarseWool-300">{emptyMessage}</p>
				</div>
			</div>
		);
	}

	return (
		<div className="blog">
			{/* post list */}
			<div className="blog__posts">
				{posts.map((post, index) => (
					<BlogCard key={post.id} post={post} index={index} />
				))}
			</div>
			{/*/ post list */}
		</div>
	);
};

export default BlogGrid;
