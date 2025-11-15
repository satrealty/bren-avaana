"use client";

import { useFormContext } from "@/app/context/formContext";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import SiteVisitForm from "@/components/common/forms/SiteVisitForm";

export default function PricingCard({
  superScript,
  title,
  description,
  button,
}: {
  superScript: string;
  title: string;
  description: string;
  button: {
    text: string;
    href: string;
  };
}) {
  const { openForm } = useFormContext();
  return (
    <div className="bg-white py-8 md:pb-10 md:pt-14 h-full lg:min-w-[400px] lg2:min-w-[500px] xl:min-w-[560px] border border-customGrey rounded-lg px-8 lg2:px-0">
      <Typography className="text-center text-lg lg:text-2xl font-semibold text-foreground">
        {superScript}
      </Typography>
      <div className="mt-4 md:mt-6">
        <Typography variant={"sectionTitle"} className="text-center">
          {title}
        </Typography>
        <Typography variant={"body"} className="text-center">
          {description}
        </Typography>
      </div>

      <Link
        href={button.href}
        className="lg:w-fit mx-auto mt-6 lg:mt-10 hidden lg:block"
      >
        <Button className="w-full lg:w-fit">{button.text}</Button>
      </Link>
      <div className="lg:w-fit mx-auto mt-6 lg:mt-10 block lg:hidden">
        <Button
          onClick={() => openForm(<SiteVisitForm />, "Book a Site Visit")}
          className="w-full lg:w-fit "
        >
          {button.text}
        </Button>
      </div>
    </div>
  );
}
