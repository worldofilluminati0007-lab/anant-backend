import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BookingForm from "@/components/BookingForm";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <BookingForm />
        <TestimonialCarousel />
      </main>
      <Footer />
    </div>
  );
}
