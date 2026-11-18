"use client";
import { useEffect, useState } from "react";
import { abrirWhatsapp } from "@/utlis/whatsapp";

// Conteúdo da página /obrigado: confirma o pedido e oferece adiantar a conversa no WhatsApp.
export default function Obrigado({ locale = "pt" }) {
  const en = locale === "en";
  const [dados, setDados] = useState({ n: "" });
  useEffect(() => {
    const q = new URLSearchParams(location.search);
    setDados({ n: (q.get("n") || "").slice(0, 30) });
  }, []);
  return (
    <section className="ob">
      <div className="ob-box">
        <span className="lf-check" aria-hidden="true"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.2 4.2L19 7" /></svg></span>
        <p className="nf-badge"><i>T</i>Dr. Thomas Benson</p>
        <h1 className="lf-t">{en ? "Thank you" : "Recebemos"}{dados.n ? <>, <span className="it">{dados.n}</span></> : ""}.</h1>
        <p className="lf-sub">
          {en
            ? "Dr. Thomas's team will message you on WhatsApp during business hours to find the best time for your consultation. If you prefer, start the conversation now."
            : "A equipe do Dr. Thomas vai chamar você no WhatsApp em horário comercial para combinar o melhor horário da sua consulta. Se preferir, já pode começar a conversa agora."}
        </p>
        <button className="btn wa lf-enviar" type="button" onClick={() => abrirWhatsapp("obrigado")}>
          {en ? "MESSAGE ON WHATSAPP" : "CHAMAR NO WHATSAPP"}
        </button>
        <a className="lf-voltar" href={`/${locale}`}>{en ? "Back to the website" : "Voltar ao site"}</a>
      </div>
    </section>
  );
}
