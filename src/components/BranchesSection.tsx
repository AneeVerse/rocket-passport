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
    title: 'Branch Karnal',
    addressLines: [
      'Shop No. 6, Gaushala Rd, Janakpuri, Old Ramesh Nagar,',
      'Ramesh Nagar, Karnal, Haryana 132114',
    ],
    phone: '086839 15114',
    mapSrc:
      'https://www.google.com/maps?q=Global+Passport+Advisor+Karnal&output=embed',
  },
  {
    title: 'Branch Pitampura',
    addressLines: [
      'NP-156A, near MP Mall, MP Block, Block NP, Poorti Pitampura,',
      'Pitampura, Delhi, 110034',
    ],
    phone: '099900 08243',
    mapSrc:
      'https://www.google.com/maps?q=Global+Passport+Advisor+Pitampura&output=embed',
  },
  {
    title: 'Branch Rohini',
    addressLines: [
      'Shop No, 393, opp. Ganesh MRI Diagnostic Lab, Pocket A2,',
      'Pocket 2, Sector 8, Rohini, New Delhi, Delhi, 110085',
    ],
    phone: '099924 44445',
    mapSrc:
      'https://www.google.com/maps?q=Global+Passport+Advisor+Rohini&output=embed',
  },
  {
    title: 'Branch Noida',
    addressLines: [
      'Office 1026, 12th floor, Gaur City Mall, Greater Noida,',
      'Sector 4, Uttar Pradesh 201301',
    ],
    phone: '099924 44445',
    mapSrc:
      'https://www.google.com/maps?q=Gaur+City+Mall+Noida&output=embed',
  },
  {
    title: 'Branch Gurgaon',
    addressLines: [
      'Shop No. 3, Mahender Market, Near MM Tower Passport Office,',
      'Sector 18, Gurgaon, Haryana',
    ],
    phone: '099924 44445',
    mapSrc:
      'https://www.google.com/maps?q=Passport+Seva+Kendra+Gurgaon&output=embed',
  },
  {
    title: 'Branch Panipat',
    addressLines: [
      'Adjoining Ambition Academy, near Prem Hospital and Aman Sweets,',
      'Bishan Sarup Colony, Panipat, Haryana 132103',
    ],
    phone: '099900 09261',
    mapSrc:
      'https://www.google.com/maps?q=Global+Passport+Advisor+Panipat&output=embed',
  },
];

export default function BranchesSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1390px] px-4">
        <h2 className="text-center text-[42px] md:text-[48px] font-serif font-bold text-[#1f1f1f]">
          Our <span className="text-[#ef4444]">Branches</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {branches.map((b) => (
            <div key={b.title} className="rounded-xl bg-white p-5">
              <h3 className="mb-3 text-center text-[24px] font-semibold text-[#1f2937]">{b.title}</h3>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  src={b.mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[190px] w-full"
                />
              </div>

              <div className="mt-4 space-y-3 text-[16px] text-[#374151]">
                <div className="flex items-start gap-3">
                  <FaLocationArrow className="mt-1 h-5 w-5 text-[#ef4444]" />
                  <p className="leading-7">
                    {b.addressLines.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="h-5 w-5 text-[#ef4444]" />
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


