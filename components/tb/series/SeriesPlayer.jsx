"use client";
import { useEffect, useRef, useState } from "react";
import { EPISODES, TRAILER } from "./data";
import { Close } from "../Icons";

const PLAY = (<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z" /></svg>);
const INFO = (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5.5M12 7.8v.1" /></svg>);

// Topo com trailer, fileira de episódios e o modal que toca cada episódio (Google Drive)
export function useSeries(locale) {
  const L = locale === "en" ? "en" : "pt";
  return { L, eps: EPISODES.map((e) => ({ ...e, ...e[L] })) };
}

export default function SeriesPlayer({ locale, part }) {
  const { L, eps } = useSeries(locale);
  const [open, setOpen] = useState(null); // índice do episódio aberto
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const vid = useRef(null);
  const T = L === "en"
    ? { badge: "Documentary series", isNew: "New", eps: "4 episodes", min: "6 to 8 min", genre: "Documentary", watch: "Watch", info: "More info", row: "The 4 episodes", unmute: "Turn on trailer sound", mute: "Turn off trailer sound", close: "Close", epsH: "Episodes", ep: "Episode", lead: "A documentary series with Dr. Thomas Benson. Four patients. Four stories. One goal: to give back what time took away, without erasing who each person is." }
    : { badge: "Série documental", isNew: "Nova", eps: "4 episódios", min: "6 a 8 min", genre: "Documental", watch: "Assistir", info: "Mais informações", row: "Os 4 episódios", unmute: "Ativar som do trailer", mute: "Desativar som do trailer", close: "Fechar", epsH: "Episódios", ep: "Episódio", lead: "Uma série documental com o Dr. Thomas Benson. Quatro pacientes. Quatro histórias. Um mesmo objetivo: devolver o que o tempo levou, sem apagar quem cada um é." };

  // Trailer só toca com a página visível e sem modal aberto
  useEffect(() => {
    const v = vid.current; if (!v) return;
    if (open === null && !matchMedia("(prefers-reduced-motion: reduce)").matches) v.play().catch(() => {}); else v.pause();
  }, [open]);
  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const esc = (e) => { if (e.key === "Escape") setOpen(null); };
    document.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", esc); };
  }, [open]);
  // Botões fora deste componente (seção "O cirurgião") abrem o episódio 1 por evento
  useEffect(() => {
    const h = () => { setOpen(0); setPlaying(true); };
    window.addEventListener("tb:serie", h);
    return () => window.removeEventListener("tb:serie", h);
  }, []);

  const show = (i, auto) => { setOpen(i); setPlaying(!!auto); };
  const e = open !== null ? eps[open] : null;

  return (
    <>
      <section className="nf-hero" aria-label="Reescrevendo o Tempo">
        <img className="poster" src="/assets/images/serie/dr-thomas-serie.jpg" alt="" />
        <video ref={vid} muted={muted} loop playsInline preload="metadata" aria-hidden="true" poster="/assets/images/serie/dr-thomas-serie.jpg">
          <source src={TRAILER} type="video/mp4" />
        </video>
        <button className="nf-mute" type="button" aria-pressed={!muted} aria-label={muted ? T.unmute : T.mute} onClick={() => setMuted((m) => !m)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />{muted ? <path d="M16 9.5l5 5M21 9.5l-5 5" /> : <path d="M16 9a4.5 4.5 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11" />}</svg>
        </button>
        <div className="wrap" style={{ zIndex: 1 }}>
          <p className="nf-badge"><i>T</i>{T.badge}</p>
          <h1 className="nf-title">Reescrevendo o Tempo</h1>
          <div className="nf-meta"><b>{T.isNew}</b><span>2026</span><span className="box">{T.eps}</span><span>{T.min}</span><span>{T.genre}</span></div>
          <p className="body" style={{ marginTop: 18, fontSize: 19, maxWidth: 560, color: "rgba(255,255,255,.9)" }}>{T.lead}</p>
          <div style={{ marginTop: 30, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="nf-btn play" type="button" onClick={() => show(0, true)}>{PLAY} {T.watch}</button>
            <button className="nf-btn info" type="button" onClick={() => show(0, false)}>{INFO} {T.info}</button>
          </div>
        </div>
      </section>

      <section className="nf-row" aria-label={T.row}>
        <div className="wrap">
          <h2>{T.row}</h2>
          <div className="nf-top">
            {eps.map((x, i) => (
              <button key={x.num} className="nf-card" type="button" onClick={() => show(i, false)} aria-label={`${T.ep} ${+x.num}: ${x.name}, ${x.title}`}>
                <span className="big" aria-hidden="true">{i + 1}</span>
                <span className="pst">
                  <img src={x.img} alt="" loading="lazy" />
                  <span className="ply">{PLAY}</span>
                  <span className="cap"><small>EP {x.num}</small><b>{x.name}</b></span>
                </span>
                <p>{x.title}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {e && (
        <div className="nf-modal" role="dialog" aria-modal="true" aria-label={`${T.ep} ${+e.num}: ${e.name}`} onClick={(ev) => { if (ev.target === ev.currentTarget) setOpen(null); }}>
          <div className="nf-box">
            <button className="nf-x" type="button" aria-label={T.close} onClick={() => setOpen(null)}><Close /></button>
            <div className="nf-stage">
              {playing ? (
                <iframe src={`https://drive.google.com/file/d/${e.drive}/preview`} allow="autoplay; fullscreen" allowFullScreen title={`${T.ep} ${+e.num}: ${e.name}`} />
              ) : (
                <>
                  <div className="cv" style={{ backgroundImage: `url(${e.img})` }}></div>
                  <div className="ttl">
                    <p className="nf-badge"><i>T</i>EP {e.num}</p>
                    <h3 style={{ marginTop: 10 }}>{e.name}</h3>
                    <p className="it" style={{ fontSize: 22, margin: "6px 0 20px" }}>{e.title}</p>
                    <button className="nf-btn play" type="button" onClick={() => setPlaying(true)}>{PLAY} {T.watch}</button>
                  </div>
                </>
              )}
            </div>
            <div className="nf-body">
              <div>
                <div className="nf-meta" style={{ marginTop: 0 }}><b>EP {e.num}</b><span>2026</span><span className="box">{T.min}</span><span>Reescrevendo o Tempo</span></div>
                <p className="t" style={{ marginTop: 16 }}>{e.text}</p>
              </div>
              <p className="nf-quote" style={{ fontSize: 22, alignSelf: "start" }}>“{e.quote}”</p>
            </div>
            <div className="nf-eps">
              <h3 className="nf-h" style={{ fontSize: 22, marginBottom: 10 }}>{T.epsH}</h3>
              {eps.map((x, k) => (
                <button key={x.num} className={`nf-ep${k === open ? " on" : ""}`} type="button" onClick={() => show(k, true)}>
                  <span className="k">{k + 1}</span>
                  <img src={x.img} alt="" />
                  <span><b>{x.name}: {x.title}</b><small>{x.text.slice(0, 140)}…</small></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function WatchButton({ label }) {
  return (
    <button className="nf-btn play" type="button" onClick={() => window.dispatchEvent(new Event("tb:serie"))}>{PLAY} {label}</button>
  );
}
