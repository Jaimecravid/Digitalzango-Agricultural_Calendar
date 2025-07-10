'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Phone, Mail, MapPin, Star, ShoppingCart } from 'lucide-react';

export default function KitFerramentasBasicas() {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    province: '',
    address: ''
  });

  const basePrice = 45000; // 45.000 AOA
  const originalPrice = 52000; // 52.000 AOA
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
            <span className="text-gray-800 font-semibold">Kit Ferramentas Básicas</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - Matching your gradient style */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8">
        <div className="container mx-auto">
          <div className="flex items-center gap-6">
            <span className="text-6xl">🧰</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Kit Ferramentas Básicas</h1>
              <p className="text-xl opacity-90">Conjunto completo para agricultura familiar</p>
              <p className="text-lg opacity-80">Ideal para pequenos e médios produtores em Angola</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Product Images Section */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-6xl">🧰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Kit Completo</h3>
              <p className="text-gray-600">8 ferramentas essenciais</p>
            </div>
            
            {/* Tool Gallery - Matching your card style */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '⚒️', name: 'Enxada' },
                { icon: '🔪', name: 'Facão' },
                { icon: '🪣', name: 'Pá' },
                { icon: '🧹', name: 'Rastelo' }
              ].map((tool, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow">
                  <span className="text-3xl block mb-2">{tool.icon}</span>
                  <p className="text-sm font-medium text-gray-700">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            
            {/* Pricing Card - Matching your style */}
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-orange-600">{basePrice.toLocaleString()} AOA</span>
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
                  <span className="ml-2 text-gray-600">(127)</span>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                ✅ Promoção válida até 31 de Julho de 2025<br/>
                ✅ Frete grátis para Luanda, Benguela e Huambo
              </p>
            </div>

            {/* Kit Contents - Matching your list style */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">🎁 Conteúdo do Kit</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Enxada tradicional resistente',
                  'Facão 18 polegadas afiado',
                  'Pá de bico reforçada',
                  'Rastelo com 12 dentes',
                  'Regador 10L com crivo',
                  'Pulverizador manual 2L',
                  'Luvas de trabalho resistentes',
                  'Saco organizador incluído'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">💡 Vantagens do Kit</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">💰</span>
                  <div>
                    <p className="font-semibold">Economia Garantida</p>
                    <p className="text-sm text-gray-600">Economize 15.000 AOA comprando o kit completo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🛠️</span>
                  <div>
                    <p className="font-semibold">Qualidade Profissional</p>
                    <p className="text-sm text-gray-600">Ferramentas testadas por agricultores angolanos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-600 text-xl">📦</span>
                  <div>
                    <p className="font-semibold">Entrega Rápida</p>
                    <p className="text-sm text-gray-600">Receba em 3-5 dias úteis nas principais cidades</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Purchase Form - Matching your button style */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">🛒 Comprar Agora</h3>
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+244 9XX XXX XXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Província
                  </label>
                  <select 
                    value={formData.province}
                    onChange={(e) => setFormData({...formData, province: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantidade
                  </label>
                  <select 
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value={1}>1 Kit - {basePrice.toLocaleString()} AOA</option>
                    <option value={2}>2 Kits - {(basePrice * 2 * 0.95).toLocaleString()} AOA (5% desconto)</option>
                    <option value={3}>3 Kits - {(basePrice * 3 * 0.90).toLocaleString()} AOA (10% desconto)</option>
                  </select>
                </div>

                {/* Matching your button style exactly */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Finalizar Pedido - {(basePrice * quantity * (quantity > 2 ? 0.90 : quantity > 1 ? 0.95 : 1)).toLocaleString()} AOA
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-100 rounded-xl p-4">
              <h4 className="font-semibold mb-3 text-gray-800">📞 Informações de Contacto</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span>+244 923 456 789</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-green-600" />
                  <span>vendas@digitalzango.ao</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>Entrega em todas as 18 províncias</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products - Matching your featured products style */}
        <div className="mt-12 bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
            🛒 Produtos Relacionados - DigitalZango
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: 'Sistema Irrigação Gotejamento', 
                price: '85.000', 
                description: 'Kit completo para 1000m²',
                image: '💧',
                discount: '20% OFF',
                link: '/comprar/sistema-irrigacao-gotejamento'
              },
              { 
                name: 'Pulverizador Manual 20L', 
                price: '25.000', 
                description: 'Ideal para pequenas propriedades',
                image: '💨',
                discount: '10% OFF',
                link: '/comprar/pulverizador-manual-20l'
              },
              { 
                name: 'Debulhador Manual', 
                price: '120.000', 
                description: 'Para separação de grãos',
                image: '🌾',
                discount: '15% OFF',
                link: '/ofertas/debulhador'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{product.image}</div>
                <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold mb-2 inline-block">
                  {product.discount}
                </div>
                <h3 className="font-bold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <p className="text-xl font-bold text-blue-600 mb-4">{product.price} AOA</p>
                <Link href={product.link}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full">
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
