import Script from "next/script";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Inter, Playfair_Display, Cormorant_Garamond, Bodoni_Moda } from "next/font/google";
import "../styles/tb.css";
import { routing } from "@/i18n/routing";
import { SITE_URL, JsonLd, physicianJsonLd } from "@/lib/seo";
import ClientShell from "./ClientShell";

// Fontes do visual novo, servidas pelo próprio site (sem bloquear a renderização)
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500"], style: ["normal", "italic"], variable: "--font-playfair", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], style: ["italic"], variable: "--font-cormorant", display: "swap" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["500"], variable: "--font-bodoni", display: "swap" });

// Tema: o site abre sempre no claro; o escuro só vale se a pessoa escolheu no botão (guardado no navegador)
const THEME_SCRIPT = `(function(){var t;try{t=localStorage.getItem("tb-theme")}catch(e){}document.documentElement.setAttribute("data-theme",t==="dark"?"dark":"light")})();`;

export const viewport = { themeColor: "#f5f2ec" };

export const metadata = {
  metadataBase: new URL(SITE_URL),
};

export default async function RootLayout({ children, params: { locale } }) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale === "pt" ? "pt-BR" : "en"}
      data-theme="light"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${bodoni.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        {/* GTM */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','GTM-5TTZF69D');`,
          }}
        />
      </head>
      <body>
        <JsonLd data={physicianJsonLd} />
        <ClientShell locale={locale} messages={messages}>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}
