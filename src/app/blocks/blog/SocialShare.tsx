'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { SocialShareProps } from '@/app/types/common.types';

const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
	const [currentUrl, setCurrentUrl] = useState(url || '');
	const shareTitle = title || 'Check out this post!';

	useEffect(() => {
		if (!url && typeof window !== 'undefined') {
			setCurrentUrl(window.location.href);
		}
	}, [url]);

	const socialLinks = [
		{
			name: 'Facebook',
			icon: FaFacebookF,
			url: currentUrl
				? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
				: 'https://www.facebook.com',
			ariaLabel: 'Share on Facebook',
		},
		{
			name: 'Twitter',
			icon: FaXTwitter,
			url: currentUrl
				? `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`
				: 'https://www.twitter.com',
			ariaLabel: 'Share on Twitter',
		},
		{
			name: 'Instagram',
			icon: FaInstagram,
			url: 'https://www.instagram.com',
			ariaLabel: 'Share on Instagram',
		},
	];

	return (
		<ul className="social_icons">
			{socialLinks.map((social) => {
				const IconComponent = social.icon;
				return (
					<li key={social.name}>
						<Link
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={social.ariaLabel}
						>
							<IconComponent aria-hidden="true" />
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default SocialShare;
