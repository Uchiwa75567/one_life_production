import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Réalisations" },
  { to: "/about", label: "À Propos" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-background/80 backdrop-blur-xl border-b border-border"
      )}
    >
      <nav className={cn("container flex items-center justify-between h-20", transparent && "text-white")}>
        <Link to="/" className="flex items-center gap-3 group">
          <Logo className={cn("w-9 h-9 transition-transform group-hover:scale-110", transparent ? "text-white" : "text-foreground")} />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-extrabold text-sm tracking-widest uppercase">One Life</span>
            <span className={cn("font-body text-[10px] tracking-[0.3em] uppercase", transparent ? "text-white/70" : "text-muted-foreground")}>Production</span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "font-display text-xs tracking-[0.2em] uppercase transition-colors relative py-2",
                    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-primary after:transition-all after:duration-500",
                    isActive
                      ? cn("after:w-full", transparent ? "text-white" : "text-foreground")
                      : cn("after:w-0 hover:after:w-full", transparent ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground")
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle transparent={transparent} />
          <Link
            to="/devis"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground font-display text-xs tracking-[0.2em] uppercase blue-glow-hover"
          >
            Devis
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn("lg:hidden p-2", transparent ? "text-white" : "text-foreground")}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <ul className="container py-6 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "block font-display text-sm tracking-[0.2em] uppercase py-3 border-b border-border/50",
                        isActive ? "text-primary" : "text-foreground"
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <div className="py-3">
                  <ThemeToggle />
                </div>
              </li>
              <li>
                <Link
                  to="/devis"
                  className="mt-4 inline-flex items-center justify-center w-full px-5 py-3 bg-primary text-primary-foreground font-display text-xs tracking-[0.2em] uppercase"
                >
                  Demander un devis
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
