"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';

// Типы для слайдов
interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content?: string;
  bgColor?: string;
  textColor?: string;
}

interface BannerProps {
  slides?: Slide[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
  height?: string;
  spaceBetween?: number;
  className?: string;
}

// Дефолтные слайды
const defaultSlides: Slide[] = [
  {
    id: 1,
    title: "Товары для сада",
    subtitle: "Летние скидки на инструменты",
    bgColor: "linear-gradient(135deg, #4ADE80 0%, #22C55E 100%)",
    textColor: "#ffffff"
  },
  {
    id: 2,
    title: "Садовое оборудование", 
    subtitle: "Профессиональные инструменты",
    bgColor: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    textColor: "#ffffff"
  },
  {
    id: 3,
    title: "Весенняя коллекция",
    subtitle: "Все для вашего сада",
    bgColor: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    textColor: "#ffffff"
  },
  {
    id: 4,
    title: "Специальные предложения",
    subtitle: "Ограниченное время",
    bgColor: "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)",
    textColor: "#ffffff"
  }
];

const Banner: React.FC<BannerProps> = ({
  slides = defaultSlides,
  autoPlay = true,
  autoPlayDelay = 5000,
  showPagination = true,
  showNavigation = true,
  height = "300px",
  className = ""
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Функция перехода к следующему слайду
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, slides.length]);

  // Функция перехода к предыдущему слайду
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, slides.length]);

  // Функция перехода к конкретному слайду
  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide || index < 0 || index >= slides.length) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, currentSlide, slides.length]);

  // Автопроигрывание
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    autoPlayRef.current = setInterval(nextSlide, autoPlayDelay);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, autoPlayDelay, isPaused, nextSlide]);

  // Обработка свайпов
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Обработка клавиатуры
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Стили
  const containerStyles: React.CSSProperties = {
    width: "100%",
    height,
    borderRadius: "12px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    cursor: "grab"
  };

  const slidesContainerStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden"
  };

  const slideStyles = (index: number): React.CSSProperties => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: slides[index]?.bgColor || "#f3f4f6",
    color: slides[index]?.textColor || "#1f2937",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px",
    boxSizing: "border-box",
    transform: `translateX(${(index - currentSlide) * 100}%)`,
    transition: isTransitioning ? "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
    textAlign: "center"
  });

  const navigationButtonStyles = (direction: 'prev' | 'next'): React.CSSProperties => ({
    position: "absolute",
    top: "50%",
    [direction === 'prev' ? 'left' : 'right']: "16px",
    transform: "translateY(-50%)",
    width: "44px",
    height: "44px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "none",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
    zIndex: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
  });

  const paginationStyles: React.CSSProperties = {
    position: "absolute",
    bottom: "16px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",
    zIndex: 10
  };

  const bulletStyles = (isActive: boolean): React.CSSProperties => ({
    width: "40px",
    height: "10px",
    borderRadius: "4px",
    backgroundColor: isActive ? "#8B5CF6" : "rgba(255, 255, 255, 0.5)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "none",
    outline: "none"
  });

  return (
    <div 
      className={className}
      style={containerStyles}
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Слайды */}
      <div style={slidesContainerStyles}>
        {slides.map((slide, index) => (
          <div key={slide.id} style={slideStyles(index)}>
            <h2 style={{
              fontSize: "2rem",
              fontWeight: "700",
              margin: "0 0 12px 0",
              lineHeight: "1.2",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              {slide.title}
            </h2>
            
            {slide.subtitle && (
              <p style={{
                fontSize: "1.125rem",
                margin: "0 0 16px 0",
                opacity: 0.9,
                lineHeight: "1.4"
              }}>
                {slide.subtitle}
              </p>
            )}
            
            {slide.content && (
              <p style={{
                fontSize: "1rem",
                margin: 0,
                opacity: 0.8,
                maxWidth: "600px",
                lineHeight: "1.6"
              }}>
                {slide.content}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Навигационные кнопки */}
      {showNavigation && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            style={navigationButtonStyles('prev')}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 1)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
            aria-label="Предыдущий слайд"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            style={navigationButtonStyles('next')}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 1)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
            aria-label="Следующий слайд"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      )}

      {/* Пагинация */}
      {showPagination && slides.length > 1 && (
        <div style={paginationStyles}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={bulletStyles(index === currentSlide)}
              onMouseEnter={(e) => {
                if (index !== currentSlide) {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentSlide) {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                }
              }}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Индикатор загрузки/паузы */}
      {autoPlay && (
        <div style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: isPaused ? "#EF4444" : "#10B981",
          opacity: 0.7,
          zIndex: 10
        }} />
      )}
    </div>
  );
};

export default Banner;