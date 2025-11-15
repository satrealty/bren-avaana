"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Children, ReactNode, useEffect, useState } from "react";

type CarouselProps = {
  children: ReactNode;
  autoplay?: boolean;
  delay?: number;
  showNavigation?: boolean;
  showDots?: boolean;
  infinite?: boolean;
  className?: string;
};

export default function Carousel({
  children,
  autoplay = true,
  delay = 4000,
  showNavigation = true,
  showDots = true,
  infinite = false,
  className = "",
}: CarouselProps) {
  const slides = Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

 const [isPlay, setIsPlay] = useState(true);
const [progress, setProgress] = useState(0);

useEffect(() => {
  if (!autoplay || !isPlay) return;

  const stepTime = delay / 100; // progress update steps
  setProgress(0);

  const interval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        handleNext();
        return 0;
      }
      return prev + 1;
    });
  }, stepTime);

  return () => clearInterval(interval);
}, [current, autoplay, isPlay, delay]);


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
      className={`relative w-full overflow-hidden rounded-xl ${className} hidden lg:block`}
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

      {/* Dots */}
 {showDots && (
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-8">

    {/* Left Arrow */}
    <button onClick={handlePrev} disabled={current === 0}>
      <ChevronLeft
        className={`${
          current === 0 ? "text-[#D1D1D1]" : "text-[#848484]"
        } size-10 transition-colors duration-300 cursor-pointer`}
      />
    </button>

    {/* Dots */}
    <div className="flex justify-center gap-5">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => {
            setDirection(i > current ? 1 : -1);
            setCurrent(i);
          }}
          className={`w-7 h-[2.5px] rounded-2xl transition-all cursor-pointer ${
            i === current ? "bg-customBrown scale-125" : "bg-[#E2E2E2]"
          }`}
        />
      ))}
    </div>

    {/* Right Arrow */}
    <button onClick={handleNext} disabled={current === slides.length - 1}>
      <ChevronRight
        className={`${
          current === slides.length - 1 ? "text-[#D1D1D1]" : "text-[#848484]"
        } size-10 transition-colors duration-300 cursor-pointer`}
      />
    </button>

    {/* Play/Pause Progress Button */}
    <div className="ml-4">
      <svg width="50" height="50" viewBox="0 0 50 50">
        {/* Background Circle */}
        <circle cx="25" cy="25" r="22" stroke="#dbc9bc" strokeWidth="2" fill="none" opacity="0.3" />

        {/* Progress Circle */}
        <circle
          cx="25" cy="25" r="22"
          stroke="#dbc9bc"
          strokeWidth="2"
          fill="none"
          strokeDasharray={138}
          strokeDashoffset={(1 - progress / 100) * 138}
          strokeLinecap="round"
          className="transition-all duration-150"
          transform="rotate(-90 25 25)"
        />

        {/* Play / Pause Icon */}
        <foreignObject x="14" y="14" width="22" height="22">
          <button
            onClick={() => setIsPlay(!isPlay)}
            className="w-full h-full flex items-center justify-center"
          >
            {isPlay ? (
              <span className="text-[#dbc9bc] text-lg"><Image height={20} width={20} src="/images/landing-page/ammenitiesIcons/pauseIcon.svg" alt="" /></span>
            ) : (
              <span className="text-[#dbc9bc] text-lg">▶</span>
            )}
          </button>
        </foreignObject>
      </svg>
    </div>

  </div>
)}


    </div>
  );
}
