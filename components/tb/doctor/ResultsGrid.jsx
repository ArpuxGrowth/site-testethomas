"use client";
import { useState } from "react";
import { Link } from "@/i18n/routing";

// Grade de antes e depois com filtro. Todos os casos ficam no HTML; o filtro só esconde os demais.
export default function ResultsGrid({ items, filters, label }) {
  const [cat, setCat] = useState("all");
  return (
    <>
      <div className="chips" role="group" aria-label={label} style={{ marginTop: 28 }}>
        {filters.map((f) => (
          <button key={f.category} type="button" className="chip" aria-pressed={cat === f.category} onClick={() => setCat(f.category)}>
            {f.name}
          </button>
        ))}
      </div>
      <ul className="dr-res">
        {items.map((it) => (
          <li key={it.id} hidden={cat !== "all" && !it.cats.includes(cat)}>
            <Link href={`/resultado/${it.id}`} className="cardlink card soft">
              <span className="ph"><img src={it.src} alt={it.alt} loading="lazy" width="650" height="773" /></span>
              <small>{it.text}</small>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
