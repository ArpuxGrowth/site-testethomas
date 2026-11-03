// Redirecionamentos 301 do blog. Usado no next.config.mjs (redirects) e no prismicio.js
// (posts redirecionados não aparecem em listas, sitemap e links internos).

// Slugs corrigidos no Prismic (release "SEO – ajustes do blog (out/2026)")
export const renamedBlogPosts = {
  "entenda-as-diferencas-entre-deep-neck-lift-platismotomia-e-platismoplastia-quando-cada-tecnica-e-indicada-no-rejuvenescimento-do-pescoco-e-como-escolher-a-abordagem-mais-adequada-para-resultados-naturais-e-duradouros.":
    "deep-neck-lift-platismotomia-e-platismoplastia-diferencas",
  "como-funciona-a-cirurgia-pl-stica-no-pesco-o": "cirurgia-plastica-no-pescoco-como-funciona",
  "p-s-operat-rio-da-suspens-o-de-sobrancelhas": "pos-operatorio-suspensao-de-sobrancelhas",
  "quais-s-o-os-cuidados-p-s-operat-rios-essenciais-ap-s-um-lifting-facial": "cuidados-pos-operatorios-lifting-facial",
  "quais-s-o-as-t-cnicas-modernas-de-lifting-facial-e-como-elas-diferem-das-antigas": "tecnicas-modernas-de-lifting-facial",
  "o-que-a-cirurgia-de-corre-o-de-assimetria-facial": "cirurgia-de-correcao-de-assimetria-facial",
  rinoplastiacurasinusite: "rinoplastia-cura-sinusite",
  "cirurgiaspreenchimento-cutaneo": "preenchimento-cutaneo-para-quem-e-indicado",
  "reconstrucao-mamaria-": "reconstrucao-mamaria-recuperacao-da-autoestima",
  "20200320braco-flacido-braquioplastia": "braco-flacido-braquioplastia",
  "20210730gordura-localizada-na-barriga": "gordura-localizada-na-barriga",
  "20170921lifting-frontal-rejuvenescimento": "lifting-frontal-rejuvenescimento",
};

// Posts publicados mais de uma vez com o mesmo título: cada cópia aponta para a versão mantida
// (a que já ranqueia no Google, ou a mais antiga). As cópias podem ser despublicadas no Prismic.
const duplicates = {
  "preenchimento-cutaneo-o-que-e-entenda-esse-procedimento-estetico": [
    "preenchimento-cutaneo-o-que-e-entenda-esse-procedimento",
    "preenchimento-cutaneo-o-que-e-entenda-o-procedimento-estetico",
    "preenchimento-cutaneo-o-que-e-entenda-esse-",
  ],
  "quanto-custa-um-lifting-labial": ["o-que-e-um-lifting-labial"],
  "quanto-custa-uma-blefaroplastia-entenda-o-que-influencia-esse-valor-da-cirurgia": [
    "quanto-custa-uma-blefaroplastia-entenda-o-que-infl",
    "quanto-custa-uma-blefaroplastia",
    "quanto-custa-uma-blefaroplastia-entenda-o-que-influencia-o-valor-da-cirurgia-",
  ],
  "lifting-facial-como-funciona-a-cirurgia-pos-operatorio-e-cuidados-na-recuperacao": [
    "lifting-facial-como-funciona-a-cirurgia-pos-operatorio-e-cuidados",
  ],
  "lipoenxertia-facial-beneficios-indicacoes-e-tudo-o-que-voce-precisa-saber-antes-da-cirurgia": [
    "lipoenxertia-facial-beneficios-indicacoes-e-tudo",
  ],
  "otoplastia-como-funciona-a-cirurgia-pos-operatorio-e-cuidados-na-recuperacao": [
    "otoplastia-como-funciona-a-cirurgia-pos-operatorio-e-cuidados",
  ],
  "quanto-custa-um-preenchimento-cutaneo-entenda-o-que-influencia-o-valor-do-procedimento": [
    "quanto-custa-um-preenchimento-cutaneo-entenda-",
    "quanto-custa-um-preenchimento-cutaneo-entenda-agora",
  ],
  "blefaroplastia-o-que-e-quando-e-indicada-recuperacao-cicatriz-e-resultados": [
    "blefaroplastia-o-que-e-quando-e-indicada",
    "blefaroplastia-o-que-e-quando-e-indicada-recuperacao-cicatriz",
    "blefaroplastia-o-que-e",
  ],
  "lifting-labial-o-que-e-quando-e-indicado-e-como-essa-cirurgia-pode-transformar-a-harmonia-do-rosto": [
    "lifting-labial-o-que-e-quando-e-indicado",
  ],
  "quanto-custa-um-lifting-facial-entenda-o-que-influencia-o-valor": [
    "quanto-custa-um-lifting-facial-entenda-o-que-influencia-o-valor-da-cirurgia",
    "quanto-custa-um-lifting-facial-entenda",
  ],
  "quanto-custa-uma-lipoenxertia-facial-entenda-o-que-influencia": [
    "quanto-custa-uma-lipoenxertia-facial-entenda-o-que",
    "quanto-custa-uma-lipoenxertia-facial-entenda-o-que-a-influencia",
  ],
  "o-que-e-a-otoplastia-e-como-funciona": ["o-que-e-a-otoplastia", "o-que-e-a-otoplastia-e-como-ela-funciona"],
  "preenchimento-cutaneo-como-funciona-a-aplicacao-e-os-cuidados-apos-o-procedimento": [
    "preenchimento-cutaneo-como-funciona",
  ],
  "diastase-abdominal": ["diastase-abdominal-o-que-e-causas"],
};

export const duplicateBlogPosts = Object.fromEntries(
  Object.entries(duplicates).flatMap(([keep, copies]) => copies.map((copy) => [copy, keep]))
);

// Slugs que ainda existem no Prismic mas não devem aparecer no site
export const redirectedBlogUids = new Set(Object.keys(duplicateBlogPosts));

const escape = (uid) => uid.replace(/\./g, "\\.");

// Regras no formato do next.config (redirects)
export const blogRedirects = Object.entries({ ...renamedBlogPosts, ...duplicateBlogPosts }).flatMap(
  ([from, to]) =>
    ["pt", "en"].map((locale) => ({
      source: `/${locale}/blog/${escape(from)}`,
      destination: `/pt/blog/${to}`,
      permanent: true,
    }))
);
