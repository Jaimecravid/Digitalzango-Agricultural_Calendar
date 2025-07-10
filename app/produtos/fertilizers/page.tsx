import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fertilizantes - DigitalZango Agricultural Products',
  description: 'Informações sobre fertilizantes agrícolas disponíveis em Angola',
};

export default function FertilizersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fertilizantes - Produtos Agrícolas</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Informações do Produto</h2>
        <p className="text-gray-600 mb-4">
          Fertilizantes essenciais para melhorar a produtividade agrícola em Angola.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Tipos de Fertilizantes:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Fertilizantes nitrogenados</li>
              <li>Fertilizantes fosfatados</li>
              <li>Fertilizantes potássicos</li>
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
