import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookSection from '@/components/BookSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BookSection />
    </div>
  );
}
