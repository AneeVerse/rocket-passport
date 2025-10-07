"use client";

import React from 'react';

export default function ConsultationSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6">
        <div className="rounded-lg bg-[#027b7a] p-6 sm:p-8 lg:p-18 text-white shadow-[0_10px_30px_-10px_rgba(2,123,122,0.35)]">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* Left copy */}
            <div className="text-center lg:text-left">
              <h3 className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-[40px] font-medium leading-[1.2] font-serif">
                Schedule A Free Passport Consultation
              </h3>
              <p className="max-w-[560px] mx-auto lg:mx-0 text-white/85 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 lg:mt-8">
                Our certified passport consultants are here to help you navigate the complexities of passport applications, save you time, and ensure fastest processing with 100% approval guarantee.
              </p>
            </div>

            {/* Right form */}
            <form className="grid w-full grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="h-12 sm:h-14 lg:h-[70px] w-full rounded border border-white/25 bg-white/15 px-4 text-sm sm:text-[15px] text-white placeholder-white/80 outline-none backdrop-blur-sm transition-colors focus:border-white/50"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="h-12 sm:h-14 lg:h-[70px] w-full rounded border border-white/25 bg-white/15 px-4 text-sm sm:text-[15px] text-white placeholder-white/80 outline-none backdrop-blur-sm transition-colors focus:border-white/50"
              />
              <div className="relative md:col-span-1">
                <select
                  className="h-12 sm:h-14 lg:h-[70px] w-full appearance-none rounded border border-white/25 bg-white/15 px-4 pr-10 text-sm sm:text-[15px] text-white outline-none backdrop-blur-sm transition-colors focus:border-white/50"
                  defaultValue=""
                >
                  <option value="" disabled className="text-black">
                    Service Type
                  </option>
                  <option value="new-passport" className="text-black">
                    New Passport Application
                  </option>
                  <option value="tatkal" className="text-black">
                    Tatkal Passport Service
                  </option>
                  <option value="renewal" className="text-black">
                    Passport Renewal & Corrections
                  </option>
                  <option value="travel-support" className="text-black">
                    International Travel Support
                  </option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/80">▾</span>
              </div>
              <button
                type="button"
                className="group flex h-12 sm:h-14 lg:h-[70px] items-center justify-between gap-3 sm:gap-4 rounded bg-white px-4 sm:px-6 text-[#027b7a] ring-1 ring-[#026968]/25 shadow-sm hover:ring-[#026968]/40 md:col-span-1"
              >
                <span className="font-semibold text-xs sm:text-sm lg:text-[15px]">Schedule A Consultation</span>
                <span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full bg-[#027b7a] transition-colors group-hover:bg-[#026968]">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-white sm:w-3 sm:h-3">
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


