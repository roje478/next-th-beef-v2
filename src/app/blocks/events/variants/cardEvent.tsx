import Image from "next/image";

// interface
import { EventItem } from "@/app/types/common.types";

const CardEvent = ({ image, title, subtitle, pharse }: EventItem) => {
	return (
		<div className="events-block__item">
			{/* Image */}
			<div className="events-block__item-image">
				<Image src={image} alt={title} width={500} height={500} sizes="(min-width: 768px) 33vw, 100vw" loading="lazy" />
			</div>
			{/* /Image */}
			{/* Info */}
			<div className="events-block__item-info">
				<h3 className="events-block__item-info__subtitle">{subtitle}</h3>
				<h4 className="events-block__item-info__title">{title}</h4>
				<p>{pharse}</p>
			</div>
			{/* /Info */}
		</div>
	);
};

export default CardEvent;
