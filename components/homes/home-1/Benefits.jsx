import { featureItems } from "@/data/features";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default function Benefits() {

  const t = useTranslations('Benefits');
  return (
    <div className="container position-relative">
      {/* Grid */}
      <div className="row">
        {/* Text */}
        <div className="col-md-12 col-lg-3 mb-md-50">
          <h2 className="section-caption mb-xs-10">{t('h2')}</h2>
          <h3 className="section-title-small mb-40">{t('h3')}</h3>
          <div className="section-line" />
        </div>
        {/* End Text */}
        {/* Feature Item */}
        {featureItems.map((item, index) => {
          const translatedItem = t.raw(`featureItems.${item.id}`);
          return (
            <div key={index} className={item.className}>
              <div className="alt-features-item border-left mt-0 d-flex flex-column">
                <div className="alt-features-icon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d={item.path} />
                  </svg>
                </div>
                <h4 className="alt-features-title">{translatedItem.title}</h4>
                <div className="alt-features-descr">{translatedItem.description}</div>
                <Image
                  className="container mt-auto pt-5"
                  src={`/${item.image}`}
                  width={215} 
                  height={75} 
                  alt={item.alt}
                />
              </div>
            </div>
          )
        })}
        {/* End Feature Item */}
      </div>
      {/* End Grid */}
    </div>
  );
}
