import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Diabetes from "@/pages/Diabetes";
import Arthritis from "@/pages/Arthritis";
import ColdFlu from "@/pages/ColdFlu";
import SkinIssues from "@/pages/SkinIssues";
import Migraine from "@/pages/Migraine";
import Psoriasis from "@/pages/Psoriasis";
import Eczema from "@/pages/Eczema";
import Vitiligo from "@/pages/Vitiligo";
import Asthma from "@/pages/Asthma";
import Sinusitis from "@/pages/Sinusitis";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/diabetes" component={Diabetes} />
      <Route path="/arthritis" component={Arthritis} />
      <Route path="/cold-flu" component={ColdFlu} />
      <Route path="/skin-issues" component={SkinIssues} />
      <Route path="/migraine" component={Migraine} />
      <Route path="/psoriasis" component={Psoriasis} />
      <Route path="/eczema" component={Eczema} />
      <Route path="/vitiligo" component={Vitiligo} />
      <Route path="/asthma" component={Asthma} />
      <Route path="/sinusitis" component={Sinusitis} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
