import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  title: string;
  date: string;
  slug: string;
  excerpt?: string;
  coverImage?: string;
};

export function getBlogPosts(): BlogPost[] {
  console.log("=== getBlogPosts function called ===");
  
  const articlesDirectory = path.join(process.cwd(), "app", "lib", "articles");
  const files = fs.readdirSync(articlesDirectory);
  
  console.log("Raw files found:", files);
  console.log("Number of raw files:", files.length);

  const markdownFiles = files.filter((filename) => filename.endsWith(".md"));
  console.log("Markdown files:", markdownFiles);
  console.log("Number of markdown files:", markdownFiles.length);

  const posts = markdownFiles.map((filename) => {
    const filePath = path.join(articlesDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    const post = {
      title: data.title || filename.replace(".md", ""),
      date: data.date || "",
      slug: filename.replace(".md", ""),
      excerpt: data.excerpt || "",
      coverImage: data.coverImage || "/images/blog/default.jpg",
    };
    
    console.log("Processing post:", post.title, "with slug:", post.slug);
    return post;
  });

  const sortedPosts = posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  
  console.log("Final posts count:", sortedPosts.length);
  console.log("Final posts titles:", sortedPosts.map(p => p.title));
  console.log("=== End getBlogPosts ===");
  
  return sortedPosts;
}
