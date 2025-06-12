"use client";

import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/language-context";

export default function BlogPreview() {
  const { t } = useLanguage();

  // Sample blog posts with affiliate integration opportunities
  const blogPosts = [
    {
      id: 1,
      title: "Best Fertilizers for Angolan Corn Crops",
      excerpt: "Discover the top 5 fertilizers that increase corn yield by 40% in Angola's climate. Complete guide with application tips and seasonal recommendations.",
      image: "/images/fertilizer-guide.jpg",
      category: "Fertilizers",
      readTime: "5 min read",
      date: "2025-06-10",
      affiliateProduct: {
        name: "Premium Corn Fertilizer Kit",
        price: "$29.99",
        affiliate: true
      }
    },
    {
      id: 2,
      title: "Smart Irrigation Systems for Small Farms",
      excerpt: "How to set up affordable drip irrigation that saves 60% water while boosting crop production. Step-by-step installation guide included.",
      image: "/images/irrigation-system.jpg",
      category: "Irrigation",
      readTime: "8 min read",
      date: "2025-06-08",
      affiliateProduct: {
        name: "Smart Drip Irrigation Kit",
        price: "$89.99",
        affiliate: true
      }
    },
    {
      id: 3,
      title: "Pest Control Guide for Vegetable Gardens",
      excerpt: "Natural and chemical solutions to protect your vegetables from common Angolan pests. Includes seasonal pest calendar and treatment schedules.",
      image: "/images/pest-control.jpg",
      category: "Pest Control",
      readTime: "6 min read",
      date: "2025-06-05",
      affiliateProduct: {
        name: "Organic Pest Control Set",
        price: "$24.99",
        affiliate: true
      }
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📚 Latest Agricultural Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert tips, product reviews, and step-by-step guides to help you grow better crops and increase your farm's productivity.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden group">
              {/* Blog Post Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                {post.affiliateProduct.affiliate && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                      🛒 Product Review
                    </span>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                {/* Post Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>

                {/* Post Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Affiliate Product Integration */}
                {post.affiliateProduct.affiliate && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-orange-600 font-medium mb-1">Featured Product</p>
                        <p className="text-sm font-semibold text-gray-900">{post.affiliateProduct.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-orange-600">{post.affiliateProduct.price}</p>
                        <p className="text-xs text-gray-500">Best Price</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link href={`/blog/${post.id}`} className="flex-1">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 text-sm">
                      Read Full Guide
                    </Button>
                  </Link>
                  {post.affiliateProduct.affiliate && (
                    <Link href={`/products/${post.id}`}>
                      <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-4 py-2 text-sm">
                        🛒 View Product
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/blog">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg">
              📖 View All Articles
            </Button>
          </Link>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            <strong>Affiliate Disclosure:</strong> Some links in our articles are affiliate links. 
            We may earn a commission when you purchase through these links, at no extra cost to you. 
            This helps support our content creation and keeps our guides free.
          </p>
        </div>
      </div>
    </section>
  );
}