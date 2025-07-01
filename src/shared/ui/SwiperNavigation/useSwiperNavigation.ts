"use client";
import { useEffect, useRef } from "react";
import { SwiperClass } from "swiper/react";

export function useSwiperNavigation(swiper?: SwiperClass) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!swiper || !swiper.params?.navigation) return;

    if (typeof swiper.params.navigation === "object") {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return { prevRef, nextRef };
}