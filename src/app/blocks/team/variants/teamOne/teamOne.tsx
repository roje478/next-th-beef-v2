"use client";
import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CardTeam from "./cardTeam";
import { TeamBlockProps, TeamMember } from "@/app/types/common.types";
import { teamBlockData } from "@/app/hooks/data-team";

const TeamOneBlock = memo((props: Omit<TeamBlockProps, 'urlImage' | 'altImage'>) => {
	const {
		subtitle = teamBlockData.subtitle,
		title = teamBlockData.title,
		description = teamBlockData.description,
		items = teamBlockData.items as TeamMember[],
		className = "",
		emptyMessage = teamBlockData.emptyMessage,
	} = props;

	// Improved data validation check
	if (!items || items.length === 0) {
		return (
			<div className={`team-block team-block--empty ${className}`}>
				<p>{emptyMessage}</p>
			</div>
		);
	}

	return (
		<section className={`team-block bg-coarseWool-800 ${className}`}>
			<div className="team-block__container">
				{/* Section title */}
				<div className="section-title section-title__no-divider section-title__center">
					{subtitle && <p className="section-title__subtitle">{subtitle}</p>}
					{title && <h2 className="section-title__title">{title}</h2>}
				</div>
				{/* /Section title */}
			</div>

			{/* Divider */}
			<motion.div
				className="divider div-transparent div-arrow-down"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.7 }}
			/>
			{/* /Divider */}

			{/* Team grid */}
			<div className="team-block__grid">
				{/* Item team description */}
				<motion.div
					className="team-block__description bg-coarseWool-900"
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="team-block__icon">
						<Image
							src={teamBlockData.urlImage || ""}
							alt={teamBlockData.altImage || ""}
							width={54}
							height={54}
							sizes="54px"
							loading="lazy"
						/>
					</div>
					<div className="team-block__text">
						<p>{description}</p>
					</div>
				</motion.div>
				{/* /Item team description */}

				{/* List Item team */}
				{items.map((item, index) => (
					<motion.div
						key={item.id}
						className="team-block__team"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
					>
						<CardTeam
							name={item.name}
							position={item.position}
							image={item.image}
							social={item.social}
						/>
					</motion.div>
				))}
				{/* /List Item team */}
			</div>
			{/* /Team grid */}
		</section>
	);
});

TeamOneBlock.displayName = "TeamOneBlock";

export default TeamOneBlock;
