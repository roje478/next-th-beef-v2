import Image from "next/image";
import Link from "next/link";

const ComingSoonPage = () => {
	return (
		<section className="coming-soon__wrapper">
			<div className="coming-soon__container">
				{/* Image */}
				<div className="coming-soon__image">
					<Image
						src="/bg/bg-hero.webp"
						alt="Coming Soon"
						width={810}
						height={1080}
						sizes="(min-width: 768px) 50vw, 100vw"
					/>
				</div>
				{/* /Image */}

				{/* Content */}
				<div className="coming-soon__content">
					<div className="content">
						{/* Logo */}
						<Link href="/" className="logo">
							<Image
								src="/images/logo.webp"
								alt="Beef Restaurant - Premium Steakhouse"
								width={180}
								height={77}
								sizes="180px"
							/>
						</Link>
						{/* /Logo */}

						{/* Text */}
						<h1 className="coming-soon__title">Coming Soon</h1>
						<p className="coming-soon__text">
							We are working hard to bring you our new website.
							Stay tuned and subscribe to our newsletter to be the
							first to know when we launch.
						</p>
						{/* /Text */}

						{/* Form */}
						<form
							className="form coming-soon__form"
							action="/ruta-de-envio"
							method="post"
						>
							<div className="form__body">
								<div className="form_field form_field__email">
									<label
										htmlFor="newsletter-email"
										className="sr-only"
									>
										Email address
									</label>
									<input
										id="newsletter-email"
										type="email"
										className="input input--no-margin"
										placeholder="Enter your email address"
										required
									/>
								</div>
							</div>
							<div className="form_footer">
								<div className="form_field">
									<button
										className="btn"
										type="submit"
										value="submit"
									>
										<i className="fas fa-paper-plane"></i>
									</button>
								</div>
							</div>
						</form>
						{/* /Form */}

						{/* Social */}
						<div className="coming-soon__social">
							<ul className="social_icons">
								<li>
									<a
										href="http://www.facebook.com"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Facebook"
									>
										<i
											className="fa-brands fa-facebook-f"
											aria-hidden="true"
										></i>
									</a>
								</li>
								<li>
									<a
										href="http://www.twitter.com"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Twitter"
									>
										<i
											className="fa-brands fa-x-twitter"
											aria-hidden="true"
										></i>
									</a>
								</li>
								<li>
									<a
										href="http://www.instagram.com"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Instagram"
									>
										<i
											className="fa-brands fa-instagram"
											aria-hidden="true"
										></i>
									</a>
								</li>
							</ul>
						</div>
						{/* /Social */}
					</div>
				</div>
				{/* /Content */}
			</div>
		</section>
	);
};

export default ComingSoonPage;
