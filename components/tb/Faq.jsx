import { Chevron } from "./Icons";

// Perguntas frequentes com <details>: a resposta fica no HTML (o Google lê) e abre sem JavaScript.
// items = [{ q, a }] ; `a` pode ser texto ou HTML (html: true)
export default function Faq({ items, html = false, headingLevel = 3 }) {
  const H = `h${headingLevel}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map(({ q, a }, i) => (
        <details key={i} className="faq card soft">
          <summary className="q">
            <H style={{ font: "inherit", margin: 0 }}>{q}</H>
            <span className="ic"><Chevron width={16} height={16} /></span>
          </summary>
          {html ? <div className="a body" dangerouslySetInnerHTML={{ __html: a }} /> : <p className="a body">{a}</p>}
        </details>
      ))}
    </div>
  );
}
