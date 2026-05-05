import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[100svh] grid place-items-center bg-background">
      <div className="text-center container">
        <p className="font-display text-xs tracking-[0.5em] uppercase text-primary mb-6">404</p>
        <h1 className="font-display font-black uppercase text-6xl md:text-8xl leading-none">Hors champ.</h1>
        <p className="mt-6 text-foreground/70 max-w-md mx-auto">Cette page n'existe pas ou a été coupée au montage.</p>
        <Link to="/" className="mt-10 inline-flex px-8 py-4 bg-primary text-primary-foreground font-display text-xs tracking-[0.25em] uppercase blue-glow-hover">
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}
