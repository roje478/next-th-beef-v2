import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import MenuSingleBlock from "@/app/blocks/menu/menu-single/MenuSingleBlock";

// Data
import { HeroInnerMenuSingleData } from "@/app/hooks/data-menu-single";

const MenuSinglePage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerMenuSingleData.title}
				image={HeroInnerMenuSingleData.image}
				altText={HeroInnerMenuSingleData.altText}
				breadcrumbs={HeroInnerMenuSingleData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Menu Single - Block */}
			<MenuSingleBlock />
			{/* /Menu Single - Block */}
		</>
	);
};

export default MenuSinglePage;
