// components/ui/router-button.tsx
import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const routerButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "px-4 py-2 h-9",
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-sm",
        lg: "px-6 py-3 text-base",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface RouterButtonProps
  extends React.ComponentPropsWithoutRef<typeof Link>,
    VariantProps<typeof routerButtonVariants> {
  className?: string
  children: React.ReactNode
}

export function RouterButton({
  href,
  children,
  variant,
  size,
  className,
  ...props
}: RouterButtonProps) {
  return (
    <Link
      href={href}
      className={cn(routerButtonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Link>
  )
}

export { routerButtonVariants }
