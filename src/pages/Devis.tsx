import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const steps = ["Service", "Détails", "Contact"];

export default function Devis() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Record<string, string>>({});

  const update = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));
  const canNext = () => {
    if (step === 0) return data.service && data.budget;
    if (step === 1) return data.details && data.deadline;
    return data.name && data.email;
  };

  const submit = () => {
    toast.success("Devis envoyé. Nous revenons vers vous sous 24h.");
    setData({});
    setStep(0);
  };

  return (
    <>
      <PageHeader eyebrow="Devis" title="Construisons votre projet." subtitle="Trois étapes. Deux minutes. Une réponse personnalisée sous 24h." />
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-4 mb-12">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-4 flex-1 last:flex-none">
                <div className="flex items-center gap-3 flex-1">
                  <div className={cn(
                    "w-9 h-9 grid place-items-center font-display text-xs border transition-colors",
                    i < step ? "bg-primary border-primary text-primary-foreground" :
                    i === step ? "border-primary text-primary" :
                    "border-border text-muted-foreground"
                  )}>
                    {i < step ? <Check size={14} /> : i + 1}
                  </div>
                  <span className={cn(
                    "font-display text-[10px] tracking-[0.25em] uppercase hidden sm:inline",
                    i === step ? "text-foreground" : "text-muted-foreground"
                  )}>{s}</span>
                </div>
                {i < steps.length - 1 && <div className={cn("h-px flex-1", i < step ? "bg-primary" : "bg-border")} />}
              </div>
            ))}
          </div>

          <div className="bg-card border border-border p-8 md:p-12 min-h-[420px]">
            {step === 0 && (
              <div className="space-y-8 animate-fade-up">
                <div>
                  <Label>Type de service</Label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Audiovisuel", "Design", "Stratégie", "Pack complet"].map((o) => (
                      <Choice key={o} active={data.service === o} onClick={() => update("service", o)}>{o}</Choice>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Budget estimé</Label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["< 100 000 FCFA", "100 000 - 350 000 FCFA", "350 000 - 750 000 FCFA", "> 750 000 FCFA"].map((o) => (
                      <Choice key={o} active={data.budget === o} onClick={() => update("budget", o)}>{o}</Choice>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-8 animate-fade-up">
                <div>
                  <Label>Détails du projet</Label>
                  <textarea rows={6} value={data.details ?? ""} onChange={(e) => update("details", e.target.value)}
                    placeholder="Cible, message, univers visuel, livrables attendus…"
                    className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                </div>
                <div>
                  <Label>Échéance souhaitée</Label>
                  <input type="date" value={data.deadline ?? ""} onChange={(e) => update("deadline", e.target.value)}
                    className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fade-up">
                <div>
                  <Label>Nom complet</Label>
                  <input type="text" value={data.name ?? ""} onChange={(e) => update("name", e.target.value)}
                    className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label>Email</Label>
                    <input type="email" value={data.email ?? ""} onChange={(e) => update("email", e.target.value)}
                      className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <div>
                    <Label>Téléphone</Label>
                    <input type="tel" value={data.phone ?? ""} onChange={(e) => update("phone", e.target.value)}
                      className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                </div>
                <div>
                  <Label>Société</Label>
                  <input type="text" value={data.company ?? ""} onChange={(e) => update("company", e.target.value)}
                    className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}
              className="inline-flex items-center gap-2 px-5 py-3 border border-border font-display text-xs tracking-[0.25em] uppercase text-foreground hover:border-foreground transition-colors disabled:opacity-30 disabled:pointer-events-none">
              <ArrowLeft size={14} /> Retour
            </button>
            {step < steps.length - 1 ? (
              <button onClick={() => setStep((s) => s + 1)} disabled={!canNext()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display text-xs tracking-[0.25em] uppercase blue-glow-hover disabled:opacity-40 disabled:pointer-events-none">
                Suivant <ArrowRight size={14} />
              </button>
            ) : (
              <button onClick={submit} disabled={!canNext()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display text-xs tracking-[0.25em] uppercase blue-glow-hover disabled:opacity-40 disabled:pointer-events-none">
                Envoyer le devis <Check size={14} />
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="block font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">{children}</p>;
}

function Choice({ children, active, onClick }: any) {
  return (
    <button type="button" onClick={onClick}
      className={cn(
        "px-5 py-4 border text-left font-display text-xs tracking-[0.15em] uppercase transition-all",
        active ? "border-primary bg-primary/5 text-foreground blue-glow" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
      )}>
      {children}
    </button>
  );
}
