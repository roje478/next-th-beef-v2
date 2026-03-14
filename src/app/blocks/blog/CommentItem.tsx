import React from "react";
import Image from "next/image";
import { CommentItemProps } from "@/app/types/common.types";

const CommentItem: React.FC<CommentItemProps> = ({ comment, isReply = false }) => {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	};

	return (
		<li className="comments-item">
			<div className="comments-item__header">
				<div className="comments-item__avatar">
					<Image
						src={comment.avatar || "/blog/avatar.webp"}
						alt={comment.name}
						width={80}
						height={80}
						sizes="80px"
						loading="lazy"
					/>
				</div>
				<div className="comments-item__info">
					<h4 className="comments-item__name">{comment.name}</h4>
					<p className="comments-item__date">{formatDate(comment.date)}</p>
					{!isReply && (
						<a href="#comment-form" className="comments-item__reply" aria-label="Reply">
							<i className="fa-regular fa-comment-dots"></i>
						</a>
					)}
				</div>
			</div>
			<div className="comments-item__content">
				<p className="comments-item__text">{comment.content}</p>
			</div>

			{/* Replies */}
			{comment.replies && comment.replies.length > 0 && (
				<ul className="comments-list children">
					{comment.replies.map((reply) => (
						<CommentItem key={reply.id} comment={reply} isReply={true} />
					))}
				</ul>
			)}
		</li>
	);
};

export default CommentItem;
