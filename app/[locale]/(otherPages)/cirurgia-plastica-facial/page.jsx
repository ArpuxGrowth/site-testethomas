import ScheduleButton from "@/components/tb/ScheduleButton";
import Faq from "@/components/tb/Faq";
import CtaBand from "@/components/tb/CtaBand";
import SurgeryCard from "@/components/tb/surgeries/SurgeryCard";
import "@/app/styles/surgeries.css";
import { surgeriesItems } from "@/data/surgeries";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  pageMetadata,
  localizedUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  JsonLd,
  PHYSICIAN_ID,
  SITE_NAME,
} from "@/lib/seo";

// Página pilar: reúne todas as cirurgias faciais e aponta para cada uma (só em português)
const PATH = "/cirurgia-plastica-facial";
const TITLE = "Cirurgia Plástica Facial em São Paulo | Dr. Thomas Benson";
const DESCRIPTION =
  "Cirurgia plástica facial em São Paulo com o Dr. Thomas Benson: Deep Plane Facelift, lifting facial, pescoço, pálpebras, nariz, testa, lábios e orelhas.";

const faq = [
  {
    question: "Qual cirurgia plástica facial é indicada para o meu caso?",
    answer:
      "Depende de onde está a principal queixa: flacidez do rosto e pescoço (lifting facial, Deep Plane, Deep Neck Lift), olhos (blefaroplastia, lifting frontal), nariz (rinoplastia), lábios (lifting labial), perda de volume (lipoenxertia facial) ou orelhas (otoplastia). A indicação é feita na consulta.",
  },
  {
    question: "É possível fazer mais de uma cirurgia facial ao mesmo tempo?",
    answer:
      "Sim. É comum associar, por exemplo, Deep Plane Facelift, Deep Neck Lift, blefaroplastia e lipoenxertia facial no mesmo tempo cirúrgico. A combinação depende da avaliação e das condições de saúde do paciente.",
  },
  {
    question: "Quanto tempo leva a recuperação de uma cirurgia facial?",
    answer:
      "Varia conforme o procedimento: cerca de 1 semana para o lifting labial, 10 a 15 dias para a blefaroplastia e a rinoplastia, e 2 a 3 semanas para o lifting facial e o Deep Neck Lift.",
  },
  {
    question: "Onde o Dr. Thomas Benson atende?",
    answer:
      "No consultório da Av. Antônio Joaquim de Moura Andrade, 315, na Vila Nova Conceição, ao lado do Parque Ibirapuera, em São Paulo. Pacientes de outras cidades e do exterior podem iniciar o contato à distância.",
  },
];

export async function generateMetadata({ params: { locale } }) {
  return pageMetadata({
    locale,
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    ptOnly: true,
    noindex: locale !== "pt",
  });
}

