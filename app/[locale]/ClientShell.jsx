"use client";
import { useEffect, useState, Suspense } from "react";
import { PHProvider } from "../providers";
import PostHogPageView from "../PostHogPageView";
import { usePathname } from "next/navigation";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";
import { trackScheduleConsultationClick } from "@/utlis/analytics";
import { NextIntlClientProvider } from "next-intl";

// Parte do layout que roda no navegador. O layout em si é server component para poder
// exportar metadados e entregar o HTML completo (H1, textos) já renderizado para o Google.
export default function ClientShell({ children, locale, messages }) {
  const timeZone = 'America/Sao_Paulo';

  const path = usePathname();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Botão do WhatsApp: registra o clique no PostHog quando abre o formulário
  const handleWhatsappClick = () => {
    if (!isFormVisible) trackScheduleConsultationClick("whatsapp_button");
    toggleForm();
  };

  useEffect(() => {
    init_wow();
    parallaxMouseMovement();
    var mainNav = document.querySelector(".main-nav");
    if (mainNav?.classList.contains("transparent")) {
      mainNav.classList.add("js-transparent");
    } else if (!mainNav?.classList?.contains("dark")) {
      mainNav?.classList.add("js-no-transparent-white");
    }

    window.addEventListener("scroll", headerChangeOnScroll);
    parallaxScroll();
    return () => {
      window.removeEventListener("scroll", headerChangeOnScroll);
    };
  }, [path]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported
      });
    }
  }, []);

  useEffect(() => {
    if (isFormVisible) {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => {
        window.hbspt.forms.create({
          portalId: "43984996", // Substitua pelo seu portalId
          formId: "d1ae94a9-fc3d-4747-9fbd-01519b8f7d7b", // Substitua pelo seu formId
          target: "#hubspot-form",

          // The callback
          onFormSubmit: () => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "hubspotFormSubmit",
              formId:  "d1ae94a9-fc3d-4747-9fbd-01519b8f7d7b",
            });
          },
        });
      };
      document.body.appendChild(script);
    }
  }, [isFormVisible]);

  return (
    <>
      {/* PostHog: inicializa o cliente e registra um $pageview a cada troca de rota */}
      <PHProvider>
        <Suspense fallback={null}>
          <PostHogPageView />
        </Suspense>

        {/* ———————————————— */}
        {/* 2) GTM noscript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe
               src="https://www.googletagmanager.com/ns.html?id=GTM-5TTZF69D"
               height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* ———————————————— */}
        <NextIntlClientProvider messages={messages} locale={locale} timeZone={timeZone}>
          {children}
        </NextIntlClientProvider>

        {/* Botão de WhatsApp */}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <button
            onClick={handleWhatsappClick}
            style={{
              backgroundColor: "#25D366",
              border: "none",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              cursor: "pointer",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img
              src="/assets/images/whatsapp-icon.png"
              alt="WhatsApp"
              style={{ width: "30px", height: "30px" }}
            />
          </button>
        </div>

        {/* Modal com o Formulário do HubSpot */}
        {isFormVisible && (
          <div
            className="modal-overlay"
            style={{
              position: "fixed",
              top: 25,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1100,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
            onClick={toggleForm}
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                maxWidth: "500px",
                width: "100%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleForm}
                style={{
                  float: "right",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                ✖
              </button>
              <div id="hubspot-form"></div>
            </div>
          </div>
        )}
      </PHProvider>
    </>
  );
}
