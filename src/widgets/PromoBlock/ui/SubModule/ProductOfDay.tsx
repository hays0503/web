"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductType } from "../../type/Promo";
import { Box, Button, Flex, Group, Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { pagination } from "./pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { IoIosStar } from "react-icons/io";


const ProductOfDay: React.FC<{ data: ProductType[] }> = ({ data }) => {
  return (
    <VStack
      minW={"266px"}
      w={"full"}
      h={"full"}
      p={3}
      alignItems={"center"}
      justifyContent={"flex-start"}
    >
      <HStack justifyContent={"space-between"} w={"full"}>
        <Heading size="xl" fontWeight={600}>
          Товары дня
        </Heading>
        <HStack>
          <Box bg={"gray.200"} rounded={"xl"} p={2} fontWeight={500}>
            21
          </Box>
          {":"}
          <Box bg={"gray.200"} rounded={"xl"} p={2} fontWeight={500}>
            21
          </Box>
          {":"}
          <Box bg={"gray.200"} rounded={"xl"} p={2} fontWeight={500}>
            21
          </Box>
        </HStack>
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
            <VStack
              w={"full"}
              h={"full"}
              p={0}
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
              <HStack justifyContent={"space-between"} w={"full"}>
                <Text>{product.name}</Text>
                <Group rounded={"full"} bg={"Motif"}>
                  <Box p={2}>
                    <Text fontWeight={"500"}>Скидка</Text>
                  </Box>
                  <Flex
                    justifyContent={"center"}
                    align={"center"}
                    bg={"SCKYellow"}
                    rounded={"50%"}
                    w={"2.5rem"}
                    h={"2.5rem"}
                  >
                    <Text fontWeight={"500"}>{product.discount}</Text>
                  </Flex>
                </Group>
              </HStack>
              <Flex
                w={"100%"}
                h={"100%"}
                justify={"center"}
                gap={"10px"}
                wrap={"nowrap"}
                direction={{
                  smDown: "column-reverse",
                  sm: "column-reverse",
                  smToMd: "column-reverse",
                  md: "column-reverse",
                  mdToLg: "column-reverse",
                  lg: "column-reverse",
                  lgToXl: "row",
                  xl: "row",
                  xlTo2xl: "row",
                  "2xl": "row",
                }}
              >
                <VStack
                  // w={"49%"}
                  h={"100%"}
                  wrap={"wrap"}
                >
                  <HStack w={"100%"} justify={"flex-start"}>
                    <Group gap={1}>
                      <Icon as={IoIosStar} color={"Motif"} size={"xl"} />
                      <Text textStyle={"xl"} fontWeight={500} color={"Motif"}>
                        {product.rating}
                      </Text>
                    </Group>
                    <Text textStyle={"xs"}>10 отзывов</Text>
                  </HStack>
                  <HStack w={"100%"} justify={"flex-start"}>
                    <Group gap={1}>
                      <Icon as={FaTruckFast} color={"Motif"} size={"xl"} />
                      <Text textStyle={"xs"}>Доставка завтра,бесплатно</Text>
                    </Group>
                  </HStack>
                  <HStack w={"100%"} justify={"flex-start"}>
                    <Group gap={1}>
                      <Icon color={"Motif"} size={"xl"} as={ImLocation} />
                      <Text textStyle={"xs"}>Самовызов, сегодня</Text>
                    </Group>
                  </HStack>
                  <VStack w={"100%"} justify={"center"}>
                    <Box position="relative" display="inline-block">
                      <Text textStyle={"xs"} textAlign={"right"}>
                        {product.discountPrice}₸
                      </Text>
                      <Box
                        position="absolute"
                        top="50%"
                        left="0"
                        width="100%"
                        height="1px"
                        bg="gray.800"
                        transform="rotate(-12deg)"
                        transformOrigin="center"
                      />
                    </Box>
                    <Heading size={"xl"} color={"Motif"}>
                      {product.price}₸
                    </Heading>
                  </VStack>
                  <Button rounded="full" bg={"Motif"} w={"80%"} minW={"180px"}>
                    <Group>
                      <Icon
                        as={MdShoppingCart}
                        size={"xl"}
                        color={"WhiteAndBlack"}
                      />
                      <Text color={"WhiteAndBlack"} textStyle={"xl"}>
                        В корзину
                      </Text>
                    </Group>
                  </Button>
                  <Button
                    rounded="full"
                    color={"Motif"}
                    variant="outline"
                    w={"80%"}
                    minW={"180px"}
                  >
                    <Text color={"WhiteAndBlack"} textStyle={"xl"}>
                      Купить в 1 клик
                    </Text>
                  </Button>
                </VStack>
                <Flex
                  position={"relative"}
                  // w={"49%"}
                  h={"100%"}
                  wrap={"wrap"}
                  align={"center"}
                  justify={"center"}
                >
                  <Image src={product.image} h={"250px"} fit="contain" alt={product.name} />
                </Flex>
              </Flex>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  );
}

export default ProductOfDay;