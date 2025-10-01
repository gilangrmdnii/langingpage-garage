"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-2 rounded-lg font-medium transition-colors",
        variant === "primary" &&
          "bg-gradient-to-r from-orange-500 to-red-600 text-white hover:opacity-90",
        variant === "secondary" &&
          "bg-gray-800 text-gray-100 hover:bg-gray-700",
        variant === "outline" &&
          "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
