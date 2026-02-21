"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DishItem from "@/app/components/common/dish/DishItem";

import {
	MenuContentDisplayProps,
	MenuCategory,
	DishItem as DishItemType,
} from "@/app/types/common.types";

const MenuContentDisplay: React.FC<MenuContentDisplayProps> = ({
	categories,
	emptyMessage,
}) => {
	if (!categories || categories.length === 0) {
		return <p>{emptyMessage || "No menu items to display."}</p>;
	}

	return (
		<div className="navmenu-content">
			{categories.map((categoryItem: MenuCategory, categoryIndex: number) => (
				<div
					key={categoryItem.id ?? categoryIndex}
					id={categoryItem.anchor || ""}
					className="menu__category"
				>
					{/* Category dishes */}
					<div className="menu__category-dishes">
						{/* Section title */}
						<div className="section-title">
							<h2 className="section-title__title">
								{categoryItem.title}
							</h2>
							{categoryItem.phrase && <p>{categoryItem.phrase}</p>}
							{/* Divider */}
							<motion.div
								className="divider div-transparent div-arrow-down"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							/>
							{/* /Divider */}
						</div>
						{/* /Section title */}
						{categoryItem.dishesList.map(
							(dish: DishItemType, dishIndex: number) => (
								<DishItem
									key={dish.id ?? `dish-${categoryIndex}-${dishIndex}`}
									title={dish.title}
									price={dish.price}
									description={dish.description}
								/>
							)
						)}
					</div>
					{/* /Category dishes */}
					{/* Category image */}
					<motion.div
						className="menu__category-image"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<Image
							src={categoryItem.image}
							alt={categoryItem.altText || ""}
							width={568}
							height={880}
							loading="lazy"
							sizes="(min-width: 768px) 50vw, 100vw"
						/>
					</motion.div>
					{/* /Category image */}
				</div>
			))}
		</div>
	);
};

export default MenuContentDisplay;
