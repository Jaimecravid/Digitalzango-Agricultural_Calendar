import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../app/lib/getBlogPosts";

export default function BlogPreview({ post }: { post: BlogPost }) {
  return (
    <div className="flex gap-4 items-start mb-8 pb-6 border-b">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.coverImage || "/images/blog/default.jpg"}
          alt={post.title}
          width={160}
          height={110}
          className="rounded-lg object-cover"
          style={{ minWidth: 160, minHeight: 110 }}
        />
      </Link>
      <div>
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold mb-1 hover:underline">{post.title}</h2>
        </Link>
        <p className="text-gray-500 text-xs mb-2">{post.date}</p>
        <p className="text-sm">{post.excerpt}</p>
      </div>
    </div>
  );
}
