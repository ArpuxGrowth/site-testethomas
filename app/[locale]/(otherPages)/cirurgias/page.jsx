import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import AnimatedText from "@/components/common/AnimatedText";
import { menuItems2 } from "@/data/menu";
import SurgeriesPortfolio from "@/components/portfolio/SurgeriesPortfolio";
import Header1Multipage from "@/components/headers/Header1Multipage";
import ScheduleButton from "@/components/buttons/ScheduleButton";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata() {
  const tr = await getTranslations('Surgeries.metadata');
  
  return {
    title: tr('title'),
    description: tr('description')
  };
}
export default function SurgeriesPage() {
  const t = useTranslations('Surgeries');
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">

          {/* Menu */}
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems2} defaultButtonColor="black" />
          </nav>
          {/* End Menu */}

          <main id="main">

            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-60 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/surgeries-bg-1.jpg)",
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
                          {t('h2')}
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

            <>

              {/* Section */}
              <section className="page-section">
                <SurgeriesPortfolio />
              </section>
              {/* End Section */
              }
            </>

            {/* Divider */}
            <hr className="mt-0 mb-0" />

            <section
              className="page-section">
              <div className="container position-relative">
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

          </main>

          <Footer1 />

        </div>{" "}
      </div>
    </>
  );
}
