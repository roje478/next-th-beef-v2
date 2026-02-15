"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { itemsNavbar } from "@/app/hooks/data-navbar";
import { NavItem, MenuMobileProps } from "@/app/types/common.types";
import { MenuMobileData } from "@/app/hooks/data-mobile-menu";
import { cn } from "@/lib/utils";

const MenuMobile: React.FC<MenuMobileProps> = ({
	id,
	isMobile,
	setIsMobile,
	ariaLabelGoBack = MenuMobileData.ariaLabelGoBack,
	ariaLabelCloseMenu = MenuMobileData.ariaLabelCloseMenu,
	ariaLabelSubmenu = MenuMobileData.ariaLabelSubmenu,
	defaultMenuTitle = MenuMobileData.defaultMenuTitle,
}) => {
	const [delayedIsMobile, setDelayedIsMobile] = useState(false);
	const [activeSubMenuId, setActiveSubMenuId] = useState<number | null>(null);
	const menuContentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (isMobile) {
			setDelayedIsMobile(true);
		} else {
			timer = setTimeout(() => {
				setDelayedIsMobile(false);
			}, 300);
		}
		return () => clearTimeout(timer);
	}, [isMobile]);

	const handleClose = useCallback(() => {
		setIsMobile(false);
	}, [setIsMobile]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuContentRef.current &&
				!menuContentRef.current.contains(event.target as Node)
			) {
				handleClose();
			}
		};

		if (isMobile) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMobile, handleClose]);

	useEffect(() => {
		if (!isMobile) {
			const timer = setTimeout(() => {
				setActiveSubMenuId(null);
			}, 300);
			return () => clearTimeout(timer);
		}
	}, [isMobile]);

	const handleBackClick = () => {
		setActiveSubMenuId(null);
	};

	const handleSubMenuTriggerClick = (itemId: number) => {
		setActiveSubMenuId(itemId);
	};

	const activeMenuItem = itemsNavbar.find((item) => item.id === activeSubMenuId);
	const menuTitle = activeMenuItem ? activeMenuItem.title : defaultMenuTitle;

	if (!isMobile && !delayedIsMobile) {
		return null;
	}

	return (
		<>
			<nav
				id={id}
				className={cn(
					"mm-menu mm-menu--offcanvas mm-menu--theme-light",
					"fixed top-0 left-0 h-full w-[80%] max-w-[440px] bg-coarseWool-800",
					"transform -translate-x-full transition-transform duration-300 ease-in-out",
					{ "translate-x-0": isMobile },
				)}
				role="navigation"
				aria-label="Mobile menu"
			>
				<div
					ref={menuContentRef}
					className="h-full flex flex-col overflow-hidden"
				>
					{/* Navbar */}
					<div className="mm-navbar flex items-center border-b min-h-[50px]">
						<button
							className={cn(
								"mm-btn mm-btn--prev w-[50px] h-[50px] flex items-center justify-center transition-opacity duration-200",
								activeSubMenuId !== null
									? "opacity-100"
									: "opacity-0 pointer-events-none",
							)}
							onClick={handleBackClick}
							tabIndex={activeSubMenuId !== null ? 0 : -1}
							aria-label={ariaLabelGoBack}
						>
							<span className="inline-block w-[8px] h-[8px] border-l-2 border-b-2 border-calico-500 transform rotate-45" />
						</button>
						<span className="mm-navbar__title flex-1 text-center">
							<span>{menuTitle}</span>
						</span>
						<button
							className="mm-btn w-[50px] h-[50px] flex items-center justify-center"
							onClick={handleClose}
							tabIndex={0}
							aria-label={ariaLabelCloseMenu}
						>
							<span className="text-coarseWool-300 text-xl leading-none">
								&times;
							</span>
						</button>
					</div>

					{/* Panels container */}
					<div className="flex-1 overflow-hidden relative">
						{/* Main panel */}
						<div
							className={cn(
								"absolute inset-0 overflow-y-auto transition-transform duration-300 ease-in-out",
								activeSubMenuId !== null
									? "-translate-x-full"
									: "translate-x-0",
							)}
						>
							<ul>
								{itemsNavbar.map((item: NavItem) => (
									<li key={item.id} className="mm-listitem border-b">
										{item.children && item.children.length > 0 ? (
											<div className="flex items-center">
												<Link
													href={item.link}
													className="mm-listitem__text flex-1 px-5 py-3 block"
													onClick={handleClose}
												>
													{item.title}
												</Link>
												<button
													className="mm-btn mm-btn--next w-[50px] flex items-center justify-center border-l border-coarseWool-500 py-3 self-stretch"
													onClick={() =>
														handleSubMenuTriggerClick(item.id)
													}
													aria-label={`${ariaLabelSubmenu} ${item.title}`}
													aria-expanded={activeSubMenuId === item.id}
												>
													<span className="inline-block w-[8px] h-[8px] border-r-2 border-t-2 border-calico-500 transform rotate-45" />
												</button>
											</div>
										) : (
											<Link
												href={item.link}
												className="mm-listitem__text block px-5 py-3"
												onClick={handleClose}
											>
												{item.title}
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>

						{/* Submenu panels */}
						{itemsNavbar
							.filter(
								(item) => item.children && item.children.length > 0,
							)
							.map((item) => (
								<div
									key={item.id}
									className={cn(
										"absolute inset-0 overflow-y-auto transition-transform duration-300 ease-in-out",
										activeSubMenuId === item.id
											? "translate-x-0"
											: "translate-x-full",
									)}
								>
									<ul>
										{item.children!.map((child) => (
											<li
												key={child.id}
												className="mm-listitem border-b"
											>
												<Link
													href={child.link}
													className="mm-listitem__text block px-5 py-3"
													onClick={handleClose}
												>
													{child.title}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
					</div>
				</div>
			</nav>

			{/* Overlay */}
			<div
				className={cn(
					"fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300",
					isMobile ? "opacity-100" : "opacity-0 pointer-events-none",
				)}
				onClick={handleClose}
				aria-label={ariaLabelCloseMenu}
			/>
		</>
	);
};

export default MenuMobile;
