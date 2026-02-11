import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 - Page Not Found | Rocket Pass",
    description: "The page you are looking for does not exist. Return to Rocket Pass for passport and visa services.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fef2f2] px-4">
            <div className="max-w-md w-full text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-9xl font-extrabold text-[#dc2626]">404</h1>
                    <h2 className="text-3xl font-bold text-gray-900">Page Not Found</h2>
                    <p className="text-gray-600 text-lg">
                        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
                    </p>
                </div>

                <div className="pt-6">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#dc2626] hover:bg-[#b91c1c] transition-colors md:py-4 md:text-lg md:px-10"
                    >
                        Go Back Home
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-12 text-sm text-gray-500">
                    <Link href="/blog" className="hover:text-[#dc2626] font-medium transition-colors">
                        Our Blog
                    </Link>
                    <Link href="/#services" className="hover:text-[#dc2626] font-medium transition-colors">
                        Our Services
                    </Link>
                </div>
            </div>
        </div>
    );
}
