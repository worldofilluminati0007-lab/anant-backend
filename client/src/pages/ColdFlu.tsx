import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Activity, Heart, Target } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import coldFluImage from "@assets/generated_images/cold_flu_natural_treatment.png";

export default function ColdFlu() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cold & Flu Treatment - अनंत आरोग्य सदन | Natural Immune Support";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Natural homoeopathic treatment for cold and flu at अनंत आरोग्य सदन. Boost immunity, quick symptom relief, and prevention of recurring infections. Safe for all ages without side effects.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Cold & Flu Treatment - Natural Immune System Support");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Recover faster from cold and flu with gentle homoeopathic remedies. Strengthen your immune system naturally and prevent recurring infections.");
    }
  }, []);

  const symptoms = [
    "Persistent cough and congestion",
    "Sore throat and difficulty swallowing",
    "Fever, chills, and body aches",
    "Runny or stuffy nose",
    "Fatigue and general weakness",
  ];

  const causes = [
    "Viral infections attacking respiratory system",
    "Weakened immune system",
    "Seasonal changes and weather fluctuations",
    "Exposure to infected individuals",
    "Stress and inadequate rest",
  ];

  const treatmentApproach = [
    "Quick symptom relief with gentle homoeopathic remedies",
    "Immune system strengthening for prevention",
    "Safe treatment suitable for all ages including children",
    "No drowsiness or adverse side effects",
    "Prevention of recurring infections",
    "Support for faster recovery and convalescence",
  ];

  const scrollToBooking = () => {
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative h-64 overflow-hidden" data-testid="section-disease-hero">
          <img
            src={coldFluImage}
            alt="Cold and flu natural treatment - Immune system boost with homoeopathy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-disease-title">
                Cold & Flu Treatment
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Natural homoeopathic remedies for quick recovery and immune system support
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6" data-testid="text-overview-title">
                Understanding Cold & Flu
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Common cold and influenza are viral respiratory infections that affect millions each year. 
                While they share similar symptoms, proper treatment is essential for quick recovery and preventing complications. 
                <span style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }} className="font-semibold"> अनंत आरोग्य सदन </span>
                provides effective homoeopathic solutions that boost your natural immunity and promote faster healing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our gentle remedies work with your body's natural defense mechanisms, providing relief from symptoms 
                while strengthening your immune system to prevent future infections. Safe for the entire family, 
                our treatments have no side effects and help you recover naturally.
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
              <h3 className="text-3xl font-bold mb-4">Ready to Strengthen Your Immunity?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't let cold and flu slow you down. Get natural, effective treatment that boosts your immunity 
                and helps you recover faster. Book your consultation today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={scrollToBooking} data-testid="button-book-consultation">
                  Book Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open("https://wa.me/919288060107?text=I would like to know more about cold and flu treatment", "_blank")}
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
      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        diseaseTitle="Cold & Flu Treatment"
      />
      <Footer />
    </div>
  );
}
