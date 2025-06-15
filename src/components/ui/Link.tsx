import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { Slot } from "@radix-ui/react-slot";

const linkVariants = cva(
  "inline-flex scale-100 items-center rounded-xs text-sm font-medium ring-offset-background transition-[transform,background-color] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary hover:text-secondary-foreground h-auto justify-start px-4 py-3",
  {
    variants: {
      variant: {
        default: "shadow-xs",
        disabled:
          "pointer-events-none bg-secondary/50 text-secondary-foreground",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-sm gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-sm px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type LinkProps = React.ComponentProps<"a"> &
  VariantProps<typeof linkVariants> & {
    asChild?: boolean;
    href?: string;
  };

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { className, variant, size, asChild = false, href = "#", ...props },
    ref
  ) => {
    if (asChild) {
      return (
        <Slot
          ref={ref}
          data-slot="link"
          data-variant={variant}
          className={cn(linkVariants({ variant, size, className }))}
          {...props}
        />
      );
    }
    return (
      <NextLink href={href} passHref legacyBehavior>
        <a
          ref={ref}
          data-slot="link"
          data-variant={variant}
          className={cn(linkVariants({ variant, size, className }))}
          {...props}
        />
      </NextLink>
    );
  }
);

Link.displayName = "Link";

export { Link, linkVariants };
