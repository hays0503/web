"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductType } from "../../../type/Promo";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import { pagination } from "../pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
import Timer from "./SubModule/Timer";
import Slide from "./SubModule/Slide";


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
      <HStack justifyContent={"space-between"} w={"full"} p={3}>
        <Heading size="xl" fontWeight={600}>
          Товары дня
        </Heading>
        <Timer />
      </HStack>
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