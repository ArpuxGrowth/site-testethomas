import { pressItems } from "@/data/pressgallery";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Arrow } from "@/components/tb/Icons";

// Grade de matérias da imprensa (substitui o Gallery2 do tema antigo: mesmos itens, títulos, alts e links)
export default function PressGrid({ itemsLength = 12 }) {
  const t = useTranslations("Gallery2");
  const tp = useTranslations("Portfolio2");
  return (
    <div className="g3 press-grid">
      {pressItems.slice(0, itemsLength).map((elm, i) => (
        <Link key={elm.id} href={`/imprensa/${elm.id}`} className="cardlink card soft">
          <span className="ph">
            <img src={elm.src} alt={elm.alt} width={719} height={461} loading={i < 3 ? undefined : "lazy"} fetchPriority={i < 3 ? "high" : undefined} />
          </span>
          <h3>{t(`pressItems.${elm.id}.title`)}</h3>
          <small className="more">
            {tp("viewArticle")} <Arrow width={14} height={14} />
          </small>
        </Link>
      ))}
    </div>
  );
}
