import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";
const onePage = false;
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import { progressData } from "@/data/skills";
import { menuItems2 } from "@/data/menu";
import Testimonials from "@/components/homes/home-10/Testimonials";
import Brands from "@/components/homes/home-1-1/Brands";
import ScheduleButton from "@/components/buttons/ScheduleButton";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata() {
  const tr = await getTranslations('patientsAbroad.metadata');
  
  return {
    title: tr('title'),
    description: tr('description')
  };
}
export default function PatientsAbroadPage() {
  const t = useTranslations('patientsAbroad');
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems2} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/page-patientsab-bg-7.jpg)",
                }}
              >
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
                          {t('h2')}
                        </h2>
                        <h1 className="hs-title-1 mb-40">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text={t('atext')} />
                          </span>
                        </h1>
                        {/* Feature List */}
                        <div
                          className="mt-n10 wow fadeInUp"
                          data-wow-delay="0.6s"
                          data-wow-duration="1.2s"
                        >
                          {/* Features List Item */}
                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              Based in São Paulo
                            </div>
                          </div>
                          {/* End Features List Item */}
                          {/* Features List Item */}
                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              20+ Years Experience
                            </div>
                          </div>
                          {/* End Features List Item */}
                          {/* Features List Item */}
                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              5700+ Surgeries Performed
                            </div>
                          </div>
                          {/* End Features List Item */}
                        </div>
                        {/* End Feature List */}
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            <section className="page-section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5 mb-xs-50">
                    <div className="call-action-3-images">
                      <div className="call-action-3-image-1">
                        <Image
                          src="/assets/images/demo-strong/section-image-6.jpg"
                          alt="Dr. Thomas Benson é fenômeno global"
                          width={672}
                          height={659}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-7 col-xl-6 offset-xl-1 mt-n10">
                    <div className="wow linesAnimIn" data-splitting="lines">
                      <p className="lead mt-0 mb-40">
                        {t('p1')}
                      </p>
                      <p className="text-gray mb-40">
                        {t('p2')}
                      </p>
                    </div>
                    <div
                      className="local-scroll wow fadeInUp"
                      data-wow-offset={0}
                    >
                      <ScheduleButton />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="page-section bg-gray-light-2 overflow-hidden">
              <div className="container">
                {/* Testimonials Carousel */}
                <Testimonials />
                {/* End Testimonials Carousel */}
              </div>
            </section>
            {/* End Testimonials Section */}

            <section className="page-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 mb-md-50 mb-xs-30">
                    <div
                      className="lead-alt wow linesAnimIn"
                      data-wow-offset={0}
                      data-splitting="lines"
                    >
                      {t('div')}
                    </div>
                  </div>
                  <div
                    className="col-lg-8 wow linesAnimIn"
                    data-wow-offset={0}
                    data-splitting="lines"
                  >
                    <p className="mb-0">
                      {t('p3')}
                    </p>
                  </div>
                </div>

                {/* Images */}
                <section className="page-section">
                  <div className="container d-flex justify-content-center">
                    <div className="row">
                      {/* Primeira Imagem */}
                      <div className="col-md-6">
                        <Image
                          width={397}
                          height={529}
                          src="/assets/images/portfolio/hospedagem.jpg"
                          className="img-fluid wow scaleOutIn"
                          alt="Hospedagem"
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      {/* Segunda Imagem */}
                      <div className="col-md-6">
                        <Image
                          width={397}
                          height={529}
                          src="/assets/images/portfolio/transfer.jpg"
                          className="img-fluid wow scaleOutIn"
                          alt="Transfer"
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </section>
                {/* End Images */}
              </div>
            </section>
            {/* Titles Section*/}
            <section className="page-section bg-gray-light-2">
              <Brands />
            </section>
            {/* End Titles Section*/}
            {/* Skills Section */}
            <section className="page-section z-index-1">
              <div className="container position-relative">
                <div className="row position-relative">
                  <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                    <h3 className="section-title mb-30">
                      {t('h3')}
                    </h3>
                    <p className="text-gray mb-0">
                      {t('p4')}
                    </p>
                  </div>
                  <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                    {/* Bar Item */}
                    {progressData.map((elm, i) => (
                      <div key={i} className="progress tpl-progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${elm.value}%` }}
                        >
                          <div>{t(`progressData.${i}.label`)}%</div>
                          <span> </span>
                        </div>
                      </div>
                    ))}
                    {/* End Bar Item */}

                    {/* End Bar Item */}
                  </div>
                </div>
              </div>
            </section>
            {/* End Skill Section */}
            {/* Divider */}
            <hr className="mt-0 mb-0" />
            <section
              className="page-section">
              <div className="container position-relative">
                <div className="row text-center wow fadeInUp">
                  <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <p className="section-descr mb-50 mb-sm-30">
                      {t('p5')}
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
