// Utilitários de SEO: URLs canônicas, hreflang, Open Graph e dados estruturados (Schema.org)

export const SITE_URL = "https://www.thomasbenson.com.br";
export const SITE_NAME = "Dr. Thomas Benson";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/full-width-images/dr-thomas3.jpg`;

export const localizedUrl = (locale, path = "") => `${SITE_URL}/${locale}${path}`;

// Canonical + hreflang. `ptOnly` é para páginas que só existem em português (posts do blog):
// a versão /en aponta o canonical para a /pt, evitando conteúdo duplicado.
export function buildAlternates(locale, path = "", { ptOnly = false } = {}) {
  const pt = localizedUrl("pt", path);
  if (ptOnly) {
    return { canonical: pt, languages: { "pt-BR": pt, "x-default": pt } };
  }
  return {
    canonical: localizedUrl(locale, path),
    languages: { "pt-BR": pt, en: localizedUrl("en", path), "x-default": pt },
  };
}

// Metadados completos de uma página (title, description, canonical, hreflang, Open Graph e Twitter)
export function pageMetadata({
  locale,
  path = "",
  title,
  description,
  image,
  type = "website",
  ptOnly = false,
  noindex = false,
}) {
  const alternates = buildAlternates(locale, path, { ptOnly });
  description = clampDescription(description);
  const images = [{ url: image || DEFAULT_OG_IMAGE }];

  return {
    title,
    description,
    alternates,
    ...(noindex && { robots: { index: false, follow: true } }),
    openGraph: {
      title,
      description,
      url: alternates.canonical,
      siteName: SITE_NAME,
      locale: locale === "en" ? "en_US" : "pt_BR",
      type,
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

// Corta a descrição no limite do Google (~155 caracteres) sem quebrar palavra
export function clampDescription(text = "", max = 155) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.]+$/, "")}…`;
}

export const PHYSICIAN_ID = `${SITE_URL}/#physician`;

// Dados do consultório (usados no Schema.org e no Perfil da Empresa no Google: manter iguais)
export const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalClinic"],
  "@id": PHYSICIAN_ID,
  name: "Dr. Thomas Benson - Cirurgião Plástico",
  alternateName: "Thomas Benson",
  url: `${SITE_URL}/pt`,
  image: DEFAULT_OG_IMAGE,
  logo: `${SITE_URL}/assets/images/logo-drthomas.png`,
  description:
    "Cirurgião plástico em São Paulo especialista em cirurgia facial e Deep Plane Facelift. PhD, título pelo European Board of Plastic Surgery. CRM-SP 119.278, RQE 29279.",
  medicalSpecialty: "PlasticSurgery",
  identifier: [
    { "@type": "PropertyValue", propertyID: "CRM-SP", value: "119.278" },
    { "@type": "PropertyValue", propertyID: "RQE", value: "29279" },
  ],
  knowsAbout: [
    "Deep Plane Facelift",
    "Lifting facial",
    "Ritidoplastia",
    "Deep Neck Lift",
    "Lifting de pescoço",
    "Blefaroplastia",
    "Lifting de sobrancelha",
    "Bigode chinês",
    "Lipoenxertia facial",
    "Envelhecimento facial",
  ],
  telephone: ["+55-11-97241-5960", "+55-11-4305-6070"],
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Antônio Joaquim de Moura Andrade, 315",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: { "@type": "City", name: "São Paulo" },
  availableService: [
    "Deep Plane Facelift",
    "Lifting facial",
    "Deep Neck Lift",
    "Blefaroplastia",
    "Rinoplastia",
    "Lifting frontal",
    "Lifting labial",
    "Lipoenxertia facial",
    "Otoplastia",
  ].map((name) => ({ "@type": "MedicalProcedure", name })),
  sameAs: [
    "https://www.instagram.com/thomasbenson/",
    "https://www.youtube.com/@dr.thomasbenson",
    "https://www.facebook.com/drthomasbenson/",
    "https://www.linkedin.com/in/thomas-benson-12b2287a/",
  ],
};

export const breadcrumbJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(({ name, url }, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: url,
  })),
});

// Lê as perguntas do bloco "Perguntas frequentes" dos posts (parágrafos "1. Pergunta?\nResposta")
export function extractFaq(richText = []) {
  const start = richText.findIndex(
    (block) => block.type.startsWith("heading") && /perguntas frequentes|faq/i.test(block.text)
  );
  if (start === -1) return [];

  const faq = [];
  for (const block of richText.slice(start + 1)) {
    if (block.type.startsWith("heading")) break;
    const match = block.text?.match(/^\s*\d+[.)]\s*(.+?\?)\s*\n([\s\S]+)$/);
    if (match) faq.push({ question: match[1].trim(), answer: match[2].trim() });
  }
  return faq;
}

export const faqJsonLd = (faq) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
});

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
