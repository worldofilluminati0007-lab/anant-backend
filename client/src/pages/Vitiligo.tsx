import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Palette, Sun, Shield } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Vitiligo() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Vitiligo Treatment - अनंत आरोग्य सदन | Pigmentation Restoration";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Natural homoeopathic treatment for vitiligo at अनंत आरोग्य सदन. Restore skin pigmentation naturally, improve appearance, and rebuild confidence. Book consultation today.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Vitiligo Treatment - Natural Pigmentation Restoration");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Treat vitiligo naturally with homoeopathic remedies. Restore pigmentation and improve skin appearance safely.");
    }
  }, []);

  const symptoms = [
    "Loss of skin pigmentation in patches",
    "White patches that gradually expand",
    "Premature graying of hair",
    "Loss of color in mucous membranes",
    "Increased sensitivity to sun exposure",
  ];

  const causes = [
    "Autoimmune dysfunction",
    "Genetic predisposition",
    "Emotional stress and trauma",
    "Environmental triggers",
    "Nutritional deficiencies",
  ];

  const treatmentApproach = [
    "Personalized remedies to restore pigmentation",
    "Regulate immune system function naturally",
    "Address underlying constitutional factors",
    "Manage emotional and stress triggers",
    "Nutritional support and dietary guidance",
    "Prevention of further pigmentation loss",
  ];

  const scrollToBooking = () => {
    window.location.href = "/#booking";
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative h-64 overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-600" data-testid="section-disease-hero">
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-disease-title">
                Vitiligo Treatment
              </h1>
              <p className="text-xl text-white/90 max-w-2xl" data-testid="text-disease-subtitle">
                Natural homoeopathic solutions for pigmentation restoration
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" data-testid="section-overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6" data-testid="text-about-title">
                  Understanding Vitiligo
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Vitiligo is an autoimmune condition causing loss of skin pigmentation. Our homoeopathic treatment works to restore pigmentation and regulate immune function naturally.
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
              <div className="bg-gradient-to-br from-indigo-100 dark:from-indigo-900/30 to-indigo-50 dark:to-indigo-900/10 rounded-lg p-8" data-testid="card-info-box">
                <Palette className="w-16 h-16 text-indigo-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Key Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <Sun className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Affects 1-2% of global population</span>
                  </li>
                  <li className="flex gap-2">
                    <Shield className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Early treatment yields best results</span>
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
                { title: "Pigment Restoration", desc: "Gradually restore natural skin color" },
                { title: "Immune Balance", desc: "Regulate immune function naturally" },
                { title: "Confidence Boost", desc: "Improved appearance and self-esteem" },
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
              Restore Your Natural Beauty
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-cta-description">
              Start your homoeopathic vitiligo treatment journey with our expert practitioners.
            </p>
            <Button
              size="lg"
              className="gap-2 text-lg"
              onClick={scrollToBooking}
              data-testid="button-book-vitiligo"
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
