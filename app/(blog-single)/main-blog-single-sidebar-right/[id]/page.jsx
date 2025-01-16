'use client'

import { useState, useEffect } from "react";
import Footer1 from "@/components/footers/Footer1";
import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";

import BlogWidget from "@/components/blog/widgets/BlogWidget";
import { menuItems2 } from "@/data/menu";
import { allBlogs } from "@/data/blogs";
import Image from "next/image";

// export const metadata = {
//   title: "Artigo || Dr. Thomas Benson",
//   description: "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
// };

export default function MainBlogSinglePageSidebarRight({ params }) {
  const [apiData, setApiData] = useState(null); // Estado para armazenar os dados da API
  const [error, setError] = useState(null); // Estado para armazenar erros

  const blog = allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];

  // Realiza a requisição à API
  useEffect(() => {
    const fetchApiData = async () => {
      const endpoint = "http://54.91.50.25:1337/api/noticias"; // Substitua pelo seu endpoint
      const token = `ec6b2077b4d3d27723a211ea924a659effe0e6c4267aa7438abe9032fd87940a6098623ac2f747aa96de30d51bc50b597ff3b78306859c0422b1d44ff1af7d105c24fea69ca52c9566fdcb54cb30b8e6eedb6dcda923c77e7abbbfec80e5b9c5f61c09009bfbb1dc101709b20d79035b9e34a31fe94100a99581a2eabc5a1478`; // Substitua pelo seu token

      try {
        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Token para autenticação
          },
        });

        if (!response.ok) {
          throw new Error(`Erro ao buscar: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        setApiData(data); // Armazena os dados no estado
      } catch (err) {
        console.error(err);
        setError(err.message); // Armazena o erro no estado
      }
    };

    fetchApiData();
  }, []);

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
                  backgroundImage: `url(${blog.bannerPort})`,
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
                          <span className="wow charsAnimIn" data-splitting="chars">
                            <AnimatedText text={blog.title || blog.postTitle} />
                          </span>
                        </h1>

                        {/* <!-- Author, Categories, Comments --> */}
                        <div
                          className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="d-inline-block me-3">
                            <a href="#">
                              <i className="mi-clock size-16"></i>
                              <span className="visually-hidden">Data:</span> {blog.date}
                            </a>
                          </div>
                          <div className="d-inline-block me-3">
                            <a href="#">
                              <i className="mi-user size-16"></i>
                              <span className="visually-hidden">Autor:</span>{" "}
                              {blog.authorName}
                            </a>
                          </div>
                          <div className="d-inline-block me-3">
                            <i className="mi-folder size-16"></i>
                            <span className="visually-hidden">Categorias:</span>
                            <a href="#"> {blog.theme}</a>
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
                              src={blog.bannerPort}
                              width={1350}
                              height={865}
                              alt={blog.title}
                            />
                          </div>
                        </div>
                        {/* Conteúdo */}
                        <div 
                          dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                        {/* End Conteúdo */}
                      </div>
                    </div>
                    {/* End Post */}

                    {/* Prev/Next Post */}
                    <div className="clearfix mt-40">
                      <a href={`/main-blog-single-sidebar-right/${blog.id - 1}`} className="blog-item-more left">
                        <i className="mi-chevron-left" />
                        &nbsp;Último post
                      </a>
                      <a href={`/main-blog-single-sidebar-right/${blog.id + 1}`} className="blog-item-more right">
                        Próximo post&nbsp;
                        <i className="mi-chevron-right" />
                      </a>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="col-md-4 col-lg-3 offset-lg-1">
                    <BlogWidget params={params} searchInputClass="form-control input-lg search-field round" />
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
