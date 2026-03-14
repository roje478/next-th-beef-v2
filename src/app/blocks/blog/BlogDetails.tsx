"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/app/types/common.types";
import SocialShare from "./SocialShare";
import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm";

interface BlogDetailsProps {
	post: BlogPost;
}

const BlogDetails = ({ post }: BlogDetailsProps) => {
	const dateObj = new Date(post.date);
	const day = dateObj.getDate().toString().padStart(2, "0");
	const month = dateObj.toLocaleString("en-US", { month: "2-digit" });
	const year = dateObj.getFullYear().toString().slice(-2);

	return (
		<article className="post__details">
			<div className="post__details-wrap">
				{/* Post Info */}
				<div className="post__details-info">
					<time className="post__date" dateTime={post.date}>
						<span className="day">{day}</span>
						<span className="month">{month}</span>
						<span className="year">{year}</span>
					</time>
					<h2 className="post__author">
						By:{" "}
						<Link
							href={`/blog/author/${
								post.authorSlug ||
								post.author.toLowerCase().replace(/\s+/g, "-")
							}`}
						>
							{post.author}
						</Link>
					</h2>
					{post.category && post.category.length > 0 && (
						<div className="post__category">
							{post.category.map((cat, idx) => (
								<Link
									key={idx}
									href={`/blog/category/${
										post.categorySlug?.[idx] ||
										cat.toLowerCase().replace(/\s+/g, "-")
									}`}
								>
									{cat}
								</Link>
							))}
						</div>
					)}
				</div>
				{/* /Post Info */}

				{/* Post Body */}
				<div className="post__details-text">
					<p>
						Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet
						magna suscipit, fermentum mattis erat rutrum. Sed suscipit libero
						lectus, at ullamcorper erat feugiat eu. Nam posuere ultrices nibh ut
						sagittis. Etiam arcu turpis, elementum ac nulla vel, tristique cursus
						libero. Fusce feugiat, justo at mattis tincidunt, velit ante congue
						ante, et lacinia metus ipsum a risus. Vivamus hendrerit porta libero
						nec imperdiet. Praesent interdum nisl nec facilisis dapibus.{" "}
						<a href="#">Suspendisse sed dignissim lorem</a>. In in interdum ex,
						vitae ultricies risus. Nullam semper venenatis sapien vitae gravida.
						Nam in odio arcu.
					</p>

					<p>
						Curabitur et euismod nulla. In semper eros vel ipsum viverra
						interdum. Etiam sit amet massa consectetur, bibendum lacus at,
						fringilla urna. Nunc eros magna, venenatis sit amet iaculis vel,
						maximus ut nulla.{" "}
						<strong>Etiam varius pharetra felis quis semper</strong>. Nam
						hendrerit porta odio, vitae pulvinar quam auctor eget. Duis pretium
						faucibus lobortis.
					</p>

					<p>
						In condimentum maximus sem, eu pharetra tortor consectetur rutrum.
						Donec vel nibh nisi. Interdum et malesuada fames ac ante ipsum
						primis in faucibus. Vivamus dictum, erat quis tincidunt mollis, nibh
						tellus elementum nulla, non luctus ante lorem quis nisi. Quisque
						mollis malesuada leo, a feugiat ex aliquet vel. Aenean efficitur
						lectus ante, et suscipit nisi auctor id. Ut quis arcu quis urna
						tempor dictum sed nec dui. Integer placerat vel tellus ut viverra. In
						commodo nec lacus et pretium. Fusce quis elit neque. Vestibulum eu
						est sit amet diam aliquam efficitur.{" "}
						<a href="#">In faucibus dictum felis</a>, interdum malesuada tellus
						viverra id. Vestibulum non libero eu nisl lacinia suscipit. Phasellus
						posuere eleifend ex ut molestie. Suspendisse placerat lectus sit amet
						diam sagittis, in bibendum metus tincidunt.
					</p>

					<Image
						src={post.image}
						alt="Fresh quality ingredients arranged on wooden cutting board for cooking"
						width={800}
						height={500}
						sizes="(min-width: 1024px) 60vw, 100vw"
						loading="lazy"
					/>

					<h3>Always choose quality products for cooking</h3>
					<p>
						Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet
						magna suscipit, fermentum mattis erat rutrum. Sed suscipit libero
						lectus, at ullamcorper erat feugiat eu. Nam posuere ultrices nibh ut
						sagittis. Etiam arcu turpis, elementum ac nulla vel, tristique cursus
						libero. Fusce feugiat,{" "}
						<strong>
							justo at mattis tincidunt, velit ante congue ante, et lacinia
							metus
						</strong>{" "}
						ipsum a risus. Vivamus hendrerit porta libero nec imperdiet.
						Praesent interdum nisl nec facilisis dapibus. Suspendisse sed
						dignissim lorem. In in interdum ex, vitae ultricies risus. Nullam
						semper venenatis sapien vitae gravida. Nam in odio arcu.
					</p>
				</div>
				{/* /Post Body */}

				{/* Divider */}
				<motion.div
					className="divider div-transparent div-arrow-down"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				/>
				{/* /Divider */}

				{/* Share Icons */}
				<div className="post__share-icons">
					<SocialShare title={post.title} />
				</div>
				{/* /Share Icons */}

				{/* Author Box */}
				<div className="post__details-author">
					<div className="post__details-author__avatar">
						<Image
							src={post.authorAvatar || "/blog/author.webp"}
							alt={post.author}
							width={120}
							height={120}
							sizes="120px"
							loading="lazy"
						/>
					</div>
					<div className="post__details-author__content">
						<h3 className="post__details-author__name">
							<span>Author: </span>
							{post.author}
						</h3>
						<p>
							{post.author} is a professional chef with over 20 years of
							experience. She is the author of several cookbooks and has appeared
							on numerous TV shows. {post.author} is passionate about food and
							loves to share her knowledge with others.
						</p>
						<ul className="social_icons">
							<li>
								<a
									href="http://www.facebook.com"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Facebook"
								>
									<i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a
									href="http://www.twitter.com"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Twitter"
								>
									<i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a
									href="http://www.instagram.com"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Instagram"
								>
									<i className="fa-brands fa-instagram" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				{/* /Author Box */}

				{/* Comments */}
				<CommentsList comments={post.commentsList || []} />
				<CommentForm />
				{/* /Comments */}
			</div>
		</article>
	);
};

export default BlogDetails;
