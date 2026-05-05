import { MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/221771941520?text=Bonjour%20One%20Life%20Production%2C%20je%20souhaite%20parler%20de%20mon%20projet.";

export function WhatsAppFloating() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter One Life Production sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center bg-[#25D366] text-white shadow-elevate transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background"
    >
      <MessageCircle size={24} strokeWidth={2} />
    </a>
  );
}
