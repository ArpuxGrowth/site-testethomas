"use client";
import React, { useEffect, useState } from "react";
import { portfolios1 } from "@/data/portfolio";
import { pressItems } from "@/data/pressgallery";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";

export default function Portfolio2({ desc }) {
  const [filtered, setFiltered] = useState(pressItems);

  useEffect(() => {
    setFiltered(pressItems);
  }, []);

  return (
    <div className="container">
      <div className="row mb-90 mb-md-40">
        <div className="col-lg-5 mb-md-30">
          {desc ? (
            <p className="section-text mb-0">
              <span className="section-title-inline">Dr. Thomas Benson</span> Na mídia.
            </p>
          ) : (
            <h3 className="section-title mb-0">
              <AnimatedText text="Referência em toda a imprensa." />
            </h3>
          )}
        </div>
      </div>
      {/* Portfolio Grid */}
      <div id="isotope" className="mb-n100 mb-sm-n50">
        {/* Portfolio Item */}
        {filtered.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className={`portfolio-2-item mb-100 mb-sm-50 mix ${item.categories.join(
              " "
            )}`}
          >
            <div className="row">
              {!(index % 2) ? (
                <>
                  <div className="col-md-8 mb-sm-30 order-md-first">
                    <div className="portfolio-2-image">
                      <Link href={`/imprensa/${item.id}`}>
                        <Image
                          width={1200}
                          height={819}
                          src={item.src}
                          alt="Dr. Thomas Benson na imprensa"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className={`col-md-4  `}>
                    <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                    <h3 className="portfolio-2-title font-alt mb-20">
                      <Link href={`/imprensa/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="portfolio-2-descr">{item.descriptionInt}</p>
                    <div>
                      <Link
                        href={`/imprensa/${item.id}`}
                        className="link-hover-anim underline align-middle"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          Ver matéria
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Ver matéria
                        </span>
                      </Link>
                    </div>
                  </div>{" "}
                </>
              ) : (
                <>
                  <div className={`col-md-4`}>
                    <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                    <h3 className="portfolio-2-title font-alt mb-20">
                      <Link href={`/imprensa/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="portfolio-2-descr">{item.descriptionInt}</p>
                    <div>
                      <Link
                        href={`/imprensa/${item.id}`}
                        className="link-hover-anim underline align-middle"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          Ver matéria
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Ver matéria
                        </span>
                      </Link>
                    </div>
                  </div>{" "}
                  <div
                    className={`col-md-8 mb-sm-30 ${
                      index % 2 ? "order-first order-md-last" : ""
                    } `}
                  >
                    <div className="portfolio-2-image">
                      <Link href={`/imprensa/${item.id}`}>
                        <Image
                          width={1200}
                          height={819}
                          src={item.src}
                          alt="Dr. Thomas Benson na imprensa"
                        />
                      </Link>
                    </div>
                  </div>{" "}
                </>
              )}
            </div>
          </div>
        ))}
        {/* End Portfolio Item */}
      </div>
      {/* End Portfolio Grid */}
    </div>
  );
}