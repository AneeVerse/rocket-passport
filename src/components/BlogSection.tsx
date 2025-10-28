"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getRecentPosts, BlogPost } from '../lib/sanity';
import { urlFor } from '../sanity/lib/image';

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getRecentPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="py-16 sm:py-20 lg:py-24 bg-[#fef2f2]">
        <div className="mx-auto max-w-[1390px] px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] xl:text-[48px] font-bold text-[#1f1f1f]">
              Latest <span className="text-[#dc2626]">Blog Posts</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest passport and visa information, tips, and guides
            </p>
          </div>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 overflow-hidden animate-pulse">
                <div className="h-48 sm:h-52 bg-gray-200"></div>
                <div className="p-4 sm:p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-24 bg-[#fef2f2]">
      <div className="mx-auto max-w-[1390px] px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] xl:text-[48px] font-bold text-[#1f1f1f]">
            Latest <span className="text-[#dc2626]">Blog Posts</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest passport and visa information, tips, and guides
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post._id} className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48 sm:h-52">
                {post.mainImage?.asset ? (
                  <Image
                    src={urlFor(post.mainImage).width(400).height(250).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#dc2626] to-[#b91c1c] flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">No Image</span>
                  </div>
                )}
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  {post.readTime && (
                    <>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </>
                  )}
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                {post.excerpt && (
                  <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center text-[#dc2626] hover:text-[#b91c1c] font-medium text-sm sm:text-base transition-colors duration-200"
                >
                  Read More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && !loading && (
          <div className="text-center mt-8">
            <p className="text-gray-600">No blog posts available at the moment.</p>
          </div>
        )}

        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#dc2626] hover:bg-[#b91c1c] transition-colors duration-200"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}


