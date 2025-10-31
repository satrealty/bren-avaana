import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isMobile(breakpoint: number = 768): boolean {
  if (typeof window === "undefined") return false; // SSR safety
  return window.innerWidth <= breakpoint;
}

export function scrollIntoView(formId: string) {
  const el = document.getElementById(formId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
