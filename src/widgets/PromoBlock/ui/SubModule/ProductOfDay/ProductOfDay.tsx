"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductType } from "../../../type/Promo";
import { Flex, VStack } from "@chakra-ui/react";
import { pagination } from "../pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
import Timer from "./SubModule/Timer";
import Slide from "./SubModule/Slide";
import { HeaderSCK } from "@/shared/ui";


const ProductOfDay: React.FC<{ data: ProductType[] }> = ({ data }) => {
  return (
    <VStack
      bg={"WhiteAndBlack"}
      minW={"266px"}
      w={"full"}
      h={"full"}
      p={0}
      alignItems={"center"}
      justifyContent={"flex-start"}
    >
      <Flex
        wrap={"wrap"}
        justifyContent={{base:"space-between",smDown:"center"}}
        w={"full"}
        p={3}
        gap={"10px"}
        align={"center"}
      >
        <HeaderSCK>
          Товары дня
        </HeaderSCK>
        <Timer />
      </Flex>
      <Swiper
        modules={[Pagination]}
        pagination={pagination}
        spaceBetween={10}
        slidesPerView={1}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {data.map((product, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Slide product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  );
}

export default ProductOfDay;