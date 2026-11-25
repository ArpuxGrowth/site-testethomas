import { NotFoundError } from "@prismicio/client";
import sm from "./slicemachine.config.json";
import { redirectedBlogUids } from "./data/blogRedirects.mjs";

/**
 * Repositório antigo do Prismic. Só a rota de preview (/api/preview) ainda fala com ele.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

/**
 * Desde 25/11/2026 os artigos do blog são escritos no portal da Arpux (Marketing → Blog), que publica
 * no Cloudflare R2 no mesmo formato da Content API do Prismic. Por isso o resto do site (asHTML, asText,
 * campos de data) continua igual. Este cliente imita os dois métodos que o site usa:
 *   getAllByType  lê resumo.json (todos os artigos sem o texto)
 *   getByUID      lê posts/<uid>.json (um artigo completo)
 * Em produção as leituras ficam em cache com a tag "prismic": publicar no portal chama /api/revalidate.
 */
const BLOG_FONTE = process.env.BLOG_FONTE || "https://blog.arpux.com.br/blog/thomas-benson";

const cacheOpcoes = () =>
  process.env.NODE_ENV === "production"
    ? { next: { tags: ["prismic"] }, cache: "force-cache" }
    : { next: { revalidate: 5 } };

async function lerBlog(arquivo) {
  const r = await fetch(`${BLOG_FONTE}/${arquivo}`, cacheOpcoes());
  if (r.status === 404 || r.status === 403) return null;
  if (!r.ok) throw new Error(`blog ${arquivo}: ${r.status}`);
  return r.json();
}

// `fetch` do Prismic (só alguns campos): mantém os mesmos campos em data.
const soCampos = (post, campos) => {
  if (!campos?.length) return post;
  const chaves = campos.map((c) => c.split(".").at(-1));
  return { ...post, data: Object.fromEntries(chaves.filter((k) => k in post.data).map((k) => [k, post.data[k]])) };
};

/**
 * Cliente do blog (mesma interface usada antes com o Prismic).
 */
export const createClient = () => ({
  // Do mais novo para o mais antigo pelo campo Data (no Prismic a ordem padrão era a interna dele, sem lógica para o leitor).
  async getAllByType(tipo, { fetch: campos } = {}) {
    const resumo = await lerBlog("resumo.json");
    const quando = (p) => p.data.date || (p.first_publication_date || "").slice(0, 10);
    return (resumo?.results ?? [])
      .filter((p) => p.type === tipo)
      .sort((a, b) => quando(b).localeCompare(quando(a)) || String(b.first_publication_date).localeCompare(String(a.first_publication_date)))
      .map((p) => soCampos(p, campos));
  },
  async getByUID(tipo, uid) {
    const post = /^[a-z0-9-]+$/.test(uid) ? await lerBlog(`posts/${uid}.json`) : null;
    if (!post || post.type !== tipo) throw new NotFoundError("Artigo não encontrado", BLOG_FONTE, undefined);
    return post;
  },
});

/**
 * Fetches all blog posts with only the fields used in listings (cards and
 * sidebar), leaving out the full article content, which would bloat the page.
 *
 * @param {ReturnType<typeof createClient>} client - Blog client used to query the posts.
 */
export const getAllBlogPostSummaries = async (client) =>
  (
    await client.getAllByType("blog_post", {
      fetch: [
        "blog_post.title",
        "blog_post.description",
        "blog_post.date",
        "blog_post.cover_image",
      ],
    })
  ).filter((post) => !redirectedBlogUids.has(post.uid)); // Cópias duplicadas redirecionam para o original
