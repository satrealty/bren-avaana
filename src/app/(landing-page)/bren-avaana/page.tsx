import ContactFloaty from "@/components/common/FloatingSticky";
import StatsDisplaySection from "@/components/common/StatsDisplay";
import AboutBrigadeAvalon from "@/components/landing-page/AboutBrigadeAvalon";
import Amenities from "@/components/landing-page/Amenities";
import FloorPlans from "@/components/landing-page/FloorPlans";
import Hero from "@/components/landing-page/Hero";
import Location from "@/components/landing-page/Location";
import MobileStatsSection from "@/components/landing-page/MobileStatsSection";
import Pricing from "@/components/landing-page/Pricing";
import ProjectHighlight from "@/components/landing-page/ProjectHighlight";
import SiteVisit from "@/components/landing-page/SiteVisit";
import VirtualTour from "@/components/landing-page/VirtualTour";

const stats = [
  { title: "40+", subTitle: "Luxury Amenities" },
  { title: "25K Sq Ft", subTitle: "Grand Clubhouse" },
  { title: "80%", subTitle: "Spacious Green Open Spaces" },
  { title: "206", subTitle: "Exclusive Residences " },
  { title: "100% DG", subTitle: "Power Backup " },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutBrigadeAvalon />
      <StatsDisplaySection stats={stats} className="mt-16 lg:mt-20 hidden lg:flex" />
        <MobileStatsSection />
<ProjectHighlight/>
      {/* <Pricing /> */}
    
      <Amenities />
      <VirtualTour />
      <FloorPlans />
      <Location />
      <SiteVisit />
      <ContactFloaty />
    </main>
  );
}
