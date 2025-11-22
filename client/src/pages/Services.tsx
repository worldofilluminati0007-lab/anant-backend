import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import diabetesImage from "@assets/generated_images/diabetes_homoeopathy_treatment_illustration.png";
import arthritisImage from "@assets/generated_images/arthritis_joint_relief_treatment.png";
import coldFluImage from "@assets/generated_images/cold_flu_natural_treatment.png";
import skinImage from "@assets/generated_images/skin_health_treatment_homoeopathy.png";

const services = [
  {
    title: "Diabetes Management",
    description: "Holistic homoeopathic treatment for effective blood sugar management and diabetes prevention.",
    image: diabetesImage,
    alt: "Diabetes management - Natural homoeopathic blood sugar control",
    link: "/diabetes",
    benefits: [
      "Natural blood sugar regulation",
      "Reduced dependency on medications",
      "Prevention of complications",
      "Improved energy levels",
      "Customized diet and lifestyle plans",
    ],
  },
  {
    title: "Arthritis Relief",
    description: "Gentle yet effective homoeopathic care for joint pain, stiffness, and inflammation.",
    image: arthritisImage,
    alt: "Arthritis treatment - Joint pain relief with homoeopathy",
    link: "/arthritis",
    benefits: [
      "Significant pain reduction",
      "Improved joint mobility",
      "Reduced inflammation naturally",
      "Long-term relief without side effects",
      "Enhanced quality of life",
    ],
  },
  {
    title: "Cold & Flu Treatment",
    description: "Strengthen immunity and recover faster with proven homoeopathic remedies for respiratory health.",
    image: coldFluImage,
    alt: "Cold and flu treatment - Natural immune boost",
    link: "/cold-flu",
    benefits: [
      "Quick symptom relief",
      "Boosted immune system",
      "Prevention of recurring infections",
      "Safe for all ages",
      "No drowsiness or side effects",
    ],
  },
  {
    title: "Skin Health Solutions",
    description: "Comprehensive homoeopathic treatment for various skin conditions including acne, eczema, and psoriasis.",
    image: skinImage,
    alt: "Skin health treatment - Natural dermatology care",
    link: "/skin-issues",
    benefits: [
      "Clear, healthy complexion",
      "Root cause treatment",
      "Long-lasting results",
      "Safe for sensitive skin",
      "No harsh chemicals",
    ],
  },
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services - अनंत आरोग्य सदन | Homoeopathy Treatments";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore comprehensive homoeopathic treatments at अनंत आरोग्य सदन. Specialized care for diabetes, arthritis, cold & flu, skin conditions, and more. Natural healing with personalized treatment plans.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Our Homoeopathy Services - Specialized Treatments");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Complete range of homoeopathic treatments for chronic and acute conditions. Expert care with proven natural remedies.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-services-page-title">
                Our Specialized Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-services-page-subtitle">
                Comprehensive homoeopathic treatments for chronic and acute conditions. 
                Experience the gentle power of natural healing tailored to your unique health needs.
              </p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-service-detail-${index}`}
                >
                  <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    <div className={`relative aspect-video md:aspect-auto ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold mb-4" data-testid={`text-service-detail-title-${index}`}>
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid={`text-service-detail-description-${index}`}>
                        {service.description}
                      </p>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3 text-lg">Treatment Benefits:</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, bIndex) => (
                            <li 
                              key={bIndex} 
                              className="flex items-start gap-2"
                              data-testid={`text-service-benefit-${index}-${bIndex}`}
                            >
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href={service.link}>
                        <Button className="gap-2 group" data-testid={`button-service-detail-learn-more-${index}`}>
                          Learn More & Book Consultation
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
