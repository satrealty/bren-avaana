
import Image from "next/image";
import { Typography } from "../ui/typography";

const FEATURES = [
  {
    img: "/images/landing-page/feature1.webp",
    title: "Tall Windows with Grilles for Sunlight & Safety",
  },
  {
    img: "/images/landing-page/feature2.webp",
    title: "Smart Water Meters with Leak Detection & Remote Control",
  },
  {
    img: "/images/landing-page/feature3.webp",
    title: "Solar & Conventional Lighting Mix for Energy Efficiency",
  },
  {
    img: "/images/landing-page/feature4.webp",
    title: "Machine-room-less Elevators",
  },
  {
    img: "/images/landing-page/feature5.webp",
    title: "Use of Biodegradable Materials in Construction",
  },
  {
    img: "/images/landing-page/feature6.webp",
    title: "Well–planned electrical provisions for ACs & TVs",
  },
];

export default function BrennovationFeatures() {
  return (
    <section className="lg:bg-[#FBFBFB] py-16 lg:py-20 relative">
     <div className="absolute right-0 top-0">
       <Image  width={180} height={180} src="/images/landing-page/leaf-right-half-golden.png" alt=""   />
     </div>
      <div className="  container ">

        {/* Title */}
        <Typography
          variant={"sectionTitle"}
          className="lg:text-center text-2xl md:text-3xl lg:text-[52px]"
        >
          Brennovation Features
        </Typography>

        {/* Subtitle */}
        <Typography
          variant={"body"}
          className="lg:text-center mt-3 max-w-5xl mx-auto text-customGrey "
        >
          Bren blends design, quality, and innovation to create efficient,
          future-ready homes that deliver an extraordinary living experience for
          generations to come.
        </Typography>

        {/* Row 1: 3 equal cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {FEATURES.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="border border-[#BAEAE0] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow transition-all duration-200"
            >
              <div className="relative w-full h-53">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <p className="text-center px-4 py-5 text-[22px] font-normal leading-[150%] text-[#999999]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: middle wider, sides smaller (single line on lg) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:[grid-template-columns:1fr_1.6fr_1fr] gap-12">
          {/* Left small */}
          <div className="border border-[#BAEAE0] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow transition-all duration-200">
            <div className="relative w-full h-63">
              <Image src={FEATURES[3].img} alt={FEATURES[3].title} fill className="object-cover" />
            </div>
            <p className="text-center px-4 py-5 text-[22px] leading-[150%] text-customGrey">
              {FEATURES[3].title}
            </p>
          </div>

          {/* Center wide */}
          <div className="border border-[#BAEAE0] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow transition-all duration-200">
            <div className="relative w-full h-48 sm:h-56 lg:h-63">
              <Image src={FEATURES[4].img} alt={FEATURES[4].title} fill className="object-cover" />
            </div>
            <p className="text-center px-4 py-5 text-[22px] leading-[150%] text-customGrey">
              {FEATURES[4].title}
            </p>
          </div>

          {/* Right small */}
          <div className="border border-[#BAEAE0] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow transition-all duration-200">
            <div className="relative w-full h-63">
              <Image src={FEATURES[5].img} alt={FEATURES[5].title} fill className="object-cover" />
            </div>
            <p className="text-center px-4 py-5 text-[22px] leading-[150%] text-customGrey">
              {FEATURES[5].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
