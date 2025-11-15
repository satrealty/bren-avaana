
// import { Typography } from "@/components/ui/typography";
import PricingCard from "../common/cards/PricingCard";
export default function Pricing() {
  return (
    <section className="bg-[#FBFBFB] py-16 lg:py-20">
      <div className="container mx-auto">
        <h2  className="text-center max-w-56 md:max-w-none mx-auto text-[27px] md:text-[30px] lg:text-[40px] lg2:text-[48px] font-semibold leading-[120%]">
         Price Details
        </h2>
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-20 lg2:gap-28 mt-12 lg:mt-16">
          <PricingCard
            superScript="3.5 BHKs"
            title="₹4.62 - 5.56 Cr"
            description="Ranging from 2765 to 2933 sq. ft."
            button={{
              href: "/brigade-avalon#enquire-form",
              text: "Enquire Now",
            }}
          />
          <PricingCard
            superScript="4 BHKs with Maid’s Quarters"
            title="₹6.67 - 7.63 Cr"
            description="3862 sq. ft. Onwards"
            button={{
              href: "/brigade-avalon#enquire-form",
              text: "Enquire Now",
            }}
          />
        </div>
      </div>
    </section>
  );
}
