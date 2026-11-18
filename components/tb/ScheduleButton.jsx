"use client";
import { useTranslations } from "next-intl";
import { trackScheduleConsultationClick } from "@/utlis/analytics";
import { agendar } from "@/utlis/whatsapp";

// Botão "Agendar consulta": mesmo rastreamento do site antigo (PostHog + GTM) e mesmo destino
// (formulário do site, components/tb/LeadForm.jsx; com o teste desligado, WhatsApp da clínica).
export default function ScheduleButton({ label, className = "btn gold", trackingLocation = "content", short = false, children }) {
  const t = useTranslations("ScheduleButton");
  const text = label || t("textbtn");
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        trackScheduleConsultationClick(trackingLocation);
        agendar(trackingLocation);
      }}
    >
      {children || (short ? <><span className="lbl-long">{text.split(" ")[0]}</span> {text.split(" ").slice(1).join(" ")}</> : text)}
    </button>
  );
}
