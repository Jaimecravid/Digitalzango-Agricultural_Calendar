import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prensa - DigitalZango Agricultural Tools',
  description: 'Equipamento agrícola prensa disponível em Angola',
};

export default function PrensaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Prensa - Equipamento Agrícola</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Informações do Produto</h2>
        <p className="text-gray-600 mb-4">
          Equipamento para processamento agrícola em Angola.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Especificações:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Capacidade de prensagem</li>
              <li>Adequado para diversos produtos</li>
              <li>Construção robusta</li>
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
