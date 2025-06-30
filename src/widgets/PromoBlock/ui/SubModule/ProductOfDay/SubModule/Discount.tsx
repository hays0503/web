import { ProductType } from "@/widgets/PromoBlock/type/Promo";
import { Box, Flex, Group, Text } from "@chakra-ui/react";


const Discount: React.FC<{ product: ProductType }> = ({ product }) => {
    return (
      <Group rounded={"full"} bg={"Motif"} >
        <Box p={0.5} pl={1} >
          <Text fontWeight={"600"} textStyle={'xl'} color={'WhiteAndBlack'}>Скидка</Text>
        </Box>
        <Flex
          justifyContent={"center"}
          align={"center"}
          bg={"SCKYellow"}
          rounded={"50%"}
          w={"3rem"}
          h={"3rem"}
        >
          <Text fontWeight={"500"}>{product.discount}</Text>
        </Flex>
      </Group>
    );
}

export default Discount;