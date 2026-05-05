import { Link } from "react-router-dom";
import { Camera, Palette, Compass, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Camera,
    title: "Audiovisuel",
    desc: "Du matériel de pointe et une vision artistique unique pour transformer chaque seconde en émotion.",
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Identité de marque, motion graphics, supports print. Une cohérence visuelle qui élève votre récit.",
  },
  {
    icon: Compass,
    title: "Stratégie",
    desc: "Stratégie de contenu, réseaux sociaux, conseil de marque. Une direction claire pour chaque histoire.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-28 md:py-40 relative">
      <div className="container">
        <SectionHeader eyebrow="Nos Expertises" title="Trois disciplines. Une seule exigence." />

        <div className="mt-16 grid gap-px bg-border md:grid-cols-3 border border-border">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 100} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-display text-xs tracking-[0.25em] uppercase text-primary hover:gap-3 transition-all"
          >
            Découvrir tous nos services <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, delay }: any) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "group bg-background p-10 md:p-12 transition-all duration-700 relative",
        "hover:bg-card",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="w-14 h-14 grid place-items-center border border-border text-primary mb-8 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <h3 className="font-display font-extrabold uppercase text-2xl tracking-wide mb-4">{title}</h3>
      <p className="text-foreground/70 leading-relaxed text-sm">{desc}</p>
      <div className="absolute top-6 right-6 text-muted-foreground font-display text-[10px] tracking-widest">
        0{["1", "2", "3"][["Audiovisuel", "Design", "Stratégie"].indexOf(title)]}
      </div>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, align = "left" }: { eyebrow: string; title: string; align?: "left" | "center" }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-4">{eyebrow}</p>
      <h2 className="font-display font-extrabold uppercase text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
        {title}
      </h2>
    </div>
  );
}
