import { cn } from "@/lib/utils";
import Image from "next/image";
import { SliderThumbnailItemProps } from "@/app/types/common.types";

const SliderThumbnailItem = ({
	itemActive,
	id,
	image,
	altText,
	onClick,
}: SliderThumbnailItemProps) => {
	return (
		<div
			role="button"
			onClick={onClick}
			className={cn(
				"slider-thumbnail__item",
				itemActive === id && "is-active"
			)}
		>
			<div className="slider-thumbnail__item-image">
				<Image src={image} alt={altText} width={151} height={200} sizes="(min-width: 1024px) 33vw, 50vw" loading="lazy" />
			</div>
		</div>
	);
};

export default SliderThumbnailItem;
