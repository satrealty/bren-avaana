import { Globe } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen w-full lg:block hidden">
        <Image src="/images/homePageImages/bgDesktop.webp" fill alt="" />
        <div className="absolute py-16 inset-0 flex flex-col justify-between items-center ">
          <h1 className="font-bold text-3xl">SAT REALTY</h1>
          <div>
            <h1 className="font-semibold text-4xl text-center">
    Our Site Is Currently Under <br /> Construction
            </h1>
            <p className="text-gray-500 text-sm mt-5 text-center">Stay connected as our new website goes live shortly</p>
          </div>
          <a href="mailto:info@sat-realty.com" target="_blank" className="inline-flex text-[#a8856e] gap-2">
            <Globe /> info@sat-realty.com
          </a>
        </div>
      </div>
       <div className="relative h-screen lg:hidden">
        <Image src="/images/homePageImages/bgMobile.webp" fill alt="" />
        <div className="absolute py-16 inset-0 flex flex-col justify-between items-center ">
          <h1 className="font-bold text-3xl">SAT REALTY</h1>
          <div>
            <h1 className="font-semibold text-3xl text-center">
              Our Site Is Currently <br /> Under Construction
            </h1>
            <p className="text-gray-500 text-sm mt-5 text-center">Stay connected as our new website <br /> goes live shortly</p>
          </div>
          <a href="mailto:info@sat-realty.com" className="inline-flex text-[#a8856e] gap-2">
            <Globe /> info@sat-realty.com
          </a>
        </div>
      </div>
    </div>
  );
}
