"use client";

import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import Category, { TabsCategoryType } from "./SubModule/Category";

const TabsCategoryData: TabsCategoryType[] = [
  {
    img: "/promo/promoSlide6.webp",
    text: "Бытовая техника",
    url: "/category/бытовая-техника",
  },
  {
    img: "/promo/promoSlide9.webp",
    text: "Товары для дома и дачи",
    url: "/category/товары-для-дома-и-дачи",
  },
  {
    img: "/promo/promoSlide10.webp",
    text: "Мебель",
    url: "/category/мебель",
  },
  {
    img: "/promo/promoSlide11.webp",
    text: "Красота и здоровье",
    url: "/category/красота-и-здоровье",
  },
  {
    img: "/promo/promoSlide12.webp",
    text: "Телевизоры",
    url: "/category/телевизоры",
  },
];

const TabsCategory: React.FC = () => {

  return (
    <Box w="full" px={1} py={6} bg="gray.100" _dark={{ bg: "gray.800" }}>
      <Box w="full">
        <Swiper          
          slidesPerView="auto"
          spaceBetween={`4%`}
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
              <Category item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default TabsCategory;