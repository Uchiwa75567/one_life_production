import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Logo className="w-10 h-10 text-white" />
            <div className="leading-none">
              <p className="font-display font-extrabold text-sm tracking-widest uppercase">One Life</p>
              <p className="font-body text-[10px] tracking-[0.3em] text-white/60 uppercase">Production</p>
            </div>
          </div>
          <p className="font-display text-xs tracking-[0.3em] uppercase text-white/60">
            One Shot · One Life
          </p>
        </div>

        <div>
          <p className="font-display text-xs tracking-[0.2em] uppercase text-white/60 mb-4">Navigation</p>
          <ul className="space-y-2">
            {[
              ["/services", "Services"],
              ["/portfolio", "Réalisations"],
              ["/about", "À Propos"],
              ["/contact", "Contact"],
              ["/devis", "Demander un devis"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-sm text-white/80 hover:text-primary transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-xs tracking-[0.2em] uppercase text-white/60 mb-4">Contact</p>
          <p className="text-sm text-white/80">+221 77 194 15 20</p>
          <p className="text-sm text-white/80">onelifeprodonelife@gmail.com</p>
          <p className="text-sm text-white/80">Dakar, Sénégal</p>
          <div className="flex gap-3 mt-5">
            {[
              [Instagram, "Instagram"],
              [Linkedin, "LinkedIn"],
              [Youtube, "YouTube"],
            ].map(([Icon, label]: any) => (
              <a key={label} href="#" aria-label={label}
                className="w-10 h-10 grid place-items-center border border-white/15 text-white hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container py-6 text-xs text-white/60 tracking-wider">
          © 2025 One Life Production — Dakar, Sénégal
        </p>
      </div>
    </footer>
  );
}
