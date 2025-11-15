"use client";

import dynamic from "next/dynamic";

const MobileStatsSection = dynamic(() =>
  import("@/components/landing-page/MobileStatsSection")
);

const ProjectHighlight = dynamic(() =>
  import("@/components/landing-page/ProjectHighlight")
);

const Amenities = dynamic(() =>
  import("@/components/landing-page/Amenities")
);

const VirtualTour = dynamic(() =>
  import("@/components/landing-page/VirtualTour")
);

const FloorPlans = dynamic(() =>
  import("@/components/landing-page/FloorPlans")
);

const Location = dynamic(() =>
  import("@/components/landing-page/Location")
);

const SiteVisit = dynamic(() =>
  import("@/components/landing-page/SiteVisit")
);

const ContactFloaty = dynamic(() =>
  import("@/components/common/FloatingSticky")
);

export default function LazySections() {
  return (
    <>
      <MobileStatsSection />
      <ProjectHighlight />
      <Amenities />
      <VirtualTour />
      <FloorPlans />
      <Location />
      <SiteVisit />
      <ContactFloaty />
    </>
  );
}