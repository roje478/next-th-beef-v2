"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import SliderItem from "./slider-item";
import SliderThumbnailItem from "./slider-thumbnail-item";

// interface
import { HeroClassicSliderProps } from "@/app/types/common.types";

const HeroCreativeSliderBlock = ({
	items,
	emptyMessage = "No hero available at the moment.",
}: HeroClassicSliderProps) => {
	const [itemActive, setItemActive] = useState<number>(
		items?.[0]?.id ?? 1
	);

	if (!items || items.length === 0) {
		return (
			<div className="hero-slider hero-slider--empty">
				<p>{emptyMessage}</p>
			</div>
		);
	}

	return (
		<section
			className="hero-slider"
			role="region"
			aria-roledescription="carousel"
			aria-label="Hero slider"
		>
			{/* Slider list */}
			<div className="slider-hero" style={{ position: "relative", height: "100%" }}>
				{items.map((item, index) => (
					<SliderItem
						key={item.id}
						itemActive={itemActive}
						id={item.id}
						image={item.image}
						subtitle={item.subtitle}
						title={item.title}
						altText={item.altText}
						desc={item.desc}
						link={item.link}
						textLink={item.textLink}
						isFirst={index === 0}
					/>
				))}

				{/* Pagination dots */}
				<div className="splide__pagination absolute z-50" role="tablist" aria-label="Slide navigation">
					{items.map((item) => (
						<button
							key={item.id}
							type="button"
							role="tab"
							aria-selected={itemActive === item.id}
							aria-label={`Go to slide ${item.id}`}
							className={cn(
								"splide__pagination__page",
								itemActive === item.id && "is-active"
							)}
							onClick={() => setItemActive(item.id)}
						/>
					))}
				</div>
				{/* /Pagination dots */}
			</div>
			{/* /Slider list */}

			{/* Thumbnail list */}
			<div className="thumbnail">
				<Swiper
					className="slider-thumbnail"
					slidesPerView={2}
					breakpoints={{
						640: { slidesPerView: 2, spaceBetween: 10 },
						1024: { slidesPerView: 3, spaceBetween: 15 },
					}}
					spaceBetween={10}
					modules={[A11y]}
					a11y={{
						enabled: true,
						containerMessage: "Hero thumbnail navigation",
					}}
				>
					{items.map((item) => (
						<SwiperSlide key={item.id}>
							<SliderThumbnailItem
								itemActive={itemActive}
								id={item.id}
								image={item.image}
								altText={item.altText}
								onClick={() => setItemActive(item.id)}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{/* /Thumbnail list */}
		</section>
	);
};

HeroCreativeSliderBlock.displayName = "HeroCreativeSliderBlock";
export default HeroCreativeSliderBlock;
