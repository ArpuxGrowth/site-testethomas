import Benefits from "@/components/homes/home-1/Benefits";
import Contact from "@/components/homes/home-1/Contact";

import Facts from "@/components/homes/home-1/Facts";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1-1/Service";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Testimonials2 from "./Teatimonials2";
import dynamic from "next/dynamic";
import Image from "next/image";
import VideoTestimonials2 from "./VideoTestimonials";
import Portfolio2 from "../home-2/Portfolio2";
import Split from "./Split";
import { featuresListData } from "@/data/features";
import { features2 } from "@/data/features";
import Faq2 from "@/components/common/Faq2";
import ScheduleButton from "@/components/buttons/ScheduleButton";
import { useTranslations } from "next-intl";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export default function Home11({ onePage = false}) {

  const t = useTranslations('Home');

  const featureKeys = ['excellence', 'technology', 'care', 'safety'];

  return (
    <>

      <section
        className={`page-section pb-0`}
      >
        <div id="about" className="container position-relative">
          <div className="row">
            {/* Text */}
            <div className="col-lg-5 d-flex align-items-center">
              <div
                className="wow fadeInUp"
                data-wow-duration="1.2s"
                data-wow-offset={255}
              >
                <h2 className="section-title mb-50 mb-sm-20">{t('abouth2')}</h2>
                <div dangerouslySetInnerHTML={{__html: t.raw('aboutp')}} style={{marginBottom: '1.5em'}} />
                {/* <Faq /> */}
                <div className="local-scroll">
                  <ScheduleButton />
                </div>
              </div>
            </div>
            {/* End Text */}
            {/* Images */}
            <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">
              <div className="call-action-2-images">
                <div className="call-action-2-image-2">
                  <Image
                    width={810}
                    height={512}
                    src="/assets/images/promo-thomas4.jpg"
                    alt="Dr. Thomas Benson em seu consultório"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={134}
                  />
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
          </div>
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
        className={`page-section  scrollSpysection bg-gray-light-1`}
        id="Videotestimonial"
      >
        <VideoTestimonials2 />
      </section>

      <section
        className={`page-section  scrollSpysection`}
        id="services"
      >
        {" "}
        <Service />
      </section>

      <section className="pt-30">
        <div id="paddingRightContainer" className="container" />
        <div className="row g-0 pb-155p">
          <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
            <div
              id="paddingRight"
              className={`split-column-right bg-dark-1 light-content position-relative d-flex align-items-center`}
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              {/* Decorative Dots */}
              <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
                <Image
                  width={192}
                  height={222}
                  src="/assets/images/demo-strong/decoration.svg"
                  alt="Decoração"
                />
              </div>
              {/* End Decorative Dots */}
              <div>
                <h2 className="section-title mb-30">
                  {t('clinicah2')}
                </h2>
                <p className="mb-50">
                  {t('clinicap')}
                </p>
                {/* Features List */}
                <div className="row mt-n20">
                  {/* Features List Item */}
                  {featureKeys.map((key, index) => (
                    <div
                      key={index}
                      className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20"
                    >
                      <div className="features-list-icon">
                        <i className="mi-check" />
                      </div>
                      <div className="features-list-text">
                        {t(`features.${key}`)}
                      </div>
                    </div>
                  ))}
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
            <div className="split-image-left pb-155p">
              <Image
                width={1100}
                height={930}
                src="/assets/images/demo-strong/split-clinica-2.jpg"
                alt="Consultório médico particular do Dr. Thomas Benson, em São Paulo"
              />
            </div>
          </div>
        </div>{" "}
        <Split />
      </section>

        <div className="page-section bg-gray-light-1">
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-4 mb-md-60 mb-xs-50">
                <h2 className="section-title mb-20 wow fadeInUp">
                  {t('ct1h2')}
                </h2>
                <p
                  className="section-descr mb-40 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  {t('ct1p')}
                </p>
                <div className="local-scroll wow fadeInUp" data-wow-delay="0.2s">
                  <ScheduleButton className="btn-w"/>
                </div>
              </div>{" "}
              <Facts />
            </div>
          </div>
        </div>
        
      <section
        className={`page-section  scrollSpysection`}
        id="portfolio"
      >
        <Portfolio2 />
      </section>

      <hr className={`mt-0 mb-0`} />

      <section
        className={`page-section`}
      >
        <Promo />{" "}
      </section>

      <hr className={`mt-0 mb-0`} />

      <section
        className="page-section bg-scroll light-content"
        style={{
          backgroundImage:
            "url(/assets/images/demo-gradient/section-hospital.jpg)",
        }}
      >
        <div className="bg-overlay bg-gradient-dark-alpha-2 d-none d-md-block" />
        {/* End Desktop Overlay */}
        {/* Mobile Overlay */}
        <div className="bg-overlay bg-dark-1 opacity-09 d-md-none" />
        {/* End Mobile Overlay */}
        <div className="container position-relative">
          <div className="row wow fadeInUp">
            <div className="col-md-7 offset-md-5 col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
              <h2 className="section-title mb-40 mb-sm-30">
                {t('hosph2')}
              </h2>
              <p className="mb-50 mb-sm-40">
                {t('hospp')}
              </p>
              <div className="local-scroll mb-70 mb-sm-50">
                <ScheduleButton className="btn-w" />
              </div>
              {/* Features List */}
              <div className="row mt-n10">
                {/* Features List Item */}
                {features2.map((elm, i) => {
                  const translatedItem = t.raw(`features2.${elm.id}`);
                  return (
                    <div key={i} className="col-lg-6 d-flex mt-10">
                      <div className="features-list-icon ">
                        <i className="mi-check" />
                      </div>
                      <div className="features-list-text">{translatedItem.text}</div>
                    </div>
                  )
                })}
                {/* End Features List Item */}
              </div>
              {/* End Features List */}
            </div>
          </div>
        </div>
      </section>

        {/* FAQ Section */}
        <section className="page-section z-index-1">
          <div className="container position-relative">
            <div className="row position-relative">
              <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                <h3 className="section-title mb-30">
                  {t('faqh3')}
                </h3>
              </div>
              <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                {/* Accordion */}
                <Faq2 />
                {/* End Accordion */}
              </div>
            </div>
          </div>
        </section>
        {/* End FAQ Section */}

      <hr className={`mt-0 mb-0`} />

      <section
        className={`page-section bg-gray-light-1`}
      >
        <div className="container position-relative">
          <div className="row text-center wow fadeInUp">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <p className="section-descr mb-50 mb-sm-30">
                {t('sectionp')}
              </p>
              <div className="local-scroll">
                <ScheduleButton />
              </div>
            </div>
          </div>
        </div>
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
        className={`page-section  scrollSpysection`}
        id="contact"
      >
        <Contact />{" "}
      </section>
    </>
  );
}
