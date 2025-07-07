"use client";

import React, { useState } from "react";
import { useWeatherData, useWeatherActions } from "../contexts/weather-context";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudSun,
  CloudFog,
  CloudDrizzle,
  CloudHail,
  CloudMoon,
} from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PROVINCE_CITY_MAP: { [province: string]: string } = {
  "Luanda": "Luanda",
  "Bengo": "Caxito",
  "Benguela": "Benguela",
  "Bié": "Kuito",
  "Cabinda": "Cabinda",
  "Cuando Cubango": "Menongue",
  "Cunene": "Ondjiva",
  "Huambo": "Huambo",
  "Huíla": "Lubango",
  "Kwanza Norte": "N'dalatando",
  "Kwanza Sul": "Sumbe",
  "Lunda Norte": "Dundo",
  "Lunda Sul": "Saurimo",
  "Malanje": "Malanje",
  "Moxico": "Luena",
  "Namibe": "Moçâmedes",
  "Uíge": "Uíge",
  "Zaire": "M'banza-Kongo"
};

const getWeatherIcon = (condition?: string) => {
  if (!condition) {
    return <Cloud className="h-10 w-10 text-gray-500" />;
  }
  const iconMap: { [key: string]: React.JSX.Element } = {
    clear: <Sun className="h-10 w-10 text-yellow-400" />,
    sunny: <Sun className="h-10 w-10 text-yellow-400" />,
    rain: <CloudRain className="h-10 w-10 text-blue-400" />,
    drizzle: <CloudDrizzle className="h-10 w-10 text-blue-300" />,
    snow: <CloudSnow className="h-10 w-10 text-blue-200" />,
    thunderstorm: <CloudLightning className="h-10 w-10 text-yellow-600" />,
    fog: <CloudFog className="h-10 w-10 text-gray-400" />,
    mist: <CloudFog className="h-10 w-10 text-gray-400" />,
    haze: <CloudFog className="h-10 w-10 text-gray-400" />,
    clouds: <Cloud className="h-10 w-10 text-gray-400" />,
    "few clouds": <CloudSun className="h-10 w-10 text-yellow-300" />,
    "scattered clouds": <Cloud className="h-10 w-10 text-gray-300" />,
    "broken clouds": <Cloud className="h-10 w-10 text-gray-500" />,
    "overcast clouds": <Cloud className="h-10 w-10 text-gray-600" />,
    night: <CloudMoon className="h-10 w-10 text-blue-900" />,
    hail: <CloudHail className="h-10 w-10 text-blue-400" />,
  };
  return (
    iconMap[condition.toLowerCase()] ||
    iconMap[condition.toLowerCase().split(" ").pop() || ""] ||
    <Cloud className="h-10 w-10 text-gray-500" />
  );
};

// Helper for emoji icons above hourly chart
const getWeatherEmoji = (condition?: string) => {
  if (!condition) return "☁️";
  const map: { [key: string]: string } = {
    clear: "☀️",
    sunny: "☀️",
    rain: "🌧️",
    drizzle: "🌦️",
    snow: "❄️",
    thunderstorm: "⛈️",
    fog: "🌫️",
    mist: "🌫️",
    haze: "🌫️",
    clouds: "☁️",
    "few clouds": "🌤️",
    "scattered clouds": "⛅",
    "broken clouds": "🌥️",
    "overcast clouds": "☁️",
    night: "🌙",
    hail: "🌨️",
  };
  return (
    map[condition.toLowerCase()] ||
    map[condition.toLowerCase().split(" ").pop() || ""] ||
    "☁️"
  );
};

