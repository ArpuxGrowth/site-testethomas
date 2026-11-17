import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

// Chamada pelo webhook do Prismic quando um post é publicado.
// Se REVALIDATE_SECRET estiver configurada na Vercel, exige o mesmo valor no campo "secret" do webhook
// (ou em ?secret=). Sem a variável, segue aberta como antes, para não interromper a atualização do blog.
export async function POST(request) {
  const esperado = process.env.REVALIDATE_SECRET;
  if (esperado) {
    let recebido = new URL(request.url).searchParams.get("secret");
    if (!recebido) {
      try {
        recebido = (await request.json())?.secret;
      } catch {
        recebido = null;
      }
    }
    if (recebido !== esperado) {
      return NextResponse.json({ revalidated: false }, { status: 401 });
    }
  }

  revalidateTag("prismic");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