export default async function FacialSurgeryPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "surgeriesItems" });
  const facialSurgeries = surgeriesItems.filter((item) => item.mix === "facials");

  const pageUrl = localizedUrl("pt", PATH);
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: pageUrl,
    inLanguage: "pt-BR",
    about: facialSurgeries.map((item) => ({
      "@type": "MedicalProcedure",
      name: item.title,
      url: localizedUrl("pt", `/cirurgias/${item.url}`),
    })),
    reviewedBy: { "@id": PHYSICIAN_ID },
  };
  const breadcrumb = breadcrumbJsonLd([
    { name: SITE_NAME, url: localizedUrl("pt") },
    { name: "Cirurgia plástica facial", url: pageUrl },
  ]);

  return (
    <main id="main" className="sg-page">
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqJsonLd(faq)} />

      <section className="phero sg-hero">
        <div className="wrap sg-hero-cols">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">{SITE_NAME}</Link><span aria-hidden="true">/</span><span aria-current="page">Cirurgia plástica facial</span>
            </nav>
            <p className="eyebrow">Cirurgia da face</p>
            <h1>Cirurgia plástica facial em São Paulo</h1>
            <p className="body lead" style={{ fontSize: 18 }}>Rejuvenescimento e harmonia do rosto com o Dr. Thomas Benson, cirurgião plástico dedicado à cirurgia da face.</p>
            <div style={{ marginTop: 30 }}><ScheduleButton trackingLocation="hero" /></div>
          </div>
          <figure className="card soft sg-hero-fig">
            <img src="/assets/images/casos/caso-semana-deep-plane-semiperfil.jpg" alt="Antes e depois de Restore Lift (Deep Plane Facelift) realizado pelo Dr. Thomas Benson, vista em semiperfil" width="1080" height="1350" fetchPriority="high" />
            <figcaption>Caso real · Restore Lift, o Deep Plane Facelift do Dr. Thomas</figcaption>
          </figure>
        </div>
      </section>

      <section className="sec sg-body">
        <div className="wrap">
          <div className="narrow prose sg-prose">
            <h2>Cirurgia facial com foco em naturalidade</h2>
            <p>
              O envelhecimento do rosto acontece em várias camadas ao mesmo tempo: a pele perde
              elasticidade, a gordura muda de lugar e diminui, os ligamentos afrouxam e os músculos
              perdem sustentação. Por isso, um bom resultado em cirurgia plástica facial depende de
              tratar a causa de cada alteração, e não apenas de esticar a pele.
            </p>
            <p>
              O Dr. Thomas Benson, PhD, com título pelo European Board of Plastic Surgery, dedica sua
              prática à cirurgia da face e usa técnicas que reposicionam as estruturas profundas, como o
              Deep Plane Facelift e o Deep Neck Lift. O objetivo é um rosto descansado, com contornos
              mais jovens, que continue parecendo com o próprio paciente.
            </p>
          </div>

          <div className="head sg-head">
            <p className="eyebrow">Procedimentos</p>
            <h2 className="h2">Cirurgias faciais realizadas</h2>
          </div>
          <ul className="g3 sg-grid">
            {facialSurgeries.map((item) => (
              <SurgeryCard
                key={item.url}
                item={item}
                locale="pt"
                linkLocale="pt"
                title={t(`${item.id}.title`)}
                descr={t(`${item.id}.descr`)}
                more={`Saiba mais sobre ${t(`${item.id}.title`)}`}
              />
            ))}
          </ul>

          <div className="narrow prose sg-prose sg-after">
            <h2>Como escolher a cirurgia certa</h2>
            <ul>
              <li>
                <strong>Flacidez no rosto e no pescoço:</strong>{" "}
                <Link href="/cirurgias/lifting-facial" locale="pt">lifting facial</Link>,{" "}
                <Link href="/cirurgias/deep-plane-facelift" locale="pt">Deep Plane Facelift</Link> e{" "}
                <Link href="/cirurgias/deep-neck-lift" locale="pt">Deep Neck Lift</Link>.
              </li>
              <li>
                <strong>Olhar cansado:</strong>{" "}
                <Link href="/cirurgias/blefaroplastia" locale="pt">blefaroplastia</Link> e{" "}
                <Link href="/cirurgias/lifting-frontal" locale="pt">lifting frontal</Link>.
              </li>
              <li>
                <strong>Nariz:</strong>{" "}
                <Link href="/cirurgias/rinoplastia" locale="pt">rinoplastia estruturada</Link>.
              </li>
              <li>
                <strong>Lábios e sorriso:</strong>{" "}
                <Link href="/cirurgias/lifting-labial" locale="pt">lifting labial</Link>.
              </li>
              <li>
                <strong>Perda de volume:</strong>{" "}
                <Link href="/cirurgias/lipoenxertia-facial" locale="pt">lipoenxertia facial</Link>.
              </li>
              <li>
                <strong>Orelhas:</strong>{" "}
                <Link href="/cirurgias/otoplastia" locale="pt">otoplastia</Link>.
              </li>
            </ul>
            <p>
              Muitas vezes o melhor resultado vem da combinação de procedimentos no mesmo tempo
              cirúrgico. Essa decisão é tomada na consulta, depois do exame do rosto e de uma conversa
              sobre expectativas, recuperação e riscos.
            </p>
          </div>

          <div className="narrow sg-faq">
            <h2 className="h2">Perguntas frequentes</h2>
            <Faq items={faq.map(({ question, answer }) => ({ q: question, a: answer }))} headingLevel={3} />
            <p className="body sg-also">
              Veja também os <Link href="/antes-e-depois">resultados de antes e depois</Link> e os{" "}
              <Link href="/blog" locale="pt">artigos do blog</Link>.
            </p>
          </div>
        </div>
      </section>

      <CtaBand text="Agende sua avaliação no consultório da Vila Nova Conceição, em São Paulo." />
    </main>
  );
}
