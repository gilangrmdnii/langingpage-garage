import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({ title, subtitle, align = "center", className }: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold gradient-text">{title}</h2>
      {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
    </div>
  );
}
