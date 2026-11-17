"use client";
import { useRef, useState } from "react";
import { Arrow, ArrowLeft } from "../Icons";

// Carreira em capítulos (como no protótipo): chips + cartão com setas e deslize no celular.
// Todos os capítulos ficam no HTML; só o ativo aparece.
const CH = {
  pt: [
    { chip: "Formação", title: "Duplo doutorado em Medicina", sub: "USP · Universidade de Hamburgo", pills: ["PhD USP", "PhD UKE Hamburgo", "Brasil · Alemanha"], body: "Doutor em Medicina pela Universidade de São Paulo e pela Universidade de Hamburgo (UKE, Universitätsklinik Eppendorf), duas das instituições mais respeitadas da medicina." },
    { chip: "Títulos", title: "European Board of Plastic Surgery", sub: "Título de especialista EBOPRAS", pills: ["Board Europeu", "Governo alemão", "SBCP titular", "CREMESP"], body: "Único cirurgião plástico no Brasil com o título EBOPRAS, conquistado após provas em Bruxelas e Bern. Especialista pelo governo alemão, membro titular da SBCP e das sociedades americanas de cirurgia plástica." },
    { chip: "Residências", title: "Residência e microcirurgia", sub: "HC-USP · Hospital Bogenhausen", pills: ["HC-USP", "Microcirurgia", "Munique"], body: "Residência em Cirurgia Geral e Plástica no Hospital das Clínicas da USP, pós-graduação em microcirurgia e residência no Hospital Bogenhausen, em Munique, onde foi preceptor." },
    { chip: "Deep Plane", title: "Especialização em face", sub: "Deep Plane Facelift", pills: ["Brasil", "EUA", "Cirurgia da face"], body: "Acompanhou cirurgiões renomados no Brasil e nos EUA e se aprimorou nas técnicas de cirurgia da face, incluindo o Deep Plane Facelift." },
    { chip: "Hoje", title: "Vila Nova Star", sub: "O único hospital 6 estrelas do Brasil", pills: ["7 cirurgias/semana", "Seg. a sáb.", "Einstein · Sírio · Moriah"], body: "Membro do corpo clínico do Einstein, Sírio-Libanês e Moriah. Opera de segunda a sábado, sete cirurgias por semana, no Vila Nova Star (SP)." },
  ],
  en: [
    { chip: "Education", title: "Double doctorate in Medicine", sub: "USP · University of Hamburg", pills: ["PhD USP", "PhD UKE Hamburg", "Brazil · Germany"], body: "Doctor of Medicine from the University of São Paulo and the University of Hamburg (UKE, Universitätsklinik Eppendorf), two of the most respected institutions in medicine." },
    { chip: "Titles", title: "European Board of Plastic Surgery", sub: "EBOPRAS specialist title", pills: ["European Board", "German government", "SBCP full member", "CREMESP"], body: "The only plastic surgeon in Brazil with the EBOPRAS title, earned after exams in Brussels and Bern. Specialist certified by the German government, full member of the SBCP and of the American plastic surgery societies." },
    { chip: "Residencies", title: "Residency and microsurgery", sub: "HC-USP · Bogenhausen Hospital", pills: ["HC-USP", "Microsurgery", "Munich"], body: "Residency in General and Plastic Surgery at Hospital das Clínicas (USP), postgraduate training in microsurgery and residency at Bogenhausen Hospital, in Munich, where he was a preceptor." },
    { chip: "Deep Plane", title: "Facial specialization", sub: "Deep Plane Facelift", pills: ["Brazil", "USA", "Facial surgery"], body: "He trained with renowned surgeons in Brazil and the USA and refined his facial surgery techniques, including the Deep Plane Facelift." },
    { chip: "Today", title: "Vila Nova Star", sub: "The only 6-star hospital in Brazil", pills: ["7 surgeries/week", "Mon to Sat", "Einstein · Sírio · Moriah"], body: "Member of the medical staff at Einstein, Sírio-Libanês and Moriah. Operates Monday to Saturday, seven surgeries a week, at Vila Nova Star (São Paulo)." },
  ],
};

export default function CareerChapters({ locale }) {
  const list = CH[locale === "en" ? "en" : "pt"];
  const [i, setI] = useState(0);
  const x0 = useRef(null);
  const go = (n) => setI((n + list.length) % list.length);
  const pad = (n) => String(n).padStart(2, "0");
  return (
    <div className="car">
      <div className="chips car-chips" role="tablist" aria-label={locale === "en" ? "Chapters" : "Capítulos"}>
        {list.map((c, k) => (
          <button key={c.chip} type="button" role="tab" className="chip glass" aria-selected={k === i} onClick={() => go(k)}>{c.chip}</button>
        ))}
      </div>
      <div
        className="soft card car-card"
        onTouchStart={(e) => { x0.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => { if (x0.current == null) return; const d = e.changedTouches[0].clientX - x0.current; if (Math.abs(d) > 40) go(i + (d < 0 ? 1 : -1)); x0.current = null; }}
      >
        {list.map((c, k) => (
          <article key={c.chip} hidden={k !== i} role="tabpanel">
            <p className="eyebrow" style={{ letterSpacing: 2.4 }}>{pad(k + 1)} / {pad(list.length)} · {c.chip.toUpperCase()}</p>
            <h3 className="car-t">{c.title}</h3>
            <p className="it car-s">{c.sub}</p>
            <div className="car-pills">{c.pills.map((p) => <span key={p} className="pill clear">{p}</span>)}</div>
            <p className="body car-b">{c.body}</p>
          </article>
        ))}
        <div className="car-nav">
          <div className="dots">{list.map((_, k) => <span key={k} className={k === i ? "on" : ""}></span>)}</div>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="round clear" type="button" aria-label={locale === "en" ? "Previous chapter" : "Capítulo anterior"} onClick={() => go(i - 1)}><ArrowLeft width={16} height={16} /></button>
            <button className="btn gold car-next" type="button" onClick={() => go(i + 1)}>{locale === "en" ? "Next" : "Próximo"} <Arrow width={14} height={14} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
