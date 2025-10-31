// components/Popup.tsx
"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "./typography";

type PopupProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnOverlay?: boolean;
  className?: string; // extra classes for the panel if you want
  title?: string;
};

export default function Popup({
  open,
  onClose,
  children,
  closeOnOverlay = true,
  className = "",
  title,
}: PopupProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Focus the close button on open (simple focus management)
  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  // Create portal target
  const portalTarget = typeof window !== "undefined" ? document.body : null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!closeOnOverlay) return;
    if (e.target === overlayRef.current) onClose();
  };

  if (!portalTarget) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Popup dialog"
          className="fixed inset-0 z-[999999999999] flex items-center justify-center
                     bg-gradient-to-b from-black/30 via-black/50 to-black/60
                     backdrop-blur-sm"
          onMouseDown={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Panel */}
          <motion.div
            className={
              "relative mx-4 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl " +
              className
            }
            initial={{ y: 16, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 8, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            {/* Close button (top-right) */}

            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center bg-transparent"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.707 1.5L1.29297 12.914"
                  stroke="#848484"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.707 12.914L1.29297 1.5"
                  stroke="#848484"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="pt-4">
              {title && (
                <Typography
                  variant={"sectionTitle"}
                  className="text-center lg:text-left"
                >
                  {title}
                </Typography>
              )}
              <div className="mt-2">{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalTarget
  );
}
