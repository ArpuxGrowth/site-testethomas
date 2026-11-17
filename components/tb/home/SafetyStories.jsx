"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/routing";

// Primeira frase do texto, sem HTML, para o resumo de cada item
function resumo(textOrHtml = "", max = 170) {
  const t = textOrHtml.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const m = t.match(/^(.{40,}?[.!?])(\s|$)/);
  let s = m ? m[1] : t;
  if (s.length > max) s = s.slice(0, s.lastIndexOf(" ", max)).replace(/[\s,;:]+$/, "") + "…";
  return s;
}

// Lista que avança sozinha com a foto ao lado (seção "Alto padrão em segurança" do protótipo).
// Cada item mostra um resumo; "Ler mais" abre o texto completo (que já está no HTML para o Google).
export default function SafetyStories({ items, eyebrow, title, lead, left = false, id, moreHref, moreLabel, locale = "pt" }) {
  const [on, setOn] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(-1);
  const bar = useRef(null);
  const en = locale === "en";
  const stop = paused || open !== -1;
  useEffect(() => {
    if (stop) return;
    const t = setTimeout(() => setOn((v) => (v + 1) % items.length), 6500);
    if (bar.current) {
      bar.current.style.transition = "none"; bar.current.style.width = "0";
      requestAnimationFrame(() => requestAnimationFrame(() => { if (bar.current) { bar.current.style.transition = "width 6.5s linear"; bar.current.style.width = "100%"; } }));
    }
    return () => clearTimeout(t);
  }, [on, stop, items.length]);
  return (
    <section className={`sec split sst${left ? " left" : ""}`} id={id} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="glow"></div>
      <div className="photo">
        {items.map((it, i) => (
          <img key={i} src={it.img} alt={it.alt || ""} loading="lazy" style={{ opacity: i === on ? 1 : 0, objectPosition: it.pos || "50% 50%" }} />
        ))}
      </div>
      <div className="wrap">
        <div className="txt">
          <h2 className="eyebrow">{eyebrow}</h2>
          <h3 className="h2" style={{ marginTop: 14 }}>{title}</h3>
          {lead && <p className="body" style={{ marginTop: 18 }}>{lead}</p>}
          <div className="sst-list">
            {items.map((it, i) => {
              const full = it.html || it.text || "";
              const isOpen = open === i;
              return (
                <div key={i} className={`sst-item${i === on ? " on" : ""}`} onClick={() => { if (i !== on) { setOn(i); setOpen(-1); } }}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <small>{it.kicker}</small>
                  <button type="button" className="sst-t" aria-expanded={i === on} onClick={(e) => { e.stopPropagation(); setOn(i); setOpen(-1); }}><b>{it.title}</b></button>
                  <span className="p">
                    <span className="sst-sum" hidden={isOpen}>{it.summary || resumo(full)}</span>
                    {it.html
                      ? <span className="sst-full" hidden={!isOpen} dangerouslySetInnerHTML={{ __html: it.html }} />
                      : <span className="sst-full" hidden={!isOpen}>{it.text}</span>}
                    <button type="button" className="more-t sst-more" onClick={(e) => { e.stopPropagation(); setOpen(isOpen ? -1 : i); }}>
                      {isOpen ? (en ? "Read less" : "Ler menos") : (en ? "Read more" : "Ler mais")}
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="sst-bar"><i ref={bar}></i></div>
          {moreHref && (
            <Link href={moreHref} className="btn clear" style={{ marginTop: 24 }}>{moreLabel}</Link>
          )}
        </div>
      </div>
    </section>
  );
}
