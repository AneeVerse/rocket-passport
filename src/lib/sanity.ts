import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId } from '../sanity/env'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source)

export interface BlogPost {
  _id: string
  _updatedAt?: string
  title: string
  slug: {
    current: string
  }
  author?: {
    name: string
    image?: {
      asset: {
        _ref: string
      }
    }
  }
  mainImage?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  categories?: Array<{
    title: string
  }>
  publishedAt: string
  body: Array<{
    _type: string
    children?: Array<{
      _type: string
      text: string
    }>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }>
  excerpt?: string
  readTime?: string
  faq?: Array<{
    question: string
    answer: string
  }>
}

// GROQ queries
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author->{
    name,
    image
  },
  mainImage,
  categories[]->{
    title
  },
  publishedAt,
  body,
  excerpt,
  readTime
}`

export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  _updatedAt,
  title,
  slug,
  author->{
    name,
    image
  },
  mainImage,
  categories[]->{
    title
  },
  publishedAt,
  body,
  excerpt,
  readTime,
  faq
}`

export const recentPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  author->{
    name,
    image
  },
  mainImage,
  categories[]->{
    title
  },
  publishedAt,
  body,
  excerpt,
  readTime
}`

// Fetch functions
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    return await client.fetch(postsQuery)
  } catch (error: unknown) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return await client.fetch(postQuery, { slug })
  } catch (error: unknown) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function getRecentPosts(): Promise<BlogPost[]> {
  try {
    return await client.fetch(recentPostsQuery)
  } catch (error: unknown) {
    console.error('Error fetching recent posts:', error)
    return []
  }
}