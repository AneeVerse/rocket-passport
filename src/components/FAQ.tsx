"use client";
import React, { useState } from "react";
import Image from "next/image";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What documents do I need for a fresh passport application in India?",
      answer: "Required documents include Aadhaar card, PAN card or voter ID for identity proof, electricity/water bill or rent agreement for address proof, birth certificate for age proof, and passport-size photographs. For married applicants, marriage certificate may be required. We guide you on exact requirements based on your specific situation and help prepare all necessary affidavits."
    },
    {
      question: "How fast can I get my passport and what is Tatkal service?",
      answer: "Regular passport processing takes 15-30 days while Tatkal (urgent) service delivers in 3-5 working days. Tatkal requires additional fees of ₹2,000 for 36-page and ₹3,500 for 60-page passports. Tatkal is ideal for emergency travel, medical situations, or urgent work requirements. We handle all Tatkal formalities and ensure fastest possible processing."
    },
    {
      question: "Can you help with passport renewal and what if my passport is damaged/lost?",
      answer: "Yes, we handle all types of passport services including renewal for expired passports, reissue for damaged/lost documents, and corrections for name/address changes due to marriage or relocation. Lost passport requires FIR filing which we assist with. Damaged passport reissue follows similar process as renewal with additional documentation."
    },
    {
      question: "Do you provide services across India and what are your charges?",
      answer: "We provide passport services across all major cities in India including Mumbai, Delhi, Bangalore, Chennai, Kolkata, Pune, and Hyderabad. Our charges start from ₹2,500 for regular applications and ₹3,500 for Tatkal services, including consultation, document preparation, form filling, and application submission. Government fees are additional and paid directly to authorities."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 lg:py-24">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#027b7a]/20 to-[#027b7a]/10 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-[#027b7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 leading-tight">
            Passport Services FAQ
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get answers to the most common questions about passport applications, renewals, and services in India. Our experts have compiled comprehensive information to help you understand every step of the passport process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 hover:border-[#027b7a]/30 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-[#027b7a]/20 rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-black pr-4 leading-tight">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 transition-all duration-300 ${
                      openIndex === index ? 'bg-[#027b7a] rotate-180' : 'hover:bg-gray-200'
                    }`}>
                      <svg 
                        className={`w-5 h-5 transition-colors duration-300 ${
                          openIndex === index ? 'text-white' : 'text-gray-600'
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Element */}
          <div className="lg:pl-8">
            <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <Image
                src="/images/about2.webp"
                alt="Passport Services FAQ"
                width={500}
                height={300}
                className="w-160 h-130 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#027b7a] via-[#025f5e] to-[#027b7a] rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Start Your Passport Application?
              </h3>
              <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                Join thousands of satisfied customers who have successfully obtained their passports with our expert assistance and complete documentation support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center bg-white text-[#027b7a] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Start Application
                </button>
                <button className="inline-flex items-center justify-center bg-transparent text-white font-medium px-8 py-4 rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-200">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;