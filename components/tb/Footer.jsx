"use client";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { navigationLinks } from "@/data/footer";
import { FACIAL_SURGERIES, SOCIALS, PHONES } from "./site";
import { Social, Phone, Pin } from "./Icons";

// Rodapé: mantém todos os links do rodapé antigo (páginas, cirurgias faciais, redes) e o aviso do CFM
export default function Footer() {
  const t = useTranslations("Footer1");
  const locale = useLocale();
  const pt = locale === "pt";
  return (
    <footer id="rodape" aria-label={pt ? "Rodapé" : "Footer"}>
      <div className="wrap">
        <div className="foot">
          <div>
            <Link className="logo" href="/" style={{ alignItems: "flex-start", width: "max-content" }}>
              <b>THOMAS BENSON</b><em style={{ fontSize: "12.5px" }}>{pt ? "cirurgia plástica & facial" : "plastic & facial surgery"}</em>
            </Link>
            <p className="body" style={{ fontSize: 14.5, marginTop: 18, maxWidth: 340 }}>{t("p1")}</p>
            <div className="flinks" style={{ marginTop: 18 }}>
              {PHONES.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`}><Phone width={15} height={15} /> {p.label}</a>
              ))}
              <a href="https://maps.google.com/?q=Av.+Ant%C3%B4nio+Joaquim+de+Moura+Andrade,+315,+S%C3%A3o+Paulo" target="_blank" rel="noopener">
                <Pin width={15} height={15} /> Av. Antônio Joaquim de Moura Andrade, 315 · São Paulo
              </a>
            </div>
          </div>
          <div>
            <h3 className="eyebrow" style={{ marginBottom: 18 }}>{t("h3")}</h3>
            <ul className="flinks" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {navigationLinks.map((elm, i) => (
                <li key={elm.href}><Link href={elm.href}>{t.raw(`navigationLinks.${i}`).text}</Link></li>
              ))}
              <li><Link href="/assista-a-serie">{pt ? "Assista à série" : "Watch the series"}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="eyebrow" style={{ marginBottom: 18 }}>{pt ? "Cirurgias faciais em SP" : "Facial surgery in São Paulo"}</h3>
            <ul className="flinks" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li><Link href="/cirurgia-plastica-facial">{pt ? "Cirurgia plástica facial" : "Facial plastic surgery"}</Link></li>
              {FACIAL_SURGERIES.map((s) => (
                <li key={s.url}><Link href={`/cirurgias/${s.url}`}>{s[locale] || s.pt}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow" style={{ marginBottom: 18 }}>{t("h3_2")}</h3>
            <ul className="flinks" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {SOCIALS.map((s) => {
                const I = Social[s.name];
                return (<li key={s.name}><a href={s.url} rel="noopener nofollow" target="_blank"><I width={16} height={16} /> {s.name}</a></li>);
              })}
            </ul>
          </div>
        </div>
        <p className="body" style={{ fontSize: 12.5, lineHeight: 1.7, marginTop: 56, color: "var(--ink-3)" }}>{t("p2")}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", justifyContent: "space-between", marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--line)", fontSize: 12.5, color: "var(--ink-3)" }}>
          <span>© {new Date().getFullYear()} Dr. Thomas Benson. {t("b1")}.</span>
          <span>{t("b2")}</span>
        </div>
      </div>
    </footer>
  );
}
