"use client";

import { useEffect } from "react";

// Renderiza no servidor (o conteúdo, como o H1 das páginas, precisa estar no HTML para o Google);
// só o efeito de parallax é carregado no navegador.
export default function ParallaxContainer(props) {
  useEffect(() => {
    import("jarallax").then(({ jarallax }) => {
      jarallax(document.querySelectorAll(".parallax-5"), {
        speed: 0.5,
      });
    });
  }, []);
  return (
    <div
      //   ref={parallax.ref}
      {...props}
    >
      {props.children}
    </div>
  );
}
