// app/(blogs)/blog/page.jsx
import BlogClient from "./BlogClient";
import { createClient, getAllBlogPostSummaries } from "@/prismicio";

export default async function Blogs2() {
  const client = createClient();
  const posts = await getAllBlogPostSummaries(client);

  return <BlogClient initialBlogs={posts} />;
}
