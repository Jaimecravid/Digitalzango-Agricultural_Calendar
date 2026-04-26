'use client';

import { clsx } from 'clsx';

export interface MonthCrop {
  name: string;
  action: 'plantar' | 'colher' | 'manter';
  emoji: string;
}

export interface Season {
  label: 'Época Chuvosa' | 'Época Seca' | 'Transição';
  emoji: string;
  colorClass: string;
  borderClass: string;
}

export interface MonthCardProps {
  monthNumber: number;
  monthName: string;
  isCurrentMonth: boolean;
  season: Season;
  crops: MonthCrop[];
}

const actionConfig = {
  plantar: {
    label: 'Plantar',
    bgClass: 'bg-green-100 dark:bg-green-900/30',
    textClass: 'text-green-700 dark:text-green-400',
    borderClass: 'border-green-200 dark:border-green-800',
    iconBgClass: 'bg-green-500',
    iconEmoji: '🌱',
  },
  colher: {
    label: 'Colher',
    bgClass: 'bg-amber-100 dark:bg-amber-900/30',
    textClass: 'text-amber-700 dark:text-amber-400',
    borderClass: 'border-amber-200 dark:border-amber-800',
    iconBgClass: 'bg-amber-500',
    iconEmoji: '📦',
  },
  manter: {
    label: 'Manter',
    bgClass: 'bg-blue-100 dark:bg-blue-900/30',
    textClass: 'text-blue-700 dark:text-blue-400',
    borderClass: 'border-blue-200 dark:border-blue-800',
    iconBgClass: 'bg-blue-500',
    iconEmoji: '👀',
  },
};

export default function MonthCard({
  monthNumber,
  monthName,
  isCurrentMonth,
  season,
  crops,
}: MonthCardProps) {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const isCurrentlyThisMonth = currentMonth === monthNumber;

  return (
    <div
      className={clsx(
        'relative rounded-xl border p-4 transition-all duration-200',
        'hover:shadow-lg hover:scale-[1.02]',
        isCurrentlyThisMonth
          ? 'ring-2 ring-primary shadow-md'
          : 'hover:shadow-md',
        season.borderClass,
        'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm'
      )}
    >
      {isCurrentlyThisMonth && (
        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full shadow-sm">
          Agora
        </div>
      )}

      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-bold text-lg text-foreground">{monthName}</h3>
          <p className="text-xs text-muted-foreground">
            {isCurrentlyThisMonth ? 'Este mês' : ''}
          </p>
        </div>
        <div
          className={clsx(
            'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium',
            season.colorClass,
            'bg-opacity-20 dark:bg-opacity-30'
          )}
        >
          <span>{season.emoji}</span>
          <span className="text-xs">{season.label}</span>
        </div>
      </div>

      {crops.length === 0 ? (
        <div className="text-center py-4 text-muted-foreground text-sm">
          Sem actividades este mês
        </div>
      ) : (
        <ul className="space-y-2">
          {crops.map((crop, index) => {
            const config = actionConfig[crop.action];
            return (
              <li
                key={`${crop.name}-${index}`}
                className={clsx(
                  'flex items-center justify-between p-2 rounded-lg border',
                  config.bgClass,
                  config.borderClass
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{crop.emoji}</span>
                  <span className="font-medium text-sm text-foreground">
                    {crop.name}
                  </span>
                </div>
                <span
                  className={clsx(
                    'text-xs font-semibold px-2 py-0.5 rounded-full',
                    config.bgClass,
                    config.textClass
                  )}
                >
                  {config.iconEmoji} {config.label}
                </span>
              </li>
            );
          })}
        </ul>
      )}

      {crops.length > 0 && (
        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            {crops.filter((c) => c.action === 'plantar').length > 0 && (
              <span className="text-green-600 dark:text-green-400">
                • {crops.filter((c) => c.action === 'plantar').length} para plantar
              </span>
            )}
            {crops.filter((c) => c.action === 'colher').length > 0 && (
              <span className="ml-2 text-amber-600 dark:text-amber-400">
                • {crops.filter((c) => c.action === 'colher').length} para colher
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}