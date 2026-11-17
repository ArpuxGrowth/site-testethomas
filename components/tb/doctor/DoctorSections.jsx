import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ScheduleButton from "../ScheduleButton";
import { Chevron, Play, Arrow } from "../Icons";
import { Seals } from "../home/HomeSections";
import DoctorStories from "./DoctorStories";
import ResultsGrid from "./ResultsGrid";
import { numberItems } from "@/data/facts";
import { faqs } from "@/data/faqs";
import { portfolios1 } from "@/data/portfolio";
import { videoContainersrc } from "@/data/videocontainer";
import { testimonials } from "@/data/testimonials";

const L = (locale, pt, en) => (locale === "en" ? en : pt);

// Topo: mesmo h2 ("Sobre"), h1 e parágrafo da página antiga, com a foto dr-thomas4 ao lado.
export function DoctorHero({ locale }) {
  const t = useTranslations("About");
  const h = useTranslations("Home");
  const stats = ["experience", "surgeries", "countries"].map((k) => numberItems.find((n) => n.translationKey === k));
  return (
    <section className="sec split hero dr-hero" id="home">
      <div className="glow"></div>
      <div className="photo">
        <img src="/assets/images/full-width-images/dr-thomas4.jpg" alt="Dr. Thomas Benson" fetchPriority="high" style={{ objectPosition: "62% 30%" }} />
      </div>
      <div className="wrap">
        <div className="txt">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">{L(locale, "Início", "Home")}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Dr. Thomas</span>
          </nav>
          <h2 className="eyebrow">{t("h2_1")}</h2>
          <h1>Dr. Thomas Benson.</h1>
          <p className="it" style={{ fontSize: 24, marginTop: 14 }}>Ph.D | {L(locale, "Cirurgião Plástico e Facial", "Plastic and Facial Surgeon")}</p>
          <p className="body" style={{ marginTop: 18, fontSize: 18, maxWidth: 520 }}>{t("p1")}</p>
          <div className="dr-stats">
            {stats.map((n) => (
              <div key={n.id} className="soft card">
                <p className="num">{n.title}</p>
                <p>{h(`numberItems.${n.translationKey}`)}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}><ScheduleButton trackingLocation="hero" /></div>
        </div>
      </div>
    </section>
  );
}

// "Nossa História": texto completo (compAbout) com as duas fotos e as avaliações.
export function DoctorStory({ locale }) {
  const t = useTranslations("About");
  const c = useTranslations("compAbout");
  return (
    <section className="sec" id="about">
      <img className="bg blur" src="/assets/images/team/drthomas-2.jpg" alt="" loading="lazy" />
      <div className="shade sh-std"></div>
      <div className="wrap cols dr-story">
        <div className="dr-sticky">
          <div className="head">
            <h2 className="eyebrow">{t("h2_2")}</h2>
            <h3 className="h2">{t("atext1")}</h3>
          </div>
          <div className="dr-photos">
            <figure className="dr-ph">
              <img src="/assets/images/team/drthomas-s.jpg" alt="Dr. Thomas Benson no escritório" loading="lazy" width="600" height="800" />
              <span className="dr-pills"><span className="pill clear glass">PhD USP</span><span className="pill clear glass">PhD Hamburgo</span><span className="pill gold glass">Board Europeu</span></span>
            </figure>
            <figure className="dr-ph">
              <img src="/assets/images/team/drthomas-2.jpg" alt="Dr. Thomas Benson sorridente" loading="lazy" width="600" height="800" />
            </figure>
          </div>
        </div>
        <article className="soft card dr-article">
          <div className="prose" dangerouslySetInnerHTML={{ __html: c.raw("p") }} />
        </article>
      </div>
    </section>
  );
}

const TIMELINE = [
  { k: ["São Paulo", "São Paulo"], h: ["Residência no Hospital das Clínicas", "Residency at Hospital das Clínicas"], p: ["Cirurgia Geral e Cirurgia Plástica no HC-USP.", "General Surgery and Plastic Surgery at HC-USP."] },
  { k: ["USP", "USP"], h: ["Pós-graduação em microcirurgia", "Postgraduate training in microsurgery"], p: ["Em um dos maiores centros de reconstrução facial e de cabeça e pescoço da América Latina.", "At one of the largest facial and head and neck reconstruction centers in Latin America."] },
  { k: ["Munique · Alemanha", "Munich · Germany"], h: ["Hospital Bogenhausen", "Bogenhausen Hospital"], p: ["Residência médica, preceptor da formação e cirurgião plástico do hospital.", "Medical residency, residency preceptor and plastic surgeon at the hospital."] },
  { k: ["Brasil · EUA", "Brazil · USA"], h: ["Especialização em face", "Facial surgery specialization"], p: ["Acompanhou cirurgiões renomados e se aprimorou nas técnicas de cirurgia da face, incluindo o Deep Plane Facelift.", "Trained alongside renowned surgeons and refined facial surgery techniques, including the Deep Plane Facelift."] },
];

export function DoctorTimeline({ locale }) {
  const i = locale === "en" ? 1 : 0;
  return (
    <section className="sec" id="trajetoria">
      <img className="bg blur" src="/assets/images/services/hospital.jpg" alt="" loading="lazy" />
      <div className="shade sh-std"></div>
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">{L(locale, "Trajetória", "Career")}</p>
          <h2 className="h2">{L(locale, "Do Hospital das Clínicas ao único hospital 6 estrelas do país.", "From Hospital das Clínicas to the only 6-star hospital in Brazil.")}</h2>
        </div>
        <ol className="tlh">
          {TIMELINE.map((s, n) => (
            <li key={n}>
              <span className="tl-dot"></span>
              <div className="soft card tl-card"><p className="tl-k">{s.k[i]}</p><h3>{s.h[i]}</h3><p>{s.p[i]}</p></div>
            </li>
          ))}
          <li>
            <span className="tl-dot on"></span>
            <div className="soft card tl-card dr-tl-now">
              <div className="dr-tl-img"><img src="/assets/images/services/hospital.jpg" alt="Hospital Vila Nova Star" loading="lazy" /></div>
              <div style={{ padding: "12px 8px 6px" }}>
                <p className="tl-k">{L(locale, "Hoje", "Today")}</p>
                <h3>Vila Nova Star</h3>
                <p>{L(locale, "Opera de segunda a sábado, sete cirurgias por semana, no único hospital 6 estrelas do Brasil.", "Operates Monday to Saturday, seven surgeries a week, at the only 6-star hospital in Brazil.")}</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

// "Uma carreira marcada pela excelência": selos, fotos e a lista completa de títulos (Faq.faqs).
export function DoctorTitles({ locale }) {
  const t = useTranslations("About");
  const f = useTranslations("Faq.faqs");
  return (
    <section className="sec" id="titulos">
      <img className="bg blur" src="/assets/images/promo-thomas3.jpg" alt="" loading="lazy" />
      <div className="shade sh-std"></div>
      <div className="wrap cols" style={{ alignItems: "start" }}>
        <div>
          <div className="head">
            <p className="eyebrow">{L(locale, "Títulos", "Titles")}</p>
            <h2 className="h2">{t("h2_3")}</h2>
          </div>
          <div style={{ marginTop: 28 }} aria-label="Títulos do Dr. Thomas Benson">
            <Seals locale={locale} />
          </div>
          <figure className="card soft dr-fig">
            <img src="/assets/images/promo-thomas3.jpg" alt="Dr. Thomas Benson no Jardim" loading="lazy" width="810" height="522" />
          </figure>
          <figure className="dr-links">
            <img src="/assets/images/thomas-links.png" alt="Dr. Thomas Benson é 5 estrelas" loading="lazy" width="1286" height="380" />
          </figure>
          <div style={{ marginTop: 22 }}><ScheduleButton /></div>
        </div>
        <div className="dr-creds">
          {faqs.map((it) => (
            <details key={it.id} className="cred soft card">
              <summary>
                <span>{f(`${it.id}.question`)}</span>
                <i className="chev"><Chevron width={12} height={12} /></i>
              </summary>
              <p dangerouslySetInnerHTML={{ __html: f.raw(`${it.id}.answer`) }} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DoctorHospitals({ locale }) {
  return (
    <section className="sec" id="hospitais">
      <img className="bg blur" src="/assets/images/services/hospital.jpg" alt="" loading="lazy" />
      <div className="shade sh-std"></div>
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">{L(locale, "Corpo clínico", "Medical staff")}</p>
          <h2 className="h2">{L(locale, "Nos melhores hospitais de São Paulo.", "At the best hospitals in São Paulo.")}</h2>
        </div>
        <div className="dr-hosp">
          <div className="soft card dr-hosp-main">
            <div className="dr-hosp-img"><img src="/assets/images/services/hospital.jpg" alt="" loading="lazy" /></div>
            <div className="dr-hosp-cap">
              <div>
                <p style={{ fontFamily: "var(--f-display)", fontSize: 24 }}>Vila Nova Star</p>
                <p style={{ fontSize: 13.5, color: "var(--ink-2)", marginTop: 2 }}>{L(locale, "Cirurgias de segunda a sábado", "Surgeries Monday to Saturday")}</p>
              </div>
              <span className="pill gold" style={{ fontSize: 11, letterSpacing: 1.2 }}>{L(locale, "6 ESTRELAS", "6 STARS")}</span>
            </div>
          </div>
          <div className="soft card hosp"><p>{L(locale, "Hospital Israelita", "Hospital Israelita")}</p><b>Albert Einstein</b></div>
          <div className="soft card hosp"><p>Hospital</p><b>Sírio-Libanês</b></div>
          <div className="soft card hosp dr-wide"><p>Hospital</p><b>Moriah</b></div>
        </div>
      </div>
    </section>
  );
}

// "Liderança no Brasil" (Serviceabout): lista que avança sozinha com a foto ao lado.
export function DoctorCare() {
  const t = useTranslations("Serviceabout");
  const imgs = [
    ["/assets/images/services/hospital.jpg", "Recepção do Hospital Vila Nova Star"],
    ["/assets/images/services/tecnologia.jpg", "Sala de cirurgia do hospital"],
    ["/assets/images/services/concierge.jpg", "Recepção da clínica do Dr. Thomas Benson"],
    ["/assets/images/services/experiencia.jpg", "O Dr. Thomas Benson possui uma vasta experiência em cirurgias faciais"],
  ];
  const items = [1, 2, 3, 4].map((n, i) => ({
    kicker: t(`item${n}`), title: t(`servtitle${n}`), text: t(`servp${n}`), img: imgs[i][0], alt: imgs[i][1],
  }));
  return <DoctorStories id="services" left eyebrow={t("h2")} title={t("atext")} lead={t("p")} items={items} />;
}

export function DoctorNumbers() {
  const t = useTranslations("About");
  const h = useTranslations("Home");
  return (
    <section className="sec" id="numeros">
      <div className="wrap cols">
        <div>
          <h2 className="h2">{t("ct1h2")}</h2>
          <p className="body" style={{ marginTop: 20 }}>{t("ct1p")}</p>
          <div style={{ marginTop: 30 }}><ScheduleButton /></div>
        </div>
        <div className="g2 keep2">
          {numberItems.map((n) => (
            <div key={n.id} className="stat card soft">
              <span className="num">{n.title}</span>
              <span>{h(`numberItems.${n.translationKey}`)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DoctorResults({ locale }) {
  const t = useTranslations("Portfolio");
  const items = portfolios1.slice(0, 5).map((p) => ({
    id: p.id, src: p.imgSrc, alt: p.imgAlt, text: t("portfolios1.description"),
    cats: ["scars", "post-surgical"].filter((c) => p.className.split(" ").includes(c)),
  }));
  const filters = [
    { name: t("filters.all"), category: "all" },
    { name: t("filters.scars"), category: "scars" },
    { name: t("filters.postSurgical"), category: "post-surgical" },
  ];
  return (
    <section className="sec" id="portfolio">
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 30, flexWrap: "wrap" }}>
          <div className="head">
            <h2 className="eyebrow">{t("h2")}</h2>
            <h3 className="h2">{t("atext")}</h3>
          </div>
          <Link className="btn clear" href="/antes-e-depois">{L(locale, "Ver todos os resultados", "See all results")} <Arrow width={16} height={16} /></Link>
        </div>
        <ResultsGrid items={items} filters={filters} label={t("h2")} />
      </div>
    </section>
  );
}

export function DoctorVideos() {
  const t = useTranslations("VideoContainer");
  return (
    <section className="sec" id="videocontainer">
      <div className="wrap cols">
        <div className="g2 keep2">
          {videoContainersrc.map((v) => (
            <a key={v.videoUrl} className="cardlink card soft" href={v.videoUrl} target="_blank" rel="noopener noreferrer">
              <span className="ph" style={{ aspectRatio: "3/4" }}>
                <img src={v.image} alt="Mensagem do Dr. Thomas Benson" loading="lazy" />
                <span className="round gold dr-play"><Play width={20} height={20} /></span>
              </span>
              <small>Instagram</small>
              <p style={{ marginTop: 4 }}>{t("videoContainersrc.descr")}</p>
            </a>
          ))}
        </div>
        <figure className="quote card soft dr-vquote">
          <span className="mark">“</span>
          <p>{t("p")}</p>
          <footer>{t("videodesc")}</footer>
        </figure>
      </div>
    </section>
  );
}

export function DoctorTestimonials({ locale }) {
  const t = useTranslations("Testimonials");
  return (
    <section className="sec" id="depoimentos">
      <img className="bg blur" src="/assets/images/team/drthomas-s.jpg" alt="" loading="lazy" />
      <div className="shade sh-std"></div>
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 30, flexWrap: "wrap" }}>
          <div className="head">
            <p className="eyebrow">{L(locale, "Pacientes", "Patients")}</p>
            <h2 className="h2">{t("h2")}</h2>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn gold" href="/antes-e-depois">{L(locale, "Ver resultados", "See results")}</Link>
            <ScheduleButton className="btn clear" trackingLocation="testimonials" />
          </div>
        </div>
        <div className="g3 mt-l">
          {testimonials.map((p, i) => {
            const tr = t.raw(`testimonials.${i}`);
            return (
              <figure key={i} className="quote card soft">
                <span className="mark">“</span>
                <p>{tr.quote}</p>
                <footer>
                  <span className="dr-who">
                    <img src={p.image} alt="Paciente do Dr. Thomas Benson" loading="lazy" width="44" height="44" />
                    <span>{p.author}<small>{tr.role}</small></span>
                  </span>
                  <span>★★★★★</span>
                </footer>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
