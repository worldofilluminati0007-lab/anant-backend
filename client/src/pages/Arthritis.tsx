import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Activity, Heart, Target } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import arthritisImage from "@assets/generated_images/arthritis_joint_relief_treatment.png";

export default function Arthritis() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Arthritis Relief - अनंत आरोग्य सदन | Natural Joint Pain Treatment";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Gentle homoeopathic treatment for arthritis relief at अनंत आरोग्य सदन. Natural pain relief, reduced inflammation, and improved joint mobility without side effects. Expert care for all types of arthritis.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Arthritis Relief - Natural Joint Pain Treatment");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Find lasting relief from arthritis pain with natural homoeopathic remedies. Improve mobility and reduce inflammation safely.");
    }
  }, []);

  const symptoms = [
    "Joint pain and persistent stiffness",
    "Swelling and inflammation in joints",
    "Reduced range of motion and flexibility",
    "Morning stiffness lasting more than 30 minutes",
    "Warmth and tenderness in affected joints",
  ];

  const causes = [
    "Age-related wear and tear of cartilage",
    "Autoimmune conditions affecting joints",
    "Previous injuries or joint trauma",
    "Obesity putting excess stress on joints",
    "Genetic predisposition and family history",
  ];

  const treatmentApproach = [
    "Constitutional homoeopathic treatment for root cause healing",
    "Natural pain relief without side effects",
    "Anti-inflammatory remedies to reduce swelling",
    "Improved joint mobility and flexibility",
    "Preventive care to slow disease progression",
    "Personalized exercise and lifestyle recommendations",
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
            src={arthritisImage}
            alt="Arthritis relief treatment - Natural joint pain management with homoeopathy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-disease-title">
                Arthritis Relief
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Gentle homoeopathic treatment for joint pain, inflammation, and improved mobility
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6" data-testid="text-overview-title">
                Understanding Arthritis
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Arthritis encompasses various conditions causing joint inflammation, pain, and stiffness. 
                Whether you're dealing with osteoarthritis, rheumatoid arthritis, or other forms of joint inflammation, 
                <span style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }} className="font-semibold"> अनंत आरोग्य सदन </span>
                offers effective homoeopathic solutions that provide lasting relief.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our natural approach focuses on reducing inflammation, alleviating pain, and improving joint function 
                without the side effects of conventional medications. We treat the underlying causes to provide sustainable 
                improvement in your quality of life.
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
              <h3 className="text-3xl font-bold mb-4">Ready to Find Relief from Joint Pain?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover the gentle power of homoeopathy for arthritis relief. Book your consultation 
                today and take the first step towards improved mobility and pain-free living.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={scrollToBooking} data-testid="button-book-consultation">
                  Book Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open("https://wa.me/919999999999?text=I would like to know more about arthritis treatment", "_blank")}
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
