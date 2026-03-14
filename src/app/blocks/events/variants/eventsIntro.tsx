"use client";
import { motion } from "framer-motion";

interface EventsIntroProps {
	subtitle: string;
	title: string;
	description: string;
}

const EventsIntroBlock = ({ subtitle, title, description }: EventsIntroProps) => {
	return (
		<section className="events-intro">
			<motion.div
				className="events-intro__container"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				{/* Section Title */}
				<div className="section-title section-title__center">
					<p className="section-title__subtitle">{subtitle}</p>
					<h2 className="section-title__title">{title}</h2>
					<p>{description}</p>
				</div>
				{/* /Section Title */}
			</motion.div>
		</section>
	);
};

export default EventsIntroBlock;
