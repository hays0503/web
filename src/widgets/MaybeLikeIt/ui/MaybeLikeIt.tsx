"use client";
import { HeaderSCK } from "@/shared/ui";
import { ProductGrid } from "@/shared/ui/ProductGrid";
import { VStack } from "@chakra-ui/react";


const MaybeLikeIt = () => {
    return (
      <VStack w={"full"} align={"flex-start"} bg={'fuchsia'}>
        <HeaderSCK>
            Возможно, вам понравится
        </HeaderSCK>
        <ProductGrid />
      </VStack>
    );
}

export default MaybeLikeIt;