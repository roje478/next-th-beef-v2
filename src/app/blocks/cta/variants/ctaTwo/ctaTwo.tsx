"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// interface
import { CtaProps } from "@/app/types/common.types";

const CtaTwo = ({ title, description, link, linkText }: CtaProps) => {
	return (
		<section className="cta-2 cta-2__right">
			<div className="cta-2__overlayer"></div>
			<Image
				src="/bg/bg-cta-2.webp"
				alt=""
				fill
				sizes="100vw"
				loading="lazy"
				style={{ objectFit: "cover", zIndex: 0 }}
			/>
			<div className="cta-2__container">
				<motion.div
					className="cta-2__content"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<div className="cta-2__header">
						<h2>{title}</h2>
					</div>
					{/* Divider */}
					<motion.div
						className="divider div-transparent div-stopper"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.7 }}
					/>
					{/* /Divider */}
					<div className="cta-2__body">
						<p>{description}</p>
					</div>
					<div className="cta-2__footer">
						<Link href={link || "#"} className="btn">
							{linkText}
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

CtaTwo.displayName = "CtaTwo";
export default CtaTwo;
