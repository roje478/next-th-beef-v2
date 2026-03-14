import React from "react";

interface LegalContentProps {
	subtitle: string;
	title: string;
	children: React.ReactNode;
}

const LegalContent = ({ subtitle, title, children }: LegalContentProps) => {
	return (
		<section className="legal-content section-spacing">
			<div className="legal-content__container container">
				{/* Section title */}
				<div className="section-title section-title__left">
					<p className="section-title__subtitle">{subtitle}</p>
					<h2 className="section-title__title">{title}</h2>
				</div>

				<div className="legal-content__text content-md">{children}</div>
			</div>
		</section>
	);
};

export default LegalContent;
