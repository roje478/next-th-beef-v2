"use client";
import { motion } from "framer-motion";

interface Feature {
	id: number;
	icon: string;
	title: string;
	description: string;
}

interface ExperienceIntroBlockProps {
	subtitle: string;
	title: string;
	leadParagraph: string;
	features: Feature[];
	closingStatement: string;
}

const ExperienceIntroBlock = ({
	subtitle,
	title,
	leadParagraph,
	features,
	closingStatement,
}: ExperienceIntroBlockProps) => {
	return (
		<section className="section-spacing">
			<div className="container-padding">
				<div className="content-width-wide">
					{/* Section Title */}
					<motion.div
						className="section-title section-title__center"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<p className="section-title__subtitle">{subtitle}</p>
						<h2 className="section-title__title">{title}</h2>
					</motion.div>
					{/* /Section Title */}

					{/* Divider */}
					<motion.div
						className="divider div-transparent div-arrow-down"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					/>
					{/* /Divider */}

					{/* Lead Paragraph */}
					<motion.div
						className="flex-center-col mb-12"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<p className="text-lead-centered">{leadParagraph}</p>
					</motion.div>
					{/* /Lead Paragraph */}

					{/* Features Grid */}
					<motion.div
						className="grid-two-cols mb-12"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						{features.map((feature) => (
							<div key={feature.id} className="feature-icon-block">
								<div className="feature-icon-block__icon">
									<i className={feature.icon} aria-hidden="true"></i>
								</div>
								<h3 className="feature-icon-block__title">{feature.title}</h3>
								<p className="feature-icon-block__description">
									{feature.description}
								</p>
							</div>
						))}
					</motion.div>
					{/* /Features Grid */}

					{/* Closing Statement */}
					<motion.div
						className="flex-center"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<p className="text-decorative text-decorative--light content-width-narrow">
							{closingStatement}
						</p>
					</motion.div>
					{/* /Closing Statement */}
				</div>
			</div>
		</section>
	);
};

ExperienceIntroBlock.displayName = "ExperienceIntroBlock";
export default ExperienceIntroBlock;
