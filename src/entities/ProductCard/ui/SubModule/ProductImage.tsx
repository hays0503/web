"use client";
import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface ProductImageProps {
  image: string[];
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ image, alt }) => {
  return (
    <Box
      w="100%"
      h="180px"
      aspectRatio={1 / 1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{
        filter: "brightness(0.8)",
      }}
    >
      <Swiper
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        style={{ width: "100%", height: "100%" }}
      >
        {image.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`${alt} ${index + 1}`}
              boxSize="100%"
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductImage;
