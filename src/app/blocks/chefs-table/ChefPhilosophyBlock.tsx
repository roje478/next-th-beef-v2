"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Achievement {
	id: number;
	icon: string;
	label: string;
}

interface PhilosophyPoint {
	id: number;
	icon: string;
	title: string;
	description: string;
}

interface ChefQuote {
	text: string;
	name: string;
	title: string;
}

interface ChefPhilosophyBlockProps {
	subtitle: string;
	title: string;
	image: string;
	achievements: Achievement[];
	bio: string[];
	philosophyPoints: PhilosophyPoint[];
	quote: ChefQuote;
}

const ChefPhilosophyBlock = ({
	subtitle,
	title,
	image,
	achievements,
	bio,
	philosophyPoints,
	quote,
}: ChefPhilosophyBlockProps) => {
	return (
		<section className="section-spacing">
			<div className="container-padding">
				{/* Section Introduction */}
				<motion.div
					className="section-title section-title__center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<p className="section-title__subtitle">{subtitle}</p>
					<h2 className="section-title__title">{title}</h2>
				</motion.div>
				{/* /Section Introduction */}

				<div className="content-width-full">
					<div className="grid-two-cols grid-two-cols--items-center">
						{/* Image */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<div className="img-aspect-portrait-wrapper">
								<Image
									src={image}
									alt={title}
									className="img-cover"
									width={568}
									height={880}
									sizes="(min-width: 1024px) 40vw, 100vw"
									loading="lazy"
								/>
							</div>
						</motion.div>
						{/* /Image */}

						{/* Text */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							{/* Achievement Badges */}
							<div className="flex-center-start flex-wrap flex-gap mb-8">
								{achievements.map((achievement) => (
									<div key={achievement.id} className="achievement-badge">
										<i className={achievement.icon} aria-hidden="true"></i>
										<span>{achievement.label}</span>
									</div>
								))}
							</div>
							{/* /Achievement Badges */}

							{/* Bio Paragraph */}
							<div className="mb-8">
								{bio.map((paragraph, index) => (
									<p
										key={index}
										className={`text-body-primary${index < bio.length - 1 ? " mb-4" : ""}`}
									>
										{paragraph}
									</p>
								))}
							</div>
							{/* /Bio Paragraph */}

							{/* Divider */}
							<div className="divider div-transparent div-arrow-down mb-8"></div>
							{/* /Divider */}

							{/* Philosophy Points */}
							<div className="space-y-6">
								{philosophyPoints.map((point) => (
									<div key={point.id} className="philosophy-point">
										<div className="philosophy-point__icon-wrapper">
											<i className={point.icon} aria-hidden="true"></i>
										</div>
										<div className="philosophy-point__content">
											<h4 className="philosophy-point__title">{point.title}</h4>
											<p className="philosophy-point__description">
												{point.description}
											</p>
										</div>
									</div>
								))}
							</div>
							{/* /Philosophy Points */}
						</motion.div>
						{/* /Text */}
					</div>
				</div>

				{/* Chef Quote */}
				<motion.div
					className="chef-quote"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="chef-quote__container">
						<div className="chef-quote__marks">&ldquo;</div>
						<p className="chef-quote__text">{quote.text}</p>
						<div className="chef-quote__attribution">
							<span className="name">{quote.name}</span>
							<span className="title">{quote.title}</span>
						</div>
					</div>
				</motion.div>
				{/* /Chef Quote */}
			</div>
		</section>
	);
};

ChefPhilosophyBlock.displayName = "ChefPhilosophyBlock";
export default ChefPhilosophyBlock;
