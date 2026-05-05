import { PageHeader } from "@/components/PageHeader";
import { Stats } from "@/components/sections/Stats";
import { CallToAction } from "@/components/sections/CallToAction";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import dakar from "@/assets/dakar-skyline.jpg";

const team = [
  { img: t1, name: "Mamadou Diop", role: "Fondateur & Réalisateur" },
  { img: t2, name: "Aïssatou Ndiaye", role: "Directrice photo" },
  { img: t3, name: "Cheikh Sarr", role: "Directeur artistique" },
];

export default function About() {
  return (
    <>
      <PageHeader eyebrow="À Propos" title="Notre ADN de marque." subtitle="One Life Production est née à Dakar d'une conviction simple : chaque projet n'a qu'une vie. Une seule chance d'exister pleinement." />

      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${dakar})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-6">Manifeste</p>
            <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl leading-[1.05] tracking-tight">
              One Shot.<br />One Life.
            </h2>
          </div>
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>Au studio, nous croyons qu'une production ne se rejoue pas. La lumière du blue hour, le regard d'un dirigeant, l'énergie d'un public : tout cela arrive une fois.</p>
            <p>Notre rôle est d'être prêts. Setup pensé. Cadre composé. Précision One Life. Pour transformer cet instant unique en un récit qui dépasse l'écran.</p>
            <p>Basés à Dakar, nous accompagnons des marques d'Afrique de l'Ouest et au-delà — institutions, créateurs, entreprises — avec la même exigence cinématographique.</p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-y border-border bg-card">
        <div className="container">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-4">Le Studio</p>
          <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl leading-[1.05] tracking-tight mb-16">Les visages derrière la caméra.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m, i) => <TeamCard key={m.name} {...m} delay={i * 100} />)}
          </div>
        </div>
      </section>

      <Stats />
      <CallToAction />
    </>
  );
}

function TeamCard({ img, name, role, delay }: any) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("group transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-black">
        <img src={img} alt={name} loading="lazy"
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      <div className="pt-6">
        <h3 className="font-display font-extrabold uppercase text-xl tracking-wide">{name}</h3>
        <p className="text-sm text-primary tracking-wider mt-1">{role}</p>
      </div>
    </div>
  );
}
