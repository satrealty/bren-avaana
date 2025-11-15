import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      title: "text-[38px] lg:text-[48px] lg2:text-[56px] leading-[120%] font-semibold",
      sectionTitle: "text-[27px] md:text-[30px] lg:text-[40px] lg2:text-[484x] font-semibold leading-[120%]",
      subtitle: " text-sm lg:text-[22px] lg2:text-[26px] font-medium leading-[150%]",
      body: "text-sm lg:text-lg font-normal leading-[150%] text-customGrey",
      caption: "text-sm text-customGrey",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TypographyProps = React.ComponentProps<"p"> &
  VariantProps<typeof typographyVariants> & {
    asChild?: boolean;
  };

function Typography({
  className,
  variant,
  asChild = false,
  ...props
}: TypographyProps) {
  const Comp = asChild ? Slot : getTagForVariant(variant);

  return (
    <Comp
      data-slot="typography"
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}

// Automatically pick semantic HTML tags
function getTagForVariant(variant: TypographyProps["variant"]) {
  switch (variant) {
    case "title":
      return "h1";
    case "sectionTitle":
      return "h2";
    case "subtitle":
      return "h3";
    case "caption":
      return "span";
    default:
      return "p";
  }
}

export { Typography, typographyVariants };
