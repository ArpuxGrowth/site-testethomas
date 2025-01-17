// app/(blogs)/blog/BlogList.jsx
import qs from "qs";

async function fetchBlogs(page = 1) {
  const query = qs.stringify(
    {
      filters: {
        Tipo: { $eq: "Blog" }, // Filtra apenas os conteúdos do tipo "Blog"
      },
      sort: ["DataPublicacao:desc"], // Ordena por data mais recente
      pagination: {
        page: page, // Página inicial
        pageSize: 12, // Limite de 12 posts por página
      },
      populate: ["FotoPrincipal", "Tipo"], // Popula os campos necessários
    },
    { encodeValuesOnly: true }
  );

  const endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/noticias?${query}`;
  const token = process.env.API_TOKEN;

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store", // Garante que não haverá cache no SSR
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar os dados da API");
  }

  const data = await response.json();
  return data;
}

export default async function BlogList({ page = 1 }) {
  let blogs = [];
  let totalPages = 1;

  try {
    const data = await fetchBlogs(page);
    blogs = data.data || [];
    totalPages = data.meta.pagination.pageCount || 1;
  } catch (error) {
    console.error("Erro ao carregar blogs:", error);
  }

  return { blogs, totalPages };
}
