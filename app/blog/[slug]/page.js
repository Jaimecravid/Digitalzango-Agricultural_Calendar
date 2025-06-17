import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Helper to get article data by slug
async function getArticleBySlug(slug) {
  // Update this line to include 'app' in the path
  const articlesDirectory = path.join(process.cwd(), 'app', 'lib', 'articles');
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...data,
    contentHtml,
  };
}

// Dynamic page component
export default async function ArticlePage({ params }) {
  const { slug } = params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
        <p className="text-gray-500 mb-6">{article.date}</p>
        <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
      </article>
    </div>
  );
}

// Tell Next.js which pages to generate
export async function generateStaticParams() {
  // Update this line to include 'app' in the path
  const articlesDirectory = path.join(process.cwd(), 'app', 'lib', 'articles');
  
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  
  const filenames = fs.readdirSync(articlesDirectory);
  const markdownFiles = filenames.filter(name => name.endsWith('.md'));

  return markdownFiles.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}
