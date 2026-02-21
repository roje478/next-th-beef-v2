"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	TestimonialsBlockProps,
	TestimonialItem,
} from "@/app/types/common.types";
import { testimonialsData } from "@/app/hooks/data-testimonials";

const TestimonialsBlock = (props: TestimonialsBlockProps) => {
	const {
		bgImage = testimonialsData.bgImage,
		bgImageAlt = testimonialsData.bgImageAlt,
		comments = testimonialsData.comments as TestimonialItem[],
		prevButtonAriaLabel = testimonialsData.prevButtonAriaLabel,
		nextButtonAriaLabel = testimonialsData.nextButtonAriaLabel,
	} = props;

	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);

	if (!comments || comments.length === 0) {
		return null;
	}

	return (
		<section className="testimonials" aria-label="Customer testimonials">
			{/* Background */}
			<div className="overlayer"></div>
			<Image
				src={bgImage}
				alt={bgImageAlt}
				fill
				sizes="100vw"
				loading="lazy"
				style={{ objectFit: "cover", zIndex: 0 }}
			/>
			{/* /Background */}
			<div className="testimonials__container">
				{/* Testimonials */}
				<div className="testimonials__swiper">
					<Swiper
						slidesPerView={1}
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
						modules={[Navigation, A11y, Autoplay]}
						loop={true}
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						}}
						a11y={{
							prevSlideMessage: prevButtonAriaLabel,
							nextSlideMessage: nextButtonAriaLabel,
						}}
					>
						{comments.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="testimonials__item">
									<div className="testimonials__item-comment">
										&ldquo;{item.description}&rdquo;
									</div>
									<div className="testimonials__item-author">
										<h3>{item.name}</h3>
										<p>{item.position}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					{/* Arrows */}
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
					{/* /Arrows */}
				</div>
				{/* /Testimonials */}
			</div>
		</section>
	);
};

export default TestimonialsBlock;
