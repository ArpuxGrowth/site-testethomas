import { pageMetadata, clampDescription } from "@/lib/seo";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Carousel from "@/components/tb/results/Carousel";
import { PageBg, RelatedResults, ResultNav } from "@/components/tb/results/ResultsSections";
import { ArrowLeft } from "@/components/tb/Icons";
import "@/app/styles/results.css";
import { allPortfolios } from "@/data/portfolio";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

// Função para definir metadados dinâmicos
export async function generateMetadata({ params }) {
  const tra = await getTranslations({ locale: params.locale, namespace: 'Result.metadata' });
  const portfolioId = parseInt(params.id, 10);
  const portfolioItem = allPortfolios.find((item) => item.id === portfolioId);

  // Caso o ID seja inválido, direciona para a página 404
  if (!portfolioId || portfolioId < 7 || portfolioId > 11) {
    return {
      title: "Página não encontrada",
      description: "A página que você está procurando não existe.",
    };
  }

  // Título único por resultado (o texto da imagem descreve os procedimentos realizados)
  const procedures = portfolioItem?.imgAlt?.replace(/^Resultado de (uma |um )?/i, "");
  return pageMetadata({
    locale: params.locale,
    path: `/resultado/${portfolioId}`,
    title: procedures ? `Antes e depois: ${procedures} | Dr. Thomas Benson` : tra("title"),
    description: clampDescription(
      procedures
        ? `Resultado real de ${procedures} realizado pelo Dr. Thomas Benson, cirurgião plástico em São Paulo. Veja o antes e depois.`
        : tra("description")
    ),
    image: portfolioItem?.imgSrc,
  });
}

export default function MainPortfolioSinglePage1({ params }) {
  const t = useTranslations('Result');
  const tr = useTranslations();
  const portfolioId = parseInt(params.id, 10); // Converte o id para número
  const portfolioItem =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];

    // Verifica se o ID está fora do intervalo permitido
  if (portfolioId < 7 || portfolioId > 11 || !portfolioItem) {
    notFound(); // Retorna a página de erro 404
  }

  const procedures = tr(portfolioItem.proceduresKey);
  const descriptionInt = tr(portfolioItem.descriptionIntKey);
  const en = params.locale === "en";
  const slides = (portfolioItem.images || []).map((src, index) => ({
    src,
    alt: `Imagem ${index + 1} do portfólio`,
    w: 1350,
    h: 865,
  }));

  return (
    <main id="main" className="rpage">
      <PageBg src={portfolioItem.bannerPort} />
      <section className="phero c rs-hero">
        <div className="wrap">
          <Link href="/" className="btn clear rs-back">
            <ArrowLeft width={16} height={16} /> {t('i')}
          </Link>
          <h1>{t('atext')}</h1>
          <p className="body lead" style={{ fontSize: 18 }}>{t('p')}</p>
        </div>
      </section>

      <section className="sec tight" style={{ paddingTop: 0 }}>
        <div className="wrap rs-detail">
          <aside className="card soft rs-info">
            <h2 className="h2" style={{ fontSize: 30 }}>{t('h2')}</h2>
            <dl>
              <dt>{t('proceduresb')}</dt>
              <dd>{procedures}</dd>
            </dl>
            <div className="rs-desc">
              <b className="rs-label">{t('descriptionb')}</b>
              <div className="prose" dangerouslySetInnerHTML={{ __html: tr.raw(descriptionInt) }} />
            </div>
          </aside>
          <div className="rs-photos">
            {slides.length > 0 ? (
              <div className="post">
                <Carousel
                  slides={slides}
                  ratio="1350/865"
                  eager
                  prevLabel={en ? "Previous photo" : "Foto anterior"}
                  nextLabel={en ? "Next photo" : "Próxima foto"}
                />
              </div>
            ) : (
              <p className="body">{t('p_2')}</p>
            )}
          </div>
        </div>
      </section>

      <RelatedResults />

      <ResultNav id={portfolioItem.id} />
    </main>
  );
}
