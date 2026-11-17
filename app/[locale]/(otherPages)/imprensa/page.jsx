import { pageMetadata } from "@/lib/seo";
import React from "react";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import PageHero from "@/components/tb/PageHero";
import CtaBand from "@/components/tb/CtaBand";
import PressGrid from "@/components/tb/content/PressGrid";
import "@/app/styles/content.css";

export async function generateMetadata({ params: { locale } }) {
  const tr = await getTranslations({ locale, namespace: "pagePress.metadata" });

  return pageMetadata({
    locale,
    path: "/imprensa",
    title: tr("title"),
    description: tr("description"),
  });
}
export default function PressPage({ params }) {
  const t = useTranslations('pagePress');
  const en = params?.locale === "en";
  return (
    <main id="main" className="tb-content">
      <PageHero
        center
        crumbs={[{ href: "/", label: en ? "Home" : "Início" }, { label: t('h2') }]}
        eyebrow={<span role="heading" aria-level={2}>{t('h2')}</span>}
        title={t('atext')}
      />
      <section className="sec tight press-sec">
        <div className="wrap">
          <PressGrid />
        </div>
      </section>
      <CtaBand
        text={<span dangerouslySetInnerHTML={{ __html: t.raw('p') }} />}
        trackingLocation="content"
      />
    </main>
  );
}
