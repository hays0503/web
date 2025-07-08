"use client";
import ProductCard, { ProductCardProps } from "@/entities/ProductCard/ui/ProductCard";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { useState } from "react";
import { SwiperNavigation } from "../SwiperNavigation/SwiperNavigation";
import { useSwiperNavigation } from "../SwiperNavigation/useSwiperNavigation";
import { pagination } from "@/widgets/PromoBlock/ui/SubModule/pagination";



const ProductGrid: React.FC<{products: ProductCardProps[]}> = ({products}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass>();
  const showButtons = useBreakpointValue({ base: false, md: true });

  const { prevRef, nextRef } = useSwiperNavigation(swiperInstance);

  return (
    <Box position="relative" w="full" overflow="visible">
      <SwiperNavigation
        prevRef={prevRef}
        nextRef={nextRef}
        isVisible={!!showButtons}
      />

      <Swiper
        pagination={pagination}
        grabCursor
        modules={[Navigation, Grid]}
        onSwiper={setSwiperInstance}
        slidesPerView={5}
        slidesPerGroup={2}
        speed={700}
        spaceBetween={16}
        grid={{ rows: 2, fill: "row" }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          0: { slidesPerView: 1, grid: { rows: 1 } },
          320: { slidesPerView: 1, grid: { rows: 1 } },
          480: { slidesPerView: 2, grid: { rows: 2 } },
          768: { slidesPerView: 3, grid: { rows: 2 } },
          1024: { slidesPerView: 4, grid: { rows: 2 } },
          1280: { slidesPerView: 5, grid: { rows: 2 } },
        }}
      >
        {[...products].map((product, idx) => (
          <SwiperSlide key={idx}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductGrid;