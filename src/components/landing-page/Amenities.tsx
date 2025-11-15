"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";
import AmenitiesGalleryCard from "@/components/common/cards/AmenitiesGalleryCard";

import Image from "next/image";
import { chunkArray } from "@/lib/formatArray";
import { carouselImages } from "@/lib/data/images";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("../common/Carousel"), {
  ssr: false,
});

const ACCORDIAN_DATA = [
  {
    id: "item-1",
    trigger: {
      icon: "/images/landing-page/ammenitiesIcons/recreationIcon.svg",
      title: "Recreation & Lifestyle",
    },
    content: [
      "Grand Reception Lobby",
      "Multi-purpose / Party Hall with Outdoor Area",
      "Kitchen & Buffet Area",
      "Casual Reading Space with Pool Table",
      "Casual Co-working Café",
      "Party Lawn with Open-Air Theatre",
      "Theme Play Park for Kids",
      "Kids’ & Toddlers’ Play Areas",
      "Skating Rink",
      "Multi-purpose Play Court",
      "Community Vegetable Garden",
      "Floral Garden with Trees",    


         "Grand Reception Lobby",
      "Multi-purpose / Party Hall with Outdoor Area",
      "Kitchen & Buffet Area",
      "Casual Reading Space with Pool Table",
      "Casual Co-working Café",
      "Party Lawn with Open-Air Theatre",
         "Grand Reception Lobby",
      "Multi-purpose / Party Hall with Outdoor Area",
      "Kitchen & Buffet Area",
      "Casual Reading Space with Pool Table",
      "Casual Co-working Café",
      "Party Lawn with Open-Air Theatre",  
    ],
  },
  {
    id: "item-2",
    trigger: {
      icon: "/images/landing-page/ammenitiesIcons/sportsicon.svg",
      title: "Sports & Fitness",
    },
    content: [
      "Gym with aerobics area",
      "Badminton & squash courts",
      "Golf simulator",
      "Table tennis room",
      "Multipurpose play court",
      "Practice cricket pitch",
      "Yoga deck",
      "Calisthenics court",
      "Fitness pad",
      "Reflexology path",

         "Grand Reception Lobby",
      "Multi-purpose / Party Hall with Outdoor Area",
      "Kitchen & Buffet Area",
      "Casual Reading Space with Pool Table",
      "Casual Co-working Café",
      "Party Lawn with Open-Air Theatre",
         "Grand Reception Lobby",
      "Multi-purpose / Party Hall with Outdoor Area",
      "Kitchen & Buffet Area",
      "Casual Reading Space with Pool Table",
      "Casual Co-working Café",
      "Party Lawn with Open-Air Theatre",
         "Grand Reception Lobby",
      "Multi-purpose / Party Hall with Outdoor Area",
      "Kitchen & Buffet Area",
      "Casual Reading Space with Pool Table",
      "Casual Co-working Café",
      "Party Lawn with Open-Air Theatre",
    ],
  },
  {
    id: "item-3",
    trigger: {
      icon: "/images/landing-page/ammenitiesIcons/wellnessIcon.svg",
      title: "Kids & Family",
    },
    content: ["Pet park", 
      "Passive recreation zones", 
      "Zen court",


       "Grand Reception Lobby",
      "Multi-purpose / Party Hall with Outdoor Area",
      "Kitchen & Buffet Area",
      "Casual Reading Space with Pool Table",
      "Casual Co-working Café",
      "Party Lawn with Open-Air Theatre",
         "Grand Reception Lobby",
      "Multi-purpose / Party Hall with Outdoor Area",
      "Kitchen & Buffet Area",
      "Casual Reading Space with Pool Table",
      "Casual Co-working Café",
      "Party Lawn with Open-Air Theatre",
         "Grand Reception Lobby",
      "Multi-purpose / Party Hall with Outdoor Area",
      "Kitchen & Buffet Area",
      "Casual Reading Space with Pool Table",
      "Casual Co-working Café",
      "Party Lawn with Open-Air Theatre",
    
    ]
    
    ,
  },
  {
    id: "item-4",
    trigger: {
      icon: "/images/landing-page/ammenitiesIcons/familyIcon.svg",
      title: "Community Spaces",
    },
    content: [
      "Arrival plaza & 3-tiered lobbied entrance",
      "Interconnected lobby spaces",
      "Courtyard & step-out plaza",
      "Feature waterbody at arrival",


         "Grand Reception Lobby",
      "Multi-purpose / Party Hall with Outdoor Area",
      "Kitchen & Buffet Area",
      "Casual Reading Space with Pool Table",
      "Casual Co-working Café",
      "Party Lawn with Open-Air Theatre",
         "Grand Reception Lobby",
      "Multi-purpose / Party Hall with Outdoor Area",
      "Kitchen & Buffet Area",
      "Casual Reading Space with Pool Table",
      "Casual Co-working Café",
      "Party Lawn with Open-Air Theatre",
         "Grand Reception Lobby",
      "Multi-purpose / Party Hall with Outdoor Area",
      "Kitchen & Buffet Area",
      "Casual Reading Space with Pool Table",
      "Casual Co-working Café",
      "Party Lawn with Open-Air Theatre",
    ],
  },
  
];

