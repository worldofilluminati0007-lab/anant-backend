import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import logoImage from "@assets/WhatsApp Image 2025-11-22 at 11.58.26 AM_1763804419256.jpeg";

interface SubMenuItem {
  label: string;
  path: string;
}

interface ServiceCategory {
  category: string;
  items: SubMenuItem[];
}

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-dropdown-trigger]')) {
        setOpenDropdown(null);
      }
    };
    
    if (openDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [openDropdown]);

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

  const serviceCategories: ServiceCategory[] = [
    {
      category: "Neurological & Seizures",
      items: [
        { label: "Epilepsy", path: "/epilepsy" },
        { label: "Migraines & Headaches", path: "/migraine" },
        { label: "Sciatica & Nerve Pain", path: "/sciatica" },
      ],
    },
    {
      category: "Endocrine & Metabolic",
      items: [
        { label: "Thyroid Disorders", path: "/thyroid-disorders" },
        { label: "Diabetes", path: "/diabetes" },
        { label: "High Cholesterol", path: "/cholesterol" },
      ],
    },
    {
      category: "Urinary & Digestive",
      items: [
        { label: "Kidney & Gallbladder Stones", path: "/kidney-gallbladder-stones" },
        { label: "Piles & Hemorrhoids", path: "/piles-hemorrhoids" },
        { label: "Fistula in Ano", path: "/fistula" },
      ],
    },
    {
      category: "Musculoskeletal",
      items: [
        { label: "Arthritis & Joint Pain", path: "/arthritis" },
        { label: "Tumors (Body, Bone, Uterine)", path: "/tumors" },
      ],
    },
    {
      category: "Dermatological",
      items: [
        { label: "Eczema & Dermatitis", path: "/eczema" },
        { label: "Psoriasis", path: "/psoriasis" },
        { label: "Warts & Skin Growths", path: "/warts" },
        { label: "Acne & Pimples", path: "/acne-pimples" },
        { label: "Vitiligo & White Patches", path: "/vitiligo" },
        { label: "Skin Diseases", path: "/skin-diseases" },
        { label: "Cysts & Nodules", path: "/cysts-nodules" },
      ],
    },
    {
      category: "Respiratory",
      items: [
        { label: "Asthma", path: "/asthma" },
        { label: "Sinusitis", path: "/sinusitis" },
        { label: "Cold & Flu", path: "/cold-flu" },
      ],
    },
    {
      category: "Infectious Diseases",
      items: [
        { label: "Typhoid Fever", path: "/typhoid" },
      ],
    },
    {
      category: "Women's Health",
      items: [
        { label: "Leucorrhoea", path: "/leucorrhoea" },
        { label: "Breast Cancer & Tumors", path: "/breast-cancer" },
      ],
    },
    {
      category: "Men's Health",
      items: [
        { label: "Spermatorrhea", path: "/spermatorrhea" },
      ],
    },
    {
      category: "Eye Conditions",
      items: [
        { label: "Retinal Disorders", path: "/retinal-disorders" },
      ],
    },
    {
      category: "Allergies & Immunity",
      items: [
        { label: "Allergic Disorders", path: "/allergies" },
      ],
    },
  ];

  const navigationItems = [
    { label: "Home", path: "/", sectionId: "home" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services", hasDropdown: true },
    { label: "Testimonials", path: "/", sectionId: "testimonials" },
    { label: "Contact", path: "/", sectionId: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-primary/10" 
          : "bg-gradient-to-b from-black/25 via-black/10 to-transparent"
      }`}
      data-testid="header-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Button variant="ghost" asChild className="hover-elevate active-elevate-2 px-2">
            <Link href="/" data-testid="link-home">
              <div className="flex items-center gap-3 cursor-pointer">
                <img 
                  src={logoImage} 
                  alt="Anant Arogya Sadan Logo - Homoeopathy Clinic" 
                  className="h-14 w-auto"
                  data-testid="img-logo"
                />
                <div className="hidden sm:block">
                  <div className="text-lg font-bold text-primary" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                    अनंत आरोग्य सदन
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">Wellness Care</div>
                </div>
              </div>
            </Link>
          </Button>

          <nav className="hidden md:flex items-center gap-1">
            {navigationItems.map((item: any) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div className="relative" data-dropdown-trigger>
                    <Button
                      variant="ghost"
                      className={`gap-1 transition-all duration-200 ${
                        openDropdown === item.label 
                          ? "bg-primary/10 text-primary" 
                          : "hover:bg-primary/5"
                      }`}
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      data-testid={`button-nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`} />
                    </Button>

                    {openDropdown === item.label && (
                      <div 
                        className="fixed top-24 left-0 right-0 bg-background border-b border-primary/10 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[70vh] overflow-y-auto" 
                        data-dropdown-trigger
                      >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {serviceCategories.map((category) => (
                              <div key={category.category}>
                                <h3 className="text-sm font-bold text-primary mb-6 flex items-center gap-2 uppercase tracking-widest">
                                  <div className="h-1 w-4 bg-gradient-to-r from-primary to-accent rounded-full" />
                                  {category.category}
                                </h3>
                                <div className="space-y-3">
                                  {category.items.map((subItem) => (
                                    <Link key={subItem.path} href={subItem.path}>
                                      <div
                                        className={`group cursor-pointer transition-all duration-200 p-3 rounded-lg hover:bg-primary/5 ${
                                          location === subItem.path ? "bg-primary/10 border-l-2 border-primary" : ""
                                        }`}
                                        data-testid={`link-dropdown-${subItem.label.toLowerCase()}`}
                                        onClick={() => setOpenDropdown(null)}
                                      >
                                        <p className={`text-sm font-semibold transition-colors ${
                                          location === subItem.path ? "text-primary" : "text-foreground group-hover:text-primary"
                                        }`}>{subItem.label}</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Homoeopathic Care</p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.path === "/" && item.sectionId ? (
                  <Button
                    variant="ghost"
                    className="transition-all duration-200 hover:bg-primary/5"
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
                    <Button 
                      variant="ghost" 
                      className="transition-all duration-200 hover:bg-primary/5"
                      data-testid={`button-nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
            <LanguageSelector />
            <Button 
              variant="default"
              className="ml-4 gap-2"
              onClick={() => window.open("https://wa.me/919288060107?text=Hello, I would like to book a consultation", "_blank")}
              data-testid="button-whatsapp-header"
            >
              <SiWhatsapp className="w-4 h-4" />
              Book Now
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
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
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="px-4 py-6 space-y-2">
            {navigationItems.map((item: any) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <div>
                    <Button
                      variant="ghost"
                      className="w-full justify-between"
                      onClick={() => setOpenMobileCategory(openMobileCategory === item.label ? null : item.label)}
                      data-testid={`button-nav-mobile-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                      <ChevronRight className={`w-4 h-4 transition-transform ${openMobileCategory === item.label ? 'rotate-90' : ''}`} />
                    </Button>
                    
                    {openMobileCategory === item.label && (
                      <div className="pl-4 space-y-1 mt-2 bg-muted/30 rounded-md p-2">
                        {serviceCategories.map((category) => (
                          <div key={category.category}>
                            <div className="text-xs font-semibold text-primary px-2 py-1">
                              {category.category}
                            </div>
                            {category.items.map((subItem) => (
                              <Link key={subItem.path} href={subItem.path}>
                                <Button
                                  variant="ghost"
                                  className="w-full justify-start text-sm pl-4"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setOpenMobileCategory(null);
                                  }}
                                  data-testid={`link-dropdown-mobile-${subItem.label.toLowerCase()}`}
                                >
                                  {subItem.label}
                                </Button>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.path === "/" && item.sectionId ? (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {
                      if (location === "/") {
                        scrollToSection(item.sectionId);
                      } else {
                        window.location.href = `/#${item.sectionId}`;
                      }
                      setIsMobileMenuOpen(false);
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
                window.open("https://wa.me/919288060107?text=Hello, I would like to book a consultation", "_blank");
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
