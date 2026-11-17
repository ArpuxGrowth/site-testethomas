import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ScheduleButton from "../ScheduleButton";
import VideoButton from "../VideoButton";
import Faq from "../Faq";
import SafetyStories from "./SafetyStories";
import { Check, Arrow, Play, Phone, Pin, Star } from "../Icons";
import { PHONES } from "../site";
import { videoTestimonials } from "@/data/videotestimonials";
import { numberItems } from "@/data/facts";
import { pressItems } from "@/data/pressgallery";
import { featureItems, featureItems2, features2 } from "@/data/features";
import { testimonials } from "@/data/testimonials";
import { faqDataMain } from "@/data/faqs";

export const SEALS = [
  { f: "phd-hamburgo", pt: "PhD Doutor em Medicina, Universidade de Hamburgo", en: "PhD in Medicine, University of Hamburg" },
  { f: "phd-usp", pt: "PhD Doutor em Medicina, Universidade de São Paulo", en: "PhD in Medicine, University of São Paulo" },
  { f: "governo-alemao", pt: "Especialista pelo Governo Alemão em Cirurgia Plástica", en: "Plastic Surgery specialist certified by the German Government" },
  { f: "board-europeu", pt: "Especialista pelo Board Europeu de Cirurgia Plástica", en: "European Board of Plastic Surgery specialist" },
  { f: "cremesp", pt: "Especialista inscrito no Conselho de Medicina, CREMESP", en: "Specialist registered with the São Paulo Medical Council (CREMESP)" },
  { f: "sbcp", pt: "Membro titular da Sociedade Brasileira de Cirurgia Plástica", en: "Full member of the Brazilian Society of Plastic Surgery" },
  { f: "asps", pt: "Membro da Sociedade Americana de Cirurgia Plástica", en: "Member of the American Society of Plastic Surgeons" },
  { f: "academia-americana", pt: "Membro da Academia Americana de Cirurgia Plástica Facial", en: "Member of the American Academy of Facial Plastic Surgery" },
];

export function Seals({ locale, cols = "g2" }) {
  return (
    <div className={`${cols} keep2`} role="list" aria-label={locale === "en" ? "Titles and societies" : "Títulos e sociedades"}>
      {SEALS.map((s) => (
        <div key={s.f} className="seal soft card" role="listitem" title={s[locale] || s.pt} style={{ cursor: "default" }}>
          <img src={`/assets/images/titulos/${s.f}.png`} alt={s[locale] || s.pt} loading="lazy" width="410" height="132" />
        </div>
      ))}
    </div>
  );
}

export function HomeHero() {
  const t = useTranslations("Home");
  return (
    <section className="sec split hero" id="inicio">
      <div className="glow"></div>
      <div className="photo"><img src="/assets/images/full-width-images/dr-thomas3.jpg" alt="" fetchPriority="high" /></div>
      <div className="wrap">
        <div className="txt">
          <h2 className="eyebrow">Dr. Thomas Benson</h2>
          <h1>{t("h1")}</h1>
          <p className="body" style={{ fontSize: 18, marginTop: 24, maxWidth: 520 }}>{t("pdesc")}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 34 }}>
            <ScheduleButton trackingLocation="hero" />
            <VideoButton videoId="0DT0mNTJ0_o" label={t("videobtn")} />
          </div>
          <div className="rating" style={{ marginTop: 26 }}>
            <span style={{ color: "var(--gold)", display: "flex" }}>{[0, 1, 2, 3, 4].map((i) => <Star key={i} width={14} height={14} />)}</span>
            <b>5.0</b> Google · Facebook · Doctoralia
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeAbout({ locale }) {
  const t = useTranslations("Home");
  return (
    <section className="sec" id="about">
      <div className="shade sh-std" style={{ background: "transparent" }}></div>
      <div className="wrap cols" style={{ alignItems: "start" }}>
        <div>
          <p className="eyebrow">{locale === "en" ? "Career" : "Trajetória"}</p>
          <h2 className="h2" style={{ marginTop: 14 }}>{t("abouth2")}</h2>
          <div className="prose" style={{ marginTop: 24, fontSize: 16.5 }} dangerouslySetInnerHTML={{ __html: t.raw("aboutp") }} />
          <div style={{ marginTop: 30 }}><ScheduleButton /></div>
        </div>
        <div>
          <p className="eyebrow" style={{ marginBottom: 18 }}>{locale === "en" ? "Titles and societies" : "Títulos e sociedades"}</p>
          <Seals locale={locale} />
          <figure className="card soft" style={{ margin: "14px 0 0", padding: 10, borderRadius: 28 }}>
            <img src="/assets/images/promo-thomas4.jpg" alt="Dr. Thomas Benson em seu consultório" loading="lazy" style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 20, display: "block" }} />
          </figure>
        </div>
      </div>
    </section>
  );
}

