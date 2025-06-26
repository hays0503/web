import React from "react";
import { ProductType } from "@/widgets/PromoBlock/type/Promo";
import { Flex, Text, VStack } from "@chakra-ui/react";
import Discount from "./Discount";
import Rating from "./Rating";
import Delivery from "./Delivery";
import Pickup from "./Pickup";
import Cost from "./Cost";
import Buttons from "./Buttons";
import PhotoProduct from "./PhotoProduct";

const Slide: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <VStack
      w={"full"}
      h={"full"}
      p={3}
      alignItems={"center"}
      justifyContent={"flex-start"}
    >
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
        <VStack w={"100%"} h={"100%"} wrap={"wrap"}>
          <Text fontWeight={"500"} lineClamp="2">
            {product.name}
          </Text>
          <Rating product={product} />
          <Delivery />
          <Pickup />
          <Cost product={product} />
          <Buttons />
        </VStack>
        <VStack>
          <Discount product={product} />
          <PhotoProduct product={product} />
        </VStack>
      </Flex>
    </VStack>
  );
};
export default Slide;