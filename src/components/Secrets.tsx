"use client";
import React, { useState } from "react";
import Image from "next/image";

const Secrets = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 0,
      title: "Track record of success",
      description: "The firm's consistent track record of successful case outcomes speaks to their prowess in achieving favorable results for clients.",
      image: "/images/secret/65035633d081a7205be22472_Rectangle 41440.webp"
    },
    {
      id: 1,
      title: "Community engagement",
      description: "Stardom Law Firm actively engages with and contributes to the communities they serve through pro bono work.",
      image: "/images/secret/65035631df148803811736b7_Group 493336.webp"
    },
    {
      id: 2,
      title: "Cutting-edge technology",
      description: "We stay ahead of the curve by integrating the latest legal technology tools into their practice.",
      image: "/images/secret/65035636c43285c35d00cf09_Rectangle 42011 (1) (1).webp"
    },
    {
      id: 3,
      title: "Continuous learning",
      description: "We fosters a culture of continuous learning and professional development among its team members.",
      image: "/images/secret/6503562fdb8e047fdd8604e0_Rectangle 42011.webp"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[1390] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 lg:mb-0 leading-tight max-w-2xl">
            The secrets behind our success
          </h2>
          
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm whitespace-nowrap self-start"
          >
            Learn More
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg ">
              <Image
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                width={600}
                height={650}
                className="w-full h-145 object-cover transition-opacity duration-500"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={section.id}
                onClick={() => setActiveSection(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-gray-50 border-l-8 border-[#dbd9f5]'
                    : 'hover:bg-gray-50'
                }`}
              >
                <h3 className={`text-base lg:text-lg font-bold mb-3 transition-colors duration-200 ${
                  activeSection === index ? 'text-black' : 'text-gray-800'
                }`}>
                  {section.title}
                </h3>
                <p className={`text-xs lg:text-sm leading-relaxed transition-colors duration-200 ${
                  activeSection === index ? 'text-gray-700' : 'text-gray-600'
                }`}>
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secrets;
