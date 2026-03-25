"use client";

import * as React from "react";

import {
  Card as BaseCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { cn } from "./utils";

function Card(props: React.ComponentProps<typeof BaseCard>) {
  return <BaseCard {...props} />;
}

function CardHeading({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="card-heading" className={cn("space-y-1", className)} {...props} />;
}

function CardToolbar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="card-toolbar" className={cn("flex items-center gap-2.5", className)} {...props} />;
}

function CardTable({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="card-table" className={cn("grid grow", className)} {...props} />;
}

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTable,
  CardTitle,
  CardToolbar,
};

