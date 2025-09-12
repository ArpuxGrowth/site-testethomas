// app/(blogs)/blog/page.jsx
import BlogList from "./BlogList";
import BlogClient from "./BlogClient";
import { createClient } from "@/prismicio";

export default async function Blogs2() {
  const { blogs, totalPages } = await BlogList({ page: 1 });

  const client = createClient();
  const posts = await client.getAllByType("blog_post");

  return <BlogClient initialBlogs={posts} totalPages={totalPages} />;
}
