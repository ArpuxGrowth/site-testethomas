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

export const metadata = {
  title:
    "Cirurgias || Dr. Thomas Benson",
  description:
    "Conheça as cirurgias realizadas pelo Dr. Thomas Benson, incluindo técnicas avançadas, cuidados pré e pós-operatórios, e procedimentos personalizados para resultados naturais, seguros, com cicatrizes finas e imperceptíveis.",
};
export default function SurgeriesPage() {
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
                          Cirurgias
                        </h2>
                        <h1 className="hs-title-1 mb-0">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Conheça as cirurgias realizadas pelo Dr. Thomas Benson." />
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
                      Agende agora mesmo seu horário com o Dr. Thomas Benson.
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
