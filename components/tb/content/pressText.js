// Resumo curto de uma matéria: primeiro trecho do artigo, sem HTML e sem frases de "clique no botão"
export function pressExcerpt(html = "", max = 210) {
  const txt = html.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
    .replace(/Clique no botão abaixo.*$/i, "").replace(/Click the button below.*$/i, "").trim();
  if (txt.length <= max) return txt;
  const cut = txt.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.]+$/, "") + "…";
}
