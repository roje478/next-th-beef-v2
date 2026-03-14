"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LightBox } from "../../../../components/common/lightbox";
import { MasonryGalleryProps } from "@/app/types/common.types";
import throttle from "lodash.throttle";

const RESIZE_THROTTLE_LIMIT = 200;

const MasonryGallery: React.FC<MasonryGalleryProps> = ({
	subtitle,
	title,
	phrase,
	items = [],
	emptyMessage = "No gallery items available.",
	lightboxOpenLabel = "Open lightbox",
}) => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const masonryRef = useRef<HTMLDivElement>(null);
	const masonryInstance = useRef<{ layout?: () => void; destroy?: () => void; options?: Record<string, unknown> } | null>(null);

	const handleOpenLightbox = (index: number) => {
		setSelectedIndex(index);
	};

	const handleCloseLightbox = () => {
		setSelectedIndex(null);
	};

	// Initialize masonry layout
	useEffect(() => {
		const initMasonry = async () => {
			try {
				if (typeof window !== "undefined" && masonryRef.current) {
					const Masonry = (await import("masonry-layout")).default;
					const getGutter = () => {
						if (window.innerWidth < 640) return 16;
						if (window.innerWidth < 1024) return 20;
						return 24;
					};
					masonryInstance.current = new Masonry(masonryRef.current, {
						itemSelector: ".gallery-block__masonry-item",
						columnWidth: ".gallery-block__masonry-sizer",
						percentPosition: true,
						gutter: getGutter(),
						transitionDuration: "0.3s",
					});
					masonryRef.current.classList.remove("is-loading");
					masonryRef.current.classList.add("is-ready");
				}
			} catch (err) {
				// Masonry init failed silently
			}
		};

		initMasonry();

		return () => {
			if (masonryInstance.current) {
				masonryInstance.current.destroy?.();
				masonryInstance.current = null;
			}
		};
	}, []);

	// Re-layout on image load
	const handleImageLoad = useCallback(() => {
		masonryInstance.current?.layout?.();
	}, []);

	// Handle resize
	useEffect(() => {
		const handleResize = () => {
			if (masonryInstance.current?.options) {
				const getGutter = () => {
					if (window.innerWidth < 640) return 16;
					if (window.innerWidth < 1024) return 20;
					return 24;
				};
				masonryInstance.current.options!.gutter = getGutter();
				masonryInstance.current.layout?.();
			}
		};

		const throttledResizeHandler = throttle(handleResize, RESIZE_THROTTLE_LIMIT);
		window.addEventListener("resize", throttledResizeHandler);
		return () => window.removeEventListener("resize", throttledResizeHandler);
	}, []);

	if (items.length === 0) {
		return (
			<div className="gallery-block gallery-block--empty">
				<p>{emptyMessage}</p>
			</div>
		);
	}

	return (
		<section className="gallery-block gallery-block--masonry">
			<div className="gallery-block__masonry-container">
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

				<div
					className="gallery-block__masonry-grid is-loading"
					ref={masonryRef}
					role="list"
					aria-label="Gallery"
				>
					<div className="gallery-block__masonry-sizer"></div>
					{items.map((item, index) => (
						<motion.div
							key={item.id}
							className="gallery-block__masonry-item"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
						>
							<div
								className="gallery-block__item"
								onClick={() => handleOpenLightbox(index)}
								role="button"
								tabIndex={0}
								aria-label={lightboxOpenLabel}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										handleOpenLightbox(index);
									}
								}}
							>
								<div className="gallery-block__item-image">
									<Image
										src={item.image}
										alt={item.title}
										width={400}
										height={400}
										loading="lazy"
										onLoad={handleImageLoad}
										sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
									/>
								</div>
								<div className="gallery-block__item-info">
									<h4>{item.title}</h4>
									<p>{item.subtitle}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>

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

export default MasonryGallery;
