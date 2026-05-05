import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ transparent = false }: { transparent?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "grid h-10 w-10 place-items-center border transition-colors",
        transparent
          ? "border-white/30 text-white hover:border-primary hover:text-primary"
          : "border-border text-foreground hover:border-primary hover:text-primary"
      )}
      aria-label={mounted && isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      title={mounted && isDark ? "Mode clair" : "Mode sombre"}
    >
      {mounted && isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
