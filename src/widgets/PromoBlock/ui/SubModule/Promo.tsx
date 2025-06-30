import { Swiper, SwiperSlide } from "swiper/react";
import { SlideType } from "../../type/Promo";
import { pagination } from "./pagination";
import { Box, Text } from "@chakra-ui/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";


const Promo: React.FC<{ data: SlideType[] }> = ({ data }) => {
    // const minH = '498px'
    return (
      <Swiper
        modules={[Pagination]}
        pagination={pagination}
        spaceBetween={10}
        slidesPerView={1}
        autoHeight={true}
        style={{
          // minHeight:minH,
          width: "100%",
          height: "100%",
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
            <Box
              p={"10px"}
              w={"full"}
              h={"full"}
              minH={{
                smDown:"200px",
                sm:"350px",
                smToMd:"350px",
              }}
              cursor={"grab"}
              style={{
                backgroundColor: "#a484dc",
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            >
              <Text textStyle="xl">{slide.title}</Text>
              <Text>{slide.description}</Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    );
}


export default Promo