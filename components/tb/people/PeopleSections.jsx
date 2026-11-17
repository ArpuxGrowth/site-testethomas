import { useTranslations } from "next-intl";
import { Seals } from "../home/HomeSections";
import { Check } from "../Icons";
import { testimonials3 } from "@/data/testimonials";

// Topo com foto ao lado. Diferente do PageHero, o "eyebrow" é um <h2> (como na página antiga).
export function PeopleHero({ eyebrow, title, image, imagePos = "50% 30%", alt = "", children }) {
  return (
    <section className="sec split hero ppl-hero" style={{ minHeight: "max(680px,86vh)" }}>
      <div className="glow"></div>
      <div className="photo">
        <img src={image} alt={alt} style={{ objectPosition: imagePos }} fetchPriority="high" />
      </div>
      <div className="wrap">
        <div className="txt">
          <h2 className="eyebrow">{eyebrow}</h2>
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </section>
  );
}

// Lista de destaques com ícone de check (usada no topo de Pacientes no Exterior)
export function CheckList({ items }) {
  return (
    <ul className="ppl-checks">
      {items.map((it) => (
        <li key={it} className="card soft">
          <span className="round gold"><Check width={14} height={14} /></span>
          {it}
        </li>
      ))}
    </ul>
  );
}

// Depoimentos dos pacientes (antigo carrossel home-10/Testimonials), agora em cartões .quote
export function PatientQuotes() {
  const t = useTranslations("teamTestimonials");
  return (
    <div className="g3 mt-l">
      {testimonials3.map((q) => (
        <figure key={q.id} className="quote card soft">
          <span className="mark" aria-hidden="true">“</span>
          <blockquote style={{ margin: 0, display: "contents" }}>
            <p>{t(`testimonials3.${q.id}.text`)}</p>
          </blockquote>
          <footer>
            <span className="ppl-author">
              <img src={q.imgSrc} alt="Icone das pacientes do Dr. Thomas Benson" width="32" height="32" loading="lazy" />
              <span>
                {q.author}
                <small>{t("role")}</small>
              </span>
            </span>
            <span aria-hidden="true">★★★★★</span>
          </footer>
        </figure>
      ))}
    </div>
  );
}

// Certificações (antigo home-1-1/Brands): título + selos dourados
export function Certifications({ locale, eyebrow = true }) {
  const t = useTranslations("Brands");
  return (
    <>
      <div className="head">
        {eyebrow && <p className="eyebrow">{locale === "en" ? "Certifications" : "Certificações"}</p>}
        <h2 className="h2">{t("h2")}</h2>
      </div>
      <div className="mt-l ppl-seals">
        <Seals locale={locale} cols="g4" />
      </div>
    </>
  );
}
