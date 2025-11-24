import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Lightbulb, Users, TrendingUp, Clock } from "lucide-react";

interface ConditionPageProps {
  title: string;
  subtitle: string;
  description: string;
  managementFocus: string[];
  triggers: string[];
  symptoms: string[];
  benefits: string[];
  treatmentProcess: string[];
}

export function createConditionPage(props: ConditionPageProps) {
  return function ConditionPage() {
    const [bookingModalOpen, setBookingModalOpen] = useState(false);

    useEffect(() => {
      window.scrollTo(0, 0);
      document.title = `${props.title} | Homoeopathic Treatment`;
    }, []);

    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                {props.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">{props.subtitle}</p>
            </div>
          </section>

          {/* Overview Section with Image */}
          <section className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Understanding {props.title}</h2>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">{props.description}</p>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <p className="font-semibold text-foreground mb-2">Our Treatment Approach</p>
                    <p className="text-muted-foreground">{props.managementFocus[0]}</p>
                  </div>
                </div>

                {/* Image Placeholder - Responsive */}
                <div className="flex justify-center">
                  <div className="w-full max-w-md aspect-square md:aspect-auto md:h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border-4 border-primary/20 shadow-xl overflow-hidden flex items-center justify-center p-4">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏥</div>
                      <p className="text-muted-foreground font-semibold">Condition Image</p>
                      <p className="text-xs text-muted-foreground/60 mt-2">Upload your image (any size)</p>
                      <p className="text-xs text-muted-foreground/50 mt-1">PNG, JPG, WebP - Will auto-adjust</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Management Focus */}
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mt-12">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Treatment Focus</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {props.managementFocus.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>

          {/* Symptoms & Triggers */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-primary/8 to-accent/8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Triggers */}
                <Card className="p-8 border border-primary/10 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    Common Triggers
                  </h3>
                  <ul className="space-y-3">
                    {props.triggers.map((trigger, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{trigger}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Symptoms */}
                <Card className="p-8 border border-primary/10 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-accent" />
                    Key Symptoms
                  </h3>
                  <ul className="space-y-3">
                    {props.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-muted-foreground">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </section>

          {/* Treatment Process */}
          <section className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Our Treatment Process</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {props.treatmentProcess.map((step, idx) => (
                  <Card key={idx} className="p-8 border border-primary/10 shadow-md hover:shadow-lg transition-all">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mb-4 text-white font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-foreground font-semibold">{step}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Expected Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {props.benefits.map((benefit, idx) => (
                  <Card key={idx} className="p-6 border border-primary/10 shadow-md hover:shadow-lg transition-all">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">{benefit}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Why Choose Us?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-8 text-center border border-primary/10 shadow-lg">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">Expert Care</h3>
                  <p className="text-muted-foreground">
                    Decades of experience treating {props.title.toLowerCase()} with proven results and personalized approach.
                  </p>
                </Card>

                <Card className="p-8 text-center border border-primary/10 shadow-lg">
                  <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Thousands of patients have experienced significant improvement in their health outcomes.
                  </p>
                </Card>

                <Card className="p-8 text-center border border-primary/10 shadow-lg">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">Long-term Benefits</h3>
                  <p className="text-muted-foreground">
                    Our constitutional approach works towards lasting health improvement, not just symptom relief.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Treatment Philosophy */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-primary/8 to-accent/8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="p-12 border border-primary/20 shadow-lg bg-white">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Philosophy: Single Remedy, Minimum Dose</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We believe in the power of minimal intervention with maximum effect. By selecting the single most appropriate remedy matched to your unique symptom picture, we activate your body's inherent healing capacity.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This approach minimizes side effects while maximizing therapeutic benefit, allowing you to experience true healing rather than mere symptom suppression.
                </p>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 md:py-32 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Start Your Journey to Better Health?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a consultation with our experts today and discover how homeopathic treatment can help you achieve lasting wellness.
              </p>
              <Button
                onClick={() => setBookingModalOpen(true)}
                className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:-translate-y-1 transition-all font-semibold rounded-lg px-10 py-4 text-lg"
              >
                Book Your Consultation Now
              </Button>
            </div>
          </section>

          <BookingModal
            open={bookingModalOpen}
            onOpenChange={setBookingModalOpen}
            diseaseTitle={props.title}
          />
        </main>
        <Footer />
      </div>
    );
  };
}
