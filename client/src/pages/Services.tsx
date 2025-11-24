import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Brain, Heart, Zap, Leaf, Shield, Eye, Pill, Users, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Condition {
  name: string;
  description: string;
  link: string;
}

interface DiseaseCategory {
  category: string;
  icon: React.ComponentType<any>;
  description: string;
  conditions: Condition[];
}

const diseaseCategories: DiseaseCategory[] = [
  {
    category: "Neurological & Seizures",
    icon: Zap,
    description: "Specialized treatment for neurological disorders and seizure management",
    conditions: [
      { name: "Epilepsy", description: "Long-term seizure management and control", link: "/epilepsy" },
      { name: "Migraines & Headaches", description: "Chronic headache relief and prevention", link: "/migraine" },
      { name: "Sciatica & Nerve Pain", description: "Neuralgia and nerve pain relief", link: "/sciatica" },
    ],
  },
  {
    category: "Endocrine & Metabolic",
    icon: Pill,
    description: "Treatment for hormonal imbalances and metabolic disorders",
    conditions: [
      { name: "Thyroid Disorders", description: "Hormonal balance and thyroid health restoration", link: "/thyroid-disorders" },
      { name: "Diabetes", description: "Blood sugar regulation and diabetes management", link: "/diabetes" },
      { name: "High Cholesterol", description: "Natural cholesterol level reduction", link: "/cholesterol" },
    ],
  },
  {
    category: "Urinary & Digestive",
    icon: AlertCircle,
    description: "Comprehensive care for urinary and digestive health issues",
    conditions: [
      { name: "Kidney & Gallbladder Stones", description: "Natural stone dissolution support", link: "/kidney-gallbladder-stones" },
      { name: "Piles & Hemorrhoids", description: "Natural relief without surgery", link: "/piles-hemorrhoids" },
      { name: "Fistula in Ano", description: "Rectal health restoration", link: "/fistula" },
    ],
  },
  {
    category: "Musculoskeletal",
    icon: Heart,
    description: "Joint, bone and tumor-related health conditions",
    conditions: [
      { name: "Arthritis & Joint Pain", description: "Mobility improvement and pain relief", link: "/arthritis" },
      { name: "Tumors (Body, Bone, Uterine)", description: "Comprehensive tumor management", link: "/tumors" },
    ],
  },
  {
    category: "Dermatological",
    icon: Leaf,
    description: "Complete skin and dermatological condition management",
    conditions: [
      { name: "Eczema & Dermatitis", description: "Chronic skin condition relief", link: "/eczema" },
      { name: "Psoriasis", description: "Skin health restoration and itch relief", link: "/psoriasis" },
      { name: "Warts & Skin Growths", description: "Skin growth removal and prevention", link: "/warts" },
      { name: "Acne & Pimples", description: "Teenage and adult skin health", link: "/acne-pimples" },
      { name: "Vitiligo & White Patches", description: "Pigmentation restoration", link: "/vitiligo" },
      { name: "Skin Diseases", description: "All dermatological conditions", link: "/skin-diseases" },
      { name: "Cysts & Nodules", description: "Benign growth management", link: "/cysts-nodules" },
    ],
  },
  {
    category: "Respiratory",
    icon: Shield,
    description: "Natural treatment for breathing and respiratory conditions",
    conditions: [
      { name: "Asthma", description: "Chronic respiratory condition management", link: "/asthma-original" },
      { name: "Sinusitis", description: "Sinus health and congestion relief", link: "/sinusitis" },
      { name: "Cold & Flu", description: "Natural immune support and recovery", link: "/cold-flu" },
    ],
  },
  {
    category: "Infectious Diseases",
    icon: Shield,
    description: "Treatment for acute infectious conditions",
    conditions: [
      { name: "Typhoid Fever", description: "Acute infection management", link: "/typhoid" },
    ],
  },
  {
    category: "Women's Health",
    icon: Heart,
    description: "Specialized care for women's reproductive and hormonal health",
    conditions: [
      { name: "Leucorrhoea", description: "Gynecological health restoration", link: "/leucorrhoea" },
      { name: "Breast Cancer & Tumors", description: "Specialized breast health support", link: "/breast-cancer" },
    ],
  },
  {
    category: "Men's Health",
    icon: Users,
    description: "Specialized care for male sexual and reproductive health",
    conditions: [
      { name: "Spermatorrhea", description: "Male sexual health support", link: "/spermatorrhea" },
    ],
  },
  {
    category: "Eye Conditions",
    icon: Eye,
    description: "Vision and eye health improvement",
    conditions: [
      { name: "Retinal Disorders", description: "Vision-related health conditions", link: "/retinal-disorders" },
    ],
  },
  {
    category: "Allergies & Immunity",
    icon: Leaf,
    description: "Natural allergy management and immune system strengthening",
    conditions: [
      { name: "Allergic Disorders", description: "Natural allergy management", link: "/allergies" },
    ],
  },
];

