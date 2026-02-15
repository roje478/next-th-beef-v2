import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import HeroInner from '@/app/components/common/hero-inner/Hero-inner';
import {
    BlogListData,
    BlogCategoriesData,
    BlogTagsData,
    BlogSidebarData,
} from '@/app/hooks/data-blog';
import {
    BlogSidebar,
    RelatedPosts,
    SocialShare,
    CommentsList,
    CommentForm,
} from '@/app/blocks/blog';
import Divider from '@/app/components/common/divider/divider';

interface BlogDetailPageProps {
    params: {
        slug: string;
    };
}

const BlogDetailPage = ({ params }: BlogDetailPageProps) => {
    const { slug } = params;

    // Find the post
    const post = BlogListData.find((p) => p.slug === slug);

    // If post not found, return 404
    if (!post) {
        notFound();
    }

    // Parse the date
    const dateObj = new Date(post.date);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = dateObj.toLocaleString('en-US', { month: '2-digit' });
    const year = dateObj.getFullYear().toString().slice(-2);

    // Get recent posts (limit to 3 for sidebar)
    const recentPosts = BlogListData.filter((p) => p.id !== post.id).slice(0, 3);

    // Get related posts (posts with similar categories)
    const relatedPosts = BlogListData.filter(
        (p) =>
            p.id !== post.id &&
            p.category.some((cat) => post.category.includes(cat))
    ).slice(0, 3);

    // Breadcrumbs data
    const breadcrumbs = [
        {
            id: 1,
            title: 'Home',
            link: '/',
        },
        {
            id: 2,
            title: 'Blog',
            link: '/blog',
        },
        {
            id: 3,
            title: post.title,
            link: '',
        },
    ];

    return (
        <main className="blog-details">
            {/* Hero Inner - Block */}
            <HeroInner
                title={post.title}
                image={post.image}
                altText={post.title}
                breadcrumbs={breadcrumbs}
            />
            {/* / Hero Inner - Block */}

            {/* Blog Details Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="blog blog__sidebar">
                        {/* Post Details */}
                        <div className="post__details">
                            {/* Post Info */}
                            <div className="post__details-info">
                                {/* post date */}
                                <div className="post__date">
                                    <span className="day">{day}</span>
                                    <span className="month">{month}</span>
                                    <span className="year">{year}</span>
                                </div>
                                {/*/ post date */}

                                {/* post category */}
                                {post.category && post.category.length > 0 && (
                                    <div className="post__category">
                                        {post.category.map((cat, idx) => (
                                            <Link
                                                key={idx}
                                                href={`/blog/category/${post.categorySlug?.[idx] || cat.toLowerCase().replace(/\s+/g, '-')}`}
                                            >
                                                {cat}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                                {/*/ post category */}

                                {/* post author */}
                                <h4 className="post__author">
                                    By:{' '}
                                    <Link
                                        href={`/blog/author/${post.authorSlug || post.author.toLowerCase().replace(/\s+/g, '-')}`}
                                    >
                                        {post.author}
                                    </Link>
                                </h4>
                                {/*/ post author */}
                            </div>
                            {/*/ Post Info */}

                            {/* Post Content */}
                            <div className="post__details-text">
                                <p className="text-coarseWool-200 text-lg mb-6">
                                    {post.excerpt}
                                </p>

                                <p className="text-coarseWool-300 mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <p className="text-coarseWool-300 mb-6">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum.
                                </p>

                                <h3 className="text-title-4 text-coarseWool-100 mb-4 mt-8">
                                    Key Ingredients
                                </h3>

                                <p className="text-coarseWool-300 mb-6">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi architecto beatae vitae
                                    dicta sunt explicabo.
                                </p>

                                <ul className="list-disc list-inside text-coarseWool-300 mb-6 space-y-2">
                                    <li>Fresh ingredients from local markets</li>
                                    <li>Organic herbs and spices</li>
                                    <li>Premium quality meat or vegetables</li>
                                    <li>Extra virgin olive oil</li>
                                </ul>

                                <h3 className="text-title-4 text-coarseWool-100 mb-4 mt-8">
                                    Preparation Method
                                </h3>

                                <p className="text-coarseWool-300 mb-6">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                    aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt.
                                </p>

                                <p className="text-coarseWool-300 mb-6">
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia non numquam eius modi
                                    tempora incidunt ut labore et dolore magnam aliquam quaerat
                                    voluptatem.
                                </p>
                            </div>
                            {/*/ Post Content */}

                            {/* Divider */}
                            <Divider />
                            {/*/ Divider */}

                            {/* Post Tags */}
                            {post.tags && post.tags.length > 0 && (
                                <div className="post__tags mb-8">
                                    <h4 className="text-title-5 text-coarseWool-100 mb-4">Tags:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <Link
                                                key={tag}
                                                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="text-sm text-coarseWool-100 bg-coarseWool-800 hover:bg-calico-500 hover:text-coarseWool-900 py-2 px-4 transition-colors duration-300"
                                            >
                                                {tag}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {/*/ Post Tags */}

                            {/* Social Share */}
                            <div className="post__share mb-8">
                                <h4 className="text-title-5 text-coarseWool-100 mb-4">
                                    Share this post:
                                </h4>
                                <div className="post__share-icons">
                                    <SocialShare title={post.title} />
                                </div>
                            </div>
                            {/*/ Social Share */}

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <RelatedPosts posts={relatedPosts} title="Related Posts" />
                            )}
                            {/*/ Related Posts */}

                            {/* Comments Section */}
                            {post.commentsList && post.commentsList.length > 0 && (
                                <CommentsList
                                    comments={post.commentsList}
                                    title={`Comments (${post.commentsCount || post.commentsList.length})`}
                                />
                            )}
                            {/*/ Comments Section */}

                            {/* Comment Form */}
                            <CommentForm postId={post.id} />
                            {/*/ Comment Form */}
                        </div>
                        {/* / Post Details */}

                        {/* Blog Sidebar */}
                        <BlogSidebar
                            recentPosts={recentPosts}
                            categories={BlogCategoriesData}
                            tags={BlogTagsData}
                            searchPlaceholder={BlogSidebarData.searchPlaceholder}
                            searchButtonLabel={BlogSidebarData.searchButtonLabel}
                        />
                        {/* / Blog Sidebar */}
                    </div>
                </div>
            </section>
            {/* / Blog Details Section */}
        </main>
    );
};

// Generate static params for all posts
export async function generateStaticParams() {
    return BlogListData.map((post) => ({
        slug: post.slug,
    }));
}

export default BlogDetailPage;
