export interface Product {
  id: string;
  name: string;
  category: 'seeds' | 'fertilizers' | 'tools' | 'equipment' | 'pesticides';
  subcategory: string;
  price: number;
  currency: string;
  description: string;
  specifications: string[];
  affiliateLink: string;
  digitalZangoCommission: number;
  availability: 'in-stock' | 'limited' | 'out-of-stock';
  brand: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  relatedCrops: string[];
  features: string[];
  weight?: string;
  dimensions?: string;
  warranty?: string;
  shippingInfo: string;
  tags: string[];
}

export const PRODUCTS_DATABASE: Product[] = [
  // SEEDS CATEGORY
  {
    id: 'sementes-milho-hibrido-premium',
    name: 'Sementes de Milho Híbrido Premium DZ-001',
    category: 'seeds',
    subcategory: 'cereais',
    price: 2500,
    currency: 'AOA',
    description: 'Sementes de milho híbrido de alta produtividade, desenvolvidas especificamente para o clima angolano. Resistente à seca e pragas.',
    specifications: [
      'Variedade: Híbrido F1',
      'Ciclo: 120-130 dias',
      'Produtividade: 8-12 ton/ha',
      'Resistência à seca: Alta',
      'Pureza: 98%'
    ],
    affiliateLink: 'https://digitalzango.com/affiliate/seeds/milho-001',
    digitalZangoCommission: 15,
    availability: 'in-stock',
    brand: 'AgroAngola Premium',
    imageUrl: '/images/products/sementes-milho.jpg',
    rating: 4.8,
    reviewCount: 127,
    relatedCrops: ['milho'],
    features: ['Resistente à seca', 'Alta produtividade', 'Adaptado ao clima tropical'],
    weight: '25kg',
    warranty: '6 meses',
    shippingInfo: 'Entrega em 3-5 dias úteis',
    tags: ['premium', 'hibrido', 'resistente', 'alta-produtividade']
  },
  {
    id: 'sementes-feijao-vermelho',
    name: 'Sementes de Feijão Vermelho Tradicional',
    category: 'seeds',
    subcategory: 'leguminosas',
    price: 3200,
    currency: 'AOA',
    description: 'Sementes de feijão vermelho tradicional angolano, variedade crioula melhorada com alta adaptação local.',
    specifications: [
      'Variedade: Crioula melhorada',
      'Ciclo: 90-100 dias',
      'Produtividade: 1.5-2.5 ton/ha',
      'Proteína: 23%',
      'Germinação: 95%'
    ],
    affiliateLink: 'https://digitalzango.com/affiliate/seeds/feijao-001',
    digitalZangoCommission: 12,
    availability: 'in-stock',
    brand: 'Sementes Luanda',
    imageUrl: '/images/products/sementes-feijao.jpg',
    rating: 4.6,
    reviewCount: 89,
    relatedCrops: ['feijao'],
    features: ['Variedade local', 'Rico em proteína', 'Fácil cultivo'],
    weight: '20kg',
    warranty: '4 meses',
    shippingInfo: 'Entrega em 2-4 dias úteis',
    tags: ['tradicional', 'crioula', 'proteina', 'local']
  },
  {
    id: 'sementes-arroz-irrigado',
    name: 'Sementes de Arroz para Sistema Irrigado',
    category: 'seeds',
    subcategory: 'cereais',
    price: 2800,
    currency: 'AOA',
    description: 'Sementes de arroz especiais para cultivo irrigado, ideais para as várzeas de Angola.',
    specifications: [
      'Variedade: Japonica adaptada',
      'Ciclo: 120-140 dias',
      'Produtividade: 4-7 ton/ha',
      'Altura da planta: 90-100cm',
      'Grão: Longo e aromático'
    ],
    affiliateLink: 'https://digitalzango.com/affiliate/seeds/arroz-001',
    digitalZangoCommission: 14,
    availability: 'limited',
    brand: 'AquaSeeds',
    imageUrl: '/images/products/sementes-arroz.jpg',
    rating: 4.7,
    reviewCount: 56,
    relatedCrops: ['arroz'],
    features: ['Sistema irrigado', 'Grão aromático', 'Alta qualidade'],
    weight: '25kg',
    warranty: '6 meses',
    shippingInfo: 'Entrega em 5-7 dias úteis',
    tags: ['irrigado', 'aromatico', 'varzea', 'qualidade']
  },

  // FERTILIZERS CATEGORY
  {
    id: 'fertilizante-npk-20-10-10',
    name: 'Fertilizante NPK 20-10-10 DigitalZango Pro',
    category: 'fertilizers',
    subcategory: 'minerais',
    price: 4500,
    currency: 'AOA',
    description: 'Fertilizante mineral completo NPK 20-10-10, ideal para fase inicial de crescimento das culturas.',
    specifications: [
      'Nitrogênio (N): 20%',
      'Fósforo (P2O5): 10%',
      'Potássio (K2O): 10%',
      'Micronutrientes inclusos',
      'Solubilidade: Alta'
    ],
    affiliateLink: 'https://digitalzango.com/affiliate/fertilizers/npk-001',
    digitalZangoCommission: 18,
    availability: 'in-stock',
    brand: 'FertilAngola',
    imageUrl: '/images/products/fertilizante-npk.jpg',
    rating: 4.9,
    reviewCount: 203,
    relatedCrops: ['milho', 'feijao', 'arroz'],
    features: ['Crescimento rápido', 'Micronutrientes', 'Fácil aplicação'],
    weight: '50kg',
    warranty: '12 meses',
    shippingInfo: 'Entrega em 2-3 dias úteis',
    tags: ['completo', 'crescimento', 'micronutrientes', 'profissional']
  },
  {
    id: 'fertilizante-organico-compostado',
    name: 'Fertilizante Orgânico Compostado Premium',
    category: 'fertilizers',
    subcategory: 'organicos',
    price: 2200,
    currency: 'AOA',
    description: 'Fertilizante orgânico compostado de alta qualidade, produzido com resíduos vegetais e esterco bovino.',
    specifications: [
      'Matéria orgânica: 45%',
      'Nitrogênio total: 2.5%',
      'Fósforo: 1.8%',
      'Potássio: 2.2%',
      'pH: 6.5-7.0'
    ],
    affiliateLink: 'https://digitalzango.com/affiliate/fertilizers/organico-001',
    digitalZangoCommission: 16,
    availability: 'in-stock',
    brand: 'EcoFertil Angola',
    imageUrl: '/images/products/fertilizante-organico.jpg',
    rating: 4.5,
    reviewCount: 134,
    relatedCrops: ['mandioca', 'cafe', 'feijao'],
    features: ['100% orgânico', 'Melhora o solo', 'Sustentável'],
    weight: '40kg',
    warranty: '6 meses',
    shippingInfo: 'Entrega em 3-5 dias úteis',
    tags: ['organico', 'sustentavel', 'solo', 'natural']
  },

  // TOOLS CATEGORY
  {
    id: 'enxada-profissional-cabo-madeira',
    name: 'Enxada Profissional Cabo de Madeira',
    category: 'tools',
    subcategory: 'manuais',
    price: 3800,
    currency: 'AOA',
    description: 'Enxada profissional com lâmina de aço carbono e cabo de madeira resistente, ideal para preparo do solo.',
    specifications: [
      'Material da lâmina: Aço carbono',
      'Cabo: Madeira eucalipto',
      'Comprimento total: 120cm',
      'Largura da lâmina: 20cm',
      'Peso: 1.2kg'
    ],
    affiliateLink: 'https://digitalzango.com/affiliate/tools/enxada-001',
    digitalZangoCommission: 20,
    availability: 'in-stock',
    brand: 'Ferramentas Luanda',
    imageUrl: '/images/products/enxada-profissional.jpg',
    rating: 4.7,
    reviewCount: 178,
    relatedCrops: ['milho', 'feijao', 'mandioca', 'arroz'],
    features: ['Durável', 'Ergonômica', 'Aço resistente'],
    weight: '1.2kg',
    dimensions: '120cm x 20cm',
    warranty: '24 meses',
    shippingInfo: 'Entrega em 2-4 dias úteis',
    tags: ['profissional', 'duravel', 'aco-carbono', 'ergonomica']
  },
  {
    id: 'sistema-irrigacao-gotejamento',
    name: 'Sistema de Irrigação por Gotejamento 100m',
    category: 'equipment',
    subcategory: 'irrigacao',
    price: 15000,
    currency: 'AOA',
    description: 'Sistema completo de irrigação por gotejamento para 100 metros lineares, ideal para cultivos em fileiras.',
    specifications: [
      'Comprimento: 100 metros',
      'Gotejadores: A cada 30cm',
      'Vazão: 2L/h por gotejador',
      'Pressão de trabalho: 1-3 bar',
      'Material: PVC flexível'
    ],
    affiliateLink: 'https://digitalzango.com/affiliate/equipment/irrigacao-001',
    digitalZangoCommission: 22,
    availability: 'in-stock',
    brand: 'IrrigaTech Angola',
    imageUrl: '/images/products/sistema-irrigacao.jpg',
    rating: 4.8,
    reviewCount: 67,
    relatedCrops: ['arroz', 'cafe', 'tomate'],
    features: ['Economia de água', 'Fácil instalação', 'Durável'],
    weight: '8kg',
    warranty: '36 meses',
    shippingInfo: 'Entrega em 5-7 dias úteis',
    tags: ['irrigacao', 'economia-agua', 'gotejamento', 'profissional']
  }
];

// Export functions for data access
export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS_DATABASE.find(product => product.id === id);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return PRODUCTS_DATABASE.filter(product => product.category === category);
};

export const getProductsByCrop = (cropId: string): Product[] => {
  return PRODUCTS_DATABASE.filter(product => 
    product.relatedCrops.includes(cropId)
  );
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return PRODUCTS_DATABASE.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.includes(lowercaseQuery))
  );
};

export const getProductsByAvailability = (availability: Product['availability']): Product[] => {
  return PRODUCTS_DATABASE.filter(product => product.availability === availability);
};
