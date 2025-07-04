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
  {desktop:"/promo/promoSlide7.webp", mobile:"/promo/promoSlide7-mobile1.webp"},
  {desktop:"/promo/promoSlide7.webp", mobile:"/promo/promoSlide7-mobile1.webp"},
  {desktop:"/promo/promoSlide7.webp", mobile:"/promo/promoSlide7-mobile1.webp"},
];

export default function SimpleBanner() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass>();
  const showButtons = useBreakpointValue({ base: false, md: true });

  const { prevRef, nextRef } = useSwiperNavigation(swiperInstance);

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box position="relative" w="full" overflow="clip" rounded={"2xl"}>
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
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}

      >
        {banners.map((src:{desktop:string,mobile:string}, idx) => (
          <SwiperSlide
            key={idx}
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            <Image
              src={isMobile?src.mobile:src.desktop}
              alt={`Slide ${idx + 1}`}

            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
