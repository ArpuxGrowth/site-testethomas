import { pageMetadata, JsonLd, localizedUrl, PHYSICIAN_ID, SITE_URL } from "@/lib/seo";
import SeriesPlayer, { WatchButton } from "@/components/tb/series/SeriesPlayer";
import ScheduleButton from "@/components/tb/ScheduleButton";
import { EPISODES } from "@/components/tb/series/data";

// Página nova: série documental "Reescrevendo o Tempo" (aba "Assista à série" do menu)
export async function generateMetadata({ params: { locale } }) {
  const pt = locale !== "en";
  return pageMetadata({
    locale,
    path: "/assista-a-serie",
    title: pt
      ? "Reescrevendo o Tempo: série documental sobre Deep Plane | Dr. Thomas Benson"
      : "Rewriting Time: documentary series on Deep Plane | Dr. Thomas Benson",
    description: pt
      ? "Assista à série documental com o Dr. Thomas Benson: quatro pacientes reais contam a consulta, a cirurgia Deep Plane e a recuperação, em episódios de 6 a 8 minutos."
      : "Watch the documentary series with Dr. Thomas Benson: four real patients share the consultation, the Deep Plane surgery and the recovery, in 6 to 8 minute episodes.",
    image: `${SITE_URL}/assets/images/serie/dr-thomas-serie.jpg`,
    type: "video.tv_show",
  });
}

export default function SeriesPage({ params: { locale } }) {
  const pt = locale !== "en";
  const seriesJsonLd = {
    "@context": "https://schema.org",
    "@type": "TVSeries",
    name: "Reescrevendo o Tempo",
    url: localizedUrl(locale, "/assista-a-serie"),
    image: `${SITE_URL}/assets/images/serie/dr-thomas-serie.jpg`,
    numberOfEpisodes: EPISODES.length,
    inLanguage: "pt-BR",
    genre: pt ? "Documentário" : "Documentary",
    actor: { "@id": PHYSICIAN_ID },
    episode: EPISODES.map((e) => ({ "@type": "TVEpisode", episodeNumber: +e.num, name: `${e.name}: ${e[pt ? "pt" : "en"].title}`, description: e[pt ? "pt" : "en"].text })),
  };
  return (
    <main id="pg-series">
      <JsonLd data={seriesJsonLd} />
      <SeriesPlayer locale={locale} />

      <section className="nf-sec" aria-label={pt ? "Guia dos episódios" : "Episode guide"} style={{ paddingTop: 150 }}>
        <div className="wrap">
          <h2 className="nf-h">{pt ? "Guia dos episódios" : "Episode guide"}</h2>
          <div className="nf-guide">
            {EPISODES.map((e) => {
              const x = e[pt ? "pt" : "en"];
              return (
                <article key={e.num} className="nf-stat" style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: 18, alignItems: "start" }}>
                  <img src={e.img} alt="" loading="lazy" style={{ width: 96, height: 128, objectFit: "cover", borderRadius: 10 }} />
                  <div>
                    <small style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.6, color: "#d6bb85" }}>EP {e.num}</small>
                    <h3 style={{ fontFamily: "var(--f-display)", fontWeight: 500, fontSize: 22, marginTop: 4 }}>{e.name}: {x.title}</h3>
                    <p>{x.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="nf-sec" aria-label={pt ? "A técnica" : "The technique"}>
        <div className="wrap cols" style={{ alignItems: "center" }}>
          <div className="head">
            <p className="eyebrow">{pt ? "A técnica" : "The technique"}</p>
            <h2 className="h2">{pt ? <>Não é sobre puxar a pele. É sobre <span className="it">reposicionar.</span></> : <>It is not about pulling the skin. It is about <span className="it">repositioning.</span></>}</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <p className="body">{pt ? "No Deep Plane, o trabalho acontece nos planos profundos da face. A pele continua aderida à musculatura, com toda a sua vascularização e nutrição. Os tecidos são devolvidos ao lugar onde estavam, e a pele simplesmente acompanha." : "In the Deep Plane, the work happens in the deep layers of the face. The skin stays attached to the muscles, with all of its blood supply and nourishment. The tissues are returned to where they used to be, and the skin simply follows."}</p>
            <p className="body">{pt ? "O resultado é mais natural, mais duradouro e sem o aspecto “repuxado” das técnicas antigas." : "The result is more natural, longer lasting and without the “pulled” look of older techniques."}</p>
            <p className="nf-quote">{pt ? "“Natural não significa sutil. É um resultado eficaz, mas natural.”" : "“Natural does not mean subtle. It is an effective result, but a natural one.”"}<br /><span style={{ fontFamily: "var(--f-body)", fontStyle: "normal", fontSize: 13, letterSpacing: 2, color: "rgba(255,255,255,.6)" }}>DR. THOMAS BENSON</span></p>
          </div>
        </div>
      </section>

      <section className="nf-sec" aria-label={pt ? "O cirurgião" : "The surgeon"} style={{ paddingBottom: 120 }}>
        <div className="wrap cols nf-surgeon">
          <div style={{ aspectRatio: "3/4", borderRadius: 14, overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,.6)" }}>
            <img src="/assets/images/serie/dr-thomas-serie.jpg" alt="Dr. Thomas Benson" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div className="head" style={{ maxWidth: 600 }}>
            <p className="eyebrow">{pt ? "O cirurgião" : "The surgeon"}</p>
            <h2 className="h2">Dr. Thomas Benson</h2>
            <p style={{ fontSize: 12.5, letterSpacing: 2.4, color: "rgba(255,255,255,.6)" }}>PH.D · CRM 119.278</p>
            <p className="body">{pt ? "Especialista em cirurgia facial e Deep Plane Facelift, o Dr. Thomas Benson construiu sua prática sobre uma ideia simples: o melhor resultado é aquele que ninguém consegue apontar." : "A specialist in facial surgery and Deep Plane Facelift, Dr. Thomas Benson built his practice on a simple idea: the best result is the one nobody can point out."}</p>
            <p className="nf-quote" style={{ fontSize: 26 }}>{pt ? "“Excelência vem de repetição e de experiência.”" : "“Excellence comes from repetition and experience.”"}</p>
            <p className="body">{pt ? <>Nosso objetivo nunca foi transformar um rosto. É devolver o que o tempo levou, de maneira harmônica, natural, imperceptível. <b className="hl">Isso é reescrever o tempo.</b></> : <>Our goal was never to transform a face. It is to give back what time took away, in a harmonious, natural, imperceptible way. <b className="hl">That is rewriting time.</b></>}</p>
            <div style={{ marginTop: 10, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <WatchButton label={pt ? "Assistir à série" : "Watch the series"} />
              <ScheduleButton className="btn gold" trackingLocation="serie" />
            </div>
            <p style={{ marginTop: 22, fontSize: 12.5, color: "rgba(255,255,255,.5)" }}>Dr. Thomas Benson | A Beleza da Face · {pt ? "Direção, edição e captação" : "Direction, editing and filming"}: Saymon Avila · 2026</p>
          </div>
        </div>
      </section>
    </main>
  );
}