const treatmentSteps = [
  {
    step: 1,
    title: "Comprehensive Consultation",
    description: "We conduct an in-depth analysis of your complete medical history, lifestyle, diet, family background, and emotional state.",
  },
  {
    step: 2,
    title: "Detailed Symptom Analysis",
    description: "Physical, mental, and emotional symptoms are carefully studied to understand your unique constitutional makeup.",
  },
  {
    step: 3,
    title: "Precise Remedy Selection",
    description: "Based on your individual symptom picture, we select the one correct homeopathic remedy that matches your constitution.",
  },
  {
    step: 4,
    title: "Minimum Dose Administration",
    description: "Medicine is prescribed in minimum effective dose, typically given once monthly for optimal results.",
  },
  {
    step: 5,
    title: "Regular Monitoring",
    description: "We track your progress and adjust treatment as your body's natural healing response activates.",
  },
  {
    step: 6,
    title: "Long-term Wellness",
    description: "Gradual healing and reduced medication dependency lead to sustained, long-term health improvement.",
  },
];

const servicesBenefits = [
  "Addresses root cause of disease, not just symptoms",
  "Activates body's natural self-healing mechanism",
  "Safe and gentle with minimal side effects",
  "Reduces or eliminates medication dependency",
  "Treats the whole person—body, mind, emotions",
  "Sustained improvement over time",
  "Many chronic conditions achieve permanent resolution",
  "Personalized care tailored to each individual",
];

export default function Services() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services - Homoeopathic Treatment | Anant Arogya Sadan";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Comprehensive homoeopathic treatment for 24+ chronic and acute conditions. Expert care across 11 health domains with personalized approach and proven results.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive homoeopathic treatment for acute and chronic conditions with personalized care and proven results
            </p>
          </div>
        </section>

        {/* Disease Categories */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Conditions We Treat
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Expert homeopathic treatment across 11 specialized health domains with proven success and personalized care
              </p>
            </div>

            <div className="space-y-16">
              {diseaseCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div key={idx} className="group">
                    {/* Category Header */}
                    <div className="mb-10 flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border-2 border-primary/30 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {cat.category}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {cat.description}
                        </p>
                        <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-3 group-hover:w-16 transition-all" />
                      </div>
                    </div>

                    {/* Conditions Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 md:ml-22">
                      {cat.conditions.map((condition, cIdx) => (
                        <Link key={cIdx} href={condition.link}>
                          <Card 
                            className="p-6 border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer group/card h-full bg-gradient-to-br from-white to-primary/5 hover:from-primary/5 hover:to-accent/5" 
                          >
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center border border-primary/30 flex-shrink-0 group-hover/card:bg-primary/25 group-hover/card:scale-110 transition-all duration-300">
                                <CheckCircle2 className="w-6 h-6 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-lg font-bold text-foreground group-hover/card:text-primary transition-colors duration-300 mb-2 line-clamp-2">
                                  {condition.name}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                  {condition.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-primary text-sm font-semibold mt-4 group-hover/card:translate-x-2 transition-transform duration-300">
                              Learn More <ArrowRight className="w-4 h-4" />
                            </div>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Treatment Process */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-primary/5 via-white to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                How Our Treatment Works
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic, personalized approach to homoeopathic healing with proven results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentSteps.map((item, idx) => (
                <Card 
                  key={idx} 
                  className="p-8 border-2 border-primary/20 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-primary/3 group relative overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Process flow indicator */}
            <div className="mt-16 hidden lg:block">
              <div className="flex items-center justify-center gap-4 text-primary">
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {i < 5 && <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Why Choose Our Approach?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience comprehensive healing that addresses the root cause of disease
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <ul className="space-y-5">
                  {servicesBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="p-10 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border-2 border-primary/30 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-3xl font-bold mb-8 text-foreground">
                  Philosophy: <span className="text-primary">Single Remedy,</span><br /><span className="text-primary">Minimum Dose</span>
                </h3>
                
                <div className="space-y-8">
                  <div className="pb-8 border-b-2 border-primary/20">
                    <h4 className="font-semibold text-foreground mb-3 text-lg flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Why This Approach?
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Multiple remedies can confuse the body's healing response. One correct remedy, precisely matched to your unique constitution, produces superior and lasting results.
                    </p>
                  </div>

                  <div className="pb-8 border-b-2 border-primary/20">
                    <h4 className="font-semibold text-foreground mb-3 text-lg flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      How It Works?
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The remedy is given once monthly in minimum effective dose. This allows your vital force (innate healing power) to activate gradually, heal deeply, and produce lasting transformation without medication dependency.
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-2xl font-bold text-foreground italic">
                      "Right medicine,<br />not more medicine."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary/90 to-accent text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.1))'}} />
            <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.1))'}} />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Book your consultation today and experience personalized homeopathic care with proven results. Our experts are ready to help you achieve optimal health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() => setBookingModalOpen(true)}
                className="px-10 py-4 bg-white text-primary font-bold hover:bg-white/90 shadow-lg hover:shadow-xl transition-all text-lg"
              >
                Book Consultation Now
              </Button>
              <Link href="/">
                <Button
                  variant="outline"
                  className="px-10 py-4 border-2 border-white text-white hover:bg-white/10 font-bold shadow-lg hover:shadow-xl transition-all text-lg"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <BookingModal
          open={bookingModalOpen}
          onOpenChange={setBookingModalOpen}
          diseaseTitle="Our Services - Consultation"
        />
      </main>
      <Footer />
    </div>
  );
}
