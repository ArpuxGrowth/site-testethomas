"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative overflow-hidden">
            <Image
              width={960}
              height={539}
              src="/assets/images/about-thomas.jpg"
              className="image-fullwidth relative"
              alt="Image Description"
            />
          </div>
          {/* End Image */}
          {/* Decorative Waves */}
          {/*<div
            className="decoration-1 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed={1}
            data-rellax-percentage="0.1"
          >
            <Image
              width="159"
              height="74"
              src="/assets/images/decoration-1.svg"
              className="svg-shape"
              alt=""
            />
          </div>}
          {/* End Decorative Waves */}
        </div>
      </div>
      <div className="col-lg-6 col-xl-5 offset-xl-1">
        <h4 className="h5">Experiência</h4>
        <p className="text-gray">
          PhD no Brasil e na Alemanha pela Universidade de Hamburgo, sendo o 
          único brasileiro reconhecido pelo Conselho Europeu de Cirurgia Plástica 
          e pela Sociedade Alemã e Americana de Cirurgia Plástica.
        </p>
        <h4 className="h5">Exclusividade</h4>
        <p className="text-gray">
          O Dr. Thomas Benson é verdadeiramente exclusivo e <br></br>escolhê-lo significa 
          optar por um profissional cujo prestígio internacional atesta sua competência 
          e distinção no campo das cirurgias plásticas faciais.
        </p>
      </div>
    </div>
  );
}
