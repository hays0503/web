"use client";
import { VStack } from "@chakra-ui/react";
import RecommendChips from "./RecommendChips";
import ProductGrid from "../../../shared/ui/ProductGrid/ProductGrid";


const WeRecommend = () => {
    return (
      <VStack w={"full"} align={"flex-start"} gap={"20px"}>
        <RecommendChips />
        <ProductGrid />
      </VStack>
    );
}

export default WeRecommend;