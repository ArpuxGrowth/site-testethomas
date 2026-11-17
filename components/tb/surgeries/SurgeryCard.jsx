import { Link } from "@/i18n/routing";
import { Arrow } from "../Icons";

// Cartão de cirurgia: o cartão inteiro é um link para /cirurgias/<url>.
export default function SurgeryCard({ item, title, descr, locale, as: Tag = "li", linkLocale, more }) {
  const face = item.mix === "facials";
  const tag = locale === "en" ? (face ? "Face" : "Body") : face ? "Face" : "Corpo";
  return (
    <Tag className="sg-item" data-c={item.mix}>
      <Link href={`/cirurgias/${item.url}`} locale={linkLocale} className="sg-card card soft">
        <div className="sp-m sg-ph">
          <img src={item.imgSrc} alt={item.imgAlt} loading="lazy" />
          <span className="ov"></span>
          <span className={`tag ${face ? "gold" : "clear"} glass`}>{tag}</span>
          <div className="t"><h3>{title}</h3></div>
        </div>
        {descr && <p className="sg-d">{descr}</p>}
        <span className="sg-more">
          {more || (locale === "en" ? "Learn more" : "Saiba mais")} <Arrow width={14} height={14} />
        </span>
      </Link>
    </Tag>
  );
}
