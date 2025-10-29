/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { getPostBySlug } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer.jsx'
import SubscribeForm from '../../../components/SubscribeForm'
import FAQComponent from '../../../components/FAQComponent'
import BlogSchema from '@/components/seo/BlogSchema'
import WebPageSchema from '@/components/seo/WebPageSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

// Define custom components for PortableText with red theme
const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Blog image'}
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-red-600 pl-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-l-3 border-red-400 pl-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-medium mb-3 text-gray-700 border-l-2 border-red-300 pl-2">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="mb-6 text-gray-600 leading-relaxed text-lg">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-6 text-gray-600 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-6 text-gray-600 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="ml-4">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="ml-4">{children}</li>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-red-600 hover:text-red-700 underline font-medium">
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
  },
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Blog post not found</h1>
            <p className="mt-4 text-gray-600">The blog post you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogSchema 
        title={post.title}
        description={post.excerpt || post.title}
        slug={post.slug.current}
        author={{
          name: post.author?.name || "Rocket Pass Team",
          image: post.author?.image ? urlFor(post.author.image).url() : undefined
        }}
        publishedAt={post.publishedAt}
        updatedAt={post._updatedAt}
        mainImage={post.mainImage ? urlFor(post.mainImage).url() : undefined}
        categories={post.categories?.map(cat => cat.title)}
        excerpt={post.excerpt}
      />
      <WebPageSchema />
      <BreadcrumbSchema />
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-8 xl:col-span-9">
            {/* Blog Meta */}
            <div className="mb-8">
              {/* Featured Image */}
              {post.mainImage && (
                <div className="relative w-full h-[280px] md:h-[420px] mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Red gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent"></div>
                </div>
              )}

              {/* Date and Reading Time */}
              <div className="flex items-center text-[14px] mb-3 text-gray-500">
                <svg className="w-4 h-4 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>Posted on {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>

              {/* Author and Categories */}
              <div className="flex flex-wrap gap-3 items-center text-sm">
                {post.author && (
                  <div className="flex items-center text-gray-600">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                      {post.author.image?.asset ? (
                        <Image
                          src={urlFor(post.author.image).width(32).height(32).url()}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-red-100 flex items-center justify-center">
                          <span className="text-red-600 font-semibold text-xs">
                            {post.author.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <span>By {post.author.name}</span>
                  </div>
                )}
                {post.categories?.map((category: any) => (
                  <span key={category.title} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                    {category.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Blog Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-red-600 prose-strong:text-gray-900">
                <PortableText value={post.body} components={components} />
              </div>
              
              {/* FAQ Section */}
              {post.faq && post.faq.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <FAQComponent faqs={post.faq} />
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-24 space-y-8">
              {/* Subscribe Form */}
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}