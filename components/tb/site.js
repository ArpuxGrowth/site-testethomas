// Dados fixos do site novo: menu, redes e contato (textos nos dois idiomas)
export const NAV = [
  { href: "/", pt: "Início", en: "Home" },
  { href: "/dr-thomas", pt: "Dr. Thomas", en: "Dr. Thomas" },
  { href: "/antes-e-depois", pt: "Resultados", en: "Results", match: ["/resultado"] },
  { href: "/cirurgias", pt: "Cirurgias", en: "Surgeries" },
  { href: "/assista-a-serie", pt: "Assista à série", en: "Watch the series", play: true },
];

export const NAV_MORE = [
  { href: "/pacientes-no-exterior", pt: "Pacientes no Exterior", en: "International patients", spt: "Atendimento a quem vem de fora", sen: "Care for patients from abroad" },
  { href: "/equipe", pt: "Equipe", en: "Team", spt: "Quem cuida de você", sen: "The people who take care of you" },
  { href: "/imprensa", pt: "Imprensa", en: "Press", spt: "Matérias e entrevistas", sen: "Features and interviews" },
  { href: "/blog", pt: "Blog", en: "Blog", spt: "Artigos sobre cirurgia facial", sen: "Articles on facial surgery" },
  { href: "/cirurgia-plastica-facial", pt: "Cirurgia plástica facial", en: "Facial plastic surgery", spt: "Guia completo", sen: "Complete guide" },
];

export const SOCIALS = [
  { name: "Instagram", url: "https://www.instagram.com/thomasbenson/" },
  { name: "YouTube", url: "https://www.youtube.com/@dr.thomasbenson" },
  { name: "Facebook", url: "https://www.facebook.com/drthomasbenson/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/thomas-benson-12b2287a/" },
];

export const PHONES = [
  { label: "+55 (11) 97241-5960", tel: "+5511972415960" },
  { label: "+55 (11) 4305-6070", tel: "+551143056070" },
];

// Mesma lista do rodapé antigo: links para as cirurgias faciais em todas as páginas (SEO)
export const FACIAL_SURGERIES = [
  { url: "lifting-facial", pt: "Lifting facial", en: "Facelift" },
  { url: "deep-plane-facelift", pt: "Deep Plane Facelift", en: "Deep Plane Facelift" },
  { url: "deep-neck-lift", pt: "Deep Neck Lift", en: "Deep Neck Lift" },
  { url: "blefaroplastia", pt: "Blefaroplastia", en: "Blepharoplasty" },
  { url: "rinoplastia", pt: "Rinoplastia", en: "Rhinoplasty" },
  { url: "lifting-frontal", pt: "Lifting frontal", en: "Brow lift" },
  { url: "lifting-labial", pt: "Lifting labial", en: "Lip lift" },
  { url: "lipoenxertia-facial", pt: "Lipoenxertia facial", en: "Facial fat grafting" },
  { url: "otoplastia", pt: "Otoplastia", en: "Otoplasty" },
];

export const tx = (locale, item, key = "") => item[(key ? key + "_" : "") + locale] ?? item[locale] ?? item.pt;
