"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { testimonialsPageCta } from "@/app/hooks/data-testimonials-page";

interface TestimonialsCtaBlockProps {
	subtitle?: string;
	title?: string;
	description?: string;
	primaryButton?: { label: string; href: string };
	secondaryButton?: { label: string; href: string };
}

const TestimonialsCtaBlock = (props: TestimonialsCtaBlockProps) => {
	const {
		subtitle = testimonialsPageCta.subtitle,
		title = testimonialsPageCta.title,
		description = testimonialsPageCta.description,
		primaryButton = testimonialsPageCta.primaryButton,
		secondaryButton = testimonialsPageCta.secondaryButton,
	} = props;

	return (
		<section className="testimonials-cta">
			<div className="testimonials-cta__container">
				{/* Section title */}
				<div className="section-title section-title__center">
					<p className="section-title__subtitle">{subtitle}</p>
					<h2 className="section-title__title">{title}</h2>
					<p>{description}</p>
				</div>
				{/* Divider */}
				<motion.div
					className="divider div-transparent div-arrow-down"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				/>
				{/* CTA Buttons */}
				<div className="testimonials-cta__actions">
					<Link href={primaryButton.href} className="btn btn--solid">
						{primaryButton.label}
					</Link>
					<Link href={secondaryButton.href} className="btn">
						{secondaryButton.label}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsCtaBlock;
