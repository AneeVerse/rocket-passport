import Image from 'next/image';
import { Calendar, Users, Target, Clock, FileCheck, Zap, DollarSign, HeadphonesIcon, ArrowRight } from 'lucide-react';

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'Expert Documentation & Form Filling',
    description: 'Our legal experts handle all paperwork including affidavits, annexures, and government forms. We ensure accurate documentation to prevent rejections and delays with complete verification before submission.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fastest Processing Times',
    description: 'Get your passport in record time - regular applications in 15-30 days, Tatkal in 3-5 days. We prioritize your application with appointment booking, tracking, and direct coordination with passport offices.',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: '100% Transparent Pricing',
    description: 'No hidden charges or surprise fees. Clear upfront pricing with detailed breakdown of government fees and service charges. Pay only after successful application submission with money-back guarantee.',
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: 'End-to-End Support & Guidance',
    description: 'Complete handholding from document collection to passport delivery. Our consultants guide you through every step with regular updates, police verification support, and doorstep document pickup/delivery services.',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left intro column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-[#ecf7ff] text-[#027b7a] border border-[#027b7a]/20 w-fit mx-auto lg:mx-0">
              WHY US
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1f1f1f] leading-tight mb-5">
              Why Choose Our
              <br className="hidden sm:block" /> 
              <span className="text-[#027b7a]">Passport Services</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5f6570] leading-relaxed mb-6 sm:mb-8 max-w-prose mx-auto lg:mx-0">
              With over 20 years of experience and 100,000+ successful applications, we are India's most trusted passport consultancy. Our expert team ensures your application is completed correctly the first time.
            </p>

            {/* Statistics Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-[#ecf7ff] rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#027b7a]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#027b7a]" />
                </div>
                <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1">20+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Years Experience</div>
              </div>

              <div className="bg-[#ecf7ff] rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#027b7a]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#027b7a]" />
                </div>
                <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1">100K+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Successful Applications</div>
              </div>

              <div className="bg-[#ecf7ff] rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#027b7a]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#027b7a]" />
                </div>
                <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Approval Rate</div>
              </div>
            </div>

            <button className="inline-flex items-center gap-2 bg-[#027b7a] hover:bg-[#026968] text-white font-semibold py-3 px-6 rounded-lg transition-colors w-fit mx-auto lg:mx-0 text-sm sm:text-base">
              Get Started Today
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Right image section */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-3xl">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about2.webp"
                  alt="Professional passport consultation"
                  width={900}
                  height={600}
                  className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating feature cards */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-xl p-4 sm:p-6 shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-[#027b7a]/10 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-[#027b7a]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Expert</div>
                    <div className="text-sm text-gray-600">Documentation</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Legal experts handle all paperwork with complete verification.
                </p>
              </div>

              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-xl p-4 sm:p-6 shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-[#027b7a]/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#027b7a]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Fast</div>
                    <div className="text-sm text-gray-600">Processing</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Regular in 15-30 days, Tatkal in 3-5 days with priority handling.
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-[#027b7a]/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-[#027b7a]/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
