import { pageMetadata } from "@/lib/seo";
import { progressData } from "@/data/skills";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import ScheduleButton from "@/components/tb/ScheduleButton";
import CtaBand from "@/components/tb/CtaBand";
import { PeopleHero, CheckList, PatientQuotes, Certifications } from "@/components/tb/people/PeopleSections";
import "@/app/styles/people.css";

export async function generateMetadata({ params: { locale } }) {
  const tr = await getTranslations({ locale, namespace: "patientsAbroad.metadata" });

  return pageMetadata({
    locale,
    path: "/pacientes-no-exterior",
    title: tr("title"),
    description: tr("description"),
  });
}

// "Brazil (procedimentos cirúrgicos realizados) 70" -> ["Brazil (procedimentos cirúrgicos realizados)", "70"]
function splitLabel(label) {
  const m = String(label).match(/^(.*?)\s*(\d+)\s*$/);
  return m ? [m[1], m[2]] : [label, ""];
}

export default function PatientsAbroadPage({ params: { locale } }) {
  const t = useTranslations("patientsAbroad");
  const tt = useTranslations("Team");
  const en = locale === "en";
  return (
    <main id="main" className="ppl">
      <PeopleHero eyebrow={t("h2")} title={t("atext")} image="/assets/images/full-width-images/page-patientsab-bg-7.jpg" imagePos="40% 50%">
        <CheckList items={["Based in São Paulo", "20+ Years Experience", "5700+ Surgeries Performed"]} />
      </PeopleHero>

      {/* Fenômeno global */}
      <section className="sec" id="about">
        <div className="wrap cols">
          <figure className="card soft ppl-fig">
            <img src="/assets/images/demo-strong/section-image-6.jpg" alt="Dr. Thomas Benson é fenômeno global" width="672" height="659" loading="lazy" />
          </figure>
          <div className="head">
            <p className="eyebrow">{en ? "Medical tourism" : "Turismo médico"}</p>
            <p className="ppl-lead">{t("p1")}</p>
            <p className="body">{t("p2")}</p>
            <div style={{ marginTop: 14 }}>
              <ScheduleButton />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="sec" id="depoimentos">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">{en ? "Testimonials" : "Depoimentos"}</p>
            <p className="h2">{tt("h2_2")}</p>
          </div>
          <PatientQuotes />
        </div>
      </section>

      {/* Concierge */}
      <section className="sec" id="concierge">
        <div className="wrap">
          <div className="cols" style={{ alignItems: "start" }}>
            <div className="head">
              <p className="eyebrow">Concierge</p>
              <p className="h2">{t("div")}</p>
            </div>
            <p className="body" style={{ fontSize: 18 }}>{t("p3")}</p>
          </div>
          <div className="g2 mt-l keep2 ppl-concierge">
            <figure className="card soft">
              <img src="/assets/images/portfolio/hospedagem.jpg" alt="Hospedagem" width="397" height="529" loading="lazy" />
              <figcaption>{en ? "Accommodation" : "Hospedagem"}</figcaption>
            </figure>
            <figure className="card soft">
              <img src="/assets/images/portfolio/transfer.jpg" alt="Transfer" width="397" height="529" loading="lazy" />
              <figcaption>Transfer</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="sec" id="titulos">
        <div className="wrap">
          <Certifications locale={locale} />
        </div>
      </section>

      {/* Experiência cirúrgica global */}
      <section className="sec" id="experiencia">
        <div className="wrap cols">
          <div className="head">
            <p className="eyebrow">{en ? "Surgical experience" : "Experiência cirúrgica"}</p>
            <h3 className="h2">{t("h3")}</h3>
            <p className="body">{t("p4")}</p>
          </div>
          <div className="card soft ppl-bars">
            {progressData.map((elm, i) => {
              const [name, value] = splitLabel(t(`progressData.${i}.label`));
              return (
                <div key={i}>
                  <div className="bar-h"><span>{name}</span><b>{value}%</b></div>
                  <div className="bar-t" role="progressbar" aria-valuenow={elm.value} aria-valuemin={0} aria-valuemax={100} aria-label={name}>
                    <i style={{ width: `${elm.value}%` }}></i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand text={t("p5")} />
    </main>
  );
}
