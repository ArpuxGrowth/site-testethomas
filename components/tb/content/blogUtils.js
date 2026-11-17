// Utilitários do blog (posts vindos do Prismic)

// Reduz o post ao que listas e barra lateral usam (menos dados enviados ao navegador)
export const slimPost = (post) => ({
  id: post.id,
  uid: post.uid,
  first_publication_date: post.first_publication_date || "",
  data: {
    title: post.data.title || "",
    description: post.data.description || "",
    date: post.data.date || "",
    cover_image: { url: post.data.cover_image?.url || "" },
  },
});

// Miniatura menor da capa (o Prismic serve as imagens pelo imgix, que aceita largura na URL)
export const thumb = (url, w = 600) => {
  if (!url || !url.includes("images.prismic.io")) return url;
  return `${url}${url.includes("?") ? "&" : "?"}w=${w}`;
};
