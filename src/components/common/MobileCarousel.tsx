"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, ReactNode, useEffect, useState } from "react";

type CarouselProps = {
  children: ReactNode;
  autoplay?: boolean;
  delay?: number;
  showNavigation?: boolean;
  showDots?: boolean;
  infinite?: boolean;
  className?: string;
  navTags?: string[];
};

export default function MobileCarousel({
  children,
  autoplay = true,
  delay = 4000,
  showDots = true,
  infinite = false,
  className = "",
  navTags = [],
}: CarouselProps) {
  const slides = Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      handleNext();
    }, delay);
    return () => clearInterval(interval);
  }, [current, autoplay, delay]);

  const handleNext = () => {
    setDirection(1);
    if (infinite) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };

  const handlePrev = () => {
    setDirection(-1);
    if (infinite) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    } else {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  // Motion variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg ${className}  lg:hidden  pb-5 `}
    >
      <div className="relative flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={(_, info) => {
              if (info.offset.x < -100) handleNext();
              else if (info.offset.x > 100) handlePrev();
            }}
            className="w-full h-full"
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {/* {showNavigation && (
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <Button
            variant="secondary"
            className="rounded-full bg-black/50 text-white hover:bg-black/70"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="secondary"
            className="rounded-full bg-black/50 text-white hover:bg-black/70"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      )} */}

      {/* Three tab line indicators with arrows overlaid on the image */}
      {showDots && (
        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-between px-4">
          {/* Left arrow at start */}
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="pointer-events-auto h-8 w-8"
          >
            <ChevronLeft
              className={`${
                current === 0 ? "text-[#D1D1D1]" : "text-white"
              } size-7 transition-colors ease-in-out duration-300 cursor-pointer drop-shadow`}
            />
          </button>

          {/* Centered three lines */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 pointer-events-auto">
              {Array.from({ length: 3 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    index === current % 3
                      ? "w-8 bg-white"
                      : "w-4 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right arrow at end */}
          <button
            onClick={handleNext}
            disabled={current === slides.length - 1}
            className="pointer-events-auto h-8 w-8"
          >
            <ChevronRight
              className={`${
                current === slides.length - 1
                  ? "text-[#D1D1D1]" : "text-white"
              } size-7 transition-colors ease-in-out duration-300 cursor-pointer drop-shadow`}
            />
          </button>
        </div>
      )}
    </div>
  );
}
