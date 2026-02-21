import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SliderItemProps } from "@/app/types/common.types";

const contentVariants = {
	hidden: { y: 0, filter: "blur(20px)", opacity: 0 },
	visible: (delay: number) => ({
		y: 0,
		filter: "blur(0px)",
		opacity: 1,
		transition: {
			delay: delay * 0.1,
			duration: 0.5,
			ease: "easeOut",
		},
	}),
};

const SliderItem = ({
	itemActive,
	id,
	image,
	altText,
	subtitle,
	title,
	desc,
	link,
	textLink,
	isFirst,
}: SliderItemProps) => {
	const isActive = itemActive === id;

	return (
		<div
			className="slider-hero__item"
			style={{
				position: "absolute",
				inset: 0,
				opacity: isActive ? 1 : 0,
				zIndex: isActive ? 1 : 0,
				transition: "opacity 0.6s ease-in-out",
			}}
		>
			<Image
				src={image}
				alt={altText}
				width={1920}
				height={1080}
				sizes="100vw"
				priority={isFirst}
				loading={isFirst ? undefined : "lazy"}
			/>
			<div className="slider-hero__item-content">
				<div className="slider-hero__item-info">
					<motion.p
						className="subtitle"
						custom={3}
						initial="hidden"
						animate={isActive ? "visible" : "hidden"}
						variants={contentVariants}
					>
						{subtitle}
					</motion.p>
					<motion.h1
						className="title"
						custom={4}
						initial="hidden"
						animate={isActive ? "visible" : "hidden"}
						variants={contentVariants}
					>
						{title}
					</motion.h1>
					<motion.p
						custom={5}
						initial="hidden"
						animate={isActive ? "visible" : "hidden"}
						variants={contentVariants}
					>
						{desc}
					</motion.p>
					<motion.div
						custom={6}
						initial="hidden"
						animate={isActive ? "visible" : "hidden"}
						variants={contentVariants}
					>
						<Link className="btn" href={link}>
							{textLink}
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default SliderItem;