export function HomeVideos() {
  const t = useTranslations("VideoTestimonials");
  return (
    <section className="sec" id="Videotestimonial">
      <div className="wrap">
        <div className="head">
          <h2 className="eyebrow">{t("p")}</h2>
          <p className="h2" dangerouslySetInnerHTML={{ __html: t.raw("desc") }} />
        </div>
        <div className="g3 mt-l">
          {videoTestimonials.map((v) => (
            <a key={v.videoUrl} className="cardlink card soft" href={v.videoUrl} target="_blank" rel="noopener noreferrer">
              <span className="ph" style={{ aspectRatio: "4/5" }}>
                <img src={v.image} alt={t("videodesc")} loading="lazy" />
                <span className="round gold" style={{ position: "absolute", left: "calc(50% - 30px)", top: "calc(50% - 30px)", width: 60, height: 60, borderRadius: 30 }}><Play width={20} height={20} /></span>
              </span>
              <small>Instagram</small>
              <p style={{ marginTop: 4 }}>{t("videodesc")}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeSafety() {
  const t = useTranslations("Service");
  const imgs = [
    ["/assets/images/services/experiencia.jpg", "Dr. Thomas Benson reconhecido internacionalmente"],
    ["/assets/images/services/hability.jpg", "Dr. Thomas Benson possui uma vasta experiência"],
    ["/assets/images/services/daily.jpg", "Dr. Thomas atendendo"],
    ["/assets/images/services/secprotocols.jpg", "Dr. Thomas Benson operando"],
  ];
  const items = [1, 2, 3, 4].map((n, i) => ({
    kicker: t(`item${n}`),
    title: t(`servtitle${n}`),
    html: t.raw(`servp${n}`),
    img: imgs[i][0],
    alt: imgs[i][1],
  }));
  return <SafetyStories id="services" eyebrow={t("h2")} title={t("atext")} items={items} />;
}

export function HomeClinic() {
  const t = useTranslations("Home");
  return (
    <section className="sec" id="consultorio">
      <div className="wrap cols">
        <figure className="card soft" style={{ margin: 0, padding: 10, borderRadius: 34 }}>
          <img src="/assets/images/demo-strong/split-clinica-2.jpg" alt="Consultório médico particular do Dr. Thomas Benson, em São Paulo" loading="lazy" style={{ width: "100%", aspectRatio: "1100/930", objectFit: "cover", borderRadius: 26, display: "block" }} />
        </figure>
        <div>
          <h2 className="h2">{t("clinicah2")}</h2>
          <p className="body" style={{ marginTop: 20 }}>{t("clinicap")}</p>
          <ul className="g2" style={{ listStyle: "none", padding: 0, margin: "30px 0 0" }}>
            {["excellence", "technology", "care", "safety"].map((k) => (
              <li key={k} className="card soft" style={{ display: "flex", gap: 12, alignItems: "center", padding: "16px 18px", borderRadius: 22, fontSize: 15 }}>
                <span className="round gold" style={{ width: 36, height: 36 }}><Check width={16} height={16} /></span>{t(`features.${k}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function HomeNumbers() {
  const t = useTranslations("Home");
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
              <span>{t(`numberItems.${n.translationKey}`)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePress({ locale }) {
  const t = useTranslations("Portfolio2");
  return (
    <section className="sec" id="imprensa">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">{locale === "en" ? "Press" : "Imprensa"}</p>
          <h3 className="h2">{t("h3")}</h3>
        </div>
        <div className="g3 mt-l">
          {pressItems.slice(0, 3).map((item) => {
            const tr = t.raw(`PressItems.${item.id}`);
            return (
              <Link key={item.id} href={`/imprensa/${item.id}`} className="cardlink card soft">
                <span className="ph"><img src={item.src} alt="Dr. Thomas Benson na imprensa" loading="lazy" /></span>
                <h3>{tr.title}</h3>
                <small style={{ display: "flex", alignItems: "center", gap: 8 }}>{t("viewArticle")} <Arrow width={14} height={14} /></small>
              </Link>
            );
          })}
        </div>
        <div style={{ marginTop: 28 }}><Link className="btn clear" href="/imprensa">{locale === "en" ? "See all press" : "Ver toda a imprensa"} <Arrow width={16} height={16} /></Link></div>
      </div>
    </section>
  );
}

export function HomeBook() {
  const t = useTranslations("Promo");
  return (
    <section className="sec" id="livro">
      <div className="wrap cols">
        <div>
          <h2 className="h2" dangerouslySetInnerHTML={{ __html: t.raw("h2").replace(/<em>/g, '<em class="it">') }} />
          <div className="g2" style={{ marginTop: 32 }}>
            {featureItems2.map((f) => {
              const tr = t.raw(`featureItems2.${f.id}`);
              return (
                <div key={f.id} className="card soft" style={{ padding: 22, borderRadius: 24 }}>
                  <h3 style={{ fontFamily: "var(--f-display)", fontWeight: 500, fontSize: 20 }}>{tr.title}</h3>
                  <p className="body" style={{ fontSize: 14.5, marginTop: 8 }}>{tr.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <figure className="card soft" style={{ margin: 0, padding: 12, borderRadius: 34 }}>
          <img src="/assets/images/livro-thomas-2.jpeg" alt="Livro 'A beleza da face' do Dr. Thomas Benson" loading="lazy" style={{ width: "100%", borderRadius: 26, display: "block" }} />
        </figure>
      </div>
    </section>
  );
}

export function HomeHospital() {
  const t = useTranslations("Home");
  return (
    <section className="sec" id="hospital" style={{ minHeight: "max(640px,86vh)", display: "flex", alignItems: "center" }}>
      <img className="bg" src="/assets/images/demo-gradient/section-hospital.jpg" alt="" loading="lazy" />
      <div className="shade" style={{ background: "linear-gradient(90deg,rgba(11,20,40,.15) 0%,rgba(11,20,40,.55) 45%,rgba(11,20,40,.92) 75%)" }}></div>
      <div className="wrap">
        <div className="card glass" style={{ marginLeft: "auto", maxWidth: 560, padding: 36, borderRadius: 34 }}>
          <h2 className="h2">{t("hosph2")}</h2>
          <p className="body" style={{ marginTop: 18 }}>{t("hospp")}</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 28px", display: "grid", gap: 10 }}>
            {features2.map((f) => (
              <li key={f.id} style={{ display: "flex", gap: 10, alignItems: "center" }}><Check width={16} height={16} style={{ color: "var(--gold)" }} />{t.raw(`features2.${f.id}`).text}</li>
            ))}
          </ul>
          <ScheduleButton />
        </div>
      </div>
    </section>
  );
}

export function HomeFaq() {
  const t = useTranslations("Home");
  const f = useTranslations("Faq2.faqDataMain");
  return (
    <section className="sec" id="duvidas">
      <div className="wrap cols" style={{ alignItems: "start" }}>
        <div className="head">
          <p className="eyebrow">FAQ</p>
          <h3 className="h2">{t("faqh3")}</h3>
        </div>
        <Faq html headingLevel={4} items={faqDataMain.map((it) => ({ q: f(`${it.id}.question`), a: f.raw(`${it.id}.answer`) }))} />
      </div>
    </section>
  );
}

export function HomeBenefits() {
  const t = useTranslations("Benefits");
  return (
    <section className="sec" id="beneficios">
      <div className="wrap">
        <div className="head">
          <h2 className="eyebrow">{t("h2")}</h2>
          <h3 className="h2">{t("h3")}</h3>
        </div>
        <div className="g3 mt-l">
          {featureItems.map((f) => {
            const tr = t.raw(`featureItems.${f.id}`);
            return (
              <div key={f.id} className="ben card soft">
                <div className="ph"><img src={`/${f.image}`} alt={f.alt} loading="lazy" /></div>
                <div style={{ padding: "18px 12px 10px" }}>
                  <h4 style={{ fontFamily: "var(--f-display)", fontWeight: 500, fontSize: 22 }}>{tr.title}</h4>
                  <p className="body" style={{ fontSize: 15, marginTop: 8 }}>{tr.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeTestimonials() {
  const t = useTranslations("Testimonials");
  return (
    <section className="sec" id="depoimentos">
      <div className="wrap">
        <div className="head"><h2 className="h2">{t("h2")}</h2></div>
        <div className="g3 mt-l">
          {testimonials.map((p, i) => {
            const tr = t.raw(`testimonials.${i}`);
            return (
              <figure key={i} className="quote card soft">
                <span className="mark">“</span>
                <p>{tr.quote}</p>
                <footer>{p.author} · {tr.role}<span>★★★★★</span></footer>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeContact() {
  const t = useTranslations("Contact");
  return (
    <section className="sec" id="contact">
      <div className="wrap cols" style={{ alignItems: "stretch" }}>
        <div>
          <h2 className="eyebrow">{t("h2")}</h2>
          <h3 className="h2" style={{ marginTop: 14 }}>{t("atext")}</h3>
          <div className="g2" style={{ marginTop: 32 }}>
            <div className="card soft" style={{ padding: 24, borderRadius: 26 }}>
              <span className="round gold" style={{ width: 40, height: 40 }}><Phone width={16} height={16} /></span>
              <h4 style={{ fontSize: 16, fontWeight: 600, marginTop: 14 }}>{t("h4")}</h4>
              {PHONES.map((p) => (<a key={p.tel} href={`tel:${p.tel}`} className="body" style={{ display: "block", marginTop: 6, textDecoration: "none" }}>{p.label}</a>))}
            </div>
            <div className="card soft" style={{ padding: 24, borderRadius: 26 }}>
              <span className="round gold" style={{ width: 40, height: 40 }}><Pin width={16} height={16} /></span>
              <h4 style={{ fontSize: 16, fontWeight: 600, marginTop: 14 }}>{t("consulth4")}</h4>
              <p className="body" style={{ marginTop: 6, fontSize: 15 }}>Av. Antônio Joaquim de Moura Andrade, 315<br />Vila Nova Conceição – CEP 04507-000<br />São Paulo – SP</p>
            </div>
          </div>
          <div style={{ marginTop: 28 }}><ScheduleButton trackingLocation="contact" /></div>
        </div>
        <div className="card soft" style={{ padding: 10, borderRadius: 32, minHeight: 380 }}>
          <iframe
            title="Mapa do consultório do Dr. Thomas Benson"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4916234689554!2d-46.66950662484163!3d-23.586695278782422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59e36b5743d5%3A0xe85751f681c07781!2sDr.%20Thomas%20Benson%20-%20Cirurgia%20Pl%C3%A1stica!5e0!3m2!1spt-BR!2sbr!4v1734104273091!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", height: "100%", minHeight: 360, border: 0, borderRadius: 24, display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
