interface NewsletterBlockProps {
	subtitle?: string;
	title?: string;
	description?: string;
	placeholder?: string;
	buttonText?: string;
	privacyText?: string;
}

const NewsletterBlock = ({
	subtitle = "Stay Connected",
	title = "Subscribe to Our Newsletter",
	description = "Join our culinary community and receive exclusive updates, special offers, seasonal menu releases, and insider tips from our award-winning chefs delivered straight to your inbox.",
	placeholder = "Enter your email address",
	buttonText = "Subscribe Now",
	privacyText = "We respect your privacy. Unsubscribe at any time.",
}: NewsletterBlockProps) => {
	return (
		<section className="section-spacing bg-coarseWool-800">
			<div className="container">
				<div className="text-center max-w-content-lg mx-auto">
					<span className="subtitle-line">{subtitle}</span>
					<h2 className="text-title-2 mt-4 mb-6">{title}</h2>
					<p className="text-body text-coarseWool-200 mb-8">
						{description}
					</p>
				</div>

				<div className="max-w-content mx-auto">
					<form
						className="newsletter-form newsletter-form--hero"
						action="#"
						method="post"
					>
						<div className="newsletter-form__wrapper">
							<input
								type="email"
								className="newsletter-form__input"
								placeholder={placeholder}
								aria-label="Email address"
								required
							/>
							<button
								type="submit"
								className="newsletter-form__button"
							>
								{buttonText}
								<i className="fa-solid fa-arrow-right"></i>
							</button>
						</div>
						<p className="newsletter-form__privacy">
							<i className="fa-solid fa-lock"></i>
							{privacyText}
						</p>
					</form>
				</div>
			</div>
		</section>
	);
};

export default NewsletterBlock;
