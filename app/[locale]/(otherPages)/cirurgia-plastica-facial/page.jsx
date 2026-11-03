import Footer1 from "@/components/footers/Footer1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import ScheduleButton from "@/components/buttons/ScheduleButton";
import { menuItems2 } from "@/data/menu";
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
    <>
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqJsonLd(faq)} />
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems2} defaultButtonColor="black" />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-80 parallax-5"
                style={{ backgroundImage: "url(/assets/images/surgeries/dpfacelift.jpg)" }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-20">Cirurgia plástica facial em São Paulo</h1>
                        <p className="section-title-descr mb-0">
                          Rejuvenescimento e harmonia do rosto com o Dr. Thomas Benson, cirurgião plástico
                          dedicado à cirurgia da face.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
            </section>

            <section className="page-section">
              <div className="container position-relative">
                <div className="row">
                  <div className="col-lg-10">
                    <h2 className="mb-30">Cirurgia facial com foco em naturalidade</h2>
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

                    <h2 className="mt-50 mb-30">Cirurgias faciais realizadas</h2>
                  </div>
                </div>
                <div className="row">
                  {facialSurgeries.map((item) => (
                    <div key={item.url} className="col-md-6 mb-40">
                      <h3 className="h4 mb-10">
                        <Link href={`/cirurgias/${item.url}`} locale="pt">
                          {t(`${item.id}.title`)}
                        </Link>
                      </h3>
                      <p className="mb-10">{t(`${item.id}.descr`)}</p>
                      <Link href={`/cirurgias/${item.url}`} locale="pt">
                        Saiba mais sobre {t(`${item.id}.title`)}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="row">
                  <div className="col-lg-10">
                    <h2 className="mt-30 mb-30">Como escolher a cirurgia certa</h2>
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

                    <h2 className="mt-50 mb-30">Perguntas frequentes</h2>
                    {faq.map(({ question, answer }) => (
                      <div key={question} className="mb-30">
                        <h3 className="h5 mb-10">{question}</h3>
                        <p className="mb-0">{answer}</p>
                      </div>
                    ))}

                    <p className="mt-40">
                      Veja também os <Link href="/antes-e-depois">resultados de antes e depois</Link> e os{" "}
                      <Link href="/blog" locale="pt">artigos do blog</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="mt-0 mb-0" />
            <section className="page-section">
              <div className="container relative">
                <div className="row text-center">
                  <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <p className="section-descr mb-50 mb-sm-30">
                      Agende sua avaliação no consultório da Vila Nova Conceição, em São Paulo.
                    </p>
                    <div className="local-scroll">
                      <ScheduleButton />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}
