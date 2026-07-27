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
import Image from "next/image";

import React from "react";
import { squadMembers } from "@/data/team";
import Testimonials from "@/components/homes/home-10/Testimonials";
import Faq2 from "@/components/common/Faq2";
import Brands from "@/components/homes/home-1-1/Brands";
import { menuItems2 } from "@/data/menu";
import { clinicHospitals } from "@/data/hospitals";
import ScheduleButton from "@/components/buttons/ScheduleButton";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
export async function generateMetadata() {
  const tr = await getTranslations('Team.metadata');
  
  return {
    title: tr('title'),
    description: tr('description')
  };
}
export default function MainSquadPage() {
  const t = useTranslations('Team');
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
                className="page-section bg-gray-light-1 bg-light-alpha-80 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-gradient/section-hospital.jpg)",
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
                </>
              </ParallaxContainer>
            </section>
            <>

              <section className="page-section pt-0" id="team">
                <div className="container">
                <div className="row position-relative mt-n40 mb-80 mb-sm-40 wow fadeInUp" data-wow-delay="0.2s">
                  {/* Primeira imagem, centralizada */}
                  {/* <div className="col-12 d-flex justify-content-center mt-40">
                    <div className="team-item" style={{ maxWidth: "417px", width: "100%" }}>
                      <div className="team-item-image">
                        <Image
                          src={squadMembers[0].image}
                          width={600}
                          height={800}
                          alt="O Cirurgião Plástico, Dr. Thomas Benson"
                          style={{ width: "100%", height: "auto" }}
                        />
                        <div className="team-item-detail">
                          <div className="team-social-links">
                            {squadMembers[0].socials.map((elm, i) => (
                              <a
                                key={i}
                                href={elm.url}
                                target="_blank"
                                rel="noopener nofollow"
                              >
                                <div className="visually-hidden">{elm.platform}</div>
                                <i className={elm.icon} />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="team-item-descr">
                        <div className="team-item-name">{squadMembers[0].name}</div>
                        <div className="team-item-role">{t('squadMembers.0.role')}</div>
                      </div>
                    </div>
                  </div> */}

                  {/* Demais imagens em duas linhas de cinco */}
                  {squadMembers.map((elm, i) => {
                    const translatedRole = t(`squadMembers.${i}.role`);
                    return (
                      <div key={i} className="col-sm-6 col-lg-2-4 mt-40">
                        <div className="team-item">
                          <div className="team-item-image">
                            <Image
                              src={elm.image}
                              width={600}
                              height={800}
                              alt={elm.imgAlt}
                            />
                            <div className="team-item-detail">
                              <div className="team-social-links">
                                {elm.socials.map((elm, i) => (
                                  <a
                                    key={i}
                                    href={elm.url}
                                    target="_blank"
                                    rel="noopener nofollow"
                                  >
                                    <div className="visually-hidden">{elm.platform}</div>
                                    <i className={elm.icon} />
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="team-item-descr">
                            <div className="team-item-name">{elm.name}</div>
                            <div className="team-item-role">{translatedRole}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                  {/* Divider */}
                  <hr className="mt-0 mb-80 mb-sm-40" />
                  {/* End Divider */}
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
                        {t('p')}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Testimonials Section */}
              <section className="page-section bg-gray-light-2 overflow-hidden">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-caption mb-xs-10 wow fadeInUp">
                        {t('h2_2')}
                      </h2>
                      <h3 className="section-title mb-50 mb-sm-30">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          {t('span')}
                        </span>
                      </h3>
                    </div>
                  </div>
                  {/* Testimonials Carousel */}
                  <Testimonials />
                  {/* End Testimonials Carousel */}
                </div>
              </section>
              {/* End Testimonials Section */}

              <section className="page-section">
                <div className="container">
                  {/* Divider */}
                  <hr className="mt-0 mb-80 mb-sm-40" />
                  {/* End Divider */}
                  {/* Hospitals Section */}
                  <div className="row">
                    <div className="col-lg-4 mb-md-50 mb-xs-30">
                      <div
                        className="lead-alt wow linesAnimIn"
                        data-wow-offset={0}
                        data-splitting="lines"
                      >
                        {t('div_2')}
                      </div>
                    </div>
                    <div
                      className="col-lg-8 wow linesAnimIn"
                      data-wow-offset={0}
                      data-splitting="lines"
                    >
                      <p className="mb-0">
                        {t('p_2')}
                      </p>
                    </div>
                  </div>
                  {/* End Hospitals Section */}
                </div>
              </section>

              {/* Hospital item */}
              <section className="page-section pt-0" id="hospital">
                <div className="container">
                  <div
                    className="row position-relative mt-n40 mb-80 mb-sm-40 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    {clinicHospitals.map((elm, i) => (
                        <div key={i} className="col-sm-6 col-lg-6 mt-40">
                          <div className="team-item">
                            <div className="team-item-image">
                              <Image
                                src={elm.image}
                                width={700}
                                height={350}
                                alt="Imagens do Hospital Vila Nova Star"
                              />
                              <div className="team-item-detail">
                                <div className="team-social-links">
                                  {elm.socials.map((elm, i) => (
                                    <a
                                      key={i}
                                      href={elm.url}
                                      target="_blank"
                                      rel="noopener nofollow"
                                    >
                                      <div className="visually-hidden">
                                        {elm.platform}
                                      </div>
                                      <i className={elm.icon} />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="team-item-descr">
                              <div className="team-item-name">{elm.name}</div>
                              <div className="team-item-role">{elm.role}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </section>
              {/* End Hospital item */}

              {/* Titles Section*/}
              <section className="page-section">
                <Brands />
              </section>
              {/* End Titles Section*/}

              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}

              {/* FAQ Section */}
              <section className="page-section z-index-1">
                <div className="container position-relative">
                  <div className="row position-relative">
                    <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                      <h3 className="section-title mb-30">
                        {t('h3')}
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

              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}

              {/* Call Action Section */}
              <section className="page-section">
                <div className="container position-relative">
                  <div className="row wow fadeInUp">
                    <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 text-md-start mb-sm-30">
                      <p className="section-descr mb-0">
                        {t('p_3')}
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
