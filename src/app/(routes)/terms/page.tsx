import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { LegalContent } from "@/app/blocks/legal";
import { HeroInnerTermsData } from "@/app/hooks/data-terms";

const TermsPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerTermsData.title}
				image={HeroInnerTermsData.image}
				altText={HeroInnerTermsData.altText}
				breadcrumbs={HeroInnerTermsData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Terms Content */}
			<LegalContent
				subtitle="Effective Date: January 22, 2026"
				title="Terms &amp; Conditions"
			>
				<div className="alert alert--info">
					<strong>Important Notice:</strong> This is a generic terms of use
					template. Please customize this content to reflect your actual
					business practices, local laws, and legal requirements. Consult
					with a legal professional to ensure compliance.
				</div>

				<p className="lead">
					Welcome to Beef Restaurant. By accessing our website or using our
					services, you agree to be bound by these Terms of Use. Please read
					them carefully before making a reservation or engaging with our
					services.
				</p>

				<h3>1. Acceptance of Terms</h3>
				<p>
					By accessing or using Beef Restaurant&apos;s website, mobile
					applications, or services (collectively, &quot;Services&quot;), you
					agree to comply with and be bound by these Terms of Use and our
					Privacy Policy. If you do not agree to these terms, please do not
					use our Services.
				</p>
				<p>
					These terms constitute a legally binding agreement between you and
					Beef Restaurant (&quot;we,&quot; &quot;us,&quot; or
					&quot;our&quot;). We reserve the right to modify these terms at any
					time, and your continued use of our Services constitutes acceptance
					of any changes.
				</p>

				<h3>2. Use of Service</h3>
				<p>
					Subject to your compliance with these Terms, we grant you a
					limited, non-exclusive, non-transferable license to access and use
					our Services for personal, non-commercial purposes. You agree to:
				</p>
				<ul>
					<li>
						Provide accurate, current, and complete information when making
						reservations
					</li>
					<li>
						Maintain the confidentiality of your account credentials
					</li>
					<li>
						Notify us immediately of any unauthorized use of your account
					</li>
					<li>
						Use the Services in compliance with all applicable laws and
						regulations
					</li>
					<li>
						Not interfere with or disrupt the Services or servers
					</li>
					<li>
						Not attempt to gain unauthorized access to any portion of the
						Services
					</li>
					<li>
						Not use automated systems (bots, scrapers) to access the
						Services
					</li>
				</ul>

				<h3>3. Reservations and Bookings</h3>

				<h4>3.1 Reservation Process</h4>
				<p>
					Reservations can be made through our website, phone, email, or
					approved third-party platforms. All reservations are subject to
					availability and confirmation. We reserve the right to refuse
					service or cancel reservations at our discretion.
				</p>

				<h4>3.2 Cancellation Policy</h4>
				<ul>
					<li>
						<strong>Standard Reservations:</strong> Must be canceled at
						least 24 hours in advance
					</li>
					<li>
						<strong>Large Parties (6+ guests):</strong> Require 48 hours
						advance notice
					</li>
					<li>
						<strong>Private Events:</strong> Subject to specific
						cancellation terms in the event contract
					</li>
					<li>
						<strong>No-Show Policy:</strong> Failure to honor a reservation
						without notice may result in a no-show fee or restriction from
						future bookings
					</li>
				</ul>

				<h4>3.3 Seating and Table Time</h4>
				<p>
					While we make every effort to honor seating requests, we cannot
					guarantee specific table assignments. Standard dining experiences
					have a maximum duration of 2 hours. Extended dining times may be
					arranged for private events.
				</p>

				<h4>3.4 Deposits and Prepayment</h4>
				<p>
					Certain reservations may require a deposit or prepayment,
					particularly for large parties, special events, or tasting menus.
					Deposit amounts and refund policies will be clearly communicated at
					the time of booking.
				</p>

				<h3>4. Pricing and Payment</h3>
				<ul>
					<li>
						All prices are listed in [Currency] and are subject to change
						without notice
					</li>
					<li>
						Menu prices, ingredients, and availability may vary based on
						market conditions
					</li>
					<li>
						Gratuity is not included unless specified for large parties
					</li>
					<li>
						We accept major credit cards, debit cards, and cash
					</li>
					<li>
						Separate checks may be limited for large parties
					</li>
					<li>
						All charges are final once processed; refunds at management
						discretion
					</li>
				</ul>

				<h3>5. Dietary Requirements and Allergies</h3>
				<p>
					We make every effort to accommodate dietary restrictions and
					allergies. However:
				</p>
				<ul>
					<li>
						You must inform us of any allergies or dietary restrictions at
						the time of reservation
					</li>
					<li>
						Our kitchen handles various allergens; cross-contamination may
						occur
					</li>
					<li>We cannot guarantee completely allergen-free meals</li>
					<li>
						You assume responsibility for communicating your dietary needs
						to our staff
					</li>
					<li>
						We are not liable for allergic reactions resulting from
						undisclosed allergies
					</li>
				</ul>

				<h3>6. Dress Code and Conduct</h3>

				<h4>6.1 Dress Code</h4>
				<p>
					Beef Restaurant maintains a smart casual to business casual dress
					code. We reserve the right to refuse entry to guests not meeting
					our dress standards. Please avoid:
				</p>
				<ul>
					<li>Athletic wear, gym attire, or sportswear</li>
					<li>Beach attire, flip-flops, or beachwear</li>
					<li>Excessively casual or torn clothing</li>
				</ul>

				<h4>6.2 Guest Conduct</h4>
				<p>
					Guests are expected to conduct themselves respectfully toward other
					diners and staff. We reserve the right to refuse service or ask
					guests to leave for:
				</p>
				<ul>
					<li>Disruptive, offensive, or inappropriate behavior</li>
					<li>Intoxication or excessive alcohol consumption</li>
					<li>Harassment of staff or other guests</li>
					<li>Violation of health and safety regulations</li>
				</ul>

				<h3>7. Intellectual Property</h3>
				<p>
					All content on our website and Services, including text, graphics,
					logos, images, recipes, and software, is the property of Beef
					Restaurant or our licensors and is protected by copyright,
					trademark, and other intellectual property laws.
				</p>
				<p>You may not:</p>
				<ul>
					<li>
						Reproduce, distribute, or create derivative works from our
						content
					</li>
					<li>
						Use our trademarks, logos, or branding without written
						permission
					</li>
					<li>
						Copy or replicate our menu items, recipes, or presentation
						styles
					</li>
					<li>
						Use our content for commercial purposes without authorization
					</li>
				</ul>

				<h3>8. User-Generated Content</h3>
				<p>
					By submitting reviews, photos, comments, or other content to our
					Services, you grant us a worldwide, non-exclusive, royalty-free
					license to use, reproduce, modify, and display such content in
					connection with our business operations.
				</p>
				<p>You represent that any content you submit:</p>
				<ul>
					<li>
						Is accurate and does not violate any third-party rights
					</li>
					<li>
						Does not contain defamatory, offensive, or illegal material
					</li>
					<li>Does not infringe on intellectual property rights</li>
				</ul>
				<p>
					We reserve the right to remove any content that violates these
					terms or is otherwise objectionable.
				</p>

				<h3>9. Limitation of Liability</h3>
				<p>
					To the fullest extent permitted by law, Beef Restaurant and its
					officers, directors, employees, and agents shall not be liable for:
				</p>
				<ul>
					<li>
						Indirect, incidental, special, consequential, or punitive
						damages
					</li>
					<li>
						Loss of profits, revenue, data, or business opportunities
					</li>
					<li>
						Personal injury or property damage, except where caused by our
						negligence
					</li>
					<li>
						Food-borne illness, allergic reactions, or dietary
						complications
					</li>
					<li>Loss or theft of personal property on our premises</li>
					<li>Service interruptions, delays, or unavailability</li>
				</ul>
				<p>
					Our total liability for any claim shall not exceed the amount paid
					by you for the services giving rise to the claim.
				</p>

				<h3>10. Indemnification</h3>
				<p>
					You agree to indemnify, defend, and hold harmless Beef Restaurant
					from any claims, damages, losses, liabilities, and expenses
					(including legal fees) arising from:
				</p>
				<ul>
					<li>Your use of our Services</li>
					<li>Your violation of these Terms</li>
					<li>Your violation of any third-party rights</li>
					<li>
						Any content you submit or transmit through our Services
					</li>
				</ul>

				<h3>11. Governing Law and Dispute Resolution</h3>

				<h4>11.1 Governing Law</h4>
				<p>
					These Terms shall be governed by and construed in accordance with
					the laws of [Your State/Country], without regard to its conflict of
					law provisions.
				</p>

				<h4>11.2 Dispute Resolution</h4>
				<p>
					Any disputes arising from these Terms or our Services shall be
					resolved through:
				</p>
				<ul>
					<li>
						<strong>Informal Resolution:</strong> Good faith negotiation
						between the parties
					</li>
					<li>
						<strong>Mediation:</strong> If negotiation fails, binding
						mediation in [Your City]
					</li>
					<li>
						<strong>Arbitration:</strong> Binding arbitration under
						[Arbitration Rules]
					</li>
					<li>
						<strong>Jurisdiction:</strong> Exclusive jurisdiction in the
						courts of [Your Jurisdiction]
					</li>
				</ul>

				<h4>11.3 Class Action Waiver</h4>
				<p>
					You agree to resolve disputes on an individual basis and waive the
					right to participate in class action lawsuits or class-wide
					arbitration.
				</p>

				<h3>12. Photography and Media</h3>
				<p>
					By visiting our restaurant, you acknowledge that photography and
					videography may occur for marketing purposes. If you do not wish to
					be photographed, please inform our staff. We may use photos and
					videos featuring guests in our marketing materials unless you opt
					out.
				</p>

				<h3>13. Force Majeure</h3>
				<p>
					We shall not be liable for any failure or delay in performing our
					obligations due to circumstances beyond our reasonable control,
					including natural disasters, pandemics, government actions, labor
					disputes, or equipment failures.
				</p>

				<h3>14. Severability</h3>
				<p>
					If any provision of these Terms is found to be invalid or
					unenforceable, the remaining provisions shall remain in full force
					and effect. Invalid provisions shall be modified to the minimum
					extent necessary to make them valid and enforceable.
				</p>

				<h3>15. Entire Agreement</h3>
				<p>
					These Terms, together with our Privacy Policy, constitute the
					entire agreement between you and Beef Restaurant regarding the use
					of our Services and supersede all prior agreements and
					understandings.
				</p>

				<h3>16. Changes to Terms</h3>
				<p>
					We reserve the right to modify these Terms at any time. Material
					changes will be communicated through:
				</p>
				<ul>
					<li>Email notification to registered users</li>
					<li>Prominent notice on our website</li>
					<li>
						Updated &quot;Effective Date&quot; at the top of this document
					</li>
				</ul>
				<p>
					Your continued use of our Services after changes constitutes
					acceptance of the modified Terms.
				</p>

				<h3>17. Contact Information</h3>
				<p>
					For questions about these Terms of Use, please contact us:
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
						<a href="mailto:legal@beef.com">legal@beef.com</a>
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
			{/* /Terms Content */}
		</>
	);
};

export default TermsPage;
