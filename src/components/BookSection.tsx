import Image from 'next/image';

export default function BookSection() {
  return (
    <section className="relative -mt-24 z-30">
      <div className="max-w-[1400] mx-auto px-8 sm:px-12 lg:px-8">
        {/* Main container with white background and curved pattern */}
        <div className="bg-gray-50 rounded-t-3xl relative overflow-hidden pt-16 pb-24 px-8 sm:px-12 lg:px-16">
          {/* Decorative wave pattern background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 1200 400" className="w-full h-full">
              <defs>
                <pattern id="waves" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                  <path d="M0,10 Q25,0 50,10 T100,10" stroke="#000" strokeWidth="1" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#waves)"/>
            </svg>
          </div>

          {/* Services Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* New Passport (Normal) */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    src="/images/book/passport.webp"
                    alt="New Passport"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="absolute -top-1 -right-1 bg-orange-400 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  New Passport (Normal)
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  <span className="text-red-500 font-semibold">Ready to explore?</span> Get your new 
                  passport the easy way – no rush, no stress, just smooth sailing into 
                  your next adventure!
                </p>
              </div>
            </div>

            {/* New Passport (Tatkaal) */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    src="/images/book/boarding-pass.webp"
                    alt="Tatkaal Passport"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  New Passport (Tatkaal)
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  <span className="text-red-500 font-semibold">Spontaneous travel plans?</span> We've 
                  got you covered! Grab your passport ASAP with our express 
                  Tatkaal service – because adventures can't wait!
                </p>
              </div>
            </div>

            {/* Correction in Passport */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    src="/images/book/visa-1.webp"
                    alt="Passport Correction"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="absolute -top-1 -right-1 bg-orange-400 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Correction in Passport
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  <span className="text-red-500 font-semibold">Oops, made a mistake?</span> No worries! 
                  Fix it up with our passport correction service – making sure 
                  your travel plans stay on the right track.
                </p>
              </div>
            </div>
          </div>

          {/* Success Banner */}
          <div className="bg-slate-700 text-white text-center py-6 rounded-lg mb-8">
            <p className="text-sm font-medium tracking-wide uppercase">
              100% SUCCESS IN PASSPORTS, FROM NEW ONES TO CORRECTIONS AND NAME CHANGES.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 uppercase tracking-wide">
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
