import { getAllArticles } from "../lib/articles";
import Link from "next/link";

export default function BlogList() {
  const articles = getAllArticles();

  return (
    <div className="space-y-8">
      {articles.map((article) => (
        <div key={article.slug} className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-2">
            <Link href={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h2>
          <p className="text-gray-500 mb-3">{article.date}</p>
          <p className="text-gray-700">{article.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
