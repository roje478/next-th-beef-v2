"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AboutBlockProps } from "@/app/types/common.types";

const AboutModernBlock = ({
	imageLeftUrl,
	imageRightUrl,
	altText,
	descriptionParagraphs,
	subtitle,
	title,
	buttonLink,
	buttonText,
}: AboutBlockProps) => {
	if (
		!imageLeftUrl ||
		!imageRightUrl ||
		!altText ||
		!descriptionParagraphs ||
		descriptionParagraphs.length === 0
	) {
		return (
			<div className="about-s2 about-s2--empty">
				<p>No data available.</p>
			</div>
		);
	}

	return (
		<section className="about-s2">
			<div className="about-s2__container-fluid">
				<div className="about-s2__content">
					{/* Image */}
					<motion.div
						className="about-s2__image"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<Image
							src={imageLeftUrl}
							alt="Wine selection and fine dining table setting"
							width={568}
							height={880}
							loading="lazy"
							sizes="(min-width: 1024px) 33vw, 100vw"
						/>
					</motion.div>
					{/* /Image */}
					{/* Text */}
					<div className="about-s2__text">
						{/* Section title */}
						<div className="section-title">
							{subtitle && <p className="section-title__subtitle">{subtitle}</p>}
							{title && <h2 className="section-title__title">{title}</h2>}
							<p>The first restaurant proprietor is believed to have been one A. Boulanger, a soup vendor, who opened his business in 1765.</p>
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
						{/* Content */}
						<div className="about-content__description">
							{descriptionParagraphs.map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>
						{/* /Content */}
						<Link href={buttonLink || "#"} className="btn-link">
							{buttonText}
						</Link>
					</div>
					{/* /Text */}
					{/* Image */}
					<motion.div
						className="about-s2__image"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<Image
							src={imageRightUrl}
							alt="Restaurant interior with elegant dining atmosphere"
							width={568}
							height={880}
							loading="lazy"
							sizes="(min-width: 1024px) 33vw, 100vw"
						/>
					</motion.div>
					{/* /Image */}
				</div>
			</div>
		</section>
	);
};

AboutModernBlock.displayName = "AboutModernBlock";
export default AboutModernBlock;
