import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";

export default function Service() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">Liderança no Brasil</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text="Alto padrão nos protocolos de segurança." />
          </h3>
          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                Dr. Thomas Benson é o único cirurgião plástico no Brasil com título de PhD na Alemanha e no Brasil e com título de especialista
                pelo European Board of Plastic Surgery (Conselho Europeu de Cirurgia Plástica).

              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            <li role="presentation">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                Operamos no único hospital 6 estrelas do Brasil. <span className="number">01</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Melhores tecnologias. <span className="number">02</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Concierge com cuidados individuais. <span className="number">03</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-4"
                aria-controls="services-item-4"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Protocolos pós-cirúrgicos. <span className="number">04</span>
              </a>
            </li>
            
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Hospital Vila Nova Star</h4>
                  <p className="text-gray mb-0">
                    Dr. Thomas também é membro do corpo clínico de outros grandes hospitais, como: Hospital Israelita Albert Einstein e
                    Hospital Sírio-Libanês.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/hospital.jpg"
                alt="Recepção do Hospital Vila Nova Star"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Tecnologia de ponta</h4>
                  <p className="text-gray mb-0">
                    Aliamos as melhores tecnologias disponíveis com a 
                    expertise da equipe, garantindo procedimentos seguros, 
                    precisos e resultados superiores.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/tecnologia.jpg"
                alt="Sala de cirurgia do hospital"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Atendimento exclusivo</h4>
                  <p className="text-gray mb-0">
                    Nossa equipe de concierge oferece um serviço premium, 
                    totalmente dedicado às suas necessidades. Desde a organização 
                    de consultas e cirurgias até suporte com hospedagem, transporte 
                    e outras demandas, garantimos uma experiência tranquila e confortável.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/concierge.jpg"
                alt="Recepção da clínica do Dr. Thomas Benson"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-4"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Acompanhamento e recuperação com excelência</h4>
                  <p className="text-gray mb-0">
                    Seguimos protocolos pós-cirúrgicos rigorosos e exclusivos, desenvolvidos especialmente
                    para cada paciente. Com o acompanhamento atento da equipe, nosso compromisso é garantir 
                    uma recuperação rápida e segura.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/experiencia.jpg"
                alt="O Dr. Thomas Benson possui uma vasta experiência em cirurgias faciais"
              />
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </div>
  );
}
