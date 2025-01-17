import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

import { notFound } from "next/navigation";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import { menuItems2 } from "@/data/menu";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { pressItems } from "@/data/pressgallery";
import ScheduleButton from "@/components/buttons/ScheduleButton";

// Dinamic metadata
export async function generateMetadata({ params }) {
  const pressId = parseInt(params.id, 10);
  const pressNews = pressItems.find((item) => item.id === pressId);

  // Verificação de id e direcionamento em caso de 'id inválido'
  if (!pressNews || pressId < 1 || pressId > 12) {
    return {
      title: "Página não encontrada",
      description: "A página que você está procurando não existe.",
    };
  }

  // Título e descrição de forma dinâmica
  return {
    title: `${pressNews.title}`,
    description: pressNews.alt || "Veja as aparições do Dr. Thomas Benson na mídia como referência em cirurgia plástica facial.",
  };
}

export default function PressNewsPage1({ params }) {
  const pressId = parseInt(params.id, 10); // Converte o id para número
  const pressNews =
    pressItems.filter((elm) => elm.id == params.id)[0] || pressItems[0];

    // Verifica se o ID está fora do intervalo permitido
    if (pressId < 1 || pressId > 12 || !pressId) {
      notFound(); // Erro!
    }

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems2} defaultButtonColor="black" />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-80 parallax-5"
                style={{
                  backgroundImage:
                    `url(${pressNews.src})`,
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <div className="mb-20">
                          <a
                            href="/imprensa"
                            className="btn btn-mod btn-small btn-border btn-circle"
                            data-btn-animate="y"
                          >
                            <i className="mi-arrow-left align-center size-18" />{" "}
                            Voltar para a página de imprensa
                          </a>
                        </div>
                        <h1 className="hs-title-10 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text={pressNews.title} />
                          </span>
                        </h1>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            <>
              {/* Section */}
              <section className="page-section">
                <div className="container relative">
                  {/* Row */}
                  <div className="row mb-n40">
                    {/* Col */}
                    <div className="col-12 mb-40">
                      {pressNews.id === 1 || pressNews.id === 2 || pressNews.id === 3 || pressNews.id === 8 || pressNews.id === 12 ? (  // Exibição alternativa para IDs 1, 2, 3, 5 e 9
                        <div className="article">
                          {<div
                            dangerouslySetInnerHTML={{ __html: pressNews.article }} // Linha alterada
                          />}
                          <div className="text-center wow fadeInUp">
                            <a
                                href={pressNews.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-mod btn-border btn-large btn-round"
                                data-btn-animate="y"
                              >
                                Leia o artigo completo
                            </a>
                          </div>
                        </div>
                      ) : (
                      // Exibição padrão com vídeo
                      <div className="video">
                        <iframe
                            width={"100%"}
                            height={720}
                            src={pressNews.video}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen=""
                          />
                      </div>
                      )}
                    </div>
                    {/* Col */}
                  </div>
                  {/* End Row */}
                </div>
              </section>
              {/* End Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Section */}
              <section className="page-section">
                <div className="container relative">
                  <div className="row text-center wow fadeInUp">
                    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                      <p className="section-descr mb-50 mb-sm-30">
                        Agende agora mesmo seu horário com o Dr. Thomas Benson.
                      </p>
                      <div className="local-scroll">
                        <ScheduleButton />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Section */}
            </>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
