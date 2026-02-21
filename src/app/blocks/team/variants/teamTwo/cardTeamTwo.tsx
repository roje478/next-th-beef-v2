import Image from "next/image";
import React from "react";
import SocialIcons from "@/app/components/common/social/SocialIcons";
import { CardTeamProps } from "@/app/types/common.types";

const CardTeamTwo = ({ name, position, image, social }: CardTeamProps) => {
	return (
		<article className="card-team-2">
			<div className="card-team-2__image">
				<Image
					src={image}
					alt={name}
					width={424}
					height={468}
					loading="lazy"
					sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
				/>
				<SocialIcons socials={social} />
			</div>
			<div className="card-team-2__info">
				<h3 className="card-team-2__name">{name}</h3>
				<p className="card-team-2__position">{position}</p>
			</div>
		</article>
	);
};

export default CardTeamTwo;
