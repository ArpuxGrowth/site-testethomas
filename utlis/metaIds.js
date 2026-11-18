// Cookies _fbp e _fbc da Meta (o pixel usa os mesmos). Vão junto com o formulário para o portal Arpux,
// que manda o evento neutro pela API de Conversões a partir do mini: assim a Meta liga o envio ao clique no anúncio.
function cookie(nome) {
  const m = document.cookie.match(new RegExp("(?:^|; )" + nome + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : null;
}
function gravar(nome, valor) {
  document.cookie = `${nome}=${encodeURIComponent(valor)}; Max-Age=${90 * 86400}; Path=/; SameSite=Lax; Secure`;
}
export function metaIds() {
  try {
    let fbp = cookie("_fbp");
    if (!fbp) { fbp = `fb.1.${Date.now()}.${Math.floor(Math.random() * 1e10)}`; gravar("_fbp", fbp); }
    let fbc = cookie("_fbc");
    const clid = new URLSearchParams(location.search).get("fbclid");
    if (clid && (!fbc || !fbc.endsWith(clid))) { fbc = `fb.1.${Date.now()}.${clid}`; gravar("_fbc", fbc); }
    return { fbp, fbc };
  } catch {
    return {};
  }
}
