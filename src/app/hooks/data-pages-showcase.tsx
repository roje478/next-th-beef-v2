export type PageCategory = 'All' | 'Homepages' | 'Restaurant' | 'About' | 'Blog' | 'Utility';

export interface ShowcasePage {
    id: number;
    image: string;
    altText: string;
    link: string;
    caption: string;
    category: PageCategory;
    tag?: string;
}

export const pagesShowcaseCategories: PageCategory[] = [
    'All',
    'Homepages',
    'Restaurant',
    'About',
    'Blog',
    'Utility',
];

export const pagesShowcaseData: ShowcasePage[] = [
    // Homepages
    {
        id: 1,
        image: '/sections/home-creative.jpg',
        altText: 'Creative homepage layout preview',
        link: '/home-creative',
        caption: 'Home Creative',
        category: 'Homepages',
    },
    {
        id: 2,
        image: '/sections/home-classic.jpg',
        altText: 'Classic homepage layout preview',
        link: '/home-classic',
        caption: 'Home Classic',
        category: 'Homepages',
    },
    // Restaurant
    {
        id: 3,
        image: '/sections/page-menu.jpg',
        altText: 'Menu page preview',
        link: '/menu',
        caption: 'Menu',
        category: 'Restaurant',
    },
    {
        id: 4,
        image: '/sections/page-menu-tabs.jpg',
        altText: 'Menu tabs page preview',
        link: '/menu-tabs',
        caption: 'Menu Tabs',
        category: 'Restaurant',
    },
    {
        id: 5,
        image: '/sections/page-menu-full-width.jpg',
        altText: 'Menu full width page preview',
        link: '/menu-full-width',
        caption: 'Menu Full Width',
        category: 'Restaurant',
    },
    {
        id: 16,
        image: '/sections/page-menu-category.jpg',
        altText: 'Menu category page preview',
        link: '/menu-category',
        caption: 'Menu Category',
        category: 'Restaurant',
    },
    {
        id: 17,
        image: '/sections/page-menu-details.jpg',
        altText: 'Menu details page preview',
        link: '/menu-single',
        caption: 'Menu Details',
        category: 'Restaurant',
    },
    {
        id: 6,
        image: '/sections/page-menu-sidebar.jpg',
        altText: 'Menu Sidebar page preview',
        link: '/menu-sidebar',
        caption: 'Menu Sidebar',
        category: 'Restaurant',
    },
    // About
    {
        id: 7,
        image: '/sections/page-about.jpg',
        altText: 'About Us page preview',
        link: '/about-us',
        caption: 'About Us',
        category: 'About',
    },
    {
        id: 8,
        image: '/sections/page-history.jpg',
        altText: 'History page preview',
        link: '/history',
        caption: 'History',
        category: 'About',
    },
    {
        id: 9,
        image: '/sections/page-chefs.jpg',
        altText: 'Chefs page preview',
        link: '/chefs',
        caption: 'Chefs',
        category: 'About',
    },
    {
        id: 10,
        image: '/sections/page-services.jpg',
        altText: 'Services page preview',
        link: '/services',
        caption: 'Services',
        category: 'About',
    },
    {
        id: 11,
        image: '/sections/page-contact-us.jpg',
        altText: 'Contact page preview',
        link: '/contact-us',
        caption: 'Contact',
        category: 'About',
    },
    {
        id: 31,
        image: '/sections/page-events.jpg',
        altText: 'Events page preview',
        link: '/events',
        caption: 'Events',
        category: 'About',
    },
    {
        id: 33,
        image: '/sections/page-faq.jpg',
        altText: 'FAQ page preview',
        link: '/faq',
        caption: 'FAQ',
        category: 'About',
    },
    {
        id: 34,
        image: '/sections/page-pricing.jpg',
        altText: 'Pricing page preview',
        link: '/pricing',
        caption: 'Pricing',
        category: 'About',
    },
    {
        id: 35,
        image: '/sections/page-testimonials.jpg',
        altText: 'Testimonials page preview',
        link: '/testimonials',
        caption: 'Testimonials',
        category: 'About',
    },
    // Blog
    {
        id: 12,
        image: '/sections/page-blog.jpg',
        altText: 'Blog page preview',
        link: '/blog',
        caption: 'Blog',
        category: 'Blog',
    },
    {
        id: 22,
        image: '/sections/page-blog-sidebar.jpg',
        altText: 'Blog sidebar page preview',
        link: '/blog-sidebar',
        caption: 'Blog Sidebar',
        category: 'Blog',
    },
    {
        id: 23,
        image: '/sections/page-blog-details.jpg',
        altText: 'Blog details page preview',
        link: '/blog-details',
        caption: 'Blog Details',
        category: 'Blog',
    },
];
