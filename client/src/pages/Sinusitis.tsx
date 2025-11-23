import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Droplets, Smile, Shield } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Sinusitis() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sinusitis Treatment - अनंत आरोग्य सदन | Natural Sinus Relief";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Natural homoeopathic treatment for sinusitis at अनंत आरोग्य सदन. Clear nasal congestion, reduce inflammation, and prevent recurrence. Book consultation today.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Sinusitis Treatment - Natural Sinus Care");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Treat sinusitis naturally with homoeopathic remedies. Clear congestion, reduce inflammation, and improve sinus health safely.");
    }
  }, []);

  const symptoms = [
    "Nasal congestion and blocked sinuses",
    "Persistent facial pain and pressure",
    "Thick nasal discharge and post-nasal drip",
    "Headaches and sinus headaches",
    "Reduced sense of smell and taste",
  ];

  const causes = [
    "Bacterial or viral infections",
    "Allergies and environmental triggers",
    "Nasal polyps and structural issues",
    "Weak immune system function",
    "Chronic inflammation of sinuses",
  ];

  const treatmentApproach = [
    "Personalized remedies to reduce inflammation",
    "Clear nasal passages and congestion naturally",
    "Address underlying infections",
    "Strengthen immune system function",
    "Prevent recurrent sinus infections",
    "Restore normal breathing and function",
  ];

  const scrollToBooking = () => {
    window.location.href = "/#booking";
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative h-64 overflow-hidden bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-600" data-testid="section-disease-hero">
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-disease-title">
                Sinusitis Treatment
              </h1>
              <p className="text-xl text-white/90 max-w-2xl" data-testid="text-disease-subtitle">
                Natural homoeopathic relief for sinus problems
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" data-testid="section-overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6" data-testid="text-about-title">
                  Understanding Sinusitis
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Sinusitis causes inflammation and congestion of sinus passages. Our homoeopathic treatment reduces inflammation, clears congestion, and prevents recurrence naturally.
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
              <div className="bg-gradient-to-br from-cyan-100 dark:from-cyan-900/30 to-cyan-50 dark:to-cyan-900/10 rounded-lg p-8" data-testid="card-info-box">
                <Droplets className="w-16 h-16 text-cyan-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Key Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <Smile className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span>One of most common conditions worldwide</span>
                  </li>
                  <li className="flex gap-2">
                    <Shield className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span>Homoeopathy prevents antibiotic resistance</span>
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
                { title: "Clear Sinuses", desc: "Natural relief from congestion and pressure" },
                { title: "No Antibiotics", desc: "Avoid antibiotic resistance safely" },
                { title: "Prevention", desc: "Reduce recurrent sinus infections" },
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
              Get Your Sinuses Back to Normal
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-cta-description">
              Experience natural sinusitis relief with our homoeopathic treatment experts.
            </p>
            <Button
              size="lg"
              className="gap-2 text-lg"
              onClick={scrollToBooking}
              data-testid="button-book-sinusitis"
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
