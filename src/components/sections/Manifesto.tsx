import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function Manifesto() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-28 md:py-40 bg-card border-y border-border">
      <div className="container max-w-4xl">
        <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-6">Notre ADN</p>
        <p
          className={cn(
            "font-display font-extrabold uppercase text-3xl md:text-5xl leading-[1.15] text-balance transition-all duration-1000",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          Un projet n'a qu'<span className="text-primary">une vie</span>. Un seul instant pour exister.
          Notre métier : sculpter cet instant pour qu'il marque, qu'il dure, qu'il devienne référence.
        </p>
        <p className="mt-8 text-foreground/70 max-w-2xl leading-relaxed">
          Setup prêt. Lumière sculptée. Précision One Life. Trois mots qui résument une approche : préparation rigoureuse, exigence visuelle, narration au service du résultat client.
        </p>
      </div>
    </section>
  );
}
