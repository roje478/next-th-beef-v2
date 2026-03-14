import type { Metadata } from "next";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { LegalContent } from "@/app/blocks/legal";
import { HeroInnerPrivacyData } from "@/app/hooks/data-privacy";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Learn how we collect, use, and protect your personal data. Our commitment to your privacy and data security.",
};

const PrivacyPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerPrivacyData.title}
				image={HeroInnerPrivacyData.image}
				altText={HeroInnerPrivacyData.altText}
				breadcrumbs={HeroInnerPrivacyData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Privacy Policy Content */}
			<LegalContent
				subtitle="Effective Date: January 22, 2026"
				title="Your Privacy Matters"
			>
				<div className="alert alert--info">
					<strong>Important Notice:</strong> This is a generic privacy
					policy template. Please customize this content to reflect your
					actual business practices, local regulations, and legal
					requirements. Consult with a legal professional to ensure
					compliance.
				</div>

				<p className="lead">
					At Beef Restaurant, we respect your privacy and are committed to
					protecting your personal information. This Privacy Policy explains
					how we collect, use, disclose, and safeguard your data when you
					visit our restaurant or use our services.
				</p>

				<h3>1. Information We Collect</h3>
				<p>
					We collect information that you provide directly to us, including:
				</p>
				<ul>
					<li>
						<strong>Personal Information:</strong> Name, email address,
						phone number, and billing information when you make
						reservations or contact us.
					</li>
					<li>
						<strong>Reservation Details:</strong> Date, time, party size,
						special requests, and dietary preferences.
					</li>
					<li>
						<strong>Payment Information:</strong> Credit card details
						processed securely through our payment providers.
					</li>
					<li>
						<strong>Communication Records:</strong> Records of your
						correspondence with us, including emails and phone calls.
					</li>
					<li>
						<strong>Feedback and Reviews:</strong> Comments, reviews, and
						survey responses you provide.
					</li>
				</ul>

				<h3>2. How We Use Your Information</h3>
				<p>
					We use the collected information for the following purposes:
				</p>
				<ul>
					<li>
						Process and manage your reservations and bookings
					</li>
					<li>
						Provide personalized dining experiences and accommodate
						special requests
					</li>
					<li>
						Send confirmations, updates, and important service
						communications
					</li>
					<li>
						Process payments and prevent fraudulent transactions
					</li>
					<li>
						Respond to inquiries, comments, and support requests
					</li>
					<li>
						Send marketing communications (with your consent)
					</li>
					<li>Improve our services and customer experience</li>
					<li>
						Comply with legal obligations and resolve disputes
					</li>
				</ul>

				<h3>3. Cookies and Tracking Technologies</h3>
				<p>
					Our website uses cookies and similar tracking technologies to
					enhance your browsing experience. We use:
				</p>
				<ul>
					<li>
						<strong>Essential Cookies:</strong> Required for basic website
						functionality, including reservations and checkout.
					</li>
					<li>
						<strong>Analytics Cookies:</strong> Help us understand how
						visitors interact with our website (Google Analytics).
					</li>
					<li>
						<strong>Marketing Cookies:</strong> Used to deliver relevant
						advertisements and measure campaign effectiveness.
					</li>
					<li>
						<strong>Preference Cookies:</strong> Remember your settings
						and preferences for future visits.
					</li>
				</ul>
				<p>
					You can control cookie preferences through your browser settings.
					Note that disabling cookies may limit certain website features.
				</p>

				<h3>4. Third-Party Services</h3>
				<p>
					We may share your information with trusted third-party service
					providers who assist us in operating our business:
				</p>
				<ul>
					<li>
						<strong>Reservation Systems:</strong> OpenTable, Resy, or
						similar booking platforms
					</li>
					<li>
						<strong>Payment Processors:</strong> Stripe, Square, or other
						secure payment gateways
					</li>
					<li>
						<strong>Email Marketing:</strong> Mailchimp, SendGrid, or
						similar services (with consent)
					</li>
					<li>
						<strong>Analytics Providers:</strong> Google Analytics, Hotjar
					</li>
					<li>
						<strong>Customer Support:</strong> Help desk and communication
						tools
					</li>
				</ul>
				<p>
					These third parties are contractually obligated to protect your
					information and use it only for specified purposes.
				</p>

				<h3>5. Data Security</h3>
				<p>
					We implement appropriate technical and organizational security
					measures to protect your personal information:
				</p>
				<ul>
					<li>SSL/TLS encryption for data transmission</li>
					<li>Secure servers and encrypted databases</li>
					<li>
						Regular security audits and vulnerability assessments
					</li>
					<li>
						Access controls limiting data access to authorized personnel
					</li>
					<li>PCI-DSS compliance for payment card information</li>
				</ul>
				<p>
					While we strive to protect your data, no method of transmission
					over the internet is 100% secure. Please use caution when sharing
					sensitive information online.
				</p>

				<h3>6. Your Rights and Choices</h3>
				<p>
					Depending on your location, you may have the following rights
					regarding your personal data:
				</p>
				<ul>
					<li>
						<strong>Access:</strong> Request a copy of the personal
						information we hold about you
					</li>
					<li>
						<strong>Correction:</strong> Update or correct inaccurate
						personal information
					</li>
					<li>
						<strong>Deletion:</strong> Request deletion of your personal
						data (subject to legal obligations)
					</li>
					<li>
						<strong>Portability:</strong> Receive your data in a
						structured, commonly used format
					</li>
					<li>
						<strong>Objection:</strong> Object to processing of your data
						for marketing purposes
					</li>
					<li>
						<strong>Restriction:</strong> Request limitation of processing
						in certain circumstances
					</li>
					<li>
						<strong>Withdrawal of Consent:</strong> Withdraw consent for
						data processing at any time
					</li>
				</ul>
				<p>
					To exercise these rights, please contact us using the information
					provided below.
				</p>

				<h3>7. Data Retention</h3>
				<p>
					We retain your personal information only as long as necessary to
					fulfill the purposes outlined in this policy or as required by
					law. Reservation data is typically retained for:
				</p>
				<ul>
					<li>
						Active reservation records: Until completion of service plus 1
						year
					</li>
					<li>
						Marketing communications: Until you unsubscribe or opt-out
					</li>
					<li>
						Financial records: As required by tax and accounting
						regulations (typically 7 years)
					</li>
					<li>
						Legal disputes: Until resolution plus applicable statute of
						limitations
					</li>
				</ul>

				<h3>8. Children&apos;s Privacy</h3>
				<p>
					Our services are not directed to children under 13 years of age.
					We do not knowingly collect personal information from children. If
					you believe we have inadvertently collected data from a child,
					please contact us immediately.
				</p>

				<h3>9. International Data Transfers</h3>
				<p>
					If you are accessing our services from outside [Your Country],
					your information may be transferred to, stored, and processed in
					[Your Country] or other countries where our service providers
					operate. We ensure appropriate safeguards are in place for
					international transfers.
				</p>

				<h3>10. Changes to This Policy</h3>
				<p>
					We may update this Privacy Policy periodically to reflect changes
					in our practices or legal requirements. We will notify you of
					significant changes by:
				</p>
				<ul>
					<li>
						Posting the updated policy on our website with a new effective
						date
					</li>
					<li>
						Sending email notifications to registered users (for material
						changes)
					</li>
					<li>Displaying prominent notices on our website</li>
				</ul>
				<p>
					Your continued use of our services after changes indicates
					acceptance of the updated policy.
				</p>

				<h3>11. Contact Information</h3>
				<p>
					If you have questions, concerns, or requests regarding this
					Privacy Policy or our data practices, please contact us:
				</p>
				<div className="contact-info">
					<p>
						<strong>Beef Restaurant</strong>
						<br />
						Little Lonsdale St, Melbourne
						<br />
						Victoria 8011, Australia
					</p>
					<p>
						<strong>Email:</strong>{" "}
						<a href="mailto:privacy@beef.com">privacy@beef.com</a>
						<br />
						<strong>Phone:</strong>{" "}
						<a href="tel:+11234567890">+1 123 456 7890</a>
					</p>
				</div>

				<div className="divider div-transparent"></div>

				<p className="text-muted">
					<em>Last updated: January 22, 2026</em>
				</p>
			</LegalContent>
			{/* /Privacy Policy Content */}
		</>
	);
};

export default PrivacyPage;
