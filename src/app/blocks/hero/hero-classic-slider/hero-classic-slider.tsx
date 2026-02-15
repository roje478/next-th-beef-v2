"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroBasicBlockProps {
	image: string;
	altText: string;
	subtitle: string;
	title: string;
	description: string;
	buttonText: string;
	buttonLink: string;
}

const HeroBasicBlock = ({
	image,
	altText,
	subtitle,
	title,
	description,
	buttonText,
	buttonLink,
}: HeroBasicBlockProps) => {
	return (
		<section className="hero-basic hero-center">
			<div className="hero-basic__background">
				<Image
					src={image}
					alt={altText}
					width={1617}
					height={880}
					priority
					quality={90}
					sizes="100vw"
				/>
			</div>
			<div className="overlayer-hero" />
			<div className="hero-basic__container">
				<div className="hero-basic__content">
					<p className="hero-basic__subtitle">{subtitle}</p>
					<h1 className="hero-basic__title">{title}</h1>
					{/* Divider */}
					<motion.div
						className="divider div-transparent div-stopper"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.7, duration: 0.8 }}
					/>
					<div className="hero-basic__description">
						<p>{description}</p>
					</div>
					<Link className="btn" href={buttonLink}>
						{buttonText}
					</Link>
				</div>
			</div>
		</section>
	);
};

HeroBasicBlock.displayName = "HeroBasicBlock";
export default HeroBasicBlock;
