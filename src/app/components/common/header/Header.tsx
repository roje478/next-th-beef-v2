"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import LogoLink from "@/app/components/common/logo/logoLink";
import { LogoData, socialIconsData } from "@/app/hooks/data-general";
import { itemsNavbar } from "@/app/hooks/data-navbar";
import SocialIcons from "@/app/components/common/social/SocialIcons";
import MenuMobile from "@/app/components/common/menuMobile/menuMobile";
import MenuToggleButton from "./MenuToggleButton";
import { cn } from "@/lib/utils";
import throttle from 'lodash.throttle';

const STICKY_THRESHOLD = 100;
const SCROLL_THROTTLE_LIMIT = 200;

const Header: React.FC = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > STICKY_THRESHOLD);
		};

		const throttledScrollHandler = throttle(handleScroll, SCROLL_THROTTLE_LIMIT);

		window.addEventListener("scroll", throttledScrollHandler);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", throttledScrollHandler);
		};
	}, []);

	const handleToggleMobileMenu = () => {
		setIsMobile(!isMobile);
	};

	return (
		<>
			<header
				role="banner"
				id="header"
				className={cn("header", { "header--sticky": isSticky })}
			>
				<div className="header__content">
					{/* Logo */}
					<div className="header__logo">
						<LogoLink
							href={LogoData.hrefLogo}
							src={LogoData.urlLogo}
							alt={LogoData.altLogo}
							width={LogoData.widthLogo}
							height={LogoData.heightLogo}
						/>
					</div>

					{/* Nav */}
					<div className="header__nav">
						{/* Menu */}
						<nav className="header__menu" aria-label="Main navigation">
							<ul className="header__menu-list">
								{itemsNavbar.map((item) => (
									<li
										key={item.id}
										className={cn(
											"dropdown",
											item.children &&
												item.children.length > 0 &&
												"simple-dropdown",
										)}
									>
										<Link href={item.link} aria-label={item.title}>
											{item.title}
										</Link>
										{item.children && item.children.length > 0 && (
											<ul className="dropdown-menu">
												{item.children.map((child) => (
													<li key={child.id} className="dropdown">
														<Link href={child.link}>
															{child.title}
														</Link>
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
						</nav>

						{/* Mobile */}
						<div className="header__mobile">
							<MenuToggleButton
								isMobile={isMobile}
								onToggle={handleToggleMobileMenu}
								aria-controls="menu-mobile"
							/>
						</div>

						{/* Social */}
						<div className="header__social">
							<SocialIcons socials={socialIconsData} />
						</div>
					</div>
				</div>
			</header>
			<MenuMobile
				id="menu-mobile"
				isMobile={isMobile}
				setIsMobile={setIsMobile}
			/>
		</>
	);
};

export default Header;
