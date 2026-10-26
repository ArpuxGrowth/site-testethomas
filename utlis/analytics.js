import posthog from "posthog-js";

// Evento do PostHog disparado pelos botões que abrem o formulário de agendamento do HubSpot
export const SCHEDULE_CONSULTATION_EVENT = "schedule_consultation_clicked";

/**
 * Registra no PostHog o clique em um botão de agendar consulta.
 *
 * @param {string} location - Onde fica o botão (ex.: "navbar", "hero", "whatsapp_button")
 */
export const trackScheduleConsultationClick = (location) => {
  posthog.capture(SCHEDULE_CONSULTATION_EVENT, { location });
};
