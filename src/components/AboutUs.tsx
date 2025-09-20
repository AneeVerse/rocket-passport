import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1420px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Image Column */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/about/about-img2.png"
                alt="Professional consultation"
                width={700}
                height={840}
                className="w-full h-135 object-cover"
              />
            </div>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-3 flex flex-col gap-5 w-[260px] mx-auto">
            <div className="w-[260px] h-42 bg-[#F7F3FF] hover:bg-[#F1EAFF] transition-colors rounded-xl px-6 py-6 border border-[#E9E2FF] flex flex-col items-center justify-center text-center gap-2">
              <Image src="/images/about/calculator1.svg" alt="Calculator" width={32} height={32} />
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Successful Client</div>
            </div>

            <div className="w-[260px] h-42 bg-[#F7F3FF] hover:bg-[#F1EAFF] transition-colors rounded-xl px-6 py-6 border border-[#E9E2FF] flex flex-col items-center justify-center text-center gap-2">
              <Image src="/images/about/tax-img2.svg" alt="Tax Return" width={32} height={32} />
              <div className="text-3xl font-bold text-gray-900">1M+</div>
              <div className="text-sm text-gray-600">Tax Return Filed</div>
            </div>

            <div className="w-[260px] h-42 bg-[#F7F3FF] hover:bg-[#F1EAFF] transition-colors rounded-xl px-6 py-6 border border-[#E9E2FF] flex flex-col items-center justify-center text-center gap-2">
              <Image src="/images/about/money-img1.svg" alt="Money" width={32} height={32} />
              <div className="text-3xl font-bold text-gray-900">$50M</div>
              <div className="text-sm text-gray-600">Trade Value Filed</div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-6 bg-[#F7F3FF] text-[#6E59F9]">About Us</div>

            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-tight mb-5">
              Protect Your Assets And
              <br className="hidden lg:block" /> Minimize Tax Liability
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4 text-[15px] md:text-base">
              Whether you're facing a tax audit, need assistance with tax compliance,
              or are looking for ways to maximize tax benefits.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-[15px] md:text-base">
              Explore our website to learn more about our services and get to know
              our team of tax attorneys. When you're ready, Lawyer.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Image src="/images/about/check-img1.svg" alt="Check" width={18} height={18} />
                <span className="text-gray-800 text-sm font-medium">Range Of Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/images/about/check-img1.svg" alt="Check" width={18} height={18} />
                <span className="text-gray-800 text-sm font-medium">Professional Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/images/about/check-img1.svg" alt="Check" width={18} height={18} />
                <span className="text-gray-800 text-sm font-medium">Online Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/images/about/check-img1.svg" alt="Check" width={18} height={18} />
                <span className="text-gray-800 text-sm font-medium">Client Success Stories</span>
              </div>
            </div>

            <button className="bg-[#6E59F9] hover:bg-[#5C48F5] text-white font-semibold py-3 px-7 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">
              About Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
