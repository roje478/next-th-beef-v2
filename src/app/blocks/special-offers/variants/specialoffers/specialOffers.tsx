"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

// Interface
import { SpecialOffersBlockProps } from "@/app/types/common.types";
import { specialOffersData } from "@/app/hooks/data-special-offers";

const SpecialOffersBlock = ({
	items = specialOffersData.items,
	emptyMessage = specialOffersData.emptyMessage,
	carouselAriaLabel = specialOffersData.carouselAriaLabel,
}: SpecialOffersBlockProps) => {
	const [activeSlide, setActiveSlide] = useState(0);
	const swiperRef = useRef<SwiperType | null>(null);

	if (!items || items.length === 0) {
		return (
			<div className="special-offers-2 special-offers-2--empty">
				<p>{emptyMessage}</p>
			</div>
		);
	}

	return (
		<motion.section
			className="special-offers-2 bg-coarseWool-800"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className="special-offers-2__container">
				{/* Slider Special Offers */}
				<Swiper
					slidesPerView={1}
					modules={[A11y]}
					loop={true}
					onSwiper={(swiper) => { swiperRef.current = swiper; }}
					onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
					a11y={{
						enabled: true,
						containerMessage: carouselAriaLabel,
					}}
				>
					{items.map((item, index) => (
						<SwiperSlide key={item.id}>
							<div className="special-offers-2__item">
								{/* image */}
								<div className="special-offers-2__item-image">
									<Image
										src={item.image}
										alt={item.altText}
										width={1920}
										height={1080}
										priority={index === 0}
									/>
								</div>
								{/* /image */}
								{/* overlayer */}
								<div className="overlayer"></div>
								{/* /overlayer */}
								{/* info */}
								<motion.div
									className="special-offers-2__item-info"
									initial={{ opacity: 0 }}
									animate={
										activeSlide === index
											? { opacity: 1 }
											: {}
									}
									transition={{ duration: 1 }}
								>
									<span className="tag">{item.tag}</span>
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
								</motion.div>
								{/* /info */}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				{/* /Slider Special Offers */}

				{/* Pagination dots */}
				<div className="splide__pagination absolute bottom-12 left-0 right-0 z-10 justify-center">
					{items.map((item, index) => (
						<button
							key={item.id}
							type="button"
							aria-label={`Go to slide ${index + 1}`}
							className={cn(
								"splide__pagination__page",
								activeSlide === index && "is-active"
							)}
							onClick={() => swiperRef.current?.slideToLoop(index)}
						/>
					))}
				</div>
				{/* /Pagination dots */}
			</div>
		</motion.section>
	);
};

export default SpecialOffersBlock;
