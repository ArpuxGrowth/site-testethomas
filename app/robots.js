import { SITE_URL } from "@/lib/seo";

// Buscadores e assistentes de IA têm acesso liberado ao conteúdo público.
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended"];

export default function robots() {
  const disallow = ["/api/", "/slice-simulator"];
  return {
    rules: [{ userAgent: "*", allow: "/", disallow }, ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/", disallow }))],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
