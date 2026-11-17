import { pressItems } from "@/data/pressgallery";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Arrow } from "@/components/tb/Icons";
import { pressExcerpt } from "./pressText";

// Grade de matérias da imprensa (substitui o Gallery2 do tema antigo: mesmos itens, títulos, alts e links)
export default function PressGrid({ itemsLength = 12 }) {
  const t = useTranslations("Gallery2");
  const tp = useTranslations("Portfolio2");
  const tn = useTranslations("PressNewsPage");
  return (
    <div className="g2 press-grid">
      {pressItems.slice(0, itemsLength).map((elm, i) => (
        <Link key={elm.id} href={`/imprensa/${elm.id}`} className="cardlink card soft">
          <span className="ph">
            <img src={elm.src} alt={elm.alt} width={719} height={461} loading={i < 3 ? undefined : "lazy"} fetchPriority={i < 3 ? "high" : undefined} />
          </span>
          <span className="press-txt">
            <h3>{t(`pressItems.${elm.id}.title`)}</h3>
            <p>{pressExcerpt(tn.raw(`PressItems.${elm.id}.article`) || "", 150) || null}</p>
          <small className="more">
            {tp("viewArticle")} <Arrow width={14} height={14} />
          </small>
          </span>
        </Link>
      ))}
    </div>
  );
}
