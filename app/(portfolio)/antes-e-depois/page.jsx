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
import BeforeAfterMassonry from "@/components/portfolio/BeforeAfterMassonry";
import VideoTestimonials2 from "@/components/homes/home-1-1/VideoTestimonials";
import Team from "@/components/homes/home-1/Team";
import ScheduleButton from "@/components/buttons/ScheduleButton";

export const metadata = {
  title:
    "Antes e Depois || Dr. Thomas Benson",
  description:
    "Veja os resultados transformadores dos procedimentos realizados pelo Dr. Thomas Benson. Rejuvenescimento facial com precisão, cicatrizes imperceptíveis e depoimentos de pacientes satisfeitos com resultados naturais e harmoniosos.",
};
export default function BeforeAfterPage() {
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
                    "url(/assets/images/full-width-images/thomas-bg-1.jpg)",
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
                          Antes e Depois
                        </h2>
                        <h1 className="hs-title-1 mb-0">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Resultados que refletem excelência e precisão." />
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
              <section
                className="page-section  scrollSpysection"
                id="Videotestimonial"
              >
                <VideoTestimonials2 />
              </section>
              
              {/* Section */}
              <section id="results" className="page-section">
                <BeforeAfterMassonry />
              </section>
              {/* End Section */}
            </>

            <section
              className="page-section  scrollSpysection dark-content bg-gray-light-1"
              id="team"
            >
              <Team />
            </section>
            
            {/* Divider */}
            <hr className="mt-0 mb-80 mb-sm-40" />
            {/* End Divider */}
      
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
