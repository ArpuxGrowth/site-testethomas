// app/(blogs)/blog/BlogClient.jsx
"use client";

import { useState } from "react";
import Pagination from "../common/Pagination";
import Image from "next/image";
import Link from "next/link";

export default function BlogClient({ initialBlogs, totalPages }) {
  const [blogs, setBlogs] = useState(initialBlogs || []);
  const [searchQuery, setSearchQuery] = useState(""); // Fazendo o 'Search' funcionar;
  const [activePage, setActivePage] = useState(1); // Página ativa]
  const [loading, setLoading] = useState(false);

  // Atualize o conteúdo ao mudar a página
  const handlePageChange = async (newPage) => {
    if (newPage === activePage || newPage < 1 || newPage > totalPages) return; // Evita requisições desnecessárias

    setActivePage(newPage); // Atualiza a página ativa
    setLoading(true); // Exibe estado de carregamento

  try {
      const response = await fetch(`/api/fetch-blogs?page=${newPage}`);
      if (response.ok) {
          const data = await response.json();
          setBlogs(data.blogs || []);
      } else {
          console.error("Erro ao buscar dados da página:", response.status);
      }
      } catch (error) {
      console.error("Erro ao carregar blogs:", error);
      } finally {
      setLoading(false); // Oculta estado de carregamento
      }
    };

  // Filtro de blogs com base no texto digitado
  const filteredBlogs = blogs.filter((elm) =>
    elm.attributes.Titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    elm.attributes.Conteudo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function extractPlainText(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html; // Define o conteúdo HTML
    return tempDiv.textContent || tempDiv.innerText || ""; // Retorna o texto limpo
  }

  return (
    <div className="container relative">

    {/* Estado de carregamento */}
    {loading && <div className="loading"><h1>Carregando conteúdo...</h1></div>}

      {/* Search Form */}
      <div className="mb-60 mb-sm-40">
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <div className="search-wrap">
            <button
              className="search-button animate"
              type="submit"
              title="Start Search"
            >
              <i className="mi-search size-18" />
              <span className="visually-hidden">Começar busca</span>
            </button>
            <input
              type="text"
              className="form-control input-lg search-field round"
              placeholder="Buscar..."
              value={searchQuery} // Fazendo o 'Search' funcionar;
              onChange={(e) => setSearchQuery(e.target.value)} // Fazendo o 'Search' funcionar;
              required
            />
          </div>
        </form>
      </div>
      {/* End Search Form */}
      {/* Blog Posts Grid */}
      <div className="row mt-n30 mb-60 mb-sm-40">
        {/* Post Item */}
        {filteredBlogs.map((elm, i) => {
          const { Titulo, Conteudo, Url, DataPublicacao, FotoPrincipal } = elm.attributes;
          const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
          const imageUrl = FotoPrincipal?.data?.attributes?.formats?.medium?.url
            ? `${apiBaseUrl}${FotoPrincipal.data.attributes.formats.medium.url}`
            : "/assets/images/full-width-images/blog-bg-1.jpg";

          const plainTextContent = extractPlainText(Conteudo).substring(0, 120); // Limita o texto a 120 caracteres

          return (
            <div key={i} className="post-prev col-md-6 col-lg-4 mt-30">
              <div className="post-prev-container">
                <div className="post-blog-prev-img">
                  <Link href={`/blog/${Url}`}>
                    <Image src={imageUrl} width={650} height={412} alt={Titulo} />
                  </Link>
                </div>
                <h4 className="post-prev-title">
                  <Link href={`/blog/${Url}`}>{Titulo}</Link>
                </h4>
                <div className="post-prev-text">
                    <p>{plainTextContent}...</p>
                </div>
                <div className="post-prev-info clearfix">
                  <div className="float-start">
                    <a href="#">
                      <Image
                        className="/assets/images/blog/author/author-thomas.jpg"
                        width={30}
                        height={30}
                        src="/assets/images/blog/author/author-thomas.jpg"
                        alt="Thomas Benson"
                      />
                    </a>
                    <a href={`/blog/${Url}`}>Thomas Benson</a>
                  </div>
                  <div className="float-end">
                    <a href={`/blog/${Url}`}>{DataPublicacao}</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        className={"pagination justify-content-center mt-30 mt-xs-10"}
        activePage={activePage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
}
