import { createClient } from "@/prismicio";
import { surgeriesItems } from "@/data/surgeries";
import { pressItems } from "@/data/pressgallery";
import { localizedUrl } from "@/lib/seo";
import { redirectedBlogUids } from "@/data/blogRedirects.mjs";

// Sitemap gerado automaticamente (substitui o sitemap.xml estático de 2025):
// inclui todas as cirurgias e todos os posts publicados no Prismic.
const staticPaths = [
  "",
  "/dr-thomas",
  "/equipe",
  "/blog",
  "/imprensa",
  "/pacientes-no-exterior",
  "/cirurgias",
  "/antes-e-depois",
  "/cirurgia-plastica-facial",
  ...surgeriesItems.map((item) => `/cirurgias/${item.url}`),
  ...pressItems.map((item) => `/imprensa/${item.id}`),
  ...[7, 8, 9, 10, 11].map((id) => `/resultado/${id}`),
];

// Páginas que só existem em português (a versão /en aponta para a /pt)
const ptOnlyPaths = new Set(["/cirurgia-plastica-facial"]);

const withAlternates = (path) => ({
  url: localizedUrl("pt", path),
  ...(!ptOnlyPaths.has(path) && {
    alternates: { languages: { "pt-BR": localizedUrl("pt", path), en: localizedUrl("en", path) } },
  }),
  changeFrequency: "monthly",
  priority: path === "" ? 1 : path.startsWith("/cirurgias") ? 0.9 : 0.7,
});

export default async function sitemap() {
  const posts = await createClient()
    .getAllByType("blog_post", { fetch: ["blog_post.date"] })
    .catch(() => []);

  return [
    ...staticPaths.map(withAlternates),
    // Posts só em português
    ...posts.filter((post) => !redirectedBlogUids.has(post.uid)).map((post) => ({
      url: localizedUrl("pt", `/blog/${post.uid}`),
      lastModified: post.last_publication_date,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
