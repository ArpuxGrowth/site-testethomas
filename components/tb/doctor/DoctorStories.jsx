"use client";
import { useEffect, useRef, useState } from "react";

// Mesma lista com foto ao lado de components/tb/home/SafetyStories.jsx, com um parágrafo de abertura (`lead`).
// Todos os textos ficam no HTML; só a aparência muda com o item ativo.
export default function DoctorStories({ items, eyebrow, title, lead, left = false, id }) {
  const [on, setOn] = useState(0);
  const [paused, setPaused] = useState(false);
  const bar = useRef(null);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setOn((v) => (v + 1) % items.length), 6500);
    if (bar.current) {
      bar.current.style.transition = "none"; bar.current.style.width = "0";
      requestAnimationFrame(() => requestAnimationFrame(() => { if (bar.current) { bar.current.style.transition = "width 6.5s linear"; bar.current.style.width = "100%"; } }));
    }
    return () => clearTimeout(t);
  }, [on, paused, items.length]);
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
            {items.map((it, i) => (
              <button key={i} type="button" className={`sst-item${i === on ? " on" : ""}`} onClick={() => setOn(i)} aria-pressed={i === on}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <small>{it.kicker}</small>
                <b>{it.title}</b>
                <span className="p">{it.text}</span>
              </button>
            ))}
          </div>
          <div className="sst-bar"><i ref={bar}></i></div>
        </div>
      </div>
    </section>
  );
}
