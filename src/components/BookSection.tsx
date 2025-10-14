import Image from 'next/image';

export default function BookSection() {
  return (
    <section className="relative mt-0 lg:-mt-18 z-30">
      <div className="max-w-[1400] mx-auto px-4 sm:px-6 lg:px-2">
        {/* Main container with white background and curved pattern */}
        <div className="bg-white rounded-2xl sm:rounded-3xl relative overflow-hidden pt-16 sm:pt-20 lg:pt-16 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-16 shadow-2xl">
          {/* Decorative wave pattern background */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 1200 400" className="w-full h-full">
              <defs>
                <pattern id="waves" x="0" y="0" width="100" height="15" patternUnits="userSpaceOnUse">
                  <path d="M0,10 Q25,0 50,10 T100,10" stroke="#dc2626" strokeWidth="1" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#waves)"/>
            </svg>
            <svg width="100%" height="100%" viewBox="0 0 1200 400" className="w-full h-full">
              <defs>
                <pattern id="waves" x="0" y="0" width="100" height="15" patternUnits="userSpaceOnUse">
                  <path d="M0,10 Q25,0 50,10 T100,10" stroke="#dc2626" strokeWidth="1" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#waves)"/>
            </svg>
          </div>

          {/* Services Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {/* New Passport (Normal) */}
            <div className="bg-white rounded-xl shadow-lg shadow-gray-300/50 drop-shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="relative">
                  <Image
                    src="/images/book/passport.webp"
                    alt="New Passport"
                    width={60}
                    height={60}
                    className="rounded-lg w-12 h-12 sm:w-15 sm:h-15"
                  />
                  <div className="absolute -top-1 -right-1 bg-orange-400 rounded-full p-1">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  New Passport Application
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Complete guidance and document support for fresh passport applications with smooth, quick, and hassle-free processing.
                </p>

              </div>
            </div>

            {/* New Passport (Tatkaal) */}
            <div className="bg-white rounded-xl shadow-lg shadow-gray-300/50 drop-shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="relative">
                  <Image
                    src="/images/book/boarding-pass.webp"
                    alt="Tatkaal Passport"
                    width={60}
                    height={60}
                    className="rounded-lg w-12 h-12 sm:w-15 sm:h-15"
                  />
                  <div className="absolute -top-1 -right-1 bg-[#dc2626] rounded-full p-1">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  Tatkal Passport Service
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Urgent passport processing within 3-5 working days for emergency travel needs with fast-track application support.
                </p>

              </div>
            </div>

            {/* Correction in Passport */}
            <div className="bg-white rounded-xl shadow-lg shadow-gray-300/50 drop-shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="relative">
                  <Image
                    src="/images/book/visa-1.webp"
                    alt="Passport Correction"
                    width={60}
                    height={60}
                    className="rounded-lg w-12 h-12 sm:w-15 sm:h-15"
                  />
                  <div className="absolute -top-1 -right-1 bg-[#dc2626] rounded-full p-1">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  Passport Renewal & Corrections
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Seamless renewal for expired passports and corrections for name changes, address updates, or damaged passport replacement.
                </p>

              </div>
            </div>
          </div>

          {/* Success Banner */}
          <div className="text-center">
            <button className="relative z-20 bg-[#dc2626] hover:bg-[#b91c1c] hover:shadow-lg hover:scale-105 active:scale-95 text-white font-medium py-5 px-6 sm:px-12 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm sm:text-base cursor-pointer">
               100% SUCCESS IN PASSPORTS, FROM NEW ONES TO CORRECTIONS AND NAME CHANGES.
            </button>
          </div>
         

          {/* CTA Button */}
          <div className="text-center -mb-17 mt-8">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative z-20 bg-[#dc2626] hover:bg-[#b91c1c] hover:shadow-lg hover:scale-105 active:scale-95 text-white font-semibold py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm sm:text-base cursor-pointer"
            >
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
