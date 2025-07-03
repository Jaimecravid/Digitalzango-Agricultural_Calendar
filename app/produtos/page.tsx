import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produtos - DigitalZango Agricultural Products',
  description: 'Informações sobre produtos agrícolas disponíveis em Angola',
};

export default function ProdutosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Produtos Agrícolas</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Informações dos Produtos</h2>
        <p className="text-gray-600 mb-4">
          Produtos agrícolas essenciais para melhorar a produtividade em Angola.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Categorias de Produtos:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Fertilizantes</li>
              <li>Defensivos</li>
              <li>Equipamentos Agrícolas</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Preço em Angola:</h3>
            <p className="text-lg font-bold text-green-600">Consultar disponibilidade</p>
          </div>
        </div>
      </div>
    </div>
  );
}
