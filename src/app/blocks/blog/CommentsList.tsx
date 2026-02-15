import React from 'react';
import { CommentsListProps } from '@/app/types/common.types';
import CommentItem from './CommentItem';

const CommentsList: React.FC<CommentsListProps> = ({
    comments,
    title = 'Comments',
}) => {
    // Early return if no comments
    if (!comments || comments.length === 0) {
        return null;
    }

    return (
        <div className="comments">
            {/* Comments Title */}
            <h3 className="comments-title text-title-3 text-coarseWool-100">
                {title}
            </h3>
            {/*/ Comments Title */}

            {/* Comments List */}
            <div className="comments-list">
                {comments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                ))}
            </div>
            {/*/ Comments List */}
        </div>
    );
};

export default CommentsList;
