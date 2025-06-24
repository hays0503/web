import { ProductType } from "@/widgets/PromoBlock/type/Promo";
import { Box, Flex, Group, Text } from "@chakra-ui/react";


const Discount: React.FC<{ product: ProductType }> = ({ product }) => {
    return (
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
    );
}

export default Discount;