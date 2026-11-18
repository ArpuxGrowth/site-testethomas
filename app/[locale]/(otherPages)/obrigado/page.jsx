import { pageMetadata } from "@/lib/seo";
import Obrigado from "@/components/tb/Obrigado";

// Página de obrigado do formulário "Agendar consulta" (fora do Google: noindex).
export async function generateMetadata({ params: { locale } }) {
  const en = locale === "en";
  return pageMetadata({
    locale,
    path: "/obrigado",
    title: en ? "Request received | Dr. Thomas Benson" : "Pedido recebido | Dr. Thomas Benson",
    description: en ? "Dr. Thomas Benson's team will contact you on WhatsApp." : "A equipe do Dr. Thomas Benson vai falar com você pelo WhatsApp.",
    noindex: true,
  });
}

export default function ObrigadoPage({ params: { locale } }) {
  return <Obrigado locale={locale} />;
}
