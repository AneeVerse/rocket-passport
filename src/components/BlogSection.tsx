"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'How to Apply for a Passport Online: A Step-by-Step Guide',
    excerpt: 'Learn the complete process of applying for a passport online, including required documents, fees, and appointment booking.',
    image: '/images/blog/blog-img1.png',
    date: 'March 15, 2024',
    readTime: '5 min read',
    slug: 'how-to-apply-passport-online'
  },
  {
    id: 2,
    title: 'Documents Required for Passport Application in India',
    excerpt: 'Complete list of documents needed for passport application, including address proof, identity proof, and other requirements.',
    image: '/images/blog/blog-img2.png',
    date: 'March 12, 2024',
    readTime: '4 min read',
    slug: 'documents-required-passport-application'
  },
  {
    id: 3,
    title: 'Passport Renewal Process: Everything You Need to Know',
    excerpt: 'Comprehensive guide on passport renewal, including eligibility criteria, required documents, and processing time.',
    image: '/images/blog/blog-img3.png',
    date: 'March 10, 2024',
    readTime: '6 min read',
    slug: 'passport-renewal-process-guide'
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1390px] px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] xl:text-[48px] font-serif font-bold text-[#1f1f1f]">
            Latest <span className="text-[#027b7a]">Blog Posts</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest passport and visa information, tips, and guides
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48 sm:h-52">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#027b7a] hover:text-[#026968] font-medium text-sm sm:text-base transition-colors duration-200"
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

        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#027b7a] hover:bg-[#026968] transition-colors duration-200"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}


