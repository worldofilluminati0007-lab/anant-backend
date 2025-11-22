import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/WhatsApp Image 2025-11-22 at 11.58.26 AM_1763804419256.jpeg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: "Home", path: "/", sectionId: "home" },
    { label: "About", path: "/", sectionId: "about" },
    { label: "Services", path: "/services" },
    { label: "Testimonials", path: "/", sectionId: "testimonials" },
    { label: "Contact", path: "/", sectionId: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      data-testid="header-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-all cursor-pointer">
              <img 
                src={logoImage} 
                alt="अनंत आरोग्य सदन Logo - Homoeopathy Clinic" 
                className="h-12 w-auto"
                data-testid="img-logo"
              />
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-primary" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                  अनंत आरोग्य सदन
                </div>
                <div className="text-xs text-muted-foreground">Homoeopathy</div>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.path === "/" && item.sectionId ? (
                  <Button
                    variant="ghost"
                    onClick={() => {
                      if (location === "/") {
                        scrollToSection(item.sectionId);
                      } else {
                        window.location.href = `/#${item.sectionId}`;
                      }
                    }}
                    data-testid={`button-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Link href={item.path}>
                    <Button variant="ghost" data-testid={`button-nav-${item.label.toLowerCase()}`}>
                      {item.label}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
            <Button 
              variant="default"
              className="ml-4 gap-2"
              onClick={() => window.open("https://wa.me/919999999999?text=Hello, I would like to book a consultation", "_blank")}
              data-testid="button-whatsapp-header"
            >
              <SiWhatsapp className="w-4 h-4" />
              Book Now
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="px-4 py-6 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.path === "/" && item.sectionId ? (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {
                      if (location === "/") {
                        scrollToSection(item.sectionId);
                      } else {
                        window.location.href = `/#${item.sectionId}`;
                      }
                    }}
                    data-testid={`button-nav-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Link href={item.path}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid={`button-nav-mobile-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
            <Button 
              variant="default"
              className="w-full gap-2 mt-4"
              onClick={() => {
                window.open("https://wa.me/919999999999?text=Hello, I would like to book a consultation", "_blank");
                setIsMobileMenuOpen(false);
              }}
              data-testid="button-whatsapp-mobile"
            >
              <SiWhatsapp className="w-4 h-4" />
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
