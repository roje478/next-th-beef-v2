import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CommentItemProps } from '@/app/types/common.types';

const CommentItem: React.FC<CommentItemProps> = ({ comment, isReply = false }) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <div className="comments-item">
            {/* Comment Header */}
            <div className="comments-item__header">
                {/* Avatar */}
                <div className="comments-item__avatar">
                    <Image
                        src={comment.avatar || '/blog/avatar.jpg'}
                        alt={comment.name}
                        width={80}
                        height={80}
                    />
                </div>
                {/*/ Avatar */}

                {/* Comment Content */}
                <div className="comments-item__content">
                    <h5 className="comments-item__name">{comment.name}</h5>
                    <p className="comments-item__date">{formatDate(comment.date)}</p>
                </div>
                {/*/ Comment Content */}
            </div>
            {/*/ Comment Header */}

            {/* Comment Info */}
            <div className="comments-item__info">
                <p className="comments-item__text">{comment.content}</p>
                {!isReply && (
                    <div className="comments-item__reply">
                        <Link
                            href="#comment-form"
                            className="text-calico-500 hover:text-coarseWool-300 transition-colors duration-300 flex items-center gap-2"
                        >
                            <i className="fa-solid fa-reply" aria-hidden="true"></i>
                            Reply
                        </Link>
                    </div>
                )}
            </div>
            {/*/ Comment Info */}

            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
                <div className="comments-list children">
                    {comment.replies.map((reply) => (
                        <CommentItem key={reply.id} comment={reply} isReply={true} />
                    ))}
                </div>
            )}
            {/*/ Replies */}
        </div>
    );
};

export default CommentItem;
