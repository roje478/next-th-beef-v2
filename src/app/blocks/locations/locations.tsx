"use client";
import { motion } from "framer-motion";
import { LocationItem } from "./cardLocation";

// Interface
import { LocationsBlockProps } from "@/app/types/common.types";

const LocationsBlock = ({ title, items }: LocationsBlockProps) => {
	return (
		<section className="location">
			<div className="location__container">
				{/* Section title */}
				<div className="section-title section-title__center">
					{title && <h2 className="section-title__title">{title}</h2>}
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
				{/* Location list */}
				<div className="location__list">
					{items.map((location, index) => (
						<motion.div
							key={location.id}
							initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<LocationItem {...location} />
						</motion.div>
					))}
				</div>
				{/* /Location list */}
			</div>
		</section>
	);
};

LocationsBlock.displayName = "LocationsBlock";
export default LocationsBlock;