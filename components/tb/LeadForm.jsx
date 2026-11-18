"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import { metaIds } from "@/utlis/metaIds";
import { conversaoGoogleAds } from "@/utlis/googleAds";
import { Close } from "./Icons";

// Formulário "Agendar consulta" (mesmo desenho do formulário da série Reescrevendo o Tempo), com 3 perguntas de qualificação.
// Abre pelo evento "tb:agendar" (botões Agendar consulta). Envia para /api/lead: o lead entra no CRM do Dr. Thomas no
// portal Arpux com a etiqueta "thomasbenson.com.br", e o portal manda o evento neutro view2_site à Meta.
// Depois do envio, leva à página /obrigado, que tem o botão do WhatsApp com o procedimento escrito.
const mascara = (v) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const TXT = {
  pt: {
    titulo: ["Agende sua", "consulta"],
    sub: "Responda rapidinho e deixe seu WhatsApp. A equipe do Dr. Thomas fala com você para encontrar o melhor horário.",
    proc: "Qual procedimento te interessa?",
    procs: ["Face e pescoço", "Pálpebras", "Nariz", "Mama", "Contorno corporal", "Ainda não sei"],
    prazo: "Para quando você pensa em fazer?",
    prazos: ["Até 3 meses", "De 3 a 6 meses", "Mais de 6 meses", "Só pesquisando"],
    local: "Onde você mora?",
    locais: ["São Paulo, capital", "Grande SP ou interior", "Outro estado", "Fora do Brasil"],
    nome: "Nome", nomePh: "Como podemos te chamar?", tel: "WhatsApp",
    escolha: "Escolha uma opção.", errNome: "Escreva seu nome.", errTel: "Informe o WhatsApp com DDD.",
    enviar: "QUERO AGENDAR", enviando: "ENVIANDO…", lgpd: "Usamos seus dados só para falar com você sobre a consulta.",
    falha: "Não conseguimos enviar agora. Tente de novo.", semRede: "Sem conexão. Confira a internet e tente de novo.", fechar: "Fechar",
  },
  en: {
    titulo: ["Schedule your", "consultation"],
    sub: "Answer three quick questions and leave your WhatsApp. Dr. Thomas's team will reach out to find the best time.",
    proc: "Which procedure interests you?",
    procs: ["Face and neck", "Eyelids", "Nose", "Breast", "Body contouring", "Not sure yet"],
    prazo: "When are you thinking of doing it?",
    prazos: ["Within 3 months", "3 to 6 months", "More than 6 months", "Just researching"],
    local: "Where do you live?",
    locais: ["São Paulo city", "Greater São Paulo or state", "Another Brazilian state", "Outside Brazil"],
    nome: "Name", nomePh: "What should we call you?", tel: "WhatsApp",
    escolha: "Choose an option.", errNome: "Please write your name.", errTel: "Enter your WhatsApp with area code.",
    enviar: "SCHEDULE", enviando: "SENDING…", lgpd: "We only use your data to contact you about the consultation.",
    falha: "We couldn't send it now. Please try again.", semRede: "No connection. Check your internet and try again.", fechar: "Close",
  },
};

function Opcoes({ nome, rotulo, opcoes, valor, setValor, erro }) {
  return (
    <fieldset className={`lf-campo lf-ops${erro ? " err" : ""}`}>
      <legend><span>{rotulo}</span></legend>
      <div className="lf-chips">
        {opcoes.map((o) => (
          <label key={o} className={`lf-chip${valor === o ? " on" : ""}`}>
            <input type="radio" name={nome} value={o} checked={valor === o} onChange={() => setValor(o)} />
            {o}
          </label>
        ))}
      </div>
      {erro && <small>{erro}</small>}
    </fieldset>
  );
}

