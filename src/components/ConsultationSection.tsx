"use client";

import React from 'react';

export default function ConsultationSection() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#027b7a] via-[#026968] to-[#025756] p-6 sm:p-8 lg:p-12 text-white shadow-[0_20px_50px_-10px_rgba(2,123,122,0.4)]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>
          </div>
          
          <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                Free Consultation Available
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Expert Passport
               
                <span className="text-white/90"> Consultation</span>
              </h2>
              
              <p className="max-w-[820px] mx-auto lg:mx-0 text-white/85 text-base sm:text-xl leading-relaxed">
                Navigate passport applications with confidence. Our certified consultants ensure fastest processing with 100% approval guarantee.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <button className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 text-[#027b7a] font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95">
                  <span>Get Free Consultation</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                <button className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/30 px-6 py-3 text-white font-semibold backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </button>
              </div>
            </div>

            {/* Right Icons Grid */}
            <div className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-6 max-w-[300px] p-4">
                {/* Passport Document Icon */}
                <div className="group">
                  <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/20 shadow-lg transition-all group-hover:bg-white/15 group-hover:scale-105">
                    <svg className="h-12 w-12 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      <circle cx="12" cy="13" r="1.5" fill="currentColor" opacity="0.7"/>
                      <path d="M9,16H15V16.5H9V16M9,17.5H13V18H9V17.5Z" opacity="0.7"/>
                    </svg>
                  </div>
                </div>

                {/* Globe/Travel Icon */}
                <div className="group">
                  <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/20 shadow-lg transition-all group-hover:bg-white/15 group-hover:scale-105">
                    <svg className="h-12 w-12 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Clock/Fast Processing Icon */}
                <div className="group">
                  <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/20 shadow-lg transition-all group-hover:bg-white/15 group-hover:scale-105">
                    <svg className="h-12 w-12 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Shield/Security Icon */}
                <div className="group">
                  <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/20 shadow-lg transition-all group-hover:bg-white/15 group-hover:scale-105">
                    <svg className="h-12 w-12 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


