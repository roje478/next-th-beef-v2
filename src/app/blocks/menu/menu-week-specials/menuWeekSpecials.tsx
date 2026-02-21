"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import DishItem from "@/app/components/common/dish/DishItem";
import { WeekSpecialsProps } from "@/app/types/common.types";

const MenuWeekSpecialsBlock = ({
	subtitle,
	title,
	phrase,
	items,
	buttonUrl,
	buttonText,
	emptyMessage = "No week specials available at the moment.",
}: WeekSpecialsProps) => {
	// Improved data validation check
	if (!items || items.length === 0) {
		return (
			<div className="week-specials week-specials--empty">
				<p>{emptyMessage}</p>
			</div>
		);
	}

	const midpoint = Math.ceil(items.length / 2);
	const firstColumn = items.slice(0, midpoint);
	const secondColumn = items.slice(midpoint);

	return (
		<section className="week-specials">
			<div className="week-specials__overlayer"></div>
			<div className="week-specials__container">
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

				{/* Menu block */}
				<div className="week-specials__dishes">
					{/* Dishes list */}
					<div className="dishes__list dishes__list--col">
						{firstColumn.map((item) => (
							<DishItem
								key={item.id}
								title={item.title}
								price={item.price}
								description={item.description}
							/>
						))}
					</div>
					{/* /Dishes list */}
					{/* Dishes list */}
					<div className="dishes__list dishes__list--col">
						{secondColumn.map((item) => (
							<DishItem
								key={item.id}
								title={item.title}
								price={item.price}
								description={item.description}
							/>
						))}
					</div>
					{/* /Dishes list */}
				</div>
				{/* /Menu block */}

				{/* Link */}
				{buttonUrl && (
					<Link href={buttonUrl} className="btn">
						{buttonText}
					</Link>
				)}
				{/* /Link */}
			</div>
		</section>
	);
};

export default MenuWeekSpecialsBlock;
