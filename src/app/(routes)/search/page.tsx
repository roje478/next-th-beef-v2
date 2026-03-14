import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { SearchResultsBlock } from "@/app/blocks/search";
import { HeroInnerSearchData } from "@/app/hooks/data-search";

const SearchPage = () => {
	return (
		<>
			{/* Hero Inner - Block */}
			<HeroInnerBlock
				title={HeroInnerSearchData.title}
				image={HeroInnerSearchData.image}
				altText={HeroInnerSearchData.altText}
				breadcrumbs={HeroInnerSearchData.breadcrumbs}
			/>
			{/* /Hero Inner - Block */}

			{/* Search Results */}
			<SearchResultsBlock />
			{/* /Search Results */}
		</>
	);
};

export default SearchPage;
