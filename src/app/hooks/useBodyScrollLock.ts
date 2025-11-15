// useBodyScrollLock.ts
import { useEffect, useRef } from "react";
import { lockBodyScroll } from "@/lib/bodyScrollLock";

export function useBodyScrollLock(locked: boolean) {
  const unlockRef = useRef<null | (() => void)>(null);

  useEffect(() => {
    if (locked && !unlockRef.current) {
      unlockRef.current = lockBodyScroll();
    } else if (!locked && unlockRef.current) {
      unlockRef.current();
      unlockRef.current = null;
    }
    return () => {
      // Cleanup on unmount
      if (unlockRef.current) {
        unlockRef.current();
        unlockRef.current = null;
      }
    };
  }, [locked]);
}
