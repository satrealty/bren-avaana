import StatsDisplaySection from "@/components/common/StatsDisplay";
import AboutBrigadeAvalon from "@/components/landing-page/AboutBrigadeAvalon";
import Hero from "@/components/landing-page/Hero";
import LazySections from "@/components/landing-page/LazyLandingSection";

export const metadata = {
  title: "Bren-Avaana | SAT Realty",
  description:
    "Explore luxury residences at Bren-Avaana with premium amenities, strategic location, and curated lifestyle experiences.",
  keywords: [
    "Bren-Avaana",
    "SAT Realty",
    "Luxury Apartments Bengaluru",
    "Brigade Projects",
  ],
  alternates: {
    canonical: "https://sat-realty.com/bren-avaana",
  },
  openGraph: {
    title: "Bren-Avaana | SAT Realty",
    description:
      "Explore luxury residences at Brigade Avalon with premium amenities.",
    url: "https://sat-realty.com/bren-avaana",
    images: [
      {
        url: "/images/og/brigade-avalon-og.jpg",
        width: 1200,
        height: 630,
        alt: "Brigade Avalon Residential Project",
      },
    ],
  },
};


const stats = [
  { title: "30+", subTitle: "Ergonomic Amenities" },
  { title: "32K Sq Ft", subTitle: "4 Floor Clubhouse" },
  { title: "55%", subTitle: "Spacious Green Open Spaces" },
  { title: "320+", subTitle: "Exclusive Residences " },
  { title: "31K Sq Ft", subTitle: "Commercial Space" },
];

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="px-2 md:px-0">
        <AboutBrigadeAvalon />
      <div className="md:pb-12">
        <StatsDisplaySection
          stats={stats}
          className="mt-16 lg:mt-20 hidden lg:flex"
        />
      </div>

      <LazySections />

      </div>
      
    
    </main>
  );
}
