import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/sanity";

interface BlogCardProps {
  title: string;
  url: string;
  category?: string;
  description: string;
  imageUrl: string;
  date: string;
}

const BlogCard = ({ title, url, category, description, imageUrl, date }: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${url}`}
      className="bg-white rounded-2xl group shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-red-50"
    >
      <div className="relative overflow-hidden h-52">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 duration-300 transition-all"
        />
        {/* Red overlay on hover */}
        <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-300"></div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
            {category?.toUpperCase() || 'BLOG'}
          </p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors mb-3">
          {title}
        </h3>
        <p className="text-gray-500 mt-2 text-sm line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;