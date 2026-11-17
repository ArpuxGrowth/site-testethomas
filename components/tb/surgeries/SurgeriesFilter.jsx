"use client";
import { useState } from "react";

// Filtro da lista de cirurgias. Os cartões chegam prontos do servidor (children) e ficam
// todos no HTML; o filtro só esconde por CSS ([data-f] no contêiner e [data-c] em cada cartão).
export default function SurgeriesFilter({ filters, label, children }) {
  const [current, setCurrent] = useState("all");
  return (
    <div className="sg-list" data-f={current}>
      <div className="chips sg-chips" role="group" aria-label={label}>
        {filters.map((f) => (
          <button
            key={f.category}
            type="button"
            className="chip glass"
            aria-pressed={current === f.category}
            onClick={() => setCurrent(f.category)}
          >
            {f.name}
            <span className="n">{f.count}</span>
          </button>
        ))}
      </div>
      <ul className="g3 sg-grid">{children}</ul>
    </div>
  );
}