// Memoized Weather Widget for better performance
const WeatherWidget: React.FC = React.memo(() => {
  const [selectedProvince, setSelectedProvince] = useState("Luanda");
  
  // Use optimized context hooks
  const { currentWeather, forecast, hourlyForecast, isLoading, error } = useWeatherData();
  const { fetchWeatherByLocation } = useWeatherActions();

  const handleProvinceChange = React.useCallback((province: string) => {
    setSelectedProvince(province);
    const city = PROVINCE_CITY_MAP[province];
    if (city) fetchWeatherByLocation(city);
  }, [fetchWeatherByLocation]);

  // Memoize chart data to prevent recreation
  const chartData = React.useMemo(() => ({
    labels: forecast.map(day =>
      new Date(day.date).toLocaleDateString("pt-PT", { day: "2-digit", month: "short" })
    ),
    datasets: [
      {
        label: "Temperatura (°C)",
        data: forecast.map(day => day.temperature),
        borderColor: "#16a34a",
        backgroundColor: "rgba(22,163,74,0.2)",
        tension: 0.3,
      },
    ],
  }), [forecast]);

  const chartOptions = React.useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 4,
    plugins: {
      legend: { display: false },
    },
  }), []);

  // Memoize hourly chart data
  const hourlyChartData = React.useMemo(() => ({
    labels: hourlyForecast.map(hour => hour.time),
    datasets: [
      {
        label: "Temperatura (°C)",
        data: hourlyForecast.map(hour => hour.temperature),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.3,
      },
    ],
  }), [hourlyForecast]);

  // Chart.js plugin for weather icons above hourly points
  const iconPlugin = React.useMemo(() => ({
    id: "weatherIcons",
    afterDatasetsDraw: (chart: any) => {
      const { ctx, data, chartArea } = chart;
      if (!chartArea) return;
      ctx.save();

      // Only run for the hourly chart
      if (data.labels.length !== hourlyForecast.length) return;

      chart.getDatasetMeta(0).data.forEach((datapoint: any, index: number) => {
        const icon = getWeatherEmoji(hourlyForecast[index]?.description);
        ctx.font = "24px serif";
        ctx.textAlign = "center";
        ctx.fillText(
          icon,
          datapoint.x,
          datapoint.y - 30 // Adjust vertical position above the point
        );
      });
      ctx.restore();
    },
  }), [hourlyForecast]);

  const hourlyChartOptions = React.useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 4,
    plugins: {
      legend: { display: false },
      weatherIcons: {},
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 6,
        },
      },
    },
  }), []);

  return (
    <div className="p-6 rounded shadow bg-gradient-to-br from-green-50 to-blue-50 w-full max-w-screen-2xl mx-auto">
      <div className="mb-4">
        <label className="font-semibold">Província:</label>
        <select
          value={selectedProvince}
          onChange={(e) => handleProvinceChange(e.target.value)}
          className="ml-2 border rounded p-1"
        >
          {Object.keys(PROVINCE_CITY_MAP).map((province) => (
            <option key={province} value={province}>{province}</option>
          ))}
        </select>
      </div>
      {isLoading && <div>Carregando dados do tempo...</div>}
      {error && (
        <div className="p-4 text-red-600 bg-red-50 rounded">
          Erro ao obter dados meteorológicos: {error}
        </div>
      )}
      {!isLoading && !error && currentWeather && (
        <>
          <div className="flex items-center gap-4 mb-4">
            {getWeatherIcon(currentWeather.description)}
            <div>
              <div className="text-2xl font-bold">{currentWeather.temperature}<span>{'\u00B0'}C</span></div>
              <div className="capitalize">{currentWeather.description}</div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Previsão para os próximos dias:</div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {forecast.map((day, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 rounded-xl p-4 flex flex-col items-center shadow-lg border border-green-200 transition transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="text-xs font-semibold text-gray-500 mb-1">
                    {new Date(day.date).toLocaleDateString("pt-PT", { day: "2-digit", month: "short" })}
                  </span>
                  {getWeatherIcon(day.description)}
                  <span className="text-lg font-bold mt-2">{day.temperature}<span>{'\u00B0'}C</span></span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4" style={{ height: 120 }}>
            <Line data={chartData} options={chartOptions} height={45} />
          </div>
          {/* Hourly Temperature Chart with Icons */}
          <div className="mt-6" style={{ height: 120 }}>
            <h3 className="font-semibold mb-2">Previsão Horária</h3>
            <Line
              data={hourlyChartData}
              options={hourlyChartOptions}
              plugins={[iconPlugin]}
              height={45}
            />
          </div>
        </>
      )}
      {!isLoading && !error && !currentWeather && (
        <div className="p-4 text-gray-600 bg-gray-50 rounded">
          Dados meteorológicos indisponíveis no momento.
        </div>
      )}
    </div>
  );
});

// Add display name for better debugging
WeatherWidget.displayName = 'WeatherWidget';

export default WeatherWidget;
