import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts } from "@/lib/getBlogPosts";  // ← Use absolute path

export async function GET(request: NextRequest) {
  try {
    const posts = getBlogPosts();
    
    return NextResponse.json({
      success: true,
      posts: posts,
      total: posts.length
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to load posts' 
      },
      { status: 500 }
    );
  }
}
