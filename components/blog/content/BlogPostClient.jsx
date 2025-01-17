"use client";

import Footer1 from "@/components/footers/Footer1";
import dynamic from "next/dynamic";
import Header1Multipage from "@/components/headers/Header1Multipage";
import BlogWidget2 from "@/components/blog/widgets/BlogWidget2";
import Image from "next/image";
import Head from "next/head";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  { ssr: false }
);

export default function BlogPostClient({ post }) {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const imageFormats = post.attributes?.FotoPrincipal?.data?.attributes?.formats || {};
  const defaultImage = "/assets/images/full-width-images/blog-bg-1.jpg";

  const images = Object.entries(imageFormats).reduce((acc, [key, format]) => {
    acc[key] = `${apiBaseUrl}${format?.url || defaultImage}`;
    return acc;
  }, {});

  const { Titulo, Conteudo, DataPublicacao, Seo } = post.attributes;
  const { metaTitle, metaDescription } = Seo || {};

  return (
    <>
      <Head>
        <title>{metaTitle || Titulo}</title>
        <meta name="description" content={metaDescription || Conteudo.substring(0, 150)} />
        <meta name="keywords" content={`blog, ${Titulo}`} />
      </Head>

      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={[]} defaultButtonColor="black" />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage: `url(${images.large || defaultImage})`,
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  <div className="text-center">
                    <h1 className="hs-title-1 mb-20">{Titulo}</h1>
                    <div className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp">
                      <div className="d-inline-block me-3">
                        <a href="#">
                          <i className="mi-clock size-16"></i> {DataPublicacao}
                        </a>
                      </div>
                      <div className="d-inline-block me-3">
                        <a href="#">
                          <i className="mi-user size-16"></i> Thomas Benson
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
            </section>

            <section className="page-section">
              <div className="container relative">
                <div className="row">
                  <div className="col-md-8 mb-sm-80">
                    <Image
                      src={images.large || defaultImage}
                      width={1350}
                      height={865}
                      alt={Titulo}
                    />
                    <div dangerouslySetInnerHTML={{ __html: Conteudo }} />
                  </div>
                  <div className="col-md-4 col-lg-3 offset-lg-1">
                    <BlogWidget2 />
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
