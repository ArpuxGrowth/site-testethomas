"use client";

import { useState } from "react";
import Pagination from "../common/Pagination";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const POSTS_PER_PAGE = 12;

export default function BlogClient({ initialBlogs }) {
  const t = useTranslations('BlogClient');
  const blogs = initialBlogs || [];
  const [searchQuery, setSearchQuery] = useState(""); // Fazendo o 'Search' funcionar;
  const [activePage, setActivePage] = useState(1); // Página ativa

  // Filtro de blogs com base no texto digitado (título e descrição)
  const filteredBlogs = blogs.filter((elm) =>
    `${elm.data.title} ${elm.data.description}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Paginação feita no navegador sobre os posts filtrados
  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / POSTS_PER_PAGE));
  const displayedBlogs = filteredBlogs.slice(
    (activePage - 1) * POSTS_PER_PAGE,
    activePage * POSTS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage === activePage || newPage < 1 || newPage > totalPages) return;

    setActivePage(newPage);
    // Volta para o início da lista ao trocar de página
    document.getElementById("blog-list")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setActivePage(1); // Reinicia a página ao buscar
  };

  // function extractPlainText(html) {
  //   const tempDiv = document.createElement("div");
  //   tempDiv.innerHTML = html; // Define o conteúdo HTML
  //   return tempDiv.textContent || tempDiv.innerText || ""; // Retorna o texto limpo
  // }

  return (
    <div className="container relative" id="blog-list">
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
              onChange={handleSearchChange} // Fazendo o 'Search' funcionar;
              required
            />
          </div>
        </form>
      </div>
      {/* End Search Form */}
      {/* Blog Posts Grid */}
      <div className="row mt-n30 mb-60 mb-sm-40">
        {/* Post Item */}
        {displayedBlogs.map((elm) => {
          const titulo = elm.data.title;
          const description = elm.data.description;
          const date = elm.data.date;
          const imageUrl = elm.data.cover_image?.url;
          const uid = elm.uid;

          const plainTextContent = description.substring(0, 200); // Limita o texto a 200 caracteres

          return (
            <div key={uid} className="post-prev col-md-6 col-lg-4 mt-30">
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
