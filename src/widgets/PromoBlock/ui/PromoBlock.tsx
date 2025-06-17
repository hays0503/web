"use client";
import { HStack, Text,Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import { PaginationOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { css, Global } from '@emotion/react'
import { MotifColor } from '@/shared/style/theme';

type SlideType = {
    title: string;
    description: string;
    image: string;
}

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

type DeliveryType = {
    days: string | 'next day' | 'today';
    pays: string | 'free' | 'paid';
    selfPickup: boolean;
}

type ProductType = {
    id: number;
    name: string;
    discount: string | null;
    price: string;
    discountPrice: string | null;
    image: string;
    rating: number;
    delivered: DeliveryType;
}

const ProductOfDayData: ProductType[] = [
    {
        id: 1,
        name: 'Product 1',
        discount: '20%',
        price: '$19.99',
        discountPrice: '$24.99',
        image: '/promo/promoSlide2.webp',
        rating: 4.5,
        delivered:{
            days:'next day',
            pays:'free',
            selfPickup: false,
        }
    },
]

export const bulletStyle = css`
  width: 40px;
  height: 10px;
  background-color: ${MotifColor.value.base};
  display: inline-block;
  margin: 0 4px;
  border-radius: 4px;
`;

export const bulletActiveStyle = css`
  background-color: ${MotifColor.value.base};
`;

const pagination: PaginationOptions = {
  clickable: true,
  type: 'bullets',
  renderBullet(index: number, className: string) {
    return `<span class="${className} custom-bullet"></span>`;
  },
};

const Promo: React.FC<{ data: SlideType[] }> = ({ data }) => {
    return (
      <Swiper
        modules={[Pagination]}
        pagination={pagination}
        spaceBetween={10}
        slidesPerView={1}
        autoHeight={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {data.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Box p={"10px"} w={"full"} h={"full"}>
              <Text textStyle="xl">{slide.title}</Text>
              <Text>{slide.description}</Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    );
}

const ProductOfDay: React.FC<{ data: ProductType[] }> = ({ data }) => {
  return (
    <Swiper
      style={{ width: "100%", height: "100%", backgroundColor: "tan" }}
      spaceBetween={10}
      slidesPerView={1}
      autoHeight={true}
    >
      {data.map((product, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${product.image})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
          <Text pos={"absolute"} textStyle="xl" zIndex={1}>
            {product.name}
          </Text>
          <Text pos={"absolute"} zIndex={1}>
            {product.price}
          </Text>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

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
      <HStack
        w={"100%"}
        h={"30dvh"}
        minH={"480px"}
        p={"10px"}
        justify={"center"}
      >
        <HStack
          w={"69%"}
          h={"full"}
          gap={"auto"}
          alignItems="stretch"
          justifyContent="space-between"
        >
          <Box
            bg={"green"}
            w={"55%"}
            h={"full"}
            rounded={"4xl"}
            overflow={"clip"}
          >
            <Promo data={SlideData} />
          </Box>
          <Box
            bg={"yellow"}
            w={"40%"}
            h={"full"}
            rounded={"4xl"}
            overflow={"clip"}
          >
            <ProductOfDay data={ProductOfDayData} />
          </Box>
        </HStack>
      </HStack>
    </>
  );
}
export default PromoBlock;
