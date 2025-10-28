"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, BlogPost } from '../../lib/sanity';
import { urlFor } from '../../sanity/lib/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer.jsx';
import BlogCard from '../../components/BlogCard';
import SubscribeForm from '../../components/SubscribeForm';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getAllPosts();
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
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Blog</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover insights, tips, and stories from our experts
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts Column - Takes 3/4 width on large screens */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse border border-red-50">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-6 bg-gray-200 rounded mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscribe Form Column - Takes 1/4 width on large screens */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 h-fit">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-50 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-10 bg-gray-200 rounded"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Blog</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover insights, tips, and stories from our experts
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {posts.length === 0 ? (
          <div className="flex justify-center items-center h-screen">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-xl text-gray-600">No blog posts found</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts Column - Takes 3/4 width on large screens */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <BlogCard
                    key={post._id}
                    title={post.title}
                    url={post.slug.current}
                    category={post.categories?.[0]?.title}
                    description={post.excerpt || 'No description available'}
                    imageUrl={post.mainImage ? urlFor(post.mainImage).url() : '/images/blog/default-blog.jpg'}
                    date={new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  />
                ))}
              </div>
            </div>

            {/* Subscribe Form Column - Takes 1/4 width on large screens */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 h-fit">
                <SubscribeForm />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}