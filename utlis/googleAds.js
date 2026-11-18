// Conversões do Google Ads (conta do Dr. Thomas, tag AW-856746112).
// O GTM do site só tem tags do GA4; a tag do Google Ads é carregada aqui, pelo próprio site.
export const GOOGLE_ADS_ID = "AW-856746112";

// Ações de conversão já existentes na conta (rótulos do Google Ads)
const ROTULOS = {
  whatsapp: "JvMrCL_GsZQZEIDRw5gD", // Site | Clique no WhatsApp
  formulario: "URnzCOGkpZQZEIDRw5gD", // Site | Formulário enviado
};

// Carrega o gtag do Google Ads e grava o clique do anúncio (gclid) nos cookies do próprio domínio
export const GOOGLE_ADS_SCRIPT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
window.gtag=window.gtag||gtag;gtag('js',new Date());gtag('config','${GOOGLE_ADS_ID}');`;

/**
 * Registra uma conversão no Google Ads. Usa beacon para chegar mesmo quando a página sai logo em seguida
 * (o WhatsApp abre na mesma aba). Nunca lança erro.
 *
 * @param {"whatsapp"|"formulario"} tipo
 */
export function conversaoGoogleAds(tipo) {
  try {
    const rotulo = ROTULOS[tipo];
    if (!rotulo || typeof window.gtag !== "function") return;
    window.gtag("event", "conversion", { send_to: `${GOOGLE_ADS_ID}/${rotulo}`, transport_type: "beacon" });
  } catch {
    // o rastreamento nunca pode atrapalhar a pessoa
  }
}
