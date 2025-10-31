"use client";

import { Typography } from "@/components/ui/typography";
import FloorPlanCard from "../common/cards/FloorPlanCard";

export default function FloorPlans() {
  return (
    <section id="floor-plans" className="lg:py-20">
      <div className="container mx-auto">
        <div>
          <h2 className="lg:text-center text-[27px] md:text-[30px] lg:text-[40px] lg2:text-[48px] font-semibold leading-[120%]">
            Floor Plans & Brochure
          </h2>
          <Typography className="lg:text-center mt-4">
            Your vision deserves a home that fits perfectly. Explore our
            thoughtfully designed floor plans tailored to match your lifestyle
            and aspirations.
          </Typography>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-28 mt-8 lg:mt-24">
            <FloorPlanCard
              imageSrc="/images/landing-page/floor-plan-1.jpg"
              title="View 3.5 BHK Plan"
              downloadImage="/images/landing-page/3bhk.jpg"
            />
            <FloorPlanCard
              imageSrc="/images/landing-page/floor-plan-2.jpg"
              title="View 4 BHK Plan"
              downloadImage="/images/landing-page/4bhk.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
