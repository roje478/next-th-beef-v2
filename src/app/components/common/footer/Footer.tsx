"use client";
import React from "react";
import { InfoGeneralData, LogoData, socialIconsData } from "@/app/hooks/data-general";
import LogoLink from "../logo/logoLink";
import SocialIcons from "../social/SocialIcons";
import LegalLinks from "./LegalLinks";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer: React.FC = () => {
	return (
		<footer role="contentinfo" className="footer">
			<div className="footer__container">
				<div className="footer__content">
					<div className="footer__logo">
						{/* Logo */}
						<LogoLink
							href={LogoData.hrefLogo}
							src={LogoData.urlLogo}
							alt={LogoData.altLogo}
							width={LogoData.widthLogo}
							height={LogoData.heightLogo}
						/>
						{/* /Logo */}
					</div>
					<address className="footer__info">
						{/* Address */}
						<div className="footer__address">
							<p>
								{InfoGeneralData.address},
								<br /> {InfoGeneralData.city} {InfoGeneralData.zip},
								<br /> {InfoGeneralData.largeCountry}
							</p>
						</div>
						<div className="footer__info-contact">
							<a href={`tel:${InfoGeneralData.phone}`}>
								{InfoGeneralData.phoneLabel} {InfoGeneralData.phone}
							</a>
							<a href={`tel:${InfoGeneralData.fax}`}>
								{InfoGeneralData.faxLabel} {InfoGeneralData.fax}
							</a>
							<a href={`mailto:${InfoGeneralData.emailInfo}`}>
								{InfoGeneralData.emailLabel} {InfoGeneralData.emailInfo}
							</a>
						</div>
						{/* /Address */}
					</address>
					<div className="footer__social">
						{/* Social-icons */}
						<SocialIcons socials={socialIconsData} />
						{/* /Social-icons */}
					</div>
				</div>
			</div>
			<div className="footer__button">
				{/* Copyright */}
				<div className="footer__copyright">
					<p>{InfoGeneralData.copyright}</p>
				</div>
				{/* /Copyright */}
				{/* Links legal */}
				<LegalLinks />
				{/* /Links legal */}
			</div>
			<ScrollToTopButton />
		</footer>
	);
};

export default Footer;
