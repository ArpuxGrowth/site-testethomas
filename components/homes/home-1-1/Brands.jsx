import React from "react";
import Image from "next/image";
export default function Brands() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h2 className="section-title-small mb-60">
            Certificações Nacionais e Internacionais.
          </h2>

          <div className="logo-grid">
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/titles-logos/logo-grid/logo-1.png"
              width="220"
              height="66"
              alt="Título do Dr. Thomas Benson"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/titles-logos/logo-grid/logo-2.png"
              width="220"
              height="66"
              alt="Título do Dr. Thomas Benson"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/titles-logos/logo-grid/logo-3.png"
              width="220"
              height="66"
              alt="Título do Dr. Thomas Benson"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/titles-logos/logo-grid/logo-4.png"
              width="220"
              height="66"
              alt="Título do Dr. Thomas Benson"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/titles-logos/logo-grid/logo-5.png"
              width="220"
              height="66"
              alt="Título do Dr. Thomas Benson"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/titles-logos/logo-grid/logo-6.png"
              width="220"
              height="66"
              alt="Título do Dr. Thomas Benson"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/titles-logos/logo-grid/logo-7.png"
              width="220"
              height="66"
              alt="Título do Dr. Thomas Benson"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/titles-logos/logo-grid/logo-8.png"
              width="220"
              height="66"
              alt="Título do Dr. Thomas Benson"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
