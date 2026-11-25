import { notFound } from "next/navigation";
import BlogSidebar from "@/components/tb/content/BlogSidebar";
import { slimPost } from "@/components/tb/content/blogUtils";
import PageHero from "@/components/tb/PageHero";
import CtaBand from "@/components/tb/CtaBand";
import { ArrowLeft, Arrow } from "@/components/tb/Icons";
import "@/app/styles/content.css";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createClient, getAllBlogPostSummaries } from "@/prismicio";
import { asHTML, asText } from "@prismicio/client";
import ScheduleButton from "@/components/tb/ScheduleButton";
import { surgeryForPost, postsForSurgery } from "@/data/surgerySeo";
import { surgeriesItems } from "@/data/surgeries";
import {
  pageMetadata,
  clampDescription,
  localizedUrl,
  breadcrumbJsonLd,
  extractFaq,
  faqJsonLd,
  JsonLd,
  PHYSICIAN_ID,
  SITE_NAME,
} from "@/lib/seo";

// Nenhum artigo é gerado no build: cada um é gerado no primeiro acesso e fica em cache
// (atualizado quando o portal da Arpux chama /api/revalidate ao publicar)
export function generateStaticParams() {
  return [];
}

// O cliente do blog lança erro quando o UID não existe: nesse caso a página vira 404
async function getPost(slug) {
  return createClient()
    .getByUID("blog_post", slug)
    .catch(() => null);
}

const BRAND = " | Dr. Thomas Benson";

// Os posts só existem em português: a versão /en aponta o canonical para a /pt e fica fora do índice
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Artigo não encontrado",
      description: "O artigo solicitado não foi encontrado.",
    };
  }

  const { title, description, cover_image } = post.data;
  return pageMetadata({
    locale: params.locale,
    path: `/blog/${post.uid}`,
    // Acrescenta a marca só quando o título ainda cabe no resultado do Google (~60 caracteres)
    title: title && title.length + BRAND.length <= 60 ? `${title}${BRAND}` : title || `Blog${BRAND}`,
    description: clampDescription(
      description ||
        "Acompanhe o blog do Dr. Thomas Benson e explore artigos sobre cirurgia plástica facial, rejuvenescimento e as mais avançadas técnicas estéticas."
    ),
    image: cover_image?.url,
    type: "article",
    ptOnly: true,
    noindex: params.locale !== "pt",
  });
}

// Função Server-side
export default async function BlogPostPage({ params }) {
  // Permite renderização estática com next-intl (sem ler headers da requisição)
  setRequestLocale(params.locale);

  const post = await getPost(params.slug);
  if (!post) {
    notFound();
  }

  const posts = await getAllBlogPostSummaries(createClient());

  const title = post.data.title;
  const date = post.data.date || post.first_publication_date?.slice(0, 10);
  const cover_image = post.data.cover_image?.url;
  // Títulos "Heading 1" dentro do texto viram <h2>: a página fica com um único <h1> (o título do post)
  const content = asHTML(post.data.content, {
    serializer: { heading1: ({ children }) => `<h2>${children}</h2>` },
  });

  // Cirurgia relacionada ao post e outros artigos do mesmo tema (links internos)
  const surgeryUrl = surgeryForPost(title);
  const surgery = surgeriesItems.find((item) => item.url === surgeryUrl);
  const relatedPosts = surgeryUrl
    ? postsForSurgery(surgeryUrl, posts.filter((p) => p.id !== post.id && p.data.title !== title), 3)
    : [];

  const postUrl = localizedUrl("pt", `/blog/${post.uid}`);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: post.data.description,
    image: cover_image,
    datePublished: post.data.date || post.first_publication_date,
    dateModified: post.last_publication_date,
    inLanguage: "pt-BR",
    mainEntityOfPage: postUrl,
    wordCount: asText(post.data.content).split(/\s+/).length,
    author: {
      "@type": "Person",
      name: "Thomas Benson",
      jobTitle: "Cirurgião Plástico",
      url: localizedUrl("pt", "/dr-thomas"),
    },
    publisher: { "@id": PHYSICIAN_ID, name: SITE_NAME },
  };
  const breadcrumb = breadcrumbJsonLd([
    { name: SITE_NAME, url: localizedUrl("pt") },
    { name: "Blog", url: localizedUrl("pt", "/blog") },
    { name: title, url: postUrl },
  ]);
  const faq = extractFaq(post.data.content);

  const t = await getTranslations('BlogSlug');

  const en = params.locale === "en";

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumb} />
      {faq.length > 0 && <JsonLd data={faqJsonLd(faq)} />}
      <main id="main" className="tb-content">
        <PageHero
          crumbs={[
            { href: "/", label: en ? "Home" : "Início" },
            { href: "/blog", label: "Blog" },
            { href: `/blog/${post.uid}`, label: title },
          ]}
          title={title}
        >
          <div className="post-meta">
            <span>
              <span className="vh">Data:</span>
              <time dateTime={date}>{date}</time>
            </span>
            <span aria-hidden="true">·</span>
            <Link href="/dr-thomas">
              <span className="vh">Autor:</span> Dr. Thomas Benson
            </Link>
          </div>
          <div className="press-back">
            <Link href="/blog" className="btn clear">
              <ArrowLeft width={16} height={16} /> {t('i')}
            </Link>
          </div>
        </PageHero>

        {/* Conteúdo do Post */}
        <section className="sec tight post-sec">
          <div className="wrap post-layout">
            <div className="post-main">
              <article className="card soft box post-article">
                {cover_image && (
                  <img
                    className="post-cover"
                    src={cover_image}
                    width={1350}
                    height={865}
                    alt={post.data.cover_image?.alt || title}
                    fetchPriority="high"
                  />
                )}
                <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
              </article>

              {/* Cirurgia relacionada: leva o leitor (e o Google) para a página do procedimento */}
              {surgery && (
                <aside className="card soft box post-surgery">
                  <p className="eyebrow">{en ? "Related surgery" : "Cirurgia relacionada"}</p>
                  <h2 className="h2">
                    {surgery.title} em São Paulo com o Dr. Thomas Benson
                  </h2>
                  <p className="body">
                    Conheça a técnica, as indicações e a recuperação na página da{" "}
                    <Link href={`/cirurgias/${surgery.url}`} locale="pt">
                      cirurgia de {surgery.title}
                    </Link>
                    .
                  </p>
                  <ScheduleButton trackingLocation="content" />
                </aside>
              )}

              {relatedPosts.length > 0 && (
                <nav aria-label="Artigos relacionados" className="post-related">
                  <h2 className="h2">Leia também</h2>
                  <ul className="list-links">
                    {relatedPosts.map((related) => (
                      <li key={related.id}>
                        <Link href={`/blog/${related.uid}`} locale="pt" className="card soft">
                          <span>{related.data.title}</span>
                          <Arrow width={16} height={16} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
            <aside className="post-side" aria-label={en ? "Blog sidebar" : "Barra lateral do blog"}>
              <BlogSidebar posts={posts.map(slimPost)} />
            </aside>
          </div>
        </section>

        <CtaBand
          text={en ? "Schedule your appointment now with Dr. Thomas Benson." : "Agende agora mesmo seu horário com o Dr. Thomas Benson."}
          trackingLocation="content"
        />
      </main>
    </>
  );
}
