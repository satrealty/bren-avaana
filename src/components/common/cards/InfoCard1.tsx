"use client";

import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export default function InfoCard1({
  title,
  imageSrc,
  description,
  mobileDescription,
}: {
  title: string;
  imageSrc: string;
  description: string;
  mobileDescription: string;
}) {
  return (
    <div className="lg:border flex gap-6 flex-col-reverse lg:flex-col lg:border-[#D9D9D9] rounded-xl lg:p-8  lg:max-w-[420px]">
      <div className="w-full h-[203px] lg:h-56 relative">
        <Image src={imageSrc} fill alt="" className="object-cover rounded-lg" />
      </div>
      <div>
        <Typography className="text-[27px] md:text-[27px] text-foreground lg:text-[27px] lg2:text-[28px] font-semibold ">
          {title}
        </Typography>
        <Typography
          variant={"body"}
          className="text-pretty text-left  mt-2 leading-tight hidden lg:block "
        >
          {description}
        </Typography>
        <Typography
          variant={"body"}
          className="text-pretty text-justify mt-2 leading-tight lg:hidden"
        >
          {mobileDescription}
        </Typography>
      </div>
    </div>
  );
}
