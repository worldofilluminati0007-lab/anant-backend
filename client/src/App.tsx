import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";

// Single comprehensive page per disease (with full SEO and content)
import Epilepsy from "@/pages/EpilepsyFull";
import ThyroidDisorders from "@/pages/ThyroidDisordersFull";
import KidneyGallbladderStones from "@/pages/KidneyGallbladderStonesFull";
import Tumors from "@/pages/TumorManagementFull";
import Arthritis from "@/pages/ArthritisJointPainFull";
import Typhoid from "@/pages/TyphoidFeverFull";
import HighCholesterol from "@/pages/HighCholesterolFull";
import RetinalDisorders from "@/pages/RetinalDisordersFull";
import Migraines from "@/pages/MigrainesHeadachesFull";
import Allergies from "@/pages/AllergicDisordersFull";
import Leucorrhoea from "@/pages/LeucorrhoeaFull";
import Spermatorrhea from "@/pages/SpermatorrheaFull";
import PilesHemorrhoids from "@/pages/PilesHemorrhoidsFull";
import Fistula from "@/pages/FistulaInAnoFull";
import Warts from "@/pages/WartsSkingrowthsFull";
import AcnePimples from "@/pages/AcnePimplesFull";
import CystsNodules from "@/pages/CystsNodulesFull";
import Vitiligo from "@/pages/VitiligoWhitePatchesFull";
import BreastCancer from "@/pages/BreastCancerTumorsFull";
import SkinDiseases from "@/pages/SkinDiseasesFull";
import Sciatica from "@/pages/SciaticaNervePainFull";
import Asthma from "@/pages/AsthmaFull";
import ColdFlu from "@/pages/ColdFluFull";
import Eczema from "@/pages/EczemaDermatitiFull";

import NotFound from "@/pages/not-found";
import test from "@/pages/test";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      
      {/* Single comprehensive page per disease */}
      <Route path="/epilepsy" component={Epilepsy} />
      <Route path="/thyroid-disorders" component={ThyroidDisorders} />
      <Route path="/kidney-gallbladder-stones" component={KidneyGallbladderStones} />
      <Route path="/tumors" component={Tumors} />
      <Route path="/arthritis" component={Arthritis} />
      <Route path="/typhoid" component={Typhoid} />
      <Route path="/cholesterol" component={HighCholesterol} />
      <Route path="/retinal-disorders" component={RetinalDisorders} />
      <Route path="/migraines" component={Migraines} />
      <Route path="/allergies" component={Allergies} />
      <Route path="/leucorrhoea" component={Leucorrhoea} />
      <Route path="/spermatorrhea" component={Spermatorrhea} />
      <Route path="/piles-hemorrhoids" component={PilesHemorrhoids} />
      <Route path="/fistula" component={Fistula} />
      <Route path="/warts" component={Warts} />
      <Route path="/acne-pimples" component={AcnePimples} />
      <Route path="/cysts-nodules" component={CystsNodules} />
      <Route path="/vitiligo" component={Vitiligo} />
      <Route path="/breast-cancer" component={BreastCancer} />
      <Route path="/skin-diseases" component={SkinDiseases} />
      <Route path="/sciatica" component={Sciatica} />
      <Route path="/asthma" component={Asthma} />
      <Route path="/cold-flu" component={ColdFlu} />
      <Route path="/eczema" component={Eczema} />
      
      <Route path="/test" component={test} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
