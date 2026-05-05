import { Camera, Palette, Compass, Film, Mic, Megaphone, PenTool, Tv, Zap } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CallToAction } from "@/components/sections/CallToAction";

const groups = [
  {
    icon: Camera,
    name: "Audiovisuel",
    desc: "Du brief au master final. Captation, réalisation, montage. Une signature cinéma sur chaque image.",
    items: [
      { icon: Film, t: "Films corporate & brand films", d: "Récits de marque, portraits dirigeants, films institutionnels." },
      { icon: Tv, t: "Couverture événementielle", d: "Aftermovies, captations live, multi-caméra haute définition." },
      { icon: Mic, t: "Podcasts vidéo", d: "Studio dédié, prise de son broadcast, montage rythmé." },
    ],
  },
  {
    icon: Palette,
    name: "Design",
    desc: "Identité, motion, print. Une cohérence visuelle qui prolonge votre récit au-delà de l'écran.",
    items: [
      { icon: PenTool, t: "Identité de marque", d: "Logos, chartes, systèmes graphiques pensés pour durer." },
      { icon: Zap, t: "Motion design", d: "Génériques, habillages, animations 2D et explainers." },
      { icon: Megaphone, t: "Print & édition", d: "Affiches, brochures, pack design haut de gamme." },
    ],
  },
  {
    icon: Compass,
    name: "Stratégie",
    desc: "Conseil de marque, contenu, social media. Une direction claire pour transformer chaque prise en résultat.",
    items: [
      { icon: Compass, t: "Stratégie de contenu", d: "Audit, ligne éditoriale, calendrier multi-plateformes." },
      { icon: Megaphone, t: "Réseaux sociaux", d: "Reels, formats verticaux, animation de communauté." },
      { icon: Zap, t: "Brand consulting", d: "Positionnement, narrative, accompagnement stratégique." },
    ],
  },
];

const pricing = [
  {
    title: "Audiovisuel",
    items: [
      ["Pack Reels/TikTok", "50 000 - 75 000 FCFA l'unité"],
      ["Film corporate / interview", "250 000 - 500 000 FCFA"],
      ["Couverture événementielle", "À partir de 150 000 FCFA"],
    ],
  },
  {
    title: "Design & Branding",
    items: [
      ["Logo + charte simplifiée", "100 000 - 200 000 FCFA"],
      ["Pack visuels réseaux sociaux", "75 000 - 150 000 FCFA"],
    ],
  },
  {
    title: "Stratégie & Community Management",
    items: [
      ["Gestion mensuelle SMR", "150 000 - 350 000 FCFA / mois"],
      ["Consulting contenu", "100 000 FCFA la séance"],
    ],
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Trois disciplines. Une seule exigence."
        subtitle="Audiovisuel, design, stratégie. Trois métiers réunis sous un même toit pour produire des récits cohérents, exigeants et mémorables."
      />
      <section className="py-24 md:py-32">
        <div className="container space-y-32">
          {groups.map((g, i) => (
            <div key={g.name} className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                <div className="w-14 h-14 grid place-items-center border border-primary text-primary mb-6">
                  <g.icon size={22} strokeWidth={1.5} />
                </div>
                <p className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">0{i + 1}</p>
                <h2 className="font-display font-extrabold uppercase text-3xl md:text-4xl mb-4">{g.name}</h2>
                <p className="text-foreground/70 leading-relaxed">{g.desc}</p>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
                {g.items.map((it) => (
                  <div key={it.t} className="bg-background p-8 hover:bg-card transition-colors group">
                    <it.icon size={20} className="text-primary mb-4" strokeWidth={1.5} />
                    <h3 className="font-display font-bold uppercase text-base tracking-wider mb-2">{it.t}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{it.d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 md:py-28 border-y border-border bg-card/40">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-4">Tarifs estimatifs</p>
            <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
              Des bases claires pour cadrer votre projet.
            </h2>
            <p className="mt-5 text-foreground/70">
              Ces montants donnent une première idée pour le marché de Dakar. Le devis final dépend du nombre de livrables, des jours de tournage, de l'équipe mobilisée et des délais.
            </p>
          </div>
          <div className="grid gap-px bg-border border border-border lg:grid-cols-3">
            {pricing.map((group) => (
              <div key={group.title} className="bg-background p-8">
                <h3 className="font-display text-base uppercase tracking-wider mb-6">{group.title}</h3>
                <ul className="space-y-5">
                  {group.items.map(([name, price]) => (
                    <li key={name} className="border-b border-border/70 pb-5 last:border-0 last:pb-0">
                      <p className="text-sm text-foreground/70">{name}</p>
                      <p className="mt-1 font-display text-sm uppercase tracking-wider text-primary">{price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
