"use client";

import { motion } from "framer-motion";

interface PricingIntroProps {
	subtitle: string;
	title: string;
	description: string;
}

const PricingIntro = ({ subtitle, title, description }: PricingIntroProps) => {
	return (
		<section className="pricing-intro">
			<div className="pricing-intro__container">
				{/* Section title */}
				<motion.div
					className="section-title section-title__center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<p className="section-title__subtitle">{subtitle}</p>
					<h2 className="section-title__title">{title}</h2>
					<p>{description}</p>
				</motion.div>
				{/* Divider */}
				<motion.div
					className="divider div-transparent div-arrow-down"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				/>
			</div>
		</section>
	);
};

export default PricingIntro;
