import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
  featured?: boolean;
  coverImage?: string;
}

export function getBlogPosts(): BlogPost[] {
  console.log("=== getBlogPosts function called ===");
  const articlesDirectory = path.join(process.cwd(), "lib", "articles");

  try {
    const files = fs.readdirSync(articlesDirectory);
    console.log("Raw files found:", files);

    const posts = files
      .filter(f => f.endsWith('.md'))
      .map(filename => {
        const filePath = path.join(articlesDirectory, filename);
        const source = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(source);

        return {
          id: filename.replace(/\.md$/, ''),
          title: data.title || 'Untitled',
          content,
          excerpt: data.excerpt || content.slice(0, 200) + '...',
          date: data.date || new Date().toISOString().split('T')[0],
          author: data.author || 'Equipe DigitalZango',
          tags: data.tags || [],
          slug: filename.replace(/\.md$/, ''),
          featured: data.featured || false,
          coverImage: data.coverImage || '/images/blog/default.jpg',
        };
      });

    const sorted = posts.sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    console.log("Final posts count:", sorted.length);
    return sorted;
  } catch (err) {
    console.error('Error reading articles directory:', err);
    return [];
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getBlogPosts().find(p => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return getBlogPosts().filter(p => p.featured);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getBlogPosts().filter(p => p.tags.includes(tag));
}
