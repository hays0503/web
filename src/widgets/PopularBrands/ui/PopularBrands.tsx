"use client";

import {
  Box,
  Grid,
  Heading,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useCallback, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// Типизация для бренда
interface Brand {
  name: string;
  logo: string;
  id: string;
}

// Константы вынесены отдельно для лучшей читаемости
const BRAND_SLIDES: Brand[][] = [
  [
    { id: "biryusa", name: "бирюса", logo: "🏠" },
    { id: "shivaki", name: "SHIVAKI", logo: "🔥" },
    { id: "artel", name: "artel", logo: "📱" },
    { id: "thermex", name: "thermex", logo: "🌡️" },
    { id: "flama", name: "FLAMA", logo: "🔥" },
    { id: "ariston", name: "ARISTON", logo: "🏠" },
    { id: "edison", name: "EDISON", logo: "💡" },
    { id: "indesit", name: "indesit", logo: "🏠" },
    { id: "orion", name: "ORION", logo: "⭐" },
    { id: "redmond", name: "REDMOND", logo: "🔴" },
  ],
  [
    { id: "samsung", name: "Samsung", logo: "📱" },
    { id: "lg", name: "LG", logo: "📺" },
    { id: "bosch", name: "Bosch", logo: "🔧" },
    { id: "siemens", name: "Siemens", logo: "⚡" },
    { id: "whirlpool", name: "Whirlpool", logo: "🌊" },
    { id: "electrolux", name: "Electrolux", logo: "⚡" },
    { id: "haier", name: "Haier", logo: "🌟" },
    { id: "candy", name: "Candy", logo: "🍭" },
    { id: "beko", name: "Beko", logo: "🏠" },
    { id: "gorenje", name: "Gorenje", logo: "🔥" },
  ],
];

const ANIMATION_DURATION = 300;
const AUTOPLAY_DELAY = 4000;

interface BrandCardProps {
  brand: Brand;
  onClick?: (brand: Brand) => void;
}

const BrandCard = ({ brand, onClick }: BrandCardProps) => {
  const handleClick = useCallback(() => {
    onClick?.(brand);
  }, [brand, onClick]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  return (
    <Box
      bg="white"
      rounded="xl"
      p={4}
      shadow="sm"
      _hover={{ 
        shadow: "md", 
        transform: "translateY(-2px)",
        borderColor: "blue.200"
      }}
      _focus={{
        outline: "2px solid",
        outlineColor: "blue.500",
        outlineOffset: "2px"
      }}
      transition={`all ${ANIMATION_DURATION}ms ease`}
      cursor="pointer"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Бренд ${brand.name}`}
      border="1px solid"
      borderColor="transparent"
    >
      <Stack align="center" justify="center" h="16" gap={2}>
        <Text 
          fontSize="2xl" 
          transition={`transform ${ANIMATION_DURATION}ms ease`}
          _groupHover={{ transform: "scale(1.1)" }}
          role="img"
          aria-label={`Логотип ${brand.name}`}
        >
          {brand.logo}
        </Text>
        <Text 
          fontSize="sm" 
          fontWeight="semibold" 
          textAlign="center" 
          color="gray.700"
          lineHeight="short"
          truncate
        >
          {brand.name}
        </Text>
      </Stack>
    </Box>
  );
};

interface BrandsBannerProps {
  onBrandClick?: (brand: Brand) => void;
  autoplay?: boolean;
  showNavigation?: boolean;
}

const BrandsBanner = ({ 
  onBrandClick, 
  autoplay = true,
  showNavigation = true 
}: BrandsBannerProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  
  // Адаптивные значения
  const isMobile = useBreakpointValue({ base: true, md: false });
  const gridColumns = useBreakpointValue({ base: 3, sm: 4, md: 5 });
  const spaceBetween = useBreakpointValue({ base: 16, md: 32 });
  const showDesktopNavigation = showNavigation && !isMobile;

  const handlePrevious = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const handleSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  const renderBrandGrid = useCallback((brands: Brand[], startIndex: number = 0) => {
    const itemsPerRow = gridColumns || 5;
    const rows = [];
    
    for (let i = 0; i < brands.length; i += itemsPerRow) {
      const rowBrands = brands.slice(i, i + itemsPerRow);
      rows.push(
        <Grid 
          key={`row-${startIndex}-${i}`}
          templateColumns={`repeat(${Math.min(rowBrands.length, itemsPerRow)}, 1fr)`} 
          gap={4} 
          mb={i + itemsPerRow < brands.length ? 4 : 0}
        >
          {rowBrands.map((brand) => (
            <BrandCard 
              key={brand.id} 
              brand={brand} 
              onClick={onBrandClick}
            />
          ))}
        </Grid>
      );
    }
    return rows;
  }, [gridColumns, onBrandClick]);

  return (
    <Box w="full" py={6} px={{ base: 4, md: 8 }}>
      <Heading as="h2" size="lg" textAlign="start" mb={6} color="gray.800">
        Популярные бренды
      </Heading>

      {/* Контейнер с отступами для кнопок навигации */}
      <Box px={showDesktopNavigation ? "20px" : "0"}>
        <Box position="relative" role="region" aria-label="Слайдер брендов">
          {/* Кнопки навигации */}
          {showDesktopNavigation && (
            <>
              <IconButton
                aria-label="Предыдущий слайд"
                onClick={handlePrevious}
                position="absolute"
                top="50%"
                left="-50px"
                transform="translateY(-50%)"
                zIndex={10}
                color={"gray.600"}
                bg="white"
                shadow="lg"
                rounded="full"
                size="md"
                _hover={{ bg: "gray.50", shadow: "xl" }}
                _active={{ transform: "translateY(-50%) scale(0.95)" }}
                transition={`all ${ANIMATION_DURATION}ms ease`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconButton>
              <IconButton
                aria-label="Следующий слайд"
                onClick={handleNext}
                position="absolute"
                top="50%"
                color={"gray.600"}
                right="-50px"
                transform="translateY(-50%)"
                zIndex={10}
                bg="white"
                shadow="lg"
                rounded="full"
                size="md"
                _hover={{ bg: "gray.50", shadow: "xl" }}
                _active={{ transform: "translateY(-50%) scale(0.95)" }}
                transition={`all ${ANIMATION_DURATION}ms ease`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconButton>
            </>
          )}

          {/* Swiper слайдер */}
          <Swiper
            modules={[Navigation, ...(autoplay ? [Autoplay] : [])]}
            onSwiper={handleSwiperInit}
            navigation={false} // Отключаем встроенную навигацию Swiper
            pagination={false} // Отключаем пагинацию
            autoplay={
              autoplay
                ? {
                    delay: AUTOPLAY_DELAY,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            loop={BRAND_SLIDES.length > 1}
            spaceBetween={spaceBetween}
            speed={ANIMATION_DURATION}
            grabCursor
            style={{
              borderRadius: "1rem",
              padding: "1.5rem",
            }}
            className="brands-swiper"
          >
            {BRAND_SLIDES.map((slide, index) => (
              <SwiperSlide key={`slide-${index}`}>
                <Box minH="40">{renderBrandGrid(slide, index)}</Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandsBanner;