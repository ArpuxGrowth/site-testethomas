"use client";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { NAV, NAV_MORE } from "./site";
import { Chevron, Menu, Close, Play, Arrow } from "./Icons";
import ThemeToggle from "./ThemeToggle";
import ScheduleButton from "./ScheduleButton";

const isActive = (path, item) =>
  item.href === "/" ? path === "/" : path === item.href || path.startsWith(item.href + "/") || (item.match || []).some((m) => path.startsWith(m));

export default function Header() {
  const locale = useLocale();
  const path = usePathname() || "/";
  const [more, setMore] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const moreRef = useRef(null);
  const other = locale === "pt" ? "en" : "pt";

  useEffect(() => { setMore(false); setDrawer(false); }, [path]);
  useEffect(() => {
    const close = (e) => { if (moreRef.current && !moreRef.current.contains(e.target)) setMore(false); };
    const esc = (e) => { if (e.key === "Escape") { setMore(false); setDrawer(false); } };
    document.addEventListener("click", close);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("click", close); document.removeEventListener("keydown", esc); };
  }, []);
  // Página da série tem o menu sempre escuro
  useEffect(() => {
    document.documentElement.dataset.page = path.startsWith("/assista-a-serie") ? "series" : "";
  }, [path]);

  const moreActive = NAV_MORE.some((i) => isActive(path, i));
  const L = (i) => i[locale] || i.pt;

  return (
    <>
      <a href="#conteudo" className="skip">{locale === "en" ? "Skip to content" : "Pular para o conteúdo"}</a>
      <header className="top glass">
        <Link className="logo" href="/" aria-label={locale === "en" ? "Thomas Benson, plastic & facial surgery, home" : "Thomas Benson, cirurgia plástica e facial, início"}>
          <b>THOMAS BENSON</b><i></i><em>{locale === "en" ? "plastic & facial surgery" : "cirurgia plástica & facial"}</em>
        </Link>
        <nav className="nav" aria-label={locale === "en" ? "Main menu" : "Menu principal"}>
          {NAV.map((i) => (
            <Link key={i.href} href={i.href} aria-current={isActive(path, i) ? "true" : undefined} className={i.play ? "opt" : undefined}>
              {i.play && <Play width={11} height={11} />}{L(i)}
            </Link>
          ))}
          <div className="more" ref={moreRef}>
            <button type="button" aria-expanded={more} aria-haspopup="true" aria-current={moreActive ? "true" : undefined} onClick={() => setMore((v) => !v)}>
              {locale === "en" ? "More" : "Mais"} <Chevron width={14} height={14} />
            </button>
            <div className="menu" role="menu" hidden={!more}>
                {NAV_MORE.map((i) => (
                  <Link key={i.href} href={i.href} role="menuitem">
                    <span className="ic gold"><Arrow width={16} height={16} /></span>
                    <span><b>{L(i)}</b><small>{locale === "en" ? i.sen : i.spt}</small></span>
                  </Link>
                ))}
            </div>
          </div>
        </nav>
        <ThemeToggle locale={locale} />
        <Link className="lang clear" href={path} locale={other} hrefLang={other === "pt" ? "pt-BR" : "en"} aria-label={other === "en" ? "English version" : "Versão em português"}>
          {other.toUpperCase()}
        </Link>
        <ScheduleButton className="btn gold" trackingLocation="navbar" short />
        <button type="button" className="round clear burger" aria-label={locale === "en" ? "Open menu" : "Abrir menu"} aria-expanded={drawer} onClick={() => setDrawer(true)}>
          <Menu />
        </button>
      </header>
      {drawer && (
        <div className="drawer" onClick={() => setDrawer(false)}>
          <nav className="drawer-in" onClick={(e) => e.stopPropagation()} aria-label={locale === "en" ? "Menu" : "Menu"}>
            <div className="dh">
              <span className="eyebrow">Menu</span>
              <button type="button" className="round clear" aria-label={locale === "en" ? "Close menu" : "Fechar menu"} onClick={() => setDrawer(false)}><Close /></button>
            </div>
            {[...NAV, ...NAV_MORE].map((i) => (
              <Link key={i.href} href={i.href} aria-current={isActive(path, i) ? "true" : undefined}>
                {L(i)} <Arrow width={16} height={16} />
              </Link>
            ))}
            <Link href={path} locale={other}>{other === "en" ? "English" : "Português"} <Arrow width={16} height={16} /></Link>
            <ScheduleButton className="btn gold" trackingLocation="navbar_mobile" />
          </nav>
        </div>
      )}
    </>
  );
}
