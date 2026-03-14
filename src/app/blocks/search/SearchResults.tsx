"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
	SearchResultsData,
	SearchFilters,
	type SearchResult,
} from "@/app/hooks/data-search";
import Pagination from "@/app/components/common/pagination/Pagination";

const SearchResultsBlock = () => {
	const [activeFilter, setActiveFilter] = useState("All");
	const results = SearchResultsData;
	const query = "steak";

	return (
		<section className="search-results">
			<div className="container">
				{/* Search Form */}
				<form
					role="search"
					className="search-form search-form--hero"
					action="/search"
					method="get"
				>
					<div className="search-form__input-group">
						<i
							className="fa-solid fa-magnifying-glass search-form__icon"
							aria-hidden="true"
						></i>
						<input
							type="search"
							className="search-form__input"
							name="q"
							defaultValue={query}
							placeholder="Search for dishes, recipes, articles..."
							aria-label="Search"
						/>
						<button type="submit" className="search-form__submit">
							Search
						</button>
					</div>
				</form>
				{/* /Search Form */}

				{/* Results Header */}
				<div className="search-results__header">
					<p className="search-results__meta">
						Found <strong>{results.length} results</strong> for
						&lsquo;<strong>{query}</strong>&rsquo;
					</p>
				</div>
				{/* /Results Header */}

				{/* Filter Buttons */}
				<div className="search-results__filters">
					<span className="search-results__filter-label">
						Filter by:
					</span>
					{SearchFilters.map((filter) => (
						<button
							key={filter}
							className={`search-results__filter-btn${activeFilter === filter ? " search-results__filter-btn--active" : ""}`}
							aria-pressed={activeFilter === filter}
							onClick={() => setActiveFilter(filter)}
						>
							{filter}
						</button>
					))}
				</div>
				{/* /Filter Buttons */}

				{/* Results List */}
				<div className="search-results__list">
					{results.map((result: SearchResult, index: number) => (
						<motion.article
							key={result.id}
							className="search-result"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
						>
							<span className="search-result__category">
								{result.category}
							</span>
							<h2 className="search-result__title">
								<Link
									href={result.link}
									dangerouslySetInnerHTML={{
										__html: result.titleHighlighted,
									}}
								/>
							</h2>
							<p
								className="search-result__excerpt"
								dangerouslySetInnerHTML={{
									__html: result.excerpt,
								}}
							/>
							<div className="search-result__meta">
								{result.meta.map((item, i) => (
									<span
										key={i}
										className="search-result__meta-item"
									>
										<i
											className={item.icon}
											aria-hidden="true"
										></i>
										<span>{item.label}</span>
									</span>
								))}
							</div>
							<Link
								href={result.link}
								className="btn-link"
							>
								{result.linkLabel}
							</Link>
						</motion.article>
					))}
				</div>
				{/* /Results List */}

				{/* Pagination */}
				<Pagination
					currentPage={1}
					totalPages={3}
					baseUrl="/search?q=steak"
				/>
				{/* /Pagination */}
			</div>
		</section>
	);
};

export default SearchResultsBlock;
