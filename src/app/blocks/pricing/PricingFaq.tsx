"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaqItem } from "@/app/hooks/data-pricing";

interface PricingFaqProps {
	subtitle: string;
	title: string;
	description: string;
	faqs: FaqItem[];
}

const PricingFaq = ({
	subtitle,
	title,
	description,
	faqs,
}: PricingFaqProps) => {
	const [openId, setOpenId] = useState<number | null>(null);

	const toggleItem = (id: number) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<section className="pricing-faq">
			<div className="pricing-faq__container">
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

				{/* FAQ Grid */}
				<div className="pricing-faq__grid">
					<div className="faq-accordion">
						{faqs.map((faq, index) => (
							<motion.article
								key={faq.id}
								className={`faq-accordion__item${openId === faq.id ? " is-active" : ""}`}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.2 * (index + 1) }}
							>
								<button
									className="faq-accordion__trigger"
									aria-expanded={openId === faq.id}
									onClick={() => toggleItem(faq.id)}
								>
									<span className="faq-accordion__question">
										{faq.question}
									</span>
									<span
										className="faq-accordion__icon"
										aria-hidden="true"
									></span>
								</button>
								<div className="faq-accordion__content">
									<div className="faq-accordion__answer">
										<p>{faq.answer}</p>
									</div>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingFaq;
