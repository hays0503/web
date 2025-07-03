import { Swiper, SwiperSlide } from "swiper/react";
import { SlideType } from "../../type/Promo";
import { pagination } from "./pagination";
import { Image, useBreakpointValue } from "@chakra-ui/react";
import { Pagination,EffectCreative } from 'swiper/modules';
import 'swiper/css/effect-creative';
import "swiper/css";
import React, { useMemo } from "react";


const Promo: React.FC<{ data: SlideType[] }> = ({ data }) => {
    // const minH = '498px'
    const isMobile = useBreakpointValue({ base: true,
       smToMd: true,
       sm: false
     });

    const renderMobile = useMemo(() => {
      return (
        <Swiper
          modules={[Pagination, EffectCreative]}
          pagination={pagination}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          spaceBetween={10}
          slidesPerView={1}
          style={{
            backgroundColor: "#cccccc",
            width: "90dvw",
            height: "90dvw",
          }}
        >
          {data.map((slide, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "90dvw",
                height: "90dvw",
              }}
            >
              <Image
                src={slide.imageMobile}
                alt={slide.title}
                fit={"contain"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    },[data]) 

    const renderDesktop = useMemo(() => {
      return       <Swiper

        modules={[Pagination, EffectCreative]}
        pagination={pagination}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        spaceBetween={10}
        slidesPerView={1}
        autoHeight={true}
        style={{
          backgroundColor: "#cccccc",
        }}
      >
        {data.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Image

              w={"full"}
              h={"auto"}
              src={slide.image}
              alt={slide.title}
              fit={'contain'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    },[data]) 

    return <>{isMobile ? renderMobile : renderDesktop}</>;
}


export default Promo