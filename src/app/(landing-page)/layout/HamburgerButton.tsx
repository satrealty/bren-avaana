"use client";
import { motion } from "framer-motion";
export default function HamburgerButton({
  menuOpen,
  setMenuOpen,
  hasScrolled,
}: {
  menuOpen: boolean;
  setMenuOpen: any;
  hasScrolled: boolean;
}) {
  // Use foreground color for bars if menu is open OR page has scrolled, else white (assuming transparent header over hero)

  // Variants now only handle transform & opacity; color handled via style so it updates even if variant state name stays the same.
  const topVariants = {
    closed: { y: -8, rotate: 0 },
    open: { y: 0, rotate: 45 },
  } as const;
  const middleVariants = {
    closed: { opacity: 1, scaleX: 1 },
    open: { opacity: 0, scaleX: 0 },
  } as const;
  const bottomVariants = {
    closed: { y: 8, rotate: 0 },
    open: { y: 0, rotate: -45 },
  } as const;
  return (
    <motion.button
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen((p: boolean) => !p)}
      className="relative w-12 h-12 flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      whileTap={{ scale: 0.9 }}
    >
      <span className="sr-only">Toggle navigation</span>
      <motion.span
        aria-hidden
        className="absolute h-[2px] w-6 rounded-full will-change-transform"
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={topVariants}
        style={{
          backgroundColor:
            menuOpen || hasScrolled
              ? "var(--color-foreground,#2a2a2a)"
              : "#FFFFFF",
        }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.3, 1] }}
      />
      <motion.span
        aria-hidden
        className="absolute h-[2px] w-6 rounded-full will-change-transform"
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={middleVariants}
        style={{
          backgroundColor:
            menuOpen || hasScrolled
              ? "var(--color-foreground,#2a2a2a)"
              : "#FFFFFF",
        }}
        transition={{ duration: 0.25, ease: [0.42, 0, 0.2, 1] }}
      />
      <motion.span
        aria-hidden
        className="absolute h-[2px] w-6 rounded-full will-change-transform"
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={bottomVariants}
        style={{
          backgroundColor:
            menuOpen || hasScrolled
              ? "var(--color-foreground,#2a2a2a)"
              : "#FFFFFF",
        }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.3, 1] }}
      />
    </motion.button>
  );
}
