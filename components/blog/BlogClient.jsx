// app/(blogs)/blog/BlogClient.jsx
"use client";

import { useState } from "react";
import Pagination from "../common/Pagination";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';
import { asHTML, asText } from "@prismicio/client";

export default function BlogClient({ initialBlogs, totalPages }) {
  const t = useTranslations('BlogClient');
  const locale = useLocale();
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
      const response = await fetch(`/${locale}/api/fetch-blogs?page=${newPage}`);
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
    elm.data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asText(elm.data.content).toLowerCase().includes(searchQuery.toLowerCase())
  );

  // function extractPlainText(html) {
  //   const tempDiv = document.createElement("div");
  //   tempDiv.innerHTML = html; // Define o conteúdo HTML
  //   return tempDiv.textContent || tempDiv.innerText || ""; // Retorna o texto limpo
  // }

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
              placeholder={t('placeholder')}
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
          const titulo = elm.data.title;
          const description = elm.data.description;
          const date = elm.data.date;
          const imageUrl = elm.data.cover_image?.url;
          const uid = elm.uid;

          const plainTextContent = description.substring(0, 200); // Limita o texto a 200 caracteres

          return (
            <div key={i} className="post-prev col-md-6 col-lg-4 mt-30">
              <div className="post-prev-container">
                <div className="post-blog-prev-img">
                  <Link href={`/blog/${uid}`}>
                    <Image src={imageUrl} width={650} height={412} alt={titulo} />
                  </Link>
                </div>
                <h4 className="post-prev-title">
                  <Link href={`/blog/${uid}`}>{titulo}</Link>
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
                    <Link href={`/blog/${uid}`}>Thomas Benson</Link>
                  </div>
                  <div className="float-end">
                    <Link href={`/blog/${uid}`}>{date}</Link>
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
