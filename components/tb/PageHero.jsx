import { Link } from "@/i18n/routing";

// Topo das páginas internas. Com `image`, vira a seção com foto ao lado (como no protótipo).
// `crumbs` = [{ href, label }] (o último item é a página atual, sem link).
export default function PageHero({ eyebrow, title, lead, image, imagePos = "50% 30%", crumbs, children, center = false, left = false, tall = false }) {
  const Crumbs = crumbs?.length ? (
    <nav className="crumbs" aria-label="Breadcrumb">
      {crumbs.map((c, i) => (
        <span key={i} style={{ display: "contents" }}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
        </span>
      ))}
    </nav>
  ) : null;

  if (image) {
    return (
      <section className={`sec split hero${left ? " left" : ""}`} style={tall ? undefined : { minHeight: "max(680px,86vh)" }}>
        <div className="glow"></div>
        <div className="photo">
          <img src={image} alt="" style={{ objectPosition: imagePos }} fetchPriority="high" />
        </div>
        <div className="wrap">
          <div className="txt">
            {Crumbs}
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1>{title}</h1>
            {lead && <p className="body" style={{ fontSize: 18, marginTop: 24, maxWidth: 520 }}>{lead}</p>}
            {children}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className={`phero${center ? " c" : ""}`}>
      <div className="wrap">
        {Crumbs}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="body lead" style={{ fontSize: 18 }}>{lead}</p>}
        {children}
      </div>
    </section>
  );
}
