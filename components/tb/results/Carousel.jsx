"use client";
import { useRef, useState } from "react";

// Carrossel de fotos (antes e depois). Funciona sem JS: as fotos ficam lado a lado com rolagem
// horizontal (scroll-snap). Com JS, as setas, o contador e os pontinhos acompanham a foto atual.
export default function Carousel({ slides, ratio = "4/5", prevLabel = "Foto anterior", nextLabel = "Próxima foto", eager = false, fit = "cover" }) {
  const track = useRef(null);
  const [pos, setPos] = useState(0);
  const n = slides.length;

  const go = (d) => {
    const el = track.current;
    if (!el) return;
    const i = Math.max(0, Math.min(n - 1, pos + d));
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };
  const onScroll = () => {
    const el = track.current;
    if (!el || !el.clientWidth) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== pos) setPos(i);
  };

  return (
    <div className="rs-car">
      <div className="media" style={{ aspectRatio: ratio }}>
        <div className="track rs-track" ref={track} onScroll={onScroll}>
          {slides.map((s, i) => (
            <div className="slide" key={s.src + i}>
              <img
                src={s.src}
                alt={s.alt}
                width={s.w}
                height={s.h}
                style={{ objectFit: s.fit || fit }}
                {...(eager && i === 0 ? { fetchPriority: "high" } : { loading: "lazy" })}
              />
            </div>
          ))}
        </div>
        {n > 1 && (
          <>
            <span className="count"><span>{pos + 1}</span>/{n}</span>
            <button className="arrow clear glass" type="button" onClick={() => go(-1)} aria-label={prevLabel} style={{ left: 10 }} disabled={pos === 0}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <button className="arrow clear glass" type="button" onClick={() => go(1)} aria-label={nextLabel} style={{ right: 10 }} disabled={pos === n - 1}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </>
        )}
      </div>
      {n > 1 && (
        <div className="dots rs-dots" aria-hidden="true">
          {slides.map((_, k) => <i key={k} className={k === pos ? "on" : ""} />)}
        </div>
      )}
    </div>
  );
}
