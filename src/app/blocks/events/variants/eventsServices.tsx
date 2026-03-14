"use client";
import { motion } from "framer-motion";

interface ServiceCard {
	id: number;
	icon: string;
	title: string;
	description: string;
	features: string[];
}

interface ServiceColumn {
	id: number;
	icon: string;
	title: string;
	iconVariant: "primary" | "secondary";
	animation: "left" | "right";
	cards: ServiceCard[];
}

interface BannerData {
	title: string;
	text: string;
	buttonText: string;
	buttonHref: string;
}

interface EventsServicesProps {
	subtitle: string;
	title: string;
	description: string;
	columns: ServiceColumn[];
	banner: BannerData;
}

const EventsServicesBlock = ({
	subtitle,
	title,
	description,
	columns,
	banner,
}: EventsServicesProps) => {
	return (
		<section className="events-services">
			<div className="events-services__container">
				{/* Section Title */}
				<div className="section-title section-title__center">
					<p className="section-title__subtitle">{subtitle}</p>
					<h2 className="section-title__title">{title}</h2>
					<p>{description}</p>
				</div>
				{/* /Section Title */}

				{/* Services Split Layout */}
				<div className="events-services__split">
					{columns.map((column) => (
						<motion.div
							key={column.id}
							className="events-services__column"
							initial={{
								opacity: 0,
								x: column.animation === "left" ? -30 : 30,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							<div className="events-services__column-header">
								<div
									className={`events-services__column-icon${
										column.iconVariant === "secondary"
											? " events-services__column-icon--secondary"
											: ""
									}`}
								>
									<i className={column.icon} aria-hidden="true"></i>
								</div>
								<h3 className="events-services__column-title">{column.title}</h3>
							</div>

							{column.cards.map((card) => (
								<div key={card.id} className="events-services__card">
									<div className="events-services__card-icon">
										<i className={card.icon} aria-hidden="true"></i>
									</div>
									<div className="events-services__card-content">
										<h4 className="events-services__card-title">{card.title}</h4>
										<p className="events-services__card-description">
											{card.description}
										</p>
										<ul className="events-services__card-list">
											{card.features.map((feature, i) => (
												<li key={i}>{feature}</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</motion.div>
					))}
				</div>
				{/* /Services Split Layout */}

				{/* Bottom CTA Banner */}
				<motion.div
					className="events-services__banner"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
				>
					<div className="events-services__banner-content">
						<h3 className="events-services__banner-title">{banner.title}</h3>
						<p className="events-services__banner-text">{banner.text}</p>
						<a href={banner.buttonHref} className="btn">
							{banner.buttonText}
						</a>
					</div>
				</motion.div>
				{/* /Bottom CTA Banner */}
			</div>
		</section>
	);
};

export default EventsServicesBlock;
