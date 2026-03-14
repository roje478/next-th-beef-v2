"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogCardProps } from "@/app/types/common.types";
import SocialShare from "./SocialShare";

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
	// Parse the date
	const dateObj = new Date(post.date);
	const day = dateObj.getDate().toString().padStart(2, "0");
	const month = dateObj.toLocaleString("en-US", { month: "2-digit" });
	const year = dateObj.getFullYear().toString().slice(-2);

	return (
		<article className="post">
			{/* post content */}
			<div className="post__content">
				{/* post image */}
				<div className="post__image">
					<Image
						src={post.image}
						alt={post.title}
						width={568}
						height={720}
						sizes="(min-width: 768px) 50vw, 100vw"
						loading="lazy"
					/>
				</div>
				{/* /post image */}

				{/* post info */}
				<motion.div
					className="post__info"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					{/* post date */}
					<time className="post__date" dateTime={post.date}>
						<span className="day">{day}</span>
						<span className="month">{month}</span>
						<span className="year">{year}</span>
					</time>
					{/* /post date */}

					{/* post info text */}
					<div className="post__info-text">
						{/* post category */}
						{post.category && post.category.length > 0 && (
							<div className="post__category">
								{post.category.map((cat, idx) => (
									<Link
										key={idx}
										href={`/blog/category/${
											post.categorySlug?.[idx] ||
											cat.toLowerCase().replace(/\s+/g, "-")
										}`}
									>
										{cat}
									</Link>
								))}
							</div>
						)}
						{/* /post category */}

						{/* post title */}
						<h2 className="post__info-title">
							<Link href={`/blog/${post.slug}`}>{post.title}</Link>
						</h2>
						{/* /post title */}

						{/* post author */}
						<h3 className="post__author">
							By:{" "}
							<Link
								href={`/blog/author/${
									post.authorSlug ||
									post.author.toLowerCase().replace(/\s+/g, "-")
								}`}
							>
								{post.author}
							</Link>
						</h3>
						{/* /post author */}

						{/* post excerpt */}
						<div className="post__info-excerpt">
							<p>{post.excerpt}</p>
						</div>
						{/* /post excerpt */}
					</div>
					{/* /post info text */}

					{/* post footer */}
					<div className="post__footer">
						{/* button */}
						<Link href={`/blog/${post.slug}`} className="btn-link">
							Read more
						</Link>
						{/* /button */}

						{/* social-icons */}
						<SocialShare title={post.title} />
						{/* /Social-icons */}
					</div>
					{/* /post footer */}
				</motion.div>
				{/* /post info */}
			</div>
			{/* /post content */}
		</article>
	);
};

export default BlogCard;
