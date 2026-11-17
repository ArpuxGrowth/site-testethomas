import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Arrow } from "@/components/tb/Icons";
import "@/app/styles/content.css";

export const metadata = {
  title:
    "Página não encontrada",
  description:
    "A página que você procurava não foi encontrada.",
};

// Página 404 no visual novo (o status 404 vem do Next, via notFound() ou rota inexistente)
export default async function NotFoundPage() {
  let locale = "pt";
  try {
    locale = (await getLocale()) || "pt";
  } catch {}
  const en = locale === "en";
  const links = [
    { href: "/", label: en ? "Home" : "Início" },
    { href: "/cirurgias", label: en ? "Surgeries" : "Cirurgias" },
    { href: "/blog", label: "Blog" },
  ];
  return (
    <main id="main" className="tb-content nf404">
      <section className="phero c">
        <div className="wrap">
          <p className="eyebrow">{en ? "Error 404" : "Erro 404"}</p>
          <h1 className="nf404-num">404</h1>
          <h2 className="nf404-msg">
            {en ? "The page you were looking for was not found." : "A página que você procurava não foi encontrada."}
          </h2>
          <p className="body nf404-lead">
            {en
              ? "The address may have changed or no longer exists. Try one of the links below."
              : "O endereço pode ter mudado ou não existe mais. Tente um dos links abaixo."}
          </p>
          <nav className="nf404-links" aria-label={en ? "Useful links" : "Links úteis"}>
            {links.map((l, i) => (
              <Link key={l.href} href={l.href} className={`btn ${i === 0 ? "gold" : "clear"}`}>
                {l.label} <Arrow width={16} height={16} />
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
