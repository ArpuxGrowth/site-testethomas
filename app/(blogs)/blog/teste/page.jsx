'use client';

import { useState, useEffect } from "react";
import qs from "qs"; // Certifique-se de instalar a biblioteca `qs` com `npm install qs`
import Footer1 from "@/components/footers/Footer1";
import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false,
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";

import BlogWidget from "@/components/blog/widgets/BlogWidget";
import { menuItems2 } from "@/data/menu";
import { allBlogs } from "@/data/blogs";
import Image from "next/image";

export default function MainBlogSinglePageSidebarRight({ params }) {
  const [apiData, setApiData] = useState(null); // Estado para armazenar os dados da API
  const [error, setError] = useState(null); // Estado para armazenar erros
  const [page, setPage] = useState(1); // Página atual
  const pageSize = 10; // Tamanho da página

  const blog = allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];

  // Realiza a requisição à API com paginação
  useEffect(() => {
    const fetchApiData = async () => {
      const query = qs.stringify(
        {
          pagination: {
            page: page,
            pageSize: pageSize,
          },
        },
        { encodeValuesOnly: true }
      );

      const endpoint = `http://54.91.50.25:1337/api/noticias?${query}`;
      const token = `ec6b2077b4d3d27723a211ea924a659effe0e6c4267aa7438abe9032fd87940a6098623ac2f747aa96de30d51bc50b597ff3b78306859c0422b1d44ff1af7d105c24fea69ca52c9566fdcb54cb30b8e6eedb6dcda923c77e7abbbfec80e5b9c5f61c09009bfbb1dc101709b20d79035b9e34a31fe94100a99581a2eabc5a1478`;

      try {
        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Erro ao buscar: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setApiData(data); // Armazena os dados no estado
      } catch (err) {
        console.error(err);
        setError(err.message); // Armazena o erro no estado
      }
    };

    fetchApiData();
  }, [page]); // Reexecuta quando a página muda

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
                        <h1 className="hs-title-1 mb-20">
                          <span className="wow charsAnimIn" data-splitting="chars">
                            <AnimatedText text={blog.title || blog.postTitle} />
                          </span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
            </section>

            {/* Mostra dados da API */}
            {apiData && (
              <div className="api-data">
                <h2>Dados da API (Página {page}):</h2>
                <pre>{JSON.stringify(apiData, null, 2)}</pre>
              </div>
            )}

            {/* Mostra erro, se houver */}
            {error && (
              <div className="api-error">
                <p style={{ color: "red" }}>Erro: {error}</p>
              </div>
            )}

            {/* Botões de Paginação */}
            <div className="pagination-controls">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                Página Anterior
              </button>
              <button onClick={() => setPage((prev) => prev + 1)}>
                Próxima Página
              </button>
            </div>
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}
