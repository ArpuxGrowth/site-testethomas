// Formulário "Agendar consulta" do site: repassa o lead ao CRM do Dr. Thomas no portal Arpux (paciente + negociação em
// "Novo contato", etiqueta "thomasbenson.com.br"). O portal, no mini, manda o evento neutro view2_site à Meta pela API de
// Conversões: o token da Meta não fica na Vercel. Variável na Vercel: LEAD_SECRET (segredo combinado com o portal).
export const runtime = "nodejs";

const PORTAL = "https://portal.arpux.com.br/api/lead/thomas-benson-site";
const curto = (v, n) => String(v || "").replace(/\s+/g, " ").trim().slice(0, n);

export async function POST(req) {
  let b;
  try { b = JSON.parse(await req.text()); } catch { return Response.json({ erro: "Envio inválido." }, { status: 400 }); }
  if (b.empresa) return Response.json({ ok: true }); // campo escondido: só robô preenche
  const nome = curto(b.nome, 80);
  const tel = String(b.whatsapp || "").replace(/\D/g, "");
  if (nome.length < 2) return Response.json({ erro: "Escreva seu nome.", campo: "nome" }, { status: 400 });
  if (tel.length < 10 || tel.length > 11) return Response.json({ erro: "Informe o WhatsApp com DDD.", campo: "whatsapp" }, { status: 400 });

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim();
  let r;
  try {
    r = await fetch(PORTAL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-lead-secret": process.env.LEAD_SECRET || "", "x-visitante-ip": ip || "desconhecido" },
      body: JSON.stringify({
        nome, whatsapp: tel, procedimento: curto(b.procedimento, 60), prazo: curto(b.prazo, 40), local: curto(b.local, 60),
        pagina: curto(b.pagina, 300), event_id: curto(b.event_id, 80), fbp: curto(b.fbp, 200), fbc: curto(b.fbc, 400),
        ua: curto(req.headers.get("user-agent"), 400),
      }),
    });
  } catch {
    return Response.json({ erro: "Não conseguimos enviar agora. Tente de novo em instantes ou chame no WhatsApp." }, { status: 502 });
  }
  const d = await r.json().catch(() => ({}));
  if (!r.ok) return Response.json({ erro: d.erro && r.status < 500 && r.status !== 401 ? d.erro : "Não conseguimos enviar agora. Tente de novo em instantes ou chame no WhatsApp.", campo: d.campo }, { status: r.status === 429 ? 429 : r.status === 400 ? 400 : 502 });
  return Response.json({ ok: true });
}
