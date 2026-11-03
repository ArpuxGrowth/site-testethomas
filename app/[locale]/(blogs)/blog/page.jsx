import { pageMetadata } from "@/lib/seo";
import Footer1 from "@/components/footers/Footer1";


import ParallaxContainer from "@/components/common/ParallaxContainer";

import AnimatedText from "@/components/common/AnimatedText";

import { menuItems2 } from "@/data/menu";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Blogs2 from "@/components/blog/Blogs2";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

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
export default function MainBlogPage({ params }) {
  // Permite renderização estática com next-intl (sem ler headers da requisição)
  setRequestLocale(params.locale);

  const t = useTranslations('Blog');
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems2} defaultButtonColor="black" />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-60 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/blog-bg-1.jpg)",
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h2
                          className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                          data-wow-duration="1.2s"
                        >
                          Blog
                        </h2>
                        <h1 className="hs-title-1 mb-0">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text={t('atext')} />
                          </span>
                        </h1>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            <section className="page-section">
              <Blogs2 />
            </section>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
