import { useEffect, useState } from "react";

/**
 * Detects if the scroll position has crossed a given threshold
 * @param threshold number (pixels)
 * @returns boolean (true if crossed, false if not)
 */
export function useScrollThreshold(threshold: number) {
  const [crossed, setCrossed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > threshold) {
        setCrossed(true);
      } else {
        setCrossed(false);
      }
    }

    // initial check (in case the page is already scrolled)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return crossed;
}
