"use client"

import { getBlogPosts } from "../lib/getBlogPosts";
import BlogPreview from "../../components/blog-preview";
import { useLanguage } from "../contexts/language-context";

export default function BlogPage() {
  console.log("=== BlogPage component rendering ===");

  const { t, currentLanguage } = useLanguage();
  const posts = getBlogPosts(currentLanguage);

  console.log("Posts received in BlogPage:", posts.length);
  console.log("Current language:", currentLanguage);
  console.log("Post titles:", posts.map(p => p.title));

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">{t('blog')}</h1>
      {posts.length === 0 && <p>{t('noBlogPostsFound')}</p>}
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
