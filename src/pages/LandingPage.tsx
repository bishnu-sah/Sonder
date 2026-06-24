import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import ProductShowcase from '../components/ProductShowcase';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-brand-eggplant flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Area */}
        <Hero />

        {/* Core Features Bento Grid */}
        <Features />

        {/* Workflow */}
        <HowItWorks />

        {/* Product Showcase Mockups */}
        <ProductShowcase />

        {/* User Reviews */}
        <Testimonials />

        {/* Call to Action banner */}
        <CTA />
      </main>

      {/* Footer bar */}
      <Footer />
    </div>
  );
}
