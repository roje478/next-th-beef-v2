import { BlogPost } from '@/app/types/common.types';

export const BlogListData: BlogPost[] = [
    {
        id: 1,
        title: 'Stuffed Lamb with Spinach and Pine Nuts Recipe',
        slug: 'stuffed-lamb-with-spinach-and-pine-nuts-recipe',
        image: '/blog/blog-1.webp',
        description:
            'The restaurant is an organic space reflective of nature inspired cuisine.',
        excerpt:
            'Personal branding remains one of the best methods for increasing the visibility of a single professional or entrepreneur. possible services in the best possible way and reachable by everyone...',
        author: 'Samanta Olson',
        authorSlug: 'samanta-olson',
        authorAvatar: '/blog/author.webp',
        date: '2023-09-12',
        category: ['Recipes', 'Cakes'],
        categorySlug: ['recipes', 'cakes'],
        tags: ['Lamb', 'Dinner', 'Gourmet'],
        commentsCount: 3,
        commentsList: [
            {
                id: 1,
                name: 'Samanta Olson',
                date: '2022-12-30',
                avatar: '/blog/avatar.webp',
                content:
                    'Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum. Sed suscipit libero lectus, at ullamcorper erat feugiat eu. Nam posuere ultrices nibh ut sagittis. Etiam arcu turpis, elementum ac nulla vel, tristique cursus libero. Fusce feugiat, justo at mattis tincidunt, velit ante congue ante, et lacinia metus ipsum a risus. Vivamus hendrerit porta libero nec imperdiet.',
                replies: [
                    {
                        id: 1,
                        name: 'Samanta Olson',
                        date: '2022-12-30',
                        avatar: '/blog/avatar.webp',
                        content:
                            'Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum. Sed suscipit libero lectus, at ullamcorper erat feugiat eu. Nam posuere ultrices nibh ut sagittis.',
                    },
                ],
            },
            {
                id: 2,
                name: 'Samanta Olson',
                date: '2022-12-30',
                avatar: '/blog/avatar.webp',
                content:
                    'Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum. Sed suscipit libero lectus, at ullamcorper erat feugiat eu.',
                replies: [],
            },
        ],
        views: 100,
        likes: 100,
        shares: 100,
    },
    {
        id: 2,
        title: 'The Art of Perfect Grilled Steak',
        slug: 'the-art-of-perfect-grilled-steak',
        image: '/blog/blog-2.webp',
        description:
            'Master the techniques for achieving restaurant-quality steak at home.',
        excerpt:
            'Personal branding remains one of the best methods for increasing the visibility of a single professional or entrepreneur. possible services in the best possible way and reachable by everyone...',
        author: 'Samanta Olson',
        authorSlug: 'samanta-olson',
        authorAvatar: '/blog/author.webp',
        date: '2023-09-12',
        category: ['Recipes', 'Meat'],
        categorySlug: ['recipes', 'meat'],
        tags: ['Steak', 'Grilling', 'BBQ'],
        commentsCount: 2,
        commentsList: [],
        views: 85,
        likes: 92,
        shares: 45,
    },
    {
        id: 3,
        title: 'Traditional Italian Pasta Carbonara',
        slug: 'traditional-italian-pasta-carbonara',
        image: '/blog/blog-3.webp',
        description:
            'Learn the authentic way to prepare this classic Roman dish.',
        excerpt:
            'Personal branding remains one of the best methods for increasing the visibility of a single professional or entrepreneur. possible services in the best possible way and reachable by everyone...',
        author: 'Samanta Olson',
        authorSlug: 'samanta-olson',
        authorAvatar: '/blog/author.webp',
        date: '2023-09-12',
        category: ['Recipes', 'Italian'],
        categorySlug: ['recipes', 'italian'],
        tags: ['Pasta', 'Italian', 'Classic'],
        commentsCount: 5,
        commentsList: [],
        views: 120,
        likes: 110,
        shares: 60,
    },
    {
        id: 4,
        title: 'Decadent Chocolate Lava Cake',
        slug: 'decadent-chocolate-lava-cake',
        image: '/blog/blog-4.webp',
        description:
            'Indulge in this rich and gooey chocolate dessert.',
        excerpt:
            'Personal branding remains one of the best methods for increasing the visibility of a single professional or entrepreneur. possible services in the best possible way and reachable by everyone...',
        author: 'Samanta Olson',
        authorSlug: 'samanta-olson',
        authorAvatar: '/blog/author.webp',
        date: '2023-09-12',
        category: ['Recipes', 'Desserts'],
        categorySlug: ['recipes', 'desserts'],
        tags: ['Chocolate', 'Dessert', 'Sweet'],
        commentsCount: 0,
        commentsList: [],
        views: 95,
        likes: 105,
        shares: 55,
    },
];

export const BlogCategoriesData = [
    { name: 'Recipes', slug: 'recipes', count: 4 },
    { name: 'Cakes', slug: 'cakes', count: 1 },
    { name: 'Meat', slug: 'meat', count: 1 },
    { name: 'Italian', slug: 'italian', count: 1 },
    { name: 'Desserts', slug: 'desserts', count: 1 },
];

export const BlogTagsData = [
    'Lamb',
    'Dinner',
    'Gourmet',
    'Steak',
    'Grilling',
    'BBQ',
    'Pasta',
    'Italian',
    'Classic',
    'Chocolate',
    'Dessert',
    'Sweet',
];

export const BlogSidebarData = {
    searchPlaceholder: 'Search...',
    searchButtonLabel: 'Search',
};
