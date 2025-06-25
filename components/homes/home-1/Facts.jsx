import { numberItems } from "@/data/facts";
import React from "react";
import { useTranslations } from "next-intl";

export default function Facts() {

  const t = useTranslations('Home');

  return (
    <div className="col-lg-7 offset-lg-1">
      {/* Numbers Grid */}
      <div className="row mt-n50 mt-xs-n30">
        {/* Number Item */}
        {numberItems.map((item, index) => (
          <div
            key={index}
            className={`col-sm-6 col-lg-5 mt-50 mt-xs-30 wow fadeScaleIn ${
              index % 2 !== 0 ? "offset-lg-2" : ""
            }`}
            data-wow-delay={item.delay}
          >
            <div className="number-title mb-10">{item.title}</div>
            <div className="number-descr">{t(`numberItems.${item.translationKey}`)}</div>
          </div>
        ))}
        {/* End Number Item */}
      </div>
      {/* End Numbers Grid */}
    </div>
  );
}
