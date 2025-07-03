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
  return (
    <VStack
      cursor={"grab"}
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
          smToMd: "row",
          md: "row",
          mdToLg: "row",
          lg: "row",
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
          align={{
            base: "flex-start",
            smDown: "center",
          }}
        >
          <Text fontWeight={"500"} lineClamp="2">
            {product.name}
          </Text>
          <Rating product={product} />
          <Delivery />
          <Pickup />
          <Flex
            w={"100%"}
            direction={{
              base: "column",
              smDown: "column",
              sm: "column",
              smToMd: "column",
              md: "column",
              mdToLg: "column",
              lg: "column",
              lgToXl: "column",
              xl: "column",
              xlTo2xl: "column",
              "2xl": "column",
            }}
            align={{ base: "flex-start", smDown: "center" }}
            justify={"space-between"}
          >
            <Cost product={product} />
            <Buttons />
          </Flex>
        </VStack>
        <VStack justify={"stretch"}>
          <HStack w={"100%"} justify={"flex-end"}>
            <Discount product={product} />
          </HStack>
          <PhotoProduct product={product} />
        </VStack>
      </Flex>
    </VStack>
  );
};
export default Slide;