import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, visible } = useReveal<HTMLSpanElement>(0.3);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let raf = 0; const start = performance.now(); const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  const items = [
    { v: 180, s: "+", l: "Projets livrés" },
    { v: 60, s: "+", l: "Clients de confiance" },
    { v: 8, s: "", l: "Années d'expertise" },
    { v: 12, s: "", l: "Talents au studio" },
  ];
  return (
    <section className="py-24 border-y border-border bg-black">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-12">
        {items.map((it) => (
          <div key={it.l} className="text-center md:text-left">
            <p className="font-display font-black text-5xl md:text-6xl text-foreground">
              <Counter to={it.v} suffix={it.s} />
            </p>
            <p className="mt-3 font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{it.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
