"use client";
import { Flex } from '@chakra-ui/react';
import { css, Global } from '@emotion/react'
import { bulletActiveStyle, bulletStyle } from './SubModule/pagination';
import "swiper/css";
import 'swiper/css/pagination';
import Banner from './Banner';
import DayOffer from './DayOffer';
 
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
      <Flex w={"100%"} minH={"500px"} justify={"center"} bg={'gold'}>
        <Flex
          w={"100%"}
          h={"full"}
          gap={"1%"}
          wrap={"wrap"}
          alignItems="stretch"
          justifyContent="space-between"
        >
          <Banner />
          <DayOffer />
        </Flex>
      </Flex>
    </>
  );
}
export default PromoBlock;
