"use client";

import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SiteVisitForm from "@/components/common/forms/SiteVisitForm";
import { useFormContext } from "@/app/context/formContext";
import { scrollIntoView } from "@/lib/utils";
const CLOSER_LOCATIONS = [
  {
    title: "Outer Ring Road",
    distance: "5.9 Kms",
  },
  {
    title: "Marathahalli",
    distance: "5.8 Kms",
  },
  {
    title: "Sarjapur",
    distance: "10 Kms",
  },
  {
    title: "Hoodi",
    distance: "8.6 Kms",
  },
  {
    title: "Old Madras Road",
    distance: "10 Kms",
  },
  {
    title: "MG Road",
    distance: "17 Kms",
  },
];
export default function Location() {
  const { openForm } = useFormContext();
  return (
    <section id="location" className="py-16 lg:py-20 lg:bg-[#FBFBFB]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 lg2:gap-20">
          <h2 className="lg:hidden text-[27px] md:text-[30px] lg:text-[40px] lg2:text-[48px] font-semibold leading-[120%]" >
            Location & Connectivity
          </h2>
         <div className="lg:basis-[60%] w-full">
            <iframe
              title="Brigade Avalon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.3053872278165!2d77.74753983188576!3d12.965134683514014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0fbce8c3b737%3A0x35d54209821e8964!2sBrigade%20Avalon!5e0!3m2!1sen!2sin!4v1755517132403!5m2!1sen!2sin"
              className="border-0 rounded-lg lg:rounded-3xl w-full h-[203px] lg2:h-[658px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="lg:basis-[40%] w-full">
            <h2 className="hidden lg:block text-[27px] md:text-[30px] lg:text-[40px] lg2:text-[48px] font-semibold leading-[120%]" >
             Location & Connectivity
            </h2>
            <div className="mt-0 lg:mt-12 space-y-3">
              {CLOSER_LOCATIONS.map((location) => (
                <div
                  key={location.title}
                  className="flex justify-between gap-4 "
                >
                  <Typography variant={"body"}>{location.title}</Typography>
                  <Typography variant={"body"} className="font-extrabold">
                    {location.distance}
                  </Typography>
                </div>
              ))}
            </div>
            <button
              onClick={()=>{scrollIntoView("site-visit"), localStorage.removeItem("brochureFile")}}
              className="mt-10  lg:mt-18 mx-auto w-full lg:w-fit hidden lg:block"
            >
              <Button className="w-full">Know Your Neighborhood</Button>
            </button>
            <div className="mt-10  lg:mt-18 mx-auto w-full lg:w-fit block lg:hidden">
              <Button
                onClick={() => openForm(<SiteVisitForm />, "Book a Site Visit")}
                className="w-full"
              >
                Know Your Neighborhood
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
