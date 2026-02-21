"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceItem } from "@/app/types/common.types";

const IllustrationsCard = ({
	title,
	image,
	image_hover,
	description,
	link_url,
	link_text,
}: ServiceItem) => {
	return (
		<motion.div
			className="services-illustrations__card"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			{image && image_hover && (
				<div className="services-illustrations__card-illustration">
					<Image src={image} alt={title} width={120} height={120} sizes="120px" loading="lazy" />
					<Image
						className="hover"
						src={image_hover}
						alt={title}
						width={120}
						height={120}
						sizes="120px"
						loading="lazy"
					/>
				</div>
			)}
			<div className="services-illustrations__card-info">
				<h3>{title}</h3>
				<p>{description}</p>
				{link_url && link_text && (
					<Link href={link_url} className="btn-link">
						{link_text}
					</Link>
				)}
			</div>
		</motion.div>
	);
};

export default IllustrationsCard;
