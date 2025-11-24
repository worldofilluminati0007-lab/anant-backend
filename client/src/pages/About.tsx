import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Heart, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const milestones = [
    {
      year: "1983",
      title: "Founded with Vision",
      description: "Dr. S. N. Mishra established Anant Arogya Sadan with a commitment to holistic healthcare and social service",
      icon: Heart,
    },
    {
      year: "Decades",
      title: "Growing Trust",
      description: "Thousands of patients from Jharkhand, Bihar, Chhattisgarh, Assam, West Bengal and beyond have trusted our care",
      icon: Users,
    },
    {
      year: "Today",
      title: "Digital Innovation",
      description: "Launched Online Medical Consultation Services to reach patients from distant regions with authentic guidance",
      icon: Globe,
    },
  ];

  const values = [
    {
      title: "Ethical Healthcare",
      description: "Practicing medicine with integrity, honesty and adherence to professional ethics in every patient interaction",
      icon: Award,
    },
    {
      title: "Compassionate Care",
      description: "Understanding patient needs deeply with empathy, personal attention and consistent support throughout treatment",
      icon: Heart,
    },
    {
      title: "Affordable Access",
      description: "Committed to providing accessible and affordable treatment to everyone, regardless of their economic status",
      icon: Users,
    },
    {
      title: "Holistic Healing",
      description: "Believing true healing extends beyond medicines—requiring understanding, time and personal care for lasting wellness",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              About Anant Arogya Sadan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A dedicated space for your health, harmony and well-being—where authentic homeopathic care meets compassionate service
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Story</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Founded in March 1983 by Dr. S. N. Mishra, Anant Arogya Sadan was born out of a deep commitment to holistic healthcare and social service. His mother, the late Satyawati Devi, inspired him with her compassion and dedication towards serving the underprivileged.
                  </p>
                  <p>
                    Motivated by her values, Dr. Mishra envisioned a healthcare centre that would offer accessible and affordable treatment to everyone in need. His father, the late Upendra Nath Mishra, further strengthened this mission with his guidance and unwavering support.
                  </p>
                  <p>
                    Over the last several decades, Anant Arogya Sadan has consistently moved forward with its core purpose—ethical, compassionate and affordable healthcare for all.
                  </p>
                </div>
              </div>

              <Card className="p-10 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Our Foundation</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Inspired by Love</h4>
                    <p className="text-muted-foreground">
                      The compassion of Dr. Mishra's mother and the guidance of his father created the values that continue to guide our work today.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Built on Trust</h4>
                    <p className="text-muted-foreground">
                      Decades of dedicated service have earned the trust of thousands of patients across multiple states.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Driven by Purpose</h4>
                    <p className="text-muted-foreground">
                      Every action is guided by our commitment to make healthcare accessible, affordable and compassionate.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-primary/8 to-accent/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From a single vision to serving thousands of patients across multiple states
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {milestones.map((milestone, idx) => {
                const Icon = milestone.icon;
                return (
                  <Card key={idx} className="p-8 border border-primary/10 shadow-lg hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-primary/15 rounded-lg flex items-center justify-center border border-primary/20 mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-primary mb-2">{milestone.year}</p>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Principles that guide every decision and interaction in our healthcare practice
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <Card key={idx} className="p-8 border border-primary/10 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center border border-primary/20 flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Patient Trust Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Trusted by Thousands</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Today, thousands of patients from Jharkhand, Bihar, Chhattisgarh, Assam, West Bengal and many other states place their trust in our care. This trust is not given lightly—it is earned through years of dedicated service, ethical practice and genuine commitment to patient wellness.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Patients across 6+ states trust our expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Decades of consistent, ethical medical practice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Now offering online consultations for wider access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Committed to personal attention and quality care</span>
                  </li>
                </ul>
              </div>

              <Card className="p-10 bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/20">
                <h3 className="text-3xl font-bold mb-6 text-foreground">Why Choose Us?</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-primary mb-2">✓ Authentic Homeopathy</p>
                    <p className="text-muted-foreground text-sm">
                      Practicing classical homeopathy principles for genuine healing
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">✓ Patient-Centered Care</p>
                    <p className="text-muted-foreground text-sm">
                      Personal attention, understanding and consistent support throughout treatment
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">✓ Accessible Services</p>
                    <p className="text-muted-foreground text-sm">
                      Affordable treatment and now online consultations for remote patients
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">✓ Proven Results</p>
                    <p className="text-muted-foreground text-sm">
                      Thousands of successful cases and satisfied patients across multiple states
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="p-12 border border-primary/20 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                At Anant Arogya Sadan, we believe true healing is not limited to medicines alone. It requires empathy, understanding and the right amount of time and personal attention. Our focus is on guiding every patient with care, consistency and confidence—helping them achieve better health, balance and a more fulfilling life.
              </p>
              <div className="pt-8 border-t border-primary/20">
                <p className="text-lg italic text-primary font-semibold">
                  "Ethical, compassionate and affordable healthcare for all"
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Healing Journey</h2>
            <p className="text-lg mb-8 text-white/90">
              Experience authentic homeopathic care from healthcare professionals who genuinely care about your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setBookingModalOpen(true)}
                className="px-8 py-3 bg-white text-primary font-semibold hover:bg-white/90"
              >
                Book Consultation
              </Button>
              <a
                href="/"
                className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>

        <BookingModal
          open={bookingModalOpen}
          onOpenChange={setBookingModalOpen}
          diseaseTitle="Consultation - Anant Arogya Sadan"
        />
      </main>
      <Footer />
    </div>
  );
}
