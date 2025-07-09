'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Gauge, Mail, MapPin, Phone, Shield, ShoppingCart, SprayCan, Star } from "lucide-react";

export default function PulverizadorManual20L() {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    province: '',
    address: '',
    usage: ''
  });

  const basePrice = 25000; // 25.000 AOA
  const originalPrice = 28000; // 28.000 AOA
  const discount = Math.round(((originalPrice - basePrice) / originalPrice) * 100);

  const calculatePrice = (qty: number) => {
    if (qty >= 5) return basePrice * qty * 0.85; // 15% desconto
    if (qty >= 3) return basePrice * qty * 0.92; // 8% desconto
    if (qty >= 2) return basePrice * qty * 0.96; // 4% desconto
    return basePrice * qty;
  };

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
            <span className="text-gray-800 font-semibold">Pulverizador Manual 20L</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - Matching your gradient style */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8">
        <div className="container mx-auto">
          <div className="flex items-center gap-6">
            <SprayCan className="text-6xl w-24 h-24" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Pulverizador Manual 20L</h1>
              <p className="text-xl opacity-90">Equipamento profissional para aplicação precisa</p>
              <p className="text-lg opacity-80">Ideal para defensivos, fertilizantes e herbicidas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Product Images Section */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <SprayCan className="w-16 h-16 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pulverizador Profissional</h3>
              <p className="text-gray-600">Capacidade 20 litros</p>
            </div>
            
            {/* Features Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Gauge className="w-8 h-8" />, name: 'Manómetro' },
                { icon: <Shield className="w-8 h-8" />, name: 'Resistente' },
                { icon: <SprayCan className="w-8 h-8" />, name: '3 Bicos' },
                { icon: '🎯', name: 'Precisão' }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow">
                  <div className="text-orange-600 mb-2 flex justify-center">
                    {typeof feature.icon === 'string' ? (
                      <span className="text-3xl">{feature.icon}</span>
                    ) : (
                      feature.icon
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{feature.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            
            {/* Pricing Card */}
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
                  <span className="ml-2 text-gray-600">(156)</span>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                ✅ Frete grátis para compras acima de 20.000 AOA<br/>
                ✅ Garantia de 12 meses + peças de reposição
              </p>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">⚙️ Especificações Técnicas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Capacidade:</span>
                    <span className="font-semibold">20 Litros</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Pressão Máxima:</span>
                    <span className="font-semibold">3 Bar</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Peso Vazio:</span>
                    <span className="font-semibold">2.5 kg</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Material:</span>
                    <span className="font-semibold">PEAD</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Alcance:</span>
                    <span className="font-semibold">8 metros</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Garantia:</span>
                    <span className="font-semibold">12 meses</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">🎯 Características Principais</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <Gauge className="w-8 h-8 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Manómetro de Pressão</p>
                    <p className="text-sm text-gray-600">Controlo preciso da pressão de aplicação</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Shield className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Resistente a Químicos</p>
                    <p className="text-sm text-gray-600">Material PEAD resistente a agroquímicos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <SprayCan className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-800">3 Bicos Intercambiáveis</p>
                    <p className="text-sm text-gray-600">Cone vazio, leque e cone cheio incluídos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Included Items */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">📦 Itens Incluídos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Tanque 20L com alças ergonómicas',
                  'Bomba manual com manómetro',
                  'Mangueira flexível 1.5m',
                  'Vara telescópica ajustável',
                  'Bico cone vazio',
                  'Bico leque regulável',
                  'Bico cone cheio',
                  'Kit completo de vedações',
                  'Manual de instruções detalhado',
                  'Certificado de garantia'
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+244 9XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Finalidade de Uso
                  </label>
                  <select 
                    value={formData.usage}
                    onChange={(e) => setFormData({...formData, usage: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Selecione a finalidade</option>
                    <option value="defensivos">Aplicação de Defensivos</option>
                    <option value="fertilizantes">Fertilizantes Líquidos</option>
                    <option value="herbicidas">Herbicidas</option>
                    <option value="multiplo">Uso Múltiplo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantidade
                  </label>
                  <select 
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value={1}>1 unidade - {basePrice.toLocaleString()} AOA</option>
                    <option value={2}>2 unidades - {calculatePrice(2).toLocaleString()} AOA (4% desconto)</option>
                    <option value={3}>3 unidades - {calculatePrice(3).toLocaleString()} AOA (8% desconto)</option>
                    <option value={5}>5+ unidades - {calculatePrice(5).toLocaleString()} AOA (15% desconto)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Endereço de Entrega
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    rows={3}
                    placeholder="Endereço completo para entrega"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Finalizar Pedido - {calculatePrice(quantity).toLocaleString()} AOA
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-100 rounded-xl p-4">
              <h4 className="font-semibold mb-3 text-gray-800">📞 Atendimento Especializado</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-orange-600" />
                  <span>+244 923 456 789 (Especialista em pulverização)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-orange-600" />
                  <span>pulverizadores@digitalzango.ao</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>Entrega rápida em todo Angola</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12 bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-green-800">
            🛒 Complete Seu Kit Agrícola - DigitalZango
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
                name: 'Sistema Irrigação Gotejamento', 
                price: '85.000', 
                description: 'Economize água e aumente produção',
                image: '💧',
                discount: '11% OFF',
                link: '/comprar/sistema-irrigacao-gotejamento'
              },
              { 
                name: 'Fertilizantes Líquidos', 
                price: '15.000', 
                description: 'Para usar com seu pulverizador',
                image: '🧪',
                discount: '20% OFF',
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
