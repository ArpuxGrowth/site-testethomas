import { pageMetadata, clampDescription } from "@/lib/seo";
import { notFound } from "next/navigation";
import { pressItems } from "@/data/pressgallery";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { getTranslations } from 'next-intl/server';
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
  const excerpt = isArticle ? "" : (en ? "Watch the feature with Dr. Thomas Benson." : "Assista à matéria com o Dr. Thomas Benson.");

  return (
    <main id="main" className="tb-content">
      <section className="phero press-top">
        <div className="wrap press-split">
          <figure className="card soft press-fig">
            <img src={pressNews.src} alt={pressNews.alt} width={1350} height={865} fetchPriority="high" />
          </figure>
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">{en ? "Home" : "Início"}</Link><span aria-hidden="true">/</span>
              <Link href="/imprensa">{tp('h2')}</Link><span aria-hidden="true">/</span>
              <Link href={`/imprensa/${pressId}`} aria-current="page">{translatedTitle}</Link>
            </nav>
            <p className="eyebrow">{isArticle ? (en ? "Article" : "Matéria") : (en ? "Video" : "Vídeo")}</p>
            <h1>{translatedTitle}</h1>
            {isArticle
              ? <div className="prose press-full" dangerouslySetInnerHTML={{ __html: translatedArticle }} />
              : excerpt && <p className="body press-lead">{excerpt}</p>}
            <div className="press-actions">
              {isArticle && pressNews.externalLink ? (
                <a href={pressNews.externalLink} target="_blank" rel="noopener noreferrer" className="btn gold">{t('a')} <External width={16} height={16} /></a>
              ) : (
                <a href="#materia" className="btn gold">{en ? "Watch" : "Assistir"}</a>
              )}
              <Link href="/imprensa" className="btn clear"><ArrowLeft width={16} height={16} /> {t('i')}</Link>
            </div>
          </div>
        </div>
      </section>

      {!isArticle && (
        <section className="sec tight press-body" id="materia">
          <div className="wrap narrow">
            <div className="press-video card soft">
              <iframe
                src={pressNews.video}
                title="YouTube video player"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      <CtaBand text={t('p')} trackingLocation="content" />
    </main>
  );
}
