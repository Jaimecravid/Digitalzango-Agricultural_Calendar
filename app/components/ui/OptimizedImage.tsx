import Image from 'next/image'
import { useState } from 'react'

// Define the properties our OptimizedImage component will accept
interface OptimizedImageProps {
  src: string           // The image URL or path
  alt: string          // Alt text for accessibility and SEO
  width: number        // Image width in pixels
  height: number       // Image height in pixels
  className?: string   // Optional CSS classes for styling
  priority?: boolean   // Load image immediately (for above-the-fold images)
  placeholder?: boolean // Show loading animation while image loads
  quality?: number     // Image quality (1-100, default is 75)
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false,
  placeholder = true,
  quality = 75
}: OptimizedImageProps) {
  // State to track image loading and error status
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Main Next.js Image component with optimization */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        className={`transition-all duration-300 ${
          isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        } ${hasError ? 'opacity-50' : ''}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
        placeholder={placeholder ? "blur" : "empty"}
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      
      {/* Loading placeholder animation */}
      {isLoading && placeholder && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse" />
        </div>
      )}
      
      {/* Error state display */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center">
          <div className="text-gray-400 text-2xl mb-2">📷</div>
          <span className="text-gray-400 text-sm text-center px-2">
            Imagem não disponível
          </span>
        </div>
      )}
    </div>
  )
}

// Export the interface for use in other components
export type { OptimizedImageProps }
