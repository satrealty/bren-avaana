
import InfoCard1 from "@/components/common/cards/InfoCard1";
import SiteVisitForm from "../common/forms/SiteVisitForm";
import { Typography } from "../ui/typography";

export default function SiteVisit() {
  return (
    <section id="site-visit" className="pb-16 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 lg2:gap-24">
        
          <div className="lg:basis-2/3">
            <Typography
              variant={"title"}
              className="text-center lg:text-left"
            >
              Book a Site Visit
            </Typography>
            <div className="mt-8 lg:mt-12">
              <SiteVisitForm />
            </div>
          </div>
            <div className="lg:basis-1/3">
            <InfoCard1
              imageSrc="/images/landing-page/brigade-avalon-render-small.webp"
              title="Why Bren Avaana"
              description="Brigade Group, headquartered in Bangalore since 1986, is one of India’s top real estate developers, known for its customer focus, innovative design, and superior construction. With projects across residential, commercial, retail, hospitality, and education, it is a trusted name backed by RERA approval, metro connectivity, and a legacy of excellence."
              mobileDescription="Brigade Group, founded in 1986 in Bangalore, is a leading real estate developer known for quality, innovation, and diverse projects across sectors."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
