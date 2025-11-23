import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Wind, Activity, Heart } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Asthma() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Asthma Management - अनंत आरोग्य सदन | Natural Respiratory Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Natural homoeopathic treatment for asthma at अनंत आरोग्य सदन. Reduce inflammation, improve breathing, and reduce dependency on inhalers. Book consultation today.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Asthma Management - Natural Respiratory Treatment");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Manage asthma naturally with homoeopathic remedies. Improve breathing, reduce symptoms, and strengthen lung health safely.");
    }
  }, []);

  const symptoms = [
    "Shortness of breath and wheezing",
    "Chest tightness and difficulty breathing",
    "Persistent cough, especially at night",
    "Fatigue and reduced exercise capacity",
    "Frequent respiratory infections",
  ];

  const causes = [
    "Allergies and environmental triggers",
    "Genetic predisposition",
    "Inflammation of airways",
    "Respiratory tract infections",
    "Emotional stress and anxiety",
  ];

  const treatmentApproach = [
    "Personalized remedies to reduce inflammation",
    "Improve respiratory function naturally",
    "Address allergic responses",
    "Strengthen lung capacity and immunity",
    "Reduce dependency on inhalers",
    "Prevention of acute attacks and complications",
  ];

  const scrollToBooking = () => {
    window.location.href = "/#booking";
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative h-64 overflow-hidden bg-gradient-to-r from-sky-900 via-sky-700 to-sky-600" data-testid="section-disease-hero">
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-disease-title">
                Asthma Management
              </h1>
              <p className="text-xl text-white/90 max-w-2xl" data-testid="text-disease-subtitle">
                Natural homoeopathic solutions for better breathing
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" data-testid="section-overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6" data-testid="text-about-title">
                  Understanding Asthma
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Asthma affects millions worldwide. Our homoeopathic approach reduces inflammation, improves breathing capacity, and helps reduce medication dependency naturally.
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
              <div className="bg-gradient-to-br from-sky-100 dark:from-sky-900/30 to-sky-50 dark:to-sky-900/10 rounded-lg p-8" data-testid="card-info-box">
                <Heart className="w-16 h-16 text-sky-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Key Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <Wind className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>Affects 300+ million people globally</span>
                  </li>
                  <li className="flex gap-2">
                    <Activity className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>Early treatment improves long-term outcomes</span>
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
                { title: "Better Breathing", desc: "Improved lung function and oxygen intake" },
                { title: "Fewer Attacks", desc: "Reduced frequency and severity" },
                { title: "Less Medication", desc: "Reduce inhaler dependency safely" },
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
              Breathe Easy with Natural Treatment
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-cta-description">
              Consult with our homoeopaths to develop a personalized asthma management plan.
            </p>
            <Button
              size="lg"
              className="gap-2 text-lg"
              onClick={scrollToBooking}
              data-testid="button-book-asthma"
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
