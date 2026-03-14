import Link from "next/link";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	baseUrl: string;
}

const Pagination = ({ currentPage, totalPages, baseUrl }: PaginationProps) => {
	const getPageUrl = (page: number) => {
		if (page === 1) return baseUrl;
		return `${baseUrl}?page=${page}`;
	};

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<nav className="pagination" aria-label="Search results pagination">
			<ul className="pagination">
				{/* Previous */}
				<li className="pagination__item pagination__item--prev">
					{currentPage === 1 ? (
						<span className="pagination__prev pagination__link--disabled">
							<span className="pagination__sr-label">Previous</span>
						</span>
					) : (
						<Link
							href={getPageUrl(currentPage - 1)}
							className="pagination__prev"
							aria-label="Previous page"
						>
							<span className="pagination__sr-label">Previous</span>
						</Link>
					)}
				</li>

				{/* Page numbers */}
				{pages.map((page, index) => (
					<li
						key={page}
						className={`pagination__item${
							page === currentPage
								? " pagination__item--current"
								: ""
						}${index === 0 ? " pagination__item--first" : ""}${
							index === pages.length - 1
								? " pagination__item--last"
								: ""
						}`}
					>
						{page === currentPage ? (
							<span
								className="pagination__link pagination__link--active"
								aria-current="page"
							>
								{page}
							</span>
						) : (
							<Link
								href={getPageUrl(page)}
								className="pagination__link"
								aria-label={`Go to page ${page}`}
							>
								{page}
							</Link>
						)}
					</li>
				))}

				{/* Next */}
				<li className="pagination__item pagination__item--next">
					{currentPage === totalPages ? (
						<span className="pagination__next pagination__link--disabled">
							<span className="pagination__sr-label">Next</span>
						</span>
					) : (
						<Link
							href={getPageUrl(currentPage + 1)}
							className="pagination__next"
							aria-label="Next page"
						>
							<span className="pagination__sr-label">Next</span>
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
