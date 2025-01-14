import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

// Gerar metadados dinamicamente com base no `params`
export async function generateMetadata({ params }) {
    const surgeriesPort =
      surgeriesItems.filter((elm) => elm.url === params.id)[0] || surgeriesItems[0];
  
    return {
      title: `${surgeriesPort.title} || Dr. Thomas Benson`,
      description: `${surgeriesPort.descr}` || "Conheça as cirurgias realizadas pelo Dr. Thomas Benson.",
    };
  }

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { menuItems2 } from "@/data/menu";
import { surgeriesItems } from "@/data/surgeries";
import ScheduleButton from "@/components/buttons/ScheduleButton";

export default function SurgerieItemPage1({ params }) {
    const surgeriesPort =
    surgeriesItems.filter((elm) => elm.url == params.id)[0] || surgeriesItems[0];
  return (
    <>
      <div className="theme-main">
        <div className="page " id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems2} defaultButtonColor="black" />
          </nav>
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
                          <a
                            href="/surgeries"
                            className="btn btn-mod btn-small btn-border btn-circle"
                            data-btn-animate="y"
                          >
                            <i className="mi-arrow-left align-center size-18" />{" "}
                            Voltar para a página de cirurgias
                          </a>
                        </div>
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text={surgeriesPort.title} />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-title-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s"
                            >
                              {surgeriesPort.descr}
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
                    dangerouslySetInnerHTML={{ __html: surgeriesPort.content }}
                />}
              </div>
            </section>
            {/* End Section */}

            {/* Divider */}
            <hr className="mt-0 mb-0" />
            {/* End Divider */}

            {/* Section */}
            <section className="page-section">
            <div className="container relative">
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
            {/* End Section */}

          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
