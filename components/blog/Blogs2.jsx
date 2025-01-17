// app/(blogs)/blog/page.jsx
import BlogList from "./BlogList";
import BlogClient from "./BlogClient";

export default async function Blogs2() {
  const { blogs, totalPages } = await BlogList({ page: 1 });

  return <BlogClient initialBlogs={blogs} totalPages={totalPages} />;
}
