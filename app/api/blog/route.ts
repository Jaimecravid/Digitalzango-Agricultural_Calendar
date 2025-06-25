import { getBlogPosts } from "../../lib/getBlogPosts";

export async function GET() {
  try {
    const posts = getBlogPosts();
    return Response.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return Response.json({ error: 'Failed to load posts' }, { status: 500 });
  }
}
