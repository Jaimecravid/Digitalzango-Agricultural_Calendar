"use client"

import { LanguageProvider } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
// Do NOT import Header here
// import Header from "../components/header" // REMOVE THIS LINE if present

// Import other components you use in your blog page
// import BlogFilters from "../components/blog-filters"
// import FeaturedArticle from "../components/featured-article"
// import BlogList from "../components/blog-list"

function BlogContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> <-- DO NOT include this line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Blog</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Artigos, dicas e insights sobre agricultura em Angola. Mantenha-se actualizado com as últimas tendências e melhores práticas.
        </p>
        {/* Example: Render your filters, featured article, and blog list here */}
        {/* <BlogFilters /> */}
        {/* <FeaturedArticle /> */}
        {/* <BlogList /> */}
        {/* Place your categories, featured article, and blog list components here as in your current design */}
      </div>
    </div>
  )
}

export default function BlogPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <BlogContent />
      </RegionProvider>
    </LanguageProvider>
  )
}