"use client";
import { VStack } from "@chakra-ui/react";
import RecommendChips from "./RecommendChips";
import ProductGrid from "../../../shared/ui/ProductGrid/ProductGrid";


const WeRecommend = () => {
    return (
      <VStack w={"full"} gap={3} align={"flex-start"}>
        <RecommendChips />
        <ProductGrid />
      </VStack>
    );
}

export default WeRecommend;