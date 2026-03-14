import React from "react";
import { CommentsListProps } from "@/app/types/common.types";
import CommentItem from "./CommentItem";

const CommentsList: React.FC<CommentsListProps> = ({
	comments,
	title = "Comments",
}) => {
	if (!comments || comments.length === 0) {
		return null;
	}

	return (
		<div className="comments">
			<h3 className="comments-title">{title}</h3>
			<ul className="comments-list">
				{comments.map((comment) => (
					<CommentItem key={comment.id} comment={comment} />
				))}
			</ul>
		</div>
	);
};

export default CommentsList;
