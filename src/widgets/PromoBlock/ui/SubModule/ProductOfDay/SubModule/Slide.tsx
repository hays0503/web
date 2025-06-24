import React from "react";
import { ProductType } from "@/widgets/PromoBlock/type/Promo";
import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Discount from "./Discount";
import Rating from "./Rating";
import Delivery from "./Delivery";
import Pickup from "./Pickup";
import Cost from "./Cost";
import Buttons from "./Buttons";
import PhotoProduct from "./PhotoProduct";

const Slide: React.FC<{ product: ProductType }> = ({ product }) => {
  return <VStack
    w={"full"}
    h={"full"}
    p={3}
    alignItems={"center"}
    justifyContent={"flex-start"}
  >
    <HStack justifyContent={"space-between"} w={"full"}>
      <Text>{product.name}</Text>
      <Discount product={product} />
    </HStack>
    <Flex
      w={"100%"}
      h={"100%"}
      justify={"space-between"}
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
        w={"100%"}
        h={"100%"}
        wrap={"wrap"}
      >
        <Rating product={product} />
        <Delivery />
        <Pickup />
        <Cost product={product} />
        <Buttons />
      </VStack>
      <PhotoProduct product={product} />
    </Flex>
  </VStack>;
};
export default Slide;