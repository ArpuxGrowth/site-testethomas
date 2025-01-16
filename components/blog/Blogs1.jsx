"use client";
import { useState, useEffect } from "react"; // Fazendo o 'Search' funcionar;
import Pagination from "../common/Pagination";
import { blogs19 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import qs from "qs";
import truncateHTML from "./truncatedContent";

export default function Blogs1({
  itemClass = "post-prev col-md-6 col-lg-4 mt-30",
}) {

  const [blogs, setBlogs] = useState([]); // Estado para armazenar os blogs carregados da API
  const [searchQuery, setSearchQuery] = useState(""); // Fazendo o 'Search' funcionar;
  const [activePage, setActivePage] = useState(1); // Página ativa
  const [totalPages, setTotalPages] = useState(1); // Total de páginas
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Para exibir estado de carregamento

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = qs.stringify(
        {
          filters: {
            Tipo: { $eq: "Blog" }, // Filtra apenas os conteúdos do tipo "Blog"
          },
          sort: ["DataPublicacao:desc"], // Ordena por data mais recente
          pagination: {
            page: activePage, // Página inicial (alterável ao configurar paginação)
            pageSize: 12, // Limite de 12 posts por página
          },
          populate: ["FotoPrincipal", "Tipo"], // Popula os campos necessários
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
        setBlogs(data.data || []); // Salva os blogs no estado
        setTotalPages(data.meta.pagination.pageCount); // Total de páginas
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar os blogs.");
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    fetchBlogs();
  }, [activePage]);

  // Filtro de blogs com base no texto digitado
  const filteredBlogs = blogs.filter((elm) =>
    elm.attributes.Titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    elm.attributes.Conteudo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="loading"><div className="container"><h1>Carregando conteúdo...</h1></div></div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container relative">
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
          const apiBaseUrl = "http://54.91.50.25:1337";
          const imageUrl = FotoPrincipal?.data?.attributes?.formats?.medium?.url
            ? `${apiBaseUrl}${FotoPrincipal.data.attributes.formats.medium.url}`
            : "/assets/images/full-width-images/blog-bg-1.jpg";

          const truncatedContent = truncateHTML(Conteudo, 120);

          return (
          <div key={i} className={itemClass}>
            <div className="post-prev-container">
              <div className="post-prev-img">
                <Link href={`/blog/${Url}`}>
                  <Image
                    src={imageUrl}
                    width={650}
                    height={412}
                    alt={Titulo}
                  />
                </Link>
              </div>
              <h4 className="post-prev-title">
                <Link href={`/blog/${Url}`}>
                  {Titulo}
                </Link>
              </h4>
              {/* Renderiza o conteúdo como HTML */}
              <div
                className="post-prev-text"
                dangerouslySetInnerHTML={{
                  __html: truncatedContent + "...",
                }}
              />
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
        {/* End Post Item */}
      </div>
      {/* End Blog Posts Grid */}
      {/* Pagination */}
      <Pagination
        className={"pagination justify-content-center mt-30 mt-xs-10"}
        activePage={activePage}
        onPageChange={setActivePage}
        totalPages={totalPages}
      />
      {/* End Pagination */}
    </div>
  );
}
