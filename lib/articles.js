import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'lib', 'articles');

export function getAllArticles() {
  // Check if directory exists
  if (!fs.existsSync(articlesDirectory)) {
    console.error('Articles directory does not exist:', articlesDirectory);
    return [];
  }

  // Get all files in the directory
  const fileNames = fs.readdirSync(articlesDirectory);
  
  // Filter only .md files
  const markdownFiles = fileNames.filter(name => name.endsWith('.md'));

  const articles = markdownFiles.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(articlesDirectory, fileName);
    
    try {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        ...data,
        content,
      };
    } catch (error) {
      console.error(`Error reading file ${fileName}:`, error);
      return null;
    }
  }).filter(Boolean); // Remove null entries

  // Sort articles by date (newest first)
  return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}
