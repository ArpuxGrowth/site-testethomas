"use client";
import React, { useEffect, useState } from "react";
import { portfolios1 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";
const filters = [
  { name: "Casos", category: "all" },
  { name: "Cicatrizes", category: "branding" },
  { name: "Pós-cirúrgico", category: "design" },
  // { name: "Development", category: "development" },
];

export default function Portfolio({ desc }) {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filtered, setFiltered] = useState(portfolios1);
  useEffect(() => {
    if (currentCategory == "all") {
      setFiltered(portfolios1);
    } else {
      setFiltered(
        [...portfolios1].filter((elm) =>
          elm.categories.includes(currentCategory)
        )
      );
    }
  }, [currentCategory]);

  return (
    <div className="container">
      <div className="row mb-90 mb-md-40">
        <div className="col-lg-5 mb-md-30">
          {desc ? (
            <p className="section-text mb-0">
              <span className="section-title-inline">Hey!</span> Explore
              cutting-edge solutions that elevate brands and engage audiences.
            </p>
          ) : (
            <h3 className="section-title mb-0">
              <AnimatedText text="Pioneirismo e liderança há mais de duas décadas." />
            </h3>
          )}
        </div>
        <div className="col-lg-7 pb-20 pb-md-0 d-flex align-items-end">
          {/* Works Filter */}
          <div className="works-filter works-filter-bold text-start text-lg-end w-100">
            {filters.map((elm, i) => (
              <a
                onClick={() => setCurrentCategory(elm.category)}
                key={i}
                className={`filter ${
                  currentCategory == elm.category ? "active" : ""
                }`}
              >
                {elm.name}
              </a>
            ))}
          </div>
          {/* End Works Filter */}
        </div>
      </div>
      {/* Portfolio Grid */}
      <div id="isotope" className="mb-n100 mb-sm-n50">
        {/* Portfolio Item */}
        {filtered.slice(0, 6).map((item, index) => (
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
                      <Link href={`/resultado/${item.id}`}>
                        <Image
                          width={1200}
                          height={819}
                          src={item.imageUrl}
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className={`col-md-4  `}>
                    <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                    <h3 className="portfolio-2-title font-alt mb-20">
                      <Link href={`/resultado/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="portfolio-2-descr">{item.descriptionInt}</p>
                    <div>
                      <Link
                        href={`/resultado/${item.id}`}
                        className="link-hover-anim underline align-middle"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          Ver resultado
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Ver resultado
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
                      <Link href={`/resultado/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="portfolio-2-descr">{item.descriptionInt}</p>
                    <div>
                      <Link
                        href={`/resultado/${item.id}`}
                        className="link-hover-anim underline align-middle"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          Ver resultado
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Ver resultado
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
                      <Link href={`/resultado/${item.id}`}>
                        <Image
                          width={1200}
                          height={819}
                          src={item.imageUrl}
                          alt="Image Description"
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
