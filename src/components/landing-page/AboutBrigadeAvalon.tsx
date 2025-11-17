"use client";

import { useFormContext } from "@/app/context/formContext";
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
          <div className="lg:basis-1/2">
            <p className="text-customGrey uppercase mb-3">Bren Avaana</p>
            <div className="space-y-3 lg:space-y-6">
              <Typography variant={"sectionTitle"} className=" leading-[120%]">
                Where Life Comes Abloom
              </Typography>
              <Typography variant={"body"} className="text-pretty text-justify">
                Premium 3 BHK residences by Bren, thoughtfully designed for
                comfort and connectivity.
              </Typography>
              <Image
                src={"/images/landing-page/where-life-comes.webp"}
                width={936}
                height={660}
                alt="Building Entrance"
                className="object-cover object-bottom w-full h-auto rounded-xl lg:hidden my-8"
              />
              <Typography variant={"body"} className="text-justify text-pretty">
                Set across three elegant towers with just five homes per floor,
                the community offers modern amenities including a clubhouse,
                pool, yoga studio, squash, volleyball & pickleball courts.
              </Typography>

              <Typography variant={"body"} className="text-justify text-pretty">
                Experience serene living with walking trails, a pet park,
                elders’ zone, and lush green spaces designed to bring people
                together.{" "}
              </Typography>
            </div>

            <Button
              onClick={handleBrochureDownloadClick}
              className="mt-10 lg:mt-16 w-full lg:w-fit font-semibold"
            >
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
