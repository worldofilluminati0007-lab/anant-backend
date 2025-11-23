import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Brain, Zap, Shield } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Migraine() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Migraine Relief - अनंत आरोग्य सदन | Natural Headache Treatment";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Effective homoeopathic treatment for migraine relief at अनंत आरोग्य सदन. Natural pain management, prevention of attacks, and improved quality of life without side effects. Book consultation today.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Migraine Relief - Natural Headache Treatment");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Find lasting relief from migraines with natural homoeopathic remedies. Reduce frequency and intensity of headaches safely.");
    }
  }, []);

  const symptoms = [
    "Intense throbbing headaches, usually on one side",
    "Nausea and vomiting during episodes",
    "Sensitivity to light and sound",
    "Visual disturbances and aura",
    "Weakness and fatigue after attacks",
  ];

  const causes = [
    "Hormonal changes and stress",
    "Dietary triggers and lifestyle factors",
    "Poor sleep patterns and fatigue",
    "Environmental changes",
    "Nervous system sensitivity",
  ];

  const treatmentApproach = [
    "Personalized homoeopathic remedies for pain management",
    "Attack prevention and frequency reduction",
    "Constitutional treatment addressing triggers",
    "Dietary and lifestyle modifications",
    "Stress management techniques",
    "Long-term management without dependency",
  ];

  const scrollToBooking = () => {
    window.location.href = "/#booking";
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative h-64 overflow-hidden bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600" data-testid="section-disease-hero">
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-disease-title">
                Migraine Relief
              </h1>
              <p className="text-xl text-white/90 max-w-2xl" data-testid="text-disease-subtitle">
                Natural homoeopathic treatment for effective headache management
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" data-testid="section-overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6" data-testid="text-about-title">
                  Understanding Migraine
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Migraines are severe, debilitating headaches often accompanied by nausea and sensitivity to light and sound. Our homoeopathic approach focuses on reducing frequency and intensity while addressing the root causes.
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
              <div className="bg-gradient-to-br from-purple-100 dark:from-purple-900/30 to-purple-50 dark:to-purple-900/10 rounded-lg p-8" data-testid="card-info-box">
                <Brain className="w-16 h-16 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Key Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <Zap className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Affects 15-20% of population</span>
                  </li>
                  <li className="flex gap-2">
                    <Shield className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Prevention is more effective than treatment</span>
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
                { title: "No Side Effects", desc: "Safe, natural remedies with no harmful effects" },
                { title: "Long-term Relief", desc: "Address root causes for permanent improvement" },
                { title: "Better Quality of Life", desc: "Reduced frequency and severity of attacks" },
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
              Ready to Find Relief?
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-cta-description">
              Book a consultation with our expert homoeopaths to develop a personalized treatment plan for your migraines.
            </p>
            <Button
              size="lg"
              className="gap-2 text-lg"
              onClick={scrollToBooking}
              data-testid="button-book-migraine"
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
