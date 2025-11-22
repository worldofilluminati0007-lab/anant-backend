import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-muted py-12 border-t" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              अनंत आरोग्य सदन
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Your trusted partner in holistic homoeopathic healthcare. 
              Providing natural, gentle, and effective healing solutions for the whole family.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Registration No:</strong> HC-REG-2024-XXXX
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <Button variant="link" className="p-0 h-auto" data-testid="link-footer-home">
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <Button variant="link" className="p-0 h-auto" data-testid="link-footer-services">
                    Our Services
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/diabetes">
                  <Button variant="link" className="p-0 h-auto" data-testid="link-footer-diabetes">
                    Diabetes Treatment
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/arthritis">
                  <Button variant="link" className="p-0 h-auto" data-testid="link-footer-arthritis">
                    Arthritis Care
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/cold-flu">
                  <Button variant="link" className="p-0 h-auto" data-testid="link-footer-cold-flu">
                    Cold & Flu Relief
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/skin-issues">
                  <Button variant="link" className="p-0 h-auto" data-testid="link-footer-skin">
                    Skin Health
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <p className="text-muted-foreground">
                  123 Wellness Street, Health Plaza<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+919999999999" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 99999 99999
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@anantarogyasadan.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@anantarogyasadan.com
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open("https://wa.me/919999999999", "_blank")}
                  data-testid="button-social-whatsapp"
                >
                  <SiWhatsapp className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open("#", "_blank")}
                  data-testid="button-social-facebook"
                >
                  <SiFacebook className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open("#", "_blank")}
                  data-testid="button-social-instagram"
                >
                  <SiInstagram className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open("#", "_blank")}
                  data-testid="button-social-youtube"
                >
                  <SiYoutube className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p data-testid="text-copyright">
            © {currentYear} <span style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>अनंत आरोग्य सदन</span> (Anant Arogya Sadan). All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Dedicated to natural healing and holistic wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
