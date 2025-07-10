'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Phone, Mail, MapPin, Star, ShoppingCart, Droplets, Timer, Zap } from 'lucide-react';

export default function SistemaIrrigacaoGotejamento() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    cropType: '',
    province: ''
  });

  const basePrice = 85000; // 85.000 AOA
  const originalPrice = 95000; // 95.000 AOA
  const discount = Math.round(((originalPrice - basePrice) / originalPrice) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">Início</Link>
            <span>→</span>
            <Link href="/tools" className="hover:text-green-600">Ferramentas</Link>
            <span>→</span>
            <span className="text-gray-800 font-semibold">Sistema Irrigação Gotejamento</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - Matching your gradient style */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8">
        <div className="container mx-auto">
          <div className="flex items-center gap-6">
            <Droplets className="text-6xl w-24 h-24" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Sistema Irrigação Gotejamento</h1>
              <p className="text-xl opacity-90">Tecnologia avançada para agricultura eficiente</p>
              <p className="text-lg opacity-80">Economize até 60% de água e aumente a produtividade</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Product Images Section */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Droplets className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sistema Completo</h3>
              <p className="text-gray-600">Para áreas até 1000m²</p>
            </div>
            
            {/* System Components Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🪣', name: 'Reservatório' },
                { icon: '⚡', name: 'Bomba' },
                { icon: '🔧', name: 'Filtros' },
                { icon: '💧', name: 'Gotejadores' }
              ].map((component, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow">
                  <span className="text-3xl block mb-2">{component.icon}</span>
                  <p className="text-sm font-medium text-gray-700">{component.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            
            {/* Pricing Card */}
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-blue-600">{basePrice.toLocaleString()} AOA</span>
                    <span className="text-lg text-gray-500 line-through">{originalPrice.toLocaleString()} AOA</span>
                  </div>
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
                    {discount}% OFF
                  </div>
                </div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600">(89)</span>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                ✅ Instalação incluída em Luanda, Benguela e Huambo<br/>
                ✅ Garantia de 2 anos + suporte técnico
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">💡 Benefícios Principais</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Droplets className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Economia de Água</p>
                    <p className="text-sm text-gray-600">Até 60% menos consumo comparado à irrigação tradicional</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Timer className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Automatização Completa</p>
                    <p className="text-sm text-gray-600">Sistema com timer automático e controlo de pressão</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <Zap className="w-8 h-8 text-yellow-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Maior Produtividade</p>
                    <p className="text-sm text-gray-600">Aumento de 30-40% na produção agrícola</p>
                  </div>
                </div>
              </div>
            </div>

            {/* System Components */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">📦 Componentes do Sistema</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Reservatório 1000L resistente',
                  'Bomba elétrica 0.5HP',
                  'Filtro de tela profissional',
                  'Regulador de pressão',
                  'Tubagem principal 32mm (50m)',
                  'Mangueiras gotejadoras (500m)',
                  'Conectores e acessórios',
                  'Timer automático digital',
                  'Manual de instalação',
                  'Garantia 2 anos completa'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase Form */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">🛒 Solicitar Orçamento Personalizado</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+244 9XX XXX XXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Área a Irrigar (m²)
                  </label>
                  <input
                    type="number"
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: 1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de Cultivo
                  </label>
                  <select 
                    value={formData.cropType}
                    onChange={(e) => setFormData({...formData, cropType: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione o tipo de cultivo</option>
                    <option value="hortalicas">Hortaliças (Tomate, Cebola, Alface)</option>
                    <option value="frutas">Frutas (Banana, Laranja, Manga)</option>
                    <option value="cereais">Cereais (Milho, Arroz, Sorgo)</option>
                    <option value="leguminosas">Leguminosas (Feijão, Amendoim)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Província
                  </label>
                  <select 
                    value={formData.province}
                    onChange={(e) => setFormData({...formData, province: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione sua província</option>
                    <option value="luanda">Luanda</option>
                    <option value="benguela">Benguela</option>
                    <option value="huambo">Huambo</option>
                    <option value="bie">Bié</option>
                    <option value="malanje">Malanje</option>
                    <option value="cunene">Cunene</option>
                    <option value="huila">Huíla</option>
                    <option value="namibe">Namibe</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Solicitar Orçamento Personalizado
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-100 rounded-xl p-4">
              <h4 className="font-semibold mb-3 text-gray-800">📞 Suporte Técnico</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>+244 923 456 789 (Técnico especializado)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>irrigacao@digitalzango.ao</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Instalação profissional incluída</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12 bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-green-800">
            🛒 Produtos Complementares - DigitalZango
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: 'Kit Ferramentas Básicas', 
                price: '45.000', 
                description: 'Conjunto completo para agricultura',
                image: '🧰',
                discount: '13% OFF',
                link: '/comprar/kit-ferramentas-basicas'
              },
              { 
                name: 'Pulverizador Manual 20L', 
                price: '25.000', 
                description: 'Para aplicação de fertilizantes',
                image: '💨',
                discount: '11% OFF',
                link: '/comprar/pulverizador-manual-20l'
              },
              { 
                name: 'Bomba d\'água Adicional', 
                price: '180.000', 
                description: 'Para sistemas maiores',
                image: '⚡',
                discount: '8% OFF',
                link: '/tools'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{product.image}</div>
                <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold mb-2 inline-block">
                  {product.discount}
                </div>
                <h3 className="font-bold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <p className="text-xl font-bold text-green-600 mb-4">{product.price} AOA</p>
                <Link href={product.link}>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full">
                    Ver Produto
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
