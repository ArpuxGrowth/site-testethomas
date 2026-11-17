import { notFound } from "next/navigation";

// Qualquer endereço que não corresponde a uma página mostra a 404 do site (app/[locale]/not-found.jsx),
// com cabeçalho e rodapé, em vez da 404 padrão do Next. O status continua 404.
export default function CatchAllNotFound() {
  notFound();
}
