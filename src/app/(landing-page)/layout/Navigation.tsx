"use client";

import { NAVIGATION_CONFIG } from "@/lib/data/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation({
  textColor = "text-white",
  disableScrollEffect = false,
}: {
  textColor?: string;
  disableScrollEffect?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (disableScrollEffect) {
      setScrolled(false);
      return;
    }
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [disableScrollEffect]);

  // When scroll effect is disabled, always use provided textColor.
  // Otherwise: white initially; switch to black when scrolled.
  const finalTextColor = disableScrollEffect
    ? textColor
    : scrolled
    ? "text-[#2A2A2A]"
    : "text-white";
  return (
    <nav>
      <ul
        className={cn(
          "flex gap-6 lg2:gap-8 font-medium transition-colors ease-in-out duration-300",
          finalTextColor
        )}
      >
        {NAVIGATION_CONFIG.map((item) => (
          <li key={item.label} className="lg2:text-lg">
            <Link href={item.destination}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
