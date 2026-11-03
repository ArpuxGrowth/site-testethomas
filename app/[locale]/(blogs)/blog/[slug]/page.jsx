import { notFound } from "next/navigation";
import Image from "next/image";
import Footer1 from "@/components/footers/Footer1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems2 } from "@/data/menu";
import BlogWidget2 from "@/components/blog/widgets/BlogWidget2";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createClient, getAllBlogPostSummaries } from "@/prismicio";
import { asHTML, asText } from "@prismicio/client";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import ScheduleButton from "@/components/buttons/ScheduleButton";
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
// (atualizado quando o Prismic chama /api/revalidate)
export function generateStaticParams() {
  return [];
}

// O Prismic lança erro quando o UID não existe: nesse caso a página vira 404
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
  const content = asHTML(post.data.content);

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

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumb} />
      {faq.length > 0 && <JsonLd data={faqJsonLd(faq)} />}
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems2} defaultButtonColor="black" />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage: `url(${cover_image})`,
                }}
              >
                {/* Section Content */}
                <div className="container position-relative pt-30 pt-sm-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <div className="mb-20">
                          <Link
                            href="/blog"
                            className="btn btn-mod btn-small btn-border btn-circle"
                            data-btn-animate="y"
                          >
                            <i className="mi-arrow-left align-center size-18" />{" "}
                            {t('i')}
                          </Link>
                        </div>
                        <h1 className="hs-title-1 mb-20">{title}</h1>
                        <div
                          className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="d-inline-block me-3">
                            <i className="mi-clock size-16"></i>
                            <span className="visually-hidden">Data:</span>{" "}
                            <time dateTime={date}>{date}</time>
                          </div>
                          <div className="d-inline-block me-3">
                            <Link href="/dr-thomas">
                              <i className="mi-user size-16"></i>
                              <span className="visually-hidden">Autor:</span> Dr. Thomas Benson
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
            </section>

            {/* Conteúdo do Post */}
            <section className="page-section">
              <div className="container relative">
                <div className="row">
                  <div className="col-md-8 mb-sm-80">
                    <article className="blog-item mb-80 mb-xs-40">
                      <div className="blog-item-body">
                        <div className="blog-media mb-40 mb-xs-30">
                          <Image
                            src={cover_image}
                            width={1350}
                            height={865}
                            alt={post.data.cover_image?.alt || title}
                          />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                      </div>
                    </article>

                    {/* Cirurgia relacionada: leva o leitor (e o Google) para a página do procedimento */}
                    {surgery && (
                      <aside className="bg-gray-light-1 round p-4 mb-40">
                        <h2 className="h4 mb-10">
                          {surgery.title} em São Paulo com o Dr. Thomas Benson
                        </h2>
                        <p className="mb-20">
                          Conheça a técnica, as indicações e a recuperação na página da{" "}
                          <Link href={`/cirurgias/${surgery.url}`} locale="pt">
                            cirurgia de {surgery.title}
                          </Link>
                          .
                        </p>
                        <ScheduleButton />
                      </aside>
                    )}

                    {relatedPosts.length > 0 && (
                      <nav aria-label="Artigos relacionados">
                        <h2 className="h4 mb-20">Leia também</h2>
                        <ul className="list-unstyled">
                          {relatedPosts.map((related) => (
                            <li key={related.id} className="mb-10">
                              <Link href={`/blog/${related.uid}`} locale="pt">
                                {related.data.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    )}
                  </div>
                  <div className="col-md-4 col-lg-3 offset-lg-1">
                    <BlogWidget2 posts={posts} searchInputClass="form-control input-lg search-field round" />
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}
