import * as React from "react";
import { ChevronDown, type LucideIcon } from "lucide-react";

import { Button as BaseButton, buttonVariants } from "./button";
import { cn } from "./utils";

type ButtonProps = React.ComponentProps<typeof BaseButton>;

function Button(props: ButtonProps) {
  return <BaseButton {...props} />;
}

interface ButtonArrowProps extends React.SVGProps<SVGSVGElement> {
  icon?: LucideIcon;
}

function ButtonArrow({
  icon: Icon = ChevronDown,
  className,
  ...props
}: ButtonArrowProps) {
  return <Icon data-slot="button-arrow" className={cn("ms-auto -me-1", className)} {...props} />;
}

export { Button, ButtonArrow, buttonVariants };

