import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@assets/generated_images/homoeopathy_consultation_professional_scene.png";
import heroImage2 from "@assets/generated_images/holistic_homeopathic_remedies_natural.png";
import heroImage3 from "@assets/generated_images/family_wellness_health_recovery.png";

const slides = [
  {
    image: heroImage1,
    alt: "Professional homoeopathy consultation - Expert doctor consulting patient in modern clinic",
    title: "Expert Homoeopathic Care",
    subtitle: "Experience natural healing with personalized treatment plans",
    cta: "Book Consultation",
  },
  {
    image: heroImage2,
    alt: "Natural homeopathic remedies - Holistic healing with herbs and natural ingredients",
    title: "Natural Healing Solutions",
    subtitle: "Gentle, effective remedies for lasting wellness",
    cta: "Learn More",
  },
  {
    image: heroImage3,
    alt: "Family wellness and health recovery - Happy healthy family showing treatment success",
    title: "Your Journey to Wellness",
    subtitle: "Trusted by families for comprehensive health care",
    cta: "Get Started",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-[90vh] md:h-[90vh] overflow-hidden" data-testid="section-hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1200 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover scale-105"
            style={{
              animation: index === currentSlide ? 'scale-bounce-subtle 20s ease-in-out infinite' : 'none',
            }}
            loading={index === 0 ? "eager" : "lazy"}
            data-testid={`img-hero-slide-${index}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
        </div>
      ))}

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white animate-fade-up">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000"
            data-testid="text-hero-title"
          >
            {slides[currentSlide].title}
          </h1>
          <p 
            className="text-lg md:text-xl mb-10 text-white/95 leading-relaxed transition-all duration-1000"
            data-testid="text-hero-subtitle"
          >
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              onClick={scrollToBooking}
              className="text-base md:text-lg backdrop-blur-md px-8 py-6 font-semibold"
              data-testid="button-hero-cta-primary"
            >
              {slides[currentSlide].cta}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("about");
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="text-lg backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
              data-testid="button-hero-cta-secondary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all text-white"
        data-testid="button-slider-prev"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all text-white"
        data-testid="button-slider-next"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            data-testid={`button-slider-indicator-${index}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
