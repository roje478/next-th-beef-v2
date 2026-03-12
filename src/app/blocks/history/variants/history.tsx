"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// interfaces
import { HistoryBlockProps } from "@/app/types/common.types";

const HistoryBlock = ({
	subtitle,
	title,
	description,
	items,
}: HistoryBlockProps) => {
	return (
		<section className="history">
			<div className="history__container">
				{/* Section title */}
				<div className="section-title">
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
				<div className="history__content">
					{/* History list */}
					<div className="history__list">
						{items.map((item) => (
							<motion.div
								key={item.id}
								className="history__item"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
							>
								{/* Image */}
								<div className="history__item-image">
									<Image
										src={item.imageSrc}
										alt={item.title}
										width={361}
										height={541}
										loading="lazy"
									/>
								</div>
								{/* /Image */}
								{/* Content */}
								<div className="history__item-content">
									<span className="history__item-year">
										{item.year}
									</span>
									<h3 className="history__item-title">
										{item.title}
									</h3>
									<p className="history__item-description">
										{item.description}
									</p>
								</div>
								{/* /Content */}
							</motion.div>
						))}
					</div>
					{/* /History list */}
				</div>
			</div>
		</section>
	);
};

export default HistoryBlock;
