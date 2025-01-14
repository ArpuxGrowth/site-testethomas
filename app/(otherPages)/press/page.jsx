import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import AnimatedText from "@/components/common/AnimatedText";

import React from "react";

import Gallery2 from "@/components/gallery/Gallery2";
import { menuItems2 } from "@/data/menu";
import Header1Multipage from "@/components/headers/Header1Multipage";
import ScheduleButton from "@/components/buttons/ScheduleButton";
export const metadata = {
  title:
    "Imprensa || Dr. Thomas Benson",
  description:
    "Veja as aparições do Dr. Thomas Benson na mídia como referência em cirurgia plástica facial. Destaque em jornais, revistas, programas de TV e séries documentais, incluindo 'O Hospital', da Record.",
};
export default function PressPage() {
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
                className="page-section bg-gray-light-1 bg-light-alpha-70 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/thomas-bg-5.jpg)",
                }}
              >
                <>
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                  <div className="container position-relative pt-50">
                    {/* Section Content */}
                    <div className="text-center">
                      <div className="row">
                        {/* Page Title */}
                        <div className="col-md-8 offset-md-2">
                          <h2
                            className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                            data-wow-duration="1.2s"
                          >
                            Imprensa
                          </h2>
                          <h1 className="hs-title-1 mb-0">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              <AnimatedText text="Dr. Thomas Benson na mídia: referência em cirurgia plástica." />
                            </span>
                          </h1>
                        </div>
                        {/* End Page Title */}
                      </div>
                    </div>
                    {/* End Section Content */}
                  </div>
                </>
              </ParallaxContainer>
            </section>
            <>
              <>
                {/* Section */}
                <section className="page-section pt-0">
                  <Gallery2 parantClass="col-md-4" />
                </section>
                {/* End Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0" />
              </>

              {/* End Divider */}
              {/* Call Action Section */}
              <section className="page-section">
                <div className="container position-relative">
                  <div className="row wow fadeInUp">
                    <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 text-md-start mb-sm-30">
                      <p className="section-descr mb-0">
                        Agende agora mesmo seu horário com o <br/>Dr. Thomas Benson.
                      </p>
                    </div>
                    <div className="col-md-4 col-lg-3 text-md-end">
                      <div className="local-scroll">
                        <ScheduleButton />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
