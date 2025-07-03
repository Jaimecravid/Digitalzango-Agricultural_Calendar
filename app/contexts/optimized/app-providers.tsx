'use client';

import React from 'react';
import { AgriculturalProvider } from './agricultural-context';
import { OptimizedWeatherProvider } from './weather-context';
import { LanguageProvider } from '../language-context';
import { RegionProvider } from '../region-context';

// Compose all providers in optimal order
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <RegionProvider>
        <OptimizedWeatherProvider>
          <AgriculturalProvider>
            {children}
          </AgriculturalProvider>
        </OptimizedWeatherProvider>
      </RegionProvider>
    </LanguageProvider>
  );
}
