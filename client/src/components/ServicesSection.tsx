import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import diabetesImage from "@assets/generated_images/diabetes_homoeopathy_treatment_illustration.png";
import arthritisImage from "@assets/generated_images/arthritis_joint_relief_treatment.png";
import coldFluImage from "@assets/generated_images/cold_flu_natural_treatment.png";
import skinImage from "@assets/generated_images/skin_health_treatment_homoeopathy.png";

const services = [
  {
    title: "Diabetes Management",
    description: "Comprehensive homoeopathic approach to managing blood sugar levels naturally with personalized treatment plans.",
    image: diabetesImage,
    alt: "Diabetes management through homoeopathy - Natural blood sugar control treatment",
    link: "/diabetes",
    highlights: ["Blood sugar control", "Natural remedies", "Lifestyle guidance"],
  },
  {
    title: "Arthritis Relief",
    description: "Natural pain relief and improved joint mobility through gentle homoeopathic treatments for all types of arthritis.",
    image: arthritisImage,
    alt: "Arthritis relief treatment - Joint pain management with homoeopathy",
    link: "/arthritis",
    highlights: ["Pain reduction", "Improved mobility", "Anti-inflammatory care"],
  },
  {
    title: "Cold & Flu Treatment",
    description: "Boost your immunity and recover faster with effective homoeopathic remedies for respiratory infections.",
    image: coldFluImage,
    alt: "Cold and flu natural treatment - Immune system boost with homoeopathy",
    link: "/cold-flu",
    highlights: ["Immune support", "Faster recovery", "Symptom relief"],
  },
  {
    title: "Skin Health Solutions",
    description: "Clear, healthy skin through natural homoeopathic treatments for various dermatological conditions.",
    image: skinImage,
    alt: "Skin health treatment - Natural dermatological care with homoeopathy",
    link: "/skin-issues",
    highlights: ["Clear complexion", "Natural healing", "Long-term results"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-services-title">
            Our Specialized Treatments
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-subtitle">
            Expert homoeopathic care for chronic and acute conditions with proven natural remedies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate active-elevate-2 transition-all group"
              data-testid={`card-service-${index}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.highlights.map((highlight, hIndex) => (
                    <span
                      key={hIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      data-testid={`badge-service-highlight-${index}-${hIndex}`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <Link href={service.link}>
                  <Button className="w-full gap-2 group" data-testid={`button-service-learn-more-${index}`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-all-services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
