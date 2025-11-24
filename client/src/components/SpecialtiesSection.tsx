import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const specialties = [
  { name: "Epilepsy", description: "Long-term seizure management and control", link: "/epilepsy" },
  { name: "Thyroid Disorders", description: "Hormonal balance and thyroid health restoration", link: "/thyroid-disorders" },
  { name: "Kidney & Gallbladder Stones", description: "Natural stone dissolution support", link: "/kidney-gallbladder-stones" },
  { name: "Eczema & Dermatitis", description: "Chronic skin condition relief", link: "/eczema" },
  { name: "Tumors (Body, Bone, Uterine)", description: "Comprehensive tumor management", link: "/tumors" },
  { name: "Arthritis & Joint Pain", description: "Mobility improvement and pain relief", link: "/arthritis" },
  { name: "Typhoid Fever", description: "Acute infection management", link: "/typhoid" },
  { name: "High Cholesterol", description: "Natural cholesterol level reduction", link: "/cholesterol" },
  { name: "Retinal Disorders", description: "Vision-related health conditions", link: "/retinal-disorders" },
  { name: "Migraines & Headaches", description: "Chronic headache relief and prevention", link: "/migraine" },
  { name: "Allergic Disorders", description: "Natural allergy management", link: "/allergies" },
  { name: "Leucorrhoea", description: "Gynecological health restoration", link: "/leucorrhoea" },
  { name: "Spermatorrhea", description: "Male sexual health support", link: "/spermatorrhea" },
  { name: "Piles & Hemorrhoids", description: "Natural relief without surgery", link: "/piles-hemorrhoids" },
  { name: "Fistula in Ano", description: "Rectal health restoration", link: "/fistula" },
  { name: "Warts & Skin Growths", description: "Skin growth removal and prevention", link: "/warts" },
  { name: "Acne & Pimples", description: "Teenage and adult skin health", link: "/acne-pimples" },
  { name: "Cysts & Nodules", description: "Benign growth management", link: "/cysts-nodules" },
  { name: "Vitiligo & White Patches", description: "Pigmentation restoration", link: "/vitiligo" },
  { name: "Breast Cancer & Tumors", description: "Specialized breast health support", link: "/breast-cancer" },
  { name: "Skin Diseases", description: "All dermatological conditions", link: "/skin-diseases" },
  { name: "Sciatica & Nerve Pain", description: "Neuralgia and nerve pain relief", link: "/sciatica" },
  { name: "Asthma", description: "Chronic respiratory condition management", link: "/asthma-original" },
  { name: "Cold & Flu", description: "Natural immune support and recovery", link: "/cold-flu" },
];

export default function SpecialtiesSection() {
  return (
    <section id="specialties" className="py-24 md:py-32 bg-gradient-to-br from-primary/8 to-accent/8" data-testid="section-specialties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" data-testid="text-specialties-title">
            Our Areas of Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-specialties-subtitle">
            Specialized homoeopathic treatment with proven success in over 23 chronic and acute conditions. Click on any condition to learn more and book your consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {specialties.map((specialty, index) => (
            <Link key={index} href={specialty.link}>
              <Card 
                className="p-5 hover-elevate active-elevate-2 transition-all border border-primary/10 shadow-sm flex items-start gap-4 cursor-pointer group h-full"
                data-testid={`card-specialty-${index}`}
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors flex items-center gap-2" data-testid={`text-specialty-name-${index}`}>
                    {specialty.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`text-specialty-description-${index}`}>
                    {specialty.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <Card className="p-10 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20" data-testid="card-specialties-highlight">
          <h3 className="text-2xl font-bold mb-4 text-foreground" data-testid="text-specialties-highlight-title">
            Treatment Philosophy: Single Remedy & Minimum Dose
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-specialties-philosophy">
            Following Dr. Samuel Hahnemann's fundamental principle, we carefully analyze each patient's complete medical history and symptom picture to prescribe one precise, constitutional remedy. This medicine is administered in minimum effective dose, typically once monthly, allowing the body's natural healing mechanism to activate gradually and produce lasting results without dependency.
          </p>
          <p className="text-base text-foreground font-semibold italic" data-testid="text-specialties-motto">
            "The right medicine, not more medicine."
          </p>
        </Card>
      </div>
    </section>
  );
}
