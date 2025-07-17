import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/getBlogPosts';

export async function GET(request: NextRequest) {
  try {
    const posts = getBlogPosts();
    
    // Return the array directly, not wrapped in an object
    return NextResponse.json(posts);
    
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' }, 
      { status: 500 }
    );
  }
}
