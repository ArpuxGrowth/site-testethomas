import ScheduleButton from "./ScheduleButton";

// Faixa de chamada para agendar. Com `bg`, vira uma faixa larga com foto de fundo.
export default function CtaBand({ text, title, trackingLocation = "content", bg, bgPos = "50% 35%" }) {
  if (bg) {
    return (
      <section className="sec cta-photo">
        <img className="bg" src={bg} alt="" loading="lazy" style={{ objectPosition: bgPos }} />
        <div className="shade cta-photo-shade"></div>
        <div className="wrap">
          <div className="cta-photo-in">
            {title && <h2 className="h2">{title}</h2>}
            {text && <p className="cta-photo-t">{text}</p>}
            <div style={{ marginTop: 30 }}><ScheduleButton trackingLocation={trackingLocation} /></div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="sec tight">
      <div className="wrap">
        <div className="cta">
          <div style={{ maxWidth: 680 }}>
            {title && <h2 className="h2" style={{ fontSize: 34 }}>{title}</h2>}
            {text && <p className="body" style={{ marginTop: title ? 12 : 0, fontSize: 17 }}>{text}</p>}
          </div>
          <ScheduleButton trackingLocation={trackingLocation} />
        </div>
      </div>
    </section>
  );
}
