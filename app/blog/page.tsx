"use client"

import { LanguageProvider } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import Link from "next/link";

// Simple static articles data (temporary solution)
const articles = [
  {
    slug: "agricultura-de-precisao-em-angola",
    title: "Agricultura de Precisão em Angola",
    date: "2025-06-17",
    excerpt: "A agricultura de precisão está revolucionando o campo angolano, combinando tecnologias como GPS, drones, sensores e sistemas de informação geográfica para otimizar a produção agrícola e aumentar a produtividade."
  },
  {
    slug: "agricultura-sustentavel-e-lucrativa-em-angola",
    title: "Agricultura Sustentável e Lucrativa em Angola",
    date: "2025-06-17",
    excerpt: "Com vastas terras das quais apenas 20% são exploradas, Angola apresenta oportunidades precisosas para agricultores que adotam práticas sustentáveis."
  },
  {
    slug: "historias-de-sucesso-agricola-angolano",
    title: "Histórias de Sucesso Agrícola Angolano",
    date: "2025-06-17",
    excerpt: "Uma revolução silenciosa está acontecendo no campo angolano, onde agricultores investem em técnicas modernas e tecnologias inovadoras."
  },
  {
    slug: "weather-planning-for-farmers",
    title: "Planejamento Climático para Agricultores",
    date: "2025-06-17",
    excerpt: "Para os agricultores angolanos, a diferença entre uma colheita abundante e uma perda devastadora pode estar na capacidade de interpretar corretamente os dados meteorológicos."
  },
  {
    slug: "guia-de-identificacao-e-controlo-de-pragas",
    title: "Guia de Identificação e Controlo de Pragas",
    date: "2025-06-17",
    excerpt: "Em Angola, as pragas e doenças representam uma ameaça significativa para culturas como milho, soja, feijão e café."
  }
];

function BlogContent() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Blog</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Artigos, dicas e insights sobre agricultura em Angola. Mantenha-se actualizado com as últimas tendências e melhores práticas.
        </p>
        <div className="space-y-8">
          {articles.map((article) => (
            <div key={article.slug} className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/blog/${article.slug}`} className="text-blue-600 hover:underline">
                  {article.title}
                </Link>
              </h2>
              <p className="text-gray-500 mb-3">{article.date}</p>
              <p className="text-gray-700">{article.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <BlogContent />
      </RegionProvider>
    </LanguageProvider>
  );
}
