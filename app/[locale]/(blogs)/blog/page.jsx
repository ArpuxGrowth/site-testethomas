import { pageMetadata } from "@/lib/seo";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { createClient, getAllBlogPostSummaries } from "@/prismicio";
import PageHero from "@/components/tb/PageHero";
import BlogList from "@/components/tb/content/BlogList";
import { slimPost } from "@/components/tb/content/blogUtils";
import "@/app/styles/content.css";

// Gera a página de cada idioma no build (atualizada quando o Prismic chama /api/revalidate)
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  return pageMetadata({
    locale,
    path: "/blog",
    title:
      locale === "pt"
        ? "Blog de Cirurgia Plástica Facial | Dr. Thomas Benson"
        : "Facial Plastic Surgery Blog | Dr. Thomas Benson",
    description:
      locale === "pt"
        ? "Artigos do Dr. Thomas Benson, cirurgião plástico em São Paulo, sobre Deep Plane Facelift, blefaroplastia, rinoplastia, rejuvenescimento facial e recuperação."
        : "Articles by Dr. Thomas Benson, plastic surgeon in São Paulo, about Deep Plane Facelift, blepharoplasty, rhinoplasty and facial rejuvenation.",
  });
}

// Posts do Prismic (mesma busca do Blogs2 antigo)
async function BlogPosts() {
  const posts = await getAllBlogPostSummaries(createClient());
  return <BlogList initialBlogs={posts.map(slimPost)} />;
}

function BlogHero({ locale }) {
  const t = useTranslations('Blog');
  return (
    <PageHero
      crumbs={[{ href: "/", label: locale === "en" ? "Home" : "Início" }, { label: "Blog" }]}
      eyebrow={<span role="heading" aria-level={2}>Blog</span>}
      title={t('atext')}
    />
  );
}

export default function MainBlogPage({ params }) {
  // Permite renderização estática com next-intl (sem ler headers da requisição)
  setRequestLocale(params.locale);

  return (
    <main id="main" className="tb-content" aria-label="Blog">
      <BlogHero locale={params.locale} />
      <section className="sec tight blog-sec">
        <div className="wrap">
          <BlogPosts />
        </div>
      </section>
    </main>
  );
}
