import qs from "qs";
import { categories } from "@/data/categories";

async function fetchPosts(searchTerm = "") {
  const query = qs.stringify(
    {
      filters: {
        Tipo: { $eq: "Blog" },
        ...(searchTerm ? { Titulo: { $containsi: searchTerm } } : {}),
      },
      populate: ["FotoPrincipal", "Tipo", "Seo"],
      sort: ["DataPublicacao:desc"],
      pagination: {
        pageSize: 5,
      },
    },
    { encodeValuesOnly: true }
  );

  const endpoint = `${process.env.API_BASE_URL}/api/noticias?${query}`;
  const token = process.env.API_TOKEN;

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar dados da API");
  }

  const data = await response.json();
  return data.data;
}

export default async function BlogWidget2Server({ searchTerm = "" }) {
  const posts = await fetchPosts(searchTerm);
  return { posts, categories };
}
