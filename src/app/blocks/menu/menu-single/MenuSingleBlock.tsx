"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuSingleData, menuSingleSidebar } from "@/app/hooks/data-menu-single";

const MenuSingleBlock = () => {
	const data = menuSingleData;
	const sidebar = menuSingleSidebar;

	// Lightbox state
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const openLightbox = (index: number) => {
		setLightboxIndex(index);
		setLightboxOpen(true);
	};
	const closeLightbox = () => setLightboxOpen(false);
	const nextImage = () =>
		setLightboxIndex((prev) => (prev + 1) % sidebar.galleryImages.length);
	const prevImage = () =>
		setLightboxIndex(
			(prev) => (prev - 1 + sidebar.galleryImages.length) % sidebar.galleryImages.length
		);

	return (
		<>
			<div className="blog blog__sidebar">
				{/* Menu item content */}
				<article className="post__details">
					<div className="post__details-wrap">
						{/* Menu item meta */}
						<div className="menu-item__meta">
							<div className="post__category">
								{data.categories.map((cat, i) => (
									<Link key={i} href={cat.href}>
										{cat.label}
									</Link>
								))}
							</div>
							<h2 className="post__author">
								By Chef: <span className="text-calico-500">{data.chef}</span>
							</h2>
							<div className="menu-item__meta-price">
								<span className="menu-item__price-value">{data.price}</span>
							</div>
						</div>

						{/* Menu item description */}
						<div className="post__details-text">
							{data.description.map((paragraph, i) => (
								<p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
							))}

							<Image
								src={data.contentImage}
								alt={data.contentImageAlt}
								width={800}
								height={500}
								sizes="(min-width: 1024px) 60vw, 100vw"
								loading="lazy"
							/>

							<h3>{data.specialSection.title}</h3>
							{data.specialSection.paragraphs.map((p, i) => (
								<p key={i} dangerouslySetInnerHTML={{ __html: p }} />
							))}
						</div>

						{/* Dish Specifications */}
						<div className="post__details-text">
							<h3>Dish Specifications</h3>
							<div className="menu-item__specs">
								{data.specs.map((spec, i) => (
									<div key={i} className="menu-item__specs-row">
										<span className="menu-item__specs-label">{spec.label}</span>
										<span className="menu-item__specs-value">{spec.value}</span>
									</div>
								))}
							</div>
						</div>

						{/* Ingredients */}
						<div className="post__details-text">
							<h3>Ingredients &amp; Preparation</h3>
							<ul className="menu-item__ingredients-list">
								{data.ingredients.map((ingredient, i) => (
									<li key={i}>{ingredient}</li>
								))}
							</ul>
						</div>

						{/* Divider */}
						<motion.div
							className="divider div-transparent div-arrow-down"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						/>

						{/* Action + Social */}
						<div className="menu-item__action">
							<button type="button" className="btn">
								Add to Order
							</button>
							<ul className="social_icons">
								{data.chefInfo.social.map((s, i) => (
									<li key={i}>
										<a
											href={s.url}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`Share on ${s.platform}`}
										>
											<i className={s.icon} aria-hidden="true"></i>
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Chef info */}
						<div className="post__details-author">
							<div className="post__details-author__avatar">
								<Image
									src={data.chefInfo.avatar}
									alt={`Chef ${data.chefInfo.name}`}
									width={120}
									height={120}
									sizes="120px"
									loading="lazy"
								/>
							</div>
							<div className="post__details-author__content">
								<h3 className="post__details-author__name">
									<span>Head Chef: </span>
									{data.chefInfo.name}
								</h3>
								<p>{data.chefInfo.bio}</p>
								<ul className="social_icons">
									{data.chefInfo.social.map((s, i) => (
										<li key={i}>
											<a
												href={s.url}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={s.platform}
											>
												<i className={s.icon} aria-hidden="true"></i>
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Reviews */}
						<div className="comments">
							<h3 className="comments-title">Customer Reviews</h3>
							<ul className="comments-list">
								{data.reviews.map((review) => (
									<li key={review.id} className="comments-item">
										<div className="comments-item__header">
											<div className="comments-item__avatar">
												<Image
													src={review.avatar}
													alt={review.name}
													width={60}
													height={60}
													sizes="60px"
													loading="lazy"
												/>
											</div>
											<div className="comments-item__info">
												<h4 className="comments-item__name">{review.name}</h4>
												<p className="comments-item__date">{review.date}</p>
												<div className="review-stars">
													{[...Array(review.rating)].map((_, i) => (
														<i key={i} className="fa-solid fa-star"></i>
													))}
												</div>
											</div>
										</div>
										<div className="comments-item__content">
											<p className="comments-item__text">{review.text}</p>
										</div>
									</li>
								))}
							</ul>

							{/* Review Form */}
							<div className="comments__form">
								<h3 className="comments-title">Leave a Review</h3>
								<form className="form" action="/ruta-de-envio" method="post">
									<div className="form__body">
										<div className="form_row">
											<div className="form_field form_field__name">
												<label htmlFor="name">Name:</label>
												<input
													type="text"
													className="input"
													id="name"
													name="name"
													placeholder="Name"
												/>
											</div>
											<div className="form_field form_field__email">
												<label htmlFor="email">Email:</label>
												<input
													type="email"
													className="input"
													id="email"
													name="email"
													placeholder="Email"
												/>
											</div>
										</div>
										<div className="form_row">
											<div className="form_field form_field__message">
												<label htmlFor="message">Your Review:</label>
												<textarea
													className="input input-textarea"
													id="message"
													name="message"
													placeholder="Share your experience with this dish"
												></textarea>
											</div>
										</div>
									</div>
									<div className="form_footer">
										<div className="form_field">
											<button className="btn" type="submit" value="submit">
												Submit Review
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</article>

				{/* Sidebar */}
				<div className="blog__sidebar">
					<aside className="sidebar__content">
						{/* Widget: Quick Info */}
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">Quick Info</h3>
							<div className="quick-info-list">
								{sidebar.quickInfo.map((item, i) => (
									<div key={i} className="quick-info-item">
										<i className={item.icon}></i>
										<span>{item.text}</span>
									</div>
								))}
							</div>
						</motion.div>

						{/* Widget: Categories */}
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">Menu Categories</h3>
							<div className="sidebar__categories">
								{sidebar.categories.map((cat, i) => (
									<Link key={i} href={cat.href}>
										<span>
											{cat.name}
											<span className="number-posts">({cat.count})</span>
										</span>
									</Link>
								))}
							</div>
						</motion.div>

						{/* Widget: Related Items */}
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">You May Also Like</h3>
							<div className="sidebar__recent-posts">
								{sidebar.relatedItems.map((item) => (
									<div key={item.id} className="sidebar__post">
										<div className="sidebar__post__image">
											<Link href={item.link}>
												<Image
													src={item.image}
													alt={item.name}
													width={128}
													height={96}
													sizes="128px"
													loading="lazy"
												/>
											</Link>
										</div>
										<div className="sidebar__post__content">
											<p>
												<span>{item.category}</span>
											</p>
											<h4>
												<Link href={item.link}>{item.name}</Link>
											</h4>
											<p className="sidebar-price">{item.price}</p>
										</div>
									</div>
								))}
							</div>
						</motion.div>

						{/* Widget: Dietary Tags */}
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">Dietary Tags</h3>
							<div className="sidebar__tags">
								{sidebar.dietaryTags.map((tag) => (
									<span key={tag} className="sidebar__tag">
										{tag}
									</span>
								))}
							</div>
						</motion.div>

						{/* Widget: Gallery */}
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">Dish Gallery</h3>
							<div className="sidebar__gallery">
								<div className="gallery-block__list">
									{sidebar.galleryImages.map((img, index) => (
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
													<i className="fa-solid fa-plus" aria-hidden="true"></i>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</motion.div>
					</aside>
				</div>
			</div>

			{/* Lightbox */}
			{lightboxOpen && (
				<div className="lightbox" style={{ display: "flex" }}>
					<div className="lightbox-wrapper">
						<div className="lightbox-close" onClick={closeLightbox}>
							&times;
						</div>
						<div className="lightbox-content">
							<Image
								src={sidebar.galleryImages[lightboxIndex].src}
								alt={sidebar.galleryImages[lightboxIndex].alt}
								className="lightbox-img"
								width={624}
								height={390}
								sizes="(min-width: 768px) 80vw, 100vw"
								onClick={nextImage}
							/>
							<div className="lightbox-caption">
								<div className="caption-counter">
									{lightboxIndex + 1} of {sidebar.galleryImages.length}
								</div>
							</div>
						</div>
						<div className="lightbox-controls">
							<div className="lightbox-arrows lightbox-prev" onClick={prevImage}></div>
							<div className="lightbox-arrows lightbox-next" onClick={nextImage}></div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MenuSingleBlock;
