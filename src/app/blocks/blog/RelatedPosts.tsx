import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RelatedPostsProps } from '@/app/types/common.types';

const RelatedPosts: React.FC<RelatedPostsProps> = ({
	posts,
	title = 'Related Posts',
	emptyMessage = 'No related posts available.',
}) => {
	// Early return if there are no posts
	if (!posts || posts.length === 0) {
		return null;
	}

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		});
	};

	return (
		<div className="related-posts mt-16 pt-12 border-t border-solid border-coarseWool-400">
			<h3 className="text-title-3 text-coarseWool-100 mb-8">{title}</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{posts.map((post) => (
					<div
						key={post.id}
						className="related-post bg-coarseWool-800 rounded overflow-hidden"
					>
						<div className="related-post__image relative h-48 overflow-hidden">
							<Link href={`/blog/${post.slug}`}>
								<Image
									src={post.image}
									alt={post.title}
									width={400}
									height={300}
									sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
									className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
								/>
							</Link>
						</div>
						<div className="related-post__content p-4">
							<p className="text-sm text-coarseWool-300 mb-2">
								{formatDate(post.date)}
							</p>
							<h4 className="text-title-5 text-coarseWool-100 mb-2">
								<Link
									href={`/blog/${post.slug}`}
									className="hover:text-calico-500 transition-colors duration-300"
								>
									{post.title}
								</Link>
							</h4>
							{post.category && post.category.length > 0 && (
								<div className="flex flex-wrap gap-2 mt-2">
									{post.category.slice(0, 2).map((cat, idx) => (
										<Link
											key={idx}
											href={`/blog/category/${post.categorySlug?.[idx] || cat.toLowerCase().replace(/\s+/g, '-')}`}
											className="text-xs text-calico-500 hover:text-coarseWool-300"
										>
											{cat}
										</Link>
									))}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RelatedPosts;
