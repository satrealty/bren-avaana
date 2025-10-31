"use client";

import { NAVIGATION_CONFIG } from "@/lib/data/config";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navigation({
  textColor = "text-white",
}: {
  textColor?: string;
}) {
  return (
    <nav>
      <ul className={cn("flex gap-6 lg2:gap-8 font-medium transition-colors ease-in-out duration-300", textColor)}>
        {NAVIGATION_CONFIG.map((item) => (
          <li key={item.label} className=" lg2:text-lg text-white">
            <Link href={item.destination}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
