"use client";
import { useState } from "react";
import { Chevron } from "./Icons";

// Mostra os primeiros parágrafos como resumo e um botão para ler o restante.
// O texto completo já vem no HTML (o Google lê tudo); só a parte de baixo fica recolhida.
export default function ReadMore({ html, keep = 1, more = "Ler a história completa", less = "Mostrar menos", className = "prose", style }) {
  const [open, setOpen] = useState(false);
  let h = /<p[\s>]/i.test(html) ? html : `<p>${html}</p>`;
  h = h.replace(/(\s*<br\s*\/?>\s*){2,}/gi, "</p><p>");
  const parts = h.split(/(?<=<\/p>)/i).map((p) => p.trim()).filter((p) => p && p.replace(/<[^>]+>|&nbsp;|\s/g, ""));
  const head = parts.slice(0, keep).join("");
  const rest = parts.slice(keep).join("");
  return (
    <div className="readmore">
      <div className={className} style={style} dangerouslySetInnerHTML={{ __html: head }} />
      {rest && (
        <>
          <div className={`${className} readmore-rest`} style={style} hidden={!open} dangerouslySetInnerHTML={{ __html: rest }} />
          <button type="button" className="btn clear readmore-btn" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? less : more} <Chevron width={15} height={15} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .3s" }} />
          </button>
        </>
      )}
    </div>
  );
}
