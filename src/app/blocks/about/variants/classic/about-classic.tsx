"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import OpeningHours from "@/app/components/common/opening-hours/opening-hours";

import { AboutBlockProps } from "@/app/types/common.types";

const AboutClassicBlock = ({
	imageUrl,
	altText,
	descriptionParagraphs,
	imageWidth,
	imageHeight,
	subtitle,
	title,
	showOpeningHours,
	openingHours,
}: AboutBlockProps) => {
	if (
		!imageUrl ||
		!altText ||
		!descriptionParagraphs ||
		descriptionParagraphs.length === 0
	) {
		return (
			<div className="about__image-info about__image-info--empty">
				<p>No data available.</p>
			</div>
		);
	}

	return (
		<section className="about__image-info">
			<div className="about-content">
				{/* About image */}
				<div className="about-content__image">
					<Image
						src={imageUrl}
						alt={altText}
						width={imageWidth || 809}
						height={imageHeight || 1011}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
					/>
				</div>
				{/* /About image */}
				{/* About info */}
				<motion.div
					className="about-content__info"
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					{/* Info title */}
					<div className="section-title">
						{subtitle && <p className="section-title__subtitle">{subtitle}</p>}
						{title && <h2 className="section-title__title" dangerouslySetInnerHTML={{ __html: title }} />}
					</div>
					{/* /Info title */}
					{/* Info description */}
					<div className="about-content__description">
						{descriptionParagraphs.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
					{/* /Info description */}
					{/* Opening hours */}
					{showOpeningHours && openingHours && (
						<OpeningHours
							title={openingHours.title}
							schedule={openingHours.schedule}
						/>
					)}
					{/* /Opening hours */}
				</motion.div>
				{/* /About info */}
			</div>
		</section>
	);
};

AboutClassicBlock.displayName = "AboutClassicBlock";

export default AboutClassicBlock;
