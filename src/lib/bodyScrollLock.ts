// scrollLock.ts
type SavedStyles = {
  overflow?: string | null;
  paddingRight?: string | null;
  position?: string | null;
  top?: string | null;
  width?: string | null;
};

let lockCount = 0;
let savedScrollY = 0;
let saved: SavedStyles | null = null;

function getScrollbarWidth(): number {
  // Difference between viewport width and document width
  const doc = document.documentElement;
  return window.innerWidth - doc.clientWidth;
}

/**
 * Locks body scroll and returns a function to unlock it.
 * Safe for nested usage; only the last unlock actually restores.
 */
export function lockBodyScroll(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  lockCount += 1;
  if (lockCount > 1) {
    // Already locked by someone else; just return an unlock that decrements.
    return () => {
      lockCount = Math.max(0, lockCount - 1);
    };
  }

  const body = document.body;

  // Save current inline styles so we can fully restore later.
  saved = {
    overflow: body.style.overflow,
    paddingRight: body.style.paddingRight,
    position: body.style.position,
    top: body.style.top,
    width: body.style.width,
  };

  // Preserve current scroll position
  savedScrollY = window.scrollY || window.pageYOffset || 0;

  // Compensate for scrollbar to avoid layout shift
  const sbw = getScrollbarWidth();
  if (sbw > 0) {
    const currentPR = parseFloat(getComputedStyle(body).paddingRight || "0");
    body.style.paddingRight = `${currentPR + sbw}px`;
  }

  // Lock scroll by fixing the body in place
  body.style.overflow = "hidden";
  body.style.position = "fixed";
  body.style.top = `-${savedScrollY}px`;
  body.style.width = "100%";

  // Return unlock function
  return () => {
    unlockBodyScroll();
  };
}

/** Manually unlocks body scroll (paired with lockBodyScroll). */
export function unlockBodyScroll(): void {
  if (typeof window === "undefined") return;

  if (lockCount === 0) return; // nothing to do
  lockCount -= 1;
  if (lockCount > 0) return; // still locked by others

  const body = document.body;

  // Restore styles
  if (saved) {
    body.style.overflow = saved.overflow ?? "";
    body.style.paddingRight = saved.paddingRight ?? "";
    body.style.position = saved.position ?? "";
    body.style.top = saved.top ?? "";
    body.style.width = saved.width ?? "";
    saved = null;
  } else {
    // Fallback
    body.style.removeProperty("overflow");
    body.style.removeProperty("padding-right");
    body.style.removeProperty("position");
    body.style.removeProperty("top");
    body.style.removeProperty("width");
  }

  // Restore scroll position (counteracting the fixed top)
  window.scrollTo({
    top: savedScrollY,
    behavior: "instant" as ScrollBehavior, // TS happy cast; some browsers ignore nonstandard value
  });
}
