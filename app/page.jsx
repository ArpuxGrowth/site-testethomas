import Footer1 from "@/components/footers/Footer1";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Hero1 from "@/components/homes/home-1/heros/Hero1";

import { menuItems2 } from "@/data/menu";
import Home11 from "@/components/homes/home-1-1";
import Header1Multipage from "@/components/headers/Header1Multipage";

export const metadata = {
  title:
    "Dr. Thomas Benson, PhD - Cirurgião Plástico",
  description:
    "Conheça o Dr. Thomas Benson, referência em cirurgia plástica facial e especialista em Deep Plane Facelift na América Latina. Excelência em técnicas inovadoras para resultados naturais, segurança e exclusividade.",
};
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
