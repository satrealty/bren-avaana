import StatsDisplaySection from "@/components/common/StatsDisplay";
import AboutBrigadeAvalon from "@/components/landing-page/AboutBrigadeAvalon";
import Hero from "@/components/landing-page/Hero";
import LazySections from "@/components/landing-page/LazyLandingSection";

const stats = [
  { title: "30+", subTitle: "Ergonomic Amenities" },
  { title: "32K Sq Ft", subTitle: "4 Floor Clubhouse" },
  { title: "55%", subTitle: "Spacious Green Open Spaces" },
  { title: "320+", subTitle: "Exclusive Residences " },
  { title: "31K Sq Ft", subTitle: "Commercial Space" },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutBrigadeAvalon />
      <div className="pb-12">
        <StatsDisplaySection
          stats={stats}
          className="mt-16 lg:mt-20 hidden lg:flex"
        />
      </div>

      <LazySections />

      {/*       
        <MobileStatsSection />
      <ProjectHighlight/>
      <Pricing />
    
      <Amenities />
      <VirtualTour />
      <div className="py-22">

        <FloorPlans />
      </div>
      <Location />
      <SiteVisit />
      <ContactFloaty /> */}
    </main>
  );
}
