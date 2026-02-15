'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BlogSidebarProps } from '@/app/types/common.types';

const BlogSidebar: React.FC<BlogSidebarProps> = ({
	recentPosts = [],
	categories = [],
	tags = [],
	searchPlaceholder = 'Search...',
	searchButtonLabel = 'Search',
}) => {
	const [searchValue, setSearchValue] = useState('');
	const router = useRouter();

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchValue.trim()) {
			router.push(`/blog/search?q=${encodeURIComponent(searchValue.trim())}`);
		}
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		});
	};

	return (
		<div className="blog__sidebar">
			<div className="sidebar__content">
				{/* Search Widget */}
				<div className="sidebar__widget">
					<h4 className="sidebar__widget-title">Search</h4>
					<form onSubmit={handleSearch} className="sidebar__search">
						<input
							type="text"
							placeholder={searchPlaceholder}
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							aria-label="Search blog posts"
						/>
						<button type="submit" aria-label={searchButtonLabel}>
							<i className="fa-solid fa-search" aria-hidden="true"></i>
						</button>
					</form>
				</div>

				{/* Categories Widget */}
				{categories && categories.length > 0 && (
					<div className="sidebar__widget">
						<h4 className="sidebar__widget-title">Categories</h4>
						<div className="sidebar__categories">
							{categories.map((category) => (
								<Link
									key={category.slug}
									href={`/blog/category/${category.slug}`}
								>
									<span>{category.name}</span>
									<span className="number-posts">({category.count})</span>
								</Link>
							))}
						</div>
					</div>
				)}

				{/* Recent Posts Widget */}
				{recentPosts && recentPosts.length > 0 && (
					<div className="sidebar__widget">
						<h4 className="sidebar__widget-title">Recent Posts</h4>
						<div className="sidebar__recent-posts">
							{recentPosts.map((post) => (
								<div key={post.id} className="sidebar__post">
									<div className="sidebar__post__thumb">
										<Link href={`/blog/${post.slug}`}>
											<Image
												src={post.image}
												alt={post.title}
												width={120}
												height={100}
											/>
										</Link>
									</div>
									<div className="sidebar__post__content">
										<p>
											<span>{formatDate(post.date)}</span>
										</p>
										<h5>
											<Link href={`/blog/${post.slug}`}>
												{post.title}
											</Link>
										</h5>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Tags Widget */}
				{tags && tags.length > 0 && (
					<div className="sidebar__widget">
						<h4 className="sidebar__widget-title">Tags</h4>
						<div className="sidebar__tags">
							{tags.map((tag) => (
								<Link
									key={tag}
									href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
								>
									{tag}
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default BlogSidebar;
