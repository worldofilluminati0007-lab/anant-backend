import { Card } from "@/components/ui/card";
import { Leaf, Heart, Brain, Zap } from "lucide-react";

const principles = [
  {
    icon: Heart,
    title: "Holistic Healing",
    description: "We treat the whole person—body, mind, and emotions—not just the disease symptoms.",
  },
  {
    icon: Brain,
    title: "Individualized Care",
    description: "Each patient is unique. We analyze complete symptom picture for precise remedy selection.",
  },
  {
    icon: Leaf,
    title: "Natural & Gentle",
    description: "Highly diluted medicines work with your body's healing power with minimal side effects.",
  },
  {
    icon: Zap,
    title: "Root Cause Treatment",
    description: "Our goal is to activate vital force and restore lasting wellness, not just symptom relief.",
  },
];

export default function HomeopathyIntroSection() {
  return (
    <section id="about-homeopathy" className="py-24 md:py-32 bg-white" data-testid="section-homeopathy-intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" data-testid="text-homeopathy-title">
            What is Homeopathy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-homeopathy-subtitle">
            A gentle, scientific system of medicine that has been helping patients achieve lasting wellness for over 200 years
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground" data-testid="text-homeopathy-definition-title">
              Understanding Homeopathic Treatment
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p data-testid="text-homeopathy-para-1">
                Homeopathy is a scientific and gentle system of medicine developed by Dr. Samuel Hahnemann and refined by scholars like Dr. James Tyler Kent. It addresses disease by treating the whole person—their physical symptoms, mental state, and emotional balance.
              </p>
              
              <p data-testid="text-homeopathy-para-2">
                Unlike conventional medicine, homeopathic medicines are prescribed in highly diluted doses, making them exceptionally safe and gentle. The goal isn't merely to suppress symptoms, but to activate your body's natural healing power (vital force) and address the root cause of disease.
              </p>
              
              <p data-testid="text-homeopathy-para-3">
                In homeopathy, you're not just a "case"—you're a unique individual. We thoroughly analyze your physical symptoms, mental patterns, emotional tendencies, lifestyle, diet, and family history to select the one perfect remedy tailored exclusively to you.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-8" data-testid="text-homeopathy-principles-title">
              Core Principles of Homeopathy
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  title: "Law of Similars",
                  description: "A substance that produces symptoms in a healthy person can cure similar symptoms in a sick person when diluted.",
                },
                {
                  title: "Minimum Dose",
                  description: "The smallest effective dose produces the longest-lasting cure with minimal side effects.",
                },
                {
                  title: "Single Remedy",
                  description: "One correct remedy at the right time produces complete and lasting healing.",
                },
                {
                  title: "Individualization",
                  description: "Same disease receives different medicines for different patients based on their unique constitution.",
                },
              ].map((item, idx) => (
                <Card key={idx} className="p-4 border border-primary/20 bg-primary/5" data-testid={`card-principle-${idx}`}>
                  <h4 className="font-semibold text-foreground mb-1" data-testid={`text-principle-title-${idx}`}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`text-principle-description-${idx}`}>
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate active-elevate-2 transition-all border border-primary/10 shadow-md"
                data-testid={`card-principle-detail-${index}`}
              >
                <div className="w-14 h-14 bg-primary/15 rounded-xl flex items-center justify-center mb-5 border border-primary/20">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-foreground" data-testid={`text-principle-detail-title-${index}`}>
                  {principle.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-principle-detail-description-${index}`}>
                  {principle.description}
                </p>
              </Card>
            );
          })}
        </div>

        <Card className="mt-16 p-10 border-l-4 border-l-primary bg-primary/5" data-testid="card-homeopathy-quote">
          <p className="text-xl text-foreground font-semibold italic leading-relaxed" data-testid="text-homeopathy-quote">
            "True healing extends beyond medicines alone. It requires empathy, understanding, adequate time, and personalized attention. The right remedy, in minimum dose, produces lasting and complete healing."
          </p>
          <p className="mt-4 text-muted-foreground font-medium" data-testid="text-homeopathy-quote-author">
            — Inspired by Dr. James Tyler Kent and homeopathic philosophy
          </p>
        </Card>
      </div>
    </section>
  );
}
