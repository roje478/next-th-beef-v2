import Link from "next/link";
import React from "react";
import { BreadcrumbsProps } from "@/app/types/common.types";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
	if (!items || items.length === 0) {
		return null;
	}

	return (
		<ol className="breadcrumb__list">
			{items.map((item, index) => {
				const isLast = index === items.length - 1;
				return (
					<li
						key={item.id}
						className="breadcrumb__item"
						{...(isLast ? { "aria-current": "page" as const } : {})}
					>
						{isLast ? item.title : <Link href={item.link}>{item.title}</Link>}
					</li>
				);
			})}
		</ol>
	);
};

export default Breadcrumbs;
