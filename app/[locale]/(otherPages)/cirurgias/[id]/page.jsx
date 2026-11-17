import { getTranslations } from 'next-intl/server';

// Metadados: título com "em São Paulo" (termo buscado), canonical, hreflang e Open Graph
export async function generateMetadata({ params }) {
  const t = await getTranslations({ locale: params.locale, namespace: "SurgerieItemPage1" });
  const surgeriesPort = surgeriesItems.find((elm) => elm.url === params.id);
  if (!surgeriesPort) return {};

  const seo = params.locale === "pt" ? surgerySeo[surgeriesPort.url] : null;
  const name = t(`${surgeriesPort.url}.title`);

  return pageMetadata({
    locale: params.locale,
    path: `/cirurgias/${surgeriesPort.url}`,
    title:
      seo?.title ||
      (params.locale === "pt"
        ? `${name} em São Paulo | Dr. Thomas Benson`
        : `${name} in São Paulo, Brazil | Dr. Thomas Benson`),
    description: seo?.description || clampDescription(t(`${surgeriesPort.url}.descr`)),
    image: surgeriesPort.imgSrc,
  });
}

import { surgeriesItems } from "@/data/surgeries";
import PageHero from "@/components/tb/PageHero";
import Faq from "@/components/tb/Faq";
import CtaBand from "@/components/tb/CtaBand";
import ScheduleButton from "@/components/tb/ScheduleButton";
import { ArrowLeft, Arrow } from "@/components/tb/Icons";
import "@/app/styles/surgeries.css";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { createClient, getAllBlogPostSummaries } from "@/prismicio";
import { surgerySeo, postsForSurgery } from "@/data/surgerySeo";
import { surgeryContent, surgeryFaq } from "@/data/surgeryContent";
import {
  pageMetadata,
  clampDescription,
  localizedUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  JsonLd,
  PHYSICIAN_ID,
  SITE_URL,
} from "@/lib/seo";

export default async function SurgerieItemPage1({ params }) {
    const t = await getTranslations({ locale: params.locale, namespace: "SurgerieItemPage1" });
    const surgeriesPort = surgeriesItems.find((elm) => elm.url == params.id);
    // Cirurgia inexistente: 404 (antes mostrava a primeira cirurgia, gerando conteúdo duplicado)
    if (!surgeriesPort) notFound();

    const translatedTitle = t(`${surgeriesPort.url}.title`);
    const translatedDescr = t(`${surgeriesPort.url}.descr`);
    const translatedContent = t.raw(`${surgeriesPort.url}.content`);

    // Artigos do blog sobre esta cirurgia: links internos que reforçam a página para o Google
    const posts = await getAllBlogPostSummaries(createClient()).catch(() => []);
    const relatedPosts = postsForSurgery(surgeriesPort.url, posts);

    const pageUrl = localizedUrl(params.locale, `/cirurgias/${surgeriesPort.url}`);
    const procedureJsonLd = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: translatedTitle,
      description: translatedDescr.replace(/\s+/g, " ").trim(),
      url: pageUrl,
      image: `${SITE_URL}${surgeriesPort.imgSrc}`,
      procedureType: "https://schema.org/SurgicalProcedure",
      performer: { "@id": PHYSICIAN_ID },
    };
    // Conteúdo complementar e FAQ (só em português)
    const extraContent = params.locale === "pt" ? surgeryContent[surgeriesPort.url]?.html : null;
    const faq = params.locale === "pt" ? surgeryFaq(surgeriesPort.url) : [];

    const breadcrumb = breadcrumbJsonLd([
      { name: "Dr. Thomas Benson", url: localizedUrl(params.locale) },
      { name: params.locale === "pt" ? "Cirurgias" : "Surgeries", url: localizedUrl(params.locale, "/cirurgias") },
      { name: translatedTitle, url: pageUrl },
    ]);

    const en = params.locale === "en";
    const face = surgeriesPort.mix === "facials";
    const tItems = await getTranslations({ locale: params.locale, namespace: "surgeriesItems" });
    const sameGroup = surgeriesItems.filter((item) => item.mix === surgeriesPort.mix);

  return (
    <main id="main" className="sg-page">
      <JsonLd data={procedureJsonLd} />
      <JsonLd data={breadcrumb} />
      {faq.length > 0 && <JsonLd data={faqJsonLd(faq)} />}

      <PageHero
        image={surgeriesPort.imgSrc}
        imagePos="50% 35%"
        eyebrow={en ? (face ? "Facial surgery" : "Body surgery") : face ? "Cirurgia facial" : "Cirurgia corporal"}
        title={translatedTitle}
        lead={translatedDescr}
        crumbs={[
          { href: "/", label: "Dr. Thomas Benson" },
          { href: "/cirurgias", label: en ? "Surgeries" : "Cirurgias" },
          { label: translatedTitle },
        ]}
      >
        <div className="sg-hero-act">
          <ScheduleButton />
          <Link href="/cirurgias" className="back clear glass">
            <ArrowLeft width={14} height={14} /> {t("i")}
          </Link>
        </div>
      </PageHero>

      <section className="sec sg-body">
        <div className="wrap">
          <div className="narrow">
            <div className="prose sg-prose" dangerouslySetInnerHTML={{ __html: translatedContent }} />
            {extraContent && (
              <div className="prose sg-prose sg-extra" dangerouslySetInnerHTML={{ __html: extraContent }} />
            )}

            {faq.length > 0 && (
              <div className="sg-faq">
                <h2 className="h2">Perguntas frequentes sobre {translatedTitle}</h2>
                <Faq items={faq.map(({ question, answer }) => ({ q: question, a: answer }))} headingLevel={3} />
              </div>
            )}

            {/* Artigos relacionados (links internos para o blog) */}
            {relatedPosts.length > 0 && (
              <div className="sg-related">
                <h2 className="h2">
                  {params.locale === "pt" ? `Artigos sobre ${translatedTitle}` : `Articles about ${translatedTitle}`}
                </h2>
                <ul className="list-links">
                  {relatedPosts.map((post) => (
                    <li key={post.id}>
                      <Link href={`/blog/${post.uid}`} locale="pt" className="card soft">
                        <span>{post.data.title}</span>
                        <Arrow width={16} height={16} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Todas as cirurgias da mesma categoria (a atual fica marcada) */}
            <nav className="sg-nav" aria-label={en ? (face ? "Facial surgeries" : "Body surgeries") : face ? "Cirurgias faciais" : "Cirurgias corporais"}>
              <p className="eyebrow">{en ? (face ? "Facial surgeries" : "Body surgeries") : face ? "Cirurgias faciais" : "Cirurgias corporais"}</p>
              <ul className="chips">
                {sameGroup.map((item) => (
                  <li key={item.url}>
                    <Link
                      href={`/cirurgias/${item.url}`}
                      className="chip glass"
                      aria-current={item.url === surgeriesPort.url ? "page" : undefined}
                    >
                      {tItems(`${item.id}.title`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <CtaBand text={t("p")} />
    </main>
  );
}
