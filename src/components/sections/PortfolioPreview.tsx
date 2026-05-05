import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import corp from "@/assets/work-corporate.jpg";
import event from "@/assets/work-event.jpg";
import pod from "@/assets/work-podcast.jpg";
import social from "@/assets/work-social.jpg";

const projects = [
  { img: corp, title: "Sonatel — Brand Film", category: "Corporate", client: "Sonatel" },
  { img: event, title: "Festival Sahel Sounds", category: "Événement", client: "Sahel Sounds" },
  { img: pod, title: "Studio Wax — Podcast", category: "Podcast", client: "Wax Media" },
  { img: social, title: "Reels Mode Dakar", category: "Réseaux sociaux", client: "Maison Linguère" },
];

export function PortfolioPreview() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-28 md:py-40">
      <div className="container">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-4">Réalisations</p>
            <h2 className="font-display font-extrabold uppercase text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Une sélection.<br />Une signature.
            </h2>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 font-display text-xs tracking-[0.25em] uppercase text-foreground hover:text-primary transition-colors">
            Tout voir <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Link
              key={p.title}
              to="/portfolio"
              style={{ transitionDelay: `${i * 80}ms` }}
              className={cn(
                "group relative aspect-[4/3] overflow-hidden bg-card transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <img src={p.img} alt={p.title} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="self-start px-3 py-1 bg-primary text-primary-foreground font-display text-[10px] tracking-[0.2em] uppercase mb-4">
                  {p.category}
                </span>
                <h3 className="font-display font-extrabold uppercase text-xl md:text-2xl tracking-wide text-white">{p.title}</h3>
                <p className="text-sm text-white/60 mt-1">{p.client}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
