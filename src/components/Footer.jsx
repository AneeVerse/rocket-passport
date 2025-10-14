"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram , FaFacebook, FaXTwitter, FaLinkedin} from "react-icons/fa6";


const Footer = () => {
  const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact Us", href: "#contact" },
  ];

  const servicesLinks = [
    { name: "Visa Services", href: "#visa" },
    { name: "Study Abroad", href: "#study-abroad" },
    { name: "Overseas Education", href: "#overseas-education" },
    { name: "Dummy Tickets", href: "#dummy-tickets" },
    { name: "English Proficiency", href: "#english-test" },
    { name: "Foreign Exchange", href: "#foreign-exchange" },
    { name: "Passport Services", href: "#passport-services" },
    { name: "US Interview Dates", href: "#us-interview" },
  ];

  const footerLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Service", href: "/terms-and-condition" },
  ];

  return (
    <footer className="relative text-white py-16 px-3 sm:px-6 bg-gradient-to-br from-[#027b7a] via-[#026968] to-[#025756] overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-white/5 blur-2xl"></div>
      </div>
      
      {/* Glassmorphism Content Container */}
      <div className="container mx-auto md:px-12 relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 py-10 px-4 sm:px-10 shadow-[0_20px_50px_-10px_rgba(2,123,122,0.4)]">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Link href={"/"} className="flex flex-row items-center gap-2 mb-6 ">
              <Image
                src={"/images/nav-logo.png"}
                alt="JM Visa Services Logo"
                width={50}
                height={50}
                className="brightness-0 invert"
              />
              <h2 className="text-3xl font-bold text-white">Rocket Singh Enterprises</h2>
            </Link>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-0">Get Your Passport Without The Hassles</h3>
              <p className="text-sm text-white/85">
                Join OUR satisfied customers who got their passports with professional assistance and guaranteed approval.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-semibold text-white">Call Us</p>
              <Link
                href="tel:+919321315524"
                className="text-white/90 text-sm font-medium hover:text-white transition"
              >
                +91 9321315524
              </Link>
             <span className="text-white/90 text-sm font-medium"> | </span>
              <Link
                href="tel:+918591070718"
                className="text-white/90 text-sm font-medium hover:text-white transition"
              >
                +91 8591070718
              </Link>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-white">Email Us</p>
              <Link
                href="mailto:info@rocketsinghenterprises.com"
                className="text-white/90 text-sm font-medium hover:text-white transition"
              >
                info@rocketsinghenterprises.com
              </Link>
            </div>
            {/* follow social link */}
            <div className="mt-4 flex gap-4 mb-4">
              <Link href={"https://www.instagram.com/rocketsinghenterprises"} target="_blank" className="group">
                <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm border border-white/20 shadow-lg transition-all group-hover:bg-white/15 group-hover:scale-105">
                  <FaInstagram className="text-white text-xl" />
                </div>
              </Link>
              <Link href={"https://www.facebook.com/rocketsinghenterprises"} target="_blank" className="group">
                <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm border border-white/20 shadow-lg transition-all group-hover:bg-white/15 group-hover:scale-105">
                  <FaFacebook className="text-white text-xl" />
                </div>
              </Link>
              <Link href={"https://www.linkedin.com/company/rocket-singh-enterprises/"} target="_blank" className="group">
                <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm border border-white/20 shadow-lg transition-all group-hover:bg-white/15 group-hover:scale-105">
                  <FaLinkedin className="text-white text-xl" />
                </div>
              </Link>
              </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3
              className="text-xl font-semibold text-white mb-6 cursor-pointer sm:cursor-default"
              onClick={() => setQuickLinksOpen(!isQuickLinksOpen)}
            >
              Quick Links
              <span className="sm:hidden ml-2 text-sm">
                {isQuickLinksOpen ? "▲" : "▼"}
              </span>
            </h3>
            <ul
              className={`space-y-3 sm:block ${
                isQuickLinksOpen ? "block" : "hidden"
              }`}
            >
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white/80 transition-colors text-white/90 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h3
              className="text-xl font-semibold text-white mb-6 cursor-pointer sm:cursor-default"
              onClick={() => setServicesOpen(!isServicesOpen)}
            >
             More Services
              <span className="sm:hidden ml-2 text-sm">
                {isServicesOpen ? "▲" : "▼"}
              </span>
            </h3>
            <ul
              className={`space-y-3 sm:block ${
                isServicesOpen ? "block" : "hidden"
              }`}
            >
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white/80 transition-colors text-white/90 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-6">
              Working Hours
            </h3>
            <ul className="text-sm space-y-3 text-white/90">
              <li className="flex justify-between">
                <span>Mon - Fri :   10 AM - 8 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sat :   10 AM - 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sun :   On appointment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">
             © 2025 Rocket Singh Enterprises. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-white/70 hover:text-white/90 transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-white/70 hover:text-white/90 transition">
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-sm text-white/70">Design & Managed by Aneeverse</span>
            <Link href="https://aneeverse.com" target="_blank" className="opacity-80 hover:opacity-100 transition">
              <Image
                src="/aneeverse-logo.svg"
                alt="Aneeverse"
                width={30}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>



  );
};

export default Footer;



