"use client";
import { motion } from "framer-motion";

interface PhilosophyCard {
	id: number;
	icon: string;
	title: string;
	description: string;
}

interface SeasonalPhilosophyBlockProps {
	subtitle: string;
	title: string;
	description: string;
	cards: PhilosophyCard[];
}

const SeasonalPhilosophyBlock = ({
	subtitle,
	title,
	description,
	cards,
}: SeasonalPhilosophyBlockProps) => {
	return (
		<section className="section-spacing bg-coarseWool-800">
			<div className="container-padding">
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
					<p className="content-width-narrow">{description}</p>
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

				{/* Philosophy Cards */}
				<div className="grid-three-cols">
					{cards.map((card, index) => (
						<motion.div
							key={card.id}
							className="card card--animated-corners"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
						>
							<div className="card-padding-spacious bg-coarseWool-700 rounded-lg flex-center-col">
								<div className="text-calico-500 text-5xl mb-4">
									<i className={card.icon} aria-hidden="true"></i>
								</div>
								<h3 className="heading heading--xs heading--no-margin text-coarseWool-100 mb-3">
									{card.title}
								</h3>
								<p className="text-body-secondary">{card.description}</p>
							</div>
						</motion.div>
					))}
				</div>
				{/* /Philosophy Cards */}
			</div>
		</section>
	);
};

SeasonalPhilosophyBlock.displayName = "SeasonalPhilosophyBlock";
export default SeasonalPhilosophyBlock;
