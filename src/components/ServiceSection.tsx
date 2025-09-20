import Image from 'next/image';

type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
};

const services: ServiceItem[] = [
  {
    icon: '/images/service/tax-img3.svg',
    title: 'Estate Planning & Taxation',
    description:
      'From understanding the latest tax code change to exploring tax planning strategies.',
  },
  {
    icon: '/images/service/tax-img4.svg',
    title: 'Estate Planning & Taxation',
    description:
      'From understanding the latest tax code change to exploring tax planning strategies.',
  },
  {
    icon: '/images/service/tax-img5.svg',
    title: 'Estate Planning & Taxation',
    description:
      'From understanding the latest tax code change to exploring tax planning strategies.',
  },
  {
    icon: '/images/service/tax-img6.svg',
    title: 'Estate Planning & Taxation',
    description:
      'From understanding the latest tax code change to exploring tax planning strategies.',
    highlight: true,
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-[#F7F3FF] py-16">
      <div className="max-w-[1420px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left intro column */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/70 text-[#6E59F9] ring-1 ring-[#E9E2FF] w-fit">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1f1f] leading-tight mb-5">
              Tax Resolution
              <br className="hidden md:block" /> Starts Here
            </h2>
            <p className="text-[15px] md:text-base text-[#5f6570] leading-relaxed mb-8 max-w-prose">
              Explore our website to learn more about our services and get to know our team of tax
              attorneys. When you&apos;re ready Lawyer.
            </p>
             <button className="inline-flex items-center gap-2 bg-[#6E59F9] hover:bg-[#5C48F5] text-white font-semibold py-3 px-6 rounded-lg transition-colors w-fit">
               About Our Service
               <Image src="/images/service/arrow_right.svg" alt="arrow" width={18} height={18} />
             </button>
          </div>

          {/* Right services grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              return (
                <div
                  key={`${service.title}-${idx}`}
                  className="group relative rounded-2xl p-6 md:p-7 ring-1 ring-[#E9E2FF] bg-white text-[#101010] transition-colors duration-200 hover:bg-[#6E59F9] hover:text-white shadow-sm min-h-[200px]"
                >
                  {/* cut-out notch top-right */}
                  <div className="pointer-events-none before:content-[''] before:absolute before:-top-4 before:-right-4 before:w-18 before:h-18 before:bg-[#F7F3FF] before:rounded-full"></div>

                  {/* top-right external arrow in soft bubble */}
                  <div className="absolute -top-3 -right-3 rounded-full p-5 bg-white ring-1 ring-[#E9E2FF] shadow transition-colors duration-200 group-hover:bg-[#6E59F9] group-hover:ring-white/30">
                    <Image src="/images/service/arrow_right.svg" alt="open" width={22} height={22} className="transition group-hover:brightness-0 group-hover:invert w-5 h-5" />
                  </div>

                  {/* icon bubble */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center rounded-full w-14 h-14 bg-[#EFE9FF] transition-colors duration-200 group-hover:bg-white/20">
                      <Image
                        src={service.icon}
                        alt="service"
                        width={32}
                        height={32}
                        className="transition group-hover:invert group-hover:brightness-0"
                      />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 text-[#5f6570] group-hover:text-white/85">
                    {service.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-medium">
                    <span className="transition group-hover:text-white">Learn More</span>
                    <Image
                      src="/images/service/arrow_right.svg"
                      alt="arrow"
                      width={14}
                      height={14}
                      className="transition opacity-80 group-hover:invert group-hover:brightness-0"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


