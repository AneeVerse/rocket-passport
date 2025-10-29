"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer.jsx';
import FloatingActionButton from '@/components/FloatingActionButton';
import PopupContactForm from '@/components/PopupContactForm';
import WebPageSchema from '@/components/seo/WebPageSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export default function PPCMumbaiPage() {
  const [showPopup, setShowPopup] = useState(false);

  // FAQ data for PPC Mumbai
  const faqData = [
    {
      question: "What is a Police Clearance Certificate (PCC)?",
      answer: "A Police Clearance Certificate is an official document issued by the police authorities that certifies that you have no criminal record or pending criminal cases against you."
    },
    {
      question: "How long does it take to get PCC in Mumbai?",
      answer: "Normal processing takes 15-30 days, while tatkal processing can be completed in 3-7 working days with proper documentation."
    },
    {
      question: "What documents are required for PCC Mumbai?",
      answer: "You need passport copy, address proof, identity proof, birth certificate, and passport size photographs along with the application form."
    },
    {
      question: "Can I apply for PCC online in Mumbai?",
      answer: "Yes, you can apply online through the official police website or visit the nearest police station for offline application."
    },
    {
      question: "What is the fee for PCC in Mumbai?",
      answer: "The fee varies based on the type of application - normal or tatkal. Additional charges may apply for urgent processing."
    }
  ];

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/#services" },
    { name: "Police Clearance Certificate Mumbai", url: "/ppc-mumbai" }
  ];

  return (
    <>
      <WebPageSchema 
        title="Police Clearance Certificate (PCC) Mumbai - Fast & Reliable Service"
        description="Get your Police Clearance Certificate in Mumbai quickly and hassle-free. Expert assistance for PCC applications with tatkal processing available."
      />
      <BreadcrumbSchema customBreadcrumbs={breadcrumbItems} />
      <FAQSchema faqData={faqData} pageTitle="Police Clearance Certificate Mumbai" />
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Police Clearance Certificate
                <span className="block text-red-200">Mumbai</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
                Get your PCC in Mumbai with expert assistance. Fast, reliable, and hassle-free service with tatkal processing available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowPopup(true)}
                  className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </button>
                <a 
                  href="#process" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  Learn Process
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our PCC Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive assistance for Police Clearance Certificate applications in Mumbai
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Processing</h3>
                <p className="text-gray-600">Get your PCC in 3-7 working days with our tatkal service</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">Professional assistance throughout the entire application process</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Process</h3>
                <p className="text-gray-600">Your documents and personal information are completely secure</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                PCC Application Process in Mumbai
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow these simple steps to get your Police Clearance Certificate
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Preparation</h3>
                <p className="text-gray-600">Gather all required documents including passport, address proof, and identity proof</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Submission</h3>
                <p className="text-gray-600">Submit your application online or at the nearest police station with all documents</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Verification Process</h3>
                <p className="text-gray-600">Police verification of your address and background check completion</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Certificate Issuance</h3>
                <p className="text-gray-600">Receive your Police Clearance Certificate after successful verification</p>
              </div>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Required Documents for PCC Mumbai
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ensure you have all the necessary documents ready for a smooth application process.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Passport Copy</h3>
                      <p className="text-gray-600">Clear copy of all pages of your passport</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address Proof</h3>
                      <p className="text-gray-600">Aadhaar Card, Voter ID, or Utility Bills</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Identity Proof</h3>
                      <p className="text-gray-600">PAN Card, Aadhaar Card, or Driving License</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Birth Certificate</h3>
                      <p className="text-gray-600">Original birth certificate or equivalent document</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Photographs</h3>
                      <p className="text-gray-600">Recent passport size photographs (white background)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Documentation?</h3>
                <p className="text-gray-600 mb-6">
                  Our experts can help you prepare and verify all required documents to ensure your PCC application is processed smoothly.
                </p>
                <button 
                  onClick={() => setShowPopup(true)}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Get Expert Assistance
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about PCC in Mumbai
              </p>
            </div>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:text-red-600 transition-colors">
                      {faq.question}
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1350px] px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#dc2626] via-[#b91c1c] to-[#991b1b] p-6 sm:p-8 lg:p-12 text-white shadow-[0_20px_50px_-10px_rgba(220,38,38,0.4)]">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/20 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>
              </div>
              
              <div className="relative text-center space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                  Ready to Apply
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                  Get Your Police Clearance
                  <span className="text-white/90"> Certificate Today</span>
                </h2>
                
                <p className="max-w-[820px] mx-auto text-white/85 text-base sm:text-xl leading-relaxed">
                  Get expert assistance for your Police Clearance Certificate application in Mumbai. Fast, reliable, and hassle-free service with 100% approval guarantee.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <button 
                    onClick={() => setShowPopup(true)}
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 text-[#dc2626] font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
                  >
                    <span>Start Your Application</span>
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  <a 
                    href="tel:+919876543210"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/30 px-6 py-3 text-white font-semibold backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Now: +91 98765 43210</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingActionButton />
        
        {showPopup && (
          <PopupContactForm 
            show={showPopup} 
            onClose={() => setShowPopup(false)} 
          />
        )}
      </div>
    </>
  );
}