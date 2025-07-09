import { useState, useEffect } from 'react';

/**
 * Custom hook to detect mobile devices
 * Optimized for DigitalZango Agricultural Calendar
 * Supports rural connectivity and various mobile devices used in Angola
 */
export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // Check window width
      const windowWidth = window.innerWidth;
      
      // Check user agent for mobile devices common in Angola
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = [
        'mobile', 'android', 'iphone', 'ipad', 'tablet',
        'samsung', 'huawei', 'xiaomi', 'oppo', 'vivo'
      ];
      
      const isMobileUserAgent = mobileKeywords.some(keyword => 
        userAgent.includes(keyword)
      );
      
      // Check for touch capability (important for rural users)
      const isTouchDevice = 'ontouchstart' in window || 
        navigator.maxTouchPoints > 0;
      
      // Combine checks for comprehensive mobile detection
      const mobile = windowWidth < breakpoint || isMobileUserAgent || 
        (isTouchDevice && windowWidth < 1024);
      
      setIsMobile(mobile);
    };

    // Initial check
    checkIsMobile();

    // Listen for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Listen for orientation change (important for mobile farming apps)
    window.addEventListener('orientationchange', checkIsMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('orientationchange', checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
}

// Alternative hook for server-side rendering compatibility
export function useIsMobileSSR(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    }
  }, []);

  return isMobile;
}

// Hook for detecting specific mobile breakpoints
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<string>('desktop');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width < 480) {
        setBreakpoint('mobile');
      } else if (width < 768) {
        setBreakpoint('tablet');
      } else if (width < 1024) {
        setBreakpoint('laptop');
      } else {
        setBreakpoint('desktop');
      }
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
}
