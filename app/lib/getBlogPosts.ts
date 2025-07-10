export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
  featured?: boolean;
  coverImage?: string;
}

export function getBlogPosts(): BlogPost[] {
  // Agricultural content for DigitalZango Calendar
  return [
    {
      id: '1',
      title: 'Calendário Agrícola de Angola: Guia Completo 2025',
      content: 'O planejamento agrícola é fundamental para o sucesso da produção em Angola. Este guia completo apresenta as melhores práticas para cada província...',
      excerpt: 'Aprenda a planejar sua produção agrícola com nosso calendário completo adaptado às condições climáticas de Angola.',
      date: '2025-01-15',
      author: 'Equipe DigitalZango',
      tags: ['agricultura', 'planejamento', 'angola', 'calendário'],
      slug: 'calendario-agricola-angola-guia-completo-2025',
      featured: true
    },
    {
      id: '2',
      title: 'Melhores Práticas para Agricultura Sustentável',
      content: 'A agricultura sustentável é essencial para preservar os recursos naturais de Angola. Descubra técnicas modernas adaptadas ao nosso clima...',
      excerpt: 'Técnicas agrícolas sustentáveis adaptadas às condições específicas das 18 províncias de Angola.',
      date: '2025-01-10',
      author: 'Equipe DigitalZango',
      tags: ['sustentabilidade', 'técnicas', 'meio-ambiente'],
      slug: 'melhores-praticas-agricultura-sustentavel',
      featured: false
    },
    {
      id: '3',
      title: 'Previsão Meteorológica e Planejamento Agrícola',
      content: 'A integração de dados meteorológicos no planejamento agrícola pode aumentar significativamente a produtividade...',
      excerpt: 'Como usar previsões meteorológicas para otimizar sua produção agrícola em Angola.',
      date: '2025-01-05',
      author: 'Equipe DigitalZango',
      tags: ['meteorologia', 'tecnologia', 'produtividade'],
      slug: 'previsao-meteorologica-planejamento-agricola',
      featured: false
    }
  ];
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter(post => post.featured);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter(post => post.tags.includes(tag));
}
