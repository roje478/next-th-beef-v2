import HeroInner from '@/app/components/common/hero-inner/Hero-inner';
import { HeroInnerBlogData } from '@/app/hooks/data';
import {
    BlogListData,
    BlogCategoriesData,
    BlogTagsData,
    BlogSidebarData,
} from '@/app/hooks/data-blog';
import { BlogGrid, BlogSidebar } from '@/app/blocks/blog';

const BlogPage = () => {
    // Get recent posts (limit to 3 for sidebar)
    const recentPosts = BlogListData.slice(0, 3);

    return (
        <main>
            {/* Hero Inner - Block */}
            <HeroInner
                title={HeroInnerBlogData.title}
                image={HeroInnerBlogData.image}
                altText={HeroInnerBlogData.altText}
                breadcrumbs={HeroInnerBlogData.breadcrumbs}
            />
            {/* / Hero Inner - Block */}

            {/* Blog Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="blog blog__sidebar">
                        {/* Blog Posts */}
                        <div className="blog__posts">
                            <BlogGrid posts={BlogListData} />
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

export default BlogPage;
