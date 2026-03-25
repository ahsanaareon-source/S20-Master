import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { Badge as BaseBadge, badgeVariants } from "./badge";
import { cn } from "./utils";

type BadgeProps = React.ComponentProps<typeof BaseBadge>;

function Badge(props: BadgeProps) {
  return <BaseBadge {...props} />;
}

function BadgeButton({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="badge-button"
      className={cn(
        "inline-flex size-4 items-center justify-center rounded-sm p-0 opacity-70 transition-opacity hover:opacity-100",
        className,
      )}
      {...props}
    />
  );
}

function BadgeDot({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge-dot"
      className={cn("size-1.5 rounded-full bg-[currentColor] opacity-75", className)}
      {...props}
    />
  );
}

export { Badge, BadgeButton, BadgeDot, badgeVariants };

