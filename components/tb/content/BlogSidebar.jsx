"use client";
import { useState, useMemo } from "react";
import { categories } from "@/data/categories";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { thumb } from "./blogUtils";

// Barra lateral do post (substitui o BlogWidget2: busca, últimas postagens e categorias)

// Data usada para ordenar: o campo "date" do post ou, se vazio, a data de publicação no Prismic
const getPostDate = (post) => post.data.date || post.first_publication_date || "";

const MAX_TITLE_LENGTH = 40;
const ELLIPSIS = "...";

// Títulos longos são cortados na última palavra inteira dos 37 primeiros caracteres + "..."
const truncateTitle = (title) => {
  if (title.length <= MAX_TITLE_LENGTH) return title;
  const cutLength = MAX_TITLE_LENGTH - ELLIPSIS.length;
  const visible = title.slice(0, MAX_TITLE_LENGTH);
  const sentenceEnd = Math.max(visible.lastIndexOf("."), visible.lastIndexOf("?"), visible.lastIndexOf("!"));
  if (sentenceEnd >= cutLength - 1) return visible.slice(0, sentenceEnd + 1);
  let cut = title.slice(0, cutLength);
  const lastSpace = cut.lastIndexOf(" ");
  if (title[cutLength] !== " " && lastSpace > 0) cut = cut.slice(0, lastSpace);
  cut = cut.replace(/[\s,;:]+$/, "");
  return /[.?!]$/.test(cut) ? cut : `${cut}${ELLIPSIS}`;
};

export default function BlogSidebar({ posts, recentPostsCount = 5 }) {
  const t = useTranslations("BlogWidget2");
  const [searchTerm, setSearchTerm] = useState("");

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => getPostDate(b).localeCompare(getPostDate(a))),
    [posts]
  );

  // Sem busca, mostra só os posts mais recentes; com busca, procura em todos (título e descrição)
  const term = searchTerm.toLowerCase();
  const filteredPosts = term
    ? sortedPosts.filter((post) => `${post.data.title} ${post.data.description}`.toLowerCase().includes(term))
    : sortedPosts.slice(0, recentPostsCount);

  return (
    <div className="bside">
      <form onSubmit={(e) => e.preventDefault()} role="search">
        <label className="vh" htmlFor="bside-q">{t("placeholder")}</label>
        <input
          id="bside-q"
          type="search"
          className="input clear"
          placeholder={t("placeholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div className="card soft bside-box">
        <h3 className="bside-t">{t("h3")}</h3>
        <ul className="bside-posts">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <li key={post.id}>
                <Link href={`/blog/${post.uid}`} title={post.data.title}>
                  <img src={thumb(post.data.cover_image?.url, 220)} alt={post.data.title} width={100} height={56} loading="lazy" />
                  <span>
                    <b>{truncateTitle(post.data.title)}</b>
                    <small>{t("span")} {post.data.date}</small>
                  </span>
                </Link>
              </li>
            ))
          ) : (
            <li className="bside-none">{t("li")}</li>
          )}
        </ul>
      </div>

      <div className="card soft bside-box">
        <h3 className="bside-t">{t("h3_2")}</h3>
        <div className="chips bside-cats">
          {categories.map((category) => {
            const label = t(`categories.${category.key}`);
            return (
              <button
                key={category.id}
                type="button"
                className="chip"
                aria-pressed={term === category.key}
                onClick={() => setSearchTerm(term === category.key ? "" : category.key)}
              >
                {label} <span className="n">{category.count}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
