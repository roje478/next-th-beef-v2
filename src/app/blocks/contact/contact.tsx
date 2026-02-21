"use client";
import { motion } from "framer-motion";
import { ContactBlockProps } from "@/app/types/common.types";

const ContactBlock = ({
	subtitle,
	title,
	phrase,
	formAction,
}: ContactBlockProps) => {
	if (!subtitle || !title || !phrase) {
		return (
			<div className="contact contact--empty">
				<p>No data available.</p>
			</div>
		);
	}

	return (
		<section className="contact bg-coarseWool-800">
			<div className="contact__container">
				{/* Section title */}
				<div className="section-title">
					<p className="section-title__subtitle">{subtitle}</p>
					<h2 className="section-title__title">{title}</h2>
					<p>{phrase}</p>
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
				{/* Form */}
				<div className="contact__form">
					<form className="form" action={formAction} method="post">
						<div className="form__body">
							<div className="form_row">
								<div className="form_field form_field__name">
									<label htmlFor="name">Name:</label>
									<input type="text" className="input" id="name" name="name" placeholder="Your name" required />
								</div>
								<div className="form_field form_field__phone">
									<label htmlFor="phone">Phone:</label>
									<input type="tel" className="input" id="phone" name="phone" placeholder="+1 000 000 0000" required />
								</div>
							</div>
							<div className="form_row">
								<div className="form_field form_field__email">
									<label htmlFor="email">Email:</label>
									<input type="email" className="input" id="email" name="email" placeholder="your@email.com" required />
								</div>
								<div className="form_field form_field__person">
									<label htmlFor="person">Persons:</label>
									<select className="input" id="person" name="person" required defaultValue="2">
										<option value="">Select guests</option>
										<option value="1">1 Person</option>
										<option value="2">2 Persons</option>
										<option value="3">3 Persons</option>
										<option value="4">4 Persons</option>
										<option value="5">5 Persons</option>
										<option value="6">6 Persons</option>
										<option value="7">7 Persons</option>
										<option value="8">8 Persons</option>
										<option value="9">9+ Persons</option>
									</select>
								</div>
								<div className="form_field form_field__date">
									<label htmlFor="date">Date:</label>
									<input type="date" className="input" id="date" name="date" required />
								</div>
								<div className="form_field form_field__hours">
									<label htmlFor="hours">Time:</label>
									<input type="time" className="input" id="hours" name="hours" required />
								</div>
							</div>
							<div className="form_row">
								<div className="form_field form_field__message">
									<label htmlFor="message">Message:</label>
									<textarea className="input input-textarea" id="message" name="message" placeholder="Special requests or notes..."></textarea>
								</div>
							</div>
						</div>
						<div className="form_footer">
							<div className="form_field">
								<button className="btn" type="submit" value="submit">Book a Table</button>
							</div>
						</div>
					</form>
				</div>
				{/* /Form */}
			</div>
		</section>
	);
};

ContactBlock.displayName = "ContactBlock";
export default ContactBlock;
