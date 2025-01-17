import qs from "qs";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;

  const query = qs.stringify(
    {
      filters: {
        Tipo: { $eq: "Blog" }, // Filtra apenas os conteúdos do tipo "Blog"
      },
      sort: ["DataPublicacao:desc"], // Ordena por data mais recente
      pagination: {
        page: parseInt(page, 10), // Página solicitada pelo cliente
        pageSize: 12, // Limite de 12 posts por página
      },
      populate: ["FotoPrincipal", "Tipo"], // Popula os campos necessários
    },
    { encodeValuesOnly: true }
  );

  const endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/noticias?${query}`;
  const token = process.env.API_TOKEN;

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

    return new Response(
      JSON.stringify({
        blogs: data.data || [],
        totalPages: data.meta.pagination.pageCount || 1,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Erro ao carregar os blogs." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
