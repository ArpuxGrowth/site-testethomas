import { createClient as baseCreateClient } from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "./slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 *
 * @type {import("@prismicio/client").Route[]}
 */
// TODO: Update the routes array to match your project's route structure.
const routes = [
  // Examples:
  // { type: "homepage", path: "/" },
  // { type: "page", path: "/:uid" },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {import("@prismicio/client").ClientConfig} config - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = baseCreateClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
};

/**
 * Fetches all blog posts with only the fields used in listings (cards and
 * sidebar), leaving out the full article content, which would bloat the page.
 *
 * @param {import("@prismicio/client").Client} client - Prismic client used to query the posts.
 */
export const getAllBlogPostSummaries = (client) =>
  client.getAllByType("blog_post", {
    fetch: [
      "blog_post.title",
      "blog_post.description",
      "blog_post.date",
      "blog_post.cover_image",
    ],
  });
