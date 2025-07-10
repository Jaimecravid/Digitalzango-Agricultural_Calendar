"use client";

import { useState, useEffect, memo } from "react";

interface WeatherDisplayProps {
  region: {
    name: string;
    capital: string;
    lat: number;
    lon: number;
  };
}

export const WeatherDisplay = memo(function WeatherDisplay({ region }: WeatherDisplayProps) {
  const [weather, setWeather] = useState<{ temp: string; desc: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!region.lat || !region.lon) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/weather?lat=${region.lat}&lon=${region.lon}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || `Falha ao buscar dados (status: ${response.status}).`);
        }

        setWeather({
          temp: Math.round(data.temp).toString(),
          desc: data.description,
        });
      } catch (err: any) {
        console.error("WeatherDisplay Error:", err);
        setError(err.message || 'Não foi possível carregar os dados do tempo.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [region.lat, region.lon]);

  return (
    <div className="mb-4 flex items-center gap-4 p-3 bg-blue-50 rounded border border-blue-200 text-blue-900">
      <span className="font-semibold">Tempo em {region.capital}:</span>
      {loading && <span>Carregando...</span>}
      {error && <span className="text-red-600">{error}</span>}
      {weather && !loading && !error && (
        <>
          <span>{weather.temp}°C</span>
          <span className="capitalize">{weather.desc}</span>
        </>
      )}
    </div>
  );
});