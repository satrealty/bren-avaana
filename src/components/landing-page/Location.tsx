
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const LOCATIONS = [
  { title: "St. John's Medical College Hospital", distance: "0.4 Kms" },
  { title: "Edify School", distance: "0.65 Kms" },
  { title: "Kaggdapura Government Hospital", distance: "1.13 Kms" },
  { title: "Silicon Valley School", distance: "1.8 Kms" },
  { title: "Silk Institute Metro Station", distance: "4.7 Kms" },
  { title: "Mantri Arena Mall", distance: "9.0 Kms" },
];

export default function LocationSection() {
  return (
    <section id="location" className="py-0 lg:bg-[#FBFBFB]">

      {/* Mobile-only heading above map */}
      <div className="container px-4 py-14 block lg:hidden">
        <Typography
          variant="sectionTitle"
          className="text-[24px] md:text-[28px] leading-[140%]"
        >
          Find Your Perfect Home in the Perfect Location
        </Typography>
      </div>

      {/* FULL WIDTH MAP */}
      <div className=" rounded-3xl px-4  lg:px-22">
          <iframe
          title="Project Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.3053872278165!2d77.74753983188576!3d12.965134683514014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0fbce8c3b737%3A0x35d54209821e8964!2sBrigade%20Avalon!5e0!3m2!1sen!2sin!4v1755517132403!5m2!1sen!2sin"
            className="w-full h-[220px] sm:h-[420px] lg:h-[500px] rounded-2xl lg:rounded-3xl shadow-[0px_4px_25px_rgba(0,0,0,0.04)]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* BOTTOM CONTENT */}
      <div className=" container pb-12 lg:pb-0   lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* LEFT SIDE — HEADING + BUTTON */}
          <div className="lg:w-[40%] space-y-6">
            <div className="hidden lg:block">
              <Typography
                variant="sectionTitle"
                className="text-[28px] md:text-[32px] lg:text-[38px] leading-[140%]"
              >
                Find Your Perfect Home in the Perfect Location
              </Typography>

              <Button className="mt-6 px-6 py-4 bg-[#3D9E8B] hover:bg-[#249b6b] text-white text-[15px] w-fit font-bold">
                Know Your Neighborhood
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE — NAMES + DISTANCE */}
          <div className="lg:w-[45%] text-[15px]">
            {/* Mobile: each name + distance in a single row */}
            <div className="block lg:hidden space-y-4">
              {LOCATIONS.map((item) => (
                <div
                  key={item.title}
                  className="flex justify-between items-start gap-4"
                >
                  <span className="text-[#999999] leading-[160%] max-w-[70%]">
                    {item.title}
                  </span>
                  <span className="text-[#999999] font-semibold leading-[160%] whitespace-nowrap">
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop: original two-column grid layout */}
            <div className="hidden lg:grid grid-cols-2 gap-y-4">
              {/* LEFT column — place names */}
              <div className="space-y-4">
                {LOCATIONS.map((item) => (
                  <div key={item.title} className="text-[#999999] leading-[160%]">
                    {item.title}
                  </div>
                ))}
              </div>

              {/* RIGHT column — distances */}
              <div className="space-y-4 text-right">
                {LOCATIONS.map((item) => (
                  <div
                    key={item.title + '-d'}
                    className="text-[#999999] font-semibold leading-[160%]"
                  >
                    {item.distance}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile-only button at end of section */}
      <div className="container pb-10 px-4 block lg:hidden">
        <Button className="w-full justify-center px-6 py-4 bg-[#3D9E8B] hover:bg-[#249b6b] text-white text-[15px] font-bold">
          Know Your Neighborhood
        </Button>
      </div>
    </section>
  );
}
