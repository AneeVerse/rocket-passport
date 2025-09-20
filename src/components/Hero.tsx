import Image from 'next/image';
import ContactForm from './ContactForm';

export default function Hero() {
  return (
    <section className="bg-[#ecf7ff] min-h-screen relative overflow-hidden">
      <div className="max-w-[1400] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-1 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[55px] font-normal text-gray-900 leading-tight font-serif">
              Protect Your Future Life,{' '}
              <span className="block">Our Best Lawyers</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              We know that every case is unique, and we approach each with meticulous attention 
              and detail. Whether you're facing charges related DUI, drug offenses, assault.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="bg-[#027b7a] text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-[#026968] transition-colors text-sm sm:text-base">
                Request Case Evolution →
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base">
                Learn More →
              </button>
            </div>
          </div>

          {/* Right Content - Form with Background Images */}
          <div className="relative order-2 lg:order-2">
            {/* Background Passport Images - Hidden on mobile, visible on larger screens */}
            <div className="hidden md:absolute md:inset-0 md:flex md:items-center md:justify-center">
              {/* Left Passport (Blue) - Tilted */}
              <div className="absolute left-4 lg:left-8 top-6 lg:top-10 transform -rotate-32 z-0">
                <Image
                  src="/images/hero/left-bg.png"
                  alt="Indian Passport"
                  width={192}
                  height={456}
                  className="rounded-lg shadow-xl w-40 lg:w-60 h-auto"
                />
              </div>

              {/* Right Passport (Red) - Tilted */}
              <div className="absolute right-4 lg:right-8 top-6 lg:top-10 transform rotate-32 z-0">
                <Image
                  src="/images/hero/right-bg.png"
                  alt="Indian Diplomatic Passport"
                  width={192}
                  height={456}
                  className="rounded-lg shadow-xl w-40 lg:w-60 h-auto"
                />
              </div>
            </div>

            {/* Contact Form - Centered and on top */}
            <div className="relative z-20 flex items-center justify-center min-h-[320px] sm:min-h-[380px] lg:min-h-[400px]">
              <ContactForm />
            </div>

            {/* Mobile passport decorations - Simple and non-overlapping */}
            <div className="md:hidden absolute top-0 left-0 right-0 pointer-events-none">
              <div className="flex justify-between items-start px-4 pt-4 opacity-20">
                <Image
                  src="/images/hero/left-bg.png"
                  alt=""
                  width={60}
                  height={90}
                  className="w-12 h-auto transform -rotate-12"
                />
                <Image
                  src="/images/hero/right-bg.png"
                  alt=""
                  width={60}
                  height={90}
                  className="w-12 h-auto transform rotate-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