export default function LeadForm({ locale = "pt" }) {
  const t = TXT[locale] || TXT.pt;
  const router = useRouter();
  const [aberto, setAberto] = useState(false);
  const [origem, setOrigem] = useState("content");
  const [proc, setProc] = useState("");
  const [prazo, setPrazo] = useState("");
  const [local, setLocal] = useState("");
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [erro, setErro] = useState({});
  const [enviando, setEnviando] = useState(false);
  const refBox = useRef(null);

  useEffect(() => {
    const abrir = (e) => { setOrigem(e?.detail?.location || "content"); setAberto(true); setErro({}); };
    window.addEventListener("tb:agendar", abrir);
    return () => window.removeEventListener("tb:agendar", abrir);
  }, []);
  useEffect(() => {
    if (!aberto) return;
    document.body.style.overflow = "hidden";
    const f = setTimeout(() => refBox.current?.focus(), 200);
    const esc = (e) => { if (e.key === "Escape") setAberto(false); };
    document.addEventListener("keydown", esc);
    return () => { clearTimeout(f); document.body.style.overflow = ""; document.removeEventListener("keydown", esc); };
  }, [aberto]);

  const enviar = async (ev) => {
    ev.preventDefault();
    const e = {};
    if (!proc) e.proc = t.escolha;
    if (!prazo) e.prazo = t.escolha;
    if (!local) e.local = t.escolha;
    if (nome.trim().length < 2) e.nome = t.errNome;
    if (tel.replace(/\D/g, "").length < 10) e.whatsapp = t.errTel;
    setErro(e);
    if (Object.keys(e).length) return;
    setEnviando(true);
    try {
      const r = await fetch("/api/lead", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, whatsapp: tel, procedimento: proc, prazo, local, pagina: location.href, empresa: ev.target.empresa.value,
          event_id: `view2_site_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, ...metaIds() }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) { setErro(d.campo ? { [d.campo]: d.erro } : { geral: d.erro || t.falha }); return; }
      try {
        posthog.capture("lead_form_submitted", { location: origem, procedimento: proc, prazo, local, formulario: "site" }, { send_instantly: true });
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "formulario_agendar_enviado", location: origem });
        conversaoGoogleAds("formulario");
      } catch {}
      const q = new URLSearchParams({ p: proc, n: nome.trim().split(" ")[0] });
      setAberto(false);
      router.push(`/${locale}/obrigado?${q}`);
    } catch {
      setErro({ geral: t.semRede });
    } finally {
      setEnviando(false);
    }
  };

  if (!aberto) return null;
  return (
    <div className="lf" role="dialog" aria-modal="true" aria-labelledby="lf-t" onClick={(e) => { if (e.target === e.currentTarget) setAberto(false); }}>
      <div className="lf-box" ref={refBox} tabIndex={-1}>
        <button className="lf-x" type="button" aria-label={t.fechar} onClick={() => setAberto(false)}><Close /></button>
        <div className="lf-foto" aria-hidden="true"><img src="/assets/images/serie/dr-thomas-serie.jpg" alt="" /></div>
        <div className="lf-corpo">
          <form onSubmit={enviar} noValidate>
            <p className="nf-badge"><i>T</i>Dr. Thomas Benson</p>
            <h2 id="lf-t" className="lf-t">{t.titulo[0]} <span className="it">{t.titulo[1]}</span></h2>
            <p className="lf-sub">{t.sub}</p>
            <Opcoes nome="procedimento" rotulo={t.proc} opcoes={t.procs} valor={proc} setValor={setProc} erro={erro.proc} />
            <Opcoes nome="prazo" rotulo={t.prazo} opcoes={t.prazos} valor={prazo} setValor={setPrazo} erro={erro.prazo} />
            <Opcoes nome="local" rotulo={t.local} opcoes={t.locais} valor={local} setValor={setLocal} erro={erro.local} />
            <label className={`lf-campo${erro.nome ? " err" : ""}`}>
              <span>{t.nome}</span>
              <input name="nome" autoComplete="name" value={nome} onChange={(e) => setNome(e.target.value)} placeholder={t.nomePh} aria-invalid={!!erro.nome} />
              {erro.nome && <small>{erro.nome}</small>}
            </label>
            <label className={`lf-campo${erro.whatsapp ? " err" : ""}`}>
              <span>{t.tel}</span>
              <input name="whatsapp" type="tel" inputMode="numeric" autoComplete="tel-national" value={tel} onChange={(e) => setTel(mascara(e.target.value))} placeholder="(11) 90000-0000" aria-invalid={!!erro.whatsapp} />
              {erro.whatsapp && <small>{erro.whatsapp}</small>}
            </label>
            <input name="empresa" tabIndex={-1} autoComplete="off" aria-hidden="true" className="lf-hp" />
            {erro.geral && <p className="lf-erro" role="alert">{erro.geral}</p>}
            <button className="btn gold lf-enviar" type="submit" disabled={enviando}>{enviando ? t.enviando : t.enviar}</button>
            <p className="lf-lgpd">{t.lgpd}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
