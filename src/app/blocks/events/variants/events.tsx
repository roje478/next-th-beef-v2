"use client";
import { motion } from "framer-motion";
import CardEvent from "./cardEvent";

// Import
import { EventsBlockProps } from "@/app/types/common.types";

const EventsBlock = ({
	subtitle,
	title,
	description,
	items,
	emptyMessage = "No offers available at the moment.",
}: EventsBlockProps) => {
	if (!items || items.length === 0) {
		return (
			<div className="events-block events-block--empty">
				<p>{emptyMessage}</p>
			</div>
		);
	}

	return (
		<section className="events-block bg-coarseWool-700">
			<div className="events-block__container">
				{/* Section title */}
				<div className="section-title section-title__center">
					{subtitle && <p className="section-title__subtitle">{subtitle}</p>}
					{title && <h2 className="section-title__title">{title}</h2>}
					{description && <p>{description}</p>}
				</div>
				{/* /Section title */}
				{/* Divider */}
				<motion.div
					className="divider div-transparent div-arrow-down"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				/>
				{/* /Divider */}
				{/* Events list */}
				<div className="events-block__list">
					{items.map((item) => (
						<CardEvent {...item} key={item.id} />
					))}
				</div>
				{/* /Events list */}
			</div>
		</section>
	);
};

EventsBlock.displayName = "EventsBlock";
export default EventsBlock;
