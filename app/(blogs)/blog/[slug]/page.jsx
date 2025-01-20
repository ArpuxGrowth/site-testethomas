import qs from "qs";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import Footer1 from "@/components/footers/Footer1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems2 } from "@/data/menu";
import BlogWidget2 from "@/components/blog/widgets/BlogWidget2";

// Carrega ParallaxContainer dinamicamente (client component)
const ParallaxContainer = dynamic(() => import('@/components/common/ParallaxContainer'), { ssr: false });

// Função para buscar dados do post no lado do servidor
async function fetchPost(slug) {
  const query = qs.stringify(
    {
      filters: {
        Url: { $eq: slug }, // Filtro pelo slug
        Tipo: { $eq: "Blog" }, // Apenas posts do tipo Blog
      },
      populate: ["FotoPrincipal", "Tipo", "Seo"], // Popula os campos necessários
    },
    { encodeValuesOnly: true }
  );

  const endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/noticias?${query}`;
  const token = process.env.API_TOKEN;

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store", // Evita cache para garantir dados atualizados
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar os dados do post.");
  }

  const data = await response.json();
  return data?.data?.[0] || null; // Retorna o primeiro resultado ou null
}

// Função para metadados dinâmicos
export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await fetchPost(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado",
      description: "O artigo solicitado não foi encontrado.",
    };
  }

  const { Seo, Titulo } = post.attributes;
  const { metaTitle, metaDescription } = Seo || {};

  return {
    title: metaTitle || Titulo || "Blog || Dr. Thomas Benson",
    description: metaDescription || "Acompanhe o blog do Dr. Thomas Benson e explore artigos, publicações e insights exclusivos sobre cirurgia plástica facial, rejuvenescimento e as mais avançadas técnicas estéticas.",
  };
}

// Função Server-side
export default async function BlogPostPage({ params }) {
  const { slug } = params;

  // Busca os dados do post
  const post = await fetchPost(slug);

  if (!post) {
    notFound();
  }

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL; // URL base da API
  const { Titulo, Conteudo, DataPublicacao, FotoPrincipal } = post.attributes;
  const imageFormats = FotoPrincipal?.data?.attributes?.formats || {};
  const defaultImage = "/assets/images/full-width-images/blog-bg-1.jpg";

  const images = Object.entries(imageFormats).reduce((acc, [key, format]) => {
    acc[key] = `${apiBaseUrl}${format?.url || defaultImage}`;
    return acc;
  }, {});

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
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage: `url(${images.large || defaultImage})`,
                }}
              >
                {/* Section Content */}
                <div className="container position-relative pt-30 pt-sm-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <div className="mb-20">
                          <a
                            href="/blog"
                            className="btn btn-mod btn-small btn-border btn-circle"
                            data-btn-animate="y"
                          >
                            <i className="mi-arrow-left align-center size-18" />{" "}
                            Voltar para a página do blog
                          </a>
                        </div>
                        <h1 className="hs-title-1 mb-20">{Titulo}</h1>
                        <div
                          className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="d-inline-block me-3">
                            <a href="#">
                              <i className="mi-clock size-16"></i>
                              <span className="visually-hidden">Data:</span> {DataPublicacao}
                            </a>
                          </div>
                          <div className="d-inline-block me-3">
                            <a href="#">
                              <i className="mi-user size-16"></i>
                              <span className="visually-hidden">Autor:</span> Thomas Benson
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
            </section>

            {/* Conteúdo do Post */}
            <section className="page-section">
              <div className="container relative">
                <div className="row">
                  <div className="col-md-8 mb-sm-80">
                    <div className="blog-item mb-80 mb-xs-40">
                      <div className="blog-item-body">
                        <div className="blog-media mb-40 mb-xs-30">
                          <Image
                            src={images.large || defaultImage}
                            width={1350}
                            height={865}
                            alt={Titulo}
                          />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: Conteudo }} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3 offset-lg-1">
                    <BlogWidget2 searchInputClass="form-control input-lg search-field round" />
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
