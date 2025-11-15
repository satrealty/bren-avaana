"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface YouTubePlayerProps {
  url: string;
  thumbnail?: string; // optional custom thumbnail
  className?: string; // optional custom className
}

export default function YouTubePlayer({
  url,
  thumbnail,
  className,
}: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Helper to extract videoId from URL
  function extractVideoId(url: string): string | null {
    try {
      const parsed = new URL(url);

      // Handle normal watch links ?v=xxxx
      if (parsed.searchParams.has("v")) {
        return parsed.searchParams.get("v");
      }

      // Handle short links youtu.be/xxxx
      if (parsed.hostname.includes("youtu.be")) {
        return parsed.pathname.split("/")[1];
      }

      // Handle embed links youtube.com/embed/xxxx
      if (parsed.pathname.startsWith("/embed/")) {
        return parsed.pathname.split("/embed/")[1];
      }

      return null;
    } catch {
      return null;
    }
  }

  const videoId = useMemo(() => extractVideoId(url), [url]);

  if (!videoId) {
    return <div className="text-red-500">Invalid YouTube URL</div>;
  }

  const thumbnailUrl =
    thumbnail || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className={cn(
        "relative w-full lg:max-h-[700px] mx-auto aspect-video rounded-2xl overflow-hidden",
        className
      )}
    >
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <Image
              src={thumbnailUrl}
              alt="Video thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[50px] h-[50px] lg:w-[160px] lg:h-[160px] bg-black/40 rounded-full flex items-center justify-center">
                <svg
                  className="w-[15px] lg:w-full"
                  width="48"
                  height="59"
                  viewBox="0 0 48 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.799316 56.4523C0.799316 58.019 2.51897 58.9774 3.85138 58.1533L46.8836 31.537C48.1445 30.7571 48.1483 28.9244 46.8906 28.1394L3.8583 1.28007C2.52616 0.448593 0.799316 1.40637 0.799316 2.9767V56.4523Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isPlaying && (
        <motion.iframe
          key="video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
}
