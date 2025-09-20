'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="max-w-[1400] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/website-logo.svg"
                alt="Stardom Logo"
                width={125}
                height={23}
                className="h-5 md:h-6 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                About us
              </Link>
              <Link 
                href="/resources" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Resources
              </Link>
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <button className="bg-[#027b7a] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#026968] transition-colors">
              Request Case Evolution →
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#027b7a]"
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
          <div className="px-4 py-2 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-base font-medium transition-colors rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/pricing" 
              className="block px-3 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-base font-medium transition-colors rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-base font-medium transition-colors rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </Link>
            <Link 
              href="/resources" 
              className="block px-3 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-base font-medium transition-colors rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <div className="pt-2 pb-2">
              <button 
                className="w-full bg-[#027b7a] text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-[#026968] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Case Evolution →
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
