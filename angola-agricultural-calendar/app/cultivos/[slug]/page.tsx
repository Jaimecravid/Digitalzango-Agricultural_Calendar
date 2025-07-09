import { getCropById, ANGOLA_CROPS } from '@/lib/data/crops-database';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Generate static params for all crops
export async function generateStaticParams() {
  return ANGOLA_CROPS.map((crop) => ({
    slug: crop.id,
  }));
}

export default async function CropDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const crop = getCropById(slug);

  if (!crop) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">Início</Link>
          <span>→</span>
          <Link href="/guias" className="hover:text-green-600">Guias de Cultivo</Link>
          <span>→</span>
          <Link href="/cultivos" className="hover:text-green-600">Culturas</Link>
          <span>→</span>
          <span className="text-gray-800 font-semibold">{crop.name}</span>
        </div>
      </nav>

      {/* Hero Section with Crop Information */}
      <div className={`bg-gradient-to-r ${crop.color} text-white p-8 rounded-xl mb-8`}>
        <div className="flex items-center gap-6">
          <span className="text-8xl">{crop.icon}</span>
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-2">{crop.name}</h1>
            <p className="text-2xl opacity-90 italic mb-2">{crop.scientificName}</p>
            <p className="text-xl opacity-80 mb-4">{crop.description}</p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                📅 {crop.season}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                📊 {crop.difficulty}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                🌾 {crop.yield}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                💰 {crop.marketPrice.min}-{crop.marketPrice.max} {crop.marketPrice.currency}/{crop.marketPrice.unit}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Detailed Description */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Sobre o {crop.name}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{crop.detailedDescription}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Informações Nutricionais</h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span>Calorias:</span>
                      <span className="font-semibold">{crop.nutritionalValue.calories} kcal</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Proteína:</span>
                      <span className="font-semibold">{crop.nutritionalValue.protein}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Carboidratos:</span>
                      <span className="font-semibold">{crop.nutritionalValue.carbs}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fibra:</span>
                      <span className="font-semibold">{crop.nutritionalValue.fiber}g</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Características</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Necessidade de Água:</span>
                    <span className="font-semibold text-blue-600">{crop.waterRequirement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Intensidade de Trabalho:</span>
                    <span className="font-semibold text-orange-600">{crop.laborIntensity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mecanização:</span>
                    <span className="font-semibold text-purple-600">{crop.mechanizationLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Potencial de Exportação:</span>
                    <span className="font-semibold text-green-600">
                      {crop.exportPotential ? "Sim" : "Não"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cultivation Guide */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Guia de Cultivo</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">🌱 Dicas Essenciais</h3>
                <ul className="space-y-3">
                  {crop.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1 text-lg">✓</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">🌤️ Requisitos Climáticos</h3>
                  <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span>Chuva:</span>
                      <span className="font-semibold">{crop.climateRequirements.rainfall.min}-{crop.climateRequirements.rainfall.max}mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Temperatura:</span>
                      <span className="font-semibold">{crop.climateRequirements.temperature.min}-{crop.climateRequirements.temperature.max}°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Umidade:</span>
                      <span className="font-semibold">{crop.climateRequirements.humidity.min}-{crop.climateRequirements.humidity.max}%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-amber-700">🌱 Requisitos do Solo</h3>
                  <div className="bg-amber-50 p-4 rounded-lg space-y-2">
                    <div>
                      <span className="text-sm text-gray-600">Tipo:</span>
                      <p className="font-semibold">{crop.soilRequirements.type.join(', ')}</p>
                    </div>
                    <div className="flex justify-between">
                      <span>pH:</span>
                      <span className="font-semibold">{crop.soilRequirements.ph.min}-{crop.soilRequirements.ph.max}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Drenagem:</span>
                      <span className="font-semibold">{crop.soilRequirements.drainage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Calendar Information */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">📅 Calendário Agrícola</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">Plantio</h3>
                <div className="flex flex-wrap gap-2">
                  {crop.plantingMonths.map((month) => {
                    const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
                    return (
                      <span key={month} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {monthNames[month - 1]}
                      </span>
                    );
                  })}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">Colheita</h3>
                <div className="flex flex-wrap gap-2">
                  {crop.harvestMonths.map((month) => {
                    const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
                    return (
                      <span key={month} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {monthNames[month - 1]}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Processing and Storage */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">📦 Processamento e Armazenamento</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">Opções de Processamento</h3>
                <ul className="space-y-2">
                  {crop.processingOptions.map((option, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Armazenamento</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">{crop.storageInfo}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar - Right Column */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Informações Rápidas</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Categoria:</span>
                <span className="font-semibold capitalize">{crop.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Época:</span>
                <span className="font-semibold">{crop.season}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dificuldade:</span>
                <span className="font-semibold">{crop.difficulty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Produção:</span>
                <span className="font-semibold">{crop.yield}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Preço:</span>
                <span className="font-semibold text-green-600">
                  {crop.marketPrice.min}-{crop.marketPrice.max} {crop.marketPrice.currency}/{crop.marketPrice.unit}
                </span>
              </div>
            </div>
          </div>

          {/* Sustainability Score */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Sustentabilidade</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{crop.sustainabilityScore}/10</div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div 
                  className="bg-green-500 h-3 rounded-full transition-all duration-300" 
                  style={{ width: `${crop.sustainabilityScore * 10}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">Pontuação de Sustentabilidade</p>
            </div>
          </div>

          {/* Provinces */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Províncias Ideais</h3>
            <div className="flex flex-wrap gap-2">
              {crop.provinces.map((province, index) => (
                <Link key={index} href={`/provincias/${province.toLowerCase()}`}>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition-colors cursor-pointer">
                    {province}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Crops */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Culturas Relacionadas</h3>
            <div className="space-y-2">
              {crop.relatedCrops.map((relatedId, index) => {
                const relatedCrop = getCropById(relatedId);
                return relatedCrop ? (
                  <Link key={index} href={`/cultivos/${relatedId}`}>
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                      <span className="text-2xl">{relatedCrop.icon}</span>
                      <span className="font-medium">{relatedCrop.name}</span>
                    </div>
                  </Link>
                ) : null;
              })}
            </div>
          </div>

          {/* DigitalZango Affiliate Products */}
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-orange-800">🛒 Produtos Recomendados</h3>
            <div className="space-y-3">
              {crop.affiliateProducts.slice(0, 3).map((productId, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow">
                  <p className="font-semibold text-sm">Produto para {crop.name}</p>
                  <p className="text-xs text-gray-600 mb-2">ID: {productId}</p>
                  <Link href={`/produtos/${productId}`}>
                    <button className="text-orange-600 text-sm hover:underline">
                      Ver detalhes →
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link href="/produtos">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Ver Todos os Produtos
                </button>
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link href="/calendario">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                📅 Ver no Calendário
              </button>
            </Link>
            <Link href="/pragas">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                🐛 Alertas de Pragas
              </button>
            </Link>
            <Link href="/guias">
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                ← Voltar aos Guias
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
