interface SelectOption {
	value: string;
	label: string;
}

interface EventsContactProps {
	eventTypes: SelectOption[];
	guestCounts: SelectOption[];
}

const EventsContactBlock = ({ eventTypes, guestCounts }: EventsContactProps) => {
	return (
		<section className="cta" id="contact-form">
			<div className="cta__overlayer"></div>
			<div className="cta__container">
				<div className="cta__content">
					{/* Contact Form */}
					<div className="events-contact-form">
						<form className="form" action="/event-inquiry" method="post">
							<div className="form__body">
								<div className="form_row">
									<div className="form_field form_field__name">
										<label htmlFor="name">Name:</label>
										<input
											type="text"
											className="input"
											id="name"
											name="name"
											placeholder="Your Name"
											required
										/>
									</div>
									<div className="form_field form_field__email">
										<label htmlFor="email">Email:</label>
										<input
											type="email"
											className="input"
											id="email"
											name="email"
											placeholder="Your Email"
											required
										/>
									</div>
								</div>
								<div className="form_row">
									<div className="form_field form_field__phone">
										<label htmlFor="phone">Phone:</label>
										<input
											type="tel"
											className="input"
											id="phone"
											name="phone"
											placeholder="Your Phone"
											required
										/>
									</div>
									<div className="form_field form_field__event-type">
										<label htmlFor="event-type">Event Type:</label>
										<select
											className="input"
											id="event-type"
											name="event-type"
											required
										>
											{eventTypes.map((opt) => (
												<option key={opt.value} value={opt.value}>
													{opt.label}
												</option>
											))}
										</select>
									</div>
								</div>
								<div className="form_row">
									<div className="form_field form_field__guests">
										<label htmlFor="guests">Number of Guests:</label>
										<select
											className="input"
											id="guests"
											name="guests"
											required
										>
											{guestCounts.map((opt) => (
												<option key={opt.value} value={opt.value}>
													{opt.label}
												</option>
											))}
										</select>
									</div>
									<div className="form_field form_field__date">
										<label htmlFor="event-date">Preferred Date:</label>
										<input
											type="date"
											className="input"
											id="event-date"
											name="event-date"
											required
										/>
									</div>
								</div>
								<div className="form_row">
									<div className="form_field form_field__message">
										<label htmlFor="message">Additional Details:</label>
										<textarea
											className="input input-textarea"
											id="message"
											name="message"
											placeholder="Tell us about your event vision, special requirements, or any questions you have..."
											rows={6}
										></textarea>
									</div>
								</div>
							</div>
							<div className="form_footer">
								<div className="form_field">
									<button className="btn" type="submit" value="submit">
										Request Event Consultation
									</button>
								</div>
							</div>
						</form>
					</div>
					{/* /Contact Form */}
				</div>
			</div>
		</section>
	);
};

export default EventsContactBlock;
