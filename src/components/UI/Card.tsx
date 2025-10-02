import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-gray-800 rounded-2xl shadow-lg p-6 card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
