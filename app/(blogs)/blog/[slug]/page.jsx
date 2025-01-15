'use client';

import { useEffect, useState } from 'react';
import qs from 'qs';
import Footer1 from '@/components/footers/Footer1';
import dynamic from 'next/dynamic';

const ParallaxContainer = dynamic(() => import('@/components/common/ParallaxContainer'), { ssr: false });
import Header1Multipage from '@/components/headers/Header1Multipage';
import { menuItems2 } from '@/data/menu';
import BlogWidget2 from '@/components/blog/widgets/BlogWidget2';

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
  
      const endpoint = `http://54.91.50.25:1337/api/noticias?${query}`;
      const token =
        "ec6b2077b4d3d27723a211ea924a659effe0e6c4267aa7438abe9032fd87940a6098623ac2f747aa96de30d51bc50b597ff3b78306859c0422b1d44ff1af7d105c24fea69ca52c9566fdcb54cb30b8e6eedb6dcda923c77e7abbbfec80e5b9c5f61c09009bfbb1dc101709b20d79035b9e34a31fe94100a99581a2eabc5a1478";
  
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
    return <div className="error">Erro: {error}</div>;
  }

  if (!post) {
    return <div className="loading">Carregando...</div>;
  }

  const apiBaseUrl = "http://54.91.50.25:1337"; // URL base da API
  const imageUrl =
    post?.attributes?.FotoPrincipal?.data?.attributes?.formats?.large?.url
      ? `${apiBaseUrl}${post.attributes.FotoPrincipal.data.attributes.formats.large.url}`
      : "/assets/images/full-width-images/default-image.jpg";

  const { Titulo, Conteudo, createdAt, updatedAt, Tipo, WpReference, Url, Destaque, HomePage, DataPublicacao } = post.attributes;

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
                  backgroundImage: `url(${imageUrl})`,
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

                        {/* <!-- Author, Categories, Comments --> */}
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
                        {/* <!-- End Author, Categories, Comments --> */}
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>

            {post?.attributes?.FotoPrincipal?.data?.attributes?.formats && (
              <div className="image-debug-section">
                <h2>Imagens Disponíveis (Debug)</h2>
                {Object.entries(post.attributes.FotoPrincipal.data.attributes.formats).map(([key, format]) => (
                  <div key={key} style={{ marginBottom: "20px" }}>
                    <h3>{key.toUpperCase()}:</h3>
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL || ""}${format.url}`}
                      alt={`Formato ${key}`}
                      style={{ maxWidth: "100%", border: "1px solid #ddd", borderRadius: "8px" }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Section */}
            <section className="page-section">
              <div className="container relative">
                <div className="row">
                  {/* Content */}
                  <div className="col-md-8 mb-sm-80">
                    {/* Post */}
                    <div className="blog-item mb-80 mb-xs-40">
                      <div className="blog-item-body">
                        {/* Conteúdo */}
                        <div 
                          dangerouslySetInnerHTML={{ __html: Conteudo }}
                        />
                        {/* End Conteúdo */}
                      </div>
                    </div>
                    {/* End Post */}

                    {/* Prev/Next Post */}
                    <div className="clearfix mt-40">
                      <a href={`/blog/${Url - 1}`} className="blog-item-more left">
                        <i className="mi-chevron-left" />
                        &nbsp;Último post
                      </a>
                      <a href={`/blog/${Url + 1}`} className="blog-item-more right">
                        Próximo post&nbsp;
                        <i className="mi-chevron-right" />
                      </a>
                    </div>
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
