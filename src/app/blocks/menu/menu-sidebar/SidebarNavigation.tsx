"use client";
import React from "react";
import Image from "next/image";

import { SidebarNavigationProps } from "@/app/types/common.types";

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
	navItems,
	activeItem,
	onNavLinkClick,
}) => {
	if (!navItems || navItems.length === 0) {
		return null;
	}

	return (
		<nav className="navmenu-sidebar">
			<ul className="navmenu-sidebar__list">
				{navItems.map((item, index) => {
					const anchor = item.anchor || "";

					return (
						<li key={item.id ?? index}>
							<a
								href={`#${anchor}`}
								className={`navmenu-sidebar__link ${
									activeItem === index ? "active" : ""
								}`}
								onClick={(e) => onNavLinkClick(e, index, anchor)}
							>
								{item.icon && (
									<Image
										src={item.icon}
										alt=""
										width={24}
										height={24}
										aria-hidden="true"
										loading="lazy"
									/>
								)}
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default SidebarNavigation;
