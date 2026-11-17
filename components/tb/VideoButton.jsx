"use client";
import { useState } from "react";
import { Play, Close } from "./Icons";

// Botão que abre um vídeo do YouTube num modal (mesmo evento de GTM do site antigo)
export default function VideoButton({ videoId, label, className = "btn clear" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          setOpen(true);
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "videoModalOpen", videoId });
        }}
      >
        <Play width={14} height={14} /> {label}
      </button>
      {open && (
        <div className="modal" style={{ alignItems: "center" }} onClick={() => setOpen(false)}>
          <div style={{ position: "relative", width: "min(1000px,100%)", aspectRatio: "16/9", borderRadius: 22, overflow: "hidden", background: "#000" }} onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={label}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
          <button type="button" className="round clear" style={{ position: "fixed", top: 20, right: 20 }} onClick={() => setOpen(false)} aria-label="Fechar"><Close /></button>
        </div>
      )}
    </>
  );
}
