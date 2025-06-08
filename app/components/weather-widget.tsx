import React, { useState } from "react";
import { useWeather } from "../contexts/weather-context";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning } from "lucide-react";

// Province to city mapping
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
    return <Cloud className="h-8 w-8 text-gray-500" />;
  }
  const iconMap: { [key: string]: JSX.Element } = {
    clear: <Sun className="h-8 w-8 text-yellow-400" />,
    rain: <CloudRain className="h-8 w-8 text-blue-400" />,
    snow: <CloudSnow className="h-8 w-8 text-blue-200" />,
    thunderstorm: <CloudLightning className="h-8 w-8 text-yellow-400" />,
    fog: <Cloud className="h-8 w-8 text-gray-400" />,
    clouds: <Cloud className="h-8 w-8 text-gray-400" />,
    // Add more mappings as needed
  };
  return iconMap[condition.toLowerCase()] || <Cloud className="h-8 w-8 text-gray-500" />;
};

const WeatherWidget: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState("Luanda");
  const { currentWeather, forecast, isLoading, error, fetchWeatherByLocation } = useWeather();

  const handleProvinceChange = (province: string) => {
    setSelectedProvince(province);
    const city = PROVINCE_CITY_MAP[province];
    if (city) fetchWeatherByLocation(city);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
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
              <div className="text-2xl font-bold">{currentWeather.temperature}°C</div>
              <div className="capitalize">{currentWeather.description}</div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Previsão para os próximos dias:</div>
            <div className="flex gap-4">
              {forecast.map((day, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-sm">
                    {new Date(day.date).toLocaleDateString("pt-PT", { day: "2-digit", month: "short" })}
                  </span>
                  {getWeatherIcon(day.description)}
                  <span className="text-lg">{day.temperature}°C</span>
                </div>
              ))}
            </div>
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
};

export default WeatherWidget;