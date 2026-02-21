"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import SidebarNavigation from "./SidebarNavigation";
import MenuContentDisplay from "./MenuContentDisplay";
import throttle from "lodash.throttle";

// Data
import { categoryDishesData } from "@/app/hooks/data-dish";

const SCROLL_THROTTLE_LIMIT = 200;

const MenuSidebar = () => {
	const [activeItem, setActiveItem] = useState(0);
	const navLinksRef = useRef<NodeListOf<HTMLAnchorElement> | null>(null);
	const sectionsRef = useRef<NodeListOf<HTMLElement> | null>(null);

	const getDynamicOffset = () => {
		if (typeof window === "undefined") return 200;
		const currentWidth = window.innerWidth;
		if (currentWidth >= 1200) return 460;
		if (currentWidth >= 768) return 300;
		return 200;
	};

	const onScroll = useCallback(() => {
		if (
			!sectionsRef.current ||
			!navLinksRef.current ||
			sectionsRef.current.length === 0
		)
			return;

		let currentSectionId = "";
		const pageYOffset = window.pageYOffset;
		const offset = getDynamicOffset();

		if (pageYOffset <= offset) {
			currentSectionId = sectionsRef.current[0]?.getAttribute("id") || "";
		} else if (
			window.innerHeight + pageYOffset >=
			document.body.offsetHeight - 2
		) {
			currentSectionId =
				sectionsRef.current[sectionsRef.current.length - 1]?.getAttribute(
					"id"
				) || "";
		} else {
			sectionsRef.current.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				if (
					pageYOffset >= sectionTop - offset &&
					pageYOffset < sectionTop + sectionHeight - offset
				) {
					currentSectionId = section.getAttribute("id") || "";
				}
			});
		}

		let activeIndexFromScroll = -1;
		navLinksRef.current.forEach((link, index) => {
			link.classList.remove("active");
			if (
				currentSectionId &&
				link.getAttribute("href") === `#${currentSectionId}`
			) {
				link.classList.add("active");
				activeIndexFromScroll = index;
			}
		});

		if (activeIndexFromScroll !== -1 && activeItem !== activeIndexFromScroll) {
			setActiveItem(activeIndexFromScroll);
		}
	}, [activeItem]);

	useEffect(() => {
		const sections = document.querySelectorAll(".menu__category");
		const navLinks = document.querySelectorAll(".navmenu-sidebar__link");

		sectionsRef.current = sections as NodeListOf<HTMLElement>;
		navLinksRef.current = navLinks as NodeListOf<HTMLAnchorElement>;

		if (navLinksRef.current && navLinksRef.current.length > 0) {
			onScroll();
		}

		const throttledOnScroll = throttle(onScroll, SCROLL_THROTTLE_LIMIT);

		window.addEventListener("scroll", throttledOnScroll);
		return () => window.removeEventListener("scroll", throttledOnScroll);
	}, [onScroll]);

	const handleNavLinkClick = (
		event: React.MouseEvent<HTMLAnchorElement>,
		index: number,
		anchor: string
	) => {
		setActiveItem(index);
		const targetElement = document.getElementById(anchor);

		if (targetElement) {
			event.preventDefault();
			const headerHeight =
				parseFloat(
					getComputedStyle(document.documentElement).getPropertyValue(
						"--header-height"
					)
				) || 0;
			const topPosition = targetElement.offsetTop - headerHeight;

			window.scrollTo({
				top: topPosition,
				behavior: "smooth",
			});

			if (navLinksRef.current) {
				navLinksRef.current.forEach((link) =>
					link.classList.remove("active")
				);
				event.currentTarget.classList.add("active");
			}
		}
	};

	return (
		<section className="menu menu-sidebar">
			<div className="navmenu__container">
				{categoryDishesData?.items && (
					<SidebarNavigation
						navItems={categoryDishesData.items}
						activeItem={activeItem}
						onNavLinkClick={handleNavLinkClick}
					/>
				)}
				{categoryDishesData?.items && (
					<MenuContentDisplay
						categories={categoryDishesData.items}
						emptyMessage={categoryDishesData.emptyMessage}
					/>
				)}
			</div>
		</section>
	);
};

export default MenuSidebar;
