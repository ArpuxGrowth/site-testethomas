import Footer1 from "@/components/footers/Footer1";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { menuItems2 } from "@/data/menu";
import RelatedProject10 from "@/components/portfolio/relatedProjects/RelatedProject10";
import { allPortfolios } from "@/data/portfolio";

// Função para definir metadados dinâmicos
export async function generateMetadata({ params }) {
  const portfolioId = parseInt(params.id, 10);
  const portfolioItem = allPortfolios.find((item) => item.id === portfolioId);

  // Caso o ID seja inválido, direciona para a página 404
  if (!portfolioId || portfolioId < 7 || portfolioId > 12) {
    return {
      title: "Página não encontrada",
      description: "A página que você está procurando não existe.",
    };
  }

  // Define o título e a descrição dinamicamente
  return {
    title: "Resultado || Dr. Thomas Benson",
    description: portfolioItem.imgAlt || "Resultado de excelência do procedimento realizado pelo Dr. Thomas Benson com antes e depois.",
  };
}

export default function MainPortfolioSinglePage1({ params }) {
  const portfolioId = parseInt(params.id, 10); // Converte o id para número
  const portfolioItem =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];

    // Verifica se o ID está fora do intervalo permitido
  if (portfolioId < 7 || portfolioId > 12 || !portfolioItem) {
    notFound(); // Retorna a página de erro 404
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
                    `url(${portfolioItem.bannerPort})`,
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
                            href="/"
                            className="btn btn-mod btn-small btn-border btn-circle"
                            data-btn-animate="y"
                          >
                            <i className="mi-arrow-left align-center size-18" />{" "}
                            Voltar para a página inicial
                          </a>
                        </div>
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Resultado" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s"
                            >
                              As novas técnicas de rejuvenescimento facial como o 
                              Deep Plane e o Deep Neck trazem várias vantagens aos resultados.
                            </p>
                          </div>
                        </div>
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
                <div className="container position-relative">
                  <div className="row">
                    {/* Project Details */}
                    <div className="col-md-4 mb-sm-40 wow fadeInUp">
                      <div className="block-sticky">
                        <h2 className="h3 mb-20">Detalhes</h2>
                        <hr className="mb-20" />
                        {/* <div className="row text-gray small">
                          <div className="col-sm-4">
                            <b>Data:</b>
                          </div>
                          <div className="col-sm-8"> </div>
                        </div>
                        <hr className="mb-20" />
                        <div className="row text-gray small">
                          <div className="col-sm-4">
                            <b>Paciente:</b>
                          </div>
                          <div className="col-sm-8"> </div>
                        </div>
                        <hr className="mb-20" /> */}
                        <div className="row text-gray small">
                          <div className="col-sm-4">
                            <b>Procedimentos:</b>
                          </div>
                          <div className="col-sm-8">
                            {portfolioItem.procedures}
                          </div>
                        </div>
                        <hr className="mb-20" />
                        <div className="text-gray small">
                          <div>
                            <b>Descrição:</b>
                          </div>
                          {<div
                            dangerouslySetInnerHTML={{ __html: portfolioItem.descriptionInt }}
                          />}
                        </div>
                        <hr className="mb-20" />
                      </div>
                    </div>
                    {/* End Project Details */}
                    <div className="col-md-8">
                      <div className="mb-n30">
                      {portfolioItem.images && portfolioItem.images.length > 0 ? (
                        portfolioItem.images.map((image, index) => (
                          <div className="mb-30 wow fadeInUp" key={index}>
                            <Image
                              src={image}
                              alt={`Imagem ${index + 1} do portfólio`}
                              width={1350}
                              height={865}
                            />
                          </div>
                        ))
                      ) : (
                        <p className="mb-30 wow text-gray fadeInUp align-center">Não há resultados disponíveis por aqui.</p>
                      )}
                        {/* Old Photo Item Mold
                        {/* Photo Item
                        <div className="mb-30 wow fadeInUp">
                          <Image
                            src="/assets/images/portfolio/full-resultado1-1.jpg"
                            alt="Image Description"
                            width={1350}
                            height={865}
                          />
                        </div>
                        {/* End Photo Item
                        {/* Photo Item
                        <div className="mb-30 wow fadeInUp">
                          <Image
                            src="/assets/images/portfolio/full-resultado1-2.jpg"
                            alt="Image Description"
                            width={1350}
                            height={865}
                          />
                        </div>
                        {/* End Photo Item
                        {/* Photo Item
                        <div className="mb-30 wow fadeInUp">
                          <Image
                            src="/assets/images/portfolio/full-resultado1-3.jpg"
                            alt="Image Description"
                            width={1350}
                            height={865}
                          />
                        </div>
                        {/* End Photo Item
                        {/* Photo Item
                        <div className="mb-30 wow fadeInUp">
                          <Image
                            src="/assets/images/portfolio/full-resultado1-4.jpg"
                            alt="Image Description"
                            width={1350}
                            height={865}
                          />
                        </div>
                        {/* End Photo Item
                         */}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Section */}

              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}

              {/* Section */}
              <section className="page-section">
                <RelatedProject10 />
              </section>
              {/* End Section */}

              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}

              {/* Work Navigation */}
              <div className="work-navigation clearfix">
                {/* Link para o item anterior */}
                <Link
                  href={`/main-portfolio-single-1/${
                    portfolioItem.id - 1 < 7 ? 12 : portfolioItem.id - 1
                  }`}
                  className="work-prev"
                >
                  <span>
                    <i className="mi-arrow-left size-24 align-middle" /> Anterior
                  </span>
                </Link>

                {/* Link para todos os resultados */}
                <a href="/before-after/#results" className="work-all">
                  <span>
                    <i className="mi-close size-24 align-middle" /> Todos os resultados
                  </span>
                </a>

                {/* Link para o próximo item */}
                <Link
                  href={`/main-portfolio-single-1/${
                    portfolioItem.id + 1 > 12 ? 7 : portfolioItem.id + 1
                  }`}
                  className="work-next"
                >
                  <span>
                    Próximo <i className="mi-arrow-right size-24 align-middle" />
                  </span>
                </Link>
              </div>

            </>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
