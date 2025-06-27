"use client";

import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { SwiperNavigation, useSwiperNavigation } from "../SwiperNavigation";
import { pagination } from "@/widgets/PromoBlock/ui/SubModule/pagination";

const banners = [
  "/promo/promoSlide7.webp",
  "/promo/promoSlide7.webp",
  "/promo/promoSlide7.webp",
];

export default function SimpleBanner() {
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
        onSwiper={setSwiperInstance}
        modules={[Autoplay, Navigation, Pagination]}
        pagination={pagination}
        autoplay={{ delay: 93000 }}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {banners.map((src, idx) => (
          <SwiperSlide
            key={idx}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              style={{
                padding: "20px 0px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
