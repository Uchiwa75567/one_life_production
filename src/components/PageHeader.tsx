import { cn } from "@/lib/utils";

interface Props { eyebrow: string; title: string; subtitle?: string; className?: string }
export function PageHeader({ eyebrow, title, subtitle, className }: Props) {
  return (
    <section className={cn("pt-40 pb-20 md:pt-48 md:pb-28 border-b border-border", className)}>
      <div className="container max-w-4xl">
        <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-6 animate-fade-up">{eyebrow}</p>
        <h1 className="font-display font-black uppercase text-5xl md:text-7xl leading-[0.95] tracking-tight text-balance animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 text-lg text-foreground/70 max-w-2xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
