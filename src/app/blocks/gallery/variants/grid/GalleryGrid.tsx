"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LightBox } from "../../../../components/common/lightbox";
import { MasonryGalleryProps } from "@/app/types/common.types";

interface GalleryGridProps extends MasonryGalleryProps {
	variant?: "default" | "small";
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
	subtitle,
	title,
	phrase,
	items = [],
	emptyMessage = "No gallery items available.",
	lightboxOpenLabel = "Open lightbox",
	variant = "default",
}) => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const isSmall = variant === "small";

	const handleOpenLightbox = (index: number) => {
		setSelectedIndex(index);
	};

	const handleCloseLightbox = () => {
		setSelectedIndex(null);
	};

	if (items.length === 0) {
		return (
			<div className="gallery-block gallery-block--empty">
				<p>{emptyMessage}</p>
			</div>
		);
	}

	const galleryItems = items.map((item, index) => (
		<motion.div
			key={item.id}
			className="gallery-block__item"
			role="button"
			tabIndex={0}
			aria-label={lightboxOpenLabel}
			onClick={() => handleOpenLightbox(index)}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					handleOpenLightbox(index);
				}
			}}
			initial={{ opacity: 0, ...(isSmall ? { x: 30 } : { y: 30 }) }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
		>
			<div className="gallery-block__item-image">
				<Image
					src={item.image}
					alt={item.altText || item.title}
					width={isSmall ? 382 : 400}
					height={isSmall ? 360 : 400}
					loading="lazy"
					sizes="(max-width: 640px) 50vw, 25vw"
				/>
				<div className="gallery-block__item-icon">
					<i className="fa-solid fa-plus" aria-hidden="true"></i>
				</div>
			</div>
			{!isSmall && (
				<div className="gallery-block__item-info">
					<h3>{item.title}</h3>
					<p>{item.subtitle}</p>
				</div>
			)}
		</motion.div>
	));

	return (
		<section className={cn("gallery-block", isSmall && "gallery-block__small")}>
			{isSmall ? (
				<>
					{/* Gallery list */}
					<div className="gallery-block__list" role="list" aria-label="Gallery">
						{galleryItems}
					</div>
					{/* /Gallery list */}
				</>
			) : (
				<div className="gallery-block__container">
					{/* Section title */}
					<div className="section-title section-title__no-divider section-title__center">
						{subtitle && <p className="section-title__subtitle">{subtitle}</p>}
						{title && <h2 className="section-title__title">{title}</h2>}
						{phrase && <p>{phrase}</p>}
					</div>
					{/* /Section title */}
					{/* Divider */}
					<motion.div
						className="divider div-transparent div-arrow-down"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.7 }}
					/>
					{/* /Divider */}
					{/* Grid */}
					<div className="gallery-block__list" role="list" aria-label="Gallery">
						{galleryItems}
					</div>
					{/* /Grid */}
				</div>
			)}

			{/* Lightbox */}
			{selectedIndex !== null && (
				<LightBox
					items={items}
					startIndex={selectedIndex}
					onClose={handleCloseLightbox}
				/>
			)}
		</section>
	);
};

export default GalleryGrid;
