"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ScheduleButton({ buttonText = "Agendar consulta", formPortalId, formId, className = "" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: formPortalId || "43984996", // Default portal ID
            formId: formId || "d1ae94a9-fc3d-4747-9fbd-01519b8f7d7b", // Default form ID
            target: "#hubspot-form",
          });
        }
      };
      document.body.appendChild(script);
    }
  }, [isModalOpen, formPortalId, formId]);

  return (
    <>
      {/* Botão para abrir o modal */}
      <button
        className={`btn btn-mod btn-large btn-round btn-hover-anim align-middle ${className}`}
        onClick={() => setIsModalOpen(true)}
      >
        <span>{buttonText}</span>
      </button>

      {/* Modal */}
      {isModalOpen &&
        createPortal(
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
            onClick={() => setIsModalOpen(false)}
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
                onClick={() => setIsModalOpen(false)}
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
          </div>,
          document.body // Renderiza diretamente no body
        )}
    </>
  );
}