"use client";
import { useTranslations } from "next-intl";
import { trackScheduleConsultationClick } from "@/utlis/analytics";
import { AGENDAR_PELO_WHATSAPP, abrirWhatsapp } from "@/utlis/whatsapp";

// Botão "Agendar consulta": mesmo rastreamento do site antigo (PostHog + GTM) e mesmo destino
// (WhatsApp da clínica; se o experimento for desligado, abre o formulário do HubSpot do ClientShell).
export default function ScheduleButton({ label, className = "btn gold", trackingLocation = "content", short = false, children }) {
  const t = useTranslations("ScheduleButton");
  const text = label || t("textbtn");
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        trackScheduleConsultationClick(trackingLocation);
        if (AGENDAR_PELO_WHATSAPP) abrirWhatsapp(trackingLocation);
        else window.dispatchEvent(new Event("tb:form"));
      }}
    >
      {children || (short ? <><span className="lbl-long">{text.split(" ")[0]}</span> {text.split(" ").slice(1).join(" ")}</> : text)}
    </button>
  );
}
