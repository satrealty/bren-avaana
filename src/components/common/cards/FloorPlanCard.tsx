"use client";

import { useFormContext } from "@/app/context/formContext";
import { Button } from "@/components/ui/button";
import { setStorage } from "@/lib/storageHelper";
import { isMobile, scrollIntoView } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SiteVisitForm from "../forms/SiteVisitForm";

export default function FloorPlanCard({
  title,
  imageSrc,
  downloadImage
}: {
  title: string;
  imageSrc: string;
  downloadImage?:string
}) {

   const fileName = downloadImage;
  const { openForm } = useFormContext();
  function handleBrochureDownloadClick() {
     setStorage("brochureFile", fileName);
    if (isMobile()) {
      openForm(<SiteVisitForm />, "Book a Site Visit");
    } else {
      scrollIntoView("site-visit");
    }
  }
  return (
    <div className="relative w-full max-w-[500px] h-[176px] lg:h-[298px] rounded-xl">
      <Image
        src={imageSrc}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        alt={title}
        className="object-cover object-center rounded-xl"
      />

      <div className="relative flex items-center justify-center w-full h-full">
        <Button
          onClick={handleBrochureDownloadClick}
          className="min-w-[210px] text-[#3D9E8B] lg:min-w-0 rounded-full font-bold"
          variant={"secondary"}
        >
          {title}
        </Button>
      </div>
    </div>
  );
}
