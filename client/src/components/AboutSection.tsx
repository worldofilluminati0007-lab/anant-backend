import { Card } from "@/components/ui/card";
import { Heart, Award, Users, Leaf } from "lucide-react";
import aboutImage from "@assets/generated_images/homoeopathy_clinic_founders_professional.png";

const features = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Patient-centered approach with personalized treatment plans",
  },
  {
    icon: Award,
    title: "Experienced Practitioners",
    description: "Certified homoeopaths with years of clinical expertise",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description: "Serving families with dedication and positive outcomes",
  },
  {
    icon: Leaf,
    title: "Natural Healing",
    description: "Safe, gentle remedies that work with your body",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-accent/30" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-about-title">
            About <span style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>अनंत आरोग्य सदन</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtitle">
            Your trusted partner in holistic health and natural healing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6" data-testid="text-about-story-title">
              Our Story & Vision
            </h3>
            <div className="space-y-4 text-lg text-card-foreground leading-relaxed">
              <p data-testid="text-about-paragraph-1">
                Founded with a vision to bring authentic homoeopathic healing to every household, 
                <span style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }} className="font-semibold"> अनंत आरोग्य सदन </span>
                has been a beacon of hope for those seeking natural, gentle, and effective healthcare solutions.
              </p>
              <p data-testid="text-about-paragraph-2">
                Our experienced practitioners combine time-tested homoeopathic principles with modern 
                diagnostic approaches to provide comprehensive care. We believe in treating the whole person, 
                not just the symptoms, ensuring lasting wellness and vitality.
              </p>
              <p data-testid="text-about-paragraph-3">
                With a commitment to excellence and compassion, we have successfully treated thousands of 
                patients across various chronic and acute conditions, helping them achieve optimal health 
                through the gentle power of homoeopathy.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={aboutImage}
              alt="अनंत आरोग्य सदन founders and clinic - Professional homoeopathy practitioners"
              className="rounded-xl w-full h-auto shadow-lg"
              loading="lazy"
              data-testid="img-about-founders"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover-elevate active-elevate-2 transition-all"
                data-testid={`card-feature-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h4>
                <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
