import { Switch, Route } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import AboutBitfest from "@/pages/AboutBitfest";
import Events from "@/pages/Events";
import Workshops from "@/pages/Workshops";
import Schedule from "@/pages/Schedule";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/about-bitfest" component={AboutBitfest} />
            <Route path="/events" component={Events} />
            <Route path="/workshops" component={Workshops} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
