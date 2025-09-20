import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookSection from '@/components/BookSection';
import AboutUs from '@/components/AboutUs';
import ServiceSection from '@/components/ServiceSection';
import TypesOfPassports from '@/components/TypesOfPassports';
import BlogSection from '@/components/BlogSection';
import ConsultationSection from '@/components/ConsultationSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BookSection />
      <AboutUs />
      <ServiceSection />
      <TypesOfPassports />
      <BlogSection />
      <ConsultationSection />
    </div>
  );
}
