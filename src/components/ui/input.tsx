import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-[#848484] placeholder:text-[#848484] border-[#E2E2E2] flex w-full min-w-0 rounded-lg border bg-transparent px-4 py-3 text-lg shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 font-medium",
        "",
        " aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
