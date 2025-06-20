"use client";
import { Box, Flex } from '@chakra-ui/react';
import { css, Global } from '@emotion/react'
import { ProductType, SlideType } from '../type/Promo';
import {Promo,ProductOfDay} from './SubModule';
import { bulletActiveStyle, bulletStyle } from './SubModule/pagination';
import "swiper/css";
import 'swiper/css/pagination';

const SlideData: SlideType[] = [
  {
    title: "Welcome to Our Platform",
    description:
      "Discover amazing features and services tailored just for you.",
    image: "/promo/promoSlide1.png",
  },
  {
    title: "Welcome to Our Platform 2",
    description:
      "Discover amazing features and services tailored just for you. 2",
    image: "/promo/promoSlide1.png",
  },
];


const ProductOfDayData: ProductType[] = [
  {
    id: 1,
    name: "Product 1",
    discount: "20%",
    price: "71 139",
    discountPrice: "85 366",
    image: "/promo/promoSlide2.webp",
    rating: 4.5,
    delivered: {
      days: "next day",
      pays: "free",
      selfPickup: false,
    },
  },
  {
    id: 2,
    name: "Product 2",
    discount: "20%",
    price: "171 139",
    discountPrice: "185 366",
    image: "/promo/promoSlide2.webp",
    rating: 4.1,
    delivered: {
      days: "next day",
      pays: "free",
      selfPickup: false,
    },
  },
];

const PromoBlock: React.FC = () => {
  return (
    <>
      <Global
        styles={css`
          .custom-bullet {
            ${bulletStyle.styles};
          }
          .swiper-pagination-bullet-active.custom-bullet {
            ${bulletActiveStyle.styles};
          }
        `}
      />
      <Flex w={"100%"} minH={"420px"} p={"10px"} justify={"center"}>
        <Flex
          w={"100%"}
          h={"full"}
          gap={"1%"}
          wrap={'wrap'}
          alignItems="stretch"
          justifyContent="space-between"
          // direction={{
          //   smDown: "column",
          //   sm: "column",
          //   smToMd: "column",
          //   md: "column",
          //   mdToLg: "column",
          //   lg: "column",
          //   lgToXl: "column",
          //   xl: "row",
          //   xlTo2xl: "row",
          //   "2xl": "row",
          // }}
        >
          <Box
            border={"1px solid var(--chakra-colors--motif)"}
            w={{
              smDown: "100%",
              sm: "100%",
              smToMd: "100%",
              md: "100%",
              mdToLg: "100%",
              lg: "100%",
              lgToXl: "54%",
              xl: "54%",
              xlTo2xl: "54%",
              "2xl": "54%",
            }}
            // h={"full"}
            rounded={"2xl"}
            overflow={"clip"}
          >
            <Promo data={SlideData} />
          </Box>
          <Box
            border={"1px solid var(--chakra-colors--motif)"}
            minW={'260px'}
            w={{
              smDown: "100%",
              sm: "100%",
              smToMd: "100%",
              md: "100%",
              mdToLg: "100%",
              lg: "100%",
              lgToXl: "45%",
              xl: "45%",
              xlTo2xl: "45%",
              "2xl": "45%",
            }}
            // h={"full"}
            rounded={"2xl"}
            overflow={"clip"}
          >
            <ProductOfDay data={ProductOfDayData} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
export default PromoBlock;
