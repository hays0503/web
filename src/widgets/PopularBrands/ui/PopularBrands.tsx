"use client";

import {
  Box,
  Heading,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Grid as SwiperGrid } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

interface Brand {
  name: string;
  logo: string;
  id: string;
}

const BRANDS: Brand[] = [
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
];

const ANIMATION_DURATION = 300;
const AUTOPLAY_DELAY = 4000;

const BrandCard = ({ brand, onClick }: { brand: Brand; onClick?: (b: Brand) => void }) => (
  <Box
    as="button"
    onClick={() => onClick?.(brand)}
    p={4}
    rounded="xl"
    bg="white"
    shadow="sm"
    transition="all 0.3s ease"
    _hover={{ shadow: "md", transform: "translateY(-2px)", borderColor: "blue.200" }}
    _focus={{ outline: "2px solid", outlineColor: "blue.500", outlineOffset: "2px" }}
    border="1px solid transparent"
    w="full"
    textAlign="center"
  >
    <Stack align="center" gap={2} h="16">
      <Text fontSize="2xl" role="img" aria-label={`Логотип ${brand.name}`}>
        {brand.logo}
      </Text>
      <Text fontSize="sm" fontWeight="semibold" color="gray.700" truncate>
        {brand.name}
      </Text>
    </Stack>
  </Box>
);

const BrandsBanner = ({
  onBrandClick,
  autoplay = true,
  showNavigation = true,
}: {
  onBrandClick?: (b: Brand) => void;
  autoplay?: boolean;
  showNavigation?: boolean;
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const navBtnStyle = {
    position: "absolute" as const,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    bg: "white",
    shadow: "lg",
    rounded: "full",
    sizes: "md",
    color: "gray.600",
    _hover: { bg: "gray.50", shadow: "xl" },
    _active: { transform: "translateY(-50%) scale(0.95)" },
    transition: `all ${ANIMATION_DURATION}ms ease`,
  };

  return (
    <Box w="full" py={6} px={{ base: 4, md: 8 }}>
      <Heading as="h2" size="lg" mb={6} color="gray.800">
        Популярные бренды
      </Heading>

      <Box position="relative">
        {showNavigation && !isMobile && (
          <>
            <IconButton
              aria-label="Назад"
              onClick={() => swiperRef.current?.slidePrev()}
              left="-50px"
              {...navBtnStyle}
            >
              <BiChevronLeft />
            </IconButton>
            <IconButton
              aria-label="Вперёд"
              onClick={() => swiperRef.current?.slideNext()}
              right="-50px"
              {...navBtnStyle}
            >
              <BiChevronRight />
            </IconButton>
          </>
        )}

        <Swiper
          modules={[SwiperGrid, Navigation, ...(autoplay ? [Autoplay] : [])]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={
            autoplay
              ? {
                  delay: AUTOPLAY_DELAY,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          loop
          grabCursor
          speed={ANIMATION_DURATION}
          breakpoints={{
            0: {
              slidesPerView: 2,
              grid: { rows: 2, fill: "row" },
              spaceBetween: 12,
            },
            480: {
              slidesPerView: 3,
              grid: { rows: 2, fill: "row" },
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4,
              grid: { rows: 2, fill: "row" },
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 5,
              grid: { rows: 2, fill: "row" },
              spaceBetween: 24,
            },
          }}
        >
          {BRANDS.map((brand) => (
            <SwiperSlide key={brand.id}>
              <BrandCard brand={brand} onClick={onBrandClick} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default BrandsBanner;
