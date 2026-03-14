import type { Metadata } from "next";
import { AboutModern, AboutTwoCols } from "@/app/blocks/about";
import ContactBlock from "@/app/blocks/contact/contact";
import { TeamTwoBlock } from "@/app/blocks/team";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Learn about our restaurant story, philosophy, and the passionate team behind every dish. Featuring our chefs, values, and commitment to quality.",
};
import { TestimonialsBlock } from "@/app/blocks/testimonials/";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { GalleryGrid } from "@/app/blocks/gallery";
import BadgesList from "@/app/blocks/badges/BadgesList";

// Import Data
import { HeroInnerAboutData } from "@/app/hooks/data";
import { testimonialsData } from "@/app/hooks/data-testimonials";
import { badgesListData } from "@/app/hooks/data-brands";
import { aboutTwoData } from "@/app/hooks/data-about";
import { contactData } from "@/app/hooks/data-contact";
import { galleryAboutData } from "@/app/hooks/data-gallery";

const AboutPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerAboutData.title}
				image={HeroInnerAboutData.image}
				altText={HeroInnerAboutData.altText}
				breadcrumbs={HeroInnerAboutData.breadcrumbs}
			/>
			{/* / Hero Inner - Block */}

			{/* About S2 - Block */}
			<AboutModern {...aboutTwoData} />
			{/* / About S2 - Block */}

			{/* Text Cols - Block */}
			<AboutTwoCols {...aboutTwoData} />
			{/* / Text Cols - Block */}

			{/* Badges - Block */}
			<BadgesList {...badgesListData} />
			{/* / Badges - Block */}

			{/* Testimonials - Block */}
			<TestimonialsBlock {...testimonialsData} />
			{/* / Testimonials - Block */}

			{/* Team - Block */}
			<TeamTwoBlock />
			{/* / Team - Block */}

			{/* Contact - Block */}
			<ContactBlock {...contactData} />
			{/* / Contact - Block */}

			{/* Gallery - Block */}
			<GalleryGrid {...galleryAboutData} variant="small" />
			{/* / Gallery - Block */}
		</>
	);
};

export default AboutPage;
