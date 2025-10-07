import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-teal-50 text-[#027b7a] border border-[#027b7a]/20">
            WHY US
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose Our <span className="text-[#027b7a]">Passport Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 20 years of experience and 100,000+ successful applications, we are India's most trusted passport consultancy. Our expert team ensures your application is completed correctly the first time with guaranteed approval and transparent pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image and Stats */}
          <div className="space-y-8 -mt-28">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about2.webp"
                alt="Professional passport consultation"
                width={600}
                height={400}
                className="w-full h-80 lg:h-118 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#027b7a]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Image src="/images/about/calculator1.svg" alt="Experience" width={24} height={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">20+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#027b7a]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Image src="/images/about/tax-img2.svg" alt="Applications" width={24} height={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">100K+</div>
                <div className="text-sm text-gray-600 font-medium">Successful Applications</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#027b7a]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Image src="/images/about/money-img1.svg" alt="Approval Rate" width={24} height={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm text-gray-600 font-medium">Approval Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-[#027b7a] rounded-lg flex items-center justify-center">
                  <Image src="/images/about/check-img1.svg" alt="Check" width={20} height={20} className="filter brightness-0 invert" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Documentation & Form Filling</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Our legal experts handle all paperwork including affidavits, annexures, and government forms. We ensure accurate documentation to prevent rejections and delays with complete verification before submission.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-[#027b7a] rounded-lg flex items-center justify-center">
                  <Image src="/images/about/check-img1.svg" alt="Check" width={20} height={20} className="filter brightness-0 invert" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fastest Processing Times</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Get your passport in record time - regular applications in 15-30 days, Tatkal in 3-5 days. We prioritize your application with appointment booking, tracking, and direct coordination with passport offices.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-[#027b7a] rounded-lg flex items-center justify-center">
                  <Image src="/images/about/check-img1.svg" alt="Check" width={20} height={20} className="filter brightness-0 invert" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Transparent Pricing</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">No hidden charges or surprise fees. Clear upfront pricing with detailed breakdown of government fees and service charges. Pay only after successful application submission with money-back guarantee.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-[#027b7a] rounded-lg flex items-center justify-center">
                  <Image src="/images/about/check-img1.svg" alt="Check" width={20} height={20} className="filter brightness-0 invert" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">End-to-End Support & Guidance</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Complete handholding from document collection to passport delivery. Our consultants guide you through every step with regular updates, police verification support, and doorstep document pickup/delivery services.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-[#027b7a] hover:bg-[#026968] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-3 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Get Started Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
