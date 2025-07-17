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
  
  // CORRECT PATH - Points to your existing lib/articles directory
  const articlesDirectory = path.join(process.cwd(), "lib", "articles");
  
  try {
    const files = fs.readdirSync(articlesDirectory);
    console.log("Raw files found:", files);
    console.log("Number of raw files:", files.length);
    
    const posts = files
      .filter(filename => filename.endsWith('.md'))
      .map(filename => {
        const filePath = path.join(articlesDirectory, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        
        return {
          id: filename.replace('.md', ''),
          title: data.title || 'Untitled',
          content: content,
          excerpt: data.excerpt || content.substring(0, 200) + '...',
          date: data.date || new Date().toISOString().split('T')[0],
          author: data.author || 'Equipe DigitalZango',
          tags: data.tags || [],
          slug: filename.replace('.md', ''),
          featured: data.featured || false,
          coverImage: data.coverImage || "/images/blog/default.jpg",
        };
      });
    
    const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    console.log("Final posts count:", sortedPosts.length);
    console.log("Final posts titles:", sortedPosts.map(p => p.title));
    console.log("=== End getBlogPosts ===");
    
    return sortedPosts;
  } catch (error) {
    console.error('Error reading articles directory:', error);
    console.log("=== End getBlogPosts (with error) ===");
    return [];
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter(post => post.featured);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter(post => post.tags.includes(tag));
}
