import { pageMetadata } from "@/lib/seo";
import Footer1 from "@/components/footers/Footer1";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Hero1 from "@/components/homes/home-1/heros/Hero1";

import { menuItems2 } from "@/data/menu";
import Home11 from "@/components/homes/home-1-1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const tr = await getTranslations({ locale, namespace: "Home.metadata" });

  return pageMetadata({
    locale,
    path: "",
    title: tr("title"),
    description: tr("description"),
  });
}

export default function Home() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header1Multipage links={menuItems2} defaultButtonColor="black" />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-gray-light-1  parallax-5 parallax-mousemove-scene scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/dr-thomas3.jpg)",
              }}
              id="home"
            >
              <Hero1 />
            </ParallaxContainer>
            <Home11 onePage />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
