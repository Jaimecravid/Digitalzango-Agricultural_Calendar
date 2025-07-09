import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ferramentas - DigitalZango Agricultural Products',
  description: 'Informações sobre ferramentas agrícolas disponíveis em Angola',
};

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ferramentas - Produtos Agrícolas</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Informações do Produto</h2>
        <p className="text-gray-600 mb-4">
          Ferramentas essenciais para melhorar a produtividade agrícola em Angola.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Tipos de Ferramentas:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Ferramentas manuais</li>
              <li>Ferramentas elétricas</li>
              <li>Equipamentos de irrigação</li>
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
