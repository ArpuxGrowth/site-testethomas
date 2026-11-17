"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import Pager from "./Pager";
import { thumb } from "./blogUtils";

const POSTS_PER_PAGE = 12;

// Lista do blog com busca e paginação no navegador (a primeira página já vem no HTML do servidor)
export default function BlogList({ initialBlogs }) {
  const t = useTranslations("BlogClient");
  const locale = useLocale();
  const blogs = initialBlogs || [];
  const [searchQuery, setSearchQuery] = useState("");
  const [activePage, setActivePage] = useState(1);

  // Filtro de blogs com base no texto digitado (título e descrição)
  const filteredBlogs = blogs.filter((elm) =>
    `${elm.data.title} ${elm.data.description}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / POSTS_PER_PAGE));
  const first = (activePage - 1) * POSTS_PER_PAGE;
  const onPage = (i) => i >= first && i < first + POSTS_PER_PAGE;

  const handlePageChange = (newPage) => {
    if (newPage === activePage || newPage < 1 || newPage > totalPages) return;
    setActivePage(newPage);
    document.getElementById("blog-list")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="blog-list" className="blog-list">
      <form onSubmit={(e) => e.preventDefault()} className="blog-search" role="search">
        <label className="vh" htmlFor="blog-q">{locale === "en" ? "Search the blog" : "Buscar no blog"}</label>
        <svg className="blog-search-ic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
        <input
          id="blog-q"
          type="search"
          className="input clear"
          placeholder={t("placeholder")}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setActivePage(1);
          }}
        />
      </form>

      <div className="g2 blog-grid">
        {/* Todos os posts vão no HTML (links rastreáveis); os de outras páginas ficam ocultos até a troca de página */}
        {filteredBlogs.map((elm, i) => {
          const { title, description, date } = elm.data;
          const url = `/blog/${elm.uid}`;
          return (
            <Link key={elm.uid} href={url} className="post2 card soft" hidden={!onPage(i)}>
              <img
                src={thumb(elm.data.cover_image?.url, 400)}
                alt={title}
                width={150}
                height={150}
                loading={i < 4 && activePage === 1 ? undefined : "lazy"}
              />
              <div>
                <p>Thomas Benson{date ? <> · <time dateTime={date}>{date}</time></> : null}</p>
                <h3>{title}</h3>
                <small>{(description || "").substring(0, 200)}...</small>
              </div>
            </Link>
          );
        })}
      </div>
      {filteredBlogs.length === 0 && (
        <p className="body blog-empty">{locale === "en" ? "No results found." : "Nenhum resultado encontrado."}</p>
      )}

      <Pager activePage={activePage} onPageChange={handlePageChange} totalPages={totalPages} locale={locale} />
    </div>
  );
}
