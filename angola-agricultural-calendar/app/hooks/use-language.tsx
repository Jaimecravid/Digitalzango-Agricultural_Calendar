"use client";

import React, { createContext, useContext, ReactNode } from 'react';

// Define the shape of the translation data
type Translations = {
  [key: string]: string;
};

// Define the context type
interface LanguageContextType {
  translations: Translations;
  t: (key: string) => string;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define the props for the provider component
interface LanguageProviderProps {
  children: ReactNode;
  translations: Translations;
}

/**
 * Provides translation data to its children components.
 */
export function LanguageProvider({ children, translations }: LanguageProviderProps) {
  
  /**
   * Translation function 't'.
   * Takes a key and returns the corresponding string from the translations object.
   */
  const t = (key: string): string => {
    return translations[key] || key;
  };

  const value: LanguageContextType = {
    translations,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Custom hook to use the language context.
 */
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
