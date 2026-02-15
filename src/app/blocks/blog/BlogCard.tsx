import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogCardProps } from '@/app/types/common.types';
import SocialShare from './SocialShare';

const BlogCard: React.FC<BlogCardProps> = ({ post, index = 0 }) => {
	// Parse the date
	const dateObj = new Date(post.date);
	const day = dateObj.getDate().toString().padStart(2, '0');
	const month = dateObj.toLocaleString('en-US', { month: '2-digit' });
	const year = dateObj.getFullYear().toString().slice(-2);

	return (
		<div className="post">
			{/* post content */}
			<div className="post__content">
				{/* post image */}
				<div className="post__image">
					<Image
						src={post.image}
						alt={post.title}
						width={568}
						height={720}
						className="w-full h-full object-cover"
					/>
				</div>
				{/*/ post image */}

				{/* post info */}
				<div className="post__info">
					{/* post date */}
					<div className="post__date">
						<span className="day">{day}</span>
						<span className="month">{month}</span>
						<span className="year">{year}</span>
					</div>
					{/*/ post date */}

					{/* post info text */}
					<div className="post__info-text">
						{/* post category */}
						{post.category && post.category.length > 0 && (
							<div className="post__category">
								{post.category.map((cat, idx) => (
									<Link
										key={idx}
										href={`/blog/category/${post.categorySlug?.[idx] || cat.toLowerCase().replace(/\s+/g, '-')}`}
									>
										{cat}
									</Link>
								))}
							</div>
						)}
						{/*/ post category */}

						{/* post title */}
						<h2 className="post__info-title">
							<Link href={`/blog/${post.slug}`}>
								{post.title}
							</Link>
						</h2>
						{/*/ post title */}

						{/* post author */}
						<h4 className="post__author">
							By:{' '}
							<Link href={`/blog/author/${post.authorSlug || post.author.toLowerCase().replace(/\s+/g, '-')}`}>
								{post.author}
							</Link>
						</h4>
						{/*/ post author */}

						{/* post excerpt */}
						<div className="post__info-excerpt">
							<p>{post.excerpt}</p>
						</div>
						{/*/ post excerpt */}
					</div>
					{/*/ post info text */}

					{/* post footer */}
					<div className="post__footer">
						{/* button */}
						<Link href={`/blog/${post.slug}`} className="btn btn__link">
							Read more
						</Link>
						{/*/ button */}

						{/* social-icons */}
						<SocialShare title={post.title} />
						{/*/ Social-icons */}
					</div>
					{/*/ post footer */}
				</div>
				{/*/ post info */}
			</div>
			{/*/ post content */}
		</div>
	);
};

export default BlogCard;
