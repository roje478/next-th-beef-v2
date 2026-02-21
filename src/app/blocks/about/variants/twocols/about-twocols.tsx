"use client";
import React from "react";
import { motion } from "framer-motion";
import { AboutBlockProps } from "@/app/types/common.types";

const AboutTwoCols = ({ descriptionParagraphsTwo, descriptionParagraphsThree }: AboutBlockProps) => {
	if (
		!descriptionParagraphsTwo ||
		!descriptionParagraphsThree ||
		descriptionParagraphsTwo.length === 0 ||
		descriptionParagraphsThree.length === 0
	) {
		return (
			<div className="text-cols text-cols--empty">
				<p>No data available.</p>
			</div>
		);
	}

	return (
		<section className="text-cols bg-coarseWool-800">
			<div className="text-cols__container">
				<motion.div
					className="text-cols__content"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					{/* Text */}
					<div className="text-cols__col">
						{descriptionParagraphsTwo.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
					{/* /Text */}
					{/* Text */}
					<div className="text-cols__col">
						{descriptionParagraphsThree.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
					{/* /Text */}
				</motion.div>
			</div>
		</section>
	);
};

AboutTwoCols.displayName = "AboutTwoCols";
export default AboutTwoCols;
