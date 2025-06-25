'use client';

import { useState, useEffect } from "react";
import BlogPreview from "../../components/blog-preview";
import { BlogPost } from "../lib/getBlogPosts";

export default function BlogPage() {

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/blog')
      .then(res => {
        if (!res.ok) throw new Error('Falha ao buscar os posts');
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <p>Carregando...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <p>Erro ao carregar os posts: {error}</p>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.length === 0 && <p>Nenhum post encontrado.</p>}
      <div>
        {posts.map((post) => (
          <BlogPreview key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
