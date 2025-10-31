"use client";

import { Typography } from "@/components/ui/typography";
import SiteVisitForm from "../forms/SiteVisitForm";

export default function SiteVisitFormCard() {
  return (
    <div
      id="enquire-form"
      className="bg-white py-7 px-16 rounded-2xl lg2:min-w-[520px]"
    >
      <div>
        <Typography variant={"sectionTitle"} className="text-center">
          Bren Avaana
        </Typography>
        <Typography variant={"subtitle"} className="mt-2">
          Starting Price: ₹1.49 Cr Onwards*
        </Typography>
        <div className="w-full h-[1px] bg-[#e2e2e2] my-4" />
        <Typography
          variant={"subtitle"}
          className="mt-2 font-semibold text-center"
        >
          Book a Site Visit
        </Typography>
      </div>
      <SiteVisitForm style={2} />
    </div>
  );
}
