"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { categories } from "@/data/categories";
import { Link } from "@/i18n/routing";
import { useLocale } from 'next-intl';
import { useTranslations } from "next-intl";

export default function BlogWidget2({
  searchInputClass = "form-control input-md search-field input-circle",
  itemsPerPage = 5, // Define o número de posts exibidos por página
}) {
  const t = useTranslations('BlogWidget2');
  const cat = useTranslations();
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`/${locale}/api/fetch-all-blogs`); // Nova rota
      if (!response.ok) {
        throw new Error("Erro ao buscar dados da API");
      }
      const data = await response.json();
      setAllPosts(data.blogs || []);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = allPosts.filter((post) => {
      const { Titulo, Conteudo } = post.attributes;
      const textContent = `${Titulo} ${Conteudo}`.toLowerCase();
      return textContent.includes(searchTerm.toLowerCase()); // Filtra pelo termo de busca
    });
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reinicia a página ao buscar
  }, [searchTerm, allPosts]);

  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const defaultImage = "/assets/images/full-width-images/blog-bg-1.jpg";

  return (
    <>
      <div className="widget">
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <div className="search-wrap">
            <input
              type="text"
              className={searchInputClass}
              placeholder={t('placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
          </div>
        </form>
      </div>

      <div className="widget">
        <h3 className="widget-title">{t('h3')}</h3>
        <div className="widget-body">
          <ul className="clearlist widget-posts">
            {displayedPosts.length > 0 ? (
              displayedPosts.map((post) => {
                const imageUrl =
                  post.attributes.FotoPrincipal?.data?.attributes?.formats
                    ?.thumbnail?.url
                    ? `${apiBaseUrl}${post.attributes.FotoPrincipal.data.attributes.formats.thumbnail.url}`
                    : defaultImage;
                return (
                  <li key={post.id} className="clearfix">
                    <Link href={`/blog/${post.attributes.Url}`}>
                      <Image
                        src={imageUrl}
                        height={140}
                        width={100}
                        alt={post.attributes.Titulo}
                        className="widget-posts-img"
                      />
                    </Link>
                    <div className="widget-posts-descr">
                      <Link
                        href={`/blog/${post.attributes.Url}`}
                        title={post.attributes.Titulo}
                      >
                        {post.attributes.Titulo}
                      </Link>
                      <span>{t('span')} {post.attributes.DataPublicacao}</span>
                    </div>
                  </li>
                );
              })
            ) : (
              <li>{t('li')}</li>
            )}
          </ul>
        </div>
      </div>

      <div className="widget">
        <h3 className="widget-title">{t('h3_2')}</h3>
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
