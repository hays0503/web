"use client";

import {
  Box,
  Heading,
  Stack,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid as SwiperGrid, Autoplay } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { SwiperNavigation, useSwiperNavigation } from "@/shared/ui/SwiperNavigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

// --- Константы ---
const BRAND_IDS = [
  "ariston",
  "artel",
  "birysa",
  "edison",
  "flama",
  "indesit",
  "orion",
  "redmond",
  "shivaki",
  "thermex",
] as const;

type BrandId = (typeof BRAND_IDS)[number];

interface Brand {
  id: BrandId;
  name: string;
  imagePath: string;
}

const getBrandList = (): Brand[] =>
  BRAND_IDS.map((id) => ({
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1),
    imagePath: `/logo/${id}.webp`,
  }));

// --- Карточка бренда ---
const BrandCard = ({
  brand,
  onClick,
}: {
  brand: Brand;
  onClick?: (brand: Brand) => void;
}) => (
  <Box
    as="button"
    onClick={() => onClick?.(brand)}
    p={1}
    h={"125px"}
    rounded="xl"
    bg="white"
    _dark={{ bg: "gray.900" }}
    shadow="sm"
    transition="all 0.3s ease"
    _hover={{
      cursor: "pointer",
      transform: "scale(0.95)",
      filter: "brightness(0.9)",
    }}
    border="1px solid transparent"
    w="full"
    textAlign="center"
  >
    <Stack align="center" gap={2} h="16">
      <Image
        src={brand.imagePath}
        alt={`Логотип ${brand.name}`}
        maxH="40px"
        objectFit="contain"
      />
      <Text fontSize="sm" fontWeight="semibold" color="gray.700" lineHeight={1}>
        {brand.name}
      </Text>
    </Stack>
  </Box>
);

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box position="relative" w="full" overflow="visible" my={-5}>
      <Heading as="h2" size="lg" color="gray.800" mb={
        3
      }>
        Популярные бренды
      </Heading>
      {children}
    </Box>
  );
};

const isAutoPlay = (autoplay: boolean) => {
  if (autoplay) {
    return {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    };
  }
  return false;
};

// --- Основной компонент ---
const BrandsBanner = ({
  onBrandClick,
  autoplay = true,
}: {
  onBrandClick?: (b: Brand) => void;
  autoplay?: boolean;
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>();
  const showButtons = useBreakpointValue({ base: false, md: true });

  const { prevRef, nextRef } = useSwiperNavigation(swiperInstance);
  const brands = getBrandList();

  return (
    <Wrapper>
      <Box position={"relative"}>
        <SwiperNavigation
          prevRef={prevRef}
          nextRef={nextRef}
          isVisible={!!showButtons}
        />

        <Swiper
          modules={[Navigation, SwiperGrid, ...(autoplay ? [Autoplay] : [])]}
          onSwiper={setSwiperInstance}
          loop
          grabCursor
          speed={300}
          autoplay={isAutoPlay(autoplay)}
          slidesPerView={5}
          slidesPerGroup={5}
          grid={{ rows: 2, fill: "row" }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          spaceBetween={16}
        >
          {[...brands, ...brands].map((brand, idx) => (
            <SwiperSlide key={`${idx}-${brand.id}`}>
              <BrandCard brand={brand} onClick={onBrandClick} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Wrapper>
  );
};

export default BrandsBanner;
