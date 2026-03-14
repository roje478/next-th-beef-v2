"use client";
import { motion } from "framer-motion";
import { testimonialsPageStats } from "@/app/hooks/data-testimonials-page";

interface StatItem {
	id: number;
	number: string;
	label: string;
	showStars?: boolean;
	starsLabel?: string;
}

interface TestimonialsStatsBlockProps {
	subtitle?: string;
	title?: string;
	description?: string;
	stats?: StatItem[];
}

const TestimonialsStatsBlock = (props: TestimonialsStatsBlockProps) => {
	const {
		subtitle = testimonialsPageStats.subtitle,
		title = testimonialsPageStats.title,
		description = testimonialsPageStats.description,
		stats = testimonialsPageStats.stats,
	} = props;

	return (
		<section className="testimonials-stats">
			<div className="testimonials-stats__container">
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
				{/* Stats Grid */}
				<div className="testimonials-stats__grid">
					{stats.map((stat) => (
						<div key={stat.id} className="testimonials-stats__item">
							<div className="testimonials-stats__number">{stat.number}</div>
							<p className="testimonials-stats__label">{stat.label}</p>
							{stat.showStars && (
								<div
									className="testimonials-stats__stars"
									aria-label={stat.starsLabel}
								>
									{[...Array(5)].map((_, i) => (
										<i
											key={i}
											className="fa-solid fa-star"
											aria-hidden="true"
										></i>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsStatsBlock;
