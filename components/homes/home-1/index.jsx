import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Contact from "@/components/homes/home-1/Contact";

import Facts from "@/components/homes/home-1/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Testimonials from "@/components/homes/home-1/Testimonials";
import dynamic from "next/dynamic";
import Image from "next/image";
import Portfolio2 from "../home-2/Portfolio2";
import VideoContainer from "./VideoContainer";
import ScheduleButton from "@/components/buttons/ScheduleButton";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export default function Home1({ onePage = false }) {
  return (
    <>
      <section
        className={`page-section scrollSpysection pb-0`}
        id="about"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              <h2 className="section-caption mb-xs-10">Nossa História</h2>
              <h3 className="section-title mb-0">
                <AnimatedText text="O caminho da excelência." />
              </h3>
            </div>
            <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
              {/* Decorative Dots */}
              <div
                className="decoration-2 d-none d-md-block"
                data-rellax-y=""
                data-rellax-speed="0.7"
                data-rellax-percentage="-0.2"
              >
                <Image
                  width="103"
                  height="223"
                  src="/assets/images/decoration-2.svg"
                  alt="Decoração"
                />
              </div>
              {/* End Decorative Dots */}
            </div>
          </div>
          <About />
        </div>
      </section>

      <section className="page-section container p-0">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/assets/images/full-width-images/titulos-thomas3-mobile.jpeg"
          />
          <source
            media="(min-width: 769px)"
            srcSet="/assets/images/full-width-images/titulos-thomas3.jpg"
          />
          <img
            src="/assets/images/full-width-images/titulos-thomas3.jpg"
            alt="Títulos do Dr. Thomas Benson"
            width="1920"
            height="500"
          />
        </picture>
      </section>

      <section
        className={`page-section pt-0`}
      >
        <div className="container position-relative">
          <div className="row">
            {/* Images */}
            <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">
              <div className="call-action-2-images">
                <div className="call-action-2-image-2">
                  <Image
                    width={810}
                    height={512}
                    src="/assets/images/thomas-links.png"
                    alt="Dr. Thomas Benson é 5 estrelas"
                    className="wow scaleOutIn ps-3"
                    data-wow-duration="1.2s"
                    data-wow-offset={134}
                  />
                  <Image
                    width={810}
                    height={512}
                    src="/assets/images/promo-thomas3.jpg"
                    alt="Dr. Thomas Benson no Jardim"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={134}
                  />
                </div>
              </div>
            </div>
            {/* End Images */}
            {/* Text */}
            <div className="col-lg-5 d-flex align-items-center">
              <div
                className="wow fadeInUp"
                data-wow-duration="1.2s"
                data-wow-offset={255}
              >
                <h2 className="section-title mb-50 mb-sm-20">Uma carreira marcada pela excelência.</h2>
                <Faq />
                <div className="local-scroll">
                  <ScheduleButton />
                </div>
              </div>
            </div>
            {/* End Text */}
          </div>
        </div>
      </section>

      <section
        className={`page-section  scrollSpysection bg-gray-light-2`}
        id="services"
      >
        {" "}
        <Service />
      </section>

      <section className="page-section container p-0 pt-5">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/assets/images/full-width-images/titulos-thomas3-mobile.jpeg"
          />
          <source
            media="(min-width: 769px)"
            srcSet="/assets/images/full-width-images/titulos-thomas3.jpg"
          />
          <img
            src="/assets/images/full-width-images/titulos-thomas3.jpg"
            alt="Títulos do Dr. Thomas Benson"
            width="1920"
            height="500"
          />
        </picture>
      </section>

        <div className="page-section bg-gray-light-2">
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-4 mb-md-60 mb-xs-50">
                <h2 className="section-title mb-20 wow fadeInUp">
                  Somos uma das poucas equipes exclusivas que operam face todos os dias.
                </h2>
                <p
                  className="section-descr mb-40 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  A excelência vem através da repetição prática diária.
                </p>
                <div className="local-scroll wow fadeInUp" data-wow-delay="0.2s">
                  <ScheduleButton className="btn-w" />
                </div>
              </div>{" "}
              <Facts />
            </div>
          </div>
        </div>
        
      <section
        className={`page-section  scrollSpysection`}
        id="pressnews"
      >
        <Portfolio2 />
      </section>

      <hr className={`mt-0 mb-0`} />

      <section
        className={`page-section  scrollSpysection bg-gray-light-2`}
        id="portfolio"
      >
        <Portfolio />
      </section>

      <hr className={`mt-0 mb-0`} />

      <section
        className={`page-section`}
      >
        <div className="container position-relative">
          <div className="row text-center wow fadeInUp">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <p className="section-descr mb-50 mb-sm-30">
                Pioneirismo, exclusividade e uma carreira marcada pela excelência e dedicação.
                O Dr. Thomas Benson é um dos maiores especialistas em rejuvenescimento facial.
              </p>
              <div className="local-scroll">
                <ScheduleButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`page-section  scrollSpysection dark-content bg-gray-light-2`}
        id="videocontainer"
      >
        <VideoContainer />
      </section>

      <hr className={`mt-0 mb-0`} />

      <section
        className={`page-section`}
      >
        <Benefits />{" "}
      </section>

      <section
        className={`page-section pt-0 pb-0`}
      >
        <Testimonials />
      </section>
      
      <hr className={`mt-0 mb-0`} />

      <section
        className={`page-section`}
      >
        <Promo />{" "}
      </section>

      <hr className={`mt-0 mb-0`} />

      <section
        className={`page-section  scrollSpysection`}
        id="contact"
      >
        <Contact />{" "}
      </section>
    </>
  );
}
