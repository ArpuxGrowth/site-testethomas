import { pageMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import CtaBand from "@/components/tb/CtaBand";
import {
  HomeHero, HomeAbout, HomeVideos, HomeSafety, HomeClinic, HomeNumbers, HomePress,
  HomeBook, HomeHospital, HomeFaq, HomeBenefits, HomeTestimonials, HomeContact,
} from "@/components/tb/home/HomeSections";

export async function generateMetadata({ params: { locale } }) {
  const tr = await getTranslations({ locale, namespace: "Home.metadata" });

  return pageMetadata({
    locale,
    path: "",
    title: tr("title"),
    description: tr("description"),
  });
}

export default async function Home({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Home" });
  return (
    <main id="main">
      <HomeHero />
      <HomeAbout locale={locale} />
      <HomeVideos />
      <HomeSafety locale={locale} />
      <HomeClinic />
      <HomeNumbers />
      <HomePress locale={locale} />
      <HomeBook />
      <HomeHospital />
      <HomeFaq />
      <CtaBand text={t("sectionp")} trackingLocation="home_cta" bg="/assets/images/full-width-images/thomas-operando.jpg" bgPos="60% 30%" />
      <HomeBenefits />
      <HomeTestimonials />
      <HomeContact />
    </main>
  );
}
