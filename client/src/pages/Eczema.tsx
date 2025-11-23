import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Droplet, Shield, Heart } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Eczema() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Eczema Treatment - अनंत आरोग्य सदन | Natural Skin Soothing";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Natural homoeopathic treatment for eczema at अनंत आरोग्य सदन. Soothe irritation, reduce itching, and heal damaged skin. Safe alternative to steroids. Book consultation today.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Eczema Treatment - Natural Skin Care");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Treat eczema naturally with homoeopathic remedies. Soothe itching, reduce inflammation, and restore skin health safely.");
    }
  }, []);

  const symptoms = [
    "Intense itching, especially at night",
    "Red, inflamed, and swollen skin",
    "Dry, sensitive, cracked skin",
    "Small raised bumps prone to leaking fluid",
    "Raw, swollen skin from scratching",
  ];

  const causes = [
    "Genetic predisposition and family history",
    "Environmental allergies and irritants",
    "Weakened skin barrier function",
    "Stress and emotional factors",
    "Poor immune system response",
  ];

  const treatmentApproach = [
    "Personalized remedies to reduce itching naturally",
    "Strengthen and repair skin barrier",
    "Address allergic responses and triggers",
    "Soothe inflammation without steroids",
    "Enhance immune system function",
    "Prevent recurrence and flare-ups",
  ];

  const scrollToBooking = () => {
    window.location.href = "/#booking";
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative h-64 overflow-hidden bg-gradient-to-r from-amber-900 via-amber-700 to-amber-600" data-testid="section-disease-hero">
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-disease-title">
                Eczema Treatment
              </h1>
              <p className="text-xl text-white/90 max-w-2xl" data-testid="text-disease-subtitle">
                Natural homoeopathic relief for itchy, inflamed skin
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" data-testid="section-overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6" data-testid="text-about-title">
                  Understanding Eczema
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Eczema causes intense itching and skin inflammation. Our homoeopathic approach soothes symptoms and strengthens the skin barrier for lasting relief without steroids.
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
              <div className="bg-gradient-to-br from-amber-100 dark:from-amber-900/30 to-amber-50 dark:to-amber-900/10 rounded-lg p-8" data-testid="card-info-box">
                <Droplet className="w-16 h-16 text-amber-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Key Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <Heart className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Affects 10-20% of children worldwide</span>
                  </li>
                  <li className="flex gap-2">
                    <Shield className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Homoeopathy offers steroid-free relief</span>
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
                { title: "Itch Relief", desc: "Reduce intense itching and scratching urges" },
                { title: "No Steroids", desc: "Safe alternative without harmful side effects" },
                { title: "Healthy Skin", desc: "Restore skin barrier and natural balance" },
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
              Relief is Just a Consultation Away
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-cta-description">
              Get personalized eczema treatment from our experienced homoeopaths.
            </p>
            <Button
              size="lg"
              className="gap-2 text-lg"
              onClick={scrollToBooking}
              data-testid="button-book-eczema"
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
