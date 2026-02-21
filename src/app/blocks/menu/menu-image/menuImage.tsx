"use client";
import React from "react";
import { motion } from "framer-motion";
import CardMenuImage from "./cardMenuImage";

// Interfaces
import { MenuImageBlockProps } from "@/app/types/common.types";

const MenuImageBlock = ({
	subtitle,
	title,
	phrase,
	items,
	emptyMessage = "No offers available at the moment.",
}: MenuImageBlockProps) => {
	// Improved data validation check
	if (!items || items.length === 0) {
		return (
			<div className="menu menu--empty">
				<p>{emptyMessage}</p>
			</div>
		);
	}

	return (
		<section className="menu">
			<div className="menu__container">
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

				{/* Iterate over the 'items' prop */}
				{items.map((item) => (
					<CardMenuImage {...item} key={item.id} />
				))}
			</div>
		</section>
	);
};

MenuImageBlock.displayName = "MenuImageBlock";

export default MenuImageBlock;
