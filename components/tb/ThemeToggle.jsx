"use client";
import { Sun, Moon } from "./Icons";

// Alterna claro/escuro e guarda a escolha (o script do <head> aplica antes da pintura)
export default function ThemeToggle({ locale }) {
  const toggle = () => {
    const r = document.documentElement;
    const next = r.getAttribute("data-theme") === "light" ? "dark" : "light";
    r.setAttribute("data-theme", next);
    try { localStorage.setItem("tb-theme", next); } catch {}
  };
  const label = locale === "en" ? "Switch light/dark mode" : "Alternar modo claro/escuro";
  return (
    <button type="button" className="round clear theme" onClick={toggle} aria-label={label} title={label}>
      <Moon className="moon" /><Sun className="sun" />
    </button>
  );
}
