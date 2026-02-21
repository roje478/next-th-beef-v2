"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import CardTeam from "./cardTeamTwo";
import { TeamBlockProps, TeamMember } from "@/app/types/common.types";
import { teamBlockData } from "@/app/hooks/data-team";

const TeamTwoBlock = memo((props: TeamBlockProps) => {
	const {
		subtitle = teamBlockData.subtitle,
		title = teamBlockData.title,
		description = teamBlockData.description,
		items = teamBlockData.items as TeamMember[],
	} = props;

	if (items.length === 0) {
		return (
			<div className="team-block-2 team-block-2--empty">
				<p>No data available.</p>
			</div>
		);
	}

	return (
		<section className="team-block-2">
			<div className="team-block-2__container">
				{/* Section title */}
				<div className="section-title">
					{subtitle && <p className="section-title__subtitle">{subtitle}</p>}
					{title && <h2 className="section-title__title">{title}</h2>}
					{description && <p>{description}</p>}
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
				{/* Teams */}
				<div className="team-block-2__grid">
					{items.map((item, index) => (
						<motion.div
							key={item.id}
							className="team-block-2__team"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
						>
							<CardTeam
								name={item.name}
								position={item.position}
								image={item.image}
								social={item.social}
							/>
						</motion.div>
					))}
				</div>
				{/* /Teams */}
			</div>
		</section>
	);
});

TeamTwoBlock.displayName = "TeamTwoBlock";
export default TeamTwoBlock;
