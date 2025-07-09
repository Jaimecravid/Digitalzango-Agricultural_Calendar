"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function CategoriaPage() {
  const params = useParams();
  const categoryId = params?.categoryId;

  // You can later fetch category data based on categoryId
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>
              Categoria: <span className="capitalize text-green-700">{categoryId}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Esta é uma página dinâmica para a categoria de pragas: <strong>{categoryId}</strong>.</p>
            <Link href="/pragas" className="text-green-600 hover:underline">← Voltar para Pragas</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
