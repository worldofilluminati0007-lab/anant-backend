import { Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-primary/5 to-muted py-16 md:py-24 border-t border-primary/10" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              अनंत आरोग्य सदन
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Holistic homoeopathic healthcare for natural, gentle healing.
            </p>
            <p className="text-xs text-muted-foreground font-medium">
              <strong>Reg No:</strong> HC-REG-2024-XXXX
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-5 text-foreground uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-muted-foreground hover:text-primary text-sm hover:bg-transparent" 
                  onClick={() => navigateTo("/")}
                  data-testid="link-footer-home"
                >
                  Home
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-muted-foreground hover:text-primary text-sm hover:bg-transparent" 
                  onClick={() => navigateTo("/services")}
                  data-testid="link-footer-services"
                >
                  Services
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-muted-foreground hover:text-primary text-sm hover:bg-transparent" 
                  onClick={() => navigateTo("/diabetes")}
                  data-testid="link-footer-diabetes"
                >
                  Diabetes
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-muted-foreground hover:text-primary text-sm hover:bg-transparent" 
                  onClick={() => navigateTo("/arthritis")}
                  data-testid="link-footer-arthritis"
                >
                  Arthritis
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-5 text-foreground uppercase tracking-wide">Hours</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Mon - Sat</p>
                <p>9:00 AM - 7:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Sunday</p>
                <p>10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-5 text-foreground uppercase tracking-wide">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+919999999999" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  +91 99999 99999
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@anantarogyasadan.com" className="text-muted-foreground hover:text-primary transition-colors break-all text-xs sm:text-sm">
                  info@anantarogyasadan.com
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs font-medium text-muted-foreground mb-3">Follow</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => window.open("https://wa.me/919999999999", "_blank")}
                    data-testid="button-social-whatsapp"
                  >
                    <SiWhatsapp className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => window.open("#", "_blank")}
                    data-testid="button-social-facebook"
                  >
                    <SiFacebook className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => window.open("#", "_blank")}
                    data-testid="button-social-instagram"
                  >
                    <SiInstagram className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => window.open("#", "_blank")}
                    data-testid="button-social-youtube"
                  >
                    <SiYoutube className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 text-center text-muted-foreground text-sm">
          <p data-testid="text-copyright">
            © {currentYear} <span style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>अनंत आरोग्य सदन</span>
          </p>
          <p className="text-xs mt-2 text-muted-foreground/70">
            Dedicated to natural healing and holistic wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
