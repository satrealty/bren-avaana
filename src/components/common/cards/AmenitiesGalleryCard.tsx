"use client";

import Image, { StaticImageData } from "next/image";

export default function AmenitiesGalleryCard({
  image1,
  image2,
  image3,
}: {
  image1: string | StaticImageData;
  image2?: string | StaticImageData;
  image3?: string | StaticImageData;
}) {
  return (
    <div>
      <div>
        <div className="w-full lg:h-[400px] lg2:h-[403px] relative">
          <Image
            src={image1}
            fill
             placeholder={typeof image1 === "object" ? "blur" : undefined}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-xl"
            alt="Carousel Image 1"
          />
        </div>
      </div>
      <div className="xl:flex hidden mt-6 gap-6">
        {image2 && (
  <div className="relative h-[270px] w-full">
    <Image
      src={image2}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover rounded-xl"
      alt="Carousel Image 2"
      placeholder={typeof image2 === "object" ? "blur" : undefined}
    />
  </div>
)}
         {image3 && (<div className="relative h-[270px] w-full">
          <Image
            placeholder={typeof image2 === "object" ? "blur" : undefined}
            src={image3}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-xl"
            alt="Carousel Image 3"
          />
        </div>
        )}
      </div>
    </div>
  );
}
