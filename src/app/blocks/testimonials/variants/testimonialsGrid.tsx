"use client";
import { useState } from "react";
import Image from "next/image";
import { testimonialsPageCards } from "@/app/hooks/data-testimonials-page";

interface TestimonialCard {
	id: number;
	name: string;
	date: string;
	avatar: string;
	rating: number;
	title: string;
	content: string;
	verified: boolean;
	helpful: number;
}

interface TestimonialsGridBlockProps {
	cards?: TestimonialCard[];
	cardsPerPage?: number;
}

const ITEMS_PER_PAGE = 9;

const TestimonialsGridBlock = (props: TestimonialsGridBlockProps) => {
	const {
		cards = testimonialsPageCards,
		cardsPerPage = ITEMS_PER_PAGE,
	} = props;

	const [activeFilter, setActiveFilter] = useState("all");
	const [sortBy, setSortBy] = useState("recent");
	const [currentPage, setCurrentPage] = useState(1);

	// Filter cards
	const filteredCards = cards.filter((card) => {
		if (activeFilter === "all") return true;
		if (activeFilter === "5stars") return card.rating === 5;
		if (activeFilter === "4stars") return card.rating === 4;
		if (activeFilter === "recent") return true;
		return true;
	});

	// Sort cards
	const sortedCards = [...filteredCards].sort((a, b) => {
		if (sortBy === "rating") return b.rating - a.rating;
		if (sortBy === "helpful") return b.helpful - a.helpful;
		return 0; // recent = default order
	});

	// Pagination
	const totalPages = Math.ceil(sortedCards.length / cardsPerPage);
	const startIndex = (currentPage - 1) * cardsPerPage;
	const paginatedCards = sortedCards.slice(startIndex, startIndex + cardsPerPage);

	const handleFilterChange = (filter: string) => {
		setActiveFilter(filter);
		setCurrentPage(1);
	};

	const renderStars = (rating: number) => {
		return [...Array(5)].map((_, i) => (
			<i
				key={i}
				className={i < rating ? "fa-solid fa-star" : "fa-regular fa-star"}
				aria-hidden="true"
			></i>
		));
	};

	return (
		<section className="section-spacing">
			<div className="testimonials-content">
				{/* Filter/Sort Bar */}
				<div className="testimonials-filter">
					{/* Filter Buttons */}
					<div
						className="testimonials-filter__buttons"
						role="group"
						aria-label="Filter reviews"
					>
						<button
							className={activeFilter === "all" ? "btn btn--solid" : "btn-filter"}
							aria-pressed={activeFilter === "all"}
							aria-label="Show all reviews"
							onClick={() => handleFilterChange("all")}
						>
							All Reviews
						</button>
						<button
							className={activeFilter === "5stars" ? "btn btn--solid" : "btn-filter"}
							aria-pressed={activeFilter === "5stars"}
							aria-label="Show 5 star reviews"
							onClick={() => handleFilterChange("5stars")}
						>
							5 Stars
						</button>
						<button
							className={activeFilter === "4stars" ? "btn btn--solid" : "btn-filter"}
							aria-pressed={activeFilter === "4stars"}
							aria-label="Show 4 star reviews"
							onClick={() => handleFilterChange("4stars")}
						>
							4 Stars
						</button>
						<button
							className={activeFilter === "recent" ? "btn btn--solid" : "btn-filter"}
							aria-pressed={activeFilter === "recent"}
							aria-label="Show recent reviews"
							onClick={() => handleFilterChange("recent")}
						>
							Recent
						</button>
					</div>
					{/* Sort Dropdown */}
					<div className="testimonials-filter__sort">
						<label htmlFor="sort-reviews" className="sr-only">
							Sort reviews by
						</label>
						<select
							id="sort-reviews"
							className="input input--select"
							aria-label="Sort reviews"
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value)}
						>
							<option value="recent">Most Recent</option>
							<option value="rating">Highest Rated</option>
							<option value="helpful">Most Helpful</option>
						</select>
						<i
							className="testimonials-filter__icon fa-solid fa-chevron-down"
							aria-hidden="true"
						></i>
					</div>
				</div>

				{/* Testimonials Grid */}
				<div className="testimonials-grid">
					{paginatedCards.map((card) => (
						<article key={card.id} className="testimonial-card">
							<div className="testimonial-card__header">
								<div className="testimonial-card__avatar">
									<Image
										src={card.avatar}
										alt={card.name}
										width={56}
										height={56}
										sizes="56px"
										loading="lazy"
									/>
								</div>
								<div className="testimonial-card__author">
									<h3 className="testimonial-card__name">{card.name}</h3>
									<p className="testimonial-card__date">{card.date}</p>
								</div>
							</div>
							<div
								className="testimonial-card__rating"
								aria-label={`${card.rating} out of 5 stars`}
							>
								{renderStars(card.rating)}
							</div>
							<h4 className="testimonial-card__title">{card.title}</h4>
							<p className="testimonial-card__content">{card.content}</p>
							<div className="testimonial-card__footer">
								{card.verified && (
									<span className="testimonial-card__badge">
										<i
											className="fa-solid fa-badge-check"
											aria-hidden="true"
										></i>
										Verified Purchase
									</span>
								)}
								<span className="testimonial-card__helpful">
									<i
										className="fa-solid fa-thumbs-up"
										aria-hidden="true"
									></i>
									{card.helpful} helpful
								</span>
							</div>
						</article>
					))}
				</div>

				{/* Pagination */}
				{totalPages > 1 && (
					<nav className="pagination" aria-label="Pagination">
						<ul className="pagination">
							{/* Previous Button */}
							<li className="pagination__item pagination__item--prev">
								<button
									className={`pagination__prev${currentPage === 1 ? " pagination__link--disabled" : ""}`}
									aria-label="Previous page"
									aria-disabled={currentPage === 1}
									disabled={currentPage === 1}
									onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
								>
									<span className="pagination__sr-label">Previous</span>
								</button>
							</li>

							{/* Page Numbers */}
							{[...Array(totalPages)].map((_, i) => {
								const page = i + 1;
								const isFirst = page === 1;
								const isLast = page === totalPages;
								const isCurrent = page === currentPage;

								return (
									<li
										key={page}
										className={`pagination__item${isCurrent ? " pagination__item--current" : ""}${isFirst ? " pagination__item--first" : ""}${isLast ? " pagination__item--last" : ""}`}
									>
										{isCurrent ? (
											<span
												className="pagination__link pagination__link--active"
												aria-current="page"
												aria-label={`Current page, page ${page}`}
											>
												{page}
											</span>
										) : (
											<button
												className="pagination__link"
												aria-label={`Go to page ${page}`}
												onClick={() => setCurrentPage(page)}
											>
												{page}
											</button>
										)}
									</li>
								);
							})}

							{/* Next Button */}
							<li className="pagination__item pagination__item--next">
								<button
									className={`pagination__next${currentPage === totalPages ? " pagination__link--disabled" : ""}`}
									aria-label="Next page"
									aria-disabled={currentPage === totalPages}
									disabled={currentPage === totalPages}
									onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
								>
									<span className="pagination__sr-label">Next</span>
								</button>
							</li>
						</ul>
					</nav>
				)}
			</div>
		</section>
	);
};

export default TestimonialsGridBlock;
