"use client";
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookSection from '@/components/BookSection';
import AboutUs from '@/components/AboutUs';
import ServiceSection from '@/components/ServiceSection';
import TypesOfPassports from '@/components/TypesOfPassports';
import BlogSection from '@/components/BlogSection';
import ConsultationSection from '@/components/ConsultationSection';
import BranchesSection from '@/components/BranchesSection';
import FeedbackReviewComponent from '@/components/FeedbackReviewComponent';
import Contact from '@/components/Contact.jsx';
import Footer from '@/components/Footer.jsx';
import FAQ from '@/components/FAQ';
import FloatingActionButton from '@/components/FloatingActionButton';
import PopupContactForm from '@/components/PopupContactForm';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // Show popup after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BookSection />
      <AboutUs />
      <ServiceSection />
      <TypesOfPassports />
       <BlogSection />
      <FeedbackReviewComponent />

      <ConsultationSection />
      <BranchesSection />
      <Contact />
      <FAQ />
      <Footer />
      <FloatingActionButton />
      <PopupContactForm show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}
