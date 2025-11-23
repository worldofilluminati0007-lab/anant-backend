import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";
import testimonial1 from "@assets/generated_images/patient_testimonial_video_thumbnail.png";
import testimonial2 from "@assets/generated_images/recovery_testimonial_video_frame.png";
import testimonial3 from "@assets/generated_images/patient_success_story_testimonial.png";

const testimonials = [
  {
    image: testimonial1,
    alt: "Patient testimonial - Diabetes treatment success story",
    name: "Rajesh Kumar",
    condition: "Diabetes Management",
    testimonial: "After years of struggling with diabetes, the personalized homoeopathic treatment at अनंत आरोग्य सदन has significantly improved my blood sugar levels. The doctors are compassionate and truly care about my well-being.",
    videoUrl: "#",
  },
  {
    image: testimonial2,
    alt: "Recovery testimonial - Arthritis pain relief success",
    name: "Priya Sharma",
    condition: "Arthritis Relief",
    testimonial: "The chronic joint pain that limited my daily activities has reduced dramatically. I'm grateful for the gentle yet effective treatment approach. I can now enjoy my morning walks again!",
    videoUrl: "#",
  },
  {
    image: testimonial3,
    alt: "Patient success story - Skin condition treatment",
    name: "Amit Patel",
    condition: "Skin Health",
    testimonial: "My persistent skin condition cleared up within months of treatment. The natural remedies worked wonders where conventional treatments failed. Highly recommend their expertise!",
    videoUrl: "#",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-br from-primary/8 via-transparent to-accent/8" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" data-testid="text-testimonials-title">
            Patient Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            Hear from our patients about their healing journey
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              return (
                <Card
                  key={index}
                  className={`overflow-hidden transition-all duration-300 cursor-pointer hover-elevate active-elevate-2 border border-primary/10 shadow-md ${
                    isActive ? "ring-2 ring-primary scale-105" : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  data-testid={`card-testimonial-${index}`}
                >
                  <div className="relative aspect-video">
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 flex items-center justify-center transition-all">
                      <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
                        <Play className="w-7 h-7 text-secondary ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-base" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-medium" data-testid={`text-testimonial-condition-${index}`}>
                      {testimonial.condition}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-10 relative border border-primary/10 shadow-lg" data-testid="card-active-testimonial">
            <Quote className="w-12 h-12 text-primary/15 absolute top-6 left-6" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-foreground" data-testid="text-active-testimonial-quote">
                "{testimonials[currentIndex].testimonial}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg" data-testid="text-active-testimonial-name">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground" data-testid="text-active-testimonial-condition">
                    {testimonials[currentIndex].condition}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    data-testid="button-testimonial-prev"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    data-testid="button-testimonial-next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                data-testid={`button-testimonial-indicator-${index}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
