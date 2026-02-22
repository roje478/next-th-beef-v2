import React, { memo } from "react";
import DishItem from "@/app/components/common/dish/DishItem";
import { TabPanelProps } from "@/app/types/common.types";
import { DishItem as DishItemType } from "@/app/types/common.types";
import { cn } from "@/lib/utils";

const TabPanel: React.FC<TabPanelProps> = ({
	index,
	activeTab,
	items,
	phrase,
	id,
	ariaLabelledBy,
}) => {
	const midpoint = items ? Math.ceil(items.length / 2) : 0;
	const firstColumn = items?.slice(0, midpoint) || [];
	const secondColumn = items?.slice(midpoint) || [];

	return (
		<div
			className={cn("tabs-content__item", { active: activeTab === index })}
			id={id}
			role="tabpanel"
			aria-labelledby={ariaLabelledBy}
			hidden={activeTab !== index}
		>
			{/* Section title */}
			{phrase && (
				<div className="section-title">
					<p>{phrase}</p>
				</div>
			)}
			{/* /Section title */}
			{/* Menu block */}
			<div className="menu-block__dishes">
				{/* Dishes list - Column 1 */}
				<div className="dishes__list dishes__list--col">
					{firstColumn.map((dish: DishItemType, dishIndex: number) => (
						<DishItem
							key={dish.id ?? `dish-${index}-${dishIndex}`}
							title={dish.title}
							price={dish.price}
							description={dish.description}
						/>
					))}
				</div>
				{/* /Dishes list */}
				{/* Dishes list - Column 2 */}
				<div className="dishes__list dishes__list--col">
					{secondColumn.map((dish: DishItemType, dishIndex: number) => (
						<DishItem
							key={dish.id ?? `dish-${index}-col2-${dishIndex}`}
							title={dish.title}
							price={dish.price}
							description={dish.description}
						/>
					))}
				</div>
				{/* /Dishes list */}
			</div>
			{/* /Menu block */}
		</div>
	);
};

TabPanel.displayName = "TabPanel";

export default memo(TabPanel);
