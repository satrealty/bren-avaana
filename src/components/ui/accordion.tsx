"use client"

import * as React from "react"
import { motion } from "framer-motion"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-[#E2E2E2] last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          " flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-[#3D9E8B] pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  forceMount = true,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content> & { forceMount?: boolean }) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = React.useState(false)

  // Observe data-state changes applied by Radix to drive motion variants
  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      setOpen(el.getAttribute("data-state") === "open")
    }
    update()
    const observer = new MutationObserver(update)
    observer.observe(el, { attributes: true, attributeFilter: ["data-state"] })
    return () => observer.disconnect()
  }, [])

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      forceMount={forceMount}
      asChild
      {...props}
    >
      <motion.div
        ref={ref}
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.28, ease: [0.25, 0.8, 0.3, 0.95] }}
        className={cn("overflow-hidden text-sm", className)}
      >
        <div className="pt-0 pb-4">{children}</div>
      </motion.div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
