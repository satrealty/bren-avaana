"use client";

import { useFormContext } from "@/app/context/formContext";
import { Typography } from "@/components/ui/typography";
import { remoteDownload } from "@/lib/remoteDownload";
import { getStorage, setStorage } from "@/lib/storageHelper";
import { useEffect } from "react";
import dynamic from "next/dynamic";


const YouTubePlayer = dynamic(()=>import("@/components/common/YoutubePlayer"))

export default function Thankyou() {
  const { closeForm } = useFormContext();
  useEffect(() => {
    let isBrochureDownloadEnabled = getStorage("brochure_download_enabled");
    if (isBrochureDownloadEnabled) {
      setStorage("brochure_download_enabled", false);
      remoteDownload("/files/brochure.pdf", "Brigade Avalon - E-Brochure");
    }
    closeForm();
  }, []);
  return (
    <section className="min-h-svh py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="">
          <div className="pt-36 lg:pt-24">
            <YouTubePlayer
              className="h-auto lg:h-[549px] w-auto"
              url="https://www.youtube.com/watch?v=93Zyb-vrgb4"
              thumbnail="/images/landing-page/video-thumbnail.jpg"
            />
            <Typography
              variant={"title"}
              className=" font-normal mt-20 text-center text-foreground leading-tight max-w-[270px] lg:max-w-none mx-auto"
            >
              Thank You for Showing Interest
            </Typography>
            <Typography
              variant={"body"}
              className="text-sm text-customGrey font-normal mt-4 text-center max-w-[284px] lg:max-w-none mx-auto"
            >
              Our team will connect with you soon with more details about
              Brigade Avalon.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
