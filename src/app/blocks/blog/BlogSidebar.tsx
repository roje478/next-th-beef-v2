"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BlogSidebarProps } from "@/app/types/common.types";

interface GalleryImage {
	id: number;
	src: string;
	alt: string;
}

interface BlogSidebarExtendedProps extends BlogSidebarProps {
	galleryImages?: GalleryImage[];
}

const BlogSidebar: React.FC<BlogSidebarExtendedProps> = ({
	recentPosts = [],
	categories = [],
	tags = [],
	searchPlaceholder = "Search...",
	galleryImages = [],
}) => {
	const [searchValue, setSearchValue] = useState("");
	const router = useRouter();

	// Lightbox state
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const openLightbox = (index: number) => {
		setLightboxIndex(index);
		setLightboxOpen(true);
	};
	const closeLightbox = () => setLightboxOpen(false);
	const nextImage = () =>
		setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
	const prevImage = () =>
		setLightboxIndex(
			(prev) => (prev - 1 + galleryImages.length) % galleryImages.length
		);

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchValue.trim()) {
			router.push(`/blog/search?q=${encodeURIComponent(searchValue.trim())}`);
		}
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const month = date.toLocaleString("en-US", { month: "long" });
		const day = date.getDate();
		const year = date.getFullYear();
		return { month, rest: `${day}, ${year}` };
	};

	return (
		<>
			<div className="blog__sidebar">
				<aside className="sidebar__content">
					{/* Search Widget */}
					<motion.div
						className="sidebar__widget"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<form
							role="search"
							onSubmit={handleSearch}
							className="sidebar__search"
						>
							<label htmlFor="search" className="sr-only">
								Search
							</label>
							<input
								type="text"
								className="input"
								name="search"
								id="search"
								placeholder={searchPlaceholder}
								value={searchValue}
								onChange={(e) => setSearchValue(e.target.value)}
							/>
							<button
								type="submit"
								className="btn btn__search"
								aria-label="Search"
							>
								<i className="fa-solid fa-search" aria-hidden="true"></i>
							</button>
						</form>
					</motion.div>

					{/* Categories Widget */}
					{categories && categories.length > 0 && (
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">Category</h3>
							<div className="sidebar__categories">
								{categories.map((category) => (
									<Link
										key={category.slug}
										href={`/blog/category/${category.slug}`}
									>
										<span>
											{category.name}
											<span className="number-posts">({category.count})</span>
										</span>
									</Link>
								))}
							</div>
						</motion.div>
					)}

					{/* Recent Posts Widget */}
					{recentPosts && recentPosts.length > 0 && (
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">Recent Posts</h3>
							<div className="sidebar__recent-posts">
								{recentPosts.map((post) => {
									const { month, rest } = formatDate(post.date);
									return (
										<div key={post.id} className="sidebar__post">
											<div className="sidebar__post__image">
												<Link href={`/blog/${post.slug}`}>
													<Image
														src={post.image}
														alt={post.title}
														width={120}
														height={100}
														sizes="120px"
														loading="lazy"
													/>
												</Link>
											</div>
											<div className="sidebar__post__content">
												<p>
													<span>{month}</span> {rest}
												</p>
												<h4>
													<Link href={`/blog/${post.slug}`}>{post.title}</Link>
												</h4>
											</div>
										</div>
									);
								})}
							</div>
						</motion.div>
					)}

					{/* Tags Widget */}
					{tags && tags.length > 0 && (
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">Tags</h3>
							<div className="sidebar__tags">
								{tags.map((tag) => (
									<Link
										key={tag}
										href={`/blog/tag/${tag
											.toLowerCase()
											.replace(/\s+/g, "-")}`}
									>
										{tag}
									</Link>
								))}
							</div>
						</motion.div>
					)}

					{/* Gallery Widget */}
					{galleryImages && galleryImages.length > 0 && (
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">Gallery</h3>
							<div className="sidebar__gallery">
								<div className="gallery-block__list">
									{galleryImages.map((img, index) => (
										<div
											key={img.id}
											className="gallery-block__item"
											role="button"
											tabIndex={0}
											onClick={() => openLightbox(index)}
											onKeyDown={(e) => {
												if (e.key === "Enter" || e.key === " ") {
													e.preventDefault();
													openLightbox(index);
												}
											}}
											aria-label="Open lightbox"
										>
											<div className="gallery-block__item-image">
												<Image
													src={img.src}
													alt={img.alt}
													width={382}
													height={360}
													sizes="(min-width: 640px) 25vw, 50vw"
													loading="lazy"
												/>
												<div className="gallery-block__item-icon">
													<i
														className="fa-solid fa-plus"
														aria-hidden="true"
													></i>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</motion.div>
					)}
				</aside>
			</div>

			{/* Lightbox */}
			{lightboxOpen && galleryImages.length > 0 && (
				<div className="lightbox" style={{ display: "flex" }}>
					<div className="lightbox-wrapper">
						<div className="lightbox-close" onClick={closeLightbox}>
							&times;
						</div>
						<div className="lightbox-content">
							<Image
								src={galleryImages[lightboxIndex].src}
								alt={galleryImages[lightboxIndex].alt}
								className="lightbox-img"
								width={624}
								height={390}
								sizes="(min-width: 768px) 80vw, 100vw"
								onClick={nextImage}
							/>
							<div className="lightbox-caption">
								<div className="caption-counter">
									{lightboxIndex + 1} of {galleryImages.length}
								</div>
							</div>
						</div>
						<div className="lightbox-controls">
							<div
								className="lightbox-arrows lightbox-prev"
								onClick={prevImage}
							></div>
							<div
								className="lightbox-arrows lightbox-next"
								onClick={nextImage}
							></div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default BlogSidebar;
