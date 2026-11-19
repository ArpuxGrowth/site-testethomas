import posthog from "posthog-js";
import { conversaoGoogleAds } from "./googleAds";

// Experimento (11/2026): os botões "Agendar consulta" e o botão flutuante do WhatsApp levam direto
// para o WhatsApp da clínica, sem abrir o formulário do HubSpot. Para voltar ao formulário, troque para false.
export const AGENDAR_PELO_WHATSAPP = true;

// Teste (18/11/2026): os botões "Agendar consulta" abrem o formulário do site (components/tb/LeadForm.jsx), que manda o lead
// ao CRM do portal Arpux e leva à página /obrigado. Desde 19/11/2026 o botão flutuante do WhatsApp também abre o formulário.
// Para voltar ao WhatsApp direto nos botões, troque para false.
export const AGENDAR_PELO_FORMULARIO = true;

// Abre o formulário do site (ou o WhatsApp, se o teste estiver desligado)
export function agendar(location) {
  if (AGENDAR_PELO_FORMULARIO) window.dispatchEvent(new CustomEvent("tb:agendar", { detail: { location } }));
  else if (AGENDAR_PELO_WHATSAPP) abrirWhatsapp(location);
  else window.dispatchEvent(new Event("tb:form"));
}

// WhatsApp da clínica do Dr. Thomas (o mesmo do rodapé)
export const WHATSAPP_CLINICA = "5511972415960";

// Evento do PostHog disparado quando alguém sai do site para o WhatsApp
export const WHATSAPP_CLICKED_EVENT = "whatsapp_clicked";

const MENSAGENS = {
  pt: "Olá! Vim pelo site e gostaria de agendar uma consulta com o Dr. Thomas.",
  en: "Hello! I found you through the website and would like to schedule a consultation with Dr. Thomas.",
};

// Campanha de entrada da visita (utm_campaign), para a clínica e a atribuição saberem de onde veio a conversa
function campanhaDaVisita() {
  try {
    const daUrl = new URLSearchParams(window.location.search).get("utm_campaign");
    if (daUrl) {
      sessionStorage.setItem("tb_utm_campaign", daUrl);
      return daUrl;
    }
    return sessionStorage.getItem("tb_utm_campaign");
  } catch {
    return null;
  }
}

export function whatsappUrl(procedimento) {
  const idioma = (document.documentElement.lang || window.location.pathname.split("/")[1] || "pt").slice(0, 2);
  let texto = MENSAGENS[idioma] || MENSAGENS.pt;
  if (procedimento) texto += idioma === "en" ? ` I'm interested in: ${procedimento}.` : ` Tenho interesse em: ${procedimento}.`;
  const campanha = campanhaDaVisita();
  if (campanha) texto += ` (ref: ${campanha})`;
  return `https://wa.me/${WHATSAPP_CLINICA}?text=${encodeURIComponent(texto)}`;
}

/**
 * Registra a saída para o WhatsApp (PostHog e dataLayer do GTM) e abre a conversa com a clínica.
 * Abre na mesma aba: no navegador do Instagram e do Facebook, nova aba costuma ser bloqueada.
 *
 * @param {string} location - Onde fica o botão (ex.: "navbar", "hero", "whatsapp_button")
 */
export function abrirWhatsapp(location, procedimento) {
  const url = whatsappUrl(procedimento);
  try {
    posthog.capture(WHATSAPP_CLICKED_EVENT, { location }, { send_instantly: true });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "whatsappClick", location });
    conversaoGoogleAds("whatsapp");
  } catch {
    // o rastreamento nunca pode impedir a pessoa de chegar ao WhatsApp
  }
  window.location.href = url;
}
