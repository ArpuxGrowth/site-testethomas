// SEO das páginas de cirurgia e ligação entre posts do blog e cirurgias (links internos).
// `terms`: palavras que, no título de um post, indicam que ele fala daquela cirurgia.
// `title`/`description`: metadados em português (as traduções em inglês vêm do messages/en.json).

export const surgerySeo = {
  "deep-plane-facelift": {
    terms: ["deep plane"],
    title: "Deep Plane Facelift em São Paulo | Dr. Thomas Benson",
    description:
      "Deep Plane Facelift em São Paulo com o Dr. Thomas Benson: rejuvenescimento facial natural e duradouro, sem aspecto de pele esticada. Agende sua avaliação.",
  },
  "deep-neck-lift": {
    terms: ["deep neck", "pescoço", "papada", "platism"],
    title: "Deep Neck Lift em São Paulo | Dr. Thomas Benson",
    description:
      "Deep Neck Lift em São Paulo com o Dr. Thomas Benson: trata flacidez, bandas e gordura profunda do pescoço e redefine o contorno da mandíbula. Agende sua avaliação.",
  },
  "lifting-facial": {
    terms: ["lifting facial", "facelift", "rejuvenescimento facial", "cirurgia de rejuvenescimento", "cirurgias faciais", "cirurgia plástica facial", "cirurgia plástica no rosto"],
    title: "Lifting Facial em São Paulo | Dr. Thomas Benson",
    description:
      "Lifting facial em São Paulo com o Dr. Thomas Benson: técnicas do mini lifting ao Deep Plane, recuperação e resultados naturais. Agende sua avaliação.",
  },
  blefaroplastia: {
    terms: ["blefaroplastia", "pálpebra"],
    title: "Blefaroplastia em São Paulo | Dr. Thomas Benson",
    description:
      "Blefaroplastia em São Paulo com o Dr. Thomas Benson: correção do excesso de pele e das bolsas nas pálpebras, com cicatriz discreta. Agende sua avaliação.",
  },
  rinoplastia: {
    terms: ["rinoplastia", "nariz"],
    title: "Rinoplastia em São Paulo | Dr. Thomas Benson",
    description:
      "Rinoplastia em São Paulo com o Dr. Thomas Benson: nariz harmônico com o rosto e respiração preservada, com planejamento individual. Agende sua avaliação.",
  },
  "lifting-frontal": {
    terms: ["lifting frontal", "sobrancelha", "testa"],
    title: "Lifting Frontal em São Paulo | Dr. Thomas Benson",
    description:
      "Lifting frontal em São Paulo com o Dr. Thomas Benson: eleva as sobrancelhas e suaviza as rugas da testa com técnica endoscópica. Agende sua avaliação.",
  },
  "lifting-labial": {
    terms: ["lifting labial", "lip lift"],
    title: "Lifting Labial (Lip Lift) em São Paulo | Dr. Thomas Benson",
    description:
      "Lifting labial em São Paulo com o Dr. Thomas Benson: encurta o filtro labial e rejuvenesce o sorriso, com cicatriz discreta. Agende sua avaliação.",
  },
  "lipoenxertia-facial": {
    terms: ["lipoenxertia facial", "enxerto de gordura no rosto"],
    title: "Lipoenxertia Facial em São Paulo | Dr. Thomas Benson",
    description:
      "Lipoenxertia facial em São Paulo com o Dr. Thomas Benson: reposição de volume com a gordura do próprio paciente para um rosto natural. Agende sua avaliação.",
  },
  otoplastia: {
    terms: ["otoplastia", "orelha"],
    title: "Otoplastia em São Paulo | Dr. Thomas Benson",
    description:
      "Otoplastia em São Paulo com o Dr. Thomas Benson: correção de orelhas proeminentes (orelha de abano) com resultado natural. Agende sua avaliação.",
  },
  "preenchimento-cutaneo": { terms: ["preenchimento"] },
  braquioplastia: { terms: ["braquioplastia", "braço"] },
  abdominoplastia: { terms: ["abdominoplastia", "barriga", "diástase"] },
  lipoaspiracao: { terms: ["lipoaspiração", "lipoescultura", "lipo"] },
  "reconstrucao-mamaria": { terms: ["reconstrução mamária", "mastectomia", "câncer de mama"] },
  ginecomastia: { terms: ["ginecomastia"] },
  mamoplastia: { terms: ["mamoplastia", "mastopexia", "seios", "levantamento de mama"] },
  "protese-de-mama": { terms: ["prótese", "silicone", "rippling", "aumento dos seios"] },
  "cirurgia-em-ex-obesos": { terms: ["bariátrica", "excesso de pele"] },
  "cirurgias-combinadas": { terms: ["combinada"] },
  ninfoplastia: { terms: ["ninfoplastia"] },
};

const normalize = (text = "") => text.toLowerCase();

// Cirurgia mais relacionada a um post, pela ordem acima (faciais primeiro)
export function surgeryForPost(title) {
  const t = normalize(title);
  return Object.keys(surgerySeo).find((url) =>
    surgerySeo[url].terms.some((term) => t.includes(term))
  );
}

// Posts que falam de uma cirurgia, sem títulos repetidos
export function postsForSurgery(url, posts, limit = 4) {
  const terms = surgerySeo[url]?.terms || [];
  const seen = new Set();
  return posts
    .filter((post) => terms.some((term) => normalize(post.data.title).includes(term)))
    .filter((post) => !seen.has(post.data.title) && seen.add(post.data.title))
    .slice(0, limit);
}
