"use client";
import { ProductGrid } from "@/shared/ui/ProductGrid";
import { Heading, VStack } from "@chakra-ui/react";


const MaybeLikeIt = () => {
    return (
      <VStack w={"full"} align={"flex-start"}>
        <Heading>
            Возможно, вам понравится
        </Heading>
        <ProductGrid />
      </VStack>
    );
}

export default MaybeLikeIt;