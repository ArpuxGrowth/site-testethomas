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

// Evento do PostHog disparado quando o formulário do HubSpot é enviado
export const LEAD_FORM_SUBMITTED_EVENT = "lead_form_submitted";

/**
 * Callbacks para o hbspt.forms.create: grava o código da visita do PostHog no campo escondido
 * "ph_session_id" do formulário (liga o contato do HubSpot à visita) e registra o envio no PostHog.
 * O campo escondido precisa existir no formulário do HubSpot; sem ele, nada é enviado.
 */
export const hubspotFormPostHogCallbacks = {
  onFormReady: ($form) => {
    const form = $form?.jquery ? $form[0] : $form;
    const campo = form?.querySelector?.('input[name="ph_session_id"]');
    const sessao = posthog.get_session_id?.();
    if (campo && sessao) {
      campo.value = sessao;
      campo.dispatchEvent(new Event("input", { bubbles: true }));
      campo.dispatchEvent(new Event("change", { bubbles: true }));
    }
  },
  onFormSubmitted: () => {
    posthog.capture(LEAD_FORM_SUBMITTED_EVENT);
  },
};