const CAROUSEL_DATA = {
  images: [
    {
      id: "item-1",
      image: carouselImages.cafe,
    },
    {
      id: "item-2",
      image: carouselImages.pool,
    },
    {
      id: "item-3",
      image: carouselImages.miniTheatre,
    },
    {
      id: "item-4",
      image: carouselImages.spa,
    },
    {
      id: "item-5",
      image: carouselImages.gym,
    },
    {
      id: "item-6",
      image: carouselImages.petPark,
    },
    {
      id: "item-7",
      image: carouselImages.businessCentre,
    },
    {
      id: "item-8",
      image: carouselImages.evCharging,
    },
    {
      id: "item-9",
      image: carouselImages.partyTerrace,
    },
  ],
  tags: ["Open Café space", "Swimming Pool", "Mini theatre", "Spa space", "Gym", "Pet park", "Business centre", "EV charging", "Party terrace"],
};

export default function Amenities() {
  const carouselSlidesPc = chunkArray(CAROUSEL_DATA.images, 3);
  const carouselSlidesLGPc = chunkArray(CAROUSEL_DATA.images, 1);
  return (
    <section id="amenities" className="py-8 my-8 relative lg:py-20 bg-[#FBFBFB] md:bg-white">
      <h2 className="text-center max-w-56 md:max-w-none mx-auto text-[27px] md:text-[30px] lg:text-[40px] lg2:text-[48px] font-semibold leading-[120%]">
        A Bouquet of Belonging
      </h2>

      <Typography variant={"body"} className="lg:text-center container  mx-auto mt-4">
       Spread across four levels, Bren Avaana offers thoughtfully curated spaces for relaxation, recreation, and rejuvenation, enriching everyday life for individuals, families, and the community.
      </Typography>

      <div className="absolute top-0 -left-8">
        <Image   src="/images/landing-page/leaf-left-half-golden.png"  width={180} height={180} alt=""/>
      </div>
      <div className="container mx-auto">
        <Accordion type="single" collapsible className="w-full  mt-8" defaultValue={ACCORDIAN_DATA[0].id}>
          {ACCORDIAN_DATA.map((item, index) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTriggerContent title={item.trigger.title} icon={item.trigger.icon} />

              <AccordionContent>
                <div className="flex flex-col justify-around lg:flex-row gap-8">
                  {/* Left: Text List */}
                  <div className="scrollbox-wrapper " >
  <ul
    className="
      scrollbox
      list-none
      space-y-2
      text-customGrey
      text-left
      basis-[30%]
      max-h-[380px]
  overflow-y-auto
      pr-4
      px-6
    "
  >
    {item.content.map((text, index) => (
      <li key={index + 'body'}>
        <Typography variant={'body'}>{text}</Typography>
      </li>
    ))}
  </ul>
</div>

                  {/* Right: Carousel */}
                  <div className="basis-[70%]">
                    {/* Large screens single image slider */}
                    <div className="hidden lg:block xl:hidden">
                      <Carousel>
                        {carouselSlidesLGPc.map((slide, index) => (
                          <AmenitiesGalleryCard key={index + "image-slider-lg"} image1={slide[0].image} />
                        ))}
                      </Carousel>
                    </div>

                    {/* Extra large screens triple image slider */}
                    <div className="hidden xl:block">
                      <Carousel>
                        {carouselSlidesPc.map((slide, index) => (
                          <AmenitiesGalleryCard
                            key={index + "image-slider-xl"}
                            image1={slide[0].image}
                            image2={slide[1].image}
                            image3={slide[2].image}
                          />
                        ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

const AccordionTriggerContent = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <AccordionTrigger>
      <div className="flex items-center gap-6">
        <img src={icon} alt={` icon`} />
        <Typography variant={"sectionTitle"} className="text-lg md:text-lg lg:text-xl lg2:text-2xl font-semibold leading-[150%]">
          {title}
        </Typography>
      </div>
    </AccordionTrigger>
  );
};
