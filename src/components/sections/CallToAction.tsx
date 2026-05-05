import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import dakar from "@/assets/dakar-skyline.jpg";

export function CallToAction() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${dakar})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="container relative text-center max-w-3xl">
        <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-6">Prêt à passer au niveau supérieur ?</p>
        <h2 className="font-display font-extrabold uppercase text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
          Votre histoire mérite une seule prise. La bonne.
        </h2>
        <p className="mt-6 text-foreground/70 max-w-xl mx-auto">
          Contactez-nous pour un devis gratuit sous 24h.
        </p>
        <Link to="/devis" className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display text-xs tracking-[0.25em] uppercase blue-glow-hover">
          Demander un devis <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
