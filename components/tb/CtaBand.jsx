import ScheduleButton from "./ScheduleButton";

// Faixa final de chamada para agendar (substitui o bloco "texto + Agendar consulta" das páginas antigas)
export default function CtaBand({ text, title, trackingLocation = "content" }) {
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
