import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { toast } from "sonner";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message envoyé. Nous revenons vers vous sous 24h.");
    }, 900);
  };

  return (
    <>
      <PageHeader eyebrow="Contact" title="Prêt à passer au niveau supérieur ?" subtitle="Contactez-nous pour un devis gratuit sous 24h." />
      <section className="py-20 md:py-28">
        <div className="container grid lg:grid-cols-5 gap-16">
          <form onSubmit={onSubmit} className="lg:col-span-3 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Nom" name="name" required />
              <Field label="Société" name="company" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Email" name="email" type="email" required />
              <Field label="Téléphone" name="phone" type="tel" />
            </div>
            <SelectField label="Type de projet" name="type" options={["Film corporate", "Couverture événementielle", "Podcast vidéo", "Réseaux sociaux", "Identité de marque", "Autre"]} required />
            <div>
              <label className="block font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Message</label>
              <textarea name="message" rows={6} required
                className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors resize-none"
                placeholder="Décrivez votre vision, votre échéance, votre univers…"
              />
            </div>
            <button type="submit" disabled={submitting}
              className="w-full py-5 bg-primary text-primary-foreground font-display text-xs tracking-[0.3em] uppercase blue-glow-hover disabled:opacity-50">
              {submitting ? "Envoi…" : "Envoyer votre projet"}
            </button>
          </form>

          <aside className="lg:col-span-2 space-y-8">
            <div className="bg-card border border-border p-8">
              <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-6">Studio</p>
              <ul className="space-y-5">
                <InfoRow Icon={Phone} label="Téléphone" value="+221 77 194 15 20" />
                <InfoRow Icon={Mail} label="Email" value="onelifeprodonelife@gmail.com" />
                <InfoRow Icon={MapPin} label="Localisation" value="Dakar, Sénégal" />
              </ul>
            </div>
            <div className="bg-card border border-border p-8">
              <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-3">Disponibilité</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Lundi — Vendredi · 9h — 19h (GMT)<br />
                Tournages weekend sur réservation.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">{label}{required && " *"}</label>
      <input type={type} name={name} required={required}
        className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="block font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">{label}{required && " *"}</label>
      <select name={name} required={required} defaultValue=""
        className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors">
        <option value="" disabled>Choisir…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function InfoRow({ Icon, label, value }: any) {
  return (
    <li className="flex items-start gap-4">
      <div className="w-10 h-10 grid place-items-center border border-border text-primary shrink-0">
        <Icon size={16} strokeWidth={1.5} />
      </div>
      <div>
        <p className="font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">{label}</p>
        <p className="text-foreground">{value}</p>
      </div>
    </li>
  );
}
