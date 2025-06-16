"use client";
import { useEffect, useState } from 'react';
import { useLanguage } from "../contexts/language-context";

function UserCounter() {
  const { t } = useLanguage();
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    let start = 0;
    const end = 1000; // Target number
    const duration = 2000; // 2 seconds animation
    const increment = end / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-green-50 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-green-600">
              {count}+
            </div>
            <div className="text-gray-600 mt-2">{t("farmersJoined")}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-green-600">
              50+
            </div>
            <div className="text-gray-600 mt-2">{t("successStories")}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-green-600">
              95%
            </div>
            <div className="text-gray-600 mt-2">{t("satisfactionRate")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCounter;
