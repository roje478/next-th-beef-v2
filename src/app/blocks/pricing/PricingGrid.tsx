"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PricingCard } from "@/app/hooks/data-pricing";

interface PricingGridProps {
	cards: PricingCard[];
}

const animationVariants = [
	{ initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 } },
	{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } },
	{ initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 } },
];

const PricingGrid = ({ cards }: PricingGridProps) => {
	return (
		<section className="pricing-grid">
			<div className="pricing-grid__container">
				<div className="pricing-grid__grid">
					{cards.map((card, index) => (
						<motion.article
							key={card.id}
							className={`pricing-card${card.featured ? " pricing-card--featured" : ""}`}
							initial={animationVariants[index]?.initial}
							whileInView={animationVariants[index]?.whileInView}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							{/* Header */}
							<div className="pricing-card__header">
								{card.badge && (
									<span className="pricing-card__badge">{card.badge}</span>
								)}
								<h3 className="pricing-card__name">{card.name}</h3>
								<div className="pricing-card__price">
									<span className="pricing-card__price-currency">
										{card.currency}
									</span>
									<span className="pricing-card__price-amount">
										{card.amount}
									</span>
									<span className="pricing-card__price-period">
										{card.period}
									</span>
								</div>
							</div>
							{/* Body */}
							<div className="pricing-card__body">
								<ul className="pricing-card__features">
									{card.features.map((feature) => (
										<li key={feature.id} className="pricing-card__feature">
											<span className="pricing-card__feature-icon">
												<i
													className="fa-solid fa-check"
													aria-hidden="true"
												></i>
											</span>
											<span className="pricing-card__feature-text">
												{feature.text}
											</span>
										</li>
									))}
								</ul>
							</div>
							{/* Footer */}
							<div className="pricing-card__footer">
								<Link
									href={card.ctaLink}
									className={`btn${card.featured ? " btn--solid" : ""} pricing-card__cta`}
								>
									{card.ctaText}
								</Link>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
};

export default PricingGrid;
