import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PageHeader } from "@/components/PageHeader";
import { cn } from "@/lib/utils";
import corp from "@/assets/work-corporate.jpg";
import event from "@/assets/work-event.jpg";
import pod from "@/assets/work-podcast.jpg";
import social from "@/assets/work-social.jpg";
import brand from "@/assets/work-brand.jpg";
import doc from "@/assets/work-doc.jpg";

type Cat = "Tous" | "Corporate" | "Événement" | "Podcast" | "Réseaux sociaux";

const projects = [
  { id: 1, img: corp, title: "Sonatel — Brand Film", category: "Corporate", client: "Sonatel", year: 2025,
    desc: "Film institutionnel mettant en lumière l'écosystème digital de Sonatel. Tournage 4 jours, équipe de 12 personnes." },
  { id: 2, img: event, title: "Festival Sahel Sounds", category: "Événement", client: "Sahel Sounds", year: 2024,
    desc: "Aftermovie multi-caméra du festival musical de Dakar. Captation live, 3 scènes, montage rythmé." },
  { id: 3, img: pod, title: "Studio Wax — Podcast", category: "Podcast", client: "Wax Media", year: 2025,
    desc: "Production complète du podcast vidéo hebdomadaire. Studio dédié, 24 épisodes livrés." },
  { id: 4, img: social, title: "Reels Maison Linguère", category: "Réseaux sociaux", client: "Maison Linguère", year: 2025,
    desc: "Campagne de 30 reels mode pour le lancement de la collection automne. Direction artistique et production." },
  { id: 5, img: brand, title: "Identité Bantu Bank", category: "Corporate", client: "Bantu Bank", year: 2024,
    desc: "Refonte complète de l'identité visuelle de la banque digitale. Logo, charte, pack motion." },
  { id: 6, img: doc, title: "Dakar — Court documentaire", category: "Événement", client: "Institut français", year: 2024,
    desc: "Documentaire urbain sur la scène créative dakaroise. 18 minutes, sélection officielle." },
] as const;

const cats: Cat[] = ["Tous", "Corporate", "Événement", "Podcast", "Réseaux sociaux"];

export default function Portfolio() {
  const [filter, setFilter] = useState<Cat>("Tous");
  const [open, setOpen] = useState<typeof projects[number] | null>(null);
  const filtered = useMemo(() => filter === "Tous" ? projects : projects.filter(p => p.category === filter), [filter]);

  return (
    <>
      <PageHeader eyebrow="Réalisations" title="Chaque projet, une vie." subtitle="Un échantillon de nos collaborations récentes. Chaque film a sa propre lumière, son propre rythme, sa propre vérité." />
      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-12">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "px-5 py-2.5 font-display text-[11px] tracking-[0.2em] uppercase border transition-colors",
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {filtered.map((p) => (
              <button
                key={p.id}
                onClick={() => setOpen(p)}
                className="group relative block w-full mb-6 break-inside-avoid overflow-hidden bg-card text-left"
              >
                <img src={p.img} alt={p.title} loading="lazy"
                  className="w-full h-auto grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="self-start px-2.5 py-1 bg-primary text-primary-foreground font-display text-[9px] tracking-[0.2em] uppercase mb-3">
                    {p.category}
                  </span>
                  <h3 className="font-display font-extrabold uppercase text-lg tracking-wide text-white">{p.title}</h3>
                  <p className="text-xs text-white/60 mt-1">{p.client} · {p.year}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl bg-card border-border p-0 overflow-hidden">
          {open && (
            <>
              <div className="relative aspect-video bg-black">
                <img src={open.img} alt={open.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 grid place-items-center bg-black/40">
                  <div className="w-16 h-16 rounded-full border-2 border-white/80 grid place-items-center">
                    <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[14px] border-l-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <span className="inline-block px-2.5 py-1 bg-primary text-primary-foreground font-display text-[10px] tracking-[0.2em] uppercase mb-4">
                  {open.category}
                </span>
                <DialogHeader>
                  <DialogTitle className="font-display font-extrabold uppercase text-2xl tracking-wide">{open.title}</DialogTitle>
                </DialogHeader>
                <p className="text-sm text-muted-foreground mt-1">{open.client} · {open.year}</p>
                <p className="mt-6 text-foreground/80 leading-relaxed">{open.desc}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
