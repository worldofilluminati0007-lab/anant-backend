import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Activity, Heart, Target } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import skinImage from "@assets/generated_images/skin_health_treatment_homoeopathy.png";

export default function SkinIssues() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skin Health Solutions - अनंत आरोग्य सदन | Natural Dermatology Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Comprehensive homoeopathic treatment for skin conditions at अनंत आरोग्य सदन. Natural solutions for acne, eczema, psoriasis, and pigmentation. Root cause treatment for clear, healthy skin.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Skin Health Solutions - Natural Dermatological Care");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Achieve clear, healthy skin with natural homoeopathic treatment. Safe remedies for acne, eczema, psoriasis, and other skin conditions.");
    }
  }, []);

  const symptoms = [
    "Persistent acne and breakouts",
    "Eczema, psoriasis, or dermatitis patches",
    "Itching, redness, and inflammation",
    "Dry, flaky, or oily skin imbalances",
    "Pigmentation and uneven skin tone",
  ];

  const causes = [
    "Hormonal imbalances and fluctuations",
    "Allergies and environmental triggers",
    "Stress and emotional factors",
    "Poor diet and digestive issues",
    "Genetic predisposition to skin conditions",
  ];

  const treatmentApproach = [
    "Root cause treatment for lasting results",
    "Safe, natural remedies without harsh chemicals",
    "Constitutional treatment addressing internal imbalances",
    "Personalized care for all skin types",
    "Prevention of recurrence and scarring",
    "Holistic approach for clear, healthy complexion",
  ];

  const scrollToBooking = () => {
    window.location.href = "/#booking";
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative h-64 overflow-hidden" data-testid="section-disease-hero">
          <img
            src={skinImage}
            alt="Skin health treatment - Natural dermatological care with homoeopathy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-disease-title">
                Skin Health Solutions
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Comprehensive homoeopathic treatment for clear, healthy, and radiant skin
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6" data-testid="text-overview-title">
                Understanding Skin Health
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Skin conditions can significantly impact your confidence and quality of life. 
                From acne and eczema to psoriasis and pigmentation issues, skin problems often reflect deeper 
                internal imbalances. At 
                <span style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }} className="font-semibold"> अनंत आरोग्य सदन</span>, 
                we treat skin conditions from the inside out with gentle homoeopathic remedies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our holistic approach addresses the root causes of skin problems, whether they stem from hormonal 
                imbalances, allergies, stress, or digestive issues. We provide personalized treatment that works with 
                your body's natural healing processes to achieve clear, healthy skin without harsh chemicals or side effects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="p-8" data-testid="card-symptoms">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Common Conditions</h3>
                </div>
                <ul className="space-y-3">
                  {symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-2" data-testid={`text-symptom-${index}`}>
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8" data-testid="card-causes">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Common Causes</h3>
                </div>
                <ul className="space-y-3">
                  {causes.map((cause, index) => (
                    <li key={index} className="flex items-start gap-2" data-testid={`text-cause-${index}`}>
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{cause}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <Card className="p-8 md:p-12 bg-primary/5 mb-16" data-testid="card-treatment">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Our Treatment Approach</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {treatmentApproach.map((approach, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`text-treatment-${index}`}>
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{approach}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5" data-testid="card-cta">
              <h3 className="text-3xl font-bold mb-4">Ready to Achieve Clear, Healthy Skin?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the transformative power of homoeopathy for skin health. Book your consultation 
                and discover natural solutions for lasting skin wellness.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={scrollToBooking} data-testid="button-book-consultation">
                  Book Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open("https://wa.me/919999999999?text=I would like to know more about skin health treatment", "_blank")}
                  data-testid="button-whatsapp-contact"
                >
                  <SiWhatsapp className="w-5 h-5" />
                  Contact via WhatsApp
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
