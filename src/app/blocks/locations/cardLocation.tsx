import Image from "next/image";
import { Location } from "@/app/types/common.types";

export const LocationItem = ({
	name,
	addressLine1,
	addressLine2,
	phone,
	email,
	imageSrc,
	imageAltText,
	directionLink,
	directionButtonText,
}: Location) => {
	return (
		<div className="location__item">
			{/* image */}
			<div className="location__item-image">
				<Image
					src={imageSrc}
					alt={imageAltText || `Image of the ${name} location`}
					width={500}
					height={300}
					sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
					loading="lazy"
				/>
			</div>
			{/* /image */}
			{/* content */}
			<div className="location__item-content">
				<h3 className="location__item-title">{name}</h3>
				<p>
					{addressLine1}
					<br />
					{addressLine2}
					<br />
					<a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>,{" "}
					<a href={`mailto:${email}`}>{email}</a>
				</p>
				<a
					className="btn-link"
					href={directionLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					{directionButtonText || "get direction"}
				</a>
			</div>
			{/* /content */}
		</div>
	);
};
