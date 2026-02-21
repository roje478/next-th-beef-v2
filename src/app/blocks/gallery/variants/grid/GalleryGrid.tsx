"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { LightBox } from "../../../../components/common/lightbox";
import { MasonryGalleryProps } from "@/app/types/common.types";

const GalleryGrid: React.FC<MasonryGalleryProps> = ({
	subtitle,
	title,
	phrase,
	items = [],
	emptyMessage = "No gallery items available.",
	lightboxOpenLabel = "Open lightbox",
}) => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

	return (
		<section className="gallery-block">
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
					{items.map((item, index) => (
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
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
						>
							<div className="gallery-block__item-image">
								<Image
									src={item.image}
									alt={item.title}
									width={400}
									height={400}
									loading="lazy"
									sizes="(max-width: 640px) 50vw, 25vw"
								/>
								<div className="gallery-block__item-icon">
									<Plus />
								</div>
							</div>
							<div className="gallery-block__item-info">
								<h3>{item.title}</h3>
								<p>{item.subtitle}</p>
							</div>
						</motion.div>
					))}
				</div>
				{/* /Grid */}

				{/* Lightbox */}
				{selectedIndex !== null && (
					<LightBox
						items={items}
						startIndex={selectedIndex}
						onClose={handleCloseLightbox}
					/>
				)}
			</div>
		</section>
	);
};

export default GalleryGrid;
