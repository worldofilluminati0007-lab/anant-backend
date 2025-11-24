import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-lg p-1">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1 text-xs md:text-sm font-medium transition-all ${
          language === "en"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <Globe className="w-3 h-3 md:w-4 md:h-4" />
        <span>EN</span>
      </Button>
      <Button
        variant={language === "hi" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("hi")}
        className={`flex items-center gap-1 text-xs md:text-sm font-medium transition-all ${
          language === "hi"
            ? "bg-orange-600 text-white hover:bg-orange-700"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <Globe className="w-3 h-3 md:w-4 md:h-4" />
        <span>HI</span>
      </Button>
    </div>
  );
}
