import Footer1 from "@/components/footers/Footer1";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { menuItems2 } from "@/data/menu";
import Home1 from "@/components/homes/home-1";
export const metadata = {
  title:
    "Sobre || Dr. Thomas Benson",
  description:
    "Saiba mais sobre o Dr. Thomas Benson, PhD em cirurgia plástica, único brasileiro reconhecido pelo Conselho Europeu de Cirurgia Plástica e pela Sociedade Alemã de Cirurgia Plástica. Autor do best-seller 'A Beleza da Face' e referência em técnicas avançadas como o Deep Plane Facelift.",
};
export default function About2() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset">
            <Header1Multipage links={menuItems2} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-dark-alpha-50 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/dr-thomas4.jpg)",
                }}
              >
                <div className="container position-relative pt-50 pb-100 pb-sm-20">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h2
                          className="section-caption-border white mb-30 mb-xs-20 wow fadeInUp"
                          data-wow-duration="1.2s"
                        >
                          Sobre
                        </h2>
                        <h1 className="hs-title-1 white mb-30">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Dr. Thomas Benson." />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-lg-10 offset-lg-1">
                            <p
                              className="section-descr-2 mb-0 wow fadeInUp"
                              data-wow-delay="0.6s"
                              data-wow-duration="1.2s"
                            >
                              Especialista em cirurgias faciais, é o único brasileiro 
                              com título de especialização do Conselho Europeu de Cirurgia 
                              Plástica e da Sociedade Alemã de Cirurgia Plástica.
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
            <Home1 />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}