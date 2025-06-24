"use client";

import { Box, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import Image from "next/image";
import { LinkSCK } from "@/shared/ui";

interface TabsCategoryType {
  readonly img: string;
  readonly text: string;
  readonly url: string;
}

const TabsCategoryData: TabsCategoryType[] = [
  {
    img: "/promo/promoSlide6.webp",
    text: "Бытовая техника",
    url: "/category/бытовая-техника",
  },
  {
    img: "/promo/promoSlide6.webp",
    text: "Товары для дома и дачи",
    url: "/category/товары-для-дома-и-дачи",
  },
  {
    img: "/promo/promoSlide6.webp",
    text: "Мебель",
    url: "/category/мебель",
  },
  {
    img: "/promo/promoSlide6.webp",
    text: "Красота и здоровье",
    url: "/category/красота-и-здоровье",
  },
  {
    img: "/promo/promoSlide6.webp",
    text: "Телевизоры",
    url: "/category/телевизоры",
  },
];

const TabsCategory = () => {

  return (
    <Box w="full" px={4} py={6} bg="gray.100">
      <Box w="full">
        <Swiper          
          slidesPerView="auto"
          spaceBetween={`10%`}
          freeMode
          modules={[FreeMode]}
          style={{ width: "100%"}} // растягивает Swiper
        >
          {TabsCategoryData.map((item) => (
            <SwiperSlide
              key={item.url}
              style={{
                width: "200px",
                flexShrink: 0,
              }}
            >
              <LinkSCK href={item.url}>
                <Box textAlign="center" w={"100%"} h={"100%"}>
                  <Box
                    w="100%"
                    aspectRatio={1}
                    minW="180px"
                    minH="180px"
                    bg="white"
                    borderRadius="2xl"
                    overflow="hidden"
                    position="relative"
                  >
                    <Image
                      src={item.img}
                      alt={item.text}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Heading size="2xl" mt={2} fontSize="sm">
                    {item.text}
                  </Heading>
                </Box>
              </LinkSCK>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default TabsCategory;