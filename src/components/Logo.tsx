import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  animated?: boolean;
}

export function Logo({ className, animated = false }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("text-foreground", className)}
      fill="none"
      aria-label="One Life Production"
    >
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray={animated ? "176" : undefined}
        strokeDashoffset={animated ? "176" : undefined}
        style={animated ? { animation: "draw-circle 1.4s cubic-bezier(0.16,1,0.3,1) forwards" } : undefined}
      />
      <circle cx="32" cy="32" r="3" fill="hsl(var(--primary))" />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontFamily="Montserrat, sans-serif"
        fontWeight="900"
        fontSize="28"
        fill="currentColor"
        style={animated ? { animation: "fade-up 0.6s 1.1s both" } : undefined}
      >
        1
      </text>
    </svg>
  );
}
