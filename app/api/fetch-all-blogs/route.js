import qs from "qs";

export async function GET() {
  const query = qs.stringify(
    {
      filters: {
        Tipo: { $eq: "Blog" },
      },
      sort: ["DataPublicacao:desc"],
      populate: ["FotoPrincipal", "Tipo"],
      pagination: {
        pageSize: 354, // Limita o retorno a uma quantidade muito grande (ajuste conforme necessidade)
      },
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
