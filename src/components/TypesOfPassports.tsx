'use client';
import Image from 'next/image';
import { useState } from 'react';

type FaqItem = {
  title: string;
  content: string;
};

const faqItems: FaqItem[] = [
  {
    title: 'Regular Indian Passport',
    content:
      "The regular passport is basically the one that comes in a navy blue color. This type of passport is generally issued to the normal people of the country who need to visit abroad for general purposes like education, business, medical emergency, tourism, etc. So, if you are a normal guy, this is the type of passport that you will be issued for traveling abroad.",
  },
  {
    title: 'Official Indian Passport',
    content:
      'The regular passport is basically the one that comes in a navy blue color. This type of passport is generally issued to the normal people of the country who need to visit abroad for general purposes like education, business, medical emergency, tourism, etc. So, if you are a normal guy, this is the type of passport that you will be issued for traveling abroad.',
  },
  {
    title: 'Diplomatic Indian Passport',
    content:
      'The regular passport is basically the one that comes in a navy blue color. This type of passport is generally issued to the normal people of the country who need to visit abroad for general purposes like education, business, medical emergency, tourism, etc. So, if you are a normal guy, this is the type of passport that you will be issued for traveling abroad.',
  },
];

export default function TypesOfPassports() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Title + Accordion */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#121518] mb-3 text-center lg:text-left">
              Types Of <span className="text-[#ff5757]">Passports</span>
            </h2>
            <p className="text-[#5f6570] mb-6 sm:mb-8 text-sm sm:text-base text-center lg:text-left">
              There are three types of Indian passports. These include-
            </p>

            <div className="flex flex-col gap-3 sm:gap-4">
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.title}
                    className={`border rounded-xl transition-colors ${
                      isOpen ? 'border-[#ffb3b3] bg-[#fff5f5]' : 'border-[#ffcccc] bg-white'
                    }`}
                  >
                    <button
                      aria-expanded={isOpen}
                      className="w-full grid grid-cols-[1fr_auto] items-center text-left px-4 sm:px-6 h-12 sm:h-14"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                    >
                      <span className={`font-bold leading-none mt-2 text-sm sm:text-base ${isOpen ? 'text-[#ff5757]' : 'text-[#111827]'}`}>{item.title}</span>
                      <span className={`inline-flex items-center mt-2 justify-center leading-none ${isOpen ? 'text-[#ff5757]' : 'text-[#ff5757]'} text-2xl sm:text-3xl lg:text-4xl font-semibold w-8 h-8 sm:w-10 sm:h-10`}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden px-4 sm:px-6 pb-4 sm:pb-5 -mt-2 text-[#4b5563] text-xs sm:text-sm leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Combined passports image */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center lg:justify-end mb-6 lg:mb-0">
            <Image
              src="/images/passport-right.webp"
              alt="Types of Indian Passports"
              width={900}
              height={620}
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[920px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}


