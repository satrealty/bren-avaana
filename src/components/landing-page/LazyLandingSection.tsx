"use client";

import dynamic from "next/dynamic";
import { useIsVisible } from "@/app/hooks/useIsVisible";



// Light / medium components (SSR allowed)
const MobileStatsSection = dynamic(() =>
  import("@/components/landing-page/MobileStatsSection")
);

const ProjectHighlight = dynamic(() =>
  import("@/components/landing-page/ProjectHighlight")
);

// Heavy components (client only — disable SSR)
const Amenities = dynamic(
  () => import("@/components/landing-page/Amenities"),
  { ssr: false }
);

const VirtualTour = dynamic(
  () => import("@/components/landing-page/VirtualTour"),
  { ssr: false }
);

const FloorPlans = dynamic(
  () => import("@/components/landing-page/FloorPlans"),
  { ssr: false }
);

const LocationSection = dynamic(
  () => import("@/components/landing-page/Location"),
  { ssr: false }
);

const SiteVisit = dynamic(
  () => import("@/components/landing-page/SiteVisit"),
  { ssr: false }
);

const ContactFloaty = dynamic(
  () => import("@/components/common/FloatingSticky"),
  { ssr: false }
);

/* -------------------------
   Main Component
-------------------------- */

export default function LazySections() {
  const stats = useIsVisible();
  const highlight = useIsVisible();
  const amenities = useIsVisible();
  const virtualTour = useIsVisible();
  const floorPlans = useIsVisible();
  const location = useIsVisible();
  const siteVisit = useIsVisible();
  const floaty = useIsVisible();

  return (
    <>
      {/* MOBILE STATS */}
      <div ref={stats.ref}>
        {stats.isVisible && <MobileStatsSection />}
      </div>

      {/* PROJECT HIGHLIGHT */}
      <div ref={highlight.ref}>
        {highlight.isVisible && <ProjectHighlight />}
      </div>

      {/* AMENITIES (heavy) */}
      <div ref={amenities.ref}>
        {amenities.isVisible && <Amenities />}
      </div>

      {/* VIRTUAL TOUR */}
      <div ref={virtualTour.ref}>
        {virtualTour.isVisible && <VirtualTour />}
      </div>

      {/* FLOOR PLANS */}
      <div ref={floorPlans.ref}>
        {floorPlans.isVisible && <FloorPlans />}
      </div>

      {/* LOCATION SECTION */}
      <div ref={location.ref}>
        {location.isVisible && <LocationSection />}
      </div>

      {/* SITE VISIT SECTION */}
      <div ref={siteVisit.ref}>
        {siteVisit.isVisible && <SiteVisit />}
      </div>

      {/* FLOATING CALL/WHATSAPP STICKY */}
      <div ref={floaty.ref}>
        {floaty.isVisible && <ContactFloaty />}
      </div>
    </>
  );
}
