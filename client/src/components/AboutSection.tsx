import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Award, Users, Leaf, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import BookingModal from "@/components/BookingModal";
import aboutImage from "@assets/generated_images/homoeopathy_clinic_founders_professional.png";

const features = [
  {
    icon: Heart,
    title: "40+ Years of Service",
    description: "Founded in 1983 with commitment to holistic and compassionate healthcare",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description: "Patients across 6+ states trust our expertise and care",
  },
  {
    icon: Award,
    title: "Ethical & Affordable",
    description: "Making healthcare accessible and affordable for everyone",
  },
  {
    icon: Leaf,
    title: "Holistic Healing",
    description: "Treating the whole person—body, mind and emotions",
  },
];

export default function AboutSection() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <>
      <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-primary/8 to-accent/8" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" data-testid="text-about-title">
              About Anant Arogya Sadan
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtitle">
              Decades of dedicated service to holistic health and compassionate healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-foreground" data-testid="text-about-story-title">
                Our Story & Mission
              </h3>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p data-testid="text-about-paragraph-1">
                  Founded in March 1983 by Dr. S. N. Mishra, Anant Arogya Sadan was born out of a deep commitment to holistic healthcare and social service. Inspired by his mother's compassion and his father's guidance, Dr. Mishra envisioned a healthcare centre for everyone.
                </p>
                <p data-testid="text-about-paragraph-2">
                  Over the last several decades, we have consistently served our core purpose—ethical, compassionate and affordable healthcare for all. Today, thousands of patients from Jharkhand, Bihar, Chhattisgarh, Assam, West Bengal and many other states trust our care.
                </p>
                <p data-testid="text-about-paragraph-3">
                  We believe true healing requires empathy, understanding and personal attention. Our focus is on guiding every patient with care, consistency and confidence—helping them achieve better health, balance and a more fulfilling life.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/about">
                  <Button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:-translate-y-1 transition-all font-semibold rounded-lg">
                    Read Full Story →
                  </Button>
                </Link>
                <Button
                  onClick={() => setBookingModalOpen(true)}
                  variant="outline"
                  className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1 transition-all font-semibold rounded-lg"
                >
                  Book Consultation
                </Button>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-video sm:aspect-auto">
                {/* Decorative background frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-2 scale-105"></div>
                
                {/* Image container with fixed aspect ratio */}
                <div className="relative bg-gradient-to-br from-white to-primary/5 rounded-3xl p-4 shadow-2xl border-2 border-white overflow-hidden h-full">
                  <div className="relative h-full rounded-2xl overflow-hidden shadow-inner">
                    <img
                      src={aboutImage}
                      alt="Anant Arogya Sadan founders and clinic - Professional homoeopathy practitioners"
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                      data-testid="img-about-founders"
                    />
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-6 left-6 w-10 h-10 border-3 border-primary rounded-full opacity-60 shadow-md"></div>
                  <div className="absolute bottom-6 right-6 w-10 h-10 border-3 border-accent rounded-full opacity-60 shadow-md"></div>
                  
                  {/* Top-right accent element */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg"></div>
                  
                  {/* Bottom-left accent element */}
                  <div className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-br from-accent to-primary rounded-full shadow-lg"></div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-2xl hover:-translate-y-2 transition-all border border-primary/10 shadow-lg bg-gradient-to-br from-white to-primary/5"
                  data-testid={`card-feature-${index}`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-5 border border-primary/20 shadow-md">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-foreground" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                  <div className="mt-4 h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        diseaseTitle="Consultation - Anant Arogya Sadan"
      />
    </>
  );
}
