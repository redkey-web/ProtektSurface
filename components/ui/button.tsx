import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0" +
  " hover-elevate active-elevate-2 transition-shadow",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-primary-border [box-shadow:inset_0_1px_0_rgba(255,255,255,0.3),0_4px_12px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.1)] active:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.1)]",
        destructive:
          "bg-destructive text-destructive-foreground border border-destructive-border [box-shadow:inset_0_1px_0_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.1)] active:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.1),0_1px_2px_rgba(0,0,0,0.1)]",
        outline:
          " border [border-color:var(--button-outline)] [box-shadow:0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] active:[box-shadow:0_1px_2px_rgba(0,0,0,0.05)]",
        secondary: "border bg-secondary text-secondary-foreground border border-secondary-border [box-shadow:inset_0_1px_0_rgba(255,255,255,0.5),0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] active:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.05)]",
        ghost: "border border-transparent",
      },
      // Heights are set as "min" heights, because sometimes Ai will place large amount of content
      // inside buttons. With a min-height they will look appropriate with small amounts of content,
      // but will expand to fit large amounts of content.
      size: {
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
