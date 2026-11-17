import { pageMetadata, clampDescription } from "@/lib/seo";
import { notFound } from "next/navigation";
import { pressItems } from "@/data/pressgallery";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { getTranslations } from 'next-intl/server';
import PageHero from "@/components/tb/PageHero";
import CtaBand from "@/components/tb/CtaBand";
import { ArrowLeft, External } from "@/components/tb/Icons";
import "@/app/styles/content.css";

// Dinamic metadata
export async function generateMetadata({ params }) {
  const pressId = parseInt(params.id, 10);
  const pressNews = pressItems.find((item) => item.id === pressId);
  const t = await getTranslations({ locale: params.locale, namespace: 'PressNewsPage.PressItems' });

  // Verificação de id e direcionamento em caso de 'id inválido'
  if (!pressNews || pressId < 1 || pressId > 12) {
    return {
      title: "Página não encontrada",
      description: "A página que você está procurando não existe.",
    };
  }

  // Título e descrição de forma dinâmica
  return pageMetadata({
    locale: params.locale,
    path: `/imprensa/${pressId}`,
    title: `${t(`${pressId}.title`, pressNews.title)} | Dr. Thomas Benson`,
    description: clampDescription(
      pressNews.alt || "Veja as aparições do Dr. Thomas Benson na mídia como referência em cirurgia plástica facial."
    ),
    image: pressNews.src,
    type: "article",
  });
}

export default function PressNewsPage1({ params }) {
  const t = useTranslations('PressNewsPage');
  const tp = useTranslations('pagePress');
  const pressId = parseInt(params.id, 10); // Converte o id para número
  const pressNews =
    pressItems.filter((elm) => elm.id == params.id)[0] || pressItems[0];

    // Verifica se o ID está fora do intervalo permitido
    if (pressId < 1 || pressId > 12 || !pressId) {
      notFound(); // Erro!
    }

  const translatedTitle = t(`PressItems.${pressId}.title`, pressNews.title);
  const translatedArticle = t.raw(`PressItems.${pressId}.article`, { defaultValue: pressNews.article });
  const isArticle = [1, 2, 3, 8, 12].includes(pressNews.id); // Matérias em texto; as demais são vídeos
  const en = params.locale === "en";

  return (
    <main id="main" className="tb-content">
      <PageHero
        crumbs={[
          { href: "/", label: en ? "Home" : "Início" },
          { href: "/imprensa", label: tp('h2') },
          { href: `/imprensa/${pressId}`, label: translatedTitle },
        ]}
        title={translatedTitle}
      >
        <div className="press-back">
          <Link href="/imprensa" className="btn clear">
            <ArrowLeft width={16} height={16} /> {t('i')}
          </Link>
        </div>
      </PageHero>

      <section className="sec tight press-body">
        <div className="wrap narrow">
          {isArticle ? (
            <article className="card soft box press-article">
              <img className="press-cover" src={pressNews.src} alt={pressNews.alt} width={1350} height={865} fetchPriority="high" />
              <div className="prose" dangerouslySetInnerHTML={{ __html: translatedArticle }} />
              <div className="press-ext">
                <a href={pressNews.externalLink} target="_blank" rel="noopener noreferrer" className="btn gold">
                  {t('a')} <External width={16} height={16} />
                </a>
              </div>
            </article>
          ) : (
            <div className="press-video card soft">
              <iframe
                src={pressNews.video}
                title="YouTube video player"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </section>

      <CtaBand text={t('p')} trackingLocation="content" />
    </main>
  );
}
