'use client';

;

// Example resource data (replace or expand as needed)
const resources = [
  {
    type: "resources.seeds",
    title: "Sementes de Milho Híbrido",
    status: "resources.available",
    amount: "50 kg",
    cost: "15,000 Kz",
    supplier: "AgroSementes Lda",
    purchaseDate: "15/01/2024",
    expiry: "31/12/2024",
    description: "resources.drought_resistant",
  },
  {
    type: "resources.fertilizer",
    title: "NPK 20-10-10",
    status: "resources.low",
    amount: "5 sacos 50kg",
    cost: "8,000 Kz",
    supplier: "FertiAngola",
    purchaseDate: "01/02/2024",
    description: "resources.initial_application",
  },
  {
    type: "resources.equipment",
    title: "Tractor John Deere",
    status: "resources.available",
    amount: "1 unidade",
    cost: "2,500,000 Kz",
    supplier: "Máquinas Agrícolas SA",
    purchaseDate: "15/06/2023",
    description: "resources.maintenance_ok",
  },
];

export default function RecursosPage() {


  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-2">Gestão de Recursos</h1>
        <p className="mb-6">Acesse recursos úteis para agricultores.</p>
        {/* Example stock warning */}
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded mb-6">
          <strong>Estoque Baixo</strong>
          <div>Estoque baixo: <span className="font-bold">NPK 20-10-10</span></div>
        </div>
        {/* Resource cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((res, idx) => (
            <div key={idx} className="bg-white border rounded-lg p-4 shadow">
              <h2 className="text-xl font-semibold mb-2">{res.title}</h2>
              <div className="mb-2 text-sm text-gray-500">{res.type === "resources.seeds" ? "Sementes" : res.type === "resources.fertilizer" ? "Fertilizantes" : "Equipamentos"}</div>
              <div className="mb-2">
                <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${res.status === "resources.available" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                  {res.status === "resources.available" ? "Disponível" : "Baixo"}
                </span>
              </div>
              <div className="mb-1">Quantidade: {res.amount}</div>
              <div className="mb-1">Custo: {res.cost}</div>
              <div className="mb-1">Fornecedor: {res.supplier}</div>
              <div className="mb-1">Data de Compra: {res.purchaseDate}</div>
              {res.expiry && <div className="mb-1">Validade: <span className="text-red-600">{res.expiry}</span></div>}
              <div className="mb-1">{res.description === "resources.drought_resistant" ? "Resistente à seca" : res.description === "resources.initial_application" ? "Aplicação inicial" : "Manutenção OK"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
