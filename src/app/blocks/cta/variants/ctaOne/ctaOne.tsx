import Link from "next/link";

// interface
import { CtaProps } from "@/app/types/common.types";

const CtaOne = ({ title, description, link, linkText, className }: CtaProps) => {
	const isExternal = link?.startsWith("http");

	return (
		<section className={`cta ${className || ''}`}>
			<div className="cta__overlayer"></div>
			<div className="cta__container">
				<div className="cta__content">
					<div className="cta__header">
						<h2>{title}</h2>
					</div>
					<div className="cta__body">
						<p>{description}</p>
					</div>
					<div className="cta__footer">
						{isExternal ? (
							<a href={link} className="btn" target="_blank" rel="noopener noreferrer">
								{linkText}
							</a>
						) : (
							<Link href={link || '#'} className="btn">
								{linkText}
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

CtaOne.displayName = "CtaOne";
export default CtaOne;
