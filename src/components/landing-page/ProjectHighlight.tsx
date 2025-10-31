"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ProjectHighlight() {
  return (
    <section className="w-full relative py-10 md:py-16 flex justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-customGreen rounded-2xl overflow-hidden shadow-lg">
          {/* Left - Project Image */}
          <div className="w-full h-[280px] md:h-[450px] relative">
            <Image src="/images/landing-page/project-highlights.webp" alt="Project Image" fill className="object-cover" priority />
          </div>

          {/* Right - Text Section */}
          <div className="flex flex-col justify-center px-6 md:px-12 py-8 text-white">
            <p className="text-sm md:text-base tracking-wide uppercase opacity-80">NURTURING TOGETHERNESS YOU CAN OWN</p>

            <h2 className="text-3xl md:text-5xl font-semibold mt-3">₹ 1.49 Cr Onwards</h2>

            <p className="mt-2 text-sm md:text-base opacity-90">Ranging from 1,515 - 1,660 Sq Ft</p>
            <Button className="mt-6 bg-white text-[#4DA391] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-auto self-start">
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -top-5 right-0"><Image src="/images/landing-page/leaf-right-half-green.png" width={100} height={100} alt=""/></div>
    </section>
  );
}
