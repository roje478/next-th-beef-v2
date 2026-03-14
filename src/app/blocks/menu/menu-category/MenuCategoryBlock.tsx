"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	menuCategoryIntro,
	menuCategoryItems,
	menuCategorySidebar,
} from "@/app/hooks/data-menu-category";

interface MenuItem {
	id: number;
	name: string;
	price: string;
	description: string;
	image: string;
	link: string;
}

interface MenuCategoryBlockProps {
	subtitle?: string;
	title?: string;
	description?: string;
	items?: MenuItem[];
}

const MenuCategoryBlock = (props: MenuCategoryBlockProps) => {
	const {
		subtitle = menuCategoryIntro.subtitle,
		title = menuCategoryIntro.title,
		description = menuCategoryIntro.description,
		items = menuCategoryItems,
	} = props;

	const sidebar = menuCategorySidebar;

	// Lightbox state for sidebar gallery
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
			(prev) =>
				(prev - 1 + sidebar.galleryImages.length) % sidebar.galleryImages.length
		);

	return (
		<>
			<div className="blog blog__sidebar">
				{/* Category Content (Main Column) */}
				<div className="blog__posts">
					<div className="menu-category__content">
						{/* Category Introduction */}
						<div className="section-title">
							<p className="section-title__subtitle">{subtitle}</p>
							<h2 className="section-title__title">{title}</h2>
							<p>{description}</p>
						</div>

						{/* Divider */}
						<motion.div
							className="divider div-transparent div-arrow-down"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						/>

						{/* Menu Items Grid */}
						<div className="menu-category__grid">
							{items.map((item) => (
								<article key={item.id} className="menu-category__item">
									<div className="menu-category__item-image">
										<Link href={item.link}>
											<Image
												src={item.image}
												alt={item.name}
												width={678}
												height={426}
												sizes="(min-width: 1024px) 40vw, 100vw"
												loading="lazy"
											/>
										</Link>
									</div>
									<div className="menu-category__item-content">
										<div className="dish">
											<div className="dish__content">
												<h3 className="dish__title">
													<Link href={item.link}>{item.name}</Link>
												</h3>
												<span className="dish__price">{item.price}</span>
											</div>
											<div className="dish__description">
												<span>{item.description}</span>
											</div>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</div>

				{/* Sidebar */}
				<div className="blog__sidebar">
					<aside className="sidebar__content">
						{/* Widget: Categories */}
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">Menu Categories</h3>
							<div className="sidebar__categories">
								{sidebar.categories.map((cat) => (
									<Link
										key={cat.id}
										href={cat.href}
										className={cat.active ? "active" : undefined}
									>
										<span>
											{cat.name}
											<span className="number-posts">({cat.count})</span>
										</span>
									</Link>
								))}
							</div>
						</motion.div>

						{/* Widget: Chef's Special */}
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">Chef&apos;s Special</h3>
							<div className="sidebar__recent-posts">
								<div className="sidebar__post">
									<div className="sidebar__post__image">
										<Image
											src={sidebar.chefSpecial.image}
											alt={sidebar.chefSpecial.name}
											width={128}
											height={96}
											sizes="128px"
											loading="lazy"
										/>
									</div>
									<div className="sidebar__post__content">
										<p>
											<span>{sidebar.chefSpecial.category}</span>
										</p>
										<h4>
											<Link href={sidebar.chefSpecial.link}>
												{sidebar.chefSpecial.name}
											</Link>
										</h4>
										<p className="sidebar-price">
											{sidebar.chefSpecial.price}
										</p>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Widget: Dietary Options */}
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">Dietary Options</h3>
							<div className="sidebar__tags">
								{sidebar.dietaryOptions.map((tag) => (
									<a key={tag} href="#">
										{tag}
									</a>
								))}
							</div>
						</motion.div>

						{/* Widget: Price Range */}
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">Price Range</h3>
							<div className="sidebar__categories">
								{sidebar.priceRanges.map((range) => (
									<a key={range.id} href="#">
										<span>
											{range.label}
											<span className="number-posts">({range.count})</span>
										</span>
									</a>
								))}
							</div>
						</motion.div>

						{/* Widget: Popular Dishes */}
						<motion.div
							className="sidebar__widget"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h3 className="sidebar__widget-title">Popular Dishes</h3>
							<div className="sidebar__recent-posts">
								{sidebar.popularDishes.map((dish) => (
									<div key={dish.id} className="sidebar__post">
										<div className="sidebar__post__image">
											<Image
												src={dish.image}
												alt={dish.name}
												width={128}
												height={96}
												sizes="128px"
												loading="lazy"
											/>
										</div>
										<div className="sidebar__post__content">
											<p>
												<span>{dish.category}</span>
											</p>
											<h4>
												<Link href={dish.link}>{dish.name}</Link>
											</h4>
											<p className="sidebar-price">{dish.price}</p>
										</div>
									</div>
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

export default MenuCategoryBlock;
