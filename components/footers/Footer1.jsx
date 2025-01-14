"use client";
import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import Link from "next/link";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer1({ dark = false }) {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <footer
      className={`page-section footer ${
        dark ? "bg-dark-2 light-content dark" : "bg-gray-light-1"
      }  pb-30`}
    >
      <div className="container">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          <div className="col-md-4 col-lg-3 text-gray mb-sm-50">
            <Link href={"/main-one-page"} className="mb-30">
              <Image
                src="/assets/images/logo-drthomas.png"
                width={105}
                height={34}
                className="light-mode-logo"
                alt="Your Company Logo"
              />

              <Image
                src="/assets/images/logo-drthomas.png"
                width={105}
                height={34}
                className="dark-mode-logo"
                alt="Your Company Logo"
              />
            </Link>
            <p>
              Dr. Thomas Benson, um dos pioneiros no Brasil na inovadora 
              técnica de rejuvenescimento facial Deep Plane Facelift.
            </p>
            <div className="clearlinks">
              <strong>T. </strong>
              <a href="tel:+551197241-5960">+55 (11) 97241-5960</a>
            </div>
            <div className="clearlinks">
              <strong>T. </strong>
              <a href="tel:+55114305-6070">+55 (11) 4305-6070</a>
            </div>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2">
            <div className="row mt-n30">
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Sessões</h3>
                <ul className="fw-menu clearlist local-scroll">
                  {navigationLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Redes Sociais</h3>
                <ul className="fw-menu clearlist">
                  <FooterSocials />
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Legal &amp; Press</h3>
                <ul className="fw-menu clearlist">
                  {footerLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.path}>{elm.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
            </div>
          </div>
        </div>
        {/* Footer Text */}
        <div className="row text-gray">
          <p className="size-13">
          Este site possui caráter informativo e educacional e segue os princípios da resolução 
          nº 1.974/2011 do Conselho Federal de Medicina (CFM) e do código de conduta de medicina e saúde.
          O paciente jamais deve usar seu conteúdo para autodiagnóstico ou autotratamento. Segundo 
          recomendação do Conselho Federal de Medicina, em caso de dúvida, o médico sempre deve ser consultado.
          </p>
        </div>
        <div className="row text-gray">
          <div className="col-md-4 col-lg-3">
            <b>© Todos os direitos reservados {new Date().getFullYear()}.</b>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
            <b>Responsável técnico: Dr. Thomas Benson CRM. 119.278 – RQE 29279.</b>
            {/* Back to Top Link */}
            <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top" onClick={scrollToTop}>
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div>
            {/* End Back to Top Link */}
          </div>
        </div>
        {/* End Footer Text */}
      </div>
    </footer>
  );
}
