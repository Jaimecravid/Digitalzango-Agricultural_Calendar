'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('DigitalZango: Service Worker registered successfully:', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('DigitalZango: New content available, please refresh.');
                  // You can add a notification here for users to refresh
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('DigitalZango: Service Worker registration failed:', error);
        });
    } else {
      console.log('DigitalZango: Service Worker not supported in this browser');
    }
  }, []);

  return null; // This component doesn't render anything
}
