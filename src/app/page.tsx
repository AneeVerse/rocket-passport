import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookSection from '@/components/BookSection';
import AboutUs from '@/components/AboutUs';
import ServiceSection from '@/components/ServiceSection';
import TypesOfPassports from '@/components/TypesOfPassports';
import BlogSection from '@/components/BlogSection';
import ConsultationSection from '@/components/ConsultationSection';
import BranchesSection from '@/components/BranchesSection';
import FeedbackReviewComponent from '@/components/FeedbackReviewComponent';
import Footer from '@/components/Footer.jsx';
import FAQ from '@/components/FAQ';
import FloatingActionButton from '@/components/FloatingActionButton';

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
      <FeedbackReviewComponent />

      <ConsultationSection />
      <BranchesSection />
      <FAQ />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
