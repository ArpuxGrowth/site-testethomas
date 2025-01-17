'use client';

import { useEffect, useState } from 'react';
import qs from 'qs';
import Footer1 from '@/components/footers/Footer1';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ParallaxContainer = dynamic(() => import('@/components/common/ParallaxContainer'), { ssr: false });
import Header1Multipage from '@/components/headers/Header1Multipage';
import { menuItems2 } from '@/data/menu';
import BlogWidget2 from '@/components/blog/widgets/BlogWidget2';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }) {
  const { slug } = params; // Pega o slug da URL dinâmica
  const [post, setPost] = useState(null); // Estado para armazenar os dados do post
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const query = qs.stringify(
        {
          filters: {
            Url: { $eq: slug }, // Filtro pelo slug
            Tipo: { $eq: "Blog" }, // Filtro para incluir apenas conteúdos do tipo "Blog"
          },
          populate: ["FotoPrincipal", "Tipo", "Seo"], // Popula os campos desejados
        },
        { encodeValuesOnly: true }
      );
  
      const endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/noticias?${query}`;
      const token = process.env.NEXT_PUBLIC_API_TOKEN;
  
      try {
        const response = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.status}`);
        }
  
        const data = await response.json();
        if (data?.data?.length > 0) {
          setPost(data.data[0]); // Seleciona o primeiro resultado
          console.log(data.data[0]); // Exibe os dados no console
        } else {
          setError("Post não encontrado");
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };
  
    fetchPost();
  }, [slug]);
  

  if (error) {
    return notFound(); // Ou <div className="error">Erro: {error}</div>;
  }

  if (!post) {
    return <div className="loading"><div className="container position-relative pt-30 pt-sm-50"><h1>Carregando publicação...</h1></div></div>;
  }

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL; // URL base da API
  const imageFormats = post?.attributes?.FotoPrincipal?.data?.attributes?.formats || {};
  const defaultImage = "/assets/images/full-width-images/blog-bg-1.jpg";

  const images = Object.entries(imageFormats).reduce((acc, [key, format]) => {
    acc[key] = `${apiBaseUrl}${format?.url || defaultImage}`;
    return acc;
  }, {});

      
  const { Titulo, Conteudo, DataPublicacao, Seo } = post.attributes;
  const { metaTitle, metaDescription } = Seo || {}; // Dados de SEO

   return (
    <>
      {/* Dinâmico Head para SEO */}
      <Head>
        <title>{metaTitle || Titulo}</title>
        <meta name="description" content={metaDescription || Conteudo.substring(0, 150)} />
        <meta name="keywords" content={`blog, ${Titulo}`} />
      </Head>

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
                      {/* Page Title */}
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
                        <h1 className="hs-title-1 mb-20">
                            {Titulo}
                        </h1>

                        {/* <!-- Author, Categories --> */}
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
                              <span className="visually-hidden">Autor:</span>{" "}
                              Thomas Benson
                            </a>
                          </div>
                        </div>
                        {/* <!-- End Author, Categories --> */}
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>

            {/* Section */}
            <section className="page-section">
              <div className="container relative">
                <div className="row">
                  {/* Content */}
                  <div className="col-md-8 mb-sm-80">
                    {/* Post */}
                    <div className="blog-item mb-80 mb-xs-40">
                      <div className="blog-item-body">
                        {/* Media Gallery */}
                        <div className="blog-media mb-40 mb-xs-30">
                          <div className="owl-item">
                            <Image
                              src={images.large || defaultImage}
                              width={1350}
                              height={865}
                              alt={Titulo}
                            />
                          </div>
                        </div>
                        {/* Conteúdo */}
                        <div 
                          dangerouslySetInnerHTML={{ __html: Conteudo }}
                        />
                        {/* End Conteúdo */}
                      </div>
                    </div>
                    {/* End Post */}
                  </div>

                  {/* Sidebar */}
                  <div className="col-md-4 col-lg-3 offset-lg-1">
                    <BlogWidget2 params={params} searchInputClass="form-control input-lg search-field round" />
                  </div>
                  {/* End Sidebar */}
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
