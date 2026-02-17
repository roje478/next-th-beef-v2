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
	const isExternal = buttonLink?.startsWith("http");

	return (
		<section className="hero-basic">
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
			<motion.div
				className="hero-basic__container"
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<div className="hero-basic__content">
					<div>
						<p className="hero-basic__subtitle">{subtitle}</p>
						<h1 className="hero-basic__title">{title}</h1>
						<div className="hero-basic__description">
							<p>{description}</p>
							{isExternal ? (
								<a className="btn" href={buttonLink} target="_blank" rel="noopener noreferrer">
									{buttonText}
								</a>
							) : (
								<Link className="btn" href={buttonLink}>
									{buttonText}
								</Link>
							)}
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

HeroBasicBlock.displayName = "HeroBasicBlock";
export default HeroBasicBlock;
