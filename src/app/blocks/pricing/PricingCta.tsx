"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PricingCtaProps {
	title: string;
	description: string;
	primaryCta: { text: string; link: string };
	secondaryCta: { text: string; link: string };
}

const PricingCta = ({
	title,
	description,
	primaryCta,
	secondaryCta,
}: PricingCtaProps) => {
	return (
		<section className="pricing-cta">
			<motion.div
				className="pricing-cta__container"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				<h2 className="pricing-cta__title">{title}</h2>
				<p className="pricing-cta__description">{description}</p>
				<div className="pricing-cta__actions">
					<Link href={primaryCta.link} className="btn btn--solid">
						{primaryCta.text}
					</Link>
					<Link href={secondaryCta.link} className="btn">
						{secondaryCta.text}
					</Link>
				</div>
			</motion.div>
		</section>
	);
};

export default PricingCta;
