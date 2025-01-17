"use client";
import { useState, useEffect } from "react";
import qs from "qs";
import { categories } from "@/data/categories";
import Image from "next/image";

export default function BlogWidget2({ params,
  searchInputClass = "form-control input-md search-field input-circle",
}) {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para termo de busca
  const [posts, setPosts] = useState([]); // Estado para resultados da API

  // Função para buscar posts mais recentes ou com base na busca
  const fetchPosts = async (queryParam = {}) => {
    const query = qs.stringify(
      {
        filters: {
          Tipo: { $eq: "Blog" }, // Apenas posts do tipo "Blog"
          ...queryParam, // Adiciona os filtros dinamicamente (termo de busca, etc.)
        },
        populate: ["FotoPrincipal", "Tipo", "Seo"], // Popula os campos desejados
        sort: ["DataPublicacao:desc"], // Ordena por data de publicação mais recente
        pagination: {
          pageSize: 5, // Limite de resultados
        },
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
        throw new Error("Erro ao buscar dados da API");
      }

      const data = await response.json();
      setPosts(data.data); // Atualiza o estado com os resultados
    } catch (error) {
      console.error(error);
    }
  };

  // Efeito para buscar posts iniciais
  useEffect(() => {
    fetchPosts(); // Busca os posts mais recentes ao carregar o componente
  }, []);

  // Efeito para buscar posts com base no termo de busca
  useEffect(() => {
    if (searchTerm) {
      fetchPosts({ Titulo: { $containsi: searchTerm } }); // Busca por título ao digitar
    } else {
      fetchPosts(); // Restaura os posts mais recentes se o campo de busca estiver vazio
    }
  }, [searchTerm]);

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL; // URL base da API
  const defaultImage = "/assets/images/full-width-images/blog-bg-1.jpg";

  return (
    <>
      <div className="widget">
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <div className="search-wrap">
            <button
              className="search-button animate"
              type="submit"
              title="Start Search"
              onClick={() => fetchPosts({ Titulo: { $containsi: searchTerm } })} // Atualiza os resultados ao clicar
            >
              <i className="mi-search size-18" />
              <span className="visually-hidden">Iniciar busca</span>
            </button>
            <input
              type="text"
              className={searchInputClass}
              placeholder="Buscar..."
              value={searchTerm} // 3. Ligando o input com o estado de busca
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
          </div>
        </form>
      </div>
      {/* End Search Widget */}
      {/* Widget */}
      <div className="widget">
        <h3 className="widget-title">Últimas postagens</h3>
        <div className="widget-body">
          <ul className="clearlist widget-posts">
          {posts.length > 0 ? (
            posts.map((post) => {
              const imageFormats =
                post?.attributes?.FotoPrincipal?.data?.attributes?.formats || {};
              const imageUrl = imageFormats?.thumbnail
                ? `${apiBaseUrl}${imageFormats.thumbnail.url}`
                : defaultImage;

              return (
                <li key={post.id} className="clearfix">
                  <a href={`/blog/${post.attributes.Url}`}>
                    <Image
                      src={imageUrl}
                      height={140}
                      width={100}
                      alt={post.attributes.Titulo}
                      className="widget-posts-img"
                    />
                  </a>
                  <div className="widget-posts-descr">
                    <a href={`/blog/${post.attributes.Url}`} title={post.attributes.Titulo}>
                      {post.attributes.Titulo}
                    </a>
                    <span>Postado em {post.attributes.DataPublicacao}</span>
                  </div>
                </li>
              );
             })
            ) : (
              <li>Nenhum resultado encontrado.</li>
            )}
          </ul>
        </div>
      </div>
      {/* End Widget */}
      {/* Widget */}
      <div className="widget">
        <h3 className="widget-title">Categorias</h3>
        <div className="widget-body">
          <ul className="clearlist widget-menu">
            {categories.map((category) => (
              <li key={category.id}>
                <a href="#" title="">
                  {category.name}
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
