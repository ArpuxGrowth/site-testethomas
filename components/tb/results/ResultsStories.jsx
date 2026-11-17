"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@/i18n/routing";
import ScheduleButton from "../ScheduleButton";
import { abrirWhatsapp } from "@/utlis/whatsapp";

// Página Resultados no formato do protótipo: stories, filtros, feed estilo Instagram e visualizador de stories.
// Todo o conteúdo dos casos é renderizado no servidor (o Google lê); só a interação depende de JS.

const VERIFIED = (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-label="verificado"><path fill="#4aa3ff" d="M12 2l2.4 1.8 3-.2.9 2.9 2.5 1.7-1 2.8 1 2.8-2.5 1.7-.9 2.9-3-.2L12 22l-2.4-1.8-3 .2-.9-2.9-2.5-1.7 1-2.8-1-2.8 2.5-1.7.9-2.9 3 .2z" /><path d="M8 12.2l2.6 2.6L16.2 9" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
);
const Chev = ({ d }) => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d={d} /></svg>);
const DUR = 6000;
const TAGS = { pt: { antes: "Antes", depois: "Depois", ab: "Antes e depois" }, en: { antes: "Before", depois: "After", ab: "Before and after" } };
const tagOf = (L, t) => TAGS[L.en ? "en" : "pt"][t] || TAGS.pt.ab;

