import Image from 'next/image';
import ContactForm from './ContactForm';

export default function Hero() {
  return (
    <section className="bg-[#ecf7ff] min-h-screen relative overflow-hidden">
      <div className="max-w-[1400] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-[55px] font-normal text-gray-900 leading-tight font-serif">
              Protect Your Future Life,{' '}
              <span className="block">Our Best Lawyers</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              We know that every case is unique, and we approach each with meticulous attention 
              and detail. Whether you're facing charges related DUI, drug offenses, assault.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#027b7a] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#026968] transition-colors">
                Request Case Evolution →
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Learn More →
              </button>
            </div>
          </div>

          {/* Right Content - Form with Background Images */}
          <div className="relative">
            {/* Background Passport Images */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Left Passport (Blue) - Tilted */}
              <div className="absolute left-8 top-10 transform -rotate-32 z-0">
                <Image
                  src="/images/hero/left-bg.png"
                  alt="Indian Passport"
                  width={192}
                  height={456}
                  className="rounded-lg shadow-xl w-60 h-94"
                />
              </div>

              {/* Right Passport (Red) - Tilted */}
              <div className="absolute right-8 top-10 transform rotate-32 z-0">
                <Image
                  src="/images/hero/right-bg.png"
                  alt="Indian Diplomatic Passport"
                  width={192}
                  height={456}
                  className="rounded-lg shadow-xl w-60 h-94"
                />
              </div>
            </div>

            {/* Contact Form - Centered and on top */}
            <div className="relative z-20 flex items-center justify-center min-h-[400px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
