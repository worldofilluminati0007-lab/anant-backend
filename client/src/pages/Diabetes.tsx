import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Activity, Heart, Target } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import diabetesImage from "@assets/generated_images/diabetes_homoeopathy_treatment_illustration.png";

export default function Diabetes() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Diabetes Management - अनंत आरोग्य सदन | Homoeopathy Treatment";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Natural homoeopathic treatment for diabetes management at अनंत आरोग्य सदन. Effective blood sugar control, personalized care, and holistic approach to prevent complications. Book consultation today.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Diabetes Management - Natural Homoeopathic Treatment");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Manage diabetes naturally with personalized homoeopathic treatment. Safe, effective remedies for blood sugar control and prevention of complications.");
    }
  }, []);

  const symptoms = [
    "Frequent urination and excessive thirst",
    "Unexplained weight loss or gain",
    "Persistent fatigue and weakness",
    "Blurred vision and slow healing wounds",
    "Tingling or numbness in hands and feet",
  ];

  const causes = [
    "Genetic predisposition and family history",
    "Poor diet and lifestyle choices",
    "Lack of physical activity",
    "Obesity and metabolic disorders",
    "Chronic stress and hormonal imbalances",
  ];

  const treatmentApproach = [
    "Personalized homoeopathic remedies to regulate blood sugar naturally",
    "Constitutional treatment addressing root causes",
    "Dietary guidance and nutrition counseling",
    "Lifestyle modifications for long-term management",
    "Regular monitoring and follow-up consultations",
    "Prevention of diabetes-related complications",
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
            src={diabetesImage}
            alt="Diabetes management through homoeopathy - Natural treatment approach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-disease-title">
                Diabetes Management
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Natural homoeopathic approach to managing blood sugar levels and preventing complications
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6" data-testid="text-overview-title">
                Understanding Diabetes
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Diabetes is a chronic metabolic disorder characterized by elevated blood sugar levels. 
                At <span style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }} className="font-semibold">अनंत आरोग्य सदन</span>, 
                we offer comprehensive homoeopathic treatment that addresses not just the symptoms but the underlying 
                causes of diabetes, helping you achieve better blood sugar control naturally.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our holistic approach combines constitutional homoeopathic remedies with dietary guidance and lifestyle 
                modifications to help manage Type 1 and Type 2 diabetes effectively, reducing dependency on conventional 
                medications and preventing long-term complications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="p-8" data-testid="card-symptoms">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Common Symptoms</h3>
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
              <h3 className="text-3xl font-bold mb-4">Ready to Take Control of Your Diabetes?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a consultation with our experienced homoeopathic practitioners and start your journey 
                towards better health and natural blood sugar management.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={scrollToBooking} data-testid="button-book-consultation">
                  Book Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open("https://wa.me/919288060107?text=I would like to know more about diabetes treatment", "_blank")}
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
