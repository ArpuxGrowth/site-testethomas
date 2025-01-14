"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative align-center overflow-hidden">
            <Image
              width={400}
              height={600}
              src="/assets/images/team/drthomas-s.jpg"
              className="image-fullwidth relative p-3"
              alt="Dr. Thomas Benson no escritório"
            />
            <Image
              width={400}
              height={600}
              src="/assets/images/team/drthomas-2.jpg"
              className="image-fullwidth relative p-3"
              alt="Dr. Thomas Benson sorridente"
            />
          </div>
          {/* End Image */}
        </div>
      </div>
      <div className="col-lg-6 align-items-center col-xl-5 offset-xl-1">
      <p>
        Doutor em Medicina (PhD) pelas prestigiadas Universidade de São Paulo (USP), no Brasil, e Doutor em Medicina (PhD) pela 
        Universidade de Hamburgo (UKE – Universitätsklinik Eppendorf Hamburg) na Alemanha, o Dr. Thomas construiu sua carreira nas 
        duas instituições mais respeitadas na área médica.<br/><br/>

        Ele também é o único cirurgião plástico no Brasil com título de especialista pelo European Board of Plastic Surgery (EBOPRAS),após 
        ter feito sua prova de especialista em Bruxelas, Bélgica e em Bern, Suíça para obter seu certificado. Dr. Thomas Benson possui títulos 
        de especialista no Brasil sendo membro titular da SBCP e também pelo governo Alemão.<br/><br/>

        Sua formação inclui residência em Cirurgia Geral e Cirurgia Plástica no Hospital das Clínicas da USP, pós graduação em microcirurgia 
        na USP, um dos maiores centros de referência em reconstruções faciais e de cabeça e pescoço da América Latina, fez residência médica 
        no Hospital Bogenhausen, em Munique, Alemanha, onde foi responsável pela preceptoria da formação naquele ano, onde atuou como cirurgião 
        plástico no Hospital Bogenhausen, após esse período se especializou e acompanhou vários cirurgiões renomados no Brasil e nos EUA onde 
        se aprimorou nas técnicas de cirurgia de face, inclusive o Deep Plane Facelift.<br/><br/>

        O Dr. Thomas é membro do corpo clínico do hospital Israelita Albert Einstein, hospital Sírio Libanês, hospital Moriah, hoje, opera todos 
        os dias de segunda a sábado, sendo sete cirurgias por semana no único hospital 6 estrelas do Brasil, o Vila Nova Star (SP), referência 
        máxima em infraestrutura altamente segura e tecnológica.<br/><br/>
      </p>
      </div>
    </div>
  );
}
