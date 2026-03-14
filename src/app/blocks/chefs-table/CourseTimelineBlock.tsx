"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Course {
	id: number;
	number: string;
	name: string;
	description: string;
	pairing: string;
	image: string;
}

interface CourseTimelineBlockProps {
	subtitle: string;
	title: string;
	description: string;
	courses: Course[];
}

const CourseTimelineBlock = ({
	subtitle,
	title,
	description,
	courses,
}: CourseTimelineBlockProps) => {
	return (
		<section className="section-spacing bg-coarseWool-700">
			<div className="container-padding">
				{/* Section Title */}
				<motion.div
					className="section-title section-title__center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<p className="section-title__subtitle">{subtitle}</p>
					<h2 className="section-title__title">{title}</h2>
					<p className="max-w-content mx-auto">{description}</p>
				</motion.div>
				{/* /Section Title */}

				{/* Divider */}
				<motion.div
					className="divider div-transparent div-arrow-down"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				/>
				{/* /Divider */}

				{/* Course Timeline */}
				<motion.div
					className="course-timeline"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="course-timeline__list">
						{courses.map((course) => (
							<article key={course.id} className="course-timeline__item">
								<div className="course-timeline__card">
									<div className="course-timeline__image">
										<Image
											src={course.image}
											alt={course.name}
											width={400}
											height={300}
											loading="lazy"
										/>
									</div>
									<div className="course-timeline__content">
										<p className="course-timeline__number">{course.number}</p>
										<h3 className="course-timeline__name">{course.name}</h3>
										<p className="course-timeline__description">
											{course.description}
										</p>
										<div className="course-timeline__pairing">
											<i
												className="fa-solid fa-wine-glass icon"
												aria-hidden="true"
											></i>
											<span className="text">{course.pairing}</span>
										</div>
									</div>
								</div>
							</article>
						))}
					</div>
				</motion.div>
				{/* /Course Timeline */}
			</div>
		</section>
	);
};

CourseTimelineBlock.displayName = "CourseTimelineBlock";
export default CourseTimelineBlock;
