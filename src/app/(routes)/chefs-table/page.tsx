import type { Metadata } from "next";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import ExperienceIntroBlock from "@/app/blocks/chefs-table/ExperienceIntroBlock";
import CourseTimelineBlock from "@/app/blocks/chefs-table/CourseTimelineBlock";

export const metadata: Metadata = {
	title: "Chef's Table",
	description:
		"An exclusive chef's table experience with curated tasting menus, seasonal philosophy, and intimate dining. Reserve your seat for a unique culinary journey.",
};
import ChefPhilosophyBlock from "@/app/blocks/chefs-table/ChefPhilosophyBlock";
import SeasonalPhilosophyBlock from "@/app/blocks/chefs-table/SeasonalPhilosophyBlock";
import TestimonialsV2Block from "@/app/blocks/chefs-table/TestimonialsV2Block";
import ReservationInfoBlock from "@/app/blocks/chefs-table/ReservationInfoBlock";

// Data
import {
	HeroInnerChefsTableData,
	experienceIntroData,
	courseTimelineData,
	chefPhilosophyData,
	seasonalPhilosophyData,
	testimonialsV2Data,
	reservationInfoData,
} from "@/app/hooks/data-chefs-table";

const ChefsTablePage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerChefsTableData.title}
				image={HeroInnerChefsTableData.image}
				altText={HeroInnerChefsTableData.altText}
				breadcrumbs={HeroInnerChefsTableData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Experience Introduction - Block */}
			<ExperienceIntroBlock {...experienceIntroData} />
			{/* /Experience Introduction - Block */}

			{/* Course Timeline - Block */}
			<CourseTimelineBlock {...courseTimelineData} />
			{/* /Course Timeline - Block */}

			{/* Chef Philosophy - Block */}
			<ChefPhilosophyBlock {...chefPhilosophyData} />
			{/* /Chef Philosophy - Block */}

			{/* Seasonal Philosophy - Block */}
			<SeasonalPhilosophyBlock {...seasonalPhilosophyData} />
			{/* /Seasonal Philosophy - Block */}

			{/* Testimonials V2 - Block */}
			<TestimonialsV2Block {...testimonialsV2Data} />
			{/* /Testimonials V2 - Block */}

			{/* Reservation Info - Block */}
			<ReservationInfoBlock {...reservationInfoData} />
			{/* /Reservation Info - Block */}
		</>
	);
};

export default ChefsTablePage;
