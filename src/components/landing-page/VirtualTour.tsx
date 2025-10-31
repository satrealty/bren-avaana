"use client";

import YouTubePlayer from "../common/YoutubePlayer";
import { Typography } from "../ui/typography";

export default function VirtualTour() {
  return (
    <section className="lg:bg-[#FBFBFB] py-16 lg:py-20">
      <div className="container mx-auto">
        <div>
          <Typography variant={"sectionTitle"} className="lg:text-center">
            Virtual Tour
          </Typography>
          <Typography variant={"body"} className="lg:text-center mt-4">
            Curious why certain units yield higher returns? Choosing the right
            one is key, let us show you how.
          </Typography>
          <div className="mt-8 lg:mt-12">
            <YouTubePlayer
              url="https://www.youtube.com/watch?v=93Zyb-vrgb4"
              thumbnail="/images/landing-page/video-thumbnail.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
