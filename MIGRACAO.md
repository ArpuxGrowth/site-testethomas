# Migração para o visual liquid glass (branch `redesign-liquid-glass`)

Troca só a camada visual do site em produção. Rotas, metadados, JSON-LD, sitemap, robots,
redirects 301 do blog, Prismic, PostHog, GTM e WhatsApp continuam os mesmos.

## O que mudou
- Visual novo: `app/styles/*.css` (base em `tb.css`, tema escuro padrão e claro com botão),
  componentes em `components/tb/`, cabeçalho e rodapé únicos no `ClientShell`.
- Todas as páginas reescritas com o mesmo conteúdo (mesmas traduções e dados).
- Página nova: `/pt/assista-a-serie` e `/en/assista-a-serie` (série "Reescrevendo o Tempo"), já no sitemap.
- Rota `app/[locale]/[...rest]` só para a 404 sair no visual novo (status continua 404).
- Posts do blog: títulos "Heading 1" de dentro do texto viram h2 (cada post fica com um único H1).
- Fontes servidas pelo próprio site (next/font); bootstrap, wow, swiper e o CSS antigo não carregam mais.

## Verificação feita em 16/11/2026 (build de produção local x site no ar)
- 224 URLs (pt, en e raiz): mesmo status, title, description, canonical, hreflang, robots,
  og:image, H1 (um por página) e tipos de JSON-LD.
- Links internos: nenhum perdido em relação ao código antigo com os mesmos dados do Prismic
  (674 links internos a mais). As diferenças contra o site no ar vêm só de posts novos no Prismic
  que entraram nas listas de "últimas postagens".
- Texto total: 325 mil palavras antes, 350 mil agora.
- Redirects 301 do blog, `/` para `/pt`, 404s e robots.txt iguais aos de produção.

## Como trocar (quando for aprovado)
1. Abrir PR de `redesign-liquid-glass` para `master` e conferir o preview da Vercel.
2. Fazer o merge (a Vercel publica a `master`). Nenhuma variável de ambiente nova.
3. Depois de publicar: abrir algumas páginas, enviar o sitemap no Search Console e acompanhar
   cobertura e posições por 2 a 4 semanas.

## Fora do código
- Uma tag do TikTok no Google Tag Manager escreve o próprio ID ("D3P91T3C77U816ES14E0") como texto
  no fim do `<body>`. Acontece também no site atual; corrigir a tag no GTM.

## Rastreamento (conferido em 17/11/2026)
- PostHog: mesmos eventos do site antigo (`$pageview`, `schedule_consultation_clicked`, `whatsapp_clicked`,
  `lead_form_submitted`) e mesmo campo `ph_session_id` no formulário do HubSpot. O projeto "Dr. Thomas Benson"
  não tem ações por seletor nem insights que dependam do layout.
- A propriedade `location` ganhou valores mais detalhados (antes: navbar, hero, whatsapp_button, content).
  Novos: navbar_mobile, home_cta, about_cta, benefits, contact, testimonials, results_case, results_story, serie.
  Os scripts do mini (atribuição, relatório de leads, CAPI da Meta) só registram o valor, não filtram por ele.
- GTM (GTM-5TTZF69D): dataLayer igual (`whatsappClick`, `hubspotFormSubmit`, `videoModalOpen`), GA4, Meta,
  rolagem e cliques nos links das cirurgias seguem funcionando.
- Fora do código, para ajustar no GTM: (1) a tag HTML personalizada que contém só o ID do TikTok
  ("D3P91T3C77U816ES14E0") escreve esse texto no fim de todas as páginas; (2) os gatilhos por texto de link
  "Agendar Consulta", "Marque a sua consulta" e "Ir para o WhatsApp" não disparam (os botões são <button>,
  já no site atual); o clique no WhatsApp já chega ao GA4 pelo evento `whatsappClick`.

## Tema
- O site abre sempre no tema claro; o escuro só vale para quem clica no botão (fica guardado no navegador).
