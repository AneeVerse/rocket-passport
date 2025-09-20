"use client";

import React from 'react';

export default function ConsultationSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1350px] px-4">
        <div className="rounded-[8px] bg-[#8e6cf2] p-8 md:p-18 text-white shadow-[0_10px_30px_-10px_rgba(90,61,240,0.35)]">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <h3 className="mb-3 text-[40px] font-medium leading-[1.2] md:text-[40px] font-serif">
                Schedule A Free Consultation
              </h3>
              <p className="max-w-[560px] text-white/85 text-[18px] leading-7 mt-8">
                At your firm name, Our experienced tax attorneys are here to help you
                navigate the complexities of tax law, save you money, & ensure.
              </p>
            </div>

            {/* Right form */}
            <form className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="h-[70px] w-full rounded-[4px] border border-white/25 bg-white/15 px-4 text-[15px] text-white placeholder-white/80 outline-none backdrop-blur-sm transition-colors focus:border-white/50"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="h-[70px] w-full rounded-[4px] border border-white/25 bg-white/15 px-4 text-[15px] text-white placeholder-white/80 outline-none backdrop-blur-sm transition-colors focus:border-white/50"
              />
              <div className="relative md:col-span-1">
                <select
                  className="h-[70px] w-full appearance-none rounded-[4px] border border-white/25 bg-white/15 px-4 pr-10 text-[15px] text-white outline-none backdrop-blur-sm transition-colors focus:border-white/50"
                  defaultValue=""
                >
                  <option value="" disabled className="text-black">
                    Service Type
                  </option>
                  <option value="tax" className="text-black">
                    Tax Consultation
                  </option>
                  <option value="audit" className="text-black">
                    Audit Support
                  </option>
                  <option value="planning" className="text-black">
                    Tax Planning
                  </option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/80">▾</span>
              </div>
              <button
                type="button"
                className="group flex h-[70px] items-center justify-between gap-4 rounded-[4px] bg-white px-6 text-[#8e6cf2] ring-1 ring-[#5338d5]/25 shadow-sm hover:ring-[#5338d5]/40 md:col-span-1"
              >
                <span className="font-semibold text-[15px]">Schedule A Consultation</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#8e6cf2] transition-colors group-hover:bg-[#422bbf]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


