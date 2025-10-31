"use client";

import { useFormContext } from "@/app/context/formContext";
import StatsDisplaySection from "@/components/common/StatsDisplay";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { setStorage } from "@/lib/storageHelper";
import { isMobile, scrollIntoView } from "@/lib/utils";
import Image from "next/image";
import SiteVisitForm from "../common/forms/SiteVisitForm";

export default function AboutBrigadeAvalon() {
  const { openForm } = useFormContext();


  function handleBrochureDownloadClick() {
    setStorage("brochure_download_enabled", true);
    if (isMobile()) {
      openForm(<SiteVisitForm />, "Book a Site Visit");
    } else {
      scrollIntoView("enquire-form");
    }
  }
  return (
    <section id="overview" className="py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="flex gap-20 items-center">
          <div className="lg:basis-1/3">
            <div className="space-y-3 lg:space-y-6">
              <h2 className="text-[27px] md:text-[30px] lg:text-[40px] lg2:text-[48px] font-semibold leading-[120%]">Brigade Avalon</h2>
              <Typography variant={"body"} className="text-pretty text-justify">
                Premium 3.5 & 4 BHK homes by Brigade Group in Whitefield with green spaces, top amenities, and excellent IT hub and metro
                connectivity.
              </Typography>
              <Image
                src={"/images/landing-page/where-life-comes.webp"}
                width={936}
                height={660}
                alt="Building Entrance"
                className="object-cover object-bottom w-full h-auto rounded-xl lg:hidden my-8"
              />
              <Typography variant={"body"} className="text-justify text-pretty">
                Designed for modern living, each tower features only 4 to 6 residences per floor, ensuring enhanced privacy and ample space for
                residents.
              </Typography>
            </div>

            <Button onClick={handleBrochureDownloadClick} className="mt-10 lg:mt-16 w-full lg:w-fit">
              Download E-Brochure
            </Button>
          </div>
          <div className="basis-2/3 h-full w-full hidden lg:block">
            <Image
              src={"/images/landing-page/where-life-comes.webp"}
              width={936}
              height={660}
              alt="Building Entrance"
              className="object-cover object-bottom lg:h-[75vh] w-full xl:h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
