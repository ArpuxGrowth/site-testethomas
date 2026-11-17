import { pageMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { portfolios1 } from "@/data/portfolio";
import ScheduleButton from "@/components/tb/ScheduleButton";
import { HomeVideos } from "@/components/tb/home/HomeSections";
import ResultsStories from "@/components/tb/results/ResultsStories";
import { CASES_PT, AVATAR, PAGE_BG } from "@/components/tb/results/cases";
import { PageBg, ScarsSection } from "@/components/tb/results/ResultsSections";
import "@/app/styles/results.css";

export async function generateMetadata({ params: { locale } }) {
  const tr = await getTranslations({ locale, namespace: "BeforeAfter.metadata" });

  return pageMetadata({
    locale,
    path: "/antes-e-depois",
    title: tr("title"),
    description: tr("description"),
  });
}
// Resultado do site (data/portfolio.js) no formato de caso da página nova
function fromPortfolio(item, tr, en) {
  const title = tr(item.proceduresKey).replace(/\.$/, "");
  const html = tr.raw(item.proceduresKey.replace("procedures", "descriptionInt")) || "";
  const paras = [...html.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m) => m[1].trim()).filter(Boolean);
  const plain = (t) => t.replace(/<[^>]+>/g, "");
  const photos = [item.imgSrc, ...(item.images || [])].map((src) => ["ab", src]);
  const cats = ["deep-plane"];
  if (/neck/i.test(title)) cats.push("deep-neck");
  if (/blefaro|blephar/i.test(title)) cats.push("blefaro");
  if (/\bscars\b/.test(item.className)) cats.push("cicatrizes");
  return {
    id: `r${item.id}`,
    href: `/resultado/${item.id}`,
    label: en ? `Result ${item.id - 6}` : `Resultado ${item.id - 6}`,
    title,
    procs: title.split(/\s*[,|]\s*/).filter(Boolean).slice(0, 5),
    cats,
    cover: item.imgSrc,
    fit: "contain",
    photos,
    short: plain(paras[0] || item.imgAlt),
    long: paras.slice(1),
    story: photos.map(([t, src], k) => [t, src, k === 0 ? title : (en ? "Another <em>angle</em>." : "Outro <em>ângulo</em>."), plain(paras[k] || paras[0] || "")]),
  };
}

export default function BeforeAfterPage({ params }) {
  const en = params?.locale === "en";
  const t = useTranslations("BeforeAfter");
  const tr = useTranslations();

  // pt: os 15 casos do protótipo (7, 8 e 9 já incluídos) + resultados 10 e 11; en: os 5 resultados traduzidos
  const cases = en
    ? portfolios1.map((it) => fromPortfolio(it, tr, en))
    : [...CASES_PT.slice(0, 3), ...portfolios1.filter((it) => it.id >= 10).map((it) => fromPortfolio(it, tr, en)), ...CASES_PT.slice(3)];

  const cats = en
    ? [["todos", "All"], ["deep-plane", "Deep Plane"], ["deep-neck", "Deep Neck"], ["blefaro", "Blepharoplasty"], ["masculino", "Men"], ["cicatrizes", "Scars"]]
    : [["todos", "Todos"], ["deep-plane", "Deep Plane"], ["deep-neck", "Deep Neck"], ["blefaro", "Blefaroplastia"], ["masculino", "Masculino"], ["cicatrizes", "Cicatrizes"]];

  const L = en
    ? { onIg: "posted on Instagram", prev: "Previous", next: "Next", like: "Like", ask: "Ask about this case on WhatsApp", save: "Save", more: "more", full: "See full case", seeIg: "See the Instagram post", stories: "Patient stories", seeStory: "See story", filter: "Filter by category", story: "Patient story", close: "Close story" }
    : { onIg: "publicado no Instagram", prev: "Anterior", next: "Próximo", like: "Curtir", ask: "Perguntar sobre este caso no WhatsApp", save: "Salvar", more: "mais", full: "Ver o caso completo", seeIg: "Ver a publicação no Instagram", stories: "Histórias das pacientes", seeStory: "Ver história", filter: "Filtrar por categoria", story: "História da paciente", close: "Fechar história" };

  return (
    <main id="main" className="rpage">
      <PageBg src={PAGE_BG} />
      <section className="sec" id="results" style={{ paddingTop: 150 }}>
        <div className="wrap">
          <div className="head">
            <h2 className="eyebrow">{t("h2")}</h2>
            <h1 className="h2" style={{ fontSize: 52 }}>{t("atext")}</h1>
            <p className="body">{en ? "Tap a patient to see the full story, from before to after." : "Clique em uma paciente para ver a história completa, do antes ao depois."}</p>
          </div>
          <ResultsStories cases={cases} cats={cats} avatar={AVATAR} L={{ ...L, en }} />
          <div className="cta">
            <div>
              <p style={{ fontFamily: "var(--f-display)", fontSize: 28, lineHeight: 1.25 }}>{en ? "Want to know what is possible for your face?" : "Quer saber o que é possível para o seu rosto?"}</p>
              <p style={{ fontSize: 15, marginTop: 8 }} className="body">{t("p")}</p>
              <p style={{ fontSize: 12, lineHeight: 1.5, color: "var(--ink-3)", marginTop: 10 }}>{en ? "Results vary from patient to patient. Photos published with authorization, following CFM rules." : "Resultados variam de paciente para paciente. Fotos publicadas com autorização, conforme as normas do CFM."}</p>
            </div>
            <ScheduleButton trackingLocation="content" />
          </div>
        </div>
      </section>

      <HomeVideos />

      <ScarsSection />
    </main>
  );
}
