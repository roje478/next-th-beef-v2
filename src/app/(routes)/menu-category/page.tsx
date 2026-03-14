import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import MenuCategoryBlock from "@/app/blocks/menu/menu-category/MenuCategoryBlock";

// Data
import { HeroInnerMenuCategoryData } from "@/app/hooks/data-menu-category";

const MenuCategoryPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerMenuCategoryData.title}
				image={HeroInnerMenuCategoryData.image}
				altText={HeroInnerMenuCategoryData.altText}
				breadcrumbs={HeroInnerMenuCategoryData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Menu Category - Block */}
			<MenuCategoryBlock />
			{/* /Menu Category - Block */}
		</>
	);
};

export default MenuCategoryPage;
