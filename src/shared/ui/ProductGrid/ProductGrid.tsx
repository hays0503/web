"use client";
import ProductCard, { ProductCardProps } from "@/entities/ProductCard/ui/ProductCard";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { useState } from "react";
import { SwiperNavigation } from "../SwiperNavigation/SwiperNavigation";
import { useSwiperNavigation } from "../SwiperNavigation/useSwiperNavigation";

const _products: ProductCardProps[] = [
  {
    image: ["/promo/promoSlide5.webp","/promo/promoSlide5.webp"],
    alt: "Shivald WH",
    title: "Водонагреватель Shivald Sh WH 15 50 (50 л)",
    rating: 5.0,
    reviews: 13,
    price: 42000,
    oldPrice: 58000,
    installment:{
      monthlyPayment: 5500,
      period: 12
    },
    isHit: true,
    bonusLabel: "5%",
  },
  {
    image: ["/promo/promoSlide5.webp","/promo/promoSlide5.webp"],
    alt: "Flama CE3201",
    title: "Кухонная плита Flama CE3201 (белый)",
    rating: 5.0,
    reviews: 13,
    price: 84986,
    installment: {
      monthlyPayment: 8851,
      period: 12
    },
    isHit: true,
    bonusLabel: "7%",
  },
  {
    image: ["/promo/promoSlide5.webp","/promo/promoSlide5.webp"],
    alt: "Стендмебель Сорренто",
    title: "Стендмебель Сорренто (коричневый, бежевый)",
    rating: 5.0,
    reviews: 13,
    price: 59800,
    installment: {
      monthlyPayment: 8964,
      period: 12
    },
    isHit: true,
    bonusLabel: "5%",
  },
  {
    image: ["/promo/promoSlide5.webp","/promo/promoSlide5.webp"],
    alt: "Бирюса 2106X",
    title: "Морозильник Бирюса 2106X (200 л, белый)",
    rating: 5.0,
    reviews: 13,
    price: 98500,
    installment: {
      monthlyPayment: 8703,
      period: 12
    },
    isHit: true,
    bonusLabel: "8%",
  },
  {
    image: ["/promo/promoSlide5.webp","/promo/promoSlide5.webp"],
    alt: "Shivald TC 100",
    title: "Стиральная машина Shivald TC 100",
    rating: 5.0,
    reviews: 13,
    price: 83954,
    installment: {
      monthlyPayment: 5500,
      period: 12
    },
    isHit: true,
    bonusLabel: "5%",
  },
  {
    image: ["/promo/promoSlide5.webp","/promo/promoSlide5.webp"],
    alt: "Leadbros AH-6088",
    title: "Утюг Leadbros AH-6088 (черный)",
    rating: 5.0,
    reviews: 13,
    price: 12000,
    oldPrice: 18000,
    installment: {
      monthlyPayment: 6000,
      period: 3
    },
  },
  {
    image: ["/promo/promoSlide5.webp","/promo/promoSlide5.webp"],
    alt: "Аксион M32.01",
    title: "Мясорубка Аксион M32.01 (белый)",
    rating: 5.0,
    reviews: 13,
    price: 27968,
    installment: {
      monthlyPayment: 1081,
      period: 12
    },
  },
  {
    image: ["/promo/promoSlide5.webp","/promo/promoSlide5.webp"],
    alt: "CENTEK CT1460",
    title: "Шашлычница CENTEK CT1460",
    rating: 5.0,
    reviews: 13,
    price: 17778,
    installment: {
      monthlyPayment: 9844,
      period: 12
    },
  },
  {
    image: ["/promo/promoSlide5.webp","/promo/promoSlide5.webp"],
    alt: "Бирюса WM-SMSI0/04M",
    title: "Стиральная машина Бирюса WM-SMSI0/04M",
    rating: 5.0,
    reviews: 13,
    price: 127953,
    installment: {
      monthlyPayment: 6209,
      period: 12
    },
  },
  {
    image: ["/promo/promoSlide5.webp","/promo/promoSlide5.webp"],
    alt: "Willmark WHO-23D1",
    title: "Фен Willmark WHO-23D1 (2000 Вт)",
    rating: 5.0,
    reviews: 13,
    price: 7442,
    installment: {
      monthlyPayment: 4500,
      period: 12
    },
  },
];

const products: ProductCardProps[] = [..._products, ..._products, ..._products];

const ProductGrid = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass>();
  const showButtons = useBreakpointValue({ base: false, md: true });

  const { prevRef, nextRef } = useSwiperNavigation(swiperInstance);

  return (
    <Box position="relative" w="full" py={2} overflow="visible">
      <SwiperNavigation
        prevRef={prevRef}
        nextRef={nextRef}
        isVisible={!!showButtons}
      />

      <Swiper
        grabCursor
        modules={[Navigation, Grid]}
        onSwiper={setSwiperInstance}
        slidesPerView={5}
        slidesPerGroup={2}
        speed={700}
        spaceBetween={16}
        grid={{ rows: 2, fill: "row" }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          0: { slidesPerView: 2, grid: { rows: 2 } },
          768: { slidesPerView: 3, grid: { rows: 2 } },
          1024: { slidesPerView: 4, grid: { rows: 2 } },
          1280: { slidesPerView: 5, grid: { rows: 2 } },
        }}
      >
        {[...products].map((product, idx) => (
          <SwiperSlide key={idx}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductGrid;