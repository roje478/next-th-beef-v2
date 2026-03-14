"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface VenueItem {
	id: number;
	icon: string;
	title: string;
	capacity: string;
	description: string;
	features: string[];
	animation: "left" | "right";
	delay: number;
}

interface GalleryImage {
	id: number;
	src: string;
	alt: string;
	title: string;
	category: string;
}

interface VenueSpacesProps {
	subtitle: string;
	title: string;
	description: string;
	detailsTitle: string;
	venues: VenueItem[];
	galleryImages: GalleryImage[];
}

const VenueSpacesBlock = ({
	subtitle,
	title,
	description,
	detailsTitle,
	venues,
	galleryImages,
}: VenueSpacesProps) => {
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

	return (
		<>
			<section className="venue-spaces">
				<div className="venue-spaces__container">
					{/* Section Title */}
					<div className="section-title section-title__center">
						<p className="section-title__subtitle">{subtitle}</p>
						<h2 className="section-title__title">{title}</h2>
						<p>{description}</p>
					</div>
					{/* /Section Title */}

					{/* Venue Details List */}
					<div className="venue-spaces__details">
						<h3 className="venue-spaces__details-title">{detailsTitle}</h3>

						<div className="venue-spaces__details-grid">
							{venues.map((venue) => (
								<motion.article
									key={venue.id}
									className="venue-spaces__item"
									initial={{
										opacity: 0,
										x: venue.animation === "left" ? -30 : 30,
									}}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: venue.delay }}
								>
									<div className="venue-spaces__item-header">
										<div className="venue-spaces__item-icon">
											<i className={venue.icon} aria-hidden="true"></i>
										</div>
										<div className="venue-spaces__item-info">
											<h4 className="venue-spaces__item-title">{venue.title}</h4>
											<p className="venue-spaces__item-capacity">
												{venue.capacity}
											</p>
										</div>
									</div>
									<p className="venue-spaces__item-description">
										{venue.description}
									</p>
									<ul className="venue-spaces__item-features">
										{venue.features.map((feature, i) => (
											<li key={i}>
												<i className="fa-solid fa-check"></i> {feature}
											</li>
										))}
									</ul>
								</motion.article>
							))}
						</div>
					</div>
					{/* /Venue Details List */}

					{/* Gallery */}
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
										sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
										loading="lazy"
									/>
									<div className="gallery-block__item-icon">
										<i className="fa-solid fa-plus" aria-hidden="true"></i>
									</div>
								</div>
								<div className="gallery-block__item-info">
									<h4>{img.title}</h4>
									<p>{img.category}</p>
								</div>
							</div>
						))}
					</div>
					{/* /Gallery */}
				</div>
			</section>

			{/* Lightbox */}
			{lightboxOpen && (
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

export default VenueSpacesBlock;
