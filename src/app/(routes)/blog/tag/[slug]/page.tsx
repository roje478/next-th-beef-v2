import HeroInner from '@/app/components/common/hero-inner/Hero-inner';
import {
    BlogListData,
    BlogCategoriesData,
    BlogTagsData,
    BlogSidebarData,
} from '@/app/hooks/data-blog';
import { BlogGrid, BlogSidebar } from '@/app/blocks/blog';

interface TagPageProps {
    params: {
        slug: string;
    };
}

const TagPage = ({ params }: TagPageProps) => {
    const { slug } = params;

    // Convert slug back to tag name (capitalize)
    const tagName = slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase());

    // Filter posts by tag
    const filteredPosts = BlogListData.filter((post) =>
        post.tags.some(
            (tag) => tag.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
        )
    );

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
            title: `Tag: ${tagName}`,
            link: '',
        },
    ];

    return (
        <main>
            {/* Hero Inner - Block */}
            <HeroInner
                title={`Tag: ${tagName}`}
                image="/bg/bg-blog.jpg"
                altText={tagName}
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
                                emptyMessage={`No posts found with tag "${tagName}".`}
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

// Generate static params for all tags
export async function generateStaticParams() {
    const uniqueTags = Array.from(
        new Set(BlogListData.flatMap((post) => post.tags))
    );

    return uniqueTags.map((tag) => ({
        slug: tag.toLowerCase().replace(/\s+/g, '-'),
    }));
}

export default TagPage;
