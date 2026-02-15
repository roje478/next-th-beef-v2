import HeroInner from '@/app/components/common/hero-inner/Hero-inner';
import { BlogListData, BlogCategoriesData, BlogTagsData, BlogSidebarData } from '@/app/hooks/data-blog';
import { BlogGrid, BlogSidebar } from '@/app/blocks/blog';

interface CategoryPageProps {
    params: {
        slug: string;
    };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
    const { slug } = params;

    // Find the category
    const category = BlogCategoriesData.find((cat) => cat.slug === slug);
    const categoryName = category?.name || 'Category';

    // Filter posts by category
    const filteredPosts = BlogListData.filter((post) =>
        post.categorySlug?.includes(slug)
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
            title: categoryName,
            link: '',
        },
    ];

    return (
        <main>
            {/* Hero Inner - Block */}
            <HeroInner
                title={`Category: ${categoryName}`}
                image="/bg/bg-blog.jpg"
                altText={categoryName}
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
                                emptyMessage={`No posts found in ${categoryName} category.`}
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

// Generate static params for all categories
export async function generateStaticParams() {
    return BlogCategoriesData.map((category) => ({
        slug: category.slug,
    }));
}

export default CategoryPage;
