import { PriceText } from "@/shared/ui";
import { HStack, Show } from "@chakra-ui/react";


const ProductPrice: React.FC<{ price: number, oldPrice?: number }> = ({ price, oldPrice }) => {
    return (
      <HStack justify="center" gap={2} mb={1}>
        <PriceText
          price={price}
          fontWeight="bold"
          fontSize="xl"
          color="purple.600"
        />

        <Show when={oldPrice}>
          <PriceText
            price={oldPrice ?? 0}
            as="s"
            fontSize="sm"
            color="gray.400"
          />
        </Show>
      </HStack>
    );
}
export default ProductPrice