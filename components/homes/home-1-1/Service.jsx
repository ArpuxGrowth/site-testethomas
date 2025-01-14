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
                Experiência e exclusividade. <span className="number">01</span>
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
                Habilidade tecnica comprovada. <span className="number">02</span>
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
                Aprimoramento diário. <span className="number">03</span>
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
                Protocolos de segurança detalhados. <span className="number">04</span>
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
                  <h4 className="services-title">Reconhecimento internacional</h4>
                  <p className="text-gray mb-0">
                  PhD no Brasil e na Alemanha pela Universidade de Hamburgo, sendo o único brasileiro 
                  reconhecido pelo Conselho Europeu de Cirurgia Plástica e pela Sociedade Alemã e Americana de Cirurgia Plástica.
                  <br /><br /> O Dr. Thomas Benson é verdadeiramente exclusivo e escolhê-lo significa optar por um profissional cujo prestígio 
                  internacional atesta sua competência e distinção no campo das cirurgias plásticas faciais.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/experiencia.jpg"
                alt="Dr. Thomas Benson reconhecido internacionalmente"
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
                  <h4 className="services-title">+ de 5.000 casos</h4>
                  <p className="text-gray mb-0">
                  O Dr. Thomas atua em consultório particular desde 2009, 
                  hoje realizando em média 350 procedimentos por ano. <br />
                  <br /> Especialista e Cirurgião plástico na Alemanha e na 
                  Europa e PhD em ambos os países. Com uma experiência sólida 
                  e habilidade técnica comprovada em mais de 5.000 casos bem-sucedidos, 
                  o Dr. Thomas Benson é a escolha confiável para transformações faciais excepcionais.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/hability.jpg"
                alt="Dr. Thomas Benson possui uma vasta experiência"
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
                  <h4 className="services-title">Excelência e aperfeiçoamento contínuo</h4>
                  <p className="text-gray mb-0">
                  Comprometido com a excelência, o Dr. Thomas não apenas possui vasta experiência, mas 
                  também busca aprimoramento constante, tendo uma agenda cirúrgica diária nos melhores 
                  hospitais do país com as mais recentes inovações e técnicas. <br />
                  <br /> 
                  Também participa em diversos congressos no Brasil e no mundo com os maiores nomes da cirurgia 
                  plástica, como participante e palestrante transmitindo seu conhecimento técnico e prático 
                  obtido ao longo de 15 anos.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/daily.jpg"
                alt="Dr. Thomas Benson operando"
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
                  <h4 className="services-title">Estrutura e prestígio exclusivos</h4>
                  <p className="text-gray mb-0">
                    Operamos nos melhores hospitais do Brasil incluindo e desfrutando dos centros cirúrgicos 
                    mais inovadores e tecnológico do país. <br />
                    <br /> O Dr. Thomas Benson é verdadeiramente exclusivo e escolhê-lo significa optar por 
                    um profissional cujo prestígio internacional atesta sua competência e distinção no campo 
                    das cirurgias plásticas faciais.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/secprotocols.jpg"
                alt="Dr. Thomas atendendo"
              />
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </div>
  );
}
