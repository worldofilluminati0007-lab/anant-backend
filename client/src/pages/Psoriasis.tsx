import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Leaf, Shield } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Psoriasis() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Psoriasis Treatment - अनंत आरोग्य सदन | Natural Skin Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Natural homoeopathic treatment for psoriasis at अनंत आरोग्य सदन. Reduce inflammation, soothe skin, and address root causes. Safe, effective remedy for clear skin. Book consultation today.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Psoriasis Treatment - Natural Skin Care Solutions");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Treat psoriasis naturally with homoeopathic remedies. Reduce plaques, soothe inflammation, and restore healthy skin.");
    }
  }, []);

  const symptoms = [
    "Red, inflamed patches on skin",
    "Thick, silvery scales and plaques",
    "Itching, burning, and discomfort",
    "Dry, cracked skin prone to bleeding",
    "Nail thickening and discoloration",
  ];

  const causes = [
    "Immune system dysfunction",
    "Genetic predisposition",
    "Stress and emotional triggers",
    "Environmental factors and climate",
    "Skin infections and injuries",
  ];

  const treatmentApproach = [
    "Personalized homoeopathic remedies for skin healing",
    "Reduce inflammation and soothe irritation",
    "Strengthen immune system",
    "Address emotional and stress triggers",
    "Dietary recommendations for skin health",
    "Prevention of recurrence and flare-ups",
  ];

  const scrollToBooking = () => {
    window.location.href = "/#booking";
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative h-64 overflow-hidden bg-gradient-to-r from-red-900 via-red-700 to-red-600" data-testid="section-disease-hero">
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-disease-title">
                Psoriasis Treatment
              </h1>
              <p className="text-xl text-white/90 max-w-2xl" data-testid="text-disease-subtitle">
                Natural homoeopathic solutions for healthy, clear skin
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" data-testid="section-overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6" data-testid="text-about-title">
                  Understanding Psoriasis
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Psoriasis is a chronic autoimmune condition affecting skin health. Our homoeopathic treatment addresses the root immune dysfunction and provides long-term relief naturally.
                </p>
                <div className="space-y-4">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex gap-3" data-testid={`item-symptom-${index}`}>
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-100 dark:from-red-900/30 to-red-50 dark:to-red-900/10 rounded-lg p-8" data-testid="card-info-box">
                <Sparkles className="w-16 h-16 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Key Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <Leaf className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Affects 2-3% of global population</span>
                  </li>
                  <li className="flex gap-2">
                    <Shield className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Homoeopathy provides safe, long-term relief</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30" data-testid="section-treatment">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center" data-testid="text-treatment-title">
              Our Homoeopathic Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6" data-testid="card-causes">
                <h3 className="text-xl font-bold mb-4">Root Causes We Address</h3>
                <ul className="space-y-3">
                  {causes.map((cause, index) => (
                    <li key={index} className="flex gap-3" data-testid={`item-cause-${index}`}>
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground">{cause}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6" data-testid="card-treatment">
                <h3 className="text-xl font-bold mb-4">Our Treatment Strategy</h3>
                <ul className="space-y-3">
                  {treatmentApproach.map((approach, index) => (
                    <li key={index} className="flex gap-3" data-testid={`item-approach-${index}`}>
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{approach}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" data-testid="section-benefits">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center" data-testid="text-benefits-title">
              Benefits of Homoeopathic Treatment
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Natural Healing", desc: "Safe remedies without harsh chemicals" },
                { title: "Lasting Results", desc: "Address root causes for permanent relief" },
                { title: "Improved Confidence", desc: "Clear skin and restored self-esteem" },
              ].map((benefit, index) => (
                <Card key={index} className="p-6 text-center" data-testid={`card-benefit-${index}`}>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30 text-center" data-testid="section-cta">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-cta-title">
              Ready for Healthy Skin?
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-cta-description">
              Consult with our homoeopaths to create a personalized treatment plan for psoriasis relief.
            </p>
            <Button
              size="lg"
              className="gap-2 text-lg"
              onClick={scrollToBooking}
              data-testid="button-book-psoriasis"
            >
              <SiWhatsapp className="w-5 h-5" />
              Book Consultation Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
