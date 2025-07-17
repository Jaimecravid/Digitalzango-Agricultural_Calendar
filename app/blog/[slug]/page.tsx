import { getBlogPostBySlug, getBlogPosts } from '../../lib/getBlogPosts';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-10 px-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600 mb-6">
          <time dateTime={post.date} className="text-sm">
            {new Date(post.date).toLocaleDateString('pt-BR')}
          </time>
          <span className="mx-2">•</span>
          <span className="text-sm">{post.author}</span>
        </div>
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
      </header>
      
      <div className="prose prose-lg max-w-none">
        <div className="whitespace-pre-wrap">{post.content}</div>
      </div>
      
      {post.tags && post.tags.length > 0 && (
        <footer className="mt-8 pt-6 border-t">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}
