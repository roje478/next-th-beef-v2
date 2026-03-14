import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import ContactBlock from "@/app/blocks/contact/contact";
import LocationsBlock from "@/app/blocks/locations/locations";
import BadgesList from "@/app/blocks/badges/BadgesList";
import { GalleryGrid } from "@/app/blocks/gallery";

// Data
import { HeroInnerContactData } from "@/app/hooks/data-contact";
import { contactData } from "@/app/hooks/data-contact";
import { locationsData } from "@/app/hooks/data-contact";
import { badgesListData } from "@/app/hooks/data-brands";
import { galleryAboutData } from "@/app/hooks/data-gallery";

const ContactUsPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerContactData.title}
				image={HeroInnerContactData.image}
				altText={HeroInnerContactData.altText}
				breadcrumbs={HeroInnerContactData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Contact - Block */}
			<ContactBlock {...contactData} />
			{/* /Contact - Block */}

			{/* Locations - Block */}
			<LocationsBlock {...locationsData} />
			{/* /Locations - Block */}

			{/* Badges - Block */}
			<BadgesList {...badgesListData} />
			{/* /Badges - Block */}

			{/* Gallery - Block */}
			<GalleryGrid {...galleryAboutData} variant="small" />
			{/* /Gallery - Block */}
		</>
	);
};

export default ContactUsPage;
