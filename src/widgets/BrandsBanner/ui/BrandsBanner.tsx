"use client";

import {
  Box,
  Text,
  Image,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid as SwiperGrid } from "swiper/modules";
import React, { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { SwiperNavigation, useSwiperNavigation } from "@/shared/ui/SwiperNavigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { HeaderSCK } from "@/shared/ui";

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
    h={"100%"}
    minH={"150px"}
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
    <VStack align="center" justify={'stretch'} gap={2} h="16">
      <Image
        src={brand.imagePath}
        alt={`Логотип ${brand.name}`}
        h={"100%"}
        w={"100%"}
        objectFit="cover"
      />
      <Text fontSize="sm" fontWeight="semibold" color="gray.700" lineHeight={1} >
        {brand.name}
      </Text>
    </VStack>
  </Box>
);

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <VStack w="full" align={"flex-start"} gap={"10px"} bg={"rebeccapurple"}>
      <HeaderSCK>Популярные бренды</HeaderSCK>
      <Box position="relative" w="full" overflow="visible">
        {children}
      </Box>
    </VStack>
  );
};


const BrandsBanner = ({
  onBrandClick,
}: {
  onBrandClick?: (b: Brand) => void;
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const showButtons = useBreakpointValue({ base: false, md: true });

  const { prevRef, nextRef } = useSwiperNavigation(swiperInstance);
  const _brands = getBrandList();
  const brands = [..._brands, ..._brands];

  return (
    <Wrapper>
      <Box position="relative">
        {showButtons && (
          <SwiperNavigation
            prevRef={prevRef}
            nextRef={nextRef}
            isVisible={showButtons}
          />
        )}

        {/* === Mobile version === */}
        {isMobile ? (
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            grabCursor
            loop
            speed={300}
            slidesPerView={2.2}
            slidesPerGroup={2}
            spaceBetween={12}
          >
            {brands.map((brand, idx) => (
              <SwiperSlide key={`${idx}-${brand.id}`}>
                <BrandCard brand={brand} onClick={onBrandClick} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          /* === Desktop version === */
          <Swiper
            modules={[Navigation, SwiperGrid]}
            onSwiper={setSwiperInstance}
            grabCursor
            loop
            speed={300}
            slidesPerView={5}
            slidesPerGroup={5}
            grid={{ rows: 2, fill: "row" }}
            spaceBetween={16}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {brands.map((brand, idx) => (
              <SwiperSlide key={`${idx}-${brand.id}`}>
                <BrandCard brand={brand} onClick={onBrandClick} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>
    </Wrapper>
  );
};

export default BrandsBanner;
