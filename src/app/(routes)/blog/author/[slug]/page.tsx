import HeroInner from '@/app/components/common/hero-inner/Hero-inner';
import { BlogListData, BlogCategoriesData, BlogTagsData, BlogSidebarData } from '@/app/hooks/data-blog';
import { BlogGrid, BlogSidebar } from '@/app/blocks/blog';

interface AuthorPageProps {
    params: {
        slug: string;
    };
}

const AuthorPage = ({ params }: AuthorPageProps) => {
    const { slug } = params;

    // Filter posts by author
    const filteredPosts = BlogListData.filter(
        (post) => post.authorSlug === slug
    );

    // Get author name from the first post
    const authorName = filteredPosts.length > 0 
        ? filteredPosts[0].author 
        : slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

    // Get recent posts (limit to 3 for sidebar)
    const recentPosts = BlogListData.slice(0, 3);

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
            title: `Author: ${authorName}`,
            link: '',
        },
    ];

    return (
        <main>
            {/* Hero Inner - Block */}
            <HeroInner
                title={`Posts by ${authorName}`}
                image="/bg/bg-blog.jpg"
                altText={authorName}
                breadcrumbs={breadcrumbs}
            />
            {/* / Hero Inner - Block */}

            {/* Blog Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="blog blog__sidebar">
                        {/* Blog Posts */}
                        <div className="blog__posts">
                            <BlogGrid
                                posts={filteredPosts}
                                emptyMessage={`No posts found by ${authorName}.`}
                            />
                        </div>
                        {/* / Blog Posts */}

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
            {/* / Blog Section */}
        </main>
    );
};

// Generate static params for all authors
export async function generateStaticParams() {
    const uniqueAuthors = Array.from(
        new Set(BlogListData.map((post) => post.authorSlug))
    ).filter(Boolean);

    return uniqueAuthors.map((authorSlug) => ({
        slug: authorSlug,
    }));
}

export default AuthorPage;
