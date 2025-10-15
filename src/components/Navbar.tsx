'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Account for sticky navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1400] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/images/nav-logo1.png"
                alt="Stardom Logo"
                width={125}
                height={23}
                className="h-15 md:h-20 w-auto"
              />
            </Link>
            <div>
              <span className="text-black font-[1000] uppercase text-[20px]  -ml-4">Tatkal Passport</span>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 lg:mr-14">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-[#dc2626] px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-[#dc2626] px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              {/* <button 
                onClick={() => scrollToSection('blog')}
                className="text-gray-700 hover:text-[#dc2626] px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </button> */}
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-[#dc2626] px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#dc2626] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#b91c1c] transition-colors"
            >
              Get Free Consultation →
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-[#fef2f2] rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-[#dc2626] hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#dc2626]"
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

      {/* Mobile Menu - Full Screen Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#fef2f2] z-50 flex flex-col">
          {/* Header with logo and close button */}
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/images/nav-logo1.png"
                  alt="Stardom Logo"
                  width={125}
                  height={23}
                  className="h-15 w-auto"
                />
              </Link>
              <span className="text-black font-[1000] uppercase text-[20px] -ml-4">Tatkal Passport</span>
            </div>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-[#dc2626] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#dc2626]"
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 flex flex-col justify-center px-6 py-8">
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-4 py-4 text-gray-700 hover:text-[#dc2626] hover:bg-white text-xl font-medium transition-colors rounded-lg text-center w-full"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-4 py-4 text-gray-700 hover:text-[#dc2626] hover:bg-white text-xl font-medium transition-colors rounded-lg text-center w-full"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="block px-4 py-4 text-gray-700 hover:text-[#dc2626] hover:bg-white text-xl font-medium transition-colors rounded-lg text-center w-full"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-4 py-4 text-gray-700 hover:text-[#dc2626] hover:bg-white text-xl font-medium transition-colors rounded-lg text-center w-full"
              >
                Contact Us
              </button>
            </div>

            {/* CTA Button */}
            <div className="mt-8 px-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-[#dc2626] text-white px-6 py-4 rounded-lg text-lg font-medium hover:bg-[#b91c1c] transition-colors"
              >
                Get Free Consultation →
              </button>
            </div>
          </div>

          {/* Footer space for balance */}
          <div className="h-16"></div>
        </div>
      )}
    </nav>
  );
}
