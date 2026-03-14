"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface TestimonialV2Item {
	id: number;
	rating: number;
	comment: string;
	authorName: string;
	authorRole: string;
	authorImage: string;
}

interface TestimonialsV2BlockProps {
	subtitle: string;
	title: string;
	items: TestimonialV2Item[];
}

const TestimonialsV2Block = ({
	subtitle,
	title,
	items,
}: TestimonialsV2BlockProps) => {
	return (
		<section className="testimonials-v2" aria-label="Guest testimonials">
			<div className="testimonials-v2__container">
				{/* Section Title */}
				<motion.div
					className="section-title section-title__center mb-12"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<p className="section-title__subtitle">{subtitle}</p>
					<h2 className="section-title__title">{title}</h2>
				</motion.div>
				{/* /Section Title */}

				{/* Testimonials Slider */}
				<div className="testimonials-v2__swiper">
					<Swiper
						modules={[Navigation]}
						navigation={{
							prevEl: ".testimonials-v2 .splide__arrow--prev",
							nextEl: ".testimonials-v2 .splide__arrow--next",
						}}
						slidesPerView={1}
						loop={true}
						className="testimonials-v2__swiper-instance"
					>
						{items.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="testimonials-v2__item">
									<div className="testimonials-v2__item-quote-icon">
										<i className="fa-solid fa-quote-left" aria-hidden="true"></i>
									</div>
									<div className="testimonials-v2__item-rating">
										{Array.from({ length: item.rating }).map((_, i) => (
											<i
												key={i}
												className="fa-solid fa-star"
												aria-hidden="true"
											></i>
										))}
									</div>
									<div className="testimonials-v2__item-comment">
										{item.comment}
									</div>
									<div className="testimonials-v2__item-author">
										<div className="testimonials-v2__item-author-image">
											<Image
												src={item.authorImage}
												alt={item.authorName}
												width={60}
												height={60}
												sizes="60px"
												loading="lazy"
											/>
										</div>
										<div className="testimonials-v2__item-author-info">
											<h5>{item.authorName}</h5>
											<p>{item.authorRole}</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="splide__arrows">
						<button className="splide__arrow splide__arrow--prev">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polyline points="15 18 9 12 15 6"></polyline>
							</svg>
						</button>
						<button className="splide__arrow splide__arrow--next">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polyline points="9 18 15 12 9 6"></polyline>
							</svg>
						</button>
					</div>
				</div>
				{/* /Testimonials Slider */}
			</div>
		</section>
	);
};

TestimonialsV2Block.displayName = "TestimonialsV2Block";
export default TestimonialsV2Block;
