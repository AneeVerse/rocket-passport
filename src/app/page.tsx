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
import WebPageSchema from '@/components/seo/WebPageSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  // Sample FAQ data for schema
  const faqData = [
    {
      question: "How long does it take to get a tatkal passport?",
      answer: "Tatkal passport processing typically takes 1-3 working days from the date of application submission."
    },
    {
      question: "What documents are required for tatkal passport?",
      answer: "You need proof of identity, address proof, birth certificate, and additional fees for tatkal processing."
    },
    {
      question: "Can I track my passport application status?",
      answer: "Yes, you can track your passport application status online using your application reference number."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // Show popup after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <WebPageSchema />
      <BreadcrumbSchema />
      <FAQSchema faqData={faqData} pageTitle="Tatkal Passport Services" />
      <ServiceSchema 
        serviceName="Tatkal Passport Services"
        description="Fast and reliable tatkal passport processing services with expert assistance and quick turnaround times."
        price={{ amount: 2000, currency: "INR" }}
        duration="1-3 working days"
        category="Passport Services"
      />
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
