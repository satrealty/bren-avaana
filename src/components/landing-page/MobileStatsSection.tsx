"use client";

import NumberInfoCard from "../common/cards/NumberInfoCard";

export default function MobileStatsSection() {
  return (
    <section className="py-10 md:hidden">
      <div className="container mx-auto">
        <div>
          <div className="flex gap-4 w-full"> 
            <NumberInfoCard title={"40+"} subTitle={"Luxury Amenities"} />
            <NumberInfoCard title={"25K Sq Ft"} subTitle={"Grand Clubhouse"} />
          </div>
          <div className="mt-4">
            <NumberInfoCard
              title={"80%"}
              subTitle={"Spacious Green Open Spaces"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
