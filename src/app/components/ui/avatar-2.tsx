"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { cn } from "./utils";

function AvatarIndicator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="avatar-indicator"
      className={cn("absolute -bottom-0.5 -right-0.5 flex size-5 items-center justify-center", className)}
      {...props}
    />
  );
}

function AvatarStatus({
  className,
  variant = "online",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "online" | "offline" | "busy" | "away";
}) {
  const tone = {
    online: "bg-green-600",
    offline: "bg-zinc-500 dark:bg-zinc-300",
    busy: "bg-yellow-600",
    away: "bg-blue-600",
  }[variant];

  return (
    <div
      data-slot="avatar-status"
      className={cn("size-2 rounded-full border-2 border-background", tone, className)}
      {...props}
    />
  );
}

export { Avatar, AvatarFallback, AvatarImage, AvatarIndicator, AvatarStatus };

