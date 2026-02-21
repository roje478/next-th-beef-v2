import HeroInner from "@/app/components/common/hero-inner/Hero-inner";
import MenuSidebar from "@/app/blocks/menu/menu-sidebar/MenuSidebar";
import BadgesList from "@/app/blocks/badges/BadgesList";
import { CtaTwo } from "@/app/blocks/cta";
import { GalleryGrid } from "@/app/blocks/gallery";

// Data
import { HeroInnerMenuSidebarData } from "@/app/hooks/data";
import { badgesListData } from "@/app/hooks/data-brands";
import { ctaTwoData } from "@/app/hooks/data-cta";
import { galleryAboutData } from "@/app/hooks/data-gallery";

const PageMenu = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInner
				title={HeroInnerMenuSidebarData.title}
				image={HeroInnerMenuSidebarData.image}
				altText={HeroInnerMenuSidebarData.altText}
				breadcrumbs={HeroInnerMenuSidebarData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Menu Sidebar - Block */}
			<MenuSidebar />
			{/* /Menu Sidebar - Block */}

			{/* CTA - Block */}
			<CtaTwo {...ctaTwoData} />
			{/* /CTA - Block */}

			{/* Badges - Block */}
			<BadgesList {...badgesListData} />
			{/* /Badges - Block */}

			{/* Gallery - Block */}
			<GalleryGrid {...galleryAboutData} variant="small" />
			{/* /Gallery - Block */}
		</>
	);
};

export default PageMenu;
