import { getBlogPosts } from "../lib/getBlogPosts";
import BlogPreview from "../../components/blog-preview";

export default function BlogPage() {
  console.log("=== BlogPage component rendering ===");
  
  const posts = getBlogPosts();
  
  console.log("Posts received in BlogPage:", posts.length);
  console.log("Post titles:", posts.map(p => p.title));
  
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.length === 0 && <p>No blog posts found.</p>}
      <div>
        {posts.map((post, index) => {
          console.log(`Rendering post ${index + 1}:`, post.title);
          return (
            <BlogPreview key={post.slug} post={post} />
          );
        })}
      </div>
    </main>
  );
}
