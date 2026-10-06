"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { categories } from "@/data/categories";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

// Data usada para ordenar: o campo "date" do post ou, se vazio, a data de publicação no Prismic
const getPostDate = (post) => post.data.date || post.first_publication_date;

const MAX_TITLE_LENGTH = 40;
const ELLIPSIS = "...";

// Títulos longos são cortados na última palavra inteira dos 37 primeiros caracteres + "..."
// (no máximo 40 no total). Se uma frase terminar (. ? !) no ponto do corte, o título termina nela.
const truncateTitle = (title) => {
  if (title.length <= MAX_TITLE_LENGTH) return title;

  const cutLength = MAX_TITLE_LENGTH - ELLIPSIS.length;
  const visible = title.slice(0, MAX_TITLE_LENGTH);
  const sentenceEnd = Math.max(
    visible.lastIndexOf("."),
    visible.lastIndexOf("?"),
    visible.lastIndexOf("!")
  );
  if (sentenceEnd >= cutLength - 1) return visible.slice(0, sentenceEnd + 1);

  // Volta até o fim da última palavra inteira (a não ser que o título seja uma palavra só)
  let cut = title.slice(0, cutLength);
  const lastSpace = cut.lastIndexOf(" ");
  if (title[cutLength] !== " " && lastSpace > 0) cut = cut.slice(0, lastSpace);
  cut = cut.replace(/[\s,;:]+$/, ""); // Tira espaço ou vírgula/dois-pontos soltos no fim

  return /[.?!]$/.test(cut) ? cut : `${cut}${ELLIPSIS}`;
};

export default function BlogWidget2({
  searchInputClass = "form-control input-md search-field input-circle",
  recentPostsCount = 5,
  posts,
}) {
  const t = useTranslations("BlogWidget2");
  const cat = useTranslations();
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  // const fetchPosts = async () => {
  //   try {
  //     const response = await fetch(`/${locale}/api/fetch-all-blogs`); // Nova rota
  //     if (!response.ok) {
  //       throw new Error("Erro ao buscar dados da API");
  //     }
  //     const data = await response.json();
  //     setAllPosts(data.blogs || []);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   // fetchPosts();
  // }, []);

  // Posts do mais recente para o mais antigo
  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => getPostDate(b).localeCompare(getPostDate(a))),
    [posts]
  );

  // Sem busca, mostra só os posts mais recentes; com busca, procura em todos (título e descrição)
  const term = searchTerm.toLowerCase();
  const filteredPosts = term
    ? sortedPosts.filter((post) => {
        const { title, description } = post.data;
        return `${title} ${description}`.toLowerCase().includes(term);
      })
    : sortedPosts.slice(0, recentPostsCount);

  // const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  // const defaultImage = "/assets/images/full-width-images/blog-bg-1.jpg";

  return (
    <>
      <div className="widget">
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <div className="search-wrap">
            <input
              type="text"
              className={searchInputClass}
              placeholder={t("placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
          </div>
        </form>
      </div>

      <div className="widget">
        <h3 className="widget-title">{t("h3")}</h3>
        <div className="widget-body">
          <ul className="clearlist widget-posts">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => {
                const imageUrl = post.data.cover_image?.url;
                return (
                  <li key={post.id} className="clearfix">
                    <Link href={`/blog/${post.uid}`}>
                      <Image
                        src={imageUrl}
                        width={100}
                        height={56}
                        alt={post.data.title}
                        className="widget-posts-img"
                        // Padroniza todas as miniaturas em 16:9, cortando o excesso da capa
                        style={{ width: 100, height: "auto", aspectRatio: "16 / 9", objectFit: "cover" }}
                      />
                    </Link>
                    <div className="widget-posts-descr">
                      <Link href={`/blog/${post.uid}`} title={post.data.title}>
                        {truncateTitle(post.data.title)}
                      </Link>
                      <span>
                        {t("span")} {post.data.date}
                      </span>
                    </div>
                  </li>
                );
              })
            ) : (
              <li>{t("li")}</li>
            )}
          </ul>
        </div>
      </div>

      <div className="widget">
        <h3 className="widget-title">{t("h3_2")}</h3>
        <div className="widget-body">
          <ul className="clearlist widget-menu">
            {categories.map((category) => (
              <li key={category.id}>
                <a href="#" title="">
                  {cat(`BlogWidget2.categories.${category.key}`)}
                </a>
                <small> - {category.count} </small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
