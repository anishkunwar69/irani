'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type OptimizedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  quality?: number;
  sizes?: string;
  style?: React.CSSProperties;
  blurDataURL?: string;
};

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  style,
  blurDataURL,
  placeholder = 'empty',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  // Generate a very small blur placeholder if one isn't provided
  const defaultBlurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIj48c3RvcCBzdG9wLWNvbG9yPSIjMjAyIiBvZmZzZXQ9IjIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIG9mZnNldD0iNTAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzIwMiIgb2Zmc2V0PSI4MCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiMxQjREMkUiLz48cmVjdCBpZD0iciIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii00MCIgdG89IjQwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+PC9zdmc+';

  // Style for the background placeholder
  const bgStyle = {
    ...style,
    backgroundColor: '#1B4D2E',
    filter: 'blur(20px)',
    transform: 'scale(1.1)',
    zIndex: -1,
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ position: 'relative' }}>
      {(priority || inView) && (
        <>
          {placeholder === 'blur' && !isLoaded && (
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={bgStyle}
            />
          )}
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
            priority={priority}
            quality={quality}
            sizes={sizes}
            style={style}
            loading={priority ? 'eager' : 'lazy'}
            blurDataURL={blurDataURL || defaultBlurDataURL}
            placeholder={placeholder}
          />
        </>
      )}
    </div>
  );
} 