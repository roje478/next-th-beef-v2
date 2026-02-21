import Image from "next/image";
import React from "react";
import SocialIcons from "@/app/components/common/social/SocialIcons";
import { CardTeamProps } from "@/app/types/common.types";

const CardTeam = ({ name, position, image, social }: CardTeamProps) => {
	return (
		<article className="card-team">
			<div className="card-team__image">
				<Image src={image} alt={`${name}, ${position}`} width={424} height={468} loading="lazy" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
			</div>
			<div className="card-team__info">
				<h3 className="card-team__name">{name}</h3>
				<p className="card-team__position">{position}</p>
				<SocialIcons socials={social} />
			</div>
		</article>
	);
};

export default CardTeam;
