import { pageMetadata } from "@/lib/seo";
import React from "react";
import { squadMembers } from "@/data/team";
import { faqDataMain } from "@/data/faqs";
import { clinicHospitals } from "@/data/hospitals";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import ScheduleButton from "@/components/tb/ScheduleButton";
import Faq from "@/components/tb/Faq";
import { PeopleHero, PatientQuotes, Certifications } from "@/components/tb/people/PeopleSections";
import "@/app/styles/people.css";

export async function generateMetadata({ params: { locale } }) {
  const tr = await getTranslations({ locale, namespace: "Team.metadata" });

  return pageMetadata({
    locale,
    path: "/equipe",
    title: tr("title"),
    description: tr("description"),
  });
}

// Grupos da equipe (índices de squadMembers / Team.squadMembers)
const GROUPS = [
  { pt: "Cirurgiões plásticos", en: "Plastic surgeons", idx: [0, 2, 3, 4, 5] },
  { pt: "Enfermagem", en: "Nursing", idx: [6, 7] },
  { pt: "Atendimento e gestão", en: "Care and management", idx: [1, 8, 9] },
];

export default function MainSquadPage({ params: { locale } }) {
  const t = useTranslations("Team");
  const f = useTranslations("Faq2.faqDataMain");
  const en = locale === "en";
  return (
    <main id="main" className="ppl">
      <PeopleHero eyebrow={t("h2")} title={t("atext")} image="/assets/images/full-width-images/dr-thomas4.jpg" imagePos="62% 25%">
        <p className="body" style={{ fontSize: 18, marginTop: 24, maxWidth: 520 }}>{t("div")}</p>
      </PeopleHero>

      {/* Equipe */}
      <section className="sec" id="team">
        <div className="shade sh-std" style={{ background: "transparent" }}></div>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">{en ? "Who takes care of you" : "Quem cuida de você"}</p>
            <p className="body">{t("p")}</p>
          </div>
          <div className="g3 mt-l ppl-team" style={{ alignItems: "start" }}>
            {GROUPS.map((g) => (
              <div key={g.pt}>
                <p className="tm-g">{g[locale] || g.pt}</p>
                <ul className="ppl-tm-list">
                  {g.idx.map((i) => {
                    const m = squadMembers[i];
                    return (
                      <li key={m.name} className="tm soft card">
                        <span className="tm-av">
                          <img src={m.image} alt={m.imgAlt} width="600" height="800" loading="lazy" />
                        </span>
                        <div>
                          <b>{m.name}</b>
                          <small>{t(`squadMembers.${i}.role`)}</small>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitais */}
      <section className="sec" id="hospital">
        <div className="wrap cols">
          <div className="card soft ppl-hp">
            <div className="ppl-hp-track" tabIndex={0} aria-label={en ? "Hospital photos" : "Fotos do hospital"}>
              {clinicHospitals.map((h, i) => (
                <figure key={i}>
                  <img src={h.image} alt="Imagens do Hospital Vila Nova Star" width="700" height="350" loading="lazy" />
                  <figcaption>
                    <span>{h.name}</span>
                    <small>{i + 1}/{clinicHospitals.length}</small>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="ppl-hp-hint">{en ? "Swipe to see more photos" : "Deslize para ver mais fotos"}</p>
          </div>
          <div className="head">
            <p className="eyebrow">{en ? "Hospitals" : "Hospitais"}</p>
            <h2 className="h2">{t("div_2")}</h2>
            <p className="body">{t("p_2")}</p>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="sec" id="titulos">
        <div className="wrap">
          <Certifications locale={locale} />
        </div>
      </section>

      {/* Depoimentos */}
      <section className="sec" id="depoimentos">
        <div className="wrap">
          <div className="head">
            <h2 className="eyebrow">{t("h2_2")}</h2>
            <h3 className="h2">{t("span")}</h3>
          </div>
          <PatientQuotes />
        </div>
      </section>

      {/* Dúvidas + chamada final */}
      <section className="sec" id="duvidas">
        <div className="wrap cols ppl-faq" style={{ alignItems: "start" }}>
          <div className="head">
            <p className="eyebrow">{en ? "Frequently asked questions" : "Dúvidas frequentes"}</p>
            <h3 className="h2">{t("h3")}</h3>
            <p className="it ppl-pull">{t("p_3")}</p>
            <div style={{ marginTop: 10 }}>
              <ScheduleButton />
            </div>
          </div>
          <Faq html headingLevel={4} items={faqDataMain.map((it) => ({ q: f(`${it.id}.question`), a: f.raw(`${it.id}.answer`) }))} />
        </div>
      </section>
    </main>
  );
}
