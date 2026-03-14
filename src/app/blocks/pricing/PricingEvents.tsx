"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EventCard } from "@/app/hooks/data-pricing";

interface PricingEventsProps {
	subtitle: string;
	title: string;
	description: string;
	events: EventCard[];
}

const PricingEvents = ({
	subtitle,
	title,
	description,
	events,
}: PricingEventsProps) => {
	return (
		<section className="pricing-events">
			<div className="pricing-events__container">
				{/* Section title */}
				<div className="section-title section-title__center">
					<p className="section-title__subtitle">{subtitle}</p>
					<h2 className="section-title__title">{title}</h2>
					<p>{description}</p>
				</div>
				{/* Divider */}
				<motion.div
					className="divider div-transparent div-arrow-down"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				/>

				{/* Events Grid */}
				<div className="pricing-events__grid">
					{events.map((event, index) => (
						<motion.article
							key={event.id}
							className="event-card event-card--custom"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 * (index + 1) }}
						>
							<div className="event-card__icon">
								<i className={event.icon} aria-hidden="true"></i>
							</div>
							<h3 className="event-card__title">{event.title}</h3>
							<p className="event-card__price">{event.price}</p>
							<div className="event-card__description">
								<p>{event.description}</p>
							</div>
							<Link href={event.ctaLink} className="btn event-card__cta">
								{event.ctaText}
							</Link>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
};

export default PricingEvents;
