"use client";
import { useEffect, useState, Suspense } from "react";
import { NextIntlClientProvider } from "next-intl";
import { PHProvider } from "../providers";
import PostHogPageView from "../PostHogPageView";
import { hubspotFormPostHogCallbacks, trackScheduleConsultationClick } from "@/utlis/analytics";
import { AGENDAR_PELO_WHATSAPP, abrirWhatsapp } from "@/utlis/whatsapp";
import { conversaoGoogleAds } from "@/utlis/googleAds";
import Header from "@/components/tb/Header";
import Footer from "@/components/tb/Footer";
import { Whatsapp, Close } from "@/components/tb/Icons";
import LeadForm from "@/components/tb/LeadForm";

// Parte do layout que roda no navegador. O layout em si é server component para poder
// exportar metadados e entregar o HTML completo (H1, textos) já renderizado para o Google.
export default function ClientShell({ children, locale, messages }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Botão do WhatsApp: registra o clique no PostHog e abre o WhatsApp da clínica
  // (ou o formulário do HubSpot, se o experimento AGENDAR_PELO_WHATSAPP estiver desligado)
  const handleWhatsappClick = () => {
    if (!isFormVisible) trackScheduleConsultationClick("whatsapp_button");
    if (AGENDAR_PELO_WHATSAPP) abrirWhatsapp("whatsapp_button");
    else setIsFormVisible((v) => !v);
  };

  // A tag do TikTok no GTM escreve o ID do pixel como texto solto no fim do <body>.
  // Enquanto a tag não é corrigida no GTM, o texto vira um elemento oculto (o ID continua no código).
  useEffect(() => {
    const esconder = () => {
      document.body.childNodes.forEach((n) => {
        if (n.nodeType === 3 && /^\s*[A-Z0-9]{16,}\s*$/.test(n.textContent)) {
          const span = document.createElement("span");
          span.hidden = true;
          span.dataset.tiktokPixelId = n.textContent.trim();
          n.replaceWith(span);
        }
      });
    };
    esconder();
    const obs = new MutationObserver(esconder);
    obs.observe(document.body, { childList: true });
    return () => obs.disconnect();
  }, []);

  // Os botões "Agendar consulta" pedem o formulário por evento quando o experimento está desligado
  useEffect(() => {
    const open = () => setIsFormVisible(true);
    window.addEventListener("tb:form", open);
    return () => window.removeEventListener("tb:form", open);
  }, []);

  useEffect(() => {
    if (!isFormVisible) return;
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      window.hbspt.forms.create({
        portalId: "43984996",
        formId: "d1ae94a9-fc3d-4747-9fbd-01519b8f7d7b",
        target: "#hubspot-form",
        ...hubspotFormPostHogCallbacks,
        onFormSubmit: () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "hubspotFormSubmit", formId: "d1ae94a9-fc3d-4747-9fbd-01519b8f7d7b" });
          conversaoGoogleAds("formulario");
        },
      });
    };
    document.body.appendChild(script);
  }, [isFormVisible]);

  return (
    <PHProvider>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5TTZF69D" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
      <NextIntlClientProvider messages={messages} locale={locale} timeZone="America/Sao_Paulo">
        <Header />
        <div id="conteudo">{children}</div>
        <Footer />
      </NextIntlClientProvider>

      <LeadForm locale={locale} />

      <button type="button" className="wa-fix" onClick={handleWhatsappClick} aria-label={locale === "en" ? "Talk on WhatsApp" : "Falar no WhatsApp"}>
        <Whatsapp />
      </button>

      {isFormVisible && (
        <div className="modal" onClick={() => setIsFormVisible(false)}>
          <div className="modal-in" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="round" style={{ position: "absolute", right: 10, top: 10, border: 0, background: "none", color: "#15233f" }} onClick={() => setIsFormVisible(false)} aria-label={locale === "en" ? "Close" : "Fechar"}>
              <Close />
            </button>
            <div id="hubspot-form"></div>
          </div>
        </div>
      )}
    </PHProvider>
  );
}
