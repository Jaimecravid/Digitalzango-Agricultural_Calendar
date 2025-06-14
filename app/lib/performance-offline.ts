import { useState, useEffect } from 'react';

export const useNetworkStatus = () => {
  // Start with undefined or a default value that works on the server
  const [isOnline, setIsOnline] = useState(true);
  const [connectionType, setConnectionType] = useState('unknown');

  useEffect(() => {
    // This code only runs in the browser
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Detect connection type if available
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setConnectionType(connection.effectiveType || 'unknown');

      const updateConnectionType = () => {
        setConnectionType(connection.effectiveType || 'unknown');
      };
      connection.addEventListener('change', updateConnectionType);

      // Cleanup connection event
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        connection.removeEventListener('change', updateConnectionType);
      };
    }

    // Cleanup for browsers without navigator.connection
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline, connectionType };
};