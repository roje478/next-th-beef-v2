"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HomePagesListProps } from "@/app/types/common.types";
import { homepagesListData } from "@/app/hooks/data-homepages";
import Divider from "@/app/components/common/divider/divider";

const HomePagesBlock = ({
	items = homepagesListData.items,
	emptyMessage = homepagesListData.emptyMessage,
	defaultAltText = homepagesListData.defaultAltText,
	subtitle = homepagesListData.subtitle,
	title = homepagesListData.title,
	divider = homepagesListData.divider,
}: HomePagesListProps) => {
	if (!items || items.length === 0) {
		return (
			<div className="pages pages--empty">
				<p>{emptyMessage}</p>
			</div>
		);
	}

	return (
		<section className="pages bg-coarseWool-800">
			<div className="pages__container">
				{/* Section title */}
				<div className="section-title section-title__center">
					<p className="section-title__subtitle">{subtitle}</p>
					<h2 className="section-title__title">{title}</h2>
					{divider && <Divider />}
				</div>
				{/* /Section title */}

				<div className="pages__content">
					{items.map((item, index) => (
						<motion.div
							key={item.id}
							className="pages__item"
							initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 + index * 0.2, duration: 0.5, ease: "easeOut" }}
						>
							<Link href={item.link}>
								<div className="pages__image">
									<Image
										src={item.image}
										alt={item.altText || defaultAltText}
										width={1920}
										height={1080}
									/>
								</div>
							</Link>
							<h3 className="pages__title">{item.caption}</h3>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomePagesBlock;
