import { createClient as createPrismicClient } from "@prismicio/client";
import { redirectToPreviewURL } from "@prismicio/next";

import { repositoryName } from "../../../prismicio";

// Preview do Prismic (antigo). Os artigos agora são escritos e pré-visualizados no portal da Arpux.
export async function GET(request) {
  const client = createPrismicClient(repositoryName);

  return await redirectToPreviewURL({ client, request });
}
