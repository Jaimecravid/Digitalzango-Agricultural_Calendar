'use client';

import React, { createContext, useContext, useMemo, useCallback, useState } from 'react';
import { Crop } from '@/lib/types/agriculture';

// Split into focused contexts instead of one large context
interface AgriculturalState {
  selectedCrop: Crop | null;
  favoriteTools: string[];
  userPreferences: {
    units: 'metric' | 'imperial';
    currency: 'AOA' | 'USD';
    notifications: boolean;
  };
}

interface AgriculturalActions {
  selectCrop: (crop: Crop) => void;
  addFavoriteTool: (toolId: string) => void;
  removeFavoriteTool: (toolId: string) => void;
  updatePreferences: (prefs: Partial<AgriculturalState['userPreferences']>) => void;
}

// Separate contexts for different concerns
const AgriculturalStateContext = createContext<AgriculturalState | null>(null);
const AgriculturalActionsContext = createContext<AgriculturalActions | null>(null);

export function AgriculturalProvider({ children }: { children: React.ReactNode }) {
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const [favoriteTools, setFavoriteTools] = useState<string[]>([]);
  const [userPreferences, setUserPreferences] = useState<AgriculturalState['userPreferences']>({
    units: 'metric',
    currency: 'AOA',
    notifications: true
  });

  // Memoize state object to prevent unnecessary re-renders
  const state = useMemo((): AgriculturalState => ({
    selectedCrop,
    favoriteTools,
    userPreferences
  }), [selectedCrop, favoriteTools, userPreferences]);

  // Memoize actions to prevent function recreation
  const actions = useMemo((): AgriculturalActions => ({
    selectCrop: useCallback((crop: Crop) => {
      setSelectedCrop(crop);
    }, []),
    
    addFavoriteTool: useCallback((toolId: string) => {
      setFavoriteTools(prev => prev.includes(toolId) ? prev : [...prev, toolId]);
    }, []),
    
    removeFavoriteTool: useCallback((toolId: string) => {
      setFavoriteTools(prev => prev.filter(id => id !== toolId));
    }, []),
    
    updatePreferences: useCallback((prefs: Partial<AgriculturalState['userPreferences']>) => {
      setUserPreferences(prev => ({ ...prev, ...prefs }));
    }, [])
  }), []);

  return (
    <AgriculturalStateContext.Provider value={state}>
      <AgriculturalActionsContext.Provider value={actions}>
        {children}
      </AgriculturalActionsContext.Provider>
    </AgriculturalStateContext.Provider>
  );
}

// Custom hooks for consuming context
export function useAgriculturalState() {
  const context = useContext(AgriculturalStateContext);
  if (!context) {
    throw new Error('useAgriculturalState must be used within AgriculturalProvider');
  }
  return context;
}

export function useAgriculturalActions() {
  const context = useContext(AgriculturalActionsContext);
  if (!context) {
    throw new Error('useAgriculturalActions must be used within AgriculturalProvider');
  }
  return context;
}
