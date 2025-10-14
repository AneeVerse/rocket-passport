"use client";

import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { FaLocationArrow } from 'react-icons/fa';

type Branch = {
  title: string;
  addressLines: string[];
  phone: string;
  mapSrc: string;
};

const branches: Branch[] = [
  {
    title: 'Mumbai',
    addressLines: [
      'Service Areas: Andheri, Bandra, Borivali, Thane,',
      'Navi Mumbai, Goregaon'
    ],
    phone: '099900 12345',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.082177513403905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
  },
  {
    title: 'Delhi NCR',
    addressLines: [
      'Service Areas: New Delhi, Noida, Gurgaon,',
      'Ghaziabad, Faridabad'
    ],
    phone: '099900 23456',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8397741267!2d77.04417565820312!3d28.527554299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
  },
  {
    title: 'Bangalore',
    addressLines: [
      'Service Areas: Whitefield, Electronic City,',
      'BTM Layout, Koramangala'
    ],
    phone: '099900 34567',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.49085452148437!3d12.953945614117647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
  },
  {
    title: 'Pune',
    addressLines: [
      'Service Areas: Baner, Kothrud, Wakad,',
      'Hinjewadi, Magarpatta'
    ],
    phone: '099900 45678',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711173041!2d73.79385252148437!3d18.52461405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
  },
  {
    title: 'Chennai',
    addressLines: [
      'Service Areas: T Nagar, Velachery, Anna Nagar,',
      'OMR, Tambaram'
    ],
    phone: '099900 56789',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d80.04885452148437!3d13.082680414117647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
  },
  {
    title: 'Hyderabad',
    addressLines: [
      'Service Areas: Gachibowli, Kondapur,',
      'Banjara Hills, Secunderabad'
    ],
    phone: '099900 67890',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d78.24885452148437!3d17.385044414117647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
  },
];

export default function BranchesSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#fef2f2]">
      <div className="mx-auto max-w-[1390px] px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-[42px] xl:text-[48px] font-serif font-bold text-[#1f1f1f]">
          Our <span className="text-[#dc2626]">Service Locations</span>
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {branches.map((b) => (
            <div key={b.title} className="rounded-xl bg-white p-4 sm:p-5 shadow-sm ring-1 ring-gray-100">
              <h3 className="mb-3 text-center text-lg sm:text-xl lg:text-[24px] font-semibold text-[#1f2937]">{b.title}</h3>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  src={b.mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[160px] sm:h-[180px] lg:h-[190px] w-full"
                />
              </div>

              <div className="mt-4 space-y-3 text-sm sm:text-[16px] text-[#374151]">
                <div className="flex items-start gap-3">
                  <FaLocationArrow className="mt-1 h-4 w-4 sm:h-5 sm:w-5 text-[#dc2626] flex-shrink-0" />
                  <p className="leading-6 sm:leading-7">
                    {b.addressLines.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="h-4 w-4 sm:h-5 sm:w-5 text-[#dc2626] flex-shrink-0" />
                  <a href={`tel:${b.phone.replace(/\s/g, '')}`} className="hover:underline">
                    Phone: {b.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


