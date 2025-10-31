"use client";

import { Typography } from "@/components/ui/typography";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] py-16 lg:py-20">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20 lg2:gap-28">
          <div className="lg:min-w-max">
            <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-6">
              <img
                src="/images/landing-page/logos/brigade-avalon-black.svg"
                alt="brigade avalon logo"
                className="w-auto h-16 lg:h-28"
              />
              <hr className="w-[1px] bg-black h-[50px] lg:h-[75px] mt-2 opacity-50" />
              <img
                src="/images/landing-page/logos/brigade-avalon-authorised-black.svg"
                alt="brigade avalon logo"
                className="w-auto h-10 mt-2 lg:h-16"
              />
            </div>
            <div className="mt-10 lg:mt-8">
              <Typography className="text-sm lg:text-base font-bold text-center lg:text-left">
                Project RERA Number: PRM/KA/RERA/1251/446/PR/300625/007888
              </Typography>
              <Typography className="text-sm lg:text-base font-bold text-center lg:text-left mt-8 lg:mt-0">
                Agent RERA Number: PRM/KA/RERA/1251/310/AG/230427/003627
              </Typography>
            </div>
          </div>
          <div className="pb-10 lg:pb-0">
            <Typography variant={"body"} className="text-xs text-center lg:text-left lg:text-[22px] font-bold mt-4 lg:mt-0">
              Disclaimer:
            </Typography>
            <br className="hidden lg:block"/>
            <Typography variant={"body"} className="text-center text-xs lg:text-justify text-pretty mt-4 lg:mt-0">
              This website is managed by SAT Realty, a RERA-authorized affiliate
              partner/real estate agent. Information is for reference only;
              prices may change without notice, and availability is not
              guaranteed. Images are representational. Your details may be
              shared with Karnataka RERA-registered developers and used to send
              updates. Content is protected by copyright; unauthorized use is
              prohibited. For accurate details, please contact us directly.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
