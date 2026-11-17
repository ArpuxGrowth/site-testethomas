import { pageMetadata } from "@/lib/seo";
import { getTranslations } from 'next-intl/server';
import CtaBand from "@/components/tb/CtaBand";
import { HomePress, HomeBenefits, HomeBook, HomeContact } from "@/components/tb/home/HomeSections";
import {
  DoctorHero, DoctorStory, DoctorTimeline, DoctorTitles, DoctorHospitals, DoctorCare,
  DoctorNumbers, DoctorResults, DoctorVideos, DoctorTestimonials,
} from "@/components/tb/doctor/DoctorSections";
import "@/app/styles/doctor.css";

export async function generateMetadata({ params: { locale } }) {
  const tr = await getTranslations({ locale, namespace: "About.metadata" });

  return pageMetadata({
    locale,
    path: "/dr-thomas",
    title: tr("title"),
    description: tr("description"),
  });
}
export default async function About2({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "About" });
  return (
    <main id="main" className="pg-doctor">
      <DoctorHero locale={locale} />
      <DoctorStory locale={locale} />
      <DoctorTimeline locale={locale} />
      <DoctorTitles locale={locale} />
      <DoctorCare locale={locale} />
      <DoctorHospitals locale={locale} />
      <DoctorNumbers />
      <HomePress locale={locale} />
      <DoctorResults locale={locale} />
      <CtaBand text={t("p2")} trackingLocation="about_cta" bg="/assets/images/full-width-images/thomas-operando.jpg" bgPos="60% 30%" />
      <DoctorVideos />
      <HomeBenefits />
      <DoctorTestimonials locale={locale} />
      <HomeBook />
      <HomeContact />
    </main>
  );
}
