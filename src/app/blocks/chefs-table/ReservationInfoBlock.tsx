"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface ReservationDetail {
	id: number;
	icon: string;
	text: string;
}

interface ReservationInfoBlockProps {
	subtitle: string;
	title: string;
	details: ReservationDetail[];
	ctaLink: string;
	ctaText: string;
	phone: string;
	note: string;
}

const ReservationInfoBlock = ({
	subtitle,
	title,
	details,
	ctaLink,
	ctaText,
	phone,
	note,
}: ReservationInfoBlockProps) => {
	return (
		<section className="section-spacing">
			<div className="container-padding">
				{/* Section Title */}
				<motion.div
					className="section-title section-title__center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<p className="section-title__subtitle">{subtitle}</p>
					<h2 className="section-title__title">{title}</h2>
				</motion.div>
				{/* /Section Title */}

				{/* Divider */}
				<motion.div
					className="divider div-transparent div-arrow-down"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				/>
				{/* /Divider */}

				{/* Reservation Card */}
				<motion.div
					className="reservation-card"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h3 className="reservation-card__title">Practical Details</h3>

					<div className="reservation-card__details">
						{details.map((detail) => (
							<div key={detail.id} className="reservation-card__detail">
								<i className={`${detail.icon} icon`} aria-hidden="true"></i>
								<span className="text">{detail.text}</span>
							</div>
						))}
					</div>

					<div className="reservation-card__cta">
						<Link href={ctaLink} className="btn btn--solid">
							{ctaText}
						</Link>
						<p className="text-coarseWool-200 text-body-small mt-4">
							Or call us at{" "}
							<a
								href={`tel:${phone.replace(/\s/g, "")}`}
								className="text-calico-500 hover:underline"
							>
								{phone}
							</a>
						</p>
					</div>

					<p className="reservation-card__note">{note}</p>
				</motion.div>
				{/* /Reservation Card */}
			</div>
		</section>
	);
};

ReservationInfoBlock.displayName = "ReservationInfoBlock";
export default ReservationInfoBlock;
