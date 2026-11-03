import Footer1 from "@/components/footers/Footer1";

import { getTranslations } from 'next-intl/server';

import ParallaxContainer from "@/components/common/ParallaxContainer";

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

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { menuItems2 } from "@/data/menu";
import { surgeriesItems } from "@/data/surgeries";
import ScheduleButton from "@/components/buttons/ScheduleButton";
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

  return (
    <>
      <div className="theme-main">
        <div className="page " id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems2} defaultButtonColor="black" />
          </nav>
          <JsonLd data={procedureJsonLd} />
          <JsonLd data={breadcrumb} />
          {faq.length > 0 && <JsonLd data={faqJsonLd(faq)} />}
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-80 parallax-5"
                style={{
                  backgroundImage:
                    `url(${surgeriesPort.imgSrc})`,
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <div className="mb-20">
                          <Link
                            href="/cirurgias"
                            className="btn btn-mod btn-small btn-border btn-circle"
                            data-btn-animate="y"
                          >
                            <i className="mi-arrow-left align-center size-18" />{" "}
                            {t('i')}
                          </Link>
                        </div>
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text={translatedTitle} />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-title-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s"
                            >
                              {translatedDescr}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>

            {/* Section */}
            <section className="page-section">
              <div className="container position-relative">
                {<div
                    dangerouslySetInnerHTML={{ __html: translatedContent }}
                />}
              </div>
            </section>
            {/* End Section */}

            {extraContent && (
              <section className="page-section pt-0">
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-lg-10" dangerouslySetInnerHTML={{ __html: extraContent }} />
                  </div>
                </div>
              </section>
            )}

            {faq.length > 0 && (
              <section className="page-section pt-0">
                <div className="container position-relative">
                  <h2 className="mb-30">Perguntas frequentes sobre {translatedTitle}</h2>
                  <div className="row">
                    <div className="col-lg-10">
                      {faq.map(({ question, answer }) => (
                        <div key={question} className="mb-30">
                          <h3 className="h5 mb-10">{question}</h3>
                          <p className="mb-0">{answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Artigos relacionados (links internos para o blog) */}
            {relatedPosts.length > 0 && (
              <section className="page-section pt-0">
                <div className="container position-relative">
                  <h2 className="h3 mb-30">
                    {params.locale === "pt" ? `Artigos sobre ${translatedTitle}` : `Articles about ${translatedTitle}`}
                  </h2>
                  <ul className="list-unstyled mb-0">
                    {relatedPosts.map((post) => (
                      <li key={post.id} className="mb-10">
                        <Link href={`/blog/${post.uid}`} locale="pt">
                          {post.data.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Divider */}
            <hr className="mt-0 mb-0" />
            {/* End Divider */}

            {/* Section */}
            <section className="page-section">
            <div className="container relative">
                <div className="row text-center wow fadeInUp">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <p className="section-descr mb-50 mb-sm-30">
                    {t('p')}
                    </p>
                    <div className="local-scroll">
                    <ScheduleButton />
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* End Section */}

          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
