import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdventureSection } from "./components/AdventureSection";
import { AfricaBanner } from "./components/AfricaBanner";
import { AntarcticaSection } from "./components/AntarcticaSection";
import { DestinationsSection } from "./components/DestinationsSection";
import { FeaturedToursSection } from "./components/FeaturedToursSection";
import { Footer } from "./components/Footer";
import { GuidesSection } from "./components/GuidesSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { LatinAmericaSection } from "./components/LatinAmericaSection";
import { LuxurySection } from "./components/LuxurySection";
import { TopBar } from "./components/TopBar";
import { TravelTypesSection } from "./components/TravelTypesSection";
import { USPSection } from "./components/USPSection";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          <HeroSection />
          <USPSection />
          <DestinationsSection />
          <FeaturedToursSection />
          <LatinAmericaSection />
          <AfricaBanner />
          <AntarcticaSection />
          <AdventureSection />
          <LuxurySection />
          <TravelTypesSection />
          <GuidesSection />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
