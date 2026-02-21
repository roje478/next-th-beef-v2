"use client";
import DishItem from "@/app/components/common/dish/DishItem";
import { MenuCategory } from "@/app/types/common.types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface CardMenuImageProps extends MenuCategory {
	variant?: "default" | "full";
	index?: number;
}

const CardMenuImage = ({
	image,
	altText,
	tag,
	title,
	phrase,
	dishesList,
	variant = "default",
	index = 0,
}: CardMenuImageProps) => {
	const isFull = variant === "full";
	const initial = isFull
		? { opacity: 0, x: index % 2 === 0 ? 30 : -30 }
		: { opacity: 0, y: 30 };
	const animate = isFull
		? { opacity: 1, x: 0 }
		: { opacity: 1, y: 0 };

	return (
		<div className="menu__category">
			{/* Category image */}
			<div className="menu__category-image">
				<Image
					src={image}
					alt={altText || ""}
					width={568}
					height={880}
					loading="lazy"
					sizes="(min-width: 768px) 50vw, 100vw"
				/>
			</div>
			{/* /Category image */}
			{/* Category dishes */}
			<motion.div
				className="menu__category-dishes"
				initial={initial}
				whileInView={animate}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				{/* Section title */}
				<div className="section-title">
					{tag && <p className="section-title__subtitle">{tag}</p>}
					{title && <h3 className="section-title__title">{title}</h3>}
					{phrase && <p>{phrase}</p>}
				</div>
				{/* /Section title */}
				{/* List Item dishes */}
				{dishesList.map((item) => (
					<DishItem
						key={item.id}
						title={item.title}
						price={item.price}
						description={item.description}
					/>
				))}
				{/* /List Item dishes */}
			</motion.div>
			{/* /Category dishes */}
		</div>
	);
};

export default CardMenuImage;
