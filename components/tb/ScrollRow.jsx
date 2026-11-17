"use client";
import { useEffect, useRef, useState } from "react";
import { Arrow, ArrowLeft } from "./Icons";

// Carrossel com rolagem lateral (arrastar no celular, setas no computador). Os itens vêm prontos do servidor.
export default function ScrollRow({ children, label, className = "" }) {
  const ref = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const update = () => {
    const el = ref.current; if (!el) return;
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
  };
  useEffect(() => { update(); const el = ref.current; el?.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update); return () => { el?.removeEventListener("scroll", update); window.removeEventListener("resize", update); }; }, []);
  const go = (d) => { const el = ref.current; if (!el) return; const card = el.firstElementChild; const w = card ? card.getBoundingClientRect().width + 18 : el.clientWidth * 0.8; el.scrollBy({ left: d * w, behavior: "smooth" }); };
  return (
    <div className={`srow ${className}`}>
      <div className="srow-track" ref={ref} role="region" aria-label={label} tabIndex={0}>{children}</div>
      <div className="srow-nav">
        <button type="button" className="round clear" aria-label="Anterior" onClick={() => go(-1)} disabled={edge.start}><ArrowLeft width={16} height={16} /></button>
        <button type="button" className="round clear" aria-label="Próximo" onClick={() => go(1)} disabled={edge.end}><Arrow width={16} height={16} /></button>
      </div>
    </div>
  );
}
