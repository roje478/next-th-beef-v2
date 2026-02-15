import React from "react";
import Link from "next/link";
import ContactInfo from "./ContactInfo";
import { TopbarProps } from "@/app/types/common.types";
import { InfoGeneralData } from "@/app/hooks/data-general";

const Topbar: React.FC<TopbarProps> = ({
	address,
	city,
	zip,
	country,
	mapUrl,
	phone,
	email,
	callToAction,
}) => {
	if (!phone || !email) {
		return null;
	}

	const fullAddress = `${address}, ${city} ${zip}, ${country}`;
	const { topbar } = InfoGeneralData;

	return (
		<div className="topbar">
			{/* Topbar Left */}
			<div className="topbar__left">
				{/* Address */}
				<ContactInfo
					className="topbar__address"
					href={mapUrl}
					icon={topbar.addressIcon}
					text={fullAddress}
					ariaLabel={`${topbar.addressAriaLabel}: ${fullAddress}`}
				/>
				{/* /Address */}
			</div>
			{/* /Topbar Left */}
			{/* Topbar Right */}
			<div className="topbar__right">
				{/* Phone */}
				<ContactInfo
					className="topbar__phone"
					href={`tel:${phone}`}
					icon={topbar.phoneIcon}
					text={phone}
					ariaLabel={`${topbar.phoneAriaLabel} ${phone}`}
				/>
				{/* /Phone */}
				{/* Email */}
				<ContactInfo
					className="topbar__email"
					href={`mailto:${email}`}
					icon={topbar.emailIcon}
					text={email}
					ariaLabel={`${topbar.emailAriaLabel} ${email}`}
				/>
				{/* /Email */}
				{/* Call to */}
				{callToAction && (
					<div className="topbar__call-to">
						<Link className="btn" href={callToAction.href} target="_blank" rel="noopener noreferrer">
							{callToAction.text}
						</Link>
					</div>
				)}
				{/* /Call to */}
			</div>
			{/* /Topbar Right */}
		</div>
	);
}

export default Topbar