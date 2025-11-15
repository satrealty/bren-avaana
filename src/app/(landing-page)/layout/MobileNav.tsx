"use client";

import { NAVIGATION_CONFIG } from "@/lib/data/config";
import Link from "next/link";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import SiteVisitForm from "@/components/common/forms/SiteVisitForm";
import { useFormContext } from "@/app/context/formContext";

export default function MobileNav({
  menuOpen,
  setMenuOpen,
  hideCta = false,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  hideCta?: boolean;
}) {
  // Variants for parent list (controls stagger) and each item
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // No initial delay; first child animates immediately.
        staggerChildren: 0.08,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: -24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
    },
  } as const;

  // Animation controls to force restart on each open
  const listControls = useAnimation();
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setShowCta(false);
      (async () => {
        await listControls.set("hidden");
        await listControls.start("show");
        setShowCta(!hideCta); // only show CTA after list finishes (and not when hidden)
      })();
    } else {
      setShowCta(false);
    }
  }, [menuOpen, listControls]);

  const { openForm } = useFormContext();

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          key="mobile-nav"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.3, 1] }}
          className="fixed top-0 left-0 bg-[#F2F2F2] h-screen w-full z-[999] overflow-y-scroll px-4 py-14"
        >
          <div className="mt-24 relative">
            <nav className="">
              <motion.ul
                key={menuOpen ? "nav-open" : "nav-closed"}
                className="space-y-4"
                variants={listVariants}
                initial={false}
                animate={listControls}
                exit="exit"
              >
                {NAVIGATION_CONFIG.map((item, index) => (
                  <motion.li key={item.label} variants={itemVariants}>
                    <Link
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                      href={item.destination}
                    >
                      <Typography className="text-[28px] font-medium text-foreground">
                        {item.label}
                      </Typography>
                    </Link>
                    {index !== NAVIGATION_CONFIG.length - 1 && (
                      <hr className="h-[0.55px] mt-4 w-full text-[#e2e2e2] bg-[#e2e2e2]" />
                    )}
                  </motion.li>
                ))}
              </motion.ul>
              <AnimatePresence>
                {showCta && (
                  <motion.div
                    key="mobile-cta"
                    className="fixed bottom-6 container left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.3, 1] }}
                  >
                    <motion.div>
                      <Button
                        onClick={() => {
                          setMenuOpen(false);
                          openForm(<SiteVisitForm />, "Book a Site Visit");
                        }}
                        className="w-full"
                      >
                        Enquire Now
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
