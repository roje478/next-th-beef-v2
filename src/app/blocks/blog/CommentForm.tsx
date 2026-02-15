'use client';

import React, { useState } from 'react';
import { CommentFormProps } from '@/app/types/common.types';

const CommentForm: React.FC<CommentFormProps> = ({
    postId,
    onSubmitSuccess,
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        // Simulate API call
        setTimeout(() => {
            console.log('Comment submitted:', { ...formData, postId });
            setSubmitMessage('Thank you! Your comment has been submitted successfully.');
            setFormData({ name: '', email: '', comment: '' });
            setIsSubmitting(false);

            if (onSubmitSuccess) {
                onSubmitSuccess();
            }

            // Clear message after 5 seconds
            setTimeout(() => setSubmitMessage(''), 5000);
        }, 1000);
    };

    return (
        <div className="comments__form" id="comment-form">
            {/* Form Title */}
            <h3 className="comments-title text-title-3 text-coarseWool-100 mb-6">
                Post a comment
            </h3>
            {/*/ Form Title */}

            {/* Success Message */}
            {submitMessage && (
                <div className="bg-green-600 text-white p-4 rounded mb-6">
                    {submitMessage}
                </div>
            )}
            {/*/ Success Message */}

            {/* Form */}
            <form onSubmit={handleSubmit} className="form">
                <div className="form_row grid grid-cols-12 gap-6">
                    {/* Name Field */}
                    <div className="form_field__name">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="w-full p-4 bg-coarseWool-800 text-coarseWool-100 border border-coarseWool-600 rounded focus:outline-none focus:border-calico-500 transition-colors duration-300"
                        />
                    </div>
                    {/*/ Name Field */}

                    {/* Email Field */}
                    <div className="form_field__email col-span-12 lg:col-span-6">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="w-full p-4 bg-coarseWool-800 text-coarseWool-100 border border-coarseWool-600 rounded focus:outline-none focus:border-calico-500 transition-colors duration-300"
                        />
                    </div>
                    {/*/ Email Field */}

                    {/* Comment Field */}
                    <div className="col-span-12">
                        <textarea
                            name="comment"
                            placeholder="Comments"
                            rows={6}
                            value={formData.comment}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="w-full p-4 bg-coarseWool-800 text-coarseWool-100 border border-coarseWool-600 rounded focus:outline-none focus:border-calico-500 transition-colors duration-300 resize-vertical"
                        ></textarea>
                    </div>
                    {/*/ Comment Field */}

                    {/* Submit Button */}
                    <div className="col-span-12 flex justify-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn__primary px-12 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                    {/*/ Submit Button */}
                </div>
            </form>
            {/*/ Form */}
        </div>
    );
};

export default CommentForm;
