// components/Popup.tsx
"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

type PopupProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnOverlay?: boolean;
  className?: string; // extra classes for the panel if you want
};

export default function Popup({
  open,
  onClose,
  children,
  closeOnOverlay = true,
  className = "",
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
          className="fixed inset-0 z-[999] flex items-center justify-center
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
              "relative mx-4 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900 " +
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
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center
                         rounded-xl border border-black/5 bg-white/80 backdrop-blur
                         hover:bg-white active:scale-[0.98]
                         dark:border-white/10 dark:bg-zinc-800/80"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="pt-2">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalTarget
  );
}
