import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-blue-500 text-gray-900 hover:bg-blue-600 cursor-pointer",
        primary: "bg-gray-900 text-white",
        outline:
          "border border-blue-500 bg-transparent text-cyan-500 hover:bg-cyan-500 hover:text-gray-900",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-9 px-6",
        lg: "h-9 px-4 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
