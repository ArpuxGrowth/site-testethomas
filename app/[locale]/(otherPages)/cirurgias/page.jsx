import { pageMetadata } from "@/lib/seo";
import { surgeriesItems } from "@/data/surgeries";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/tb/PageHero";
import CtaBand from "@/components/tb/CtaBand";
import SurgeriesFilter from "@/components/tb/surgeries/SurgeriesFilter";
import SurgeryCard from "@/components/tb/surgeries/SurgeryCard";
import "@/app/styles/surgeries.css";

export async function generateMetadata({ params: { locale } }) {
  const tr = await getTranslations({ locale, namespace: "Surgeries.metadata" });

  return pageMetadata({
    locale,
    path: "/cirurgias",
    title: tr("title"),
    description: tr("description"),
  });
}
export default async function SurgeriesPage({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Surgeries" });
  const tf = await getTranslations({ locale, namespace: "SurgeriesPortfolio" });
  const ts = await getTranslations({ locale, namespace: "surgeriesItems" });
  const en = locale === "en";

  const count = (c) => (c === "all" ? surgeriesItems.length : surgeriesItems.filter((i) => i.mix === c).length);
  const filters = ["all", "facials", "others"].map((category) => ({
    category,
    name: tf(`filters.${category}`),
    count: count(category),
  }));

  return (
    <main id="main">
      <PageHero
        image="/assets/images/full-width-images/surgeries-bg-1.jpg"
        imagePos="55% 40%"
        eyebrow={t("h2")}
        title={t("atext")}
        crumbs={[{ href: "/", label: en ? "Home" : "Início" }, { label: t("h2") }]}
      />

      <section className="sec sg-sec" aria-label={t("h2")}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">{en ? "Procedures" : "Procedimentos"}</p>
            <h2 className="h2">{en ? "Learn about each surgery." : "Conheça cada cirurgia."}</h2>
          </div>
          <SurgeriesFilter filters={filters} label={en ? "Filter surgeries" : "Filtrar cirurgias"}>
            {surgeriesItems.map((item) => (
              <SurgeryCard
                key={item.url}
                item={item}
                locale={locale}
                title={ts(`${item.id}.title`)}
                descr={ts(`${item.id}.descr`)}
              />
            ))}
          </SurgeriesFilter>
        </div>
      </section>

      <CtaBand text={t("p")} />
    </main>
  );
}
