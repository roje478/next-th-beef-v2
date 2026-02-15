'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import HeroInner from '@/app/components/common/hero-inner/Hero-inner';
import {
    BlogListData,
    BlogCategoriesData,
    BlogTagsData,
    BlogSidebarData,
} from '@/app/hooks/data-blog';
import { BlogGrid, BlogSidebar } from '@/app/blocks/blog';

const SearchContent = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    // Filter posts based on search query
    const filteredPosts = query
        ? BlogListData.filter((post) => {
              const searchLower = query.toLowerCase();
              return (
                  post.title.toLowerCase().includes(searchLower) ||
                  post.excerpt.toLowerCase().includes(searchLower) ||
                  post.description.toLowerCase().includes(searchLower) ||
                  post.author.toLowerCase().includes(searchLower) ||
                  post.category.some((cat) =>
                      cat.toLowerCase().includes(searchLower)
                  ) ||
                  post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
              );
          })
        : BlogListData;

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
            title: 'Search Results',
            link: '',
        },
    ];

    return (
        <main>
            {/* Hero Inner - Block */}
            <HeroInner
                title={query ? `Search Results for "${query}"` : 'Search'}
                image="/bg/bg-blog.jpg"
                altText="Search Results"
                breadcrumbs={breadcrumbs}
            />
            {/* / Hero Inner - Block */}

            {/* Blog Section */}
            <section className="section-padding">
                <div className="container">
                    {/* Search Info */}
                    {query && (
                        <div className="mb-8">
                            <p className="text-coarseWool-300 text-lg">
                                {filteredPosts.length > 0
                                    ? `Found ${filteredPosts.length} ${
                                          filteredPosts.length === 1 ? 'post' : 'posts'
                                      } for "${query}"`
                                    : `No posts found for "${query}"`}
                            </p>
                        </div>
                    )}
                    {/*/ Search Info */}

                    <div className="blog blog__sidebar">
                        {/* Blog Posts */}
                        <div className="blog__posts">
                            <BlogGrid
                                posts={filteredPosts}
                                emptyMessage={
                                    query
                                        ? `No posts found for "${query}". Try a different search term.`
                                        : 'Enter a search term to find posts.'
                                }
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

const SearchPage = () => {
    return (
        <Suspense
            fallback={
                <main>
                    <HeroInner
                        title="Search"
                        image="/bg/bg-blog.jpg"
                        altText="Search Results"
                        breadcrumbs={[
                            { id: 1, title: 'Home', link: '/' },
                            { id: 2, title: 'Blog', link: '/blog' },
                            { id: 3, title: 'Search Results', link: '' },
                        ]}
                    />
                    <section className="section-padding">
                        <div className="container">
                            <div className="text-center text-coarseWool-300">
                                Loading...
                            </div>
                        </div>
                    </section>
                </main>
            }
        >
            <SearchContent />
        </Suspense>
    );
};

export default SearchPage;
