"use client";
import { useState } from "react";
import { Link } from "@/i18n/routing";
import Carousel from "./Carousel";
import { Arrow } from "../Icons";

// Painel com filtro por categoria + feed de casos. Todos os casos ficam no HTML;
// o filtro só esconde (atributo hidden) os que não pertencem à categoria escolhida.
export default function ResultsFeed({ cases, filters, labels }) {
  const [cat, setCat] = useState("all");
  return (
    <>
      <div className="pane glass rs-pane">
        <div className="chips" role="group" aria-label={labels.filter}>
          {filters.map((f) => {
            const n = f.category === "all" ? cases.length : cases.filter((c) => c.cats.includes(f.category)).length;
            return (
              <button key={f.category} type="button" className="chip" aria-pressed={cat === f.category} onClick={() => setCat(f.category)}>
                {f.name}<span className="n">{n}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="feed rs-feed">
        {cases.map((c) => (
          <article key={c.id} className="post" hidden={cat !== "all" && !c.cats.includes(cat)}>
            <div className="ph">
              <span className="av rs-av" aria-hidden="true"><span>TB</span></span>
              <div className="who">
                <b>thomasbenson</b>
                <span>{c.catLabel}</span>
              </div>
            </div>
            <Carousel slides={c.slides} prevLabel={labels.prev} nextLabel={labels.next} />
            <div className="cap rs-cap">
              <h3><Link href={c.href}>{c.title}</Link></h3>
              {c.facts.length > 0 && (
                <div className="facts">{c.facts.map((p) => <span key={p}>{p}</span>)}</div>
              )}
              <Link className="rs-more" href={c.href}>{labels.item} <Arrow width={14} height={14} /></Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