function Post({ c, i, L, avatar, onStory }) {
  const n = c.photos.length;
  const [pos, setPos] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [more, setMore] = useState(false);
  const go = (d) => setPos((p) => Math.max(0, Math.min(n - 1, p + d)));
  return (
    <>
      <div className="ph">
        <span className="av"><img src={avatar} alt="" /></span>
        <div className="who"><b>thomasbenson {VERIFIED}</b><span>{c.label} · {c.ig ? L.onIg : "Vila Nova Star"}</span></div>
        <button className="watch gold" type="button" onClick={() => onStory(i)}>▶ STORY</button>
      </div>
      <div className="media">
        <div className="track" style={{ transform: `translateX(${-100 * pos}%)` }}>
          {c.photos.map(([t, src, p], k) => (
            <div className="slide" key={k}>
              <img src={src} alt={`${tagOf(L, t)}: ${c.title}`} loading="lazy" style={{ objectPosition: p || "50% 35%", objectFit: c.fit || "cover", background: "#000" }} />
              {t !== "ab" && <span className={`tag ${t === "antes" ? "antes" : "gold"}`}>{tagOf(L, t)}</span>}
            </div>
          ))}
        </div>
        {n > 1 && (
          <>
            <span className="count"><span>{pos + 1}</span>/{n}</span>
            <button className="arrow clear glass" type="button" onClick={() => go(-1)} aria-label={L.prev} style={{ left: 10 }}><Chev d="M15 6l-6 6 6 6" /></button>
            <button className="arrow clear glass" type="button" onClick={() => go(1)} aria-label={L.next} style={{ right: 10 }}><Chev d="M9 6l6 6-6 6" /></button>
          </>
        )}
      </div>
      <div className="actions">
        <button className={`ib${liked ? " liked" : ""}`} type="button" aria-label={L.like} aria-pressed={liked} onClick={() => setLiked((v) => !v)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z" /></svg>
        </button>
        <button className="ib" type="button" aria-label={L.ask} onClick={() => abrirWhatsapp("results_case")}>
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12z" /></svg>
        </button>
        <div className="dots">{n > 1 && c.photos.map((_, k) => <i key={k} className={k === pos ? "on" : ""}></i>)}</div>
        <button className="ib" type="button" aria-label={L.save} aria-pressed={saved} onClick={() => setSaved((v) => !v)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><path d="M6 3.5h12v17l-6-4.2-6 4.2z" /></svg>
        </button>
      </div>
      <div className="cap">
        <h3>{c.href ? <Link href={c.href} className="rs-title-link">{c.title}</Link> : c.title}</h3>
        <div className="facts">{c.procs.map((p) => <span key={p}>{p}</span>)}</div>
        <p className="desc"><b>thomasbenson</b> {c.short} {c.long?.length > 0 && !more && <button className="more-t" type="button" onClick={() => setMore(true)}>{L.more}</button>}</p>
        {c.long?.length > 0 && (
          <div className="desc long" hidden={!more}>{c.long.map((t, k) => <p key={k} dangerouslySetInnerHTML={{ __html: t }} />)}</div>
        )}
        {c.href && <Link className="more-t rs-case-link" href={c.href}>{L.full} →</Link>}
        {c.ig && <a className="more-t" href={c.ig} target="_blank" rel="noopener" style={{ textDecoration: "none", fontSize: 13, color: "var(--gold)" }}>{L.seeIg} ↗</a>}
      </div>
    </>
  );
}

export default function ResultsStories({ cases, cats, L, avatar }) {
  const [cat, setCat] = useState("todos");
  const [seen, setSeen] = useState(() => new Set());
  const [story, setStory] = useState(null); // { c, f }
  const bars = useRef(null);
  const raf = useRef(0);
  const state = useRef({ t0: 0, elapsed: 0, paused: false });
  const lastFocus = useRef(null);

  const close = useCallback(() => {
    cancelAnimationFrame(raf.current);
    setStory(null);
    document.body.style.overflow = "";
    lastFocus.current?.focus?.();
  }, []);
  const open = (c) => {
    lastFocus.current = document.activeElement;
    document.body.style.overflow = "hidden";
    setStory({ c, f: 0 });
  };
  const step = useCallback((d) => {
    setStory((s) => {
      if (!s) return s;
      let { c, f } = s; f += d;
      if (f >= cases[c].story.length) { if (c < cases.length - 1) { c++; f = 0; } else { setTimeout(close, 0); return s; } }
      if (f < 0) { if (c > 0) { c--; f = cases[c].story.length - 1; } else f = 0; }
      return { c, f };
    });
  }, [cases, close]);

  // Barra de progresso de cada quadro
  useEffect(() => {
    if (!story) return;
    setSeen((s) => new Set(s).add(story.c));
    const st = state.current; st.elapsed = 0; st.t0 = performance.now();
    const tick = (now) => {
      if (!st.paused) {
        const p = Math.min(1, (st.elapsed + now - st.t0) / DUR);
        const bar = bars.current?.children[story.f]?.firstChild;
        if (bar) bar.style.width = `${p * 100}%`;
        if (p >= 1) { step(1); return; }
      } else st.t0 = now;
      raf.current = requestAnimationFrame(tick);
    };
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [story, step]);

  useEffect(() => {
    if (!story) return;
    const k = (e) => { if (e.key === "Escape") close(); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, [story, close, step]);

  const visible = (c) => cat === "todos" || c.cats.includes(cat);
  const cur = story ? cases[story.c] : null;
  const frame = cur ? cur.story[story.f] : null;

  return (
    <>
      <div className="pane glass">
        <div className="stories" aria-label={L.stories}>
          {cases.map((c, i) => (
            <button key={c.id} className="st" type="button" onClick={() => open(i)} aria-label={`${L.seeStory}: ${c.label}`}>
              <span className={`ring${seen.has(i) ? " seen" : ""}`}><span><img src={c.cover} alt="" loading={i < 8 ? undefined : "lazy"} /></span></span>
              <small>{c.label}</small>
            </button>
          ))}
        </div>
        <div className="chips" role="group" aria-label={L.filter}>
          {cats.map(([k, l]) => {
            const n = k === "todos" ? cases.length : cases.filter((c) => c.cats.includes(k)).length;
            if (!n) return null;
            return (<button key={k} className="chip" type="button" aria-pressed={k === cat} onClick={() => setCat(k)}>{l}<span className="n">{n}</span></button>);
          })}
        </div>
      </div>

      <div className="feed">
        {cases.map((c, i) => (
          <article key={c.id} className="post" hidden={!visible(c)}>
            <Post c={c} i={i} L={L} avatar={avatar} onStory={open} />
          </article>
        ))}
      </div>

      {cur && frame && createPortal((
        <div className="viewer" role="dialog" aria-modal="true" aria-label={L.story} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
          <button className="round clear glass vside" type="button" aria-label={L.prev} onClick={() => step(-1)}><Chev d="M15 6l-6 6 6 6" /></button>
          <div className="vbox"
            onMouseEnter={() => { const s = state.current; s.paused = true; s.elapsed += performance.now() - s.t0; }}
            onMouseLeave={() => { const s = state.current; s.paused = false; s.t0 = performance.now(); }}>
            <img className="vimg" src={frame[1]} alt={`${tagOf(L, frame[0])}: ${cur.title}`} style={{ objectFit: cur.fit || "cover", objectPosition: cur.fit ? "50% 30%" : undefined }} />
            <div className="vshade"></div>
            <div className="vbars" ref={bars}>
              {cur.story.map((_, k) => (<span key={`${story.c}-${k}`}><b style={{ width: k < story.f ? "100%" : 0 }}></b></span>))}
            </div>
            <div className="vhead">
              <span className="av"><img src={avatar} alt="" /></span>
              <div className="who"><b>thomasbenson {VERIFIED}</b><span>{cur.label}</span></div>
              <button className="vx" type="button" aria-label={L.close} onClick={close} autoFocus>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>
            <span className="wm">DR. THOMAS BENSON</span>
            <button className="vtap" type="button" aria-label={L.prev} style={{ left: 0, width: "34%" }} onClick={() => step(-1)}></button>
            <button className="vtap" type="button" aria-label={L.next} style={{ right: 0, width: "66%" }} onClick={() => step(1)}></button>
            <div className="vtext">
              <span className={`tag ${frame[0] === "antes" ? "antes" : "gold"}`}>{tagOf(L, frame[0])}</span>
              <h2 dangerouslySetInnerHTML={{ __html: frame[2] }} />
              <p>{frame[3]}</p>
              {story.f === cur.story.length - 1 && <div className="vcta"><ScheduleButton trackingLocation="results_story" /></div>}
            </div>
          </div>
          <button className="round clear glass vside" type="button" aria-label={L.next} onClick={() => step(1)}><Chev d="M9 6l6 6-6 6" /></button>
        </div>
      ), document.body)}
    </>
  );
}
