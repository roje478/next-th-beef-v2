"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	FaqCategory,
	FaqAdditionalItem,
} from "@/app/hooks/data-faq";

interface FaqBlockProps {
	subtitle: string;
	title: string;
	description: string;
	categories: FaqCategory[];
	additionalInfo: FaqAdditionalItem[];
}

const FaqBlock = ({
	subtitle,
	title,
	description,
	categories,
	additionalInfo,
}: FaqBlockProps) => {
	const [openId, setOpenId] = useState<number | null>(null);

	const toggleItem = (id: number) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<section className="faq-intro">
			<div className="faq-intro__container">
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

				{/* FAQ Accordion Section */}
				<section className="faq-section">
					<div className="faq-section__container">
						<div className="faq-section__grid">
							{categories.map((category, catIndex) => (
								<motion.div
									key={category.id}
									className="faq-section__column"
									initial={{
										opacity: 0,
										x: catIndex === 0 ? -30 : 30,
									}}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2 }}
								>
									<h3 className="faq-section__category-title">
										{category.title}
									</h3>

									<div className="faq-accordion">
										{category.items.map((faq) => (
											<article
												key={faq.id}
												className={`faq-accordion__item${openId === faq.id ? " is-active" : ""}`}
											>
												<button
													className="faq-accordion__trigger"
													aria-expanded={openId === faq.id}
													onClick={() => toggleItem(faq.id)}
												>
													<span
														className="faq-accordion__question"
														role="heading"
														aria-level={4}
													>
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
											</article>
										))}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* FAQ Additional Info */}
				<section className="faq-additional">
					<motion.div
						className="faq-additional__container"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						<div className="faq-additional__content">
							{additionalInfo.map((info) => (
								<div key={info.id} className="faq-additional__col">
									<h3 className="faq-additional__title">{info.title}</h3>
									<p>{info.description}</p>
								</div>
							))}
						</div>
					</motion.div>
				</section>
			</div>
		</section>
	);
};

export default FaqBlock;
