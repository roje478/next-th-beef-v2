"use client";
import { motion } from "framer-motion";

const BannerInnerPages = () => {
	return (
		<section className="sections bg-coarseWool-900">
			<div className="sections__container">
				<motion.div
					className="pb-0 section-title section-title__center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
				>
					<p className="mb-0">
						Beyond the homepage — we&apos;ve designed a complete set of inner
						pages, each crafted to meet real restaurant website needs.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default BannerInnerPages;
