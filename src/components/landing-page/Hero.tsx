"use client";

import Image from "next/image";
import SiteVisitFormCard from "@/components/common/cards/SiteVisitFormCard";
import { Typography } from "../ui/typography";
import heroBg from "../../../public/images/landing-page/hero-bg.webp"
import heroBgMobile from "../../../public/images/landing-page/hero-bg-mobile.webp"

import { Button } from "../ui/button";
import { useFormContext } from "@/app/context/formContext";
import SiteVisitForm from "../common/forms/SiteVisitForm";
export default function Hero() {
  const { openForm } = useFormContext();
  return (
    <section  className="min-h-svh w-full relative">
      <Image
        src={heroBg}
        fill
        placeholder="blur"
        alt="Hero Background"
        className="object-cover object-top-left pointer-events-none hidden sm:block"
        
      />
      <Image
        src={heroBgMobile}
        fill
        placeholder="blur"
        alt="Hero Background"
        className="object-cover object-top-left pointer-events-none sm:hidden"
        
      />
      <div className="relative items-center justify-end min-h-screen container mx-auto pt-40 pb-24 hidden lg:flex">
        <SiteVisitFormCard />
      </div>
      <div className="relative pt-36 lg:hidden">
        <Typography variant={"title"} className="text-center text-white">
          Bren Avaana
        </Typography>
        <div className="w-fit flex justify-center items-center mx-auto mt-4">
          <Typography
            variant={"caption"}
            className="text-center text-white text-sm font-semibold border border-white py-1 px-2"
          >
            Starting Price: ₹1.49 Cr Onwards*
          </Typography>
        </div>
      </div>
      <div className="px-12 absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden container mx-auto">
        <Button
          onClick={() => openForm(<SiteVisitForm />,"Book a Site Visit")}
          variant={"secondary"}
          className="text-[#3B84BF] w-full"
        >
          Enquire Now
        </Button>
      </div>
    </section>
  );
}
