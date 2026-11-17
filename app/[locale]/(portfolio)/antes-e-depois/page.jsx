import { pageMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { portfolios1 } from "@/data/portfolio";
import ScheduleButton from "@/components/tb/ScheduleButton";
import { HomeVideos } from "@/components/tb/home/HomeSections";
import ResultsFeed from "@/components/tb/results/ResultsFeed";
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
export default function BeforeAfterPage({ params }) {
  const en = params?.locale === "en";
  const t = useTranslations('BeforeAfter');
  const tm = useTranslations('BeforeAfterMassonry');
  const tr = useTranslations();

  const filters = [
    { name: tm('filters.all'), category: "all" },
    { name: tm('filters.scars'), category: "scars" },
    { name: tm('filters.post-surgical'), category: "post-surgical" },
  ];
  const cases = portfolios1.map((item) => {
    const cats = ["scars", "post-surgical"].filter((c) => item.className.split(/\s+/).includes(c));
    return {
      id: item.id,
      href: `/resultado/${item.id}`,
      cats,
      catLabel: cats.map((c) => tm(`filters.${c}`)).join(" · "),
      title: tr(item.proceduresKey),
      facts: [],
      slides: [
        { src: item.imgSrc, alt: item.imgAlt, w: 650, h: 773 },
        ...(item.images || []).map((src, i) => ({
          src,
          alt: `${item.imgAlt} (${en ? "photo" : "foto"} ${i + 2})`,
          w: 1350,
          h: 865,
          fit: "contain",
        })),
      ],
    };
  });

  return (
    <main id="main" className="rpage">
      <PageBg src="/assets/images/full-width-images/thomas-bg-1.jpg" />
      <section className="sec rs-top" id="results">
        <div className="wrap">
          <div className="head">
            <h2 className="eyebrow">{t('h2')}</h2>
            <h1 className="h2 rs-h1">{t('atext')}</h1>
          </div>
          <ResultsFeed
            cases={cases}
            filters={filters}
            labels={{
              filter: en ? "Filter by category" : "Filtrar por categoria",
              prev: en ? "Previous photo" : "Foto anterior",
              next: en ? "Next photo" : "Próxima foto",
              item: tm('itemdescr'),
            }}
          />
        </div>
      </section>

      <HomeVideos />

      <ScarsSection />

      <section className="sec tight">
        <div className="wrap">
          <div className="cta">
            <p className="rs-cta-t">{t('p')}</p>
            <ScheduleButton />
          </div>
        </div>
      </section>
    </main>
  );
}
