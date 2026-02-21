"use client";
import DishItem from "@/app/components/common/dish/DishItem";
import { MenuCategory } from "@/app/types/common.types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const CardMenuImage = ({
	image,
	altText,
	tag,
	title,
	phrase,
	dishesList,
}: MenuCategory) => {
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
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
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
