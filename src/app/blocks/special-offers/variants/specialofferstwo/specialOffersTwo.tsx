"use client";
import { useRef } from "react";
import Image from "next/image";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Link from "next/link";

// Interface
import { SpecialOffersBlockProps } from "@/app/types/common.types";
import { specialOffersData } from "@/app/hooks/data-special-offers";

const SpecialOffersTwoBlock = ({
	title = specialOffersData.title,
	phrase = specialOffersData.phrase,
	items = specialOffersData.items,
	emptyMessage = specialOffersData.emptyMessage,
	carouselAriaLabel = specialOffersData.carouselAriaLabel,
	prevButtonAriaLabel = specialOffersData.prevButtonAriaLabel,
	nextButtonAriaLabel = specialOffersData.nextButtonAriaLabel,
}: SpecialOffersBlockProps) => {
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);

	// Improved data validation check
	if (!items || items.length === 0) {
		return (
			<div className="special-offers special-offers--empty">
				<p>{emptyMessage}</p>
			</div>
		);
	}

	return (
		<motion.section
			className="special-offers bg-coarseWool-800"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.3 }}
		>
			<div className="special-offers__container">
				{/* Title Section */}
				<div className="section-title section-title__center">
					<h2 className="section-title__title">{title}</h2>
					{phrase && <p>{phrase}</p>}
				</div>
				{/* /Title Section */}

				{/* Swiper - Special Offers */}
				<div className="special-offers__swiper">
					<Swiper
						breakpoints={{
							320: { slidesPerView: 1 },
							768: { slidesPerView: 1 },
							1024: { slidesPerView: 1 },
						}}
						navigation={{
							prevEl: prevRef.current,
							nextEl: nextRef.current,
						}}
						onBeforeInit={(swiper) => {
							if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
								swiper.params.navigation.prevEl = prevRef.current;
								swiper.params.navigation.nextEl = nextRef.current;
							}
						}}
						modules={[Navigation, A11y]}
						loop={false}
						a11y={{
							enabled: true,
							prevSlideMessage: prevButtonAriaLabel,
							nextSlideMessage: nextButtonAriaLabel,
							containerMessage: carouselAriaLabel,
						}}
					>
						{items.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="special-offers__item">
									{/* image */}
									<div className="special-offers__item-image">
										<Image
											src={item.image}
											alt={item.altText}
											width={678}
											height={426}
											loading="lazy"
										/>
									</div>
									{/* /image */}
									{/* info */}
									<div className="special-offers__item-info">
										<h3>
											{item.title} <span>{item.price}</span>
										</h3>
										{item.description_primary && (
											<p>{item.description_primary}</p>
										)}
										{item.description_secondary && (
											<p>{item.description_secondary}</p>
										)}
										<Link href={item.link} className="btn-link">
											{item.linkText || "add order"}
										</Link>
									</div>
									{/* /info */}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="splide__arrows">
						<button
							ref={prevRef}
							className="splide__arrow splide__arrow--prev"
							aria-label={prevButtonAriaLabel}
						/>
						<button
							ref={nextRef}
							className="splide__arrow splide__arrow--next"
							aria-label={nextButtonAriaLabel}
						/>
					</div>
				</div>
				{/* /Swiper - Special Offers */}
			</div>
		</motion.section>
	);
};

export default SpecialOffersTwoBlock;
