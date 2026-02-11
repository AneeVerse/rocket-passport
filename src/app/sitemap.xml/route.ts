import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../../sanity/env';

// Sanity client configuration
const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

// Configuration - Update this with your actual domain
const CONFIG = {
  baseUrl: 'https://rocket-pass.vercel.app', // Update this to your actual domain
};

// Function to fetch blog posts from Sanity
async function fetchBlogPosts() {
  try {
    const posts = await sanityClient.fetch(`
      *[_type == "post"] {
        "slug": slug.current,
        _updatedAt,
        publishedAt
      }
    `);

    return posts.map((post: { slug: string; _updatedAt?: string; publishedAt: string }) => ({
      url: `${CONFIG.baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt || post.publishedAt),
      changeFrequency: 'weekly',
      priority: 0.7
    }));
  } catch (error) {
    console.error(`Error fetching blog posts: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return [];
  }
}

// Function to fetch categories from Sanity
async function fetchCategories() {
  try {
    const categories = await sanityClient.fetch(`
      *[_type == "category"] {
        "slug": slug.current,
        _updatedAt
      }
    `);

    return categories.map((category: { slug: string; _updatedAt: string }) => ({
      url: `${CONFIG.baseUrl}/blog/category/${category.slug}`,
      lastModified: new Date(category._updatedAt),
      changeFrequency: 'weekly',
      priority: 0.6
    }));
  } catch (error) {
    console.error(`Error fetching categories: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return [];
  }
}

// Static URLs configuration
function getStaticUrls() {
  return [
    {
      url: CONFIG.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${CONFIG.baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/ppc-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}


// Function to generate sitemap XML content
function generateSitemapXML(urls: Array<{
  url: string;
  lastModified: Date;
  changeFrequency: string;
  priority: number;
}>) {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const urlEntries = urls.map(url => {
    const lastmod = url.lastModified ? url.lastModified.toISOString() : new Date().toISOString();
    const changefreq = url.changeFrequency || 'monthly';
    const priority = url.priority || 0.5;

    return `  <url>
    <loc>${url.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `${xmlHeader}
${urlsetOpen}
${urlEntries}
${urlsetClose}`;
}

// API Route Handler for sitemap.xml
export async function GET() {
  try {
    // Get static URLs
    const staticUrls = getStaticUrls();

    // Fetch dynamic content from Sanity
    const [blogPosts, categories] = await Promise.all([
      fetchBlogPosts(),
      fetchCategories()
    ]);

    // Combine all URLs
    const allUrls = [...staticUrls, ...blogPosts, ...categories];

    // Generate XML content
    const sitemapXML = generateSitemapXML(allUrls);

    // Return XML response with proper headers
    return new NextResponse(sitemapXML, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      },
    });

  } catch (error) {
    console.error(`Error generating sitemap: ${error instanceof Error ? error.message : 'Unknown error'}`);

    // Return a basic sitemap with just the homepage if there's an error
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${CONFIG.baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new NextResponse(fallbackSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300, s-maxage=300', // Cache for 5 minutes on error
      },
    });
  }
}