"use client";
import { useState, useEffect } from "react"; // Fazendo o 'Search' funcionar;
import Pagination from "../common/Pagination";
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

      const endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/noticias?${query}`;
      const token = process.env.NEXT_PUBLIC_API_TOKEN;

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
    return <div className="error"><div className="container"><h1>{error}</h1></div></div>;
  }

  function extractPlainText(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html; // Define o conteúdo HTML
    return tempDiv.textContent || tempDiv.innerText || ""; // Retorna o texto limpo
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
          const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
          const imageUrl = FotoPrincipal?.data?.attributes?.formats?.medium?.url
            ? `${apiBaseUrl}${FotoPrincipal.data.attributes.formats.medium.url}`
            : "/assets/images/full-width-images/blog-bg-1.jpg";

          const plainTextContent = extractPlainText(Conteudo).substring(0, 120); // Limita o texto a 120 caracteres

          return (
          <div key={i} className={itemClass}>
            <div className="post-prev-container">
              <div className="post-blog-prev-img">
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
              {/* Prévia do conteúdo */}
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
