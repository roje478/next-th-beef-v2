"use client";
import React, { useState, useCallback, memo } from "react";
import { MenuTabsBlockProps } from "@/app/types/common.types";
import TabButton from "./tabButton";
import TabPanel from "./TabPanel";

const MenuTabsBlock = ({
	items,
	emptyMessage = "No menu items available.",
}: MenuTabsBlockProps) => {
	const [activeTab, setActiveTab] = useState(0);
	
	const handleTabClick = useCallback((index: number) => {
		setActiveTab(index);
	}, []);

	if (!items?.length) {
		return (
			<div className="menu menu--empty">
				<p>{emptyMessage}</p>
			</div>
		);
	}

	return (
		<section className="menu">
			<div className="menu__container">
				{/* Tabs */}
				<div className="tabs">
					{items.map((item, index) => (
						<TabButton
							key={item.id ?? index}
							item={item}
							index={index}
							activeTab={activeTab}
							onClick={handleTabClick}
						/>
					))}
				</div>
				{/* /Tabs */}

				{/* Tab panels */}
				<div className="tabs-content">
					{items.map((item, index) => (
						<TabPanel
							key={item.id ?? index}
							index={index}
							activeTab={activeTab}
							items={item.dishesList}
							phrase={item.phrase}
							id={`tabpanel-${index}`}
							ariaLabelledBy={`tab-button-${index}`}
						/>
					))}
				</div>
				{/* /Tab panels */}
			</div>
		</section>
	);
};

MenuTabsBlock.displayName = "MenuTabsBlock";

export default memo(MenuTabsBlock);
