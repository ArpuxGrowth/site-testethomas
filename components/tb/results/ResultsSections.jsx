import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { teamMembersalt } from "@/data/team";
import { portfolios1 } from "@/data/portfolio";
import { Arrow, ArrowLeft, Close } from "../Icons";

// Fundo desfocado das páginas de resultados (como no protótipo)
export function PageBg({ src }) {
  return (
    <div className="pagebg" aria-hidden="true">
      <img src={src} alt="" />
      <i></i>
    </div>
  );
}

// Cicatrizes (antes no componente Team do tema antigo)
export function ScarsSection() {
  const t = useTranslations("compTeam");
  return (
    <section className="sec tight" id="team">
      <div className="wrap cols rs-scars">
        <div className="g2">
          {teamMembersalt.slice(0, 2).map((m, i) => (
            <figure key={i} className="card soft rs-scar">
              <span className="rs-scar-ph">
                <img src={m.image} alt="Cicatriz de procedimento realizado pelo Dr. Thomas Benson" width={600} height={800} loading="lazy" />
              </span>
              <figcaption>{t("role")}</figcaption>
            </figure>
          ))}
        </div>
        <blockquote className="rs-quote">
          <p className="h2">{t("p")}</p>
          <footer className="body">{t("span")}</footer>
        </blockquote>
      </div>
    </section>
  );
}

// "Outros resultados" (antes RelatedProject10, que mostrava os 4 primeiros): agora todos os casos, com link para cada um
export function RelatedResults() {
  const t = useTranslations("RelatedProject10");
  return (
    <section className="sec tight">
      <div className="wrap">
        <div className="head c"><h2 className="h2" style={{ fontSize: 38 }}>{t("h2")}</h2></div>
        <div className="mt-l rs-related">
          {portfolios1.map((item) => (
            <Link key={item.id} href={`/resultado/${item.id}`} className="cardlink card soft">
              <span className="ph">
                {/* resultado6-minibanner.jpg não existe no projeto: o 5º caso usa a primeira foto ampliada */}
                <img src={item.id === 11 ? item.images[0] : item.imgSrc2} alt={item.imgAlt} width={719} height={461} loading="lazy" />
              </span>
              <p>{t("itemdescr")}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Navegação anterior / todos / próximo entre os casos 7 a 11
export function ResultNav({ id }) {
  const t = useTranslations("Result");
  const prev = id - 1 < 7 ? 11 : id - 1;
  const next = id + 1 > 11 ? 7 : id + 1;
  return (
    <section className="sec tight" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <nav className="rs-nav" aria-label={t("iall")}>
          <Link href={`/resultado/${prev}`} className="btn clear"><ArrowLeft width={16} height={16} /> {t("ibefore")}</Link>
          <Link href="/antes-e-depois/#results" className="btn clear"><Close width={16} height={16} /> {t("iall")}</Link>
          <Link href={`/resultado/${next}`} className="btn clear">{t("iafter")} <Arrow width={16} height={16} /></Link>
        </nav>
      </div>
    </section>
  );
}
